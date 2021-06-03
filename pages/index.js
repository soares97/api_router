import Link from 'next/link'

export default function Home() {
    return (
        <div className = "card">
            <h1>Rota de API</h1>
            <Link href="https://api-router-lvwfbi6si-soares97.vercel.app/api/informaticos">
                <a>Endpoint para conjuntos de Informáticos</a>
            </Link>
            <style jsx>
                {`
                    a{
                        padding: 0 10px;
                        text-decoration:none;
                        color: rgb(0,0,0);
                        background-color:#dddddd;
                        padding: 5px;
	                    --margin: 2px;
                    }
                    
                    .card {
                        width: 20%;
                        margin: 20px auto;
                        text-align: center;
                        padding: 1.5rem;
                        font-size: 16pt;
                        text-decoration: none;
                        border: 2px solid #eaeaea;
                        border-radius: 10px;
                    }
                `}
            </style>
        </div>
    )
}
