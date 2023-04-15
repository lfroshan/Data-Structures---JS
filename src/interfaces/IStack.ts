export interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(pointer: number): T | undefined;
  getStack(): Array<T | undefined>;
}