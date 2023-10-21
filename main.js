// Sample array of names
var names = ["John", "Jane", "Bob", "Alice", "Jack"];

// Loop through the names
for (var i = 0; i < names.length; i++) {
  var name = names[i];
  // Check if the name starts with 'J' or 'j'
  if (name.charAt(0) === 'J' || name.charAt(0) === 'j') {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}
