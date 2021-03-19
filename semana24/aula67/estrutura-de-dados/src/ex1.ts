export class LinkedListNode {
    constructor(
       public value: any,
       public next?: LinkedListNode 
    ) {}
 }

export class LinkedList{
    constructor(
        public start?: LinkedListNode 
    ) {}

    public addToTail = (value: any): void => {
        if(!this.start){
            this.start = new LinkedListNode(value)
        } else{
            let currentNode: LinkedListNode = this.start
            while(currentNode && currentNode.next !== undefined){
                currentNode = currentNode.next
            }
            currentNode.next = new LinkedListNode(value)
        }
    }

    public printAll = (): void => {
        let currentNode: LinkedListNode | undefined = this.start
        let i = 1
        while(currentNode !== undefined){
            console.log(currentNode.value)
            currentNode = currentNode.next
            i++
        }
    }
}

const colors: LinkedList = new LinkedList(new LinkedListNode("black"))
colors.addToTail("white")
colors.addToTail("blue")

console.log(JSON.stringify(colors, null, 2))
colors.printAll()
