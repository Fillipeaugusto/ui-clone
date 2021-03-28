
import '../src/style/global.css';
import Footer from './Components/Footer';
import ArticlesCards from './Components/AticlesCards';
import Header from './Components/Header';
import Comments from './Components/Comments';


function App() {
  return (
    <div className="App">
      <Header />
      <ArticlesCards />

      <article class="main_optin">
        <div class="main_optin_content">
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
