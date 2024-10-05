import React, { useEffect } from 'react'
import about from '../assets/images/about.png'

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className='about'>
      <img src={about} alt="" className="about_img" />
      <div className="container">
        <div className="about_box">
          <div className="about_card1">
            <h2 className="about_title">
              О проекте
            </h2>
            <p className="about_text">
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
            </p>
            <p className='about_text'>
              По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен
            </p>
          </div>
          <div className="about_card2">
            <h2 className="about_title">Редакция</h2>
            <div className="about_card2_box">
              <div className="about_card2_box_editorial">
                <div className="about_card2_box_editorial_card">
                  <p className="about_card2_box_editorial_card_text">Таҳририят кенгаши раиси</p>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                </div>
                <div className="about_card2_box_editorial_card">
                  <p className="about_card2_box_editorial_card_text">Таҳририят кенгаши раиси</p>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                </div>
                <div className="about_card2_box_editorial_card">
                  <p className="about_card2_box_editorial_card_text">Таҳририят кенгаши раиси</p>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                </div>
                <div className="about_card2_box_editorial_card">
                  <p className="about_card2_box_editorial_card_text">Таҳририят кенгаши раиси</p>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                </div>
              </div>
              <div className="about_card2_box_editorial">
                <div className="about_card2_box_editorial_card">
                  <p className="about_card2_box_editorial_card_text">Таҳририят кенгаши раиси</p>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                </div>
                <div className="about_card2_box_editorial_card">
                  <p className="about_card2_box_editorial_card_text">Таҳририят кенгаши раиси</p>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                </div>
                <div className="about_card2_box_editorial_card">
                  <p className="about_card2_box_editorial_card_text">Таҳририят кенгаши раиси</p>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                </div>
                <div className="about_card2_box_editorial_card">
                  <p className="about_card2_box_editorial_card_text">Таҳририят кенгаши раиси</p>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                </div>
              </div>
              <div className="about_card2_box_editorial">
                <div className="about_card2_box_editorial_card">
                  <p className="about_card2_box_editorial_card_text">Таҳририят кенгаши раиси</p>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                </div>
                <div className="about_card2_box_editorial_card">
                  <p className="about_card2_box_editorial_card_text">Таҳририят кенгаши раиси</p>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                </div>
                <div className="about_card2_box_editorial_card">
                  <p className="about_card2_box_editorial_card_text">Таҳририят кенгаши раиси</p>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                </div>
                <div className="about_card2_box_editorial_card">
                  <p className="about_card2_box_editorial_card_text">Таҳририят кенгаши раиси</p>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                  <h5 className="about_card2_box_editorial_card_subtitle">ДАВРОН ВАХАБОВ</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About