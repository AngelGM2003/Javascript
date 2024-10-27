function factorial(num){
    if(num == 0){
        return 1;
    }
    if(num>0){
        return num*factorial(num-1);
    }
}

for(i = 1; i<=10; i++){
    document.write(factorial(i) + "</br>");
}