import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>SingUp | Sos Mi Tipo</title>
                <link rel="icon" href="/fav.png" />
            </Head>

            <main className={styles.main}>
                <h3 className={styles.title}>
                    ¡Crea tu cuenta!
                </h3>
                <form className={styles.form}>
                    <input placeholder='Email' className={styles.input}></input>
                    <input placeholder='Password' className={styles.input}></input>
                    <input placeholder='Country' className={styles.input}></input>
                    <input placeholder='City' className={styles.input}></input>
                    <Link href="/login"><a className={styles.form_link}>¿Ya tienes una cuenta?</a></Link>
                    <input type="submit" className={styles.input} value="Login" onClick={() => alert("HOLA")}></input>
                </form>
            </main>
        </div>
    )
}
