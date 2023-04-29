export default class BaseService {
  protected repository;
  protected model;
  protected data='ELL1'
  protected handler;
  protected header;

  setData(data) {
    this.data = data
    return this
  }

  setHandler(handler) {
    this.handler = handler
    return this
  }

  setHeader(request) {
    this.header = {
      'app-version': request.header('app-version'),
      origin: request.header('origin', ''),
    }
    return this
  }

  setModel(model) {
    this.model = model
    return this
  }

  getPerPage() {
    return this.data.per_page || 50
  }
}
