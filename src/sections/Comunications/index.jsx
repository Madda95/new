import React from 'react';
import styles from './comunications.module.scss';
import hairDonation from '../../assets/donazione_capelli.png';

const Comunications = () => {
    return <div className={styles.box}>
        <h3>COMUNICAZIONI</h3>
        <div className={styles.comunicationList}>
            <ComunicationCard image={hairDonation}/>
        </div>
    </div>
}


const ComunicationCard = ({title, description, image}) => {
    return <div className={styles.bunner} style={{backgroundImage: 'url(' + image + ')'}}>
        <div className={styles.container}></div>
    </div>
}

export default Comunications;