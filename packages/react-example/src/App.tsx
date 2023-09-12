import {
  DinkieIconCherries12,
  DinkieIconCherries10,
  DinkieIconBird12,
  DinkieIconBirdFilled12,
  DinkieIconSmirkingFace12,
  DinkieIconBrandTwitter12,
  DinkieIconBrandTwitter10,
} from '@dinkie-icons/react'
import styles from './App.module.css'

const App = () => (
  <div className={styles.App}>
    <h1>Dinkie Icons (React)</h1>
    <h2>9&times;9</h2>
    <div className={styles.Container}>
      <DinkieIconCherries10 className={styles.Icon10} />
      <DinkieIconBrandTwitter10 className={styles.Icon10} />
    </div>
    <h2>11&times;11</h2>
    <div className={styles.Container}>
      <DinkieIconCherries12 className={styles.Icon12} />
      <DinkieIconBird12 className={styles.Icon12} />
      <DinkieIconBirdFilled12 className={styles.Icon12} />
      <DinkieIconSmirkingFace12 className={styles.Icon12} />
      <DinkieIconBrandTwitter12 className={styles.Icon12} />
    </div>
  </div>
)

export default App
