```javascript
// pages/about.js
import { useState, useEffect } from 'react';

export default function About() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a long delay
        await new Promise(resolve => setTimeout(resolve, 3000));
        setData({ message: 'Data from API' });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>Data from API: {JSON.stringify(data)}</p>
    </div>
  );
}
```