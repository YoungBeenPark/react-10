import React, { useState } from 'react';

const App = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => setShowMessage(!showMessage);

  return (
    <div>
      <h1>Conditional Rendering Practice</h1>
      
      <button onClick={toggleMessage}>
      
        {showMessage ? 'Hide' : 'Show'} Message
      </button>
      
      {showMessage && <p>This is a conditionally rendered message.</p>}
    </div>
  );
};

export default App;