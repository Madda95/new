import React from 'react';
import styles from './clients.module.scss';
import reviews from './data';

const Clients = () => {
    return <div className={styles.box}>
        <div className={styles.reviewsContainer}>
            <div className={styles.textCont}>
                <span className={styles.testEmp}>DICONO DI NOI</span>
                {reviews.map(item => <ReviewCard image={item.image} name={item.name} lastname={item.lastname} review={item.review} key={item.lastname} />)}
            </div>
        </div>
    </div>
}

const ReviewCard = ({image, name, lastname, review}) => {
    return <div className={styles.reviewsCard}>
        <div className={styles.clientsCardContainer}>
            <div className={styles.clientsCard}>
                <div className={styles.imgCont}>
                    <img src={image} alt={'Recensione New Life parrucchieri'}/>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.clientsName}>{name}<br/>{lastname}</div>
                </div>
            </div>
            <div className={styles.designBox}></div>
        </div>
        <div className={styles.paragrapCont}>
            <div>“</div>
            <p>{review}</p>
            <div className={styles.lastApix}>”</div>
        </div>
    </div>
}

export default Clients;