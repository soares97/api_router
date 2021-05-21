export default function Home(props) {

    const tempoDinamico = new Date();
    const tempoD = tempoDinamico.toGMTString();

    return <div>
        <h1>Página Home - dessa vez eu consegui bby...kkkk</h1>
        <p>{tempoD} (Dinamico)</p>,
        <p>{props.tempoE} (Estatico)</p>
        </div>
}

export function getStaticProps() {
    const tempoEstatico = new Date();
    const tempoE = tempoEstatico.toGMTString();

    return {
        props: {
            tempoE
        }
    }

}