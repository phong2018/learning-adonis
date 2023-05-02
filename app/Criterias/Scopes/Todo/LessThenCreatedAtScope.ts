import Criteria from "App/AdonisCore/Criterias/Criteria";

export default class LessThenCreatedAtScope implements Criteria {
  async apply(query){
    query.withScopes((scopes) => scopes.lessThenCreatedAt())
  }
}
