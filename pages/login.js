import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { withSessionSsr } from '../libs/withSession';
import Login from '../components/Login/Login';
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
                <Login></Login>
            </main>
        </div>
    )
}

export const getServerSideProps = withSessionSsr(async function getServerSideProps({ req }) {
    const user = req.session.user
    const errors = req.session.errors
    req.session.errors = undefined
    await req.session.save()

    if (user) {
        return {
            redirect: {
                destination: '/home',
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
