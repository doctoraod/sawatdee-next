import Router from 'next/router'

const handleClickAbout = () => Router.push({
  pathname: '/about'
})

const style = {
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '10px 10px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
}

const Index = () => (
  <div>
    <a onClick={() => handleClickAbout()} style={style}>About Page</a>
    <h1>Sawatdee Next.js</h1>
    <p>Index</p>
  </div>
)

export default Index