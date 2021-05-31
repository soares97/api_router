export default function Home(props) {
     while (props.alunos) {
         return (
            <div>
                <h1>Rota de API</h1>
                <p>http://localhost:3000/api/informaticos</p>
            </div>
         )
     }
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:3000/api/informaticos/?id=1');
    const alunos = await response.json();

    return {
        props: {
            alunos
        }
    }

}