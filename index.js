// Farenheit to celsius converter

const convertFahrToCelsius = (val) => {
  let value = Number(val);
  let vale = val;
  let para = typeof value;
  let parameter = typeof val;
  if (parameter === "number" && !isNaN(value)) {
    const f = ((value - 32) * 5) / 9;
    return f.toFixed(4);
  } else if (isNaN(value)) {
    if (Array.isArray(val) || Array.length == 0) {
      vale = `[${val}]`;
      Array.isArray(vale);
      if (true) parameter = "array";
    } else if (parameter === "object") {
      vale = JSON.stringify(val);
    }
    return `${vale} is not a valid number but a/an ${parameter}.`;
  } else {
    return `"${val}" is not a valid number but a/an ${parameter}.`;
  }
};

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius(""));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ twmo: 0 }));
console.log(convertFahrToCelsius(false));

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
        arr.push(String(i));
      }
    }
    return arr;
  }
};

console.log(checkYuGiOh(10));
