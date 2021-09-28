var chocolates = [
  "green",
  "green",
  "green",
  "silver",
  "blue",
  "crimson",
  "purple",
  "red",
  "crimson",
  "purple",
  "purple",
  "green",
  "pink",
  "blue",
  "red",
  "silver",
  "crimson",
  "purple",
  "silver",
  "silver",
  "red",
  "green",
  "red",
  "silver",
  "pink",
  "crimson",
  "purple",
  "green",
  "red",
  "silver",
  "crimson",
  "pink",
  "silver",
  "blue",
  "pink",
  "crimson",
  "crimson",
  "crimson",
  "red",
  "purple",
  "purple",
  "green",
  "pink",
  "blue",
  "red",
  "crimson",
  "silver",
  "purple",
  "purple",
  "purple",
  "red",
  "purple",
  "red",
  "blue",
  "silver",
  "green",
  "crimson",
  "silver",
  "blue",
  "crimson",
  "puaddChocolates(chocolates, color, count);",
  "pink",
  "blue",
  "silver",
  "pink",
  "crimson",
  "purple",
  "green",
  "red",
  "blue",
  "red",
  "purple",
  "silver",
  "blue",
  "pink",
  "silver",
  "crimson",
  "silver",
  "blue",
  "purple",
  "purple",
  "green",
  "blue",
  "blue",
  "red",
  "red",
  "silver",
  "purple",
  "silver",
  "crimson",
];

//Progression 1: Add ___ chocolates of ____ color

function addChocolates(chocolates, color, count) {
  if (color <= 0 || count <= 0) return "Number cannot be zero/negative";

  while (count != 0) {
    chocolates.unshift(color);
    count--;
  }
}

//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates, number) {
  if (number <= 0) return "Number cannot be zero/negative";
  if (chocolates.length < number)
    return "Insufficient chocolates in the dispenser";

  let rem = [];
  while (number != 0) {
    rem.push(chocolates.shift());
    number--;
  }
  return rem;
}
//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates, number) {
  if (number <= 0) return "Number cannot be zero/negative";
  if (chocolates.length < number)
    return "Insufficient chocolates in the dispenser";
  var rem = [];
  while (number != 0) {
    rem.push(chocolates.pop());
    number--;
  }
  return rem;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, number, color) {
  if (number <= 0) return "Number cannot be zero/negative";
  if (chocolates.length < number)
    return "Insufficient chocolates in the dispenser";
  var rem = [];
  while (number != 0) {
    rem.push(chocolates.pop());
    number--;
  }
  return rem;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolate) {
  let arr = [];
  if (chocolate.length == 0) return arr;
  else {
    let uniquearr = [...new Set(chocolate)];
    for (const i of uniquearr) {
      let count = 0;
      for (const j of chocolate) {
        if (i === j) count += 1;
      }
      arr.push(count);
    }

    return arr;
  }
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
  if (chocolates.length === 0) return [];
  else {
    result = {};
    for (var i = 0; i < chocolates.length; ++i) {
      if (!result[chocolates[i]]) result[chocolates[i]] = 0;
      ++result[chocolates[i]];
    }
    var keysSorted = Object.keys(result).sort(function(a,b){return result[a]-result[b]})

    return(keysSorted.reverse())
  }
}

//Progression 7: Change ___ chocolates of ____ color to ____ color

function changeChocolateColor(chocolate, number, color, finalcolor) {
  let uniquearr = [...new Set(chocolate)];

  if (chocolate.length == 0) return [];
  else if (number <= 0) return "Number cannot be zero/negative";
  else if (uniquearr.length === 1) {
    if (uniquearr[0] === finalcolor) return "Can't replace the same chocolates";
    else {
      chocolate[0] = finalcolor;
      return chocolate;
    }
  } else {
    for (let index = 0; index < chocolate.length; index++) {
      const element = chocolate[index];
      if (element == color) chocolate[index] = finalcolor;
    }
    return chocolate;
  }
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolate, color, finalcolor) {
  let uniquearr = [...new Set(chocolate)];

  if (chocolate.length === 0) return new Array(0, chocolate);
  else if (uniquearr.length === 1) {
    if (uniquearr[0] === finalcolor) return "Can't replace the same chocolates";
    else {
      chocolate[0] = finalcolor;
      return new Array(1, chocolate);
    }
  } else {
    let count = 0;
    for (let index = 0; index < chocolate.length; index++) {
      const element = chocolate[index];
      if (element === color) {
        chocolate[index] = finalcolor;
        count++;
      }
    }
    return new Array(chocolate.length - count, chocolate);
  }
}

//Challenge 1: Remove one chocolate of ____ color from the top

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function sortChocolateBasedOnCount(chocolates) {
  if (chocolates.length === 0) return [];
  else {
    result = {};
    for (var i = 0; i < chocolates.length; ++i) {
      if (!result[chocolates[i]]) result[chocolates[i]] = 0;
      ++result[chocolates[i]];
    }
  }
}