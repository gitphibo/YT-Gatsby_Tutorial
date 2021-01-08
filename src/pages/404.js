import { Link } from 'gatsby'
import React from 'react'
import Layout from "../components/Layout"

const p404 = () => {
    return (
        <Layout>
           <h1> Your wrong here, but you can get back "home" by clicking the link below...</h1>
           <Link to="/">Back home</Link>
        </Layout>
    )
}

export default p404