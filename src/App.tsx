import React from 'react';
import Header from './components/Header';
import Card from './components/Card';

const cardList = [
  {id: 1, title: "New one", body: "New body one", underCards: [1, 2, 3]},
  {id: 2, title: "New one", body: "New body one", underCards: [1, 2, 3]},
  {id: 3, title: "New one", body: "New body one", underCards: [1, 2, 3]},
]

function App() {
  return (
    <div>
      <Header />
      {cardList.map((item: any) => 
        <Card card={item} />
      )}
    </div>
  );
}

export default App;
