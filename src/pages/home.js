import React from 'react';
import Link from 'next/link';
import styles from '../styles/house.module.css';
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

          <Link href="/">
          <button className={styles.boton5}>
            <img src='/img/png-transparent-computer-icons-logout-angle-text-black-removebg-preview.png' className={styles.home}/>
            <p>Login Out</p>
          </button>
          </Link>
          </div>

          <div className={styles.principal}>
            <p className={styles.menus}><strong>Menú</strong> Categorías</p>

            <div className={styles.search_container}>
            <input type="text" placeholder="Buscar Producto" className={styles.mySearchBar} id="searchMobile" />
            <i className={styles.search_icon}></i>
          </div>

          <div className={styles.helados}>
          <button className={styles.boton6}>
            <img src='/img/4534108-removebg-preview.png' className={styles.conos}/>
            <p>Home</p>
            </button>

            <button className={styles.boton7}>
            <img src='/img/4534108-removebg-preview.png' className={styles.conos}/>
            <p>Home</p>
            </button>

            <button className={styles.boton8}>
            <img src='/img/4534108-removebg-preview.png' className={styles.conos}/>
            <p>Home</p>
            </button>
            
            <button className={styles.boton9}>
            <img src='/img/4534108-removebg-preview.png' className={styles.conos}/>
            <p>Home</p>
            </button>

            <button className={styles.boton10}>
            <img src='/img/4534108-removebg-preview.png' className={styles.conos}/>
            <p>Home</p>
            </button>
          </div>

            <br />
            <br />
            <br />
            <p className={styles.menus}><strong>Elegir</strong> Orden</p>


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

    </div>

          <div className={styles.orden}>

            <p className={styles.letras}><strong>Nueva</strong> Orden</p>

            <div className={styles.chispas}>
                <p className={styles.letra}>Chispas</p>
            </div>

            <br />
            <br />

            <div className={styles.chispas}>
                <p className={styles.letra}>Chispas</p>
            </div>

            <br />
            <br />

            <div className={styles.chispas}>
                <p className={styles.letra}>Chispas</p>
            </div>

            <br />
            <br />

            <div className={styles.cono}>
            <p className={styles.letras}><strong>Cono</strong></p>

            <button className={styles.boton6}>
            <img src='/img/4534108-removebg-preview.png' className={styles.conos}/>
            <p>Home</p>
            </button>

            <button className={styles.boton7}>
            <img src='/img/4534108-removebg-preview.png' className={styles.conos}/>
            <p>Home</p>
            </button>

            <button className={styles.boton8}>
            <img src='/img/4534108-removebg-preview.png' className={styles.conos}/>
            <p>Home</p>
            </button>

            <br />
            <br />
            <br />
            <br />
            <br />
            <p className={styles.letras}><strong>Cono</strong></p>

            <br />

            <div className={styles.chispas}>
                <p className={styles.letra}>Chispas</p>
            </div>

            <br />
            <br />

            <div className={styles.chispas}>
                <p className={styles.letra}>Chispas</p>
            </div>

            <br />
            <br />

            <button className={styles.cancelar}>Cancelar</button>
            <button className={styles.aceptar}>Aceptar</button>
            </div>

          </div>


        </div>
    );
}

export default Index;