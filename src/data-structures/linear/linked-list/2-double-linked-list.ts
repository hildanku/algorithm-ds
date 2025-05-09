class Node<T> {
    value: T
    next: Node<T> | null = null
    prev: Node<T> | null = null

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
            newNode.prev = this.tail
            this.tail = newNode
        }
    }

    dequeue() {
        if (this.head) {
            return null
        }
        const removedValue = this.head.value
        this.head = this.head.next
        if (this.head) {
            this.head.prev = null
        } else {
            this.tail = null
        }
        return removedValue
    }

    printQueue() {
        let current = this.head
        let result = ''
        while (current) {
            result += current.value + ' <-> '
            current = current.next
        }
        console.log(result + 'null')
    }

    printReverse() {
        let current = this.tail
        let result = ''
        while (current) {
            result += current.value + ' <-> '
            current = current.prev
        }
        console.log(result + 'null')
    }
}


const q = new TicketQueue<string>()
q.enqueue('Dimas')
q.enqueue('Rio')
q.enqueue('Damar')
q.printQueue()       // Dimas <-> Rio <-> Damar <-> null
console.log(q.dequeue()) // Hapus 'Dimas'
q.enqueue('Fadly')
q.printQueue()       // Rio <-> Damar <-> Fadly <-> null
q.printReverse()     // Fadly <-> Damar <-> Rio <-> null
