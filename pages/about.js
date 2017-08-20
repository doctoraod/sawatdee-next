import Router from 'next/router'

const handleClickIndex = () => Router.push({
  pathname: '/'
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
    <a onClick={() => handleClickIndex()} style={style}>Index Page</a>
    <h1>About</h1>
  </div>
)

export default Index