
import Sidebar from '@/layouts/sidebar'
import { Check } from '@/public/svg/icon'
import Link from 'next/link'

export default function HabitatPreparation() {
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
                                    <img src="/img/service/single/habbitat.webp" alt="" />
                                </div>

                         <div className="desc_holder">
                             <p>
                               From confined spaces to critical work zones, our habitat preparation services help
                               establish safe, controlled, and compliant environments for industrial and maintenance
                               operations.
                             </p>
                           
                             <p>
                               Our experienced team provides complete habitat preparation solutions, including
                               enclosure setup, ventilation, lighting, and environmental control. These services
                               enable safe execution of hot work and other critical tasks by isolating hazards,
                               protecting surrounding assets, and ensuring compliance with safety standards and
                               project requirements.
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
                                                    <p>Controlled Work Environment</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Safety & Hazard Isolation</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Weather Protection</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Containment & Cleanliness</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Customized Design & Installation</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Regulatory & Permit Compliance</p>
                                                </div>
                                            </li>
                                            {/* <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Auditing and Systems Certification</p>
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
                                <div data-html="includes/random-service" data-index="3" data-count="2"></div>
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
