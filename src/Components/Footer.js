import '../style/Footer.css';

function Footer() {
    return (
        <>
            <section className="main_footer">
                <header>
                    <h1>Quer saber mais?</h1>
                </header>

                <article className="main_footer_our_pages">
                    <header>
                        <h2>Nossas Páginas</h2>
                    </header>

                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">A escola</a></li>
                        <li><a href="/">Contato</a></li>
                    </ul>

                </article>

                <article className="main_footer_links">
                    <header>
                        <h2>Links úteis</h2>
                    </header>

                    <ul>
                        <li><a href="/">Política de Privacidade</a></li>
                        <li><a href="/">Aviso Legal</a></li>
                        <li><a href="/">Termos de uso</a></li>
                    </ul>

                </article>

                <article className="main_footer_about">
                    <header>
                        <h2>sobre o projeto</h2>
                    </header>

                    <p>Aprenda a trabalhar com HTML5 e CSS3 para desenvolver seus projetos e entregar páginas que estejam dentro
                    dos
        padrões da WEB seguindo as boas práticas!</p>

                </article>


            </section>

            <footer className="main_footer_rights">
                <p>Todos os Direitos Reservados a Upinside Treinamentos</p>
            </footer>
        </>
    )
}

export default Footer;