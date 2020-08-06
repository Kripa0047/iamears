import React from 'react';
import styles from './dataTable.module.css';
import Item from './item/item';

const dataTable = (props) => {
    return (
        <div className={styles.container}>
            {
                props.data
                    ?
                    props.data.data.map((item, index) => {
                        return (
                            <Item
                                key={index}
                                item={item}
                            />
                        )
                    })
                    :
                    null
            }
        </div>
    );
}

export default dataTable;