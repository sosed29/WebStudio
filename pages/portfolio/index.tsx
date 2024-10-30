import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { PortfolioItem, ItemsByGroup } from '@/types/interfaces';
import { prepareData } from '@/utils/prepareData';
import Layout from '@/components/layout';
import styles from '@/styles/Portfolio.module.css';

const PHOTOS_API_URL = 'https://jsonplaceholder.typicode.com/photos';

const PortfolioPage = () => {
    const [loading, setLoading] = useState(true);
    const [itemsByGroup, setItems] = useState<ItemsByGroup | null>(null);
    const router = useRouter();

    const load = async () => {
        try {
            const { data } = await axios.get<PortfolioItem[]>(PHOTOS_API_URL);
            const prepared = prepareData(data.slice(0, 7)); 
            setItems(prepared);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        load();
    }, []);

    if (loading) {
        return (
            <Layout>
                ... loading ...
            </Layout>
        );
    }

    return (
        <Layout>
            <h1>Наши работы</h1>
            {itemsByGroup?.length ? (
                <div>
                    {itemsByGroup.map((group, i) => (
                        <div key={i} className={styles.groupWrapper}>
                            <h2>{group[0]}</h2>
                            <div className={styles.listGroup}>
                                {group[1].map(({ id, title, thumbnailUrl }) => (
                                    <div
                                        key={id}
                                        className={styles.groupItem}
                                        onClick={() => router.push(`/portfolio/${id}`)}
                                    >
                                        <Image src={thumbnailUrl} width={150} height={150} alt={title} />
                                        <h3>{title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Ничего не найдено</div>
            )}
        </Layout>
    );
};

export default PortfolioPage;
