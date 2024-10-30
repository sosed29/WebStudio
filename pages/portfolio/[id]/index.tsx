
import Layout from '@/components/layout';
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/item.module.css"
import axios from 'axios';

interface PortfolioItem {
    id: number;
    title: string;
    url: string; 
}

interface ItemProps {
    portfolioItem: PortfolioItem;
}

const Item = ({ portfolioItem }: ItemProps) => {
    return (
        <Layout>
            <div className={styles.item}>
                <h1>Проект: {portfolioItem.title}</h1>
                <Image 
                    src={portfolioItem.url} 
                    width={400} 
                    height={400} 
                    alt={portfolioItem.title} 
                />
                <Link className={styles.link} href="/portfolio">Назад к списку работ</Link>
            </div>
        </Layout>
    );
};

//  getServerSideProps для загрузки данных
export async function getServerSideProps({ params }: any) {
    const PHOTOS_API_URL = 'https://jsonplaceholder.typicode.com/photos/';
    const url = `${PHOTOS_API_URL}${params.id}`;
    
    const { data } = await axios.get<PortfolioItem>(url);

    return {
        props: { portfolioItem: data }
    };
}

export default Item;
