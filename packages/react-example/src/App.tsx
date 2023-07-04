import {
  DinkieIconCherries12,
  DinkieIconCherries10,
  DinkieIconBird12,
  DinkieIconBirdFilled12,
  DinkieIconSmirkingFace12,
  DinkieIconTwitter12,
  DinkieIconTwitter10,
} from '@dinkie-icons/react'
import styles from './App.module.css'

const App = () => (
  <div className={styles.App}>
    <h1>Dinkie Icons</h1>
    <h2>9&times;9</h2>
    <div className={styles.Container}>
      <DinkieIconCherries10 className={styles.Icon10} />
      <DinkieIconTwitter10 className={styles.Icon10} />
    </div>
    <h2>11&times;11</h2>
    <div className={styles.Container}>
      <DinkieIconCherries12 className={styles.Icon12} />
      <DinkieIconBird12 className={styles.Icon12} />
      <DinkieIconBirdFilled12 className={styles.Icon12} />
      <DinkieIconSmirkingFace12 className={styles.Icon12} />
      <DinkieIconTwitter12 className={styles.Icon12} />
    </div>
  </div>
)

export default App
