import React from 'react';
import styles from './shopCard.module.scss';

const ShopCard = (props) => {
    const { images, bgColor, text, id, alt } = props;

    if(images) {
        return (
            <div className={styles.box}>
                <div className={styles.imagesCarousel}>
                    <div><img src={images} alt={alt}/></div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={`${styles.box} ${styles.bg_box}`} style={{backgroundColor: bgColor}}>
                <span>{text}</span>
            </div>
        )
    }
}

export default ShopCard;