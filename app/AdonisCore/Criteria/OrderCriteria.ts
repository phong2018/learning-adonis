import Criteria from "App/AdonisCore/Criteria/Criteria";

export default class OrderCriteria implements Criteria {
  protected attribute
  protected order
  constructor(attribute, order) {
    this.attribute = attribute;
    this.order = order;
  }

  async apply(query) {
    query.orderBy(this.attribute, this.order)
  }
}
