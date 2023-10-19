import React from 'react';
import Link from 'next/link';
import styles from '../styles/inventario.module.css';
import Image from 'next/image';

function Index() {
    return(
        <div className={styles.pagina}>
          <div className={styles.menu}> 
          <Image 
          src="/img/95ed7030_76ee_4be3_a6f3_abae123215b4_photoroom_1.png" 
          width={100} 
          height={130} 
          className={styles.logo}
          />

          <button className={styles.boton}>
            <img src='/img/png-transparent-building-home-house-main-menu-start-basic-ui-2-line-icon-thumbnail-removebg-preview.png' className={styles.home}/>
            <p>Home</p>
          </button>
          <br />
          <button className={styles.boton1}>
            <img src='/img/png-transparent-computer-icons-logout-angle-text-black-removebg-preview.png' className={styles.home}/>
            <p>Home</p>
          </button>
          <br />
          <button className={styles.boton2}>
            <img src='/img/png-transparent-computer-icons-logout-angle-text-black-removebg-preview.png' className={styles.home}/>
            <p>Home</p>
          </button>
          <br />
          <button className={styles.boton3}>
            <img src='/img/png-transparent-computer-icons-logout-angle-text-black-removebg-preview.png' className={styles.home}/>
            <p>Home</p>
          </button>
          <br />
          <button className={styles.boton4}>
            <img src='/img/png-transparent-computer-icons-logout-angle-text-black-removebg-preview.png' className={styles.home}/>
            <p>Home</p>
          </button>

          <br />

          <div className={styles.detras}>
          <Link href="/">
          <button className={styles.boton5}>
            <img src='/img/png-transparent-computer-icons-logout-angle-text-black-removebg-preview.png' className={styles.home}/>
            <p>Login Out</p>
          </button>
          </Link>
          </div>
          </div>

          <div className={styles.principal}>
          <img src='/img/choco37_1.png' className={styles.choco}/>
            <p className={styles.menus}><strong>Inventario</strong></p>

            <div className={styles.search_container}>
            <input type="text" placeholder="Buscar Producto" className={styles.mySearchBar} id="searchMobile" />
            <i className={styles.search_icon}></i>
          </div>

            <br />
            <br />
            <br />
            <p className={styles.menus}><strong>Seleccionar</strong> Categoría</p>


            <div className={styles.botones}>
            <button className={styles.produc}>
            <img src='/img/4534108-removebg-preview.png' className={styles.producto}/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <button className={styles.produc2}>
            <img src='/img/4534108-removebg-preview.png' className={styles.producto}/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <button className={styles.produc3}>
            <img src='/img/4534108-removebg-preview.png' className={styles.producto}/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <br />
            <br />

            <button className={styles.produc}>
            <img src='/img/4534108-removebg-preview.png' className={styles.producto}/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <button className={styles.produc2}>
            <img src='/img/4534108-removebg-preview.png' className={styles.producto}/>
            <p>Home</p>
            <p>$00.00</p>
            </button>

            <button className={styles.produc3}>
            <img src='/img/4534108-removebg-preview.png' className={styles.producto}/>
            <p>Home</p>
            <p>$00.00</p>
            </button>
            </div>
            <img src='/img/image_2.png' className={styles.chocofresa}/>
    </div>


        </div>
    );
}

export default Index;