var json = angular.module('demolaypb', []);

json.controller('corpos', function($scope){

    $scope.click = false;    
    $scope.capitulos = [
        { 
            "nome": "Deus Pátria e Família",
            "cidade": "Campina Grande",
            "img": "capitulos/08.jpg",
            "fundacao" : "08/10/1982",
            "instalacao" : "02/26/1983",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Flávio Moreira Martins", 
                        "telefone1" : "(83) 9 9822-1156",
                        "email" : "flaviiodo5mudo@gmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Matheus Alves Costa", 
                        "telefone1" : "(83) 8894-1194",
                        "email" : "matheusmib@gmail.com",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "Nilo Araújo Meira", 
                        "telefone1" : "(83) 9 8603-8764",
                        "email" : "nilo.meira@outlook.com",
                    },
                ]
        },

        { 
            "nome": "João Pessoa",
            "cidade": "João Pessoa",
            "img": "capitulos/11.jpg",
            "fundacao" : "11/12/1982",
            "instalacao" : "05/01/1983",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Iago Marques de Oliveira Batista", 
                        "telefone1" : "(83)9807-7366",
                        "email" : "iagobatistadm@gmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Mauro nascimento franco", 
                        "telefone1" : "(83)9981-8416",
                        "email" : "",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "Vítor Pereira Nascinento", 
                        "telefone1" : "(83)9992-8774 ",
                        "email" : "vitorpn6@hotmail.com",
                    },
                ]
        },

        { 
            "nome": "Príncipe da Paz",
            "cidade": "Cajazeiras",
            "img": "capitulos/38.jpg",
            "fundacao" : "10/13/1985",
            "instalacao" : "03/02/1986",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Mateus de Sousa Freitas", 
                        "telefone1" : "(83) 9107-0420",
                        "email" : "mateusdemolay.sousa@gmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "", 
                        "telefone1" : "",
                        "email" : "",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "", 
                        "telefone1" : "",
                        "email" : "",
                    },
                ]
        },

        { 
            "nome": "União do Brejo",
            "cidade": "Guarabira",
            "img": "capitulos/39.jpg",
            "fundacao" : "10/31/1985",
            "instalacao" : "07/19/1987",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Jose Maxuell Vieira Lopes Da Silva", 
                        "telefone1" : "(83) 99879-3575",
                        "email" : "maxuell_vieira@hotmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Ismael Santos do Nascimento", 
                        "telefone1" : "(83) 99918-6380 ",
                        "email" : "ismael.santosm@hotmail.com",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "Vinícius Marantz Dias de Lima", 
                        "telefone1" : "(83) 99853-4020",
                        "email" : "",
                    },
                ]
        },

        { 
            "nome": "União São Bentense",
            "cidade": "São Bento",
            "img": "capitulos/284.jpg",
            "fundacao" : "04/18/1996",
            "instalacao" : "06/29/1996",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "José Albino Lúcio Rosendo", 
                        "telefone1" : "(83) 9692-0932",
                        "email" : "Ryanlucio10@gmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Paulo Renê Custódio Da Silva Almeida", 
                        "telefone1" : "(83) 9648-3098",
                        "email" : "reneboy6@gmail.com",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "Mateus Lucena Da Silva", 
                        "telefone1" : "(83) 9601-8333",
                        "email" : "mateus971@live.com",
                    },
                ]
        },

        { 
            "nome": "G.M Romildo Dias de Toledo",
            "cidade": "Catolé do Rocha",
            "img": "capitulos/385.jpg",
            "fundacao" : "10/21/1998",
            "instalacao" : "11/26/2005",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "", 
                        "telefone1" : "",
                        "email" : "",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "", 
                        "telefone1" : "",
                        "email" : "",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "", 
                        "telefone1" : "",
                        "email" : "",
                    },
                ]
        },

        { 
            "nome": "Defensores do Vale e da Liberdade",
            "cidade": "Sousa",
            "img": "capitulos/504.jpg",
            "fundacao" : "09/03/2001",
            "instalacao" : "11/11/2001",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Gilberto Severino de Sousa Filho", 
                        "telefone1" : "(83) 9 8136-7525",
                        "email" : "gilbertosoarees1@gmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Gabriel Campos Alves Batista", 
                        "telefone1" : "(83) 9 9322-0317",
                        "email" : "gilbertinho.10@hotmail.com",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "Melquisedec Abrantes Barbosa", 
                        "telefone1" : "(83) 9 9164-3864",
                        "email" : "melquiabrantes@gmail.com",
                    },
                ]
        },

        { 
            "nome": "Templários de Piemont",
            "cidade": "Alagoa Grande",
            "img": "capitulos/517.jpg",
            "fundacao" : "08/22/2001",
            "instalacao" : "05/26/2002",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Diego Paulo Gomes", 
                        "telefone1" : "(83) 9 9312-1898",
                        "email" : "diegopaulo9@hotmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "", 
                        "telefone1" : "",
                        "email" : "",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "", 
                        "telefone1" : "",
                        "email" : "",
                    },
                ]
        },

        { 
            "nome": "Águia de Haya",
            "cidade": "Areia",
            "img": "capitulos/624.jpg",
            "fundacao" : "09/08/2003",
            "instalacao" : "12/21/2003",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Gabriel Ferreira de Lima Cruz", 
                        "telefone1" : "(83) 9885-1468",
                        "email" : "gabrielferre@hotmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Raphael Silva Jardelino", 
                        "telefone1" : "(83) 9613-9779",
                        "email" : "demolayareia@hotmail.com",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "", 
                        "telefone1" : "",
                        "email" : "",
                    },
                ]
        },

        { 
            "nome": "Guardiões da Fênix",
            "cidade": "Solânea",
            "img": "capitulos/625.jpg",
            "fundacao" : "03/02/2005",
            "instalacao" : "07/23/2005",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Pedro Vítor Silva Martins", 
                        "telefone1" : "",
                        "email" : "caiot360@gmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Inaldo Soares dos Anjos Neto", 
                        "telefone1" : "",
                        "email" : "",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "Gabryel Fernando Castro da Cunha", 
                        "telefone1" : "",
                        "email" : "",
                    },
                ]
        },

        { 
            "nome": "Pedro Félix de Lucena",
            "cidade": "Patos",
            "img": "capitulos/626.jpg",
            "fundacao" : "10/21/2001",
            "instalacao" : "11/21/2009",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Matheus Augusto dos Santos Leandro Nóbrega", 
                        "telefone1" : "",
                        "email" : "vieirademolaypb@gmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Gabriel Feitosa Araújo Alves", 
                        "telefone1" : "(83) 8721-6613",
                        "email" : "gabrielfeitosadm@gmail.com ",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "João Vitor Vieira Alexandre Salomão Leitão", 
                        "telefone1" : "",
                        "email" : "",
                    },
                ]
        },

        { 
            "nome": "Ivon Leite de Azevedo",
            "cidade": "Piancó",
            "img": "capitulos/645.jpg",
            "fundacao" : "11/17/2005",
            "instalacao" : "06/10/2006",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Jefferson Pereira Marçal Batista Hilário II", 
                        "telefone1" : "(83) 9 9188-4482",
                        "email" : "jefffersonsegundo@gmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Cristian Matheus da Silva Soares", 
                        "telefone1" : "(83) 9 9900-6066",
                        "email" : "cristyanmatheus@gmail.com",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "Júlio Cesar Miguel Silvestre da Silva", 
                        "telefone1" : "(83) 9 9140-4116",
                        "email" : "juliocesarpb36@hotmail.com",
                    },
                ]
        },

        { 
            "nome": "Ariosvaldo Alves de Almeida",
            "cidade": "Itaporanga",
            "img": "capitulos/646.jpg",
            "fundacao" : "12/01/2005",
            "instalacao" : "11/15/2007",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Samuel Oliveira de Sousa", 
                        "telefone1" : "(83) 9 9665-7898",
                        "email" : "samuel.ita.2013@gmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Manoel Higo Araujo Virgolino", 
                        "telefone1" : "(83) 9 9624-9769",
                        "email" : "higo.moral@hotmail.com",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "Divaldo Dantas Filho", 
                        "telefone1" : "(83) 9 9845-4362",
                        "email" : "ddf_ita@hotmail.com",
                    },
                ]
        },

        { 
            "nome": "União do Vale",
            "cidade": "Itabaiana",
            "img": "capitulos/686.jpg",
            "fundacao" : "08/15/2006",
            "instalacao" : "06/17/2007",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Fábio Adriano de Araujo Júnior", 
                        "telefone1" : "(83) 9373-3783",
                        "email" : "jrfabio2009@hotmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Fábio de Araújo Rodrigues Filho", 
                        "telefone1" : "(83) 9122-1244 ",
                        "email" : "",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "Vitor Gouveia da Costa Araújo", 
                        "telefone1" : "(83) 9620-0971 ",
                        "email" : "",
                    },
                ]
        },

        { 
            "nome": "Príncipes dos Cariris",
            "cidade": "Camalau",
            "img": "capitulos/750.jpg",
            "fundacao" : "09/07/2009",
            "instalacao" : "11/15/2009",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Raphael José Alves da Silva", 
                        "telefone1" : "(83) 9909-4308",
                        "email" : "raphael_gato10@hotmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "", 
                        "telefone1" : "",
                        "email" : "",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "", 
                        "telefone1" : "",
                        "email" : "",
                    },
                ]
        },

        { 
            "nome": "Filhos do Imperador",
            "cidade": "Mamanguape",
            "img": "capitulos/752.jpg",
            "fundacao" : "10/09/2009",
            "instalacao" : "12/19/2009",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Edmar Ferreira Cabral da Silva", 
                        "telefone1" : "(83) 9 9359–2221",
                        "email" : "edmarcabraldasilva@gmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "João Pedro Costa de Moura", 
                        "telefone1" : "(83) 9 9680-4397",
                        "email" : "jp_moura5@hotmail.com",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "João Pedro Alves da Paz", 
                        "telefone1" : "(83) 9 9391–9508",
                        "email" : "pedro_-_alves@hotmail.com",
                    },
                ]
        },

        { 
            "nome": "Guardiões do Templo Sagrado",
            "cidade": "Pombal",
            "img": "capitulos/753.jpg",
            "fundacao" : "11/06/2009",
            "instalacao" : "12/20/2009",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Thales Vinicius Medeiros Araujo de Sousa", 
                        "telefone1" : "(83) 9644-0856",
                        "email" : "thalles_pb12@hotmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Anchieta Ferreira de Alencar Neto", 
                        "telefone1" : "(83) 9 9990-8865",
                        "email" : "anchietaalencar@hotmail.com",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "Victor Carlos Alencar", 
                        "telefone1" : "(83) 9 9850-3059",
                        "email" : "ppereira16@gmail.com",
                    },
                ]
        },

        { 
            "nome": "Ernani Siqueira",
            "cidade": "Cabedelo",
            "img": "capitulos/762.jpg",
            "fundacao" : "12/04/2009",
            "instalacao" : "07/24/2010",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Rilvanio Freire Cavalcante de Albuquerque Junior", 
                        "telefone1" : "(83) 9 8787-9650",
                        "email" : "rilvanio_fla@hotmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Gabriel da Silva Ferreira", 
                        "telefone1" : "(83) 9 8797-7204",
                        "email" : "",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "Luiz Euzébio dos Santos Neto", 
                        "telefone1" : "(83) 9 9641-1911",
                        "email" : "",
                    },
                ]
        },

        { 
            "nome": "Belém do Arrojado",
            "cidade": "Uiraúna",
            "img": "capitulos/763.jpg",
            "fundacao" : "04/07/2010",
            "instalacao" : "10/28/2012",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Manoel Edvan De Sousa Fonseca Junior", 
                        "telefone1" : "(83) 9 9832-0799",
                        "email" : "edvanjr2@gmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Tiago Gonçalves De Almeida", 
                        "telefone1" : "(83) 9 9302-7918",
                        "email" : "tiagodemolay@hotmail.com",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "João Pedro Pinheiro De Sá Libanio Chaves", 
                        "telefone1" : "(83) 9 9136-1111",
                        "email" : "joaopedro12furacao@gmail.com",
                    },
                ]
        },

        { 
            "nome": "Vanerável Luiz Gonzaga da Costa",
            "cidade": "Picuí",
            "img": "capitulos/770.jpg",
            "fundacao" : "05/27/2010",
            "instalacao" : "09/26/2010",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Kaio Moura de Araújo", 
                        "telefone1" : "(83) 9800-2784 ",
                        "email" : "kaiomoura10@gmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Mayan Matheus Nascimento de Oliveira", 
                        "telefone1" : "(83) 9674-2241 ",
                        "email" : "mayan-matheus@hotmail.com",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "Yann Gabriel Oliveira Alves de Macedo", 
                        "telefone1" : "(83) 9655-0767",
                        "email" : "yannmacedo2014@gmail.com",
                    },
                ]
        },

        { 
            "nome": "Guardiões da Virtude Paulistense",
            "cidade": "Paulista",
            "img": "capitulos/794.jpg",
            "fundacao" : "07/30/2011",
            "instalacao" : "03/10/2012",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Wallace Dayson Pereira da Silva", 
                        "telefone1" : "(83) 9623-5854",
                        "email" : "wallaceflamengo@gmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Herculys Pamareles Ferreira de Assis", 
                        "telefone1" : "",
                        "email" : "",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "Kaio Aron Soares Farias", 
                        "telefone1" : "",
                        "email" : "",
                    },
                ]
        },

        { 
            "nome": "Branca Dias",
            "cidade": "João Pessoa",
            "img": "capitulos/800.jpg",
            "fundacao" : "09/05/2011",
            "instalacao" : "06/16/2012",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Matheus Jerônimo de Aquino Silva", 
                        "telefone1" : "(83) 9 9900-6051",
                        "email" : "matheusjeronimojs@hotmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Gabriel da Silva Santos", 
                        "telefone1" : "(83) 9 8828-9967",
                        "email" : "andremedeiros11@hotmail.com",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "João Victor Almeida de Lucena", 
                        "telefone1" : "(83) 9 9907-5862",
                        "email" : "victoralmeidalucena@icloud.com",
                    },
                ]
        },

        { 
            "nome": "Cavalheiros de Belém",
            "cidade": "Belém",
            "fundacao" : "12/01/2011",
            "instalacao" : "01/14/2012",
            "img": "capitulos/802.jpg",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Baumann barros Guedes alcoforado de carvalho", 
                        "telefone1" : "(83) 9823-5859",
                        "email" : "baumannguedes@hotmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "José Almeida Junior ", 
                        "telefone1" : "(83) 9623-2660 ",
                        "email" : "jose_a_junior@hotmail.com",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "Felipe Mateus De Lima Silva", 
                        "telefone1" : "(83) 9692-4330",
                        "email" : "",
                    },
                ]
        },

        { 
            "nome": "Iraildo Liberal Bezerra",
            "cidade": "Conceição",
            "img": "capitulos/837.jpg",
            "fundacao" : "10/24/2012",
            "instalacao" : "-",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "João Vitor Alves Pires", 
                        "telefone1" : "(83) 9937-8415",
                        "email" : "jvapires@hotmail.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "Juan Matheus Leite de Souza", 
                        "telefone1" : "(83) 9615-6872",
                        "email" : "junioralves02@hotmail.com",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "Anthony Fernandes Dantas Neves", 
                        "telefone1" : "(83) 9833-5472",
                        "email" : "dantas.neves@hotmail.com",
                    },
                ]
        },

        { 
            "nome": "Cavaleiros do Rio do Peixe",
            "cidade": "Rio do Peixe",
            "img": "capitulos/843.jpg",
            "fundacao" : "04/15/2013",
            "instalacao" : "04/15/2013",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "Valkennedy Batista De Brito", 
                        "telefone1" : "(83) 9 9678-3110",
                        "email" : "valkennedy.batissta@gmeil.com",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "José Samuel Antonino Aves", 
                        "telefone1" : "(83) 9 9678-3572",
                        "email" : "samuel-sam-uk@hotmail.com",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "Igor Farias de Oliveira", 
                        "telefone1" : "(83) 9 9678-8381",
                        "email" : "igor10farias@hotmail.com",
                    },
                ]
        },

        { 
            "nome": "Defensores do Rio Vermelho",
            "cidade": "Rio Tinto",
            "img": "capitulos/884.jpg",
            "fundacao" : "04/07/2014",
            "instalacao" : "04/05/2015",
            "diretoria": [
                    {
                        "cargo" : "Mestre Conselheiro",
                        "nome" : "", 
                        "telefone1" : "",
                        "email" : "",
                    },

                    { 
                        "cargo" : "Primeiro Conselheiro",
                        "nome" : "", 
                        "telefone1" : "",
                        "email" : "",
                    },

                    { 
                        "cargo" : "Segundo Conselheiro",
                        "nome" : "", 
                        "telefone1" : "",
                        "email" : "",
                    },
                ]
        },
    ]


    $scope.priorados = [
        { 
            "nome": "Cavaleiros do Ocidente",
            "cidade": "",
            "img": "priorados/05.jpg",
            "fundacao" : "07/21/1994",
            "instalacao" : "10/15/1994",
            "diretoria": [
                    {
                        "cargo" : "Ilustre Comendador Cavaleiro",
                        "nome" : "Iago Marques de Oliveira Batista", 
                        "telefone1" : "",
                        "email" : "iagobatistadm@gmail.com",
                    },

                    { 
                        "cargo" : "Protocolista",
                        "nome" : "Carlos Antônio Soares Júnior", 
                        "telefone1" : "",
                        "email" : "jrsoares39@hotmail.com",
                    },
                ]
        },

        { 
            "nome": "Nobres Cavaleiros Condutores da Luz",
            "cidade": "",
            "img": "priorados/37.jpg",
            "fundacao" : "03/14/1998",
            "instalacao" : "04/26/1998",
            "diretoria": [
                    {
                        "cargo" : "Ilustre Comendador Cavaleiro",
                        "nome" : "Pedro João Cruz Neto", 
                        "telefone1" : "(83) 9651-2019",
                        "email" : "pedro.netosb@hotmail.com",
                    },

                    { 
                        "cargo" : "Protocolista",
                        "nome" : "Jordan dos Santos Ferreira", 
                        "telefone1" : "(83) 9639-7645",
                        "email" : "ferreira.jordan8@gmail.com",
                    },
                ]
        },

        { 
            "nome": "Nobres Cavaleiros do Sertão",
            "cidade": "",
            "img": "priorados/98.jpg",
            "fundacao" : "11/23/2002",
            "instalacao" : "03/30/2003",
            "diretoria": [
                    {
                        "cargo" : "Ilustre Comendador Cavaleiro",
                        "nome" : "Luan Alencar", 
                        "telefone1" : "(83) 9650-5175",
                        "email" : "luan.alencar@live.com",
                    },

                    { 
                        "cargo" : "Protocolista",
                        "nome" : "Luis Henrique Batista Gadelha de Oliveira", 
                        "telefone1" : "(83) 9145-7955",
                        "email" : "luis_henrique53@hotmail.com",
                    },
                ]
        },

        { 
            "nome": "Deus, Patria e Família",
            "cidade": "",
            "img": "priorados/110.jpg",
            "fundacao" : "07/04/2004",
            "instalacao" : "07/04/2004",
            "diretoria": [
                    {
                        "cargo" : "Ilustre Comendador Cavaleiro",
                        "nome" : "Ewerton Guilherme Alves De Sousa", 
                        "telefone1" : "(83) 9860-9737",
                        "email" : "ewertoncah624@gmail.com",
                    },

                    { 
                        "cargo" : "Protocolista",
                        "nome" : "José Manoel Ferreira De Lima Cruz", 
                        "telefone1" : "(83) 9637-5381",
                        "email" : "josemanoel.demolay@hotmail.com",
                    },
                ]
        },

        { 
            "nome": "Franklin Cardoso de Sousa",
            "cidade": "",
            "img": "priorados/145.jpg",
            "fundacao" : "09/23/2009",
            "instalacao" : "02/20/2010",
            "diretoria": [
                    {
                        "cargo" : "Ilustre Comendador Cavaleiro",
                        "nome" : "Yoseph Vaz", 
                        "telefone1" : "(83) 9964-0889",
                        "email" : "yosephvaz@gmail.com",
                    },

                    { 
                        "cargo" : "Protocolista",
                        "nome" : "Kaio José", 
                        "telefone1" : "(83) 9664-1592",
                        "email" : "kaiojose_@hotmail.com",
                    },
                ]
        },

        { 
            "nome": "Francisco de Assis Florentino Filho",
            "cidade": "",
            "img": "priorados/166.jpg",
            "fundacao" : "01/16/2012",
            "instalacao" : "02/05/2012",
            "diretoria": [
                    {
                        "cargo" : "Ilustre Comendador Cavaleiro",
                        "nome" : "Lucas Ravy Pereira Gomes de Souza", 
                        "telefone1" : "(83) 9113-1089",
                        "email" : "lucasravy@yahoo.com.br",
                    },

                    { 
                        "cargo" : "Protocolista",
                        "nome" : "Whelley Pereira Izidro ", 
                        "telefone1" : "(83) 9879-6613",
                        "email" : "whelley_p@hotmail.com",
                    },
                ]
        },

    ]

    $scope.castelos = [
        { 
            "nome": "Pequeno Príncipe",
            "cidade": "",
            "img": "castelos/07.jpg",
            "fundacao" : "08/02/2008",
            "instalacao" : "02/26/2011",
        },

        { 
            "nome": "Príncipes do Vale do Piranhas",
            "cidade": "",
            "img": "castelos/17.jpg",
            "fundacao" : "11/19/2011",
            "instalacao" : "01/21/2012",
        },

        { 
            "nome": "Elmi Leite de Azevedo",
            "cidade": "",
            "img": "castelos/cs.jpg",
            "fundacao" : "01/21/2013",
            "instalacao" : "03/24/2013",
        },

        { 
            "nome": "Paladinos da Luz",
            "cidade": "",
            "img": "castelos/cs.jpg",
            "fundacao" : "05/25/2014",
            "instalacao" : "05/25/2014",
        },

        { 
            "nome": "Príncipes do Arrojado",
            "cidade": "",
            "img": "castelos/cs.jpg",
            "fundacao" : "08/31/2014",
            "instalacao" : "08/31/2014",
        },

        { 
            "nome": "Walt Disney",
            "cidade": "",
            "img": "castelos/58.jpg",
            "fundacao" : "09/27/2014",
            "instalacao" : "09/27/2014",
        },

        { 
            "nome": "Defensores da Rainha",
            "cidade": "",
            "img": "castelos/cs.jpg",
            "fundacao" : "10/25/2014",
            "instalacao" : "10/25/2014",
        },

    ]

    $scope.cortes = [
        { 
            "nome": "Corte Parahyba",
            "cidade": "",
            "img": "cortes/62.jpg",
            "fundacao" : "12/01/2005",
            "instalacao" : "12/01/2005",
        },

        { 
            "nome": "Jacques DeMolay",
            "cidade": "",
            "img": "cortes/ch.jpg",
            "fundacao" : "02/10/2014",
            "instalacao" : "03/18/2014",
        },

        { 
            "nome": "Deus, Pátria e Família",
            "cidade": "",
            "img": "cortes/ch.jpg",
            "fundacao" : "08/10/2014",
            "instalacao" : "08/10/2014",
        },

    ]

    $scope.alumni = [
    ];


    $scope.tabela = $scope.capitulos;   
})