alert("Loaded euler JS")
a =3;
b=5;
n=1000;
sum =0;
for(i = 1;i<=10;i++){
    if(i%3 == 0 || i%5 ==0){
        sum = sum +i;
    }
}
alert("The sum is "+ sum);