var json = angular.module('demolaypb', []);

json.controller('home', function($scope){
     var mydata = JSON.parse(data);

     
     
     $scope.noticias = mydata;

     $scope.titulo = "GCApp";
        $scope.subTitulo = "aplicativo do grande conselho - Paraíba";
        $scope.conteudos = [
            {
               "titulo" : "O que é Ordem DeMolay?",
               "paragrafos" : [
                    "DeMolay é uma organização dedicada a preparar jovens homens a levarem um vida mais próspera, feliz e produtiva sob o aconselhamento de adultos; liderança hábil, cidadânia consciente, responsabilidade e desenvolvimento do caráter são alguns dos princípios aprendidos através de uma variedade de caminhos, um mundo real de aplicações e atividades. DeMolay constrói confiança; ensina a responsabilidade, cooperação e serviços comunitários; e fortalece a confiança, o respeito, o companheirismo, o patriotismo, a reverência e a compaixão.",
                    "DeMolay abre suas portas para jovens homens com idade entre 12 e 21 anos desenvolvendo a consciência cívica, responsabilidade pessoal e habilidades de liderança tão necessárias hoje à sociedade. DeMolay combina esta séria missão com um companheirismo que constrói laços importantes de amizade entre seus associados em quase 2 mil capítulos espalhados pelo mundo.",
                ]
            },

            {
               "titulo" : "Jacques DeMolay?",
               "paragrafos" : [
                    "O homem que deu nome a Ordem DeMolay nasceu em Vitrey, região do Haute Saone, Sul da França, em 1244. Ao completar 21 anos, foi entrou para a Ordem monástico-militar dos Pobres Soldados de Cristo e do Templo de Salomão, organização que recebeu a sanção papal em 1128 com o intuito de fazer a proteção dos caminhos da Terra Santa.",
                    "Esta Ordem de Cavalaria de monges que também pegavam em armas para defender as porções cristãs do Oriente tornou-se famosa não somente pela sua bravura e agudez estratégica, mas também porque recebeu várias doações de terras e outras riquezas para manter seus trabalhos.",
                ]
            },
        ]
})