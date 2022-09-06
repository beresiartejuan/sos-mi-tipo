import Link from 'next/link';
import MyInput from '../../atoms/MyInput/MyInput';
import styles from './Singup.module.css';

export default function Singup(){
    return (
        <form className={styles.Singup} action="/api/entrar" method='POST'>
            <h3>
                ¡Crea tu cuenta!
            </h3>
            <MyInput text='Email' type='email' name='email'></MyInput>
            <MyInput text='Password' type='password' name='password'></MyInput>
            <MyInput text='Country' type='text' name='country' complete="country-name"></MyInput>
            <MyInput text='City' type='text' name='city' complete="address-level2"></MyInput>
            <Link href="/login"><a>¿No tienes una cuenta?</a></Link>
            <MyInput text='Login' type='submit'></MyInput>
        </form>
    )
}