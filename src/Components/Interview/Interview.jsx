import React from 'react'
import interview1 from '../../assets/images/card.png'
import { NavLink } from 'react-router-dom'

const Interview = ({ title, showButton, style }) => {
    return (
        <div className='interview' style={style}>
            <div className="container">
                <h2 className='interview_title'>{title}</h2>
                <div className="interview_box">
                    <NavLink to="/business" className="interview_card">
                        <img className='interview_img' src={interview1} alt="" />
                        <p className="interview_subtitle">Шесть шагов по запуску <br />
                            франшизы, которую будут <br />
                            покупать
                        </p>
                        <p className="interview_text">
                            Эксперт по франчайзингу Сергей Дегтярев — <br />
                            о том, когда нужно создавать франшизу и как это
                            делать грамотно
                        </p>
                        <div className="interview_description">
                            <p className="interview_description_text">
                                24 октября
                            </p>
                            <p className="interview_description_text">
                                #мнения
                            </p>
                            <p className="interview_description_text">
                                #франшиза
                            </p>
                        </div>
                    </NavLink>
                </div>
                {showButton && <button className='interview_btn'>Посмотреть все</button>}
            </div>
        </div>
    )
}

export default Interview