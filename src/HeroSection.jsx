import React from 'react';
import myImage1 from './image-folder/first-image.png';
import myImage2 from './image-folder/second-image.png';
import myImage3 from './image-folder/third-image.png';

const HeroSection = () => {
    return (
        <div className='bg-black'>
            <div className='container'>
                <div className='row pt-5 mb-5'>
                    <div className='col-lg-6 col-md-12 mt-5'>
                        <div>
                            <h5 className='text-warning'>Get Started</h5>
                        </div>
                        <h1 className='mt-3 text-white'>What level of hiker are you?</h1>
                        <span className='mt-5 text-white'>
                            Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced, or expert?
                        </span>
                        <div className='mt-4 z'>
                            <h5 className='text-warning mt-3'>Read more
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="m-3" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </h5>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <img src={myImage1} alt="Hiking Guide" className="img-fluid mb-5" />
                    </div>
                </div>

                <div className='row d-flex align-items-center mt-5 mb-5'>
                    <div className='col-md-6'>
                        <img src={myImage2} alt="Hiking Guide" className="img-fluid mb-5" />
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <h5 className='text-warning'>Get Started</h5>
                        </div>
                        <h1 className='mt-3 text-white'>Picking the right <br /> Hiking Gear!</h1>
                        <span className='mt- text-white'>
                            The nice thing about beginning hiking is that you don’t really need any special gear; you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe if they get sweaty or wet.
                        </span>
                        <h5 className='text-warning mt-3'>Read more
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="m-3" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </h5>
                    </div>
                </div>

                <div className='row d-flex align-items-center mt-5 mb-5'>
                    <div className='col-md-6'>
                        <div className='d-flex'>
                            <h5 className='text-warning'>Hiking Essentials</h5>
                        </div>
                        <h1 className='mt-3 text-white'>Understand Your <br /> Map & Timing</h1>
                        <span className='mt-5 text-white'>
                            To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.
                        </span>
                        <div className='d-flex'>
                            <h5 className='text-warning mt-3'>Read more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="m-3" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg></h5>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src={myImage3} alt="Hiking Guide" className="img-fluid mb-5" />
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <span className='fw-bold text-white'>MNTN</span>
                        <p className='mt-4 text-white'>Get out there & discover your next<br /> slope, mountain & destination!</p>
                        <div className='mt-5 pt-5 text-secondary'>
                            Copyright 2023 MNTN, Inc. Terms & Privacy
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <h5 className='text-warning'>More on The Blog</h5>
                        <ul className='list-unstyled text-white'>
                            <li>About MNTN</li>
                            <li>Contributors & Writers</li>
                            <li>Write For Us</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div className='col-md-3'>
                        <h5 className='text-warning'>More on MNTN</h5>
                        <ul className='list-unstyled text-white'>
                            <li>The Team</li>
                            <li>Jobs</li>
                            <li>Press</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
