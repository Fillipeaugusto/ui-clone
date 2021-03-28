
import '../src/style/global.css';
import Footer from './Components/Footer';
import ArticlesCards from './Components/AticlesCards';
import Header from './Components/Header';
import Comments from './Components/Comments';
import { AiFillPushpin } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main_blog">
        <header className="main_blog_header">
          <h1 className="icon-blog"><AiFillPushpin color='#bf350f' /> Nossos últimos artigos</h1>
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

      <Comments />
      <Footer />

    </div>

  );
}

export default App;
