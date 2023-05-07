export default class HasScopeQueryMixin {
    protected scopeQueries

    async resetScope() {
      this.scopeQueries = []
    }

    async pushScopeQuery(scopeQuery) {
      this.scopeQueries.push(scopeQuery)
    }

    async applyScopeQueries(query) {
      for (const callback of this.scopeQueries) {
        if (typeof callback === 'function') {
          callback(query)
        }
      }
    }
}
