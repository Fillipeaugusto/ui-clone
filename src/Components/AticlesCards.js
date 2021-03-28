import '../style/ArticlesCards.css'
import img from '../img/post.jpg'



function ArticlesCards() {
    return (

        <article itemscope itemtype="https://schema.org/Article">
            <a href="#" >
                <img src={img} alt="Lorem Ipsum is simply" title="Lorem Ipsum is simply" />
            </a>
            <p><a href="#" className="category">categoria</a></p>
            <h2><a href="#" className="title">
                <span > Lorem Ipsum is simply dummy text of the printing and typesettingindustry.</span>
            </a>
            </h2>
            <div className="main_blog_meta">
                <p>
                    <span ><span itemprop="name">Por: Gustavo Web</span></span>
                    <span ><span itemprop="name">via: Upinside<span>
                        <img src="_img/upinside.jpg" itemprop="url" alt="" /></span></span></span>
                    <span className="ds_none"></span>
                </p>
                <time datetime="2021-03-08" >08/03/2021</time>
                <time className="ds_none" datetime="2021-03-08" >08/03/2021</time>
            </div>
        </article>


    )
}

export default ArticlesCards;