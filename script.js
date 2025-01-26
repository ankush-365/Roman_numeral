document.getElementById("convert-btn").onclick = function(){
let resultElement=document.getElementById("output");
let num=document.getElementById("number").value;

let input=parseInt(num);

if(num==="" || isNaN(input)){
   resultElement.textContent = "Please enter a valid number";
   return;
}
else if(input<1){
    resultElement.textContent = "Please enter a number greater than or equal to 1";
    return;
}
else if(input>=4000){
    resultElement.textContent = "Please enter a number less than or equal to 3999";
    return;
}


resultElement.textContent=roman(input);


}

function roman(input){

    let romanMap = [
       { 
        input: 1000,  numerical: "M"},
       { input: 900, numerical: "CM"},
       { input: 500,  numerical: "D"},
       { input: 400,  numerical: "CD"},
       { input: 100, numerical: "C"},
       { input: 90,  numerical: "XC"},
       { input: 50,  numerical: "L"},
       { input: 40, numerical: "XL"},
       { input: 10,  numerical: "X"},
       { input: 9,  numerical: "IX"},
       { input: 5, numerical: "V"},
       { input: 4,  numerical: "IV"},
       { input: 1,  numerical: "I"},
    
    ]

    let output = "";

    for(let i=0;i<romanMap.length;i++){
        while(input>=romanMap[i].input){
            output+=romanMap[i].numerical;
            input-=romanMap[i].input;
        }
    }
    
    return output;


}

