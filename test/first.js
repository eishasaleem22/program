// const profile = {
//     userName : "Shraddha Khapra" ,
//     isFollow : false ,
//     posts : 192 ,
//     followers : 234000 ,
//     following : 234 ,
//     bio : "To educate someone is the highest privilege" 
// }

// console.log(profile) ;

// console.log(typeof profile) ;
// console.log(typeof profile["userName"]) ;

// let number = prompt("Enter a number:") ;
// let ans ;
// if(number % 5 == 0 ){
//     ans = "is divisible by 5" ;
// }
// else{
//     ans = "is not divisible by 5" ;
// }

// console.log(number, ans ) ; 

// let score = prompt("Enter Score: ");

// let grade ;

// if(score <= 100 && score >=80){
//     grade = "A" ;
// }
// else if(score >= 70 && score <= 89){
//     grade = "B" ;
// }
// else if(score >= 60 && score <= 69){
//     grade = "C" ;
// }
// else {
//     grade = "F" ;
// }

// console.log("For " , score, " the grade is ",grade) ;

// for(let i = 0 ; i <= 100 ; i++){
//     if(i % 2 == 0){
//         console.log(i , "is even");
//     }
// }

// let number = 25 ;

// let guess = prompt("Enter number : ");

// while(guess != number){

//     console.log("Guess Again ! ");

//     guess = prompt("Enter Number : ");
    
// }

// if(guess == number){
//     console.log("Correct ! You win. ");
// }

// let name = prompt("Enter full name : ");

// let outcome = "@" + name.concat(name.length) ;

// console.log(outcome) ;

// let marks = [85, 97, 44, 37, 76, 60] ;
// let sum = 0 ;

// for(let i = 0 ; i < marks.length ; i++){
//     sum = sum + marks[i] ; 
// }

// let avg = sum / marks.length ;

// console.log("Avg marks are : ", avg) ;


// let prices = [250, 645, 300, 900, 50] ;


// for(let i = 0 ; i < prices.length ; i++){
//     let offer = prices[i] /10 ;
//     prices[i] = prices[i] - offer ;
// }

// console.log(prices) ;

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"] ;

// //companies.shift() ;

// companies.splice(2 , 1 , "OLA") ;

// companies.push("Amazon") ;

// console.log(companies) ;

// let arr = [1, 2, 3, 4, 5] ;

// arr.forEach(function(val){
//     console.log("square of ", val , " is " , val*val );
// })

// arr.map(function print(val){
//     console.log(val) ;
// })

// console.log(document.getElementById("para1"));

// console.log(document.getElementsByClassName("div")[1]);

// console.log(document.getElementsByTagName("p")[0]);

// console.log(document.querySelectorAll(".div")[1]);


// let test = document.getElementsByTagName("ul") ;
// let child = test[0].lastElementChild ;

//console.log(test[0].parentElement.parentElement) ;

// console.log(child.closest("body")) ;

// let text = document.querySelector("h2") ;

// let final = text.innerText + " Apna Clg" ;

// text.innerText = final ;
 
// let arr = document.getElementsByClassName("div") ;

// arr[0].innerText = "helo" ;
// arr[1].innerText = "helooooo" ;
// arr[2].innerText = "helooooooooo" ;



// let test = document.getElementById("div1");




// test.setAttribute("style", "height:100px;width:100px;background-color:red");
// test.style = ""
// test.style.color = "red";
// console.log(test)



// let button1 = document.createElement("button") ;

// button1.style = "width : 80px; height : 50px; background-color : purple ;" ;
// button1.innerText = "Click Me" ;

// let element = document.querySelector("#div") ;

// element.append(button1) ;

// element.prepend(button1) ;

// element.before(button1) ;

// element.after(button1) ;

// button1.remove() ;

// let button = document.createElement("button") ;

// button.innerText = "Click Me" ;

// button.style = "color : red ; background-color : white ;" ;

// let element = document.querySelector("body") ;

// element.append(button) ;



// let element = document.querySelector("p") ;

// element.addEventListener("click", function (){
//     alert("done") ;
// })

// let element = document.querySelector("div") ;

// element.addEventListener("mouseenter", function(){
//     element.style.backgroundColor = "blue" ;
// })

// element.addEventListener("mouseleave", function(){
//     element.style.backgroundColor = "red" ;
// })

// let element = document.querySelector("input") ;

// element.addEventListener("keypress", function(){
//     document.querySelector("#para").innerText = element.value ;
// })



// $.ajax({
//     url : "https://usmanlive.com/wp-json/api/stories",
//     method : "POST",
//     data : {id:'4166', title:'Mock Story 11', content:'new contentnjsdkfjhfhsd'},
//     success(response){
//       check() ; 
//     } ,

//     error(){
//         console.log("Error") ;
//     }
// })

// function check(){
    $.ajax({
        url : "https://usmanlive.com/wp-json/api/stories",
        method : "GET",
        data : {} ,
        success(response){
            console.log(response) ;  
          } ,
      
          error(){
              console.log("Error") ;
          }

    })
// }

/*
$.ajax({
    url : "https://usmanlive.com/wp-json/api/stories/4164",
    method : "PUT" ,
    data : {title:'Mock Story 11', content:'new contentnjsdkfjhfhsd'} ,
    success:function(){
        console.log("Succes");
    },
    error:function(){
        console.log("Error") ;
    }

})*/


$.ajax({
    url : "https://usmanlive.com/wp-json/api/stories/4164",
    method : "PUT" ,
    data : {title:'Mock Story 11', content:'new contentnjsdkfjhfhsd'} ,
    success:function(){
        console.log("Succes");
    },
    error:function(){
        console.log("Error") ;
    }

})