import Criteria from "App/AdonisCore/Criteria/Criteria";

export default class FilterCriteria implements Criteria {
  protected attribute
  protected value

  constructor(attribute, value) {
    this.attribute = attribute;
    this.value = value;
  }

  async apply(query){
    return query.where(this.attribute, this.value)
  }
}
