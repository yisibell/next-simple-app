import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  const router = useRouter()

  const toPosts = (e) => {
    e.preventDefault()
    router.push('/posts')
  }

  return (
    <div className={styles.grid}>
      <a href="" onClick={toPosts} className={styles.card}>
        <h2>Posts &rarr;</h2>
        <p>Route to posts page!</p>
      </a>
    </div>
  )
}
