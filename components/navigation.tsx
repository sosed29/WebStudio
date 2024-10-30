import Link from 'next/link';
import style from '@/styles/navigation.module.css'

export default function Navigation() {
    return (
      <nav className={style.container}>
      <ul className={style.list}>
        <li className={style.item}>
            <Link href="/">
            Главная 
            </Link>
        </li>

        <li className={style.item}>
            <Link href="/about">
            О компании
            </Link>
        </li>

        <li className={style.item}>
        <Link href="/portfolio">Портфолио</Link>
        </li>

        <li className={style.item}>
            <Link href="/contacts">
            Контакты 
            </Link>
        </li>
      </ul>
      </nav>
    );
}