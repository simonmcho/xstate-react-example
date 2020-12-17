const DataVisualization = () => {
  return (
    <div>
      <ul>
        {
          [].map((row) => {
            return (
              <li key={row} style={{ background: 'orange' }}>
                {row}
              </li>
            )
          })
        }
      </ul>
      <li
        style={{
          width: '80%',
          margin: '0 auto',
          height: '25vh',
          border: '1px solid black'
        }}
      >
        Loading...
      </li>
      <li
        style={{
          width: '80%',
          margin: '0 auto',
          height: '25vh',
          background: 'green'
        }}
      >
        <button type="button" onClick={() => {}}>Load More</button>
      </li>
    </div>
  )
}

export default DataVisualization
