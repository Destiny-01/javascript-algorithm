// Farenheit to celsius converter

const convertFahrToCelsius = (val) => {
  let value = Number(val);
  let parameter = typeof value;
  console.log(val === "");
  if (val == "" || val == []) {
    console.log("bagain");
    // } else if (val == []) {
    //   console.log("ninm");
    return `${val} is not a valid number but a/an ${parameter}.`;
  } else if (isNaN(value)) {
    value = val;
    parameter = typeof value;
    if (Array.isArray(value) || Array.length === 0) {
      value = `[${val}]`;
      Array.isArray(value);
      if (true) parameter = "array";
    } else if (parameter === "object") {
      value = JSON.stringify(value);
    }
    return `${value} is not a valid number but a/an ${parameter}.`;
  } else if (parameter === "number") {
    const f = ((value - 32) * 5) / 9;
    return f.toFixed(4);
  } else if (val == "") {
    console.log("yess");
  }
};

console.log(convertFahrToCelsius([]));

// convertFahrToCelsius("4");

// checkYuGiOh
const checkYuGiOh = (n) => {
  let no = Number(n);
  if (isNaN(no)) {
    no = n;
    parameter = typeof no;
    if (Array.isArray(no)) {
      no = `[${n}]`;
      Array.isArray(no);
    } else if (parameter === "object") {
      no = JSON.stringify(no);
    }
    return `invalid parameter: "${no}"`;
  } else {
    let arr = new Array();
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
        arr.push("yu-gi-oh");
      } else if (i % 2 === 0 && i % 3 === 0) {
        arr.push("yu-gi");
      } else if (i % 2 === 0 && i % 5 === 0) {
        arr.push("yu-oh");
      } else if (i % 3 === 0 && i % 5 === 0) {
        arr.push("gi-oh");
      } else if (i % 2 === 0) {
        arr.push("yu");
      } else if (i % 3 === 0) {
        arr.push("gi");
      } else if (i % 5 === 0) {
        arr.push("oh");
      } else {
        arr.push(i);
      }
    }
    return arr;
  }
};

console.log(checkYuGiOh([5, 4, 3]));

// // Farenheit to celsius converter

// const convertFahrToCelsius = (val) => {
//   let value = Number(val);
//   let parameter = typeof value;
//   if (parameter === "number") {
//     const f = ((value - 32) * 5) / 9;
//     return f.toFixed(4);
//   } else if (value == []) {
//     let varl = val;
//     if (true) parameter = "array";
//     Array.isArray(varl);
//     console.log(varl + "sty");
//     // if (value.length === 0) {
//     return `[${varl}] is not a valid number but a/an ${parameter}.`;
//   } else if (value == "") {
//     let varl = val;
//     parameter = typeof val;
//     console.log(varl + "sdfghj");
//     // if (value.length === 0) {
//     return `"${varl}" is not a valid number but a/an ${parameter}.`;
//   } else if (isNaN(value)) {
//     value = val;
//     parameter = typeof value;
//     if (Array.isArray(value) || Array.length === 0) {
//       value = `[${val}]`;
//       Array.isArray(value);
//       if (true) parameter = "array";
//     } else if (parameter === "object") {
//       value = JSON.stringify(value);
//     }
//     return `${value} is not a valid number but a/an ${parameter}.`;
//   }
// };
