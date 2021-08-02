import React from "react";
import s from "./Grid.module.css"

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
                                <a href="" className={s.sidebarLink}></a>
                            </li>
                            <li>
                                <a href="" className={s.sidebarLink}></a>
                            </li>
                            <li>
                                <a href="" className={s.sidebarLink}></a>
                            </li>
                            <li>
                                <a href="" className={s.sidebarLink}></a>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <section className={s.content}>
                    <h1 className={s.contentTitle}>John Deere</h1>
                    <section className={`${s.contentGallery} ${s.gallery}`}>
                        <h2 className={s.galleryTitle}>Gallery</h2>
                        <div className={s.galleryItems}>
                            <div className={s.galleryItem}></div>
                        </div>
                    </section>
                </section>
            </main>
            <footer className={s.footer}>

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