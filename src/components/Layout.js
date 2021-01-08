import React from 'react'
import NavBar from "./Navbar"
import Footer from "./Footer"
import './Layout.css'
const Layout = ({children}) => {
    return (
        <>
            <NavBar />
            <hr></hr>
            <main>
                {children}
            </main>
            <hr></hr>
            <Footer />
        </>
    )
}

export default Layout
