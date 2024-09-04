/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */

 type ListNode = {
    value: number;
    next: ListNode | null;
 }

 function reorderList(head: ListNode | null): void {
    if ( !head) return;


    return void;

};

function findMiddleNode (head: ListNode ): ListNode {
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast?.next?.next;
    }

    return slow;
}

/*
type ListNode = {
    val: number;
    next: ListNode | null;
  }; 
  
  */