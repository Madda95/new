import React from 'react';
import styles from './shop.module.scss';
import { data } from './data';
import { withMobile } from '../../utils/withMobile';

import client_01 from '../../assets/cliente_01.png';
import client_02 from '../../assets/cliente_02.png';
import client_03 from '../../assets/cliente_04.png';

import ShopCard from './components/shopCard'

const Shop = (props) => {
    return (
        <div className={styles.box}>
            {!props.isMobile ? <CarouselDesktop {...props} /> : <CarouselMobile />}
        </div>
    );
}


const CarouselDesktop = (props) => {
    return (
        <div className={styles.carousel}>
            <ShopCard images={client_01} alt={'Cliente New Life'} />
            <ShopCard text={'I NOSTRI CLIENTI'} />
            <ShopCard images={client_02} alt={'Cliente New Life'} />
            <ShopCard text={'I NOSTRI CLIENTI'} />
            <ShopCard images={client_03} alt={'Cliente New Life'} />
            <ShopCard text={'I NOSTRI CLIENTI'} />
        </div>
    )
}

const CarouselMobile = () => {
   return <div className={styles.carousel}>
        <ShopCard text={'I NOSTRI TAGLI'} />
        <ShopCard images={client_01} alt={'Cliente New Life'} />
        <ShopCard images={client_02} alt={'Cliente New Life'} />
        <ShopCard images={client_03} alt={'Cliente New Life'} />
    </div>
}

export default withMobile(Shop);