import React from "react";
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        id: 1,
        avatar: AVTR1,
        name: 'Tunde Fagbemi',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eaque dolores animi aut veritatis odio cupiditate esse doloremque in, molestiae recusandae libero natus ipsam, suscipit, delectus dicta atque sunt. Nulla.'
    },
    {
        id: 2,
        avatar: AVTR2,
        name: 'Peter Fagbemi',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eaque dolores animi aut veritatis odio cupiditate esse doloremque in, molestiae recusandae libero natus ipsam, suscipit, delectus dicta atque sunt. Nulla.'
    },
    {
        id: 3,
        avatar: AVTR3,
        name: 'Gideon Fola',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eaque dolores animi aut veritatis odio cupiditate esse doloremque in, molestiae recusandae libero natus ipsam, suscipit, delectus dicta atque sunt. Nulla.'
    },
    {  id: 4,
        avatar: AVTR4,
        name: 'Kunle Abbey',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eaque dolores animi aut veritatis odio cupiditate esse doloremque in, molestiae recusandae libero natus ipsam, suscipit, delectus dicta atque sunt. Nulla.'
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container" 
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}>
              {
                data.map(({id, avatar, name, review}) => {
                    return (
                        <SwiperSlide key={id} className="testimonial">
                        <div className="client__avatar">
                            <img src={avatar} alt={avatar} />
                        </div>
                        <h5 className="client__name">{name}</h5>
                            <small className="client__review">
                                {review}
                            </small>
                        </SwiperSlide> 
                    )
                })
              }
            </Swiper>
        </section>
    )
}

export default Testimonials;