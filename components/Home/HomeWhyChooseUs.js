import { Certificate, Checked, Stars } from "@/public/svg/icon";
import Link from "next/link";

const rightImage = "/img/service/Iso.webp"

export default function HomeWhyChooseUs() {
    return (
        <>
            <div className="service_section">

                {/* <!-- About with Rating Shortcode --> */}
                <div className="fn_cs_about_with_rating">
                    <div className="container">
                        <div className="awr_inner">
                            <div className="left_part">
                             <div className="title_holder">
                                  <h3>Why choose our services?</h3>
                                  <p>
                                    At TorqTech, we rely on integrity, precision, and professionalism. 
                                    Our success comes from a commitment to these core values, ensuring every project is 
                                    executed safely and efficiently.
                                  </p>
                                  <p>
                                    TorqTech is a specialist in bolt torquing, tensioning, and related services for the oil 
                                    & gas industry. We provide integrated solutions, delivering technical expertise, 
                                    quality assurance, and reliable service to clients both onshore and offshore. Our 
                                    team works collaboratively to ensure every operation meets international safety and 
                                    performance standards.
                                  </p>
                                </div>

                                <div className="signature">
                                    <Certificate className="fn__svg" />
                                    <p>We have a<br />ISO Certificate.</p>
                                </div>
                            </div>
                            <div className="right_part">
                                <div className="r_inner">
                                    <div className="top_section">
                                        <div className="badge_holder">
                                            <div className="badge_left">
                                                <div className="b_title">
                                                    <h3>World&apos;s Leading Oil & Gas Industry<br />Corporation</h3>
                                                </div>
                                                <div className="b_desc"><span className="year">18</span><span className="text">Years of Experience</span></div>
                                            </div>
                                            <div className="badge_right" style={{ "backgroundImage": `url(${rightImage})` }}></div>
                                        </div>
                                        <div className="rating_holder">
                                            <div className="r_header"></div>
                                            <div className="r_footer"></div>
                                            {/* <Link href="#"></Link> */}
                                            <Stars className="fn__svg" />
                                            <h3 className="rating_number">9.7</h3>
                                            <h3 className="rating_text">Customer Rating</h3>
                                        </div>
                                    </div>
                                    <div className="bottom_section">
                                        <div className="list">
                                            <ul>
                                                <li>
                                                    <div className="item">
                                                        <span className="icon">
                                                            <Checked className="fn__svg" />
                                                        </span>
                                                        <p>Best talent in the industry business.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <span className="icon">
                                                            <Checked className="fn__svg" />
                                                        </span>
                                                        <p>One of the most expirienced company.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <span className="icon">
                                                            <Checked className="fn__svg" />
                                                        </span>
                                                        <p>We have completed over 3000 projects.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <span className="icon">
                                                            <Checked className="fn__svg" />
                                                        </span>
                                                        <p>Most dedicated and passionate team.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <span className="icon">
                                                            <Checked className="fn__svg" />
                                                        </span>
                                                        <p>Company has over 2000 workers.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /About with Rating Shortcode --> */}

            </div>
        </>
    )
}
