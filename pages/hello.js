import Layout from '../components/Layout'

const Hello = (props) => {
  return (
    <Layout>
      <h1>สวัสดี{props.url.query.name}</h1>
    </Layout>
  )
}

export default Hello
