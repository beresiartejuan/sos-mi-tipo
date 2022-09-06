import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from '../libs/session';

function loggin(e){
    console.log(e)
}

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>SingUp | Sos Mi Tipo</title>
                <link rel="icon" href="/fav.png" />
            </Head>

            <main className={styles.main}>
                <h3 className={styles.title}>
                    ¡Inicia Sesión!
                </h3>
                <form className={styles.form} action="/api/entrar" method='POST'>
                    <input placeholder='Email' className={styles.input} name="email" id="user_email"></input>
                    <input placeholder='Password' className={styles.input} name="password" id="user_password"></input>
                    <Link href="/singup"><a className={styles.form_link}>¿No tienes una cuenta?</a></Link>
                    <input type="submit" className={styles.input} value="Login"></input>
                </form>
            </main>
        </div>
    )
}

export const getServerSideProps = withIronSessionSsr(async function getServerSideProps({ req }) {
    const user = req.session.user
    if (user) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
        }
    }
}, sessionOptions)
