
import './style/global.css';
import './style/main.css';
import Footer from './Components/Footer';
import ArticlesCards from './Components/AticlesCards';
import Header from './Components/Header';
import About from './Components/About';
import { AiFillPushpin } from "react-icons/ai";
import Coments from './Components/Coments';
import Upinside from './img/upinside.jpg';
import TeacherImage from './img/gustavoweb.jpg';

import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div className="App">

      <Header />

      <section className="main_blog">
        <header className="main_blog_header">
          <h1 className="icon-blog"> <AiFillPushpin color='#bf350f' /> Nossos últimos artigos</h1>
          <p>Aqui você encontra os artigos necessários para auxiliar na sua caminhada web</p>
        </header>

        <ArticlesCards />
        <ArticlesCards />
        <ArticlesCards />
        <ArticlesCards />
        <ArticlesCards />
        <ArticlesCards />
        <ArticlesCards />
        <ArticlesCards />

      </section>


      <article className="main_optin">
        <div className="main_optin_content">
          <header>
            <h1>Quer receber todas as novidades no seu e-mail?</h1>
            <p>Informe seu nome e seu email no campo ao lado e clique em ok!</p>
          </header>

          <form action="#">
            <input type="text" placeholder="Seu nome" />
            <input type="email" placeholder="Seu e-mail" />
            <button type="submit">ok!</button>
          </form>
        </div>
      </article>

      <About />
      <div class="main_course_fullWidth">
        <div class="main_course_rating_content">
          <article class="main_course_rating_content_title">

            <header>
              <h2>Curso considerado 5 estrelas por nossos 100 alunos matriculados </h2>

            </header>
          </article>
          <section class="main_course_rating_content_comment">
            <header>
              <h2>Veja o que estão falando sobre o curso</h2>
            </header>
            <Coments />
            <Coments />
            <Coments />
            <Coments />
            <Coments />
            <Coments />
          </section>
        </div>

      </div>

      <div class="main_school">
        <section class="main_school_content">

          <header class="main_school_header">
            <h1>Bem vindo a <span>UpInside Treinamentos</span></h1>
            <p >A sua escola de Programação e Marketing Digital</p>
          </header>

          <div class="main_school_content_left">
            <article class="main_school_content_left_content">
              <header>
                <p>
                  <span><FaFacebookF size={20} /> <a href="/">Facebook</a></span>
                  <span><FaGooglePlusSquare size={20} /> <a href="/">   Google+</a></span>
                  <span> <FaTwitter size={20} />  <a href="/">Twitter</a></span>
                </p>
                <h2>Tudo o que você precisa para ser um WebMaster Full Stack em um só lugar</h2>
              </header>

              <p>Desde 2010 a UpInside vem criando os melhores cursos do mercado, entregamos ao aluno
              conhecimento prático
              e
              testado sem enrolação. Você tem acesso a aulas com a melhor qualidade, recursos que aceleram
              seu
              aprendizado
              e
              muito mais...
              </p>
              <p>Que tal estudar, e ter o certificado da escola eleita a melhor do Brasil com reconhecimento
              em mais de 17
              países pela Latin American Quality Institute?
              </p>
            </article>

            <section class="main_school_list">
              <header>
                <h2>Confira nossos Prêmios</h2>
              </header>

              <article>
                <header>
                  <h3><FaTrophy /> Qualidade e Excelência - Master Pesquisas</h3>
                </header>
              </article>

              <article>
                <header>
                  <h3 ><FaTrophy /> Prêmio Diamante - Master Pesquisas</h3>
                </header>
              </article>

              <article>
                <header>
                  <h3><FaTrophy /> Medalha de Ouro a Excêlencia - LAQI</h3>
                </header>
              </article>

              <article>
                <header>
                  <h3><FaTrophy /> Melhor platafoma EAD - Digital Awards</h3>
                </header>
              </article>

              <article>
                <header>
                  <h3><FaTrophy /> Qualidade e Atendimento - Master Pesquisas</h3>
                </header>
              </article>

              <article>
                <header>
                  <h3><FaTrophy /> Estrela do Sul - Master Pesquisas</h3>
                </header>
              </article>

              <article>
                <header>
                  <h3><FaTrophy /> Brazil Quality Certification - LAQI</h3>
                </header>
              </article>

            </section>
          </div>
          <div class="main_school_content_right">
            <img src={Upinside} alt="UpInside Treinamentos" title="UpInside Treinamentos" />
          </div>

          <article class="main_school_address">
            <header>
              <h2>Nos Encontre</h2>
              <p class="icon-map2" ><span>Rodovia DR. Antônio Luiz Moura Gonzaga, 3339
                </span> - <span>88048-301</span> - Campeche - <span>Florianópolis</span>/
                <span>SC</span> - <span>+55 48 3371-5879</span>
                <span >cursos@upinside.com.br</span></p>
            </header>
          </article>
        </section>
      </div>

      <section class="main_tutor">
        <div class="main_tutor_content">
          <header>
            <h1>Conheça o <span>Gustavo Web</span>, seu tutor nesse Curso</h1>
            <p>Eu vou te ajudar a criar sua webpage com html5 e css3</p>
          </header>
          <div class="main_tutor_content_img">
            <img src={TeacherImage} alt="Imagem do Gustavo Web" title="Imagem do Gustavo Web" />
          </div>

          <article class="main_tutor_content_history">
            <header>
              <h2>Formado em Ciência da computação e Apaixonado por web</h2>
            </header>
            <p itemprop="description">Como muitos, comecei na programação por conta dos jogos! Com o tempo, o amor pela
            programação foi
            crescendo
            a
            ponto de tomar como profissão e me especializar na área. Hoje, com a bagagem que tenho,
            compartilho meu
              conhecimento com todos os alunos da UpInside Treinamentos</p>
          </article>

          <section class="main_tutor_social_network">
            <header>
              <h2>Me siga nas redes socias</h2>
            </header>

            <article>
              <header>
                <h3> <a href="/"> <FaFacebookF size={18} className="social-icon" /> Facebook</a></h3>
              </header>
            </article>

            <article>
              <header>
                <h3><a href="/"> <FaFacebookF size={18} className="social-icon" /> Minha FanPage</a></h3>
              </header>
            </article>

            <article>
              <header>
                <h3><a clahref="/"> <FaGooglePlusSquare size={18} className="social-icon" /> Meu Google+</a></h3>
              </header>
            </article>
            <article>
              <header>
                <h3><a href="/"><FaInstagram size={18} className="social-icon" /> Meu Instagram</a></h3>
              </header>
            </article>
          </section>
        </div>
      </section>

      <section class="main_optin_footer">
        <div class="main_optin_footer_content">
          <header>
            <h1>Quer receber nosso conteudo exclusivo? Assine nossa lista VIP :)</h1>
          </header>
          <article>
            <header>
              <h2><a href="#" class="btn"> Etrar para a Lista VIP</a></h2>
            </header>
          </article>
        </div>
      </section>

      <Footer />

    </div>

  );
}

export default App;
