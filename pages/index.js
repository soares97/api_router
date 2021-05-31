export default function Home(props) {
    console.log('Passando pelo Front-End')
    const tempoDinamico = new Date();
    const tempoD = tempoDinamico.toGMTString();

    return (
        <div>
            <p>{props.alunos.id}</p>
            <p>{props.alunos.title}</p>
        </div>
    )

    /*
    {
                props.alunos.map(poste => {
                    return (
                        <div>
                            <h3>{poste.id}</h3>
                            <p>{poste.nome}</p>
                            <p>{poste.idade}</p>
                        </div>
                    )
                })
            }
    */
    /*
     while (props.alunos) {
         return (
            <div>
                <h1>Página Home - dessa vez eu consegui bby...kkkk</h1>
                <p>{tempoD} (Dinamico)</p>
                <p>{props.alunos.id}</p>
                <p>{props.alunos.nome}</p>
                <p>{props.alunos.idade}</p>
            </div>
         )

     }
 */

}

export async function getStaticProps() {
    //console.log('Passando pelo Back-End')
    //const tempoEstatico = new Date();
    //const tempoE = tempoEstatico.toGMTString();

    const response = await fetch('https://github.com/soares97/api_router/blob/main/pages/api/informaticos');
    const alunos = await response.json();

    return {
        props: {
            alunos
        }
    }

}