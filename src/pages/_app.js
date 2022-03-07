import '@/styles/globals.scss'
import LayoutDefault from '@/layouts/default'

function MyApp({ Component, pageProps }) {
  // 如果 page 级别的组件定义了 getLayout 则表示该页面有自定义 layout
  // 否则，使用默认 layout
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return <LayoutDefault>{page}</LayoutDefault>
    })

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
