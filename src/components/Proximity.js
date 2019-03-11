import React from 'react';

export default ({increment, decrement}) => {
    return (
        <section className="clicker">
            <button type="button" onClick={increment}>++</button>
            <button type="button" onClick={decrement}>--</button>
        </section>
    );
}