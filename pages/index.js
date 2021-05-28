export default function Home(props) {
    console.log('Passando pelo Front-End')
    const tempoDinamico = new Date();
    const tempoD = tempoDinamico.toGMTString();

    return <div>
        <h1>Página Home - dessa vez eu consegui bby...kkkk</h1>
        <p>{tempoD} (Dinamico)</p>,
        <p>{props.tempoE} (Estatico)</p>
    </div>
}

export function getStaticProps() {
    console.log('Passando pelo Back-End')
    const tempoEstatico = new Date();
    const tempoE = tempoEstatico.toGMTString();

    return {
        props: {
            tempoE
        }
    }

}