
import '../style/Comments.css';

import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


function Comments() {
    return (

        <div className="main_course_fullWidth">
            <div className="main_course_rating_content">
                <article className="main_course_rating_content_title" itemprop="aggregateRating" itemscope
                >
                    <header>
                        <h2>Curso considerado <span itemprop="ratingValue">5</span> estrelas por nossos 100 alunos matriculados
              </h2>
                        <meta itemprop="ratingCount" content="6" />
                    </header>

                    <Rater rating={4} total={5} interactive={false} with={30} />
                </article>
            </div>
        </div>
    )
}


export default Comments;