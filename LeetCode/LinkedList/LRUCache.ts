// class _Node {
//   key: number;
//   val: number;
//   prev: number | null;
//   next: number | null;

//   constructor(key: number = 0, val: number = 0, prev?: null, next?: null) {
//     this.key = key;
//     this.val = val;
//   }
// }

// type HashMap = {
//   key: number;
//   value: _Node;
// };

class LRUCache extends Map<number, number> {
  capacity: number;
  // cache: HashMap;

  constructor(capacity: number) {
    super();
    this.capacity = capacity;
  }

  get(key: number): number {
    if (super.has(key)) {
      const value = super.get(key);
      super.delete(key);
      super.set(key, value!);
      return value!;
    }

    return -1;
  }

  put(key: number, value: number): void {
    if (super.has(key)) super.delete(key);
    super.set(key, value);

    if (super.size > this.capacity) super.delete(super.keys().next().value);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 Better solution

 class LRUCache {
  cache: Map<number, LinkedListItem>;
  capacity: number;
  lruList: LinkedList;

  constructor(capacity: number) {
    this.cache = new Map();
    this.capacity = capacity;
    this.lruList = new LinkedList();
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }
    const item = this.cache.get(key) as LinkedListItem;
    this.lruList.deleteItem(item);
    const newItem = this.lruList.insertAtEnd(key, item.value);
    this.cache.set(key, newItem);
    return newItem.value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.get(key);
      const item = this.cache.get(key) as LinkedListItem;
      item.value = value;
      return;
    }
    if (this.cache.size >= this.capacity) {
      const deletedItem = this.lruList.deleteAtBeginning();
      if (deletedItem) {
        this.cache.delete(deletedItem.key);
      }
    }
    const item = this.lruList.insertAtEnd(key, value);
    this.cache.set(key, item);
  }
}

interface LinkedListItem {
  nextItem: LinkedListItem | null;
  prevItem: LinkedListItem | null;
  key: number;
  value: number;
}

class LinkedList {
  firstItem: LinkedListItem | null = null;
  lastItem: LinkedListItem | null = null;

  insertAtEnd(key: number, value: number): LinkedListItem {
    const newItem: LinkedListItem = {
      key,
      value,
      nextItem: null,
      prevItem: null,
    };
    if (this.lastItem) {
      this.lastItem.nextItem = newItem;
      newItem.prevItem = this.lastItem;
      this.lastItem = newItem;
      return newItem;
    }
    this.firstItem = newItem;
    this.lastItem = newItem;
    return newItem;
  }

  deleteItem(item: LinkedListItem): void {
    const prevItem = item.prevItem;
    const nextItem = item.nextItem;
    item.nextItem = null;
    item.prevItem = null;
    if (prevItem) {
      prevItem.nextItem = nextItem;
    }
    if (item === this.lastItem) {
      this.lastItem = prevItem;
    }
    if (nextItem) {
      nextItem.prevItem = prevItem;
    }
    if (item === this.firstItem) {
      this.firstItem = nextItem;
    }
  }

  deleteAtBeginning(): LinkedListItem | null {
    if (!this.firstItem) {
      return null;
    }
    const oldFirstItem = this.firstItem;
    const newFirstItem = this.firstItem.nextItem;
    if (newFirstItem) {
      newFirstItem.prevItem = null;
    }
    this.firstItem = newFirstItem;
    oldFirstItem.nextItem = null;
    if (this.lastItem === oldFirstItem) {
      this.lastItem = newFirstItem;
    }
    return oldFirstItem;
  }
}


 */
