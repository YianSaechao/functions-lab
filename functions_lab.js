/* 1. Write a function called logMyName that will log your name.  Call this 1 time
2. Write a function called logThisName that will log the name parameter. Call this 2 times. 
3. Write a function called checkName that will check if the name parameter is "Joyce". Call this function 3 times - with "Chase" "Jerry" and "Joyce"
4. Write a function that called doLoop will do a loop that will count from 0-10. Call this function 3 times.
5. Write a function called doLoopWithThisNumber that will do a while loop from 0 until the given number parameter. Call this 5 times with 10, 100, 78, 22, 15
6. Write a function (you make the name) that will add 2 numbers together. Call 3 times.
7. Write a function (you make the name) that will check if the number parameter is even or odd. call 2 times.
10. Write a function (you make the name) that will log the typeof the data parameter. call 1 time
11. Write a function (you make the name) that will do a loop 0-? The loop should end based on the number parameter.  call 2 times. */

/* const doStuff = () => {

}

doStuff(); */

//1
const logMyName = (firstName, lastName) => {
    console.log(firstName, lastName);
}

logMyName("Yian", "Saechao");

//2
const logThisName = (parameter) => {
    console.log(parameter);
}

logThisName("Pookie");
logThisName("Pookie");

//3
const checkName = (name) => {
    if (name === "Joyce"){
      console.log("yay!")
    } else console.log("try again!");
  }
  
  checkName("Chase");
  checkName("Jerry");
  checkName("Joyce");

  //4
  const doLoop = (loop) => {
    for (i = 0; i <= 10; i++) {
      console.log(i);
    }
  }
  
  doLoop();
  doLoop();
  doLoop();

  //5
  const doLoopWithThisNumber = (endNum) => {
    let startNum = 0
    while (startNum <= endNum) {
      console.log(startNum);
      startNum++;
    }
  }
  
  doLoopWithThisNumber(10); 
  doLoopWithThisNumber(100);
  doLoopWithThisNumber(78);
  doLoopWithThisNumber(22);
  doLoopWithThisNumber(15);

  //6
  const sum = (n1, n2) =>{
    console.log(n1 + n2);
  }

  sum(5, 6);
  sum(1, 2);
  sum(10, 15);


