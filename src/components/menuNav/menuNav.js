import React from 'react';
import styles from './menuNav.module.css';

const menuNav = (props) => {
    return(
        <div className={styles.container}>
            {
                props.data.map((item) => {
                    return(
                        <div key={item.index} className={styles.item} onClick={() => props.onMenu(item.index, item.name)}>{item.name}</div>
                    )
                })
            }
        </div>
    );
}

export default menuNav;