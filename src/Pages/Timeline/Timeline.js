import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Timeline = () => {
    React.useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div id="workexperience" className="sectionClass">
            <div className="row ">
                <div className="sectiontitle">
                    <h2>Self-improvement</h2>
                    <span className="headerLine"></span>
                </div>
                <div className="fullWidth eight columns">
                    <ul className="cbp_tmtimeline">
                        <li data-aos="fade-left" data-aos-duration="1000">
                            <div className="cbp_tmicon cbp_tmicon-phone">
                                <i className="faPra fa-briefcase"></i>
                            </div>
                            <div className="cbp_tmlabel wow fadeInRight animated">
                                <h3>Web developer</h3>
                                <div className="date">
                                    <i className="fa fa-calendar"></i>April 2014 - Current
                                </div>
                                <h4><i className="fa fa-flag"></i>Davic Company, Bratislava</h4>
                                <p className="projectParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit obcaecati ipsa quae, iusto laudantium qui, nisi eum modi perspiciatis quasi facilis corporis iure soluta enim incidunt itaque aspernatur sequi tempora.</p>
                            </div>
                        </li>
                        {/* Add other timeline items here */}
                        <li data-aos="fade-left" data-aos-duration="1000">
                            <div className="cbp_tmicon cbp_tmicon-phone">
                                <i className="faPra fa-briefcase"></i>
                            </div>
                            <div className="cbp_tmlabel wow fadeInRight animated">
                                <h3>Web developer</h3>
                                <div className="date">
                                    <i className="fa fa-calendar"></i>April 2014 - Current
                                </div>
                                <h4><i className="fa fa-flag"></i>Davic Company, Bratislava</h4>
                                <p className="projectParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit obcaecati ipsa quae, iusto laudantium qui, nisi eum modi perspiciatis quasi facilis corporis iure soluta enim incidunt itaque aspernatur sequi tempora.</p>
                            </div>
                        </li>
                        <li data-aos="fade-left" data-aos-duration="1000">
                            <div className="cbp_tmicon cbp_tmicon-phone">
                                <i className="faPra fa-briefcase"></i>
                            </div>
                            <div className="cbp_tmlabel wow fadeInRight animated">
                                <h3>Web developer</h3>
                                <div className="date">
                                    <i className="fa fa-calendar"></i>April 2014 - Current
                                </div>
                                <h4><i className="fa fa-flag"></i>Davic Company, Bratislava</h4>
                                <p className="projectParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit obcaecati ipsa quae, iusto laudantium qui, nisi eum modi perspiciatis quasi facilis corporis iure soluta enim incidunt itaque aspernatur sequi tempora.</p>
                            </div>
                        </li>
                        <li data-aos="fade-left" data-aos-duration="1000">
                            <div className="cbp_tmicon cbp_tmicon-phone">
                                <i className="faPra fa-briefcase"></i>
                            </div>
                            <div className="cbp_tmlabel wow fadeInRight animated">
                                <h3>Web developer</h3>
                                <div className="date">
                                    <i className="fa fa-calendar"></i>April 2014 - Current
                                </div>
                                <h4><i className="fa fa-flag"></i>Davic Company, Bratislava</h4>
                                <p className="projectParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit obcaecati ipsa quae, iusto laudantium qui, nisi eum modi perspiciatis quasi facilis corporis iure soluta enim incidunt itaque aspernatur sequi tempora.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
