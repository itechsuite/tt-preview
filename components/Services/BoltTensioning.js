import Sidebar from "@/layouts/sidebar";
import { Check } from "@/public/svg/icon";
import Link from "next/link";

export default function BoltTensioning() {
    return (
        <>
            <div className="industify_fn_sidebarpage">
                <div className="container">
                    <div className="s_inner">


                        {/* Main Sidebar: Left  */}
                        <div className="industify_fn_leftsidebar">

                            {/* Single Service  */}
                            <div className="industify_fn_service_single">

                                <div className="img_holder">
                         <img src="/img/service/single/bolt.webp" alt="" />
                              </div>
                        <div className="desc_holder">
                       <p>
                         Ensure the strength, safety, and reliability of your mechanical joints by using our
                         specialised bolt torquing services. Proper bolt tightening is critical to the
                         performance and integrity of industrial and engineering systems.
                       </p>
                     
                       <p>
                         Industries such as oil & gas, construction, power, and manufacturing face constant
                         challenges including joint failure risks, uneven load distribution, downtime, and
                         strict compliance with safety standards. Incorrect bolt tension can lead to leaks,
                         equipment damage, and costly shutdowns.
                       </p>
                     
                       <p>
                         At our company, we provide precise and controlled bolt torquing solutions using
                         calibrated tools and proven procedures. Our services help clients achieve accurate
                         preload, maintain joint integrity, and extend the lifespan of critical equipment and
                         structures.
                       </p>
                     
                       <p>
                         We are your trusted partner in delivering safe, efficient, and compliant bolt
                         torquing services—ensuring every connection is secure, reliable, and ready to perform
                         under demanding operational conditions.
                       </p>
              </div>
              
              
                {/* Check List Shortcode  */}
                          <div className="fn_cs_check_list">
                                    <h3>Service Features</h3>
                                    <div className="list">
                                        <ul>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Accurate Bolt Load Control</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Improved Joint Integrity</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Use of Certified & Calibrated Tools</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Reduced Installation Stress</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Compliance with Industry Standards</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Detailed Job Documentation & Reporting</p>
                                                </div>
                                            </li>
                                            <li>
                                                {/* <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Interiors</p>
                                                </div> */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Check List Shortcode  */}

                                {/* Call to Action Shortcode (with corner)  */}
                                <div className="fn_cs_call_to_action corner">
                                    <div className="container">
                                        <div className="cta_holder">
                                            <div className="title_holder">
                                                <h3>Torqtech </h3>
                                                <p>We give you the best service. Contact us for detailed information.</p>
                                            </div>
                                            <div className="link_holder">
                                                <Link href="/contact">Our Responsibility</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Call to Action Shortcode (with corner)  */}

                                {/* Get Random Services  */}
                                {/* You can change data-index value to exclude 1st service single from the service list. You can also change data-count value to set including services count.  */}
                                <div data-html="includes/random-service" data-index="1" data-count="2"></div>
                                {/* /Get Random Services  */}

                            </div>
                            {/* /Single Service  */}


                        </div>
                        {/* /Main Sidebar: Left  */}


                        {/* Main Sidebar: Right  */}
                        <div className="industify_fn_rightsidebar">


                            {/* Service List  */}
                            <div className="service_list_as_function">
                                <div className="title">
                                    <h3>Full list of Services</h3>
                                </div>
                                <div className="list_holder">
                                    <ul>
                                        <li><Link href="/services/Bolt_Tensioning">Bolt Tensioning Service</Link></li>
                                        <li><Link href="/services/Cold_Cutting">Cold Cutting Services</Link></li>
                                        <li><Link href="/services/Habitat_preparation">Habitat Preparation Services</Link></li>
                                        <li><Link href="/services/Habitat_Service">Habitat Services</Link></li>
                                        <li><Link href="/services/Fire_&_Gas_Alarm_System">Fire and Gas Alarm System Services</Link></li>
                                        <li><Link href="/services/Bolt_Torquing_&_Tensioning">Bolt Torquing and Tensioning Services</Link></li>
                                        {/* <li><Link href="/services/serviceSinglePage3">Housewares &amp; Home Decor</Link></li>
                                        <li><Link href="/services/serviceSinglePage2">Textiles &amp; Apparel</Link></li>
                                        <li className="active"><Link href="/services/serviceSinglePage1">Construction &amp; Engineering</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                            {/* /Service List  */}

                            {/* Get Sidebar  */}
                            <Sidebar />
                            {/* /Get Sidebar  */}


                        </div>
                        {/* Main Sidebar: Right  */}

                    </div>
                </div>
            </div>
        </>
    )
}
