/*$.ajax({ 
	type: "GET",   
	url: "http://demolaypb.org.br/category/novidades/", 
	headers: { "Origin": "http://www.victorhundo.com" },
	context: "text/html",
	crossDomain: true,
	async: true,
	crossDomain: false,
	success : function(text){
		response = text;
	}
});*/

new $.ajax.Request('http://demolaypb.org.br/category/novidades/',
{
method:'get',
onSuccess:function(transport){
var req = transport.responseText || "Error";
// Variável req contém a resposta de pega_conteudo.php
// Agora se trabalha da forma que quiser com
// os dados que recebeu
// Lembrando que no prototype
// document.getElementById('a') é o mesmo que $('a')
// No caso de mesmo assim o req retornar algum erro
// o tratamento com || (ou) é realizado de sua escolha.
},
onFailure:function(){
// Erro em algum momento na requisição.
// Seria interessante tratar o erro aqui.
}
});





/*$.ajax({

    url: 'https://www.googleapis.com/moderator/v1/series?key='+key,
    data: myData,
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    success: function() { alert("Success"); },
    error: function() { alert('Failed!'); },
    beforeSend: setHeader
});*/