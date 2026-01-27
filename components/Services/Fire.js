import Sidebar from "@/layouts/sidebar";
import { Check } from "@/public/svg/icon";
import Link from "next/link";


export default function Fire() {
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
                                    <img src="/img/service/single/fire.webp" alt="" />
                                </div>

                              <div className="desc_holder">
                                 <p>
                                   Fire and Gas Alarm Systems play a critical role in protecting lives, assets, and
                                   operations across industrial and commercial environments. Early detection and rapid
                                   response are essential to preventing incidents, minimizing damage, and ensuring
                                   continuous and safe operations. By implementing reliable fire and gas detection
                                   solutions, organizations can significantly reduce risk and enhance overall safety
                                   performance.
                                 </p>
                               
                                 <p>
                                   Our fire and gas alarm system expertise supports clients across industries such as oil
                                   and gas, petrochemicals, power generation, manufacturing, and other high-risk
                                   facilities. We provide solutions covering system design, installation, testing,
                                   commissioning, and maintenance of flame detectors, gas detectors, smoke and heat
                                   sensors, alarm panels, and emergency shutdown interfaces. This integrated approach
                                   ensures accurate detection, dependable performance, and full system reliability.
                                 </p>
                               
                                 <p>
                                   Through strict adherence to international safety standards and best practices, we help
                                   operators improve hazard detection, reduce incident response time, and maintain
                                   compliance with regulatory requirements. Partnering with us ensures your fire and gas
                                   alarm systems are dependable, efficient, and fully prepared to safeguard personnel,
                                   assets, and the environment.
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
                                                    <p>Early Detection & Alarm</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Multi-Sensor Integration</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Automated Notifications & Alerts</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>System Redundancy & Reliability</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Compliance with Safety Standards</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Monitoring & Reporting</p>
                                                </div>
                                            </li>
                                            {/* <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Power Equipment</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Power Generation</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Solar</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Wind, Wave &amp; Tidal</p>
                                                </div>
                                            </li> */}
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
                                <div data-html="includes/random-service" data-index="5" data-count="2"></div>
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
