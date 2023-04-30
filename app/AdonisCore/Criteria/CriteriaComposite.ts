import Criteria from "App/AdonisCore/Criteria/Criteria";

export default class CriteriaComposite implements Criteria {
  protected criteriaList

  constructor() {
    this.criteriaList = [];
  }

  add(criteria) {
    this.criteriaList.push(criteria);
  }

  async apply(query) {
    for (const criteria of this.criteriaList) {
      query = await criteria.apply(query);
    }
    return query;
  }
}
