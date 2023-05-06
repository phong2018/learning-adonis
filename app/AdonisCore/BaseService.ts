import OrderCriteria from "App/AdonisCore/Criteria/OrderCriteria";
import RelationsCriteria from "App/AdonisCore/Criteria/RelationsCriteria";

export default class BaseService {
  protected repository
  protected model
  protected data
  protected handler
  protected header

  setData(data) {
    this.data = data
    return this
  }

  setHandler(handler) {
    this.handler = handler
    return this
  }

  setHeader(request) {
    this.header = {
      'app-version': request.header('app-version'),
      origin: request.header('origin', ''),
    }
    return this
  }

  setModel(model) {
    this.model = model
    return this
  }

  getPerPage() {
    return this.data.per_page || 50
  }

  getOrdersCriteria(allowOrdersArr: string[]= []) {
    if (!this.data.order) {
      return []
    }
    let ordersCriteria = Array<OrderCriteria>();
    let arrOrders = this.data.order.split(",");

    for (let i = 0; i < arrOrders.length; i++) {
      if (arrOrders[i][0] == '-') {
        if (allowOrdersArr.includes(arrOrders[i].substr(1))) {
          ordersCriteria.push(new OrderCriteria(arrOrders[i].substr(1), 'desc'))
        }
      }
      else {
        if (allowOrdersArr.includes(arrOrders[i])) {
          ordersCriteria.push(new OrderCriteria(arrOrders[i], 'asc'))
        }
      }
    }
    return ordersCriteria
  }

  getRelationsCriteria(addRelationsArr : string[] = []) {
    if (!this.data.with) {
      return []
    }
    let relationsCriteria = Array<RelationsCriteria>();
    let arrRelations = this.data.with.split(",");

    for (let i = 0; i < arrRelations.length; i++) {
      if (addRelationsArr.includes(arrRelations[i])) {
        relationsCriteria.push(new RelationsCriteria(arrRelations[i]))
      }
    }
    return relationsCriteria
  }
}
