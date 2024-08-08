import React, { useEffect, useState } from 'react';

export const DocumentTitleComponent = () => {
  const [title, setTitle] = useState('Initial Title');

  useEffect(() => {
    document.title = title;

    // Cleanup function (optional in this case)
    return () => {
      document.title = 'React App'; // Restore the default title
    };
  }, [title]); // Dependency array with 'title' ensures it updates whenever 'title' changes

  return (
    <div>
      <h1>Update Document Title</h1>
      <button onClick={() => setTitle('New Title')}>Update Title</button>
    </div>
  );
};


