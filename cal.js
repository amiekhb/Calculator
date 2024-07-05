const display = document.getElementById("display");
const numberBtn = document.querySelectorAll(".btnn");
const c = document.querySelector(".c");
const btnOperation = document.querySelectorAll(".operation");
// const plus = document.querySelector(".plus");
// const minus = document.querySelector(".minus");
// const divide = document.querySelector(".divide");
// const multiply = document.querySelector(".multiply");
const equal = document.querySelector(".equal");
// let current = "";
// let previous = "";

//too displayd gargah function
let operator= ""
let a =0
for (let i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener("click", function () {
    console.log("click", numberBtn[i].innerHTML);
    display.textContent += numberBtn[i].innerHTML;

    // current = display.textContent;
    // console.log("current", current);
    // // "1" + "2" , display += "3" 23
    // // display += numberBtn[i].innerHTML; // <div class="con" id=""></div> + "1"
    // const currNumb = Number(current);
    // console.log("current", currNumb);
  });
}
console.log(numberBtn);

// arilgah function
c.addEventListener("click", function () {
  display.textContent = "";
});

// operation darahad prev bolgoj hadgalaad arilgah
for (let i = 0; i < btnOperation.length; i++) {
  btnOperation[i].addEventListener("click", () => {
    operator=btnOperation[i].textContent
    a=display.textContent
    display.textContent = "";
    // previous = current;

    // const prevNumb = Number(previous);
    // console.log("previous", prevNumb);
  });
}
//nemeh function
equal.addEventListener("click", function () {
  let answer = 0;
  if (operator==="+"){
    result= Number(a)+Number(display.textContent);
  }else if (operator==="-"){
    result= Number(a)+Number(display.textContent)
  }
  display.textContent=result
});

// minus.addEventListener("click", function () {});
// divide.addEventListener("click", function () {});
// multiply.addEventListener("click", function () {});
// equal.addEventListener("click", function () {});