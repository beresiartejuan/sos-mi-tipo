import styles from './MyInput.module.css'

export default function MyInput({ text, type, name, complete=false }){

    let Input

    if(type == 'button' || type == 'submit'){
        Input = <input 
                    value={text} 
                    className={styles.MyInput} 
                    name={name} 
                    id={name} 
                    type={type}
                ></input>
    } else {
        Input = <input 
                    placeholder={text}
                    autoComplete={complete ? complete : type}
                    className={styles.MyInput} 
                    name={name} 
                    id={name} 
                    type={type}
                ></input>
    }

    return Input
}