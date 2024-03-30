import styles from "./Layout.module.css"

function Layout( {children} ) {
  return <>
  <header className={styles.header}>
    <h1>BOOK APP</h1>
    <p><a href="https://radblack.online/">RaDBlaCK01 </a>| BOOKAPP FFR REACT.JS</p>
  </header>
  {children}
  <footer className={styles.footer}>DVLD BY RAD</footer>
  </>
}

export default Layout