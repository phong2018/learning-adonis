import Criteria from "App/AdonisCore/Criterias/Criteria";

export default class FilterCriteria implements Criteria {
  protected attribute
  protected value
  constructor(attribute, value) {
    this.attribute = attribute;
    this.value = value;
  }

  async apply(query){
    query.where(this.attribute, this.value)
  }
}
