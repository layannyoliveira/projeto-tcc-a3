function correctionRG(input) {
    //Remove e substitui os caracteres que não são parte do RG
    let rg = input.value.replace(/[^\dxX]/g, '');

    if(rg.length > 9){
        rg = rg.slice(0, 9);
    }

    //Faz a formatação do RG informado
    rg = rg.replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/(\d{2})\.(\d{3})\.(\d{3})([0-9Xx])/, '$1.$2.$3-$4');

    //Insere o rg com as atualizações feitas pela expressão regular
    input.value = rg;
    }

function validationRG(input) {
    let rg = document.getElementById("rg").value;

    //Expressão para verificar se o dado é valido
    let regex = /^\d{2}\.\d{3}\.\d{3}-[0-9Xx]$/;

    let showResultRG = document.getElementById("showResultRG");
    
    //Verifica se o RG segue o padrão da regex
    if (resultRG = regex.test(rg)) {
        showResultRG.textContent = "Válido\u2714\uFE0F";
        showResultRG.style.color = "green";
    } else {
        showResultRG.textContent = "Inválido\u274C";
        showResultRG.style.color = "red";
  }
}


function correctionCPF(input){
    //Remove e substitui os caracteres que não são parte do CPF
    let cpf = input.value.replace(/\D/g, '');
    if(cpf.length > 11){
        cpf = cpf.slice(0, 11);
    }
    //Faz a formatação do CPF informado
    cpf = cpf.replace(/(\d{3})(\d)/,'$1.$2')
            .replace(/(\d{3})\.(\d{3})(\d)/,'$1.$2.$3')
            .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{2})/,'$1.$2.$3-$4');

    //Insere o CPF com as atualizações feitas pela expressão regular
    input.value = cpf;
}

function validationCPF(input){
    let cpf = document.getElementById("cpf").value;

    //Expressão para verificar se o dado é valido
    let regex = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)/;

    let showResultCPF = document.getElementById("showResultCPF");
    
    //Verifica se o CPF segue o padrão da regex
    if(resultCPF = regex.test(cpf)){
        showResultCPF.textContent = "Válido\u2714\uFE0F";
        showResultCPF.style.color = "green";
    }else{
        showResultCPF.textContent = "Inválido\u274C";
        showResultCPF.style.color = "red";
    }
}
function correctionRA(input){
    //Remove e substitui os caracteres que não são parte do RA
    let ra = input.value.replace(/\D/g, '');
    if(ra.length > 9){
        ra = ra.slice(0, 9);
    }
    //Faz a formatação do RA informado enquando o usuario digita
    ra = ra.replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})\.(\d{3})(\d)/,'$1.$2.$3')
    .replace(/(\d{3})\.(\d{3})\.(\d{3})/,'$1.$2.$3');
    
    //Rnsere o RA com as atualizações feitas pela expressão regular
    input.value = ra;
}
function validationRA(input){
    let ra = document.getElementById("ra").value;

    //Expressão para verificar se o dado é valido
    let regex = /(^\d{3}\.\d{3}\.\d{3}$)/;
    let showResultRA = document.getElementById("showResultRA");
    
    //Verifica se o RG segue o padrão da regex
    if(resultRA = regex.test(ra)){
        showResultRA.textContent = "Válido\u2714\uFE0F";
        showResultRA.style.color = "green";
    }else{
        showResultRA.textContent = "Inválido\u274C";
        showResultRA.style.color = "red"
    }
}
function correctionName(input){
    //Remove e substitui os caracteres que não são permitidos em nomes
    let name = input.value.toUpperCase().replace(/[^A-Z\s]/g, '');

    if(name.length > 40){
        name = name.slice(0, 40);
    }

    input.value = name;
}

function corretionGrade(input){
    //Remove e substitui os caracteres que não são permitidos na nota
    let grade = input.value.replace(/\D/g, '')

    if(grade.length > 4){
        grade = grade.slice(0, 4);
    }
    input.value = grade;
}
function validationGrade(input){
    let grade = document.getElementById("grade").value;

    //Expressão para verificar se a nota é valida com limite até 1000, nota maxima do enem
    let regex = /^(0|[1-9][0-9]{0,2}|1000)$/;

    let showResultGrade = document.getElementById("showResultGrade");
    
    //Verifica se a nota segue o padrão da regex
    if(resultGrade = regex.test(grade)){
        showResultGrade.textContent = "Válido\u2714\uFE0F";
        showResultGrade.style.color = "green";
    }else{
        showResultGrade.textContent = "Inválido\u274C";
        showResultGrade.style.color = "red";
    }
}
function correctionPhone(input) {
    //Remove e substitue com '' permitindo apenas numeros
    let phone = input.value.replace(/\D/g, ''); 
    //Limite de 11 dígitos
    if(phone.length > 11) {
        phone = phone.slice(0, 11); 
    }
    //Faz a formatação do telefone informado enquando o usuario digita
    if (phone.length > 10) { 
        phone = phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (phone.length > 5) { 
        phone = phone.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (phone.length > 2) { 
        phone = phone.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    } else if (phone.length > 0) { 
        phone = phone.replace(/(\d{0,2})/, '($1');
    }
    input.value = phone;
}
function validationPhone(input) {
    let phone = input.value;

    //Expressão para verificar se o dado é valido
    let regex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    
    let showResultPhone = document.getElementById("showResultPhone");
    
    //Verifica se o RG segue o padrão da regex
    if (resultPhone = regex.test(phone)) {
        showResultPhone.textContent = "Válido\u2714\uFE0F";
        showResultPhone.style.color = "green";
    } else {
        showResultPhone.textContent = "Inválido\u274C";
        showResultPhone.style.color = "red";
    }
}

function validationEmail(input){
    let email = input.value;
    
    //Expressão para verificar se o dado é valido
    let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    
    let showResultEmail = document.getElementById("showResultEmail");
    
    //Verifica se o RG segue o padrão da regex
    if(resultEmail = regex.test(email)){
        showResultEmail.textContent = "Válido\u2714\uFE0F";
        showResultEmail.style.color = "green";
    } else {
        showResultEmail.textContent = "Inválido\u274C";
        showResultEmail.style.color = "red";
    }
}
function correctionDistrict(input){
    //Remove e substitui os caracteres que não são parte do bairro
    let district = input.value.toUpperCase().replace(/[^A-Z\s]/g, '');

    if(district.length > 40){
        district = district.slice(0, 40);
    }

    //Insere o bairro com as atualizações feitas pela expressão regular
    input.value = district;
}
function correctionStreet(input){
    //Remove e substitui os caracteres que não são parte da rua
    let street = input.value.toUpperCase().replace(/[^A-Z0-9\s]/g, '');

    if(street.length > 40){
        street = street.slice(0,40);
    }
    //Insere a rua com as atualizações feitas pela expressão regular
    input.value = street;
}
function correctionComplement(input){
    //Remove e substitui os caracteres que não são parte do complemento
    let complement = input.value.toUpperCase().replace(/[^A-Z0-9\s]/g, '');

    if(complement.length > 20){
        complement = complement.slice(0,20);
    }

    //Insere o complemento com as atualizações feitas pela expressão regular
    input.value = complement;
}
function correctionCEP(input) {
    //Remove e substitue todos os caracteres não numéricos por ''
    let cep = input.value.replace(/\D/g, ''); 
    
    //Limite do campo a 8 dígitos, tamanho padrão do CEP
    if (cep.length > 8) {
        cep = cep.slice(0, 8); 
    }
    //Faz a formatação do CEP informado enquando o usuario digita
    if (cep.length > 5) {
        cep = cep.replace(/(\d{5})(\d{3})/, '$1-$2'); 
    }
    //Insere o CEP com as atualizações feitas pela expressão regular
    input.value = cep;
}
function validationCEP(input) {
    let cep = input.value;
    
    //Expressão para verificar se o dado é valido
    let regex = /^\d{5}-\d{3}$/;
    let showResultCEP = document.getElementById("showResultCEP");
    
    //Verifica se o CEP segue o padrão da regex
    if (regex.test(cep)) {
        showResultCEP.textContent = "Válido\u2714\uFE0F";
        showResultCEP.style.color = "green";
    } else {
        showResultCEP.textContent = "Inválido\u274C";
        showResultCEP.style.color = "red";
    }
}
function correctionCity(input){
    //Remove e substitui os caracteres que não são permitidos na cidade
    let city = input.value.toUpperCase().replace(/[^A-Z\s]/g, '');

    if(city.length > 20){
        city = city.slice(0,20);
    }
        
    //Insere a cidade com as atualizações feitas pela expressão regular
    input.value = city;
}

document.getElementById("#").addEventListener("submit", function(event) {
    event.preventDefault(); // Para prevenir o envio do formulário

    var nome = document.getElementById("nome").value;
    var RA = document.getElementById("RA").value;
    var date = document.getElementById("date").value;
    var CPF = document.getElementById("CPF").value;
    var RG = document.getElementById("RG").value;
    var nota = document.getElementById("nota").value;
    var email = document.getElementById("email").value;
    var curso = document.getElementById("curso").value;
    var Logadouro = document.getElementById("Logadouro").value;
    var Numero = document.getElementById("Numero").value;
    var Bairro = document.getElementById("Bairro").value;
    var Complemento = document.getElementById("Complemento").value;
    var CEP = document.getElementById("CEP").value;
    var Estado = document.getElementById("Estado").value;
    var Cidade = document.getElementById("Cidade").value;

    console.log("Nome: " + nome);
    console.log("RA: " + RA);
    console.log("Data de Nascimento: " + date);
    console.log("CPF: " + CPF);
    console.log("RG: " + RG);
    console.log("Nota no vestibular: " + nota);
    console.log("Email: " + email);
    console.log("Curso: " + curso);
    console.log("Logadouro: " + Logadouro);
    console.log("Número: " + Numero);
    console.log("Bairro: " + Bairro);
    console.log("Complemento: " + Complemento);
    console.log("CEP: " + CEP);
    console.log("Estado: " + Estado);
    console.log("Cidade: " + Cidade);
});

const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));