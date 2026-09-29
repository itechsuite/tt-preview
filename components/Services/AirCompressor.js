import Sidebar from "@/layouts/sidebar";
import { Check } from "@/public/svg/icon";
import Link from "next/link";


export default function AirCompressor() {
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
                                    <img src="/img/service/single/air_compressor.webp" alt="" />
                                </div>

                              <div className="desc_holder">
                                 <p>
                                   Compressed air is a vital utility across industrial and oil & gas operations, powering pneumatic tools, instrumentation, process control systems, and a wide range of plant equipment. A reliable air compressor system is essential to maintaining productivity, minimizing downtime, and keeping operations running safely and efficiently.
                                 </p>

                                 <p>
                                   Our air compressor services cover installation, commissioning, routine and preventive maintenance, troubleshooting, overhaul, and repair of reciprocating, screw, and centrifugal compressors. We also provide air dryer and filtration servicing, leak detection, and performance optimization to ensure clean, dry, and consistent air supply across your facility.
                                 </p>

                                 <p>
                                   Working to manufacturer specifications and industry best practices, our technicians help clients extend equipment life, reduce energy consumption, and prevent costly breakdowns. Partnering with us ensures your compressed air systems deliver dependable performance when you need it most.
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
                                                    <p>Installation & Commissioning</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Preventive & Routine Maintenance</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Troubleshooting & Repairs</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Compressor Overhaul</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Air Dryer & Filtration Servicing</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <Check className="fn__svg" />
                                                    <p>Leak Detection & Energy Optimization</p>
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
                                        <li><Link href="/services/Bolt_Torquing_&_Tensioning">Bolt Torquing and Tensioning Services</Link></li>
                                        <li><Link href="/services/Air_Compressor_Services">Air Compressor Services</Link></li>
                                        <li><Link href="/services/Water_Fire_Pump_Services">Water Fire Pump Services</Link></li>
                                        <li><Link href="/services/Welding_Machine_Services">Welding Machine Services</Link></li>
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
