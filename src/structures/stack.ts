import { IStack } from "../interfaces/IStack";

export class Stack<T> implements IStack<T> {
  private stack: Array<T>;
  private capacity: number;
  private index: number;

  constructor(capacity: number) {
    this.index = 0;
    this.capacity = capacity;
    this.stack = new Array<T>(capacity);
  }

  push(item: T): void {
    if (this.stack.length >= this.capacity) {
      throw new Error("Stack Overflow!");
    }

    this.stack[this.index] = item;
    this.index += 1;
  }

  pop(): T | undefined {
    if (this.stack.length <= 0) {
      throw new Error("Stack Underflow!");
    }

    this.index -= 1;

    return undefined;
  }

  peek(pointer: number): T | undefined {
    if (pointer > 0 || pointer > (this.index + 1)) {
      throw new Error("Cannot Peek the appointed position of stack");
    }
    return this.stack[pointer];
  }

  size(): number {
    return this.stack.length;
  }

}