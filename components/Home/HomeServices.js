'use client'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Arrow_r } from '../../public/svg/icon';

// Import images
const service1 = "/img/service/single/bolt.webp"
const service2 = "/img/service/single/cold.webp"
const service3 = "/img/service/single/habbitat.webp"
const service4 = "/img/service/single/habserv.webp"
const service5 = "/img/service/single/fire.webp"
const service6 = "/img/service/single/bolt_tension.webp"

const services = [
    {
        link: "/services/Bolt_Tensioning",
        img: "img/thumb/480-700.jpg",
        bg: "/img/service/single/bolt.webp",
        title: "BOLT TENSIONING SERVICES"

    },
    {
        link: "/services/Cold_Cutting",
        img: "img/thumb/480-700.jpg",
        bg: "/img/service/single/cold.webp",
        title: "COLD CUTTING SERVICES"

    },
    {
        link: "/services/Habitat_preparation",
        img: "img/thumb/480-700.jpg",
        bg: "/img/service/single/habbitat.webp",
        title: "HABITAT PREPARATION SERVICES"

    },
    {
        link: "/services/Habitat_Service",
        img: "img/thumb/480-700.jpg",
        bg: "/img/service/single/habserv.webp",
        title: "HABITAT SERVICE"

    },
    {
        link: "/services/Fire_&_Gas_Alarm_System",
        img: "img/thumb/480-700.jpg",
        bg: "/img/service/single/fire.webp",
        title: "FIRE AND GAS ALARM SYSTEM SERVICES"

    },
    {
        link: "/services/Bolt_Torquing_&_Tensioning",
        img: "img/thumb/480-700.jpg",
        bg: "/img/service/single/bolt_tension.webp",
        title: "BOLT TORQUING AND TENSIONING SERVICES"

    },
]

export default function HomeServices() {
    return (
        <>
            {/* <!-- Service Query Shortcode --> */}
            <div className="fn_cs_service_query" data-mobile="disable" data-column-count="4">
                <div className="top_bar">
                    <div className="t_inner">
                        <h3>Our Service</h3>
                        <span>At TorqTech, we deliver innovative, end-to-end engineering and technology solutions
                             designed to optimize performance, enhance reliability, and drive sustainable growth.</span>
                        <div className="owl_control">
                            <div className="fn_prev"></div>
                            <div className="fn_next"></div>
                        </div>
                    </div>
                </div>
                <div className="service_part">
                    <div className="owl-carousel">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={2}
                            loop={true}
                            // pagination={{ clickable: true }}
                            className="custom-class"
                            navigation={{
                                prevEl: ".fn_prev",
                                nextEl: ".fn_next",
                            }}
                            breakpoints={{

                                // when window width is >= 768px

                                768: {
                                    // when window width is >= 992px
                                    slidesPerView: 3,
                                },
                                1200: {
                                    // when window width is >= 992px
                                    slidesPerView: 4,
                                }
                            }}
                        >
                            {services.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="item">
                                        <Link href={item.link} className="full_link" ></Link>
                                        <div className="img_holder">
                                            <img src={item.img} alt="" />
                                            <div className="abs_img" style={{ "backgroundImage": `url(${item.bg})` }}></div>
                                        </div>
                                        <div className="title">
                                           <h3 style={{ fontSize: "16px" }}>{item.title}</h3>
                                        </div>
                                        <div className="view_more">
                                            <span className="more_link">
                                                <span className="text">View More</span>
                                                <span className="arrow"><Arrow_r className="fn__svg" /></span>
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>
            </div >
            {/* <!-- /Service Query Shortcode --> */}

        </>
    )
}
