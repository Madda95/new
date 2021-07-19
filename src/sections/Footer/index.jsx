import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
    return <div className={styles.box}>
        <div className={styles.boxInfo}>
            <div className={styles.titleCont}>
                <h3>CONTATTI</h3>
                <div className={styles.logo} role='image' alt='New life ronchi logo'></div>
            </div>
            <div className={styles.mainInfo}>
                <a className={styles.street} href={'https://goo.gl/maps/7xtzJsZEFrJrqwp28'}>
                    Via Parini 12 <br/> Ronchi dei Legionari (GO) <br/> Italy
                </a>
                <div className={styles.phone}>
                    <a href='tel: +390481476067'>+39 0481 476067</a>
                </div>
            </div>
            <div className={styles.hours}>
                <Hour day={'Lunedì'} time={'Chiuso'}/>
                <Hour day={'Martedì'} time={'08:30 - 17:00'} />
                <Hour day={'Mercoledì'} time={'14:00 - 20:00'}/>
                <Hour day={'Giovedì'} time={'09:00 - 17:00'}/>
                <Hour day={'Venerdì'} time={'08:30 - 18:30'}/>
                <Hour day={'Sabato'} time={'08:00 - 16:00'}/>
                <Hour day={'Domenica'} time={'Chiuso'}/>
            </div>
        </div>
    </div>
}

const Hour = ({day, time}) => {
    return <div className={styles.hoursBox}>
        <div className={styles.boxDay}>{day}</div>
        <div className={styles.boxHour}>{time}</div>
    </div>
}

export default Footer;