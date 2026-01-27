import { Quotes } from "@/public/svg/icon";

const testimonial = "/img/testimonial/testimonilal.webp"

export default function HomeTetimonial() {
    return (
        <>
            <div className="testimonial_section" style={{ "backgroundImage": `url(${testimonial})` }}>

                <div className="overlay"></div>

                {/* <!-- Single Testimonial Shortcode --> */}
                <div className="fn_cs_single_testimonial">
                    <div className="container">
                        <div className="inner">
                            <Quotes className="fn__svg" />
                            <div className="content_holder">
                              <p>
                                We needed precise and reliable bolt torquing and tensioning services for our offshore 
                                facility, and TorqTech delivered beyond our expectations. Their team ensured every joint 
                                met safety and quality standards, and they kept us informed throughout the entire process. 
                                The results have significantly improved our operations, and our engineers highly recommend their services!
                              </p>
                              <h3>Michael Anderson</h3>
                              <h5>Operations Manager, Gulf Offshore Ltd.</h5>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- /Single Testimonial Shortcode --> */}

            </div>
        </>
    )
}
