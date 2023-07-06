import React from 'react';
import socailLinks from '../../../assets/social.png'
import './footer.css'

const Footer = () => {
    return (
        <div className='bg-[#F63E7B] -mb-10 p-10 text-white mt-10'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4'>
                <div>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    <p>H#000 (0th Floor), Road #00, <br />
                        New DOHS, Mohakhali, Dhaka, Bangladesh
                    </p>
                </div>
                <div>
                    <h2>Company</h2>
                    <p>About</p>
                    <p>Project</p>
                    <p>Our Team</p>
                    <p>Teams Conditions</p>
                    <p>Submit Listing</p>
                </div>
                <div>
                    <h2>Quick Links</h2>
                    <p>Quick Link</p>
                    <p>Rentals</p>
                    <p>Sales</p>
                    <p>Contact</p>
                    <p>Our blog</p>
                </div>
                <div>
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. Purus commodo ipsum <br />
                        duis laoreet maecenas. Feugiat </p>
                        <img src={socailLinks} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;