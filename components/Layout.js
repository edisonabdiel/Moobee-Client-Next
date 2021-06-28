// Custom made components 
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
// next.js custom tags
import Head from 'next/head';
// styles
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>MooBees</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" />
            </Head>
            <NavBar />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                    {/* Here is where components will render later on */}
                </main>

            </div>
            <Footer></Footer>
        </>
    )
}

export default Layout;