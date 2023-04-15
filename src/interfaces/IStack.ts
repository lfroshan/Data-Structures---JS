export interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(pointer: number): T | undefined;
  size(): number;
}