import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'
import Sidebar from '@/layouts/sidebar'
import Link from 'next/link'

export const metadata = {
    title: 'Services',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} />
            <div className="industify_fn_sidebarpage">
                <div className="container">
                    <div className="s_inner">


                        {/* Main Sidebar: Left */}
                        <div className="industify_fn_leftsidebar">
                            <ul className="industify_fn_service_list">
                                <li>
                                    <div className="item">
                                        <div className="item_in">
                                            <div className="img_holder">
                                                <div className="img_abs" style={{ "backgroundImage": "url(/img/service/single/bolt.webp)" }}></div>
                                                <Link href="/services/Bolt_Tensioning"></Link>
                                            </div>
                                            <div className="title">
                                                <h3>
                                         <Link href="/services/Bolt_Tensioning">Bolt Tensioning Services</Link>
                                       </h3>
                                       <p>
                                         Our bolt tensioning services ensure precise and uniform preload on critical bolted joints,
                                         enhancing joint integrity, safety, and reliability across industrial and oil & gas
                                         operations. Using calibrated hydraulic tensioning equipment and approved procedures, we
                                         help prevent joint failure, leakage, and unplanned downtime.
                                       </p>

                                            </div>
                                            <div className="read_more">
                                                <Link href="/services/Bolt_Tensioning">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="item_in">
                                            <div className="img_holder">
                                                <div className="img_abs" style={{ "backgroundImage": "url(/img/service/single/cold.webp)" }}></div>
                                                <Link href="/services/Cold_Cutting"></Link>
                                            </div>
                                            <div className="title">
                                               <h3>
                                      <Link href="/services/Cold_Cutting">Cold Cutting Services</Link>
                                    </h3>
                                    <p>
                                      Our cold cutting services provide a safe and efficient method for cutting pipes,
                                      vessels, and structural steel without the use of heat or sparks. This minimizes fire and
                                      explosion risks in hazardous environments while ensuring precision, compliance, and
                                      uninterrupted operations.
                                    </p>

                                            </div>
                                            <div className="read_more">
                                                <Link href="/services/Cold_Cutting">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="item_in">
                                            <div className="img_holder">
                                                <div className="img_abs" style={{ "backgroundImage": "url(/img/service/single/bolt_tension.webp)" }}></div>
                                                <Link href="/services/Bolt_Torquing_&_Tensioning"></Link>
                                            </div>
                                            <div className="title">
                                                <h3>
                                        <Link href="/services/Bolt_Torquing_&_Tensioning">
                                          Bolt Torquing & Tensioning Services
                                        </Link>
                                      </h3>
                                      <p>
                                        Our bolt torquing and tensioning services ensure accurate load application and uniform
                                        joint integrity for critical mechanical connections. Using calibrated hydraulic tools
                                        and certified procedures, we enhance safety, prevent leaks, and ensure long-term
                                        reliability in oil & gas and industrial operations.
                                      </p>

                                            </div>
                                            <div className="read_more">
                                                <Link href="/services/Bolt_Torquing_&_Tensioning">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="item_in">
                                            <div className="img_holder">
                                                <div className="img_abs" style={{ "backgroundImage": "url(/img/service/single/fire.webp)" }}></div>
                                                <Link href="/services/Fire_&_Gas_Alarm_System"></Link>
                                            </div>
                                            <div className="title">
                                               <h3>
                                            <Link href="/services/Fire_&_Gas_Alarm_System">
                                              Fire & Gas Alarm System Services
                                            </Link>
                                          </h3>
                                          <p>
                                            Our fire and gas alarm system services provide early detection and rapid response to fire
                                            and gas hazards within industrial facilities. From installation and testing to
                                            commissioning and maintenance, we deliver reliable safety systems that protect
                                            personnel, assets, and operations.
                                          </p>

                                            </div>
                                            <div className="read_more">
                                                <Link href="/services/Fire_&_Gas_Alarm_System">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="item_in">
                                            <div className="img_holder">
                                                <div className="img_abs" style={{ "backgroundImage": "url(/img/service/single/habserv.webp)" }}></div>
                                                <Link href="/services/Habitat_Service"></Link>
                                            </div>
                                            <div className="title">
                                                <h3>
                                                 <Link href="/services/Habitat_Service">
                                                   Habitat Service
                                                 </Link>
                                               </h3>
                                               <p>
                                                 Our habitat services provide safe, enclosed, and controlled work environments for
                                                 maintenance and repair activities in hazardous areas. By enabling work without full
                                                 system shutdown, we help clients maintain productivity while ensuring strict safety
                                                 compliance.
                                               </p>

                                            </div>
                                            <div className="read_more">
                                                <Link href="/services/Habitat_Service">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <li>
                                    <div className="item">
                                        <div className="item_in">
                                            <div className="img_holder">
                                                <div className="img_abs" style={{ "backgroundImage": "url(/img/service/single/4.jpg)" }}></div>
                                                <Link href="/services/serviceSinglePage4"></Link>
                                            </div>
                                            <div className="title">
                                                <h3><Link href="/services/serviceSinglePage4">Medical Devices</Link></h3>
                                                <p>Get your medical device tested and into the hands of your customers faster than ever before. Time to market starts with partnership, and for more</p>
                                            </div>
                                            <div className="read_more">
                                                <Link href="/services/serviceSinglePage4">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li> */}
                            </ul>

                            <div className="clearfix"></div>

                            {/* <div className="industify_fn_pagination">
                                <ul>
                                    <li className="active"><span className="current">1</span></li>
                                    <li><Link href="#">2</Link></li>
                                    <li className="view"><p>Viewing page 1 of 2</p></li>
                                </ul>
                            </div> */}


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
                                        {/* <li><Link href="/services/Habitat_preparation">Habitat Preparation Services</Link></li> */}
                                        <li><Link href="/services/Habitat_Service">Habitat Services</Link></li>
                                        <li><Link href="/services/Fire_&_Gas_Alarm_System">Fire and Gas Alarm System Services</Link></li>
                                        <li><Link href="/services/Bolt_Torquing_&_Tensioning">Bolt Torquing and Tensioning Services</Link></li>
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
        </Layout>
    )
}
