import React from "react"
import Layout from "../components/Layout"
import {ExampleButton} from "../components/button"

const index = () => {
  return (
    <Layout>
      <div>
        <h1 style={{color:"darkblue", textTransform:"uppercase"}}>My Vision of an independent life full of joy and greatness..</h1>
      </div>
      <ExampleButton>Click me</ExampleButton>
    </Layout>
  )
}

export default index
 