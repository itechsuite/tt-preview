'use client'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

// register Swiper custom elements
register();


// Images imported
const slider1 = "/img/safety.webp"
const slider2 = "/img/health.webp"
const slider3 = "/img/slide2.webp"
const slider4 = "/img/Technology.webp"
// const slider5 = "/img/slide3.webp"


export default function HomeSlider() {
    return (
        <>
            <div className="industify_slider_alpha" data-desc-show="yes" data-category-show="yes" data-nav-types="square" data-autoplay-switch="enabled" data-autoplay-time="8000" data-effect="cards" data-progress="enabled" data-box-pos="cr" data-img-effect="enabled" data-text-effect="enabled">

                {/* <!-- Alpha Slider: navigation --> */}
                <div className="owl_control">
                    <div className="fn_prev"><span><span className="a"></span><span className="b"></span><span className="c"></span></span></div>
                    <div className="fn_next"><span><span className="a"></span><span className="b"></span><span className="c"></span></span></div>
                </div>
                {/* <!-- /Alpha Slider: navigation --> */}

                {/* <!-- Alpha Slider: pagination --> */}
                <div className="swiper-pagination"></div>
                {/* <!-- /Alpha Slider: pagination --> */}

                {/* <!-- Alpha Slider: wrapper --> */}
                <Swiper
                    spaceBetween={2}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        prevEl: ".fn_prev",
                        nextEl: ".fn_next",
                    }}
                    autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": false
                    }}
                    className="custom-class"
                >


                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider1})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Safety</span></p>
                                  <h3><span>Health, Safety &amp; Environment (HSE)</span></h3>
                                   <div className="desc">
                                     <span>
                                       We are committed to maintaining the highest standards of health, safety, and environmental protection
                                       by proactively identifying risks, preventing incidents, and promoting a strong safety culture across
                                       all operations.
                                     </span>
                                   </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider2})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                   <div className="in">
                                    <p><span>Health</span></p>
                                    <h3><span>Occupational Health Management</span></h3>
                                    <div className="desc">
                                      <span>
                                        Promoting workforce wellbeing through preventive healthcare programs,
                                        hazard exposure control, and continuous monitoring of occupational health risks.
                                      </span>
                                    </div>
                                  </div>
                                  
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider3})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                      <p><span>Modern</span></p>
                                      <h3><span>Innovative Solutions &amp; Technology</span></h3>
                                      <div className="desc">
                                        <span>
                                          Leveraging modern technologies and innovative practices to deliver efficient,
                                          reliable, and future-ready solutions across all project scopes.
                                        </span>
                                      </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider4})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                   <div className="in">
                                      <p><span>Technology</span></p>
                                      <h3><span>Sustainable &amp; Smart Technologies</span></h3>
                                      <div className="desc">
                                        <span>
                                          Integrating advanced technologies and sustainable systems to improve efficiency,
                                          reduce environmental impact, and support long-term operational performance.
                                        </span>
                                      </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider5})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Construction</span></p>
                                        <h3><span>Design Build</span></h3>
                                        <div className="desc"><span>Industify Industry Services has both the experience and expertise to successfully complete your project using the highly effective design-build approach.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}

                </Swiper>

                {/* <!-- Alpha Slider: wrapper --> */}

            </div>
            {/* <!-- /Alpha Slider --> */}
        </>
    )
}
