import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DocumentTitleComponent } from './DocumentTitleComponent';

import {MouseEventComponent} from './MouseEventComponent';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <div>
        <DocumentTitleComponent />
        <MouseEventComponent />
        
      </div>
    </div>
  );
};

export default App;
