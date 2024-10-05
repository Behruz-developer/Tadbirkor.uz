import React from 'react'
import business from '../../assets/images/business.png'

const BusinessBg = () => {
    return (
        <div className='business'>
            <div className="business_border">
                <img src={business} alt="" />
                <div className="business_box">
                    <div className="container ">
                        <div className="business_card">
                            <div className="business_card_text">
                                <h2 className="business_title">
                                    Шавкат <br />
                                    Шарипов
                                </h2>
                                <p className="business_subtitle">“Sharq sanoati” концерни раҳбари</p>
                                <p className="business_text">“С другой стороны сложившаяся структура организации в значительной
                                    степени обуславливает создание модели развития. Товарищи!
                                    постоянное информационно-пропагандистское обеспечение нашей
                                    деятельности требуют определения и уточнения позиций, занимаемых
                                    участниками в отношении поставленных задач.”</p>
                                <a href="#!" className='business_link'>
                                    <svg
                                        // width="64"
                                        // height="64"
                                        viewBox="0 0 64 64"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="32" cy="32" r="31.5" stroke="#D3D3D3" />
                                        <path
                                            d="M29.3335 33.3333C29.9061 34.0988 30.6366 34.7322 31.4756 35.1906C32.3145 35.6489 33.2422 35.9215 34.1957 35.9898C35.1492 36.0581 36.1063 35.9205 37.002 35.5864C37.8976 35.2523 38.711 34.7294 39.3868 34.0533L43.3868 30.0533C44.6012 28.796 45.2732 27.112 45.258 25.364C45.2428 23.616 44.5417 21.9439 43.3056 20.7079C42.0696 19.4718 40.3975 18.7707 38.6495 18.7555C36.9015 18.7403 35.2175 19.4123 33.9602 20.6267L31.6668 22.9067"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M34.6664 30.6666C34.0938 29.9011 33.3633 29.2677 32.5244 28.8094C31.6855 28.351 30.7578 28.0785 29.8042 28.0102C28.8507 27.9419 27.8937 28.0795 26.998 28.4136C26.1023 28.7477 25.289 29.2705 24.6131 29.9466L20.6131 33.9466C19.3987 35.204 18.7268 36.888 18.742 38.636C18.7571 40.384 19.4583 42.056 20.6943 43.2921C21.9304 44.5282 23.6025 45.2293 25.3504 45.2445C27.0984 45.2597 28.7824 44.5877 30.0398 43.3733L32.3198 41.0933"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BusinessBg