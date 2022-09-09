import Image from 'next/image';
import MyInput from '../../atoms/MyInput/MyInput'
import styles from './PostForm.module.css';

export default function PostForm({ data }){
    return (
    <form className={styles.PostForm} action="/api/post" method='POST'>
        <MyInput text="Indicaciones. Ej: Sala, dirección del hospital, ect..." type="text" name="content"></MyInput>
        <div name="group">
            <div name="image-group">
                <Image src="/square-h-solid.svg" width={38} height={38}></Image>
            </div>
            <div name="field-group">
                <MyInput text="Hospital" type="text" name="hospital"></MyInput>
            </div>
        </div>
        <div name="group">
            <div name="blood-group">
                <select name="blood" id="blood">
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>
            </div>
            <div name="button-group">
                <MyInput type="submit" text="Publicar"></MyInput>
            </div>
        </div>
    </form>
    )
}