
import ReactStars from "react-rating-stars-component";
function Coments() {
    return (


        <article itemprop="review" >
            <header>
                <h3 itemprop="author"><span itemprop="name">Gustavo
      Web</span></h3>
                <p>10/01/2018</p>
                <ReactStars count={5} size={24} value={5} edit={false} activeColor="#ffd700" />
            </header>

            <p>O conteúdo é fantástico, eu não tinha conhecimento nenhum e agora estou
  desenvolvendo minhas páginas em HTML5 sem problemas</p>
        </article>



    )
}

export default Coments;