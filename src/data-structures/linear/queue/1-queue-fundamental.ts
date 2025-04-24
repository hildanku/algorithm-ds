/*
 *  Queue
 *  is data structure that has the FIFO (First In First Out) principle
 *
 */

class Queue<T> {
    private items: T[] = []

    enqueue(item: T) {
        this.items.push(item)
    }

    dequeue() {
        this.items.shift()
    }

    peek() {
        return this.items[0]
    }

    display() {
        console.log(this.items)
    }
}

const queue = new Queue<string>();
queue.enqueue('A')
queue.enqueue('b')
queue.enqueue('C')
queue.display()
console.log(queue.dequeue()) // "A"
console.log(queue.peek()) // "B"
queue.display() // Queue: ["B", "C"]
