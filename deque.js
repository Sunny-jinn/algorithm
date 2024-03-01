//!FEAT: DEQUE

class Deque {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }

  pushFront(v) {
    if (this.arr[0]) {
      for (let i = this.arr.length; i > 0; i--) {
        this.arr[i] = this.arr[i - 1];
      }
    }
    this.arr[this.head] = v;
    this.tail++;
  }

  pushBack(v) {
    this.arr[this.tail++] = v;
  }

  popFront() {
    if (this.head >= this.tail) return null;
    else return this.arr[this.head++];
  }

  popBack() {
    if (this.head >= this.tail) return null;
    else return this.arr[--this.tail];
  }
}

let deque = new Deque();
deque.pushFront(1); // arr: [1] head: 0 tail: 1
deque.pushFront(2); // arr: [2, 1] head: 0 tail: 2
console.log(deque.popFront()); // 2, head: 1 tail: 2
deque.pushFront(3); // arr: [2, 3, 1] head: 1 tail: 3
console.log(deque.popFront()); // 3, head: 2 tail: 3
console.log(deque.popFront()); // 1, head: 3 tail: 3
console.log(deque.popFront()); // null
deque.pushBack(5); // arr: [5] head: 3 tail: 4
// 실제 배열 출력은 arr: [2, 3, 1, 5] 이지만 배열 요소 2, 3, 1은 popFront()를 하였기에 shift()가 된 요소로 생각할 수 있다.
console.log(deque.popBack()); // 5, head: 3 tail: 3
console.log(deque.popBack()); // null
deque.pushBack(6); // arr: [6] head: 3 tail: 4
// 실제 배열 출력은 arr: [2, 3, 1, 6] 이지만 배열 요소 2, 3, 1 은 popFront()를 하였기에 shift()가 된 요소로, 배열 요소 5는 popBack()을 실행해서 pop()가 된 요소로 생각할 수 있다.
deque.pushFront(9); // arr: [9, 6] head: 3 tail: 5
