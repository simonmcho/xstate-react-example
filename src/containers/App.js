import pt from 'prop-types'
import Routes from './Routes'

const App = ({ children }) => {
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
