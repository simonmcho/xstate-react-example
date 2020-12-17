import pt from 'prop-types'
import Routes from './Routes'

const App = ({ children }) => {
  console.log("appp!!")
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

App.propTypes = {
  children: pt.oneOfType([pt.node, pt.element])
}

export default App
