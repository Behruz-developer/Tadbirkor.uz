import React from 'react'
import interview1 from '../../assets/images/interview1.png'
import { NavLink } from 'react-router-dom'

const Interview = ({title, showButton, style}) => {
    return (
        <div className='interview' style={style}>
            <div className="container">
                <h2 className='interview_title'>{title}</h2>
                <div className="interview_box">
                    <NavLink to="/business" className="interview_card">
                        <img className='interview_img' src={interview1} alt="" />
                        <div className="interview_card_text">
                            <h4 className="interview_subtitle">
                                Шавкат <br />
                                Шарипов
                            </h4>
                            <p className='interview_text'>“Sharq sanoati” концерни раҳбари</p>
                        </div>
                    </NavLink>
                </div>
                {showButton && <button className='interview_btn'>Посмотреть все</button>}
            </div>
        </div>
    )
}

export default Interview