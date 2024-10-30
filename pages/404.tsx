import Link from 'next/link';
import Layout from "../components/layout";

export default function Custom404() {
    return (
      <Layout>
        <h1>404 - Страница не найдена</h1>
        <p>Страницы не существует.</p>
        <p>
           вернуться на <Link href="/">главную страницу</Link> или перейти в раздел <Link href="/contacts">Контакты</Link>.
        </p>
      </Layout>
    );
}
