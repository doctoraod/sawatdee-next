import Layout from '../components/Layout'
import Router from 'next/router'

const handleSubmit = (e) => {
  e.preventDefault() // หยุดการทำงาน Submit
  const name = e.target.name.value
  Router.push({
    pathname: '/hello',
    query: { name: name }
  })
}

const Index = () => (
  <Layout>
    <h1>Sawatdee Next.js</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
      <span>ชื่อ: </span>
      <input type="text" name="name"/>
      <button type="submit">Go</button>
    </form>
  </Layout>
)

export default Index
