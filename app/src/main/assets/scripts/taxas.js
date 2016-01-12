var json = angular.module('demolaypb', []);

json.controller('taxas', function($scope){



	$scope.taxas = [

        { 
            "grau": "Anuidade de DeMolay Ativo",
            "gce" : "-",
            "scodrfb" : "-",
            "total" : "R$75,00",
        },

        { 
            "grau": "Anuidade de Membro de Conselho Consultivo",
            "gce" : "R$31,00",
            "scodrfb" : "R$44,00",
            "total" : "R$75,00",
        },

        { 
            "grau": "Anuidade de Ex Grandes Mestres Estaduais",
            "gce" : "R$12,00",
            "scodrfb" : "R$88,00",
            "total" : "R$100,00",
        },

        { 
            "grau": "Anuidade dos Priorados",
            "gce" : "R$136,00",
            "scodrfb" : "R$264,00",
            "total" : "R$400,00",
        },

        { 
            "grau": "Anuidade das Cortes",
            "gce" : "R$24,00",
            "scodrfb" : "R$176,00",
            "total" : "R$200,00",
        },

        { 
            "grau": "Anuidade das Távolas dos Escudeiros",
            "gce" : "-",
            "scodrfb" : "-",
            "total" : "ISENTO",
        },

        { 
            "grau": "Anuidade dos Clubes de Mães e Parentes",
            "gce" : "-",
            "scodrfb" : "-",
            "total" : "ISENTO",
        },

        { 
            "grau": "Iniciação",
            "gce" : "R$31,00",
            "scodrfb" : "R$44,00",
            "total" : "R$75,00",
        },

        { 
            "grau": "Elevação",
            "gce" : "R$31,00",
            "scodrfb" : "R$44,00",
            "total" : "R$75,00",
        },

        { 
            "grau": "Iniciação de Escudeiro",
            "gce" : "-",
            "scodrfb" : "-",
            "total" : "ISENTO",
        },

        { 
            "grau": "Investidura a Ordem da Cavalaria",
            "gce" : "R$31,00",
            "scodrfb" : "R$44,00",
            "total" : "R$75,00",
        },

        { 
            "grau": "Investidura a Ordem do Ébano",
            "gce" : "R$31,00",
            "scodrfb" : "R$44,00",
            "total" : "R$75,00",
        },

        { 
            "grau": "Investidura ao Grau de Chevalier",
             "gce" : "R$42,00",
            "scodrfb" : "R$308,00",
            "total" : "R$350,00",
        },

        { 
            "grau": "Investidura a Cruz de Honra DeMolay",
            "gce" : "R$42,00",
            "scodrfb" : "R$308,00",
            "total" : "R$350,00",
        },

        { 
            "grau": "Investidura a Legião de Honra",
            "gce" : "-",
            "scodrfb" : "R$616,00",
            "total" : "R$616,00",
        },

        { 
            "grau": "Sênior DeMolay",
            "gce" : "R$31,00",
            "scodrfb" : "R$44,00",
            "total" : "R$75,00",
        },

        { 
            "grau": "Honrarias",
            "gce" : "R$31,00",
            "scodrfb" : "R$44,00",
            "total" : "R$75,00",
        },

        { 
            "grau": "Membro de Clube de Mães e Parentes",
            "gce" : "R$3,20",
            "scodrfb" : "R$8,80",
            "total" : "R$12,00",
        },

        { 
            "grau": "Organização (Capítulos, Priorados e Cortes)",
            "gce" : "R$31,00",
            "scodrfb" : "R$44,00",
            "total" : "R$75,00",
        },

        { 
            "grau": "Távola de Escudeiros",
            "gce" : "-",
            "scodrfb" : "-",
            "total" : "ISENTO",
        },
        
        { 
            "grau": "Clube de Mães e Parentes",
            "gce" : "-",
            "scodrfb" : "-",
            "total" : "ISENTO",
        },

        { 
            "grau": "Carta Constitutiva Permanente",
            "gce" : "R$12,00",
            "scodrfb" : "R$88,00",
            "total" : "R$100,00",
        },

        { 
            "grau": "Carta Constitutiva de Castelos",
            "gce" : "-",
            "scodrfb" : "-",
            "total" : "ISENTO",
        },

        { 
            "grau": "Carta Constitutiva de Clube de Mães e Parentes",
            "gce" : "R$6,00",
            "scodrfb" : "R$44,00",
            "total" : "R$50,00",
        },

        { 
            "grau": "Certificado e Identidade de Sênior DeMolay Vitalícia",
            "gce" : "R$31,00",
            "scodrfb" : "R$44,00",
            "total" : "R$75,00",
        },

        { 
            "grau": "2ª via de Diploma DeMolay",
            "gce" : "R$31,00",
            "scodrfb" : "R$44,00",
            "total" : "R$75,00",
        },

        { 
            "grau": "2ª via de Diploma de Sênior DeMolay",
            "gce" : "R$31,00",
            "scodrfb" : "R$44,00",
            "total" : "R$75,00",
        },

        { 
            "grau": "2ª via de Identidade DeMolay",
            "gce" : "R$31,00",
            "scodrfb" : "R$44,00",
            "total" : "R$75,00",
        },

        { 
            "grau": "2ª via de Identidae de Membro de Clube de Mães e Parentes",
            "gce" : "R$6,00",
            "scodrfb" : "R$44,00",
            "total" : "R$50,00",
        },

        { 
            "grau": "2ª via de Carta Constituitiva",
            "gce" : "R$31,00",
            "scodrfb" : "R$44,00",
            "total" : "R$75,00",
        },

        { 
            "grau": "2ª via de Diploma do Grau de Chevalier",
            "gce" : "R$31,00",
            "scodrfb" : "R$44,00",
            "total" : "R$75,00",
        },

        { 
            "grau": "2ª via de Carta Constituitiva de Castelo",
            "gce" : "R$6,00",
            "scodrfb" : "R$44,00",
            "total" : "R$50,00",
        },

        { 
            "grau": "2ª via de Carta Constitutiva de Clube de Mães e Parentes",
            "gce" : "R$6,00",
            "scodrfb" : "R$44,00",
            "total" : "R$50,00",
        },

        { 
            "grau": "2ª via de Diploma de Prêmios",
            "gce" : "R$6,00",
            "scodrfb" : "R$44,00",
            "total" : "R$50,00",
        },



	]
     
})