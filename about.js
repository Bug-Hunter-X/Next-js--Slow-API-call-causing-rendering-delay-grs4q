```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // Simulate a slow API call
  const data = fetchData(); 

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>Data from API: {JSON.stringify(data)}</p> 
    </div>
  );
}

async function fetchData() {
  // Simulate a long delay
  await new Promise(resolve => setTimeout(resolve, 3000));  
  return { message: 'Data from API' };
}
```