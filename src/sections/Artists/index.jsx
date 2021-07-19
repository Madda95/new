import React from 'react';
import styles from './artists.module.scss';
import data from './data';


const Artists = () => {
    return <div className={styles.box}>
        <div className={styles.design}></div>
        <h3>LE PARUCCHIERE</h3>
        <div className={styles.artirstContainer}>
        {data.map(item => <ArtistCard {...item} />)}        
        </div>
    </div>
}



const ArtistCard = ({img, alt, name, description}) => {
    return <div className={styles.artistBox}>
        <div className={styles.artistGB} style={{backgroundImage: `url(${img})`}} role="img" alt={alt} >
        </div>
        <div className={styles.artistImage} style={{backgroundImage: `url(${img})`}} role="img" alt={alt}></div>
        <div className={styles.infoBox}>
            <div className={styles.basicInfo}>
                <div className={styles.name}>{name}</div>
            </div>
            <p>{description}</p>
        </div>
    </div>
}

export default Artists;