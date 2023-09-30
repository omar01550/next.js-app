"use client"
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoImage from '../../../images/logo.png';
import Image from 'next/image';

import "./footer.css";

const Footer = () => {
    return (
        <footer class="footer-section p-5">
            <div class="container">
                <div class="footer-cta pt-5 ">
                    <div class="row">
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="cta-text">
                                    <h4>ecommerce-next-app</h4>

                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <i class="fas fa-phone"></i>
                                <div class="cta-text">
                                    <h4>Call us</h4>
                                    <span>+20 1550180558</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <i class="far fa-envelope-open"></i>
                                <div class="cta-text">
                                    <h4>Mail us</h4>
                                    <span>arom57818@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-content pt-5 pb-1">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 mb-50">
                            <div class="footer-widget">
                                <div class="footer-logo">
                                    <a href="index.html"><Image src={LogoImage} class="img-fluid" alt="logo" /></a>
                                </div>
                                <div class="footer-text">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                </div>
                                <div class="footer-social-icon">
                                    <span>Follow us</span>
                                    <ul class="social_icon">
                                        <li><a><FacebookIcon /></a></li>
                                        <li><a href="#">
                                            <GitHubIcon />
                                        </a></li>
                                        <li><a href="#">

                                            <InstagramIcon />
                                        </a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div class="footer-widget">
                                <div class="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a href="#">Our Team</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Our Gallery</a></li>
                                    <li><a href="#">Selection Process</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Sponsorship</a></li>
                                    <li><a href="#">Our Policies</a></li>
                                    <li><a href="#">Our Team</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                            </div>
                        </div> */}
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div class="footer-widget">
                                {/* <div class="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div class="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div> */}
                                <div class="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button><i class="fab fa-telegram-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="copyright-area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div class="copyright-text">
                                <p>Copyright &copy; 2023, All Right Reserved <a href="#">Soumitra Ghosh</a></p>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div class="footer-menu">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Policy</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </footer >
    )
}

export default Footer