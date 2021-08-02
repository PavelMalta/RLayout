import React from "react";
import s from "./Grid.module.css"

export const Grid = () => {
    return (
        <div className={s.gridContainer}>
            <div className={s.item}>1</div>
            <div className={s.item}>2</div>
            <div className={s.item}>3</div>
            <div className={s.item}>4</div>
            <div className={s.item}>5</div>
            <div className={s.item}>6</div>
        </div>
    )
}