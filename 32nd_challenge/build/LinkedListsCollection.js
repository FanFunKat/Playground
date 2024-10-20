"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListsCollection = void 0;
class LinkedListsCollection {
    constructor(head) {
        this.head = head;
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
}
exports.LinkedListsCollection = LinkedListsCollection;
