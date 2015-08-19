var json = angular.module('demolaypb', []);

json.controller('eventos', function($scope){

	$scope.eventos = [
		{ 
            "nome": "Congresso",
            "cidade" : "Picuí",
            "img" : "eventos/congresso.jpg",
            "informacoes": [
                    "",
                ],
        },

        { 
            "nome": "Epoc",
            "cidade" : "Cajazeiras",
            "img" : "eventos/epoc.jpg",
            "informacoes": [
                    "22, 23 e 24 de maio de 2015",
                ],
        },

        { 
            "nome": "CONAMESCO",
            "cidade" : "Alagoa Grande",
            "img" : "eventos/conamesco.jpg",
            "informacoes": [
                    "",
                ],
        },

        { 
            "nome": "Encontro do Malhete",
            "cidade" : "Guarabira",
            "img" : "eventos/em.jpg",
            "informacoes": [
                  "",
                ],
        },

	]
     
})