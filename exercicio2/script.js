let idade = Number(prompt("Digite sua idade"));

if(idade >= 18){
    alert("Você é maior de idade");
}else{
    alert("Você é menor de idade");
}

let terminouEM = prompt("Você terminou o Ensino Médio? (sim ou não)").toLowerCase();
let cursandoFaculdade;

if(terminouEM === "sim"){
    
    cursandoFaculdade= prompt("Você está cursando alguma faculdade? (sim ou não)").toLowerCase();

    if (cursandoFaculdade === "sim"){
        console.log("Você está cursando faculdade");
    }else {
        console.log("Você não está na faculdade");
    }

} else {
    console.log("Você não concluiu o ensino médio");
}





// let isCursandoOutraFaculdade;

// if(isCursandoOutraFaculdade){
//     alert("Você não está cursando faculdade")
// } else {
//     alert("Você está na faculdade")
// }
