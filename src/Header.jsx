import React from 'react';

const Header = () => {
    return (
        <div className='bg-img' style={{ position: 'relative', height: '100vh' }}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid mt-5">
                    <a className="navbar-brand fw-bold text-white ms-5" href="#">MNTN</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav justify-content-center w-100">
                            <a className="nav-link active fw-bold text-white" aria-current="page" href="#">Equipment</a>
                            <a className="nav-link active fw-bold text-white ms-4" aria-current="page" href="#">About us</a>
                            <a className="nav-link active fw-bold text-white ms-4" aria-current="page" href="#">Blog</a>
                        </div>
                    </div>
                    <a className="navbar-brand text-end me-5 fw-bold text-white" href="#">Account</a>
                </div>
            </nav>

            <div className="d-flex flex-column justify-content-center align-items-center text-center mt-5 pt-5" style={{ height: '70vh' }} >

                <h1 className='text-white text-start display-3 fw-bold'><p className='text-warning fs-6 ' >A Hiking guide</p>
                    Be Prepared For The <br />
                    Mountains and Beyond!<p className='text-white fs-6 mt-4'>scroll down
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="m-3" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                        </svg> </p>
                </h1>

            </div>


        </div>
    );
}

export default Header;

