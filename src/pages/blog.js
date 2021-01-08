import React from 'react'
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
    return (
      <Layout>
        <div className={styles.page}>
          <h3 className={styles.page.h3}>This is our blog page...</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est
            enim, in quo sit cupiditas, quin recte cupidus dici possit? Nisi
            autem rerum natura perspecta erit, nullo modo poterimus sensuum
            iudicia defendere. Non dolere, inquam, istud quam vim habeat postea
            videro; Ergo instituto veterum, quo etiam Stoici utuntur, hinc
            capiamus exordium. Quis est tam dissimile homini. Duo Reges:
            constructio interrete. Atque ab isto capite fluere necesse est omnem
            rationem bonorum et malorum. Sed quid attinet de rebus tam apertis
            plura requirere?
          </p>
        </div>
      </Layout>
    )
}

export default blog