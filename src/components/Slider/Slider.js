
import React, { useState, useEffect } from 'react';
import "./Slider.css"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Banner5 from "../../BannerImages/Banner5.jpg";


const Slider = () => {

  

    
    return (
        <div className="section">
            <div className="section-center">
               
                   
                  
                        <article className="activeSlide">
                            <img src={Banner5} alt="banner_img" className="banner-img" />
                        </article>
                  
                    
                
               
            </div>
        </div>
    )
}

export default Slider