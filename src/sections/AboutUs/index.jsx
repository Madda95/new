import React from 'react';
import styles from './aboutUs.module.scss';
import teams from '../../assets/about.png';


const renderText = () => {
    const position = document.documentElement.scrollTop;
    const target = document.getElementById('about');
    if(target && target.querySelector('p').style != '') {
        const isVisible = checkElementIsOnScreen(position, target);
        if(isVisible){
            new Promise(resolve => {
                target.querySelector('h3').style.opacity = '1';
                setTimeout(() => {
                    resolve();
                },500);
            }).then(() => {
                target.querySelectorAll('p').forEach((e,i) => {
                    setTimeout(() => e.style.opacity = '1' , 300 * i);
                });
                setTimeout(() => document.getElementById('team-image').style.opacity = '1', 1200);
            });
        }
    }
}

const checkElementIsOnScreen = (position, target) => {
    return position > target.offsetTop - 600;
}
document.addEventListener('scroll', renderText);

const AboutUs = () => {
    return <div className={styles.box} id='about'>
        <div className={styles.titleContainer}>
            <h3>SU DI NOI</h3>
            <p>Siamo Nunzia e Simona e in poche righe vogliamo trasmetterti l’entusiasmo di New Life, raccontando come il destino avesse deciso il nostro incontro già molto prima.</p>
            <p>Il percorso comincia per entrambe molto presto e la nostra prima visita al mondo delle acconciature arriva già in età adolescenziale, dove iniziamo a prendere dimestichezza con gli strumenti del mestiere. Nunzia a Napoli, Simona a Roma, senza conoscerci: è così che inconsciamente imbocchiamo la stessa strada, quella che ci porterà fino ad oggi.</p>
            <p>Dopo i primi anni di lavoro nelle rispettive città, nel ‘98 Simona si trasferisce in Friuli mantenendo la professione di parrucchiera mentre Nunzia continua la sua carriera lavorativa a Napoli. Dieci anni dopo il trasferimento di Simona, anche Nunzia prende la stessa decisione facendo del Friuli la sua nuova casa e trovando un nuovo lavoro come parrucchiera nello stesso salone di Simona.</p>
            <p>L’intreccio di questi percorsi crea un legame di collaborazione professionale ed amicizia che raggiunge l’apice ad agosto 2020: dopo 12 anni da colleghe decidiamo di diventare co-proprietarie ed apriamo un salone tutto nostro.</p>
            <p>Sì esatto, agosto 2020, mentre il mondo intero è alle prese con la pandemia da Covid-19 noi decidiamo di rimboccarci le maniche ed andare controcorrente mettendo le nostre vite di fronte ad una grande sfida.</p>
            <p>Questa sfida si chiama New Life, un cambio di vita repentino, una nuova avventura all’interno della quale oggi siamo contente di poterti accogliere per un semplice taglio di capelli o per uscirne completamente rivoluzionati!</p>
        </div>
        <div className={styles.team}>
            <img id='team-image' src={teams} alt='Le migliori parrucchiere di Ronchi dei legionari - Simonetta Maccioni e Nunzia Settangelo'/>
        </div>
    </div>
}



export default AboutUs;