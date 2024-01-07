import { useEffect } from 'react';

export default function Mole(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000);
        let timer = setTimeout(() => {
            props.setDisplayMole(false);
        }, randSeconds);
        return () => clearTimeout(timer);
    });
    return (
        <div>
            <h2>Mole Container</h2>
            <img style={{ width: '30vw' }} src="moleHill.jpg" onClick={props.handleClick} alt="a mole" />
        </div>
    );
}
