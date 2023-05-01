import Criteria from "App/AdonisCore/Criteria/Criteria";

export default class ByAttribute extends Criteria {
  protected attribute
  protected value
  constructor(attribute, value) {
    super();
    this.attribute = attribute;
    this.value = value;
  }

  async apply(query){
    query.where(this.attribute, this.value)

    // console.log('vvvvvvvvv')
    // console.log(query.constructor.name)
    // console.log('vvvvvvvvv2')
    // return query
  }
}
