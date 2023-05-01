import Criteria from "App/AdonisCore/Criteria/Criteria";

export default class WithUser implements Criteria {
  protected attribute
  protected value
  constructor(attribute, value) {
    this.attribute = attribute;
    this.value = value;
  }

  async apply(query) {
    query.preload('user')
  }
}
