const numbers = [7,8,24,61,92,0,24,25];

var zero_count=0;
var even_count=0;
var odd_count=0;

for (let i = 0; i < numbers.length; i++) {
   
    if(numbers[i]==0){
        zero_count = zero_count + 1;
    }

    else if(numbers[i]%2==0){
        even_count = even_count + 1;
    }
    else{
        odd_count = odd_count+1;
    }
    
  }

 console.log("Even Number Count = "+even_count);
 console.log("Odd Number Count= "+odd_count);
 console.log("Zero Count = "+zero_count);