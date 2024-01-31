let stack: string[] = [];

//last in
const pushElement = (element: string) => {
  stack = [...stack, element];
};

//fist out
const popElement = () => {
  if (stack.length == 0) return;
  stack = stack.splice(0, stack.length - 1);
};

pushElement("1 - first element");
pushElement("2 - second element");
pushElement("3 - third element");

popElement();

console.log(stack);
