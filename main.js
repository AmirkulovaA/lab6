function circleArea(r) {
  const PI = 3.14;
  let area = PI * r * r;
  console.log("Circle area is", area);
  return area;
}

function isEvenOrOdd(n) {
  if (n % 2 == 0) {
    console.log(n, "is even");
  } else {
    console.log(n, "is odd");
  }
}

function squareSum(a, b) {
  let sum = a * a + b * b;
  console.log("Sum of squares is", sum);
  return sum;
}

circleArea(5);
isEvenOrOdd(4);
isEvenOrOdd(3);
squareSum(3, 4);
