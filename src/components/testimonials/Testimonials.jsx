import React from "react";
import style from './testimonials.module.css';

// import Swiper core and required modules
import Swiper from 'swiper';
import { Navigation, Pagination} from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'



const data = [
    {
        id: 1,
        avatar: 'images/avatar1.png',
        name: 'Tunde Fagbemi',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eaque dolores animi aut veritatis odio cupiditate esse doloremque in, molestiae recusandae libero natus ipsam, suscipit, delectus dicta atque sunt. Nulla.'
    },
    {
        id: 2,
        avatar: 'images/avatar2.png',
        name: 'Peter Fagbemi',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eaque dolores animi aut veritatis odio cupiditate esse doloremque in, molestiae recusandae libero natus ipsam, suscipit, delectus dicta atque sunt. Nulla.'
    },
    {
        id: 3,
        avatar: 'images/avatar3.png',
        name: 'Gideon Fola',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eaque dolores animi aut veritatis odio cupiditate esse doloremque in, molestiae recusandae libero natus ipsam, suscipit, delectus dicta atque sunt. Nulla.'
    },
    {  id: 4,
        avatar: 'images/avatar4.jpg',
        name: 'Kunle Abbey',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eaque dolores animi aut veritatis odio cupiditate esse doloremque in, molestiae recusandae libero natus ipsam, suscipit, delectus dicta atque sunt. Nulla.'
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <div className={style.testimonials__container} 
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}>
              {
                data.map(({id, avatar, name, review}) => {
                    return (
                        <div key={id} className={style.testimonial}>
                        <div className={style.client__avatar}>
                            <img src={avatar} alt={avatar} />
                        </div>
                        <h5 className={style.client__name}>{name}</h5>
                            <small className={style.client__review}>
                                {review}
                            </small>
                        </div> 
                    )
                })
              }
            </div>
        </section>
    )
}

export default Testimonials;