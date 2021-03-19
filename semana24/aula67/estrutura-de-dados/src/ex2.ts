export class Stack{
    constructor(
        public nodes: any[] = []
    ) {}

    public isEmpty = () => this.nodes.length === 0

    public push = (value: any): void => {
        this.nodes.push(value)
    }

    public pop = (): void => {
        const nodeToPop = this.nodes[this.nodes.length - 1]

        this.nodes.length--

        return nodeToPop
    }

    public print = (): void => {
        for(let i = 0; i < this.nodes.length; i++){
            console.log(this.nodes[i])
        }
    }
} 

const olderStack = new Stack()
console.log(olderStack.isEmpty())


const newStack = new Stack([1, 2, 3])

newStack.push(4)
newStack.print()

console.log("nodeToPop:", newStack.pop())
newStack.print()