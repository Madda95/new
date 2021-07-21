import React from 'react';
import styles from './landing.module.scss';
import heroImage from '../../assets/new-life-parrucchiere-ronchi-main.png';
import instagram from '../../assets/icons/instagram.png';
import facebook from '../../assets/icons/facebook.png';
import bg from '../../assets/background.png';
import phone from '../../assets/icons/telefono.png';

const Landing = () => {
    return (
        <div className={styles.box} style={{backgroundImage: 'url(' + bg + ')', backgroundSize:'cover'}}>
            <div className={styles.mainWrapper}>
                <div className={styles.socialWrapper}>
                    <a href="https://www.instagram.com/newl.ife782/" rel="noreferrer" target='_blank'>
                        <img src={instagram} alt='New Life - Parrucchieri ronchi Instagram' className={styles.icon} />
                    </a>
                    <a href="https://www.facebook.com/NewLifeHairStyle" rel="noreferrer" target='_blank'>
                        <img src={facebook} alt='New Life - Parrucchieri ronchi Facebook' className={styles.icon} />
                    </a>
                </div>
                <img src={heroImage} alt='New Life - parrucchieri ronchi dei legionari immagine principale' className={styles.mainImage}/>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>New <br />Life</h1>
                    <div className={styles.designSquare}></div>
                </div>
                <div className={styles.bigSquare}></div>
            </div>
            <a href={'tel:+390481476067'}>
                <div className={styles.call} style={{backgroundImage: 'url(' + phone + ')', backgroundSize: '50%', backgroundPosition: 'center'}}></div>
            </a>
        </div>
    )
}

export default Landing;
