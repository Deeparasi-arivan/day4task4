//1)Print odd numbers in an array

/*anonymous  :  function(array){
                  for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
                }
IIFE :       (function(array){
             for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
             })([1,2,3,4])
             
Arrow Function    oddNumbers = (array) => {
                   for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
                        }*/

 /*var result = [];
(function(arr){
    for(var i =0;i<arr.length;i++){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    console.log(result);

})([1,2,3,4,5,6,7,8,9,10]);*/
                        
  // 2)Convert all the strings to title caps in a string array
   
 /*anonymous :   function (str) {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                    return str.join(' ');
                  }
IIFE : (function (str) {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                    return str.join(' ');
                  })("MUDRA IS MY NAME");
 Arrow Function : titleCase = (str) => {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                    return str.join(' ');
                  }  */
                  //method2:

                  
                  /*function titlecase(arr){
                    var res = arr.toString();
                    var data = res.toLowerCase().split("");
                    for (var i =0;i<data.length;i++){
                        data[i]=data[i].charAt(0).toLowerCase()+data[i].slice(1)
                    }
                    return data.join("")
                
                }
                console.log(titlecase(["this is jAVAscript"]))*/        


/*3)Sum of all numbers in an array 
anonymous  :  function(array){
                  var sum = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum = sum + array[i];
                   }
                   return sum;
                }
IIFE :       (function(array){
             var sum = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum = sum + array[i];
                   }
                   return sum;
             })([1,2,3,4])
Arrow:       sum = (array)=>{
             var sum = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum = sum + array[i];
                   }
                   return sum;
                   }
method2:

/* const  array = [1,2,3,4,5,6,7,8,9];
function add (nums)
{
    let sum = 0;
    for(const num of nums)
    {
        sum =sum +num;
    }
    return sum ;

}
console.log(add(array));*/

/*4)Return all the prime numbers in an array
    Anonymous Function:
                 function(numArray){
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  }
   IIFE 
                   (  
                   function(numArray){
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  })([1,2,3,4])
    Arrow Function :
    
       primeNumber = (numArray) => {
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  }
method2:-
/*var result =[];
function prime(arr){
    for(var i=0;i<arr.length;i++)
    {
        var count = 0 ;
        for(var j = 2;j<arr[i];j++)
        {
            if (arr[i]%j===0)
            {
                count = 1;
            }
        }
        if(count===0)
        {
            result.push(arr[i])
        }

    }
    return result ;

}
console.log(prime([1,2,3,4,5,6,7,8,9,10]));*/


                  
//5)  Return all the palindromes in an array:

/*function isPalindrome(N)
    {
        let str = "" + N;
        let len = str.length;
        for (let i = 0; i < parseInt(len / 2, 10); i++)
        {
            if (str[i] != str[len - 1 - i ])
                return false;
        }
        return true;
    }
    
  Anonymous Function :  function (arr, n)
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
    
    IIFE : 

              (  function (arr, n)
        {
            // Traversing each element of the array
            // and check if it is palindrome or not
            for (let i = 0; i < n; i++)
            {
                let ans = isPalindrome(arr[i]);
                if (ans == false)
                    return false;
            }
            return true;
        })([1,2,3] , 3)

Arrow : 
Palindrome = (arr, n) =>
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }*/
    //method2:-
    /*function palindrome(arr)
    {
        var result = [];
        for(var  i =0;i<arr.length;i++)
        {
            var data = arr[i].split("").reverse().join("")
            if(data===arr[i]){
                result.push(arr[i])
            }
        }
   return result
    }
    console.log(palindrome(["dad","mom","data"]));*/


/*Q.Return median of two sorted arrays of same size
Q.Remove duplicates from an Array
Anonymous Function : function(array){
                        let dup = [...new Set(array)];
                        console.log(dup);
                      }
IIFE :                (function(array){
                        let dup = [...new Set(array)];
                        console.log(dup);
                       })([1,1,2,3,4])*/
                       
  //Q.Return median of two sorted arrays of same size:-

/*let arr1 = [1,3,5,7];
let arr2 = [2,4,6,8,9];
function median(arr1 ,arr2)
{
    let arr = [...arr1,...arr2];
    console.log(arr);
    arr.sort((a,b)=>a-b);
    console.log(arr);
    let n = arr.length;
    console.log(n);
    if(n % 2===0){
        return((arr[n/2]+ arr[n-1]/2)/2);
    }
    else
    {
        return arr[Math.floor(n/2)];

    }

}
console.log(median(arr1,arr2));*/

/*g.Remove duplicates from an Array*/
/*function removeDuplicates (){
    books =[
        {title: "c++",author:"Bjarne"},
        {title: "java",author:"James"},
        {title: "python",author:"Guido"},
        {title: "java",author:"James"},

    ];
    JSONObject = books.map(JSON.stringify);
    uniquSet = new Set(JSONObject);
    uniqueArray = Array.from(uniquSet).map(JSON.parse);
    console.log(uniqueArray);
}
console.log(removeDuplicates());*/

/*Q.Rotate an array by K times

function reverse(array , li , ri){
 while(li < ri){
      int temp = a[li];
      a[li]= a[ri];
      a[ri] = temp;
      
      li++;
      ri--;
    }
}*/
/*Anonymous function : function(array , k){
                          k = k % a.length;
                            if(k < 0){
                              k += a.length;
                            }

                            reverse(a, 0, a.length - k - 1);
                            reverse(a, a.length - k, a.length - 1);
                            reverse(a, 0, a.length - 1);
                          }*/
                          
   /*IIFE :   (function(array , k){
                          k = k % a.length;
                            if(k < 0){
                              k += a.length;
                            }

                            reverse(a, 0, a.length - k - 1);
                            reverse(a, a.length - k, a.length - 1);
                            reverse(a, 0, a.length - 1);
                          })([1,2,3,4] , 2)*/