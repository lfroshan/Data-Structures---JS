import { IStack } from "../interfaces/IStack";

export class Stack<T> implements IStack<T> {
  private stack: Array<T | undefined>;
  private capacity: number;
  private index: number;

  constructor(capacity: number) {
    this.index = -1;
    this.capacity = capacity;
    this.stack = new Array<T>(capacity);
  }

  push(item: T): void {
    if (this.index >= this.capacity - 1) {
      throw new Error("Stack Overflow!");
    }

    this.stack[this.index + 1] = item;
    this.index += 1;
  }

  pop(): T | undefined {
    if (this.index < 0) {
      throw new Error("Stack Underflow!");
    }

    this.stack[this.index] = undefined;
    this.index -= 1;

    return undefined;
  }

  peek(pointer: number): T | undefined {
    if (pointer < 0 || pointer > (this.index + 1)) {
      throw new Error("Cannot Peek the appointed position of stack");
    }
    return this.stack[pointer - 1];
  }

  getStack(): Array<T | undefined> {
    return this.stack;
  }
}
