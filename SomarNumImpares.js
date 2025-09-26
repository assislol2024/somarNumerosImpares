let n1 = 55;
let n2 = 20;
let soma=0;

function somarImpares(num1,num2){
    if(num1 > num2){
        for(let i = num1; i >= num2; i--){
            if(i % 2 == 1){
            soma += i
        }
            
        }
        
    }else if(num1 < num2){
        for(let i = num1; i <= num2; i++){
            if(i % 2 == 1){
            soma += i
            }
        }
    }


    
    console.log(soma)
}
somarImpares(n1, n2)