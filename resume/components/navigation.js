import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'
import styles from '../styles/Navigation.module.css'

class Navigation extends React.Component {
    render() {
        return <div 
            style={{
                height: "100%",
                width: "15%",
                position: "fixed",
                zIndex: "1",
                top: "0",
                left: "0",
                backgroundImage: "linear-gradient(to right, #00853E, #00A950 70%, #C4D600 95%)",
                paddingTop: "20px",
                display: "flex",
                flexDirection: "column",
                overflowX: "hidden",
                alignItems: "center"
            }}
        >
            <Link href="/">
                <a><h2 className={styles.navItem}>About</h2></a>
            </Link>
            <Link href="/resume">
                <a><h2 className={styles.navItem}>Resume</h2></a>
            </Link>
            <Link href="/projects">
                <a><h2 className={styles.navItem}>Projects</h2></a>
            </Link>
            <Link href="/contact">
                <a><h2 className={styles.navItem}>Contact</h2></a>
            </Link>
        </div>
    }
}

export default Navigation