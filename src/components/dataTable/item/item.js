import React from 'react';
import styles from './item.module.css';

const item = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.data_timestamp}>
                <div className={styles.header}>timestamp</div>
                <div>{props.item.timestamp}</div>
            </div>
            <div className={styles.data_raw}>
                <div className={styles.header}>_raw</div>
                <div>{props.item.raw}</div>
            </div>
        </div>
    );
}

export default item;