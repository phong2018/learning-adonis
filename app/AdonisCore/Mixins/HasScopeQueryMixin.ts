import Mixin from 'App/AdonisCore/Mixins/Mixin'

export const HasScopeQueryMixin: Mixin = (baseClass) => {
  return class extends baseClass {

    protected scopeQueries

    async resetQuery() {
      this.query = this.model.query()
    }

    async resetScope() {
      this.scopeQueries = []
    }

    async pushScopeQuery(scopeQuery) {
      this.scopeQueries.push(scopeQuery)
    }

    async applyScopeQueries() {
      for (const callback of this.scopeQueries) {
        if (typeof callback === 'function') {
          callback(this.query)
        }
      }
    }
  };
};
