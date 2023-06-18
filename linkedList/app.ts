type elementType = { value: string; next: elementType | null };

class LinkedList {
  constructor(
    private head: elementType | null = null,
    private tail: elementType | null = null
  ) {}

  append(value: string): void {
    const newElement: elementType = { value, next: null };

    if (!this.head) this.head = newElement;
    if (this.tail) this.tail.next = newElement;

    this.tail = newElement;
  }

  prepend(value: string): void {
    const newElement: elementType = { value, next: this.head };

    if (!this.tail) this.tail = newElement;

    this.head = newElement;
  }

  insertAfter(value: string, afterValue: string): void {
    const existingElement: elementType | null = this.find(afterValue);
    if (existingElement) {
      const newElement: elementType = { value, next: existingElement.next };
      existingElement.next = newElement;
    }
  }

  find(value: string): elementType | null {
    if (!this.head) return null;

    let currentElement: elementType | null = this.head;
    while (currentElement) {
      if (currentElement.value === value) return currentElement;
      currentElement = currentElement.next;
    }

    return null;
  }

  toArray(): elementType[] {
    const elements: elementType[] = [];
    let currentElement: elementType | null = this.head;

    while (currentElement) {
      elements.push(currentElement);
      currentElement = currentElement.next;
    }

    return elements;
  }

  delete(value: string): void {
    if (!this.head) return;
    while (this.head && this.head.value === value) this.head = this.head.next;

    let currentElement: elementType | null = this.head;
    while (currentElement?.next) {
      if (currentElement.next.value === value)
        currentElement.next = currentElement.next.next;
      else currentElement = currentElement.next;
    }

    if (this.tail?.value === value) this.tail = currentElement;
  }
}

const linkedList = new LinkedList();

linkedList.append("item1");
linkedList.append("item2");
linkedList.append("item3");
linkedList.prepend("item0");
linkedList.insertAfter("item1.5", "item1");
linkedList.delete("item3");

console.log(linkedList.find("item2"));
console.log("-----------------------------");
console.log(linkedList.toArray());
