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
            <img style={{ width: '30vw' }} src="C:\Users\chris\code\Homework\React-A-Mole\react-a-mole\public\mole_edited.jpg" onClick={props.handleClick} alt="a mole" />
        </div>
    );
}