// Farenheit to celsius converter

const convertFahrToCelsius = (val) => {
  let value = Number(val);
  let parameter = typeof value;
  if (isNaN(value)) {
    value = val;
    let parameter = typeof value;
    if (Array.isArray(value)) {
      value = `[${val}]`;
      Array.isArray(value);
      if (true) parameter = "array";
    } else if (parameter == "object") {
      value = JSON.stringify(value);
    }
    console.log(`${value} is not a valid number but a/an ${parameter}.`);
  } else if (parameter == "number") {
    const f = ((value - 32) * 5) / 9;
    console.log(f);
  }
};

convertFahrToCelsius(0);

// checkYuGiOh

const checkYuGiOh = (n) => {
  let no = Number(n);
  if (isNaN(no)) {
    no = n;
    parameter = typeof no;
    if (Array.isArray(no)) {
      no = `[${n}]`;
      Array.isArray(no);
    } else if (parameter == "object") {
      no = JSON.stringify(no);
    }
    console.log(`invalid parameter: "${no}"`);
  } else {
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
        console.log("yu-gi-oh");
      } else if (i % 2 === 0 && i % 3 === 0) {
        console.log("yu-gi");
      } else if (i % 2 === 0 && i % 5 === 0) {
        console.log("yu-oh");
      } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("gi-oh");
      } else if (i % 2 === 0) {
        console.log("yu");
      } else if (i % 3 === 0) {
        console.log("gi");
      } else if (i % 5 === 0) {
        console.log("oh");
      } else {
        console.log(i);
      }
    }
  }
};

checkYuGiOh(10);
