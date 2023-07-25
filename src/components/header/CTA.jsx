import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">Download CV</a>
            <div className="box">
                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </div>
    )
}

export default CTA;