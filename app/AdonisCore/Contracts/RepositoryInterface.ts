export default interface RepositoryInterface {
  /**
   * Find record by id
   *
   * @param id
   * @param columns
   */
  find(id: any, columns: any[]): Promise<any>;

  /**
   * Get first record of repository
   *
   * @param columns
   */
  first(columns: any[]): Promise<any>;

  /**
   * Retrieve first data by multiple fields
   *
   * @param where
   * @param columns
   */
  firstWhere(where: any, columns: any[]): Promise<any>;

  /**
   * Retrieve first or fail data by multiple fields
   *
   * @param where
   * @param columns
   */
  firstOrFailWhere(where: any, columns: any[]): Promise<any>;

  /**
   * Get all data of repository
   *
   * @param columns
   */
  all(columns: any[]): Promise<any>;

  /**
   * Get data of repository by pagination
   *
   * @param limit
   * @param columns
   */
  paginate(curr_page: number, limit: number, columns: any[]): Promise<any>;

  /**
   * Get data of repository by pagination
   *
   * @param limit
   * @param columns
   */
  simplePaginate(limit: number, columns: any[]): Promise<any>;

  /**
   * Get all data of repository by field
   *
   * @param field
   * @param value
   * @param columns
   */
  findByField(field: string, value: any, columns: any[]): Promise<any>;

  /**
   * Get all data of repository by condition
   *
   * @param columns
   */
  findWhereIn(field: string, value: any[], columns: any[]): Promise<any>;

  /**
   * Create new model
   *
   * @param attributes
   */
  create(attributes: any): Promise<any>;

  /**
   * Update the existed model
   *
   * @param id
   * @param attributes
   */
  update(id: any, attributes: any): Promise<any>;

  /**
   * Remove the existed model
   *
   * @param id
   */
  delete(id: any): Promise<boolean>;

  /**
   * Insert new records
   *
   * @param values
   */
  insert(values: any[]): Promise<boolean>;
}
