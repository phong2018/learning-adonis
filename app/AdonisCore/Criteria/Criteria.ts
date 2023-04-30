export default interface Criteria {
  apply(query: any): Promise<any>;
}


