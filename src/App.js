
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
      <Comments />
      <Footer />

    </div>

  );
}

export default App;
