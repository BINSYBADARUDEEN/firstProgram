alert("Loaded euler JS")
a =3;
b=5;
n=1000;
sum =0;
for(i = 1;i<n;i++){
    if(i%a == 0 || i%b ==0){
        sum = sum +i;
    }
}
alert("The sum is "+ sum);