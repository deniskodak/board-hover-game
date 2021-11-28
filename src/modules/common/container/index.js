import React from 'react';
import styles from './index.module.scss'

const Container = ({ children }) => (
    <div className={styles.container}>{children}</div>
)

export default Container;