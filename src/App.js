import React, { Fragment, useState } from 'react';
import 'h8k-components';

import { image1, image2, image3, image4 } from './assets/images';
import { Thumbs, Viewer } from './components';

const title = 'Catalog Viewer';
const TEST_IDS = { toggleSlideShowBtnId: "toggle-slide-show-btn" };

function App() {
    const catalogsList = [
        {
            thumb: image1,
            image: image1
        },
        {
            thumb: image2,
            image: image2
        },
        {
            thumb: image3,
            image: image3
        },
        {
            thumb: image4,
            image: image4
        }
    ];

    const [catalogs] = useState([...catalogsList]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isSlideshowActive, setSlideshowActive] = useState(false);

    const onNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % catalogs.length);
    };

    const onPrev = () => {
        setActiveIndex((prevIndex) => {
            if (prevIndex === 0) return catalogs.length - 1;
            return prevIndex - 1;
        });
    };
    const toggleSlideshow = () => { 
      setSlideshowActive(!isSlideshowActive);
     
  };

    return (
        <Fragment>
            <h8k-navbar header={title}></h8k-navbar>
            <div className='layout-column justify-content-center mt-75'>
                <div className='layout-row justify-content-center'>
                    <div className='card pt-25'>
                        <Viewer catalogImage={catalogs[activeIndex].image} />
                        <div className='layout-row justify-content-center align-items-center mt-20'>
                            <button 
                                className="icon-only outlined"
                                data-testid="prev-slide-btn"
                                onClick={onPrev}
                            >
                                <i className="material-icons">arrow_back</i>
                            </button>
                            <Thumbs 
                                items={catalogs} 
                                currentIndex={activeIndex}
                                selectImage={setActiveIndex} 
                            />
                            <button 
                                className="icon-only outlined"
                                data-testid="next-slide-btn"
                                onClick={onNext}
                            >
                                <i className="material-icons">arrow_forward</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
