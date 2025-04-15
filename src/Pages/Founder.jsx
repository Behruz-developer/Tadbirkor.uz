import React, { useEffect, useState } from 'react';
import Interview from '../Components/Interview/Interview';

const Founder = () => {
    const [activeTag, setActiveTag] = useState(0);

    const tags = [
        'Все',
        'Бизнес',
        'Спорт',
        'Банк',
        'Сельское хозяйство',
        'Шоу бизнес'
    ];

    const handleTagClick = (index) => {
        setActiveTag(index);
    };
    const interviewStyle = {
        marginTop: '-35px',
        marginBottom: '-40px',
    };
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <div className='founder'>
            <h2 className='founder_title'>Интервью</h2>
            <div className="container">
                <div className="founder_box">
                    <div className="founder_card">
                        {tags.map((tag, index) => (
                            <a
                                href="#!"
                                key={index}
                                className={`founder_tag ${activeTag === index ? 'active' : ''}`}
                                onClick={() => handleTagClick(index)}
                            >
                                {tag}
                            </a>
                        ))}
                    </div>
                </div>
                {/* <Interview showButton={false} style={interviewStyle} /> */}
            </div>
        </div>
    );
};

export default Founder;
