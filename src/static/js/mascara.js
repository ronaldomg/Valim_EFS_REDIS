function mascara(o,f){
    try { eval(o.gxoch1); } catch (e) {}
    v_obj=o;
    v_fun=f;
    setTimeout("execmascara()",1);
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}

//============== CPF ================//
function cpf(v){
    v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                             //de novo (para o segundo bloco de números)
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    return v

    return v
}

//============== Só Números ================//
function soNumeros(v){
    return v.replace(/\D/g,"")
    return v.replace(/\d/g,"")
}

//============== Só Números ================//
function nada(v){
    return v.replace(/\D/g,"")
    return v.replace(/\D/g,"")
}

//============== Horas ================//
function horas(v){
    v=v.replace(/\D/g,"")                           //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/,"$1:$2") 
    return v
}

//============== CEP ================//
function cep(v){
    v=v.replace(/\D/g,"")                           //Remove tudo o que não é dígito
    v=v.replace(/^(\d{5})(\d)/,"$1-$2") 
    return v
}

//============== CNPJ ================//
function cnpj(v){
    v=v.replace(/\D/g,"")                           //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/,"$1.$2")             //Coloca ponto entre o segundo e o terceiro dígitos
    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
    v=v.replace(/\.(\d{3})(\d)/,".$1/$2")           //Coloca uma barra entre o oitavo e o nono dígitos
    v=v.replace(/(\d{4})(\d)/,"$1-$2")              //Coloca um hífen depois do bloco de quatro dígitos
    return v
}

//============== CPFCNPJ ================//
function cpfcnpj(v){
    v=v.replace(/\D/g,"")                           //Remove tudo o que não é dígito
    v=v.replace(/^(\d{12})(\d)/,"$1.$2") 
    return v
}

//============== CNPJ BASE ================//
function cnpjbase(v){
    v=v.replace(/\D/g,"")                           //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/,"$1.$2")             //Coloca ponto entre o segundo e o terceiro dígitos
    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
    return v
}

//=============================================== DATA E HORA =======================================================//


//==============   Data   ================//
function data(v){
    v=v.replace(/\D/g,"")                                                                        
    v=v.replace(/(\d{2})(\d)/,"$1/$2")       //Coloca uma barra entre o segundo e terceiro dígito
    v=v.replace(/(\d{2})(\d)/,"$1/$2")       //Coloca uma barra entre o quarto e quinto dígito
    return v
}

//==============   Data   ================//
function mesano(v){
    v=v.replace(/\D/g,"")                                                                        
    v=v.replace(/(\d{2})(\d)/,"$1/$2")       //Coloca uma barra entre o segundo e terceiro dígito
    return v
}

//============== DataHora ================//
function datahora(v){
    v=v.replace(/\D/g,"")                                            
    v=v.replace(/(\d{2})(\d)/,"$1/$2")
    v=v.replace(/(\d{2})(\d)/,"$1/$2")
    v=v.replace(/(\d{8})(\d)/,"$1:$2")
    v=v.replace(/(\d{6})(\d)/,"$1:$2")
    v=v.replace(/(\d{4})(\d)/,"$1 $2")
    return v
}
//============================================== NCM ==================================================//

//============== NCM ================//
function ncm(v) {
    v=v.replace(/\D/g,"")
    v=v.replace(/(\d{2})(\d)/,"$1.$2")
    v=v.replace(/(\d{2})(\d)/,"$1.$2")
    return v
}

//============================================ VALORES COM SINAL ====================================================//

//============== Valor (18,2) =============//
function valorcomsinal(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.999.999.99", type : "reverse", defaultValue : "+000"});
    })(jQuery);*/
}

//============== Valor (5,2) =============//
function valorcomsinal02(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,99", type : "reverse", defaultValue : "+000"});
    })(jQuery);*/
}

//============== Valor (6,2) =============//
function valorcomsinal03(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999", type : "reverse", defaultValue : "+000"});
    })(jQuery);*/
}

//============== Valor (7,2) =============//
function valorcomsinal04(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.9", type : "reverse", defaultValue : "+000"});
    })(jQuery);*/
}

//============== Valor (8,2) =============//
function valorcomsinal05(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.99", type : "reverse", defaultValue : "+000"});
    })(jQuery);*/
}

//============== Valor (9,2) =============//
function valorcomsinal06(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999", type : "reverse", defaultValue : "+000"});
    })(jQuery);*/
}

//============== Valor (10,2) =============//
function valorcomsinal07(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.9", type : "reverse", defaultValue : "+000"});
    })(jQuery);*/
}

//============== Valor (11,2) =============//
function valorcomsinal08(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.99", type : "reverse", defaultValue : "+000"});
    })(jQuery);*/
}

//============== Valor (12,2) =============//
function valorcomsinal09(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.999", type : "reverse", defaultValue : "+000"});
    })(jQuery);*/
}

//============== Valor (13,2) =============//
function valorcomsinal10(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.999.9", type : "reverse", defaultValue : "+000"});
    })(jQuery);*/
}

//============== Valor (14,2) =============//
function valorcomsinal11(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.999.99", type : "reverse", defaultValue : "+000"});
    })(jQuery);*/
}

//============== Valor (15,2) =============//
function valorcomsinal12(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.999.999", type : "reverse", defaultValue : "+000"});
    })(jQuery);*/
}

//============== Valor (16,2) =============//
function valorcomsinal13(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.999.999.9", type : "reverse", defaultValue : "+000"});
    })(jQuery);*/
}

//============== Valor (17,2) =============//
function valorcomsinal14(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.999.999.99", type : "reverse", defaultValue : "+000"});
    })(jQuery);*/
}

//============== Valor (18,4) =============//
function valorcomsinal15(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "9999,999.999.999.9", type : "reverse", defaultValue : "+00000"});
    })(jQuery);*/
}
//============== Valor (7,3) =============//
function valorcomsinal16(obj) {
/*
    (function($) {					
            $(obj).setMask({mask : "999,999", type : "reverse", defaultValue : "+0"});
    })(jQuery);*/
}
//============================================== VALORES SEM SINAL ==================================================//

//============== Valor (18,2) ================//
function valorsemsinal(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.999.999.99", type : "reverse", defaultValue : "000"});
    })(jQuery);*/
}

//============== Valor (5,2) ================//
function valorsemsinal02(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,99", type : "reverse", defaultValue : "000"});
    })(jQuery);*/
}

//============== Valor (6,2) ================//
function valorsemsinal03(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999", type : "reverse", defaultValue : "000"});
    })(jQuery);*/
}

//============== Valor (7,2) ================//
function valorsemsinal04(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.9", type : "reverse", defaultValue : "000"});
    })(jQuery);*/
}

//============== Valor (8,2) ================//
function valorsemsinal05(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.99", type : "reverse", defaultValue : "000"});
    })(jQuery);*/
}

//============== Valor (9,2) ================//
function valorsemsinal06(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999", type : "reverse", defaultValue : "000"});
    })(jQuery);*/
}

//============== Valor (9,3) ================//
function valorsemsinal063(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "999,999.999", type : "reverse", defaultValue : "0000"});
    })(jQuery);*/
}

//============== Valor (10,2) ================//
function valorsemsinal07(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.9", type : "reverse", defaultValue : "000"});
    })(jQuery);*/
}

//============== Valor (11,2) ================//
function valorsemsinal08(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.99", type : "reverse", defaultValue : "000"});
    })(jQuery);*/
}

//============== Valor (12,2) ================//
function valorsemsinal09(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.999", type : "reverse", defaultValue : "000"});
    })(jQuery);*/
}

//============== Valor (13,2) ================//
function valorsemsinal10(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.999.9", type : "reverse", defaultValue : "000"});
    })(jQuery);*/
}

//============== Valor (14,2) ================//
function valorsemsinal11(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.999.99", type : "reverse", defaultValue : "000"});
    })(jQuery);*/
}

//============== Valor (15,2) ================//
function valorsemsinal12(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.999.999", type : "reverse", defaultValue : "000"});
    })(jQuery);*/
}

//============== Valor (16,2) ================//
function valorsemsinal13(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.999.999.9", type : "reverse", defaultValue : "000"});
    })(jQuery);*/
}

//============== ValorSemSinal (17,2) ================//
function valorsemsinal14(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.999.999.99", type : "reverse", defaultValue : "000"});
    })(jQuery);*/
}

//============== Valor (18,4) ================//
function valorsemsinal15(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "9999,999.999.999", type : "reverse", defaultValue : "00000"});
    })(jQuery);*/
}

//============== Valor (18,6) ================//
function valorsemsinal16(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "999999,999.999.999", type : "reverse", defaultValue : "0000000"});
    })(jQuery);*/
}

//============== Valor (18,3) ================//
function valorsemsinal17(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "999,999.999.999.999", type : "reverse", defaultValue : "0000"});
    })(jQuery);*/
}


//============== Valor (16,6) ================//
function valorsemsinal18(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "999999,999.999.999", type : "reverse", defaultValue : "0000000"});
    })(jQuery);*/
}


//============== Valor (17,6) ================//
function valorsemsinal19(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "999999,999.999.999.9", type : "reverse", defaultValue : "0000000"});
    })(jQuery);*/
}

//============== Valor (17,3) ================//
function valorsemsinal20(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "999,999.999.999.9", type : "reverse", defaultValue : "0000"});
    })(jQuery);*/
}

//============== Valor (12,5) ================//
function valorsemsina125(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99999,999.999.999.9", type : "reverse", defaultValue : "000000"});
    })(jQuery);*/
}

//============== ValorSemSinal (17,1) ================//
function valorsemsinal26(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "9,999.999.999.999.99", type : "reverse", defaultValue : "00"});
    })(jQuery);*/
}

//============== Valor (10,6) ================//
function valorsemsinal27(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "999999,999", type : "reverse", defaultValue : "0000000"});
    })(jQuery);*/
}

//============== Valor (3,4) ================//
function valorsemsinal28(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "9999,999", type : "reverse", defaultValue : "00000"});
    })(jQuery);*/
}


//============== Valor (18,0) ================//
function valorsemsinal29(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "999.999.999.999.999", type : "reverse", defaultValue : "0"});
    })(jQuery);*/
}

//============== Valor (3,4) ================//
function valorsemsinal34(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "9999,99", type : "reverse", defaultValue : "00000"});
    })(jQuery);*/
}

//============================================== VALORES ==================================================//
//============== Numérico (18,6) ================//
function numsemsinal186(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "999999,999.999.999.99", type : "reverse", defaultValue : "0000000"});
    })(jQuery);*/
}

//============== Numérico (18,5) ================//
function numsemsinal185(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99999,999.999.999.999", type : "reverse", defaultValue : "000000"});
    })(jQuery);*/
}

//============== Numérico (18,4) ================//
function numsemsinal184(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "9999,999.999.999.999.9", type : "reverse", defaultValue : "00000"});
    })(jQuery);*/
}


//============== Numérico (18,3) ================//
function numsemsinal183(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "999,999.999.999.999.99", type : "reverse", defaultValue : "0000"});
    })(jQuery);*/
}

//============== Numérico (18,2) ================//
function numsemsinal182(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.999.999.999", type : "reverse", defaultValue : "000"});
    })(jQuery);*/
}

//============== Numérico (18,1) ================//
function numsemsinal181(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "9,999.999.999.999.999.9", type : "reverse", defaultValue : "00"});
    })(jQuery);*/
}

//============== Numérico (18,0) ================//
function numsemsinal180(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "999.999.999.999.999.999", type : "reverse", defaultValue : "0"});
    })(jQuery);*/
}

//============== Numérico (18,6) ================//
function numcomsinal186(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "999999,999.999.999.99", type : "reverse", defaultValue : "+0000000"});
    })(jQuery);*/
}

//============== Numérico (18,5) ================//
function numcomsinal185(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99999,999.999.999.999", type : "reverse", defaultValue : "+000000"});
    })(jQuery);*/
}

//============== Numérico (18,4) ================//
function numcomsinal184(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "9999,999.999.999.999.9", type : "reverse", defaultValue : "+00000"});
    })(jQuery);*/
}


//============== Numérico (18,3) ================//
function numcomsinal183(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "999,999.999.999.999.99", type : "reverse", defaultValue : "+0000"});
    })(jQuery);*/
}

//============== Numérico (18,2) ================//
function numcomsinal182(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "99,999.999.999.999.999", type : "reverse", defaultValue : "+000"});
    })(jQuery);*/
}

//============== Numérico (18,1) ================//
function numcomsinal181(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "9,999.999.999.999.999.9", type : "reverse", defaultValue : "+00"});
    })(jQuery);*/
}

//============== Numérico (18,0) ================//
function numcomsinal180(obj) {
/*
    (function($) {
            $(obj).setMask({mask : "999.999.999.999.999.999", type : "reverse", defaultValue : "+0"});
    })(jQuery);*/
}



//============================================== CÓDIGO DE BARRAS ==================================================//
//============== Código de Barras (1 dígitos) ================//
function codigobarras01(obj) {

    (function($) {
            $(obj).setMask({mask : "9", type : "", defaultValue : ""});
    })(jQuery);
}

//============== Código de Barras (5 dígitos) ================//
function codigobarras05(obj) {

    (function($) {
            $(obj).setMask({mask : "99999", type : "", defaultValue : ""});
    })(jQuery);
}

//============== Código de Barras (6 dígitos) ================//
function codigobarras06(obj) {

    (function($) {
            $(obj).setMask({mask : "999999", type : "", defaultValue : ""});
    })(jQuery);
}

//============== Código de Barras (11 dígitos) ================//
function codigobarras11(obj) {

    (function($) {
            $(obj).setMask({mask : "99999999999", type : "", defaultValue : ""});
    })(jQuery);
}

//============== Código de Barras (14 dígitos) ================//
function codigobarras14(obj) {

    (function($) {
            $(obj).setMask({mask : "99999999999999", type : "", defaultValue : ""});
    })(jQuery);
}



//============================================== CONTROLE PORTARIA ==================================================//

//============== Titular/Dependente ================//
function titulardep(obj) {

    (function($) {
            $(obj).setMask({mask : "99.999999", type : "reverse", defaultValue : "000"});
    })(jQuery);
}


function ncm(v) {
    v=v.replace(/\D/g,"")
    v=v.replace(/(\d{2})(\d)/,"$1.$2")
    v=v.replace(/(\d{2})(\d)/,"$1.$2")
    return v
}

function classfluxo(v){
   var masc = "" 
   v=v.replace(/\D/g,"")
   masc = masc + v.substr(0,1);
   masc = masc + v.substr(1,1);
   if (v.length > 2) masc = masc + ".";
   masc = masc + v.substr(2,1);
   masc = masc + v.substr(3,1);
   if (v.length > 4) masc = masc + ".";
   masc = masc + v.substr(4,1);
   masc = masc + v.substr(5,1);
   v = masc;
   return v
}
