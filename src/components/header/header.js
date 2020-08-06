import React from 'react';
import styles from './header.module.css';
import closeIcon from '../../assets/icon/close.svg';

const header = (props) => {
    return (
        <div className={styles.support_container}>
            <div className={styles.container}>
                <div className={styles.title}>Event Viewer</div>
                <div className={styles.tab_container}>
                    {
                        props.tabs.map(item => {
                            return (
                                <div className={styles.tab} key={item.index} style={item.selected ? { borderBottomColor: "#ffffff" } : null}>
                                    <div className={styles.tab_title} onClick={() => props.onTab(item.index)}>{item.name}</div>
                                    <img className={styles.close} src={closeIcon} alt="close" onClick={() => props.onClose(item.index)} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default header;