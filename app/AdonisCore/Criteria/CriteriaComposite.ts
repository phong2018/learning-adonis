import Criteria from "App/AdonisCore/Criteria/Criteria";
import Todo from "App/Models/Todo";

export default class CriteriaComposite extends Criteria {
  protected criteriaList

  constructor() {
    super();
    this.criteriaList = [];
  }

  add(criteria) {
    this.criteriaList.push(criteria);
  }

  async applyCriterias(query) {

    // let  todos = query
    // todos = todos.where('id', 1)
    // todos = todos.where('title', 'title3')
    // return todos

    console.log(this.criteriaList)
    for (const criteria of this.criteriaList) {
      // query.where(criteria.attribute, criteria.value)
      console.log(query.constructor.name)
       await criteria.apply(query)
      console.log(query.constructor.name)

    }
    return query;
  }
}
