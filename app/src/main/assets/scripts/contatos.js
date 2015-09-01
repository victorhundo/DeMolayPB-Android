var json = angular.module('demolaypb', []);

json.controller('contatos', function($scope){

    $scope.click = false;   
	$scope.gabinete = [
		{ 
            "nome": "Ícaro Stéfano da Nóbrega Souza",
            "cargo" : "Mestre Cons. Estadual",
            "img" : "gabinete/mc.jpg",
            "telefone1": "9944-7277",
            "telefone2": "",
            "email": "icaronobrega09@gmail.com",
        },

        { 
            "nome": "João Vitor Silveira Barbosa de Almeida",
            "cargo" : "Mestre Cons. Estadual Adj.",
            "img" : "gabinete/mca.jpg",
            "telefone1": "9961-1807",
            "telefone2": "",
            "email": "joaovitorpaulista@gmail.com",
        },

        { 
            "nome": "Jacinto Henrique dos Santos",
            "cargo" : "Secretário",
            "img" : "gabinete/sec.jpg",
            "telefone1": "9990-1173",
            "telefone2": "",
            "email": "jacinto.richard@hotmail.com",
        },

        { 
            "nome": "Vinicius Souza Abreu",
            "cargo" : "Tesoureiro",
            "img" : "gabinete/tes.jpg",
            "telefone1": "9144-5363",
            "telefone2": "",
            "email": "vinycius_pb@hotmail.com",
        },

	]

	$scope.oficiais = [

        { 
            "nome": "Murilo Cerqueira Doria",
            "cargo" : "1º Região",
            "img" : "oficiais/1r.jpg",
            "telefone1": "9 8803-2162",
            "telefone2": "9 9821.1353",
            "email": "murilodoria@gmail.com",
            "informacoes" : [ "Capítulos dessa região:", "João Pessoa", "Branca Dias","Ernani Siqueira", "Filhos do Imperador","Defensores do Rio Vermelho", "União do Vale do Paraíba"],
        },

        { 
            "nome": "Leonardo Gomes Duarte",
            "cargo" : "2º Região",
            "img" : "oficiais/2r.jpg",
            "telefone1": "9 8815.6169",
            "telefone2": "9 9900.8884",
            "email": "leonardo_demolay@hotmail.com",
            "informacoes" : [ "Capítulos dessa região:", "Deus, Pátria e Família", "Ven. Luiz Gonzaga da Costa", "Guardiões da Fênix", "Cavalheiros de Belém", "União do Brejo", "Príncipes dos Cariris", "Águia de Haya", "Templários de Piemont"],
        },

        { 
            "nome": "Sidney Gomes da Rocha",
            "cargo" : "3º Região",
            "img" : "oficiais/3r.jpg",
            "telefone1": "9 8794-8078",
            "telefone2": "9 9913-0410",
            "email": "sid_fisica@hotmail.com",
            "informacoes" : [ "Capítulos dessa região:", "Pedro Félix de Lucena", "Ivon Leite Azevedo", "Guardiões das Virtudes Paulistenses", "Ariosvaldo Alves de Almeida", "Rendenção Sãobentense", "Iraildo Liberal Bezerra",  "GM. Romildo Dias de Tolêdo",  "Guardiões do Templo Sagrado" ],
        },

        { 
            "nome": "Jonattas Cavalcante Alves Viana",
            "cargo" : "4º Região",
            "img" : "oficiais/4r.jpg",
            "telefone1": "9 9851-4839",
            "telefone2": "9 9354-8558",
            "email": "jonattascav@gmail.com",
            "informacoes" : [ "Capítulos dessa região:", "Príncipe da Paz", "Belém do Arrojado", "Defensores do Vale e da Liberdade", "Cavaleiros do Rio do Peixe", ],
        },
	]

	$scope.gce = [

		{ 
            "nome": "Ivan de Sousa Lucena",
            "cargo" : "Grande Mestre",
            "img" : "gce/gm.jpg",
            "telefone1": "9 8727-5112",
            "telefone2": "9 9924-0347",
            "email": "ilmedpf@gmail.com",
        },
        
        { 
            "nome": "Duilio Levir Cavalcanti Adolfo",
            "cargo" : "Grande Mestre Adj.",
            "img" : "gce/gma.jpg",
            "telefone1": "9 8801.7683",
            "telefone2": "9 9831.0535",
            "email": "duiliolevir@yahoo.com.br",
        },

        { 
            "nome": "Carlos José Crêspo Santos",
            "cargo" : "Grande Secretário",
            "img" : "gce/gs.jpg",
            "telefone1": "9 9906-3513",
            "telefone2": "",
            "email": "cajecs@hotmail.com",
        },

        { 
            "nome": "Sinaldo de Luna Barbosa",
            "cargo" : "Grande Secretário Adj.",
            "img" : "gce/gsa.jpg",
            "telefone1": "9 8707-9197",
            "telefone2": "",
            "email": "sinaldo_luna@hotmail.com",
        },

        { 
            "nome": "Weskley Carneiro de Medeiros",
            "cargo" : "Grande Tesoureiro",
            "img" : "gce/gt.jpg",
            "telefone1": "9 8801-4918",
            "telefone2": "",
            "email": "weskley@uepb.edu.br",
        },

        { 
            "nome": "Arquimedes Mariano Pereira",
            "cargo" : "Grande Tesoureiro Adj.",
            "img" : "gce/gta.jpg",
            "telefone1": "9 9830-9813",
            "telefone2": "",
            "email": "arquimedesmariano@gmail.com",
        },

        

        { 
            "nome": "Rafael Costa de Medeiros",
            "cargo" : "Grande Orador",
            "img" : "gce/go.jpg",
            "telefone1": "9 9691-7070",
            "telefone2": "",
            "email": "rafael.cdm@hotmail.com",
        },

        { 
            "nome": "Laesso Antonio Souza Abreu",
            "cargo" : "Grande Orador Adj.",
            "img" : "gce/goa.jpg",
            "telefone1": "9 9822.4774",
            "telefone2": "",
            "email": "laessopb@msn.com",
        },
	];


	$scope.tabela = $scope.gce;
   
})