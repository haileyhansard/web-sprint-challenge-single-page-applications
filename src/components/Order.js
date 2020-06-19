import React from 'react'

function Order({ details }) {
    if (!details) {
        return <h3>Working on fetching your order...</h3>
    }

    return (
        <div>
            <h2>{details.name}</h2>
            <p>Deliver To: {details.name}</p>
            <p>Size: {details.size}</p>
            <p>Special Instructions: {details.instructions}</p>
            {
                !!details.toppings && !!details.toppings.length && 
                <div>
                    Toppings:
                    <ul>
                        {details.toppings.map((topping, index) =>
                        <li key={index}>{topping}</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}

export default Order;