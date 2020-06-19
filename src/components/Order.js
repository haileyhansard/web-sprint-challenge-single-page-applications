import React from 'react'

// function Order({ details }) {
//     if (!details) {
//         return <h3>Working on fetching your order...</h3>
//     }

//     return (
//         <div>
//             <h2>{details.name}</h2>
//             <p>Deliver To: {details.name}</p>
//             <p>Size: {details.size}</p>
//             <p>Special Instructions: {details.instructions}</p>
//             {
//                 !!details.toppings && !!details.toppings.length && 
//                 <div>
//                     Toppings:
//                     <ul>
//                         {details.toppings.map((topping, index) => <li key={index}>{topping}</li>)}
//                     </ul>
//                 </div>
//             }
//         </div>
//     )
// }

// export default Order;

export default function Order(props) {
    const {details} = props
    if (!details){
        return <h3>Fetching your order details...</h3>
    }

    return(
        <div>
            <h2>Deliver to: {details.name}</h2>
            <h3>Size: {details.size}</h3>
            <h3>Special Instructions: {details.instructions}</h3>
            {/* <h3>Toppings: {details.toppings.cheese}</h3> */}
        </div>
    )
}