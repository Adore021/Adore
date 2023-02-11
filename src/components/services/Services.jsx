import React, { useState } from 'react'
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        

        <div className="service__grid container">
            <div className="info">
                <h2 className="section__title">Things i can do!</h2>

                <p className="Skills__description">As a Developer, I have a broad knowledge of 
                various programming languages such as HTML, CSS, JS, C#, C++, Python, and PHP. 
                I am highly adept at designing effective game and mobile app development through Unity, 
                as well as creating secure client-server interfaces for web applications. I bring a 
                comprehensive set of skills and a creative, effective approach to any task assigned.</p>

                <a className='contact__link' href="#contact">Contact Me</a>
            </div>
            
            <div className="services__container grid">
                <div className="services__content">

                    <h3 className="services__title">FullStack <span className="line"></span></h3>

                    <p className="services__description">
                        can work with these tools and languages.
                    </p>

                    <div className="tool__icons-flex">
                        <i class="fa-brands fa-html5 tool__icon"></i>
                        <i class="fa-brands fa-js tool__icon"></i>
                        <i class="fa-brands fa-python tool__icon"></i>
                    </div>

                    <span className="services__button" onClick={() =>toggleTab(1)}>
                        View More
                    <i className="uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Product Designer</h3>
                            <p className="services__modal-description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Accusantium, vitae nemo voluptatum iure itaque nam 
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop user something
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop user something
                                    </p>
                                </li>
                                
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop user something
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop user something
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">

                    <h3 className="services__title">Game<span className="line"></span></h3>

                    <p className="services__description">
                        can work with various tools and languages.
                    </p>

                    <div className="tool__icons-flex">
                        <i class="fa-brands fa-unity tool__icon"></i>
                        <svg style={{fill:"var(--title-color-dark)"}} class="tool__icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="1.3rem" height="1.3rem"><path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 23.621094 10.5 C 15.773438 12.367188 6.65625 21.90625 7.542969 29.125 C 11.8125 21.59375 14.703125 20.570313 15.488281 20.570313 C 16.277344 20.570313 16.703125 20.996094 16.703125 21.90625 L 16.703125 33.128906 C 16.703125 34.523438 15.355469 34.355469 14.460938 34.21875 C 17.773438 39.160156 25.5 39.5 25.5 39.5 L 28.960938 35.738281 L 32.296875 38.589844 C 37.378906 35.300781 40.734375 29.726563 40.734375 28.882813 C 38.21875 31.65625 36.058594 32.160156 35.574219 32.160156 C 35.089844 32.160156 34.300781 32.101563 34.300781 31.433594 L 34.300781 18.121094 C 34.300781 16.964844 37.480469 13.171875 38.484375 11.894531 C 31.871094 13.628906 29.324219 16.933594 29.324219 16.933594 C 29.324219 16.933594 28.433594 16.265625 26.472656 16.265625 C 27.207031 16.890625 28.234375 18.023438 28.234375 19.359375 L 28.234375 31.550781 C 28.234375 31.550781 26.046875 33.128906 24.773438 33.128906 C 23.5 33.128906 22.589844 32.585938 22.589844 31.613281 L 22.589844 17.050781 C 22.589844 17.050781 20.769531 18.328125 20.769531 14.5625 C 20.769531 12.683594 23.621094 10.5 23.621094 10.5 Z"/></svg>
                        <i class='bx bxl-c-plus-plus tool__icon'></i>
                    </div>

                    <span className="services__button" onClick={() =>toggleTab(1)}>
                        View More
                    <i className="uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Product Designer</h3>
                            <p className="services__modal-description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Accusantium, vitae nemo voluptatum iure itaque nam 
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop user something
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop user something
                                    </p>
                                </li>
                                
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop user something
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop user something
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">

                    <h3 className="services__title">Application <span className="line"></span></h3>

                    <p className="services__description">
                        can work with these tools and languages.
                    </p>

                    <div className="tool__icons-flex">
                        <i class="fa-brands fa-unity tool__icon"></i>
                        <svg style={{fill:"var(--title-color-dark)"}} className="tool__icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="20.8" height="20.8"><path d="M 12 2 C 6.477 2 2 6.477 2 12 C 2 15.056 3.3741563 17.787094 5.5351562 19.621094 L 9.5839844 12.582031 L 9.2949219 12.292969 C 9.1059219 12.104969 9 11.850937 9 11.585938 L 9 7.75 C 9 7.336 9.336 7 9.75 7 L 11 7 L 11 5.5 C 11 5.224 11.224 5 11.5 5 L 12.5 5 C 12.776 5 13 5.224 13 5.5 L 13 7 L 14.25 7 C 14.664 7 15 7.336 15 7.75 L 15 11.585938 C 15 11.850938 14.895031 12.105969 14.707031 12.292969 L 14.417969 12.582031 L 15.888672 15.142578 C 16.413672 14.491578 16.785641 13.706125 16.931641 12.828125 C 17.022641 12.283125 17.537031 11.915859 18.082031 12.005859 C 18.627031 12.095859 18.995297 12.61125 18.904297 13.15625 C 18.655297 14.65325 17.947453 15.968703 16.939453 16.970703 L 18.464844 19.621094 C 20.625844 17.787094 22 15.056 22 12 C 22 6.477 17.523 2 12 2 z M 18.464844 19.621094 C 17.954844 20.054094 17.403453 20.438672 16.814453 20.763672 L 18.029297 22.875 C 18.073297 22.951 18.134938 23.014594 18.210938 23.058594 L 19.457031 23.783203 C 19.493031 23.803203 19.534125 23.814453 19.578125 23.814453 C 19.716125 23.814453 19.828125 23.702453 19.828125 23.564453 L 19.828125 22.128906 C 19.827125 22.040906 19.804719 21.954906 19.761719 21.878906 L 18.464844 19.621094 z M 16.814453 20.763672 L 15.318359 18.164062 C 14.326359 18.696063 13.198 19 12 19 C 10.823 19 9.6946406 18.712063 8.6816406 18.164062 L 7.1855469 20.763672 C 8.6135469 21.549672 10.254 22 12 22 C 13.746 22 15.386453 21.549672 16.814453 20.763672 z M 7.1855469 20.763672 C 6.5955469 20.440672 6.0441563 20.054094 5.5351562 19.621094 L 4.2382812 21.878906 C 4.1942813 21.954906 4.171875 22.039953 4.171875 22.126953 L 4.171875 23.564453 C 4.171875 23.702453 4.283875 23.814453 4.421875 23.814453 C 4.465875 23.814453 4.5089219 23.80125 4.5449219 23.78125 L 5.7890625 23.056641 C 5.8650625 23.012641 5.9286563 22.949047 5.9726562 22.873047 L 7.1855469 20.763672 z M 12 9 A 1.5 1.5 0 0 0 12 12 A 1.5 1.5 0 0 0 12 9 z M 11.048828 14.048828 L 9.6796875 16.427734 C 10.389687 16.801734 11.178 17 12 17 C 12.836 17 13.620406 16.783922 14.316406 16.419922 L 12.951172 14.048828 L 12.533203 14.466797 C 12.238203 14.761797 11.761797 14.761797 11.466797 14.466797 L 11.048828 14.048828 z"/></svg>
                        <i class="bx bxl-c-plus-plus tool__icon"></i>
                    </div>

                    <span className="services__button" onClick={() =>toggleTab(1)}>
                        View More
                    <i className="uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Product Designer</h3>
                            <p className="services__modal-description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Accusantium, vitae nemo voluptatum iure itaque nam 
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop user something
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop user something
                                    </p>
                                </li>
                                
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop user something
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop user something
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">

                    <h3 className="services__title">Design <span className="line"></span></h3>

                    <p className="services__description">
                        can work with both 3D and 2D tools.
                    </p>

                    <div className="tool__icons-flex">
                        <svg style={{fill:"var(--title-color-dark)"}} className="tool__icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20.8px" height="20.8">    <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8 9.9921875 L 11.978516 9.9921875 C 13.947516 9.9921875 15.294922 11.339125 15.294922 13.328125 C 15.294922 15.283125 13.898344 16.623047 11.902344 16.623047 L 9.7636719 16.623047 L 9.7636719 19.857422 L 8 19.857422 L 8 9.9921875 z M 9.7636719 11.46875 L 9.7636719 15.160156 L 11.507812 15.160156 C 12.765813 15.160156 13.503906 14.504125 13.503906 13.328125 C 13.503906 12.119125 12.784672 11.46875 11.513672 11.46875 L 9.7636719 11.46875 z M 19.207031 12.226562 C 20.984031 12.226562 22.099656 13.013047 22.222656 14.373047 L 20.630859 14.373047 C 20.507859 13.847047 20.007844 13.511719 19.214844 13.511719 C 18.442844 13.511719 17.861328 13.881875 17.861328 14.421875 C 17.861328 14.845875 18.21675 15.105391 18.96875 15.275391 L 20.287109 15.576172 C 21.716109 15.897172 22.378906 16.513281 22.378906 17.613281 C 22.378906 19.050281 21.059359 20.007813 19.193359 20.007812 C 17.327359 20.007812 16.151484 19.199844 16.021484 17.839844 L 17.697266 17.839844 C 17.861266 18.393844 18.386375 18.722656 19.234375 18.722656 C 20.088375 18.722656 20.683594 18.346969 20.683594 17.792969 C 20.683594 17.368969 20.363344 17.101359 19.652344 16.943359 L 18.326172 16.636719 C 16.890172 16.308719 16.214844 15.645578 16.214844 14.517578 C 16.214844 13.163578 17.443031 12.226562 19.207031 12.226562 z"/></svg>
                        <svg style={{fill:"var(--title-color-dark)"}} className="tool__icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20.8px" height="20.8px">  <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 19.660156 9.2480469 C 20.282156 9.2480469 20.707031 9.6445469 20.707031 10.185547 C 20.707031 10.726547 20.282156 11.123047 19.660156 11.123047 C 19.045156 11.123047 18.615234 10.726547 18.615234 10.185547 C 18.615234 9.6445469 19.045156 9.2480469 19.660156 9.2480469 z M 11.792969 9.953125 L 13.775391 9.953125 L 17.28125 19.818359 L 15.388672 19.818359 L 14.554688 17.296875 L 10.925781 17.296875 L 10.076172 19.818359 L 8.2929688 19.818359 L 11.792969 9.953125 z M 12.6875 11.832031 L 11.335938 15.900391 L 14.144531 15.900391 L 12.804688 11.832031 L 12.6875 11.832031 z M 18.820312 12.339844 L 20.507812 12.339844 L 20.507812 19.818359 L 18.820312 19.818359 L 18.820312 12.339844 z"/></svg>
                        <svg style={{fill:"var(--title-color-dark)"}} className="tool__icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20.8px" height="20.8px">      <path d="M26.993,4c0-0.191-0.048-0.38-0.155-0.545C26.654,3.171,26.338,3,26,3h-6c-0.392,0-0.748,0.229-0.91,0.586l-4.371,9.616	L9.895,3.553C9.692,3.149,9.246,2.929,8.804,3.02l-5,1c-0.029,0.006-0.05,0.028-0.078,0.036C3.634,4.082,3.553,4.121,3.475,4.17	C3.432,4.198,3.39,4.22,3.351,4.254c-0.082,0.071-0.145,0.156-0.2,0.25C3.136,4.529,3.109,4.544,3.097,4.571	C3.094,4.577,3.095,4.584,3.093,4.59C3.036,4.716,3,4.853,3,5v21c0,0.553,0.448,1,1,1c0.236,0,2.394-0.061,5.555-2.168	C9.833,24.646,10,24.334,10,24v-5.53l2.116,3.997C12.29,22.795,12.629,23,13,23h5c0.092,0,0.182-0.014,0.268-0.039	c0.026-0.007,0.048-0.02,0.073-0.029c0.06-0.022,0.118-0.045,0.172-0.078c0.029-0.017,0.054-0.039,0.081-0.06	c0.045-0.034,0.088-0.068,0.127-0.109c0.026-0.027,0.047-0.057,0.07-0.086c0.019-0.025,0.042-0.046,0.059-0.073	c0.014-0.022,0.02-0.047,0.032-0.07c0.009-0.018,0.023-0.031,0.031-0.049L20,19.962V24c0,0.155,0.036,0.309,0.105,0.447l1,2	C21.275,26.786,21.621,27,22,27h4c0.552,0,1-0.447,1-1V4H26.993z M5,9.026L7.792,14.3L5,21V9.026z M5.667,24.6L8,19v4.454	C7.089,24.019,6.301,24.372,5.667,24.6z M13.602,21L5.511,5.718L8.447,5.13L16.382,21H13.602z M17.947,19.658l-2.087-4.174	c0.014-0.026,0.038-0.042,0.05-0.07L20.644,5h3.817l-4.444,10H20v0.038L17.947,19.658z M22.618,25L22,23.764v-8.302l3-6.75V25	H22.618z"/></svg>
                    </div>

                    <span className="services__button" onClick={() =>toggleTab(1)}>
                        View More
                    <i className="uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Product Designer</h3>
                            <p className="services__modal-description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Accusantium, vitae nemo voluptatum iure itaque nam 
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop user something
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop user something
                                    </p>
                                </li>
                                
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop user something
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop user something
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Services
