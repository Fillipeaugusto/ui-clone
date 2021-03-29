import '../style/ArticlesCards.css'
import img from '../img/post.jpg'

import User from '../img/upinside.jpg'

function ArticlesCards() {
    return (

        <article >
            <a href="/" >
                <img src={img} alt="Lorem Ipsum is simply" title="Lorem Ipsum is simply" />
            </a>
            <p><a href="/" className="category">categoria</a></p>
            <h2><a href="/" className="title">
                <span > Lorem Ipsum is simply dummy text of the printing and typesettingindustry.</span>
            </a>
            </h2>
            <div className="main_blog_meta">
                <p>
                    <span ><span >Por: Gustavo Web</span></span>
                    <span ><span >via: Upinside<span>
                        <img src={User} alt="" /></span></span></span>
                    <span className="ds_none"></span>
                </p>
                <time>08/03/2021</time>
                <time>08/03/2021</time>
            </div>
        </article>


    )
}

export default ArticlesCards;