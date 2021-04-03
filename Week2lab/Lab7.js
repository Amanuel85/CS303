'use strict'

//Question 1: Sum all numbers till the given one
function sumAll(n){
    if (n===1){
        return n
    }
    else{ return n+sumAll(n-1)}
}

console.log(sumAll(100))
/* q2 Use Object literal to create an object named linkedlist which has the followingmethods:
linkedlist.add(1)
➢linkedlist.remove(2) – remove the first one
➢linkedlist.print() – format: LinkedList{ 1, 2, 5, 7 }
*/
var LinkedList = {
    head: null,
    createNode: function(data) {
        return {
            data: data,
            next: null
        };
    },
    add: function(data) {
        var current,
        newNode = this.createNode(data); 
        if(this.head == null) {
            this.head = newNode;
        }
        else {
            current = this.head;
            while(current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    },
    remove: function(data) {
        if(this.head.data == data) {
            this.head = this.head.next;
            return;
        }
        var prev = this.head,
            current = this.head.next;
        
        while(current.data !=null) {
            if(current.data == data) {
                prev.next =current.next;
                return;
            }
            prev = current;
            current = current.next;
        }
    },
    print(){
        console.log(this.head)
    
    }
}
console.log(LinkedList)
LinkedList.add(2)
LinkedList.add(1)
LinkedList.add(3)
LinkedList.add(4)
LinkedList.add(5)
LinkedList.remove(3)
console.log(LinkedList)
LinkedList.print()

