import { HasCriteriaMixin } from 'App/AdonisCore/Mixins/HasCriteriaMixin'
import { HasScopeQueryMixin } from 'App/AdonisCore/Mixins/HasScopeQueryMixin'

class BaseRepositoryMixinClass {}
export const BaseRepositoryMixin = HasCriteriaMixin(HasScopeQueryMixin(BaseRepositoryMixinClass));


