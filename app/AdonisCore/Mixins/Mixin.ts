export default interface Mixin {
  <T extends new (...args: any[]) => {}>(baseClass: T): T;
}
