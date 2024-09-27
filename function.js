/*create a function to find the sum of all the multiples of a or b below n and
(a,b,n) are function parameters  */
sum =0;
let sum = (a,b,n) => {
    for(i=1;i<n;i++){
        if(i%a ==0 || i%b ==0){
            sum = sum+i;
        }
    }
    return sum;
}