export default class HasCriteriaMixin {
  protected criteria

  async resetCriteria() {
    this.criteria = []
  }

  async pushCriteria(criteriaArr) {
    for (const criterion of criteriaArr) {
      this.criteria.push(criterion)
    }
  }

  async applyCriteria(query) {
    for (const criterion of this.criteria) {
      criterion.apply(query)
    }

    return this
  }
}

