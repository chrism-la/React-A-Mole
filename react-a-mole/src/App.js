import React, { useState } from 'react';
import MoleContainer from './components/MoleContainer';
import './App.css';

function App() {
    let [score, setScore] = useState(0);

    const createMoleHill = () => {
        let hills = [];
        for (let i = 0; i < 3; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                const moleIndex = i * 3 + j;
                row.push(<MoleContainer key={moleIndex} setScore={setScore} score={score} />);
            }
            hills.push(
                <div key={i} className="row">
                    {row}
                </div>
            );
        }

        return <div className="moleHill">{hills}</div>;
    };

    return (
        <div className="App">
            <h1>React-a-Mole!</h1>
            {score}
            {createMoleHill()}
        </div>
    );
}

export default App;
