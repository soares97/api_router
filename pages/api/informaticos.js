export default function informaticos(request, response) {
    var id = request.query.id

    var alunos = [{
        "id": 10,
        "nome": "Michel",
        "idade": "24"
    },
    {
        "id": 4,
        "nome": "Silvania",
        "idade": "23"

    },
    {
        "id": 3,
        "nome": "Albertina",
        "idade": "24"
    },
    {
        "id": 1,
        "nome": "Adjilza",
        "idade": "22"
    },
    {
        "id": 5,
        "nome": "João",
        "idade": "25"
    },
    {
        "id": 6,
        "nome": "Wander",
        "idade": "22"
    }
    ]
    
    if(id == null){
        response.json(
            alunos
        )
    }else{
        var i;
        for(i = 0; i < alunos.length; i++){
            if (alunos[i].id == id){
                response.json(
                    alunos[i]
                )
            }
        }
    }

}