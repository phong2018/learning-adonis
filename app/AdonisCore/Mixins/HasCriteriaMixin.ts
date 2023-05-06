import Mixin from 'App/AdonisCore/Mixins/Mixin'

export const HasCriteriaMixin: Mixin = (baseClass) => {
  return class extends baseClass {

    protected criteria

    async resetCriteria() {
      this.criteria = []
    }

    async pushCriteria(criteriaArr) {
      for (const criterion of criteriaArr) {
        this.criteria.push(criterion)
      }
    }

    async applyCriteria() {
      for (const criterion of this.criteria) {
        criterion.apply(this.query)
      }

      return this
    }
  };
};
