import Link from 'next/link';
import MyInput from '../../atoms/MyInput/MyInput';
import styles from './Login.module.css';

export default function Login(){
    return (
        <form className={styles.Login} action="/api/entrar" method='POST'>
            <h3>
                ¡Inicia Sesión!
            </h3>
            <MyInput text='Email' type='email' name='email'></MyInput>
            <MyInput text='Password' type='password' name='password'></MyInput>
            <Link href="/singup"><a>¿No tienes una cuenta?</a></Link>
            <MyInput text='Login' type='submit'></MyInput>
        </form>
    )
}