
import '../style/Comments.css';
import Logo from '../img/logo.png';
import ReactStars from "react-rating-stars-component";


function Comments() {
    return (

        <section class="main_course">
            <header class="main_course_header">
                <img src={Logo} alt="Curso HTML5 e CSS3 Essentials" title="Curso HTML5 e CSS3 Essentials"
                    itemprop="image" />
                <h1 class="icon-books" itemprop="name">HTML5 e CSS3 Essentials</h1>
                <p itemprop="description">Aprenda a trabalhar com HTML5 e CSS3 para desenvolver seus projetos e entregar
            páginas que estejam dentro dos padrões da WEB seguindo as boas práticas!</p>
            </header>

            <div class="main_course_content">
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

            <div class="main_course_fullWidth">
                <div class="main_course_rating_content">
                    <article class="main_course_rating_content_title" itemprop="aggregateRating" itemscope>

                        <header>
                            <h2>Curso considerado <span itemprop="ratingValue">5</span> estrelas por nossos 100 alunos matriculados </h2>

                        </header>


                    </article>

                    <section class="main_course_rating_content_comment">
                        <header>
                            <h2>Veja o que estão falando sobre o curso</h2>
                        </header>

                        <article itemprop="review" itemscope itemtype="https://schema.org/Review">
                            <header>
                                <h3 itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">Gustavo
                      Web</span></h3>
                                <p>10/01/2018</p>
                                <ReactStars count={5} size={24} value={5} edit={false} activeColor="#ffd700" />
                            </header>

                            <p>O conteúdo é fantástico, eu não tinha conhecimento nenhum e agora estou
                  desenvolvendo minhas páginas em HTML5 sem problemas</p>
                        </article>
                        <article itemprop="review" itemscope itemtype="https://schema.org/Review">
                            <header>
                                <h3 itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">Gustavo
                      Web</span></h3>
                                <p>10/01/2018</p>
                                <ReactStars count={5} size={24} value={5} edit={false} activeColor="#ffd700" />
                            </header>

                            <p>O conteúdo é fantástico, eu não tinha conhecimento nenhum e agora estou
                  desenvolvendo minhas páginas em HTML5 sem problemas</p>
                        </article>
                        <article itemprop="review" itemscope itemtype="https://schema.org/Review">
                            <header>
                                <h3 itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">Gustavo
                      Web</span></h3>
                                <p>10/01/2018</p>
                                <ReactStars count={5} size={24} value={5} edit={false} activeColor="#ffd700" />
                            </header>

                            <p>O conteúdo é fantástico, eu não tinha conhecimento nenhum e agora estou
                  desenvolvendo minhas páginas em HTML5 sem problemas</p>
                        </article>
                        <article itemprop="review" itemscope itemtype="https://schema.org/Review">
                            <header>
                                <h3 itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">Gustavo
                      Web</span></h3>
                                <p>10/01/2018</p>
                                <ReactStars count={5} size={24} value={5} edit={false} activeColor="#ffd700" />
                            </header>

                            <p>O conteúdo é fantástico, eu não tinha conhecimento nenhum e agora estou
                  desenvolvendo minhas páginas em HTML5 sem problemas</p>
                        </article>
                        <article itemprop="review" itemscope itemtype="https://schema.org/Review">
                            <header>
                                <h3 itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">Gustavo
                      Web</span></h3>
                                <p>10/01/2018</p>
                                <ReactStars count={5} size={24} value={5} edit={false} activeColor="#ffd700" />
                            </header>

                            <p>O conteúdo é fantástico, eu não tinha conhecimento nenhum e agora estou
                  desenvolvendo minhas páginas em HTML5 sem problemas</p>
                        </article>
                        <article itemprop="review" itemscope itemtype="https://schema.org/Review">
                            <header>
                                <h3 itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">Gustavo
                      Web</span></h3>
                                <p>10/01/2018</p>
                                <ReactStars count={5} size={24} value={5} edit={false} activeColor="#ffd700" />
                            </header>

                            <p>O conteúdo é fantástico, eu não tinha conhecimento nenhum e agora estou
                  desenvolvendo minhas páginas em HTML5 sem problemas</p>
                        </article>
                    </section>
                </div>

            </div>
        </section>
    )
}


export default Comments;