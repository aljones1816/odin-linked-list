class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    }

    remove(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.nextNode;
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode) {
                if (currentNode.nextNode.value === value) {
                    currentNode.nextNode = currentNode.nextNode.nextNode;
                    break;
                }
                currentNode = currentNode.nextNode;
            }
        }
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
    }

    size() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;
    }

    head() {
        return this.head;
    }


    tail() {
        return this.tail;
    }

    at(index) {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (count === index) {
                return currentNode;
            }
            count++;
            currentNode = currentNode.nextNode;
        }
        return null;
    }

    pop() {
        if (!this.head) return;

        if (!this.head.nextNode) {
            this.head = null;
            this.tail = null;
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = null;
            this.tail = currentNode;
        }
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.nextNode;
        }
        return null;
    }

    toString() {
        let result = '';
        let currentNode = this.head;
        while (currentNode) {
            result += currentNode.value + ' -> ';
            currentNode = currentNode.nextNode;
        }
        return result + 'null';
    }

}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}