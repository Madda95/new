import React, { useEffect } from 'react';
import styles from './instagramCarousel.module.scss';
import InfiniteCarousel from 'react-leaf-carousel';
import axios from 'axios';


class InstagramCarousel extends React.Component {

    componentDidMount() {
    }
    
    render() {
            return <div className={styles.box}>
            <a className={styles.followIntent} href="https://www.instagram.com/newl.ife782/" rel="noreferrer" target='_blank'>
                <div className={styles.followText}>
                    SEGUICI <br /> SU <br />INSTAGRAM
                </div>
            </a>
            <div className={styles.instagramCarousel} id='instagram-'>
            <InfiniteCarousel
                arrows={false}
                autoCycle={true}
                cycleInterval={4000}
                slidesSpacing={20}
                showSides={true}
                sidesOpacity={0.8}
            >
                <InstagramPost />
                <InstagramPost />
                <InstagramPost />
                <InstagramPost />
                <InstagramPost />
                <InstagramPost />
                <InstagramPost />
                <InstagramPost />
                <InstagramPost />
                <InstagramPost />
                <InstagramPost />
                <InstagramPost />
                <InstagramPost />
                <InstagramPost />
                <InstagramPost />
                <InstagramPost />
            </ InfiniteCarousel>
            </div>
        </div>
    }
}


const InstagramPost = () => {
    return <div className={styles.instagramBox}></div>
}

export default InstagramCarousel;