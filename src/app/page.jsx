import Image from 'next/image'
import styles from './page.module.css'
import Top from '@/components/top/Top'




export default function Home() {
  return (
    <div className={styles.container}>
      <Top/>
    </div>
  )
}
