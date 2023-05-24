
let valor = 45;

arrayOut = ['']
montaArray =(valor, arrayOut) =>{
    for(let i= 1; i <= valor; i++){
        aux = ""
        if(i%5 == 0) aux = "divisivel por 5"
        if(i%9 == 0) aux = aux+"divisivel por 9"
        if(!aux == ""){
            arrayOut.push(aux)
        } else arrayOut.push(i)
    } 
    return arrayOut
        
    }    
    
arrayOut = montaArray(valor, arrayOut)
console.log(arrayOut)
