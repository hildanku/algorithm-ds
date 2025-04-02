class Node<T> {
    value: T
    next: Node<T> | null = null

    constructor(value: T) {
        this.value = value
    }
}

class TicketQueue<T> {

    head: Node<T> | null = null
    tail: Node<T> | null = null

    enqueue(value: T) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = this.tail = newNode
        } else {
            this.tail!.next = newNode
            this.tail = newNode
        }
    }

    dequeue() {
        if (!this.head) {
            return null
        }
        const removedValue = this.head.value
        this.head = this.head.next
        if (!this.head) {
            this.tail = null
        }
        return removedValue
    }

    printQueue() {
        let current = this.head
        let result = ''
        while (current) {
            result += current.value + '->'
            current = current.next
        }
        console.log(result)
    }
}

const q = new TicketQueue<string>()
q.enqueue('Dimas')
q.enqueue('Rio')
q.enqueue('Damar')
q.printQueue()
console.log(q.dequeue())
q.enqueue('Fadly')
q.printQueue()

