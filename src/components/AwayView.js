import React from 'react';

export default ({reset, value}) => {

    return (
        <section>
            <button type="button" onClick={reset}>reset</button>
            <br/>
            <span className="value">{value}</span>
        </section>
    );
}