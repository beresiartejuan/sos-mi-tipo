import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Singup from '../components/Singup/Singup';
import { withSessionSsr } from '../libs/withSession';
import { useEffect } from 'react';

export default function Home({ errors }) {

    useEffect(() => {
        if(!errors) return
        errors.forEach(error => {
            const element = document.getElementById(error.field)
            element.style.backgroundColor = "#f16352d4"
        })
    }, [errors])

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

export const getServerSideProps = withSessionSsr(async function getServerSideProps({ req }) {
    const user = req.session.user
    const errors = req.session.errors

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
            errors: errors ? JSON.parse(errors) : null
        }
    }
})