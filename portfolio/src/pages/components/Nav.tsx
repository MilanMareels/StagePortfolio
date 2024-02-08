import styles from "@/styles/Nav.module.css"
import Link from "next/link"

const Nav = () => {
    return (
        <>
            <nav className={styles.nav}>
                <h1><Link href="/" className={styles.logo}>Milan Mareels</Link></h1>
                <ul className={styles.ul}>
                    <li className={styles.li}><Link className={styles.a} href="/">Home</Link></li>
                    <li className={styles.li}><Link className={styles.a} href="/blogs">Blogs</Link></li>
                    <li className={styles.li}><Link className={styles.a} href="/about">About</Link></li>
                </ul>
            </nav>
        </>
    )
}


export default Nav;