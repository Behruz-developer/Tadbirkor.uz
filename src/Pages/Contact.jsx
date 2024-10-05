import React, { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className='contact'>

      <div className="container">
        <div className="contact_box">
          <h2 className="contact_title">
            Контакты
          </h2>
          <div className="contact_cards_box">
            <div className="contact_card">
              <p className="contact_subtitle">Адрес</p>
              <p className="contact_text">
                Узбекистан, <br />
                Ташкент, ул. Бабура, 30
              </p>
            </div>
            <div className="contact_card">
              <p className="contact_subtitle">Телефон</p>
              <a href='tel:+998991212020' className="contact_text">
                +998 99 121 20 20
              </a>
            </div>
            <div className="contact_card">
              <p className="contact_subtitle">Электронная почта</p>
              <a href='info@tadbirkoruzbekistan.uz' className="contact_text">
                info@tadbirkoruzbekistan.uz
              </a>
            </div>
          </div>
          <div className="contact_card">
            <p className="contact_subtitle">Мы в соцсетях</p>
            <a href='https://www.instagram.com/tadbirkoruzbekistan.uz/' className="contact_text">
              instagram.com/tadbirkoruzbekistan.uz
            </a>
            <a href='https://www.facebook.com/tadbirkoruzbekistan.uz/' className="contact_text">
              facebook.com/tadbirkoruzbekistan.uz
            </a>
            <a href='https://www.youtube.com/@tadbirkoruzbekistan' className="contact_text">
              youtube.com/tadbirkoruzbekistan
            </a>
            <a href='https://t.me/tadbirkoruzbekistan_uz' className="contact_text">
              t.me/tadbirkoruzbekistan_uz
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact