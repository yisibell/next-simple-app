export default function PostPage({ posts }) {
  return (
    <div>
      {posts.map((v) => (
        <div key={v.id}>
          <h3>{v.title}</h3>
          <p>this is some post content.</p>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps(ctx) {
  console.log('context:', new Date())

  const posts = [
    { id: 1, title: 'hello nextjs.' },
    { id: 2, title: 'hello reactjs.' },
    { id: 3, title: 'hello world.' },
    { id: 4, title: 'hello JSX.' },
  ]

  return {
    props: {
      posts,
    },
  }
}
