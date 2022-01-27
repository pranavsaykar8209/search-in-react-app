import React from 'react'
import './about1.css'
import "./Responsive.css"

const Aboutus = () => {
    return (
        <div className='container'>
            {/* <div className="temp1">The Focus : Intrigue, Engage, Convert, Repeat</div> */}
            <div className="about1">Something More About US</div>
            <div className="aboutus">
                <div className="left">
                    
                    <img src="https://searchin.co.in/images/new_icon.webp" alt="" className="img1" />
                </div>

                <div className="right">We're team of passionate individuals excelling in engineering and business operations.
                    Our vision is to build a complete digital ecosystem for indoor spaces.
                    By utilizing the most advanced A.I. and IoT technologies, in a reliable and cost-efficient manner.</div>
            </div>
        </div>
    )
}

export default Aboutus
