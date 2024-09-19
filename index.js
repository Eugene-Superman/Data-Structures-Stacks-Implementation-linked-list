class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top ? this.top.value : this.top;
    }

    push(value) {
        const newValue = new Node(value);
        if (this.isEmpty()) {
            this.bottom = newValue;
            this.top = this.bottom;
        } else {
            newValue.prev = this.top;
            this.top.next = newValue;
            this.top = this.top.next;
        }

        this.length++;
        return this.length;
    }

    pop() {
        if (this.isEmpty()) {
            return this.length;
        }

        this.top = this.top.prev;
        this.top.next = null;


        this.length--;
        return this.length;
    }

    isEmpty() {
        return !this.length
    }
}

const myStack = new Stack();
myStack.push('1');
myStack.push('2');
myStack.push('3');
myStack.push('4');
myStack.pop();
console.log(myStack.peek());
