import Sidebar from "@/layouts/sidebar";
import { Check } from "@/public/svg/icon";
import Link from "next/link";

export default function ColdCutting() {
    return (
        <>
            <div className="industify_fn_sidebarpage">
                <div className="container">
                    <div className="s_inner">


                        {/* Main Sidebar: Left */}
                        <div className="industify_fn_leftsidebar">

                            {/* Single Service */}
                            <div className="industify_fn_service_single">

                                <div className="img_holder">
                                    <img src="/img/service/single/cold.webp" alt="" />
                                </div>

                          <div className="desc_holder">
                                <p>
                                  Our cold cutting solutions enable operators, contractors, and industrial
                                  facilities to carry out cutting operations safely and efficiently without the use of
                                  heat or sparks. This ensures maximum safety, precision, and minimal risk in hazardous
                                  and sensitive environments, while maintaining project timelines and operational
                                  efficiency.
                                </p>
                              
                                <p>
                                  We perform cold cutting on a wide range of materials and structures, including pipes,
                                  tanks, vessels, structural steel, and offshore or onshore installations. Our services
                                  are ideal for oil & gas, petrochemical, construction, and power industries where hot
                                  work is restricted. By eliminating ignition sources, reducing fire hazards, and
                                  maintaining structural integrity, we help our clients meet strict safety standards,
                                  minimize downtime, and protect personnel, assets, and the environment.
                                </p>
                              </div>


                                {/* Check List Shortcode */}
                                <div className="fn_cs_check_list">
                                    <h3>Service Features</h3>
                                    <div className="list">
                                        <ul>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Spark-Free & Flame-Free Operation</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>High Precision Cutting</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Suitable for Live & In-Service Systems</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Reduced Fire & Explosion Risk</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Versatile Material Capability</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Compliance with Strict Safety Standards</p>
                                                </div>
                                            </li>
                                            <li>
                                                {/* <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Children&apos;s Textile and Apparel Testing</p>
                                                </div> */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Check List Shortcode */}

                                {/* Call to Action Shortcode (with corner) */}
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
                                {/* /Call to Action Shortcode (with corner) */}

                                {/* Get Random Services */}
                                {/* You can change data-index value to exclude 1st service single from the service list. You can also change data-count value to set including services count. */}
                                <div data-html="includes/random-service" data-index="2" data-count="2"></div>
                                {/* /Get Random Services */}

                            </div>
                            {/* /Single Service */}


                        </div>
                        {/* /Main Sidebar: Left */}


                        {/* Main Sidebar: Right */}
                        <div className="industify_fn_rightsidebar">


                            {/* Service List */}
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
                                        <li><Link href="/services/serviceSinglePage4">Bolt Torquing and Tensioning Services</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* /Service List */}

                            {/* Get Sidebar */}
                            <Sidebar />
                            {/* /Get Sidebar */}


                        </div>
                        {/* Main Sidebar: Right */}

                    </div>
                </div>
            </div>
        </>
    )
}
