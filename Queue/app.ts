let queue: string[] = [];

//fist int
const enqueue = (element: string) => {
  queue = [element, ...queue];
};

//first out
const dequeue = () => {
  if (queue.length == 0) return;
  queue = queue.splice(0, queue.length - 1);
};

enqueue("1 - first element");
enqueue("2 - second element");
enqueue("3 - third element");

dequeue();

console.log(queue);
