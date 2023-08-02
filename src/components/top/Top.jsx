import Image from 'next/image'
import styles from './top.module.css'

export default function Top() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Image src='/devjobs.png' width={100} height={30} alt='logo'/>
        <div className={styles.toggler}>
          <Image src='/icons/sun.svg' width={20} height={20} alt='sun'/>
          <div className={styles.toggle}>
            <div className={styles.light}></div>
            <div className={styles.dark}></div>
          </div>
          <Image src='/icons/moon.svg' width={15} height={15} alt='moon'/>
        </div>
      </div>
    </div>
  )
}
