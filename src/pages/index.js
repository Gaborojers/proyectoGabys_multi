import React from 'react';
import Link from 'next/link';
import styles from '../styles/ejemplo.module.css';
import Image from 'next/image';

function Index() {
    return(
        <div className={styles.pagina}>
          <Image 
          src="/img/95ed7030_76ee_4be3_a6f3_abae123215b4_photoroom_1.png" 
          width={150} 
          height={180}
          className={styles.logo}
          />
          <div className={styles.container}>
          <Image 
          src="/img/rectangle_7.png" 
          width={500} 
          height={300}
          className={styles.foto}
          />
            <input type='email' className={styles.email} placeholder='Email'/>
            <br />
            <br />
            <input type='password' className={styles.password} placeholder='Contraseña'/>
            <Link href="/home">
            <button className={styles.boton}>Start</button>
            </Link>
          </div>
        </div>
    );
}

export default Index;