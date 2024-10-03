import React, { useEffect, useState } from 'react'
import upcomng from '../../assets/images/upcoming.png'
import upcomng2 from '../../assets/images/upcoming - Copy.png'
import { HiArrowRight } from 'react-icons/hi';

const Upcoming = () => {

    const [img, setImg] = useState(upcomng)
    useEffect(() => {
        if (window.innerWidth < 500) {
            setImg(upcomng2)
        } 
    }, [])
    return (
        <div className='upcoming'>
            <div className="upcoming_border">
                <img src={img} alt="" />
                <div className="upcoming_box">
                    <div className="container ">
                        <div className="upcoming_card">
                            <div className="upcoming_card_text">
                                <h2 className="upcoming_title">
                                    Все о бизнесе <br />
                                    читайте эксклюзивный <br />
                                    журнал Tadborkor
                                </h2>
                                <a href="#!" className="upcoming_link">Узнать больше <HiArrowRight Right className='upcoming_icon' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Upcoming