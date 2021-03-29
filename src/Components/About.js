
import '../style/Comments.css';
import Logo from '../img/logo.png';

function About() {
    return (

        <section className="main_course">
            <header className="main_course_header">
                <img src={Logo} alt="Curso HTML5 e CSS3 Essentials" title="Curso HTML5 e CSS3 Essentials" />
                <h1 className="icon-books" >HTML5 e CSS3 Essentials</h1>
                <p>Aprenda a trabalhar com HTML5 e CSS3 para desenvolver seus projetos e entregar
            páginas que estejam dentro dos padrões da WEB seguindo as boas práticas!</p>
            </header>

            <div className="main_course_content">
                <article>
                    <header>
                        <h2>Curso 100% Online</h2>
                        <p>Todas as aulas são gravadas em estúdio profissional para que você tenha a máxima
                        qualidade de imagem e
                vídeo</p>
                    </header>
                </article>

                <article>
                    <header>
                        <h2>Suporte Especializado</h2>
                        <p>Este curso possui suporte diretamente com um profissional da nossa equipe oficial</p>
                    </header>
                </article>

                <article>
                    <header>
                        <h2>Mais de 100 aulas divididas em 10 módulos</h2>
                        <p>A modularização que você precisa para compreender de maneira mais objetiva</p>
                    </header>
                </article>

                <article>
                    <header>
                        <h2>Certificado reconhecido em mais de 17 países</h2>
                        <p>Ao concluir o curso você terá um certificado com reconhecimento em diversos países da
                        América Latina
              </p>
                    </header>
                </article>
            </div>


        </section>
    )
}


export default About;