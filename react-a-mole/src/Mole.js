import { useEffect } from 'react';
const moleImg = document.getElementById('moleImg');

function Mole(props, moleImg) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000);
        let timer = setTimeout(() => {
            props.setDisplayMole(false);
        }, randSeconds);
        return () => clearTimeout(timer);
    });

    return (
        <div>
            <img style={{ width: '30vw' }} src={moleImg} onClick={props.handleClick} alt="image of a mole" />
        </div>
    );
}

export { Mole };
