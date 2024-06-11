// src/App.js
import React from 'react';
import PersonCard from './PersonCard';

function App() {
  return (
    <div className="App" style={styles.app}>
      <h1>Person Cards</h1>
      <PersonCard firstName="John" lastName="Doe" age={28} hairColor="Brown" />
      <PersonCard firstName="Jane" lastName="Smith" age={34} hairColor="Blonde" />
      <PersonCard firstName="Alice" lastName="Johnson" age={45} hairColor="Black" />
      <PersonCard firstName="Bob" lastName="Brown" age={23} hairColor="Red" />
    </div>
  );
}

const styles = {
  app: {
    textAlign: 'center'
  }
};

export default App;
