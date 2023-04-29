export default class BaseService {
  protected repository;
  protected model;
  protected data;
  protected handler;
  protected header;

  /**
     * Set the data
     *
     * @return self
     */
   public async setData(data)
   {
       this.data = data
       return this;
   }

   /**
    * Set the handler
    *
    * @return self
    */
   public async setHandler(handler)
   {
       this.handler = handler;

       return this;
   }

   public async setHeader(request)
   {
       this.header = request
       return this;
   }

   /**
    * Set the handler
    *
    * @param \Illuminate\Database\Eloquent\Model|int model
    * @return self
    */
   public async setModel(model)
   {
       this.model = model;

       return this;
   }

   /**
    * Set the request to service
    *
    * @param \Illuminate\Foundation\Http\FormRequest request
    * @return self
    */
   public async setRequest(request)
   {
       this.setHandler(request.user());
       this.setData(request.validated());
       this.setHeader(request);

       return this;
   }

   /**
    * Get default pagination limit
    *
    * @return integer
    */
   protected async getPerPage()
   {
       return this.data['per_page'] ?? 50;
   }

   /**
    * Initialize all of the bootable traits on the model.
    *
    * @return void
    */
   protected async initializeTraits()
   {

   }
}
