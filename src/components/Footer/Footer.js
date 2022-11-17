import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
export const Footer = () => {
    return (
        <footer className="footer-section mt-5">
            <div className="container">
                <div className="footer-cta pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    <span>93/A New iskaton road, Dhaka</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-phone"></i>
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>01830134593</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="far fa-envelope-open"></i>
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <span>mail@info.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <Link href="index.html"><img src="https://sslwireless.com/wp-content/uploads/2020/05/ssl-wireless-logo.png" className="img-fluid" alt="logo" /></Link>
                                </div>
                                <div className="footer-text">
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <Link href="#"><i className="fab fa-twitter twitter-bg"></i></Link>
                                    <Link href="#"><i className="fab fa-google-plus-g google-bg"></i></Link>
                                    <Link href="#"><i className="fab fa-facebook-f facebook-bg"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><Link href="#">Home</Link></li>
                                    <li><Link href="#">about</Link></li>
                                    <li><Link href="#">services</Link></li>
                                    <li><Link href="#">portfolio</Link></li>
                                    <li><Link href="#">Contact</Link></li>
                                    <li><Link href="#">About us</Link></li>
                                    <li><Link href="#">Our Services</Link></li>
                                    <li><Link href="#">Expert Team</Link></li>
                                    <li><Link href="#">Contact us</Link></li>
                                    <li><Link href="#">Latest News</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button><i className="fab fa-telegram-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>Copyright &copy; 2022, All Right Reserved <Link href="#">Ariful Islam</Link></p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div className="footer-menu">
                                <ul>
                                    <li><Link href="#">Home</Link></li>
                                    <li><Link href="#">Terms</Link></li>
                                    <li><Link href="#">Privacy</Link></li>
                                    <li><Link href="#">Policy</Link></li>
                                    <li><Link href="#">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
