import React from 'react'
import spinner from '../../images/spinner.gif'

function Spinner() {
    return (
        <div>
            <img src={spinner} alt="Loading" styled={{with: '200px', margin: 'auto', display: 'block'}}
/>
        </div>
    )
}

export default Spinner
