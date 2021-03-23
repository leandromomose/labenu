import { LinkedList, LinkedListNode } from "./ex1";

export class Queue {
    constructor(
        public items: LinkedList = new LinkedList
    ) {}

    public isEmpty = (): boolean => this.items.start === null

    public enqueue = (value: any): void => this.items.addToTail(value)

    public dequeue = (): LinkedListNode | null => {
        if(this.items.start === null) return null

        const removedItem: LinkedListNode | null = this.items.start!

        this.items.start = this.items.start?.next

        return removedItem
    }

    public print = (): void => {
        this.items.printAll()
    } 
}

const requests = new Queue()
console.log(requests.isEmpty());

requests.enqueue("request1")
requests.enqueue("request2")
requests.enqueue("request3")
requests.print()

const removedRequest = requests.dequeue()

console.log(JSON.stringify(requests, null, 2));
console.log({removedRequest});

requests.print()