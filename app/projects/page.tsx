// app/projects/page.tsx
'use client';

import { useState, useEffect } from 'react';

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setLoading(false)
    },[]);


  if(loading){
      return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Projects</h1>
      <p>This is the projects page.</p>
    </div>
  );
}