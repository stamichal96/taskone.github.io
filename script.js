function numbers() {
  const nums = new Array();
  const even = new Array();
  const odd = new Array();
  // even = [];
  // odd = [];

  while (nums.length !== 20) {
    nums.push(Math.floor(Math.random() * 100) + 1);
  }

  function compare(a, b) {
    return a - b;
  }

  nums.sort(compare);

  nums.forEach(number);

  function number(item) {
    if (item % 2 == 0) {
      even.push(item);
    } else {
      odd.push(item);
    }
  }
  console.log([...even]);
  console.log([...odd]);

  let evenNumber = "<ul>";
  even.forEach(evenPrint);
  evenNumber += "</ul>";
  document.getElementById("even").innerHTML = evenNumber;

  function evenPrint(value) {
    evenNumber += "<li>" + value + "</li>";
  }

  let oddNumber = "<ul>";
  odd.forEach(oddPrint);
  oddNumber += "</ul>";
  document.getElementById("odd").innerHTML = oddNumber;

  function oddPrint(value) {
    oddNumber += "<li>" + value + "</li>";
  }
}