import Criteria from "App/AdonisCore/Criterias/Criteria";

export default class RelationsCriteria implements Criteria {
  protected relation
  constructor(relation) {
    this.relation = relation;
  }

  async apply(query) {
    query.preload(this.relation)
  }
}
