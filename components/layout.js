
import styles from './layout.module.css'
import utilStyles from './utils.module.css'
import Link from 'next/link'
import HeaderComponent from "../components/common/header";
import FooterComponent from "../components/common/footer";

const name = 'A Tedious Mess/Dev Life Blog'
export const siteTitle = 'A Tedious Mess'


export default function Layout({ children, home }) {
  return (
    
    <div className={styles.container}>
      
    <div className="min-h-screen bg-gradient-to-b from-page-bluelight to-page-bluedarker overflow-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>
    <HeaderComponent></HeaderComponent>
    <header className={styles.header}>
        {home ? (
          <>
            <div className="text-page-green">
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </div>
          </>
        ) : (
          <><Link href="/Blog">
            <div className ="transition duration-500 ease-in-out inline-flex items-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-page-bluelight hover:bg-white hover:text-page-green hover:bg-opacity-5">
            <h2 className={utilStyles.headingLg}>
              
                <a className={utilStyles.colorInherit}>{name}</a>
              
            </h2>
            </div></Link>
          </>
        )}
      </header>
      <div className ="text-1xl tracking-tight font-bold text-white sm:text-1xl md:text-1xl">
      <main>{children}</main>
      </div>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>
        <style jsx global>{`
            html,
            body {
            padding: 0;
            margin: 0;
            font-family: Ubuntu;
            }

            * {
            box-sizing: border-box;
            }
        `}</style>
        <FooterComponent></FooterComponent>
      </div>
      </div>
  )
}