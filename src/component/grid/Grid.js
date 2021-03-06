import React from "react";
import s from "./Grid.module.css"
import image1 from "../../common/image/image1.jpg"
import image2 from "../../common/image/5045e.jpg"
import image3 from "../../common/image/5045e2.jpg"
import image4 from "../../common/image/5045e_.jpg"
import image5 from "../../common/image/mfwdtractor-9.jpg"
import image6 from "../../common/image/5065e.jpg"
import image7 from "../../common/image/b81.jpg"
import image8 from "../../common/image/eis-5.jpg"
import image9 from "../../common/image/f6.jpg"
import image10 from "../../common/image/img.jpg"
import buyJD from "../../common/image/buyJD.jpg"

export const Grid = () => {
    return (
        <div className={s.wrapper}>
            <header className={s.header}>
                <a href="" className={s.headerLogo}></a>
                <nav className={s.headerMenu}>
                    <ul className={s.headerList}>
                        <li>
                            <a href="" className={s.headerLink}>Пункт Меню</a>
                        </li>
                        <li>
                            <a href="" className={s.headerLink}>Пункт Меню</a>
                        </li>
                        <li>
                            <a href="" className={s.headerLink}>Пункт Меню</a>
                        </li>
                        <li>
                            <a href="" className={s.headerLink}>Пункт Меню</a>
                        </li>
                    </ul>
                    <div className={s.headerBurger}>
                        <span></span>
                    </div>
                </nav>
            </header>
            <main className={s.main}>
                <aside className={s.sidebar}>
                    <nav className={s.sideMenu}>
                        <ul className={s.sidebarMenu}>
                            <li>
                                <a href="" className={s.sidebarLink}>Menu</a>
                            </li>
                            <li>
                                <a href="" className={s.sidebarLink}>Menu</a>
                            </li>
                            <li>
                                <a href="" className={s.sidebarLink}>Menu</a>
                            </li>
                            <li>
                                <a href="" className={s.sidebarLink}>Menu</a>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <section className={s.content}>
                    <h1 className={s.contentTitle}>John Deere</h1>
                    <section className={`${s.contentGallery} ${s.gallery}`}>
                        <h2 className={s.galleryTitle}>Gallery</h2>
                        <div className={s.galleryItems}>
                            <div className={`${s.galleryItem} ${s.galleryItemBig}`}>
                                <img src={image4} alt=""/>
                            </div>
                            <div className={s.galleryItem}>
                                <img src={image2} alt=""/>
                            </div>
                            <div className={s.galleryItem}>
                                <img src={image3} alt=""/>
                            </div>
                            <div className={s.galleryItem}>
                                <img src={image1} alt=""/>
                            </div>
                            <div className={s.galleryItem}>
                                <img src={image5} alt=""/>
                            </div>
                            <div className={s.galleryItem}>
                                <img src={image7} alt=""/>
                            </div><
                            div className={s.galleryItem}>
                                <img src={image8} alt=""/>
                            </div>
                            <div className={`${s.galleryItem} ${s.galleryItemBig}`}>
                                <img src={image6} alt=""/>
                            </div>
                            <div className={s.galleryItem}>
                                <img src={image9} alt=""/>
                            </div>
                            <div className={s.galleryItem}>
                                <img src={image10} alt=""/>
                            </div>
                        </div>
                    </section>
                    <div className={`${s.contentProducts} ${s.products}`}>
                        <h2 className={s.productsTitle}>Goods</h2>
                        <div className={s.productsItems}>
                            <div className={s.productsItem}>
                                <a href="" className={s.productsImage}>
                                    <img src={buyJD} alt=""/>
                                </a>
                                <a href="" className={s.productsName}>John Deere 5045</a>
                                <a href="" className={s.productsButton}>Buy</a>
                            </div>
                            <div className={s.productsItem}>
                                <a href="" className={s.productsImage}>
                                    <img src={buyJD} alt=""/>
                                </a>
                                <a href="" className={s.productsName}>John Deere 5045</a>
                                <a href="" className={s.productsButton}>Buy</a>
                            </div>
                            <div className={s.productsItem}>
                                <a href="" className={s.productsImage}>
                                    <img src={buyJD} alt=""/>
                                </a>
                                <a href="" className={s.productsName}>John Deere 5045</a>
                                <a href="" className={s.productsButton}>Buy</a>
                            </div>
                            <div className={s.productsItem}>
                                <a href="" className={s.productsImage}>
                                    <img src={buyJD} alt=""/>
                                </a>
                                <a href="" className={s.productsName}>John Deere 5045</a>
                                <a href="" className={s.productsButton}>Buy</a>
                            </div>
                            <div className={s.productsItem}>
                                <a href="" className={s.productsImage}>
                                    <img src={buyJD} alt=""/>
                                </a>
                                <a href="" className={s.productsName}>John Deere 5045</a>
                                <a href="" className={s.productsButton}>Buy</a>
                            </div>
                            <div className={s.productsItem}>
                                <a href="" className={s.productsImage}>
                                    <img src={buyJD} alt=""/>
                                </a>
                                <a href="" className={s.productsName}>John Deere 5045</a>
                                <a href="" className={s.productsButton}>Buy</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className={s.footer}>
                <div className={s.footerCopy}>
                    Copy, 2021
                </div>
                <div className={s.footerText}>
                    Buy John Deere and be cool!
                </div>
            </footer>
        </div>

        /*<div className={s.gridContainer}>
            <div className={s.item}>1</div>
            <div className={s.item}>2</div>
            <div className={s.item}>3</div>
            <div className={s.item}>4</div>
            <div className={s.item}>5</div>
            <div className={s.item}>6</div>
        </div>*/
        /* <div className={s.gridContainer}>
             <header className={s.header}>
                 Шапка
             </header>
             <aside className={s.side}>
                 Сайдбар
             </aside>
             <main className={s.content}>
                 Контент
             </main>
         </div>*/
    )
}