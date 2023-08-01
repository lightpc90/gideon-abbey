import React from "react";
import style from './header.module.css'

const CTA = () => {
    return (
        <div className={style.cta}>
            <a href='#' download className="btn">Download CV</a>
            <div className={style.box}>
                <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
            </div>
        </div>
    )
}

export default CTA;