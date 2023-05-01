import OrderCriteria from "App/AdonisCore/Criterias/OrderCriteria";
import RelationsCriteria from "App/AdonisCore/Criterias/RelationsCriteria";

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

  allowOrders() {
    if (!this.data.order) {
      return []
    }
    let orders = Array<OrderCriteria>();
    let arrOrders = this.data.order.split(",");

    for (let i = 0; i < arrOrders.length; i++) {
      if (arrOrders[i][0] == '-') {
        orders.push(new OrderCriteria(arrOrders[i].substr(1), 'desc'))
      }
      else {
        orders.push(new OrderCriteria(arrOrders[i], 'asc'))
      }
    }
    return orders
  }

  allowRelations() {
    if (!this.data.with) {
      return []
    }
    let relations = Array<RelationsCriteria>();
    let arrRelations = this.data.with.split(",");

    for (let i = 0; i < arrRelations.length; i++) {
      relations.push(new RelationsCriteria(arrRelations[i]))
    }
    return relations
  }
}
