import pt from 'prop-types'

const dataRowStyle = {
  background: 'orange',
  padding: '4px 0',
  margin: '4px auto',
  width: '50%'
}

const loadingStyle = {
  width: '50%',
  margin: '4px auto',
  padding: '6px 0',
  background: 'blue',
  height: '40px',
  color: 'white',
  textAlign: 'center'
}

const buttonStyle = {
  width: '50%',
  margin: '4px auto',
  height: '60px',
  background: 'green',
  textAlign: 'center'
}

const DataVisualization = ({
  data,
  isLoading,
  isMore,
  sendLoad
}) => {
  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {
          data.map((row) => {
            return (
              <li key={row} style={dataRowStyle}>
                {row}
              </li>
            )
          })
        }
        {
          isLoading && (
            <li style={loadingStyle}>
              Loading...
            </li>
          )
        }
        {
          isMore && (
            <li style={buttonStyle}>
              <button type="button" onClick={sendLoad}>Load More</button>
            </li>
          )
        }
      </ul>
    </div>
  )
}

DataVisualization.propTypes = {
  data: pt.array.isRequired,
  isLoading: pt.bool,
  isMore: pt.bool,
  sendLoad: pt.func.isRequired
}

DataVisualization.defaultProps = {
  isLoading: false,
  isMore: false
}

export default DataVisualization
