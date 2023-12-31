// Write your code here
import Header from '../Header'

const Home = () => (
  <div className="home">
    <Header />
    <div className="home-container">
      <img
        className="home-lg-image"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
      <img
        className="home-sm-image"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
    </div>
  </div>
)

export default Home
