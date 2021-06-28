import styles from '../styles/Footer.module.css';
import Image from 'next/image';



const Footer = () => {
    return (
        <>
            <div className={styles.footer, styles.footerDistributed}>
                <p className={styles.footerCompanyName}>EdisonAbdiel &copy; 2021</p>
            </div>
        </>
    )
}

export default Footer;
