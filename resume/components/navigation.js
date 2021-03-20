import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'

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
                backgroundImage: "linear-gradient(to right, #00853E, #00A950, #B9DCD2)",
                paddingTop: "20px",
                display: "flex",
                overflowX: "hidden",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <Link href="/">
                <a>About</a>
            </Link>
            <Link href="/projects">
                <a>Projects</a>
            </Link>
            <Link href="">
                <a>Contact</a>
            </Link>
        </div>
    }
}

export default Navigation