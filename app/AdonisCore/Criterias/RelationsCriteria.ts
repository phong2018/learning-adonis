import Criteria from "App/AdonisCore/Criterias/Criteria";

export default class RelationsCriteria implements Criteria {
  protected relation
  constructor(relation) {
    this.relation = relation;
  }

  async apply(query) {
    let nestedRelations = this.relation.split(".");

    switch (nestedRelations.length) {
      case 1:
        query.preload(nestedRelations[0])
        break;

      case 2:
        query.preload(nestedRelations[0], (query0) => {
          query0.preload(nestedRelations[1])
        })
        break;

      case 3:
        query.preload(nestedRelations[0], (query0) => {
          query0.preload(nestedRelations[1], (query1) => {
            query1.preload(nestedRelations[2])
          })
        })
        break;
      case 4:
        query.preload(nestedRelations[0], (query0) => {
          query0.preload(nestedRelations[1], (query1) => {
            query1.preload(nestedRelations[2], (query2) => {
              query2.preload(nestedRelations[3])
            })
          })
        })
        break;
      case 5:
        query.preload(nestedRelations[0], (query0) => {
          query0.preload(nestedRelations[1], (query1) => {
            query1.preload(nestedRelations[2], (query2) => {
              query2.preload(nestedRelations[3], (query3) => {
                query3.preload(nestedRelations[4])
              })
            })
          })
        })
        break;
    }
  }
}
