function hoist() {
  return "AHOY! HOIST THE FLAGS!";
}

const test = ["foo", "bar", "bizz", "buzz"];

console.log("this", "is", "a", "test", test);

console.log("This is another line");

console.log(hoist());
