import Criteria from "App/AdonisCore/Criteria/Criteria";

export default class OrderTodo implements Criteria {
  protected attribute
  protected value
  constructor(attribute, value) {
    this.attribute = attribute;
    this.value = value;
  }

  async apply(query) {
    query.orderBy('id', 'desc')
  }
}
