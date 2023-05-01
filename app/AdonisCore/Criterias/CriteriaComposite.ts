import Criteria from "App/AdonisCore/Criterias/Criteria";

export default class CriteriaComposite implements Criteria {
  protected criteriaList

  constructor() {
    this.criteriaList = [];
  }

  add(criteria: Criteria) {
    this.criteriaList.push(criteria);
  }

  async apply(query) {
    for (const criteria of this.criteriaList) {
       await criteria.apply(query)
    }
    return query;
  }
}
