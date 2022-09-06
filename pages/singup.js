import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Singup from '../components/Singup/Singup';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>SingUp | Sos Mi Tipo</title>
                <link rel="icon" href="/fav.png" />
            </Head>

            <main className={styles.main}>
                <Singup></Singup>
            </main>
        </div>
    )
}
