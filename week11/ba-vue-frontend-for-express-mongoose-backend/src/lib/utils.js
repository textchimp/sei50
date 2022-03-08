
// this is a NAMED (not a default) export
const adder = (first, second) => {
  return first + second;
};

const subber = (first, second) => {
  return first - second;
};

const bigNum = 1231234123123123;


// Named exports as a list, at the end
export {adder, subber};

// You can only export ONE default from a file...
// export default adder;
