import Criteria from "App/AdonisCore/Criteria/Criteria";

export default class ByAttribute implements Criteria {
  protected attribute
  protected value
  constructor(attribute, value) {
    this.attribute = attribute;
    this.value = value;
  }

  async apply(query) {
    return query.whereLike(this.attribute, "%" + this.value + "%");
  }
}
