import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Loader.module.css';

export default function Loader(){

    return (
        <main className={styles.main}>
            <motion.div animate={{
                scale: [.8, 1.5, .8]
            }} transition={{ duration: 2, repeat: Infinity }}>
                <Image src='/heart-pulse.svg' width={150} height={150} color="blue"></Image>
            </motion.div>
        </main>
    )

}