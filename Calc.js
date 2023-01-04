function mostFunction(){
    document.getElementById("texto1").innerHTML="Número de habitantes: " + localStorage.getItem("NC");
    document.getElementById("texto2").innerHTML="Número de não eleitores: " + localStorage.getItem("EN");
    document.getElementById("texto3").innerHTML="Número de eleitores obrigatórios: " + localStorage.getItem("ES");
    document.getElementById("texto4").innerHTML="Número de eleitores facultativos: " + localStorage.getItem("EF");
}
var NC, Idade, ES, EN, EF;
NC = 0 + localStorage.getItem("NC");
EN = 0 + localStorage.getItem("EN");
ES = 0 + localStorage.getItem("ES");
EF = 0 + localStorage.getItem("EF");
var button = document.getElementById("cadastrar");
button.onclick = function cadFunction () {
    var Idade = document.getElementById("ncadastro").value;
    if (Idade == "" || Idade == null) {
        document.getElementById('mostra').innerHTML="Dados inválidos!";
    } else
    if (Idade < 16) {
        NC++;
        EN++;
        localStorage.setItem("NC", NC);
        localStorage.setItem("EN", EN);
        document.getElementById('mostra').innerHTML="Cadastro de não eleitor realizado com sucesso!";
        document.getElementById("texto1").innerHTML="Número de habitantes: " + localStorage.getItem("NC");
        document.getElementById("texto2").innerHTML="Número de não eleitores: " + localStorage.getItem("EN");
        document.getElementById("texto3").innerHTML="Número de eleitores obrigatórios: " + localStorage.getItem("ES");
        document.getElementById("texto4").innerHTML="Número de eleitores facultativos: " + localStorage.getItem("EF");
        document.getElementById("ncadastro").value="";
    }
    if (Idade >= 18 && Idade <= 69) {
        NC++;
        ES++;
        localStorage.setItem("NC", NC);
        localStorage.setItem("ES", ES);
        document.getElementById('mostra').innerHTML="Cadastro de elitor (obrigatório) realizado com sucesso!";
        document.getElementById("texto1").innerHTML="Número de habitantes: " + localStorage.getItem("NC");
        document.getElementById("texto2").innerHTML="Número de não eleitores: " + localStorage.getItem("EN");
        document.getElementById("texto3").innerHTML="Número de eleitores obrigatórios: " + localStorage.getItem("ES");
        document.getElementById("texto4").innerHTML="Número de eleitores facultativos: " + localStorage.getItem("EF");
        document.getElementById("ncadastro").value="";
    }
    if (Idade == 16 || Idade == 17 || Idade >= 70) {
        NC++;
        EF++;
        localStorage.setItem("NC", NC);
        localStorage.setItem("EF", EF);
        document.getElementById('mostra').innerHTML="Cadastro de eleitor (facultativo) realizado com sucesso!";
        document.getElementById("texto1").innerHTML="Número de habitantes: " + localStorage.getItem("NC");
        document.getElementById("texto2").innerHTML="Número de não eleitores: " + localStorage.getItem("EN");
        document.getElementById("texto3").innerHTML="Número de eleitores obrigatórios: " + localStorage.getItem("ES");
        document.getElementById("texto4").innerHTML="Número de eleitores facultativos: " + localStorage.getItem("EF");
        document.getElementById("ncadastro").value="";
    }
}
var button = document.getElementById("limpar");
button.onclick = function limpFunction(){
   var confirma = confirm("ATENÇÃO!" + "\nEssa ação irá apagar todos os registros!" + "\nTem certeza que deseja continuar?");
   if (confirma == true){
       localStorage.removeItem("NC");
       localStorage.removeItem("EN");
       localStorage.removeItem("ES");
       localStorage.removeItem("EF");
       document.location.reload(true);
   }
}