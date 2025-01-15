import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/up')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app">
      <h1 className='gfg'>GeeksforGeeks</h1>
      <h1>Data from API:</h1>
      <pre>{data ? JSON.stringify(data) : 'Loading...'}</pre>
    </div>
  );
}

export default App;