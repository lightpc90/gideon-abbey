import React from "react";
import './portfolio.css';
import IMG1 from '../../assets/homeauto1.jpg'
import IMG2 from '../../assets/homeauto2.jpg'
import IMG3 from '../../assets/homeauto3.jpg'
import IMG4 from '../../assets/homeauto4.jpg'
import IMG5 from '../../assets/homeauto5.jpg'
import IMG6 from '../../assets/homeauto6.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Title one',
        github: 'hhtps://github.com',
        demo: 'https://dribbble.com/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Title two',
        github: 'hhtps://github.com',
        demo: 'https://dribbble.com/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Title three',
        github: 'hhtps://github.com',
        demo: 'https://dribbble.com/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Title four',
        github: 'hhtps://github.com',
        demo: 'https://dribbble.com/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Title five',
        github: 'hhtps://github.com',
        demo: 'https://dribbble.com/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Title six',
        github: 'hhtps://github.com',
        demo: 'https://dribbble.com/'
    }
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
              {
                data.map(({id, image, title, github, demo}) => {
                    return (
                        <article key={id} className="portfolio__item">
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} />  
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                        <a href={github} className="btn" target='_blank'>Github</a>
                        <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
                </article>
                    )
                })
              }  
            </div>
        </section>
    )
}

export default Portfolio;