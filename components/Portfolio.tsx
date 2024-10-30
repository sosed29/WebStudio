import React from 'react';
import styles from '@/styles/portfolio.module.css';

const Portfolio: React.FC = () => {
    return (
        <div className={styles.groupWrapper}>
            <h2>Мое Портфолио</h2>
            <div className={styles.listGroup}>
                <div className={styles.groupItem}>
                    <h3>Проект 1</h3>
                    {/* Здесь можно добавить изображение или описание проекта */}
                </div>
                <div className={styles.groupItem}>
                    <h3>Проект 2</h3>
                    {/* Здесь можно добавить изображение или описание проекта */}
                </div>
                <div className={styles.groupItem}>
                    <h3>Проект 3</h3>
                    {/* Здесь можно добавить изображение или описание проекта */}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;