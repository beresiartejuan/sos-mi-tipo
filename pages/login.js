import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from '../libs/session';
import Login from '../components/Login/Login';


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
                <Login></Login>
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
