let numberArray=[1,2,3,4,5,6,7,8,9,10,12,15];

function fizzBuzz(anArray){
   for (let i=0; i<anArray.length; i++ ){
       if(anArray[i]%3==0 && anArray[i]%5==0){
            console.log("FizzBuzz")
        }else if (anArray[i]%3==0){
            console.log("fizz")
        }else if(anArray[i]%5==0){
            console.log("Buzz")
        }else{
            console.log(anArray[i])
        }
            }
}

fizzBuzz(numberArray)