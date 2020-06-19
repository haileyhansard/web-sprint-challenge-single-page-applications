//create Pizza Form here
import React from 'react'

export default function Form(props){

    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        errors,
    } = props

    return (
        <form>
            <div>
                <h1>Build Your Pizza</h1>
                {/* <button disabled={disabled}>Add To Order</button> */}

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.toppings}</div>
                    <div>{errors.instructions}</div>
                </div>

                <div className='form-inputs'>
                    <h2>Please fill out your order information below</h2>

                    <label>Your Name:
                        <input
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onInputChange}
                        />
                    </label>

                    <label>Choose a Pizza Size:
                        <select
                            name="size"
                            value={values.size}
                            onChange={onInputChange}         
                        >
                            <option value=''>- Select an option -</option>
                            <option value='Small'>Small 8"</option>
                            <option value='Medium'>Medium 10"</option>
                            <option value='Large'>Large 12"</option>
                            <option value='X-Large'>Extra Large 14"</option>
                        </select>
                    </label>

                    <h3>Select Your Toppings</h3>
                    <label>Extra Cheese
                        <input
                        name="cheese"
                        type="checkbox"
                        checked={values.toppings.cheese}
                        onChange={onCheckboxChange}
                        />
                    </label>
                    <label>Pepperoni
                        <input
                        name="pepperoni"
                        type="checkbox"
                        checked={values.toppings.pepperoni}
                        onChange={onCheckboxChange}
                        />
                    </label>
                    <label>Sausage
                        <input
                        name="sausage"
                        type="checkbox"
                        checked={values.toppings.sausage}
                        onChange={onCheckboxChange}
                        />
                    </label>
                    <label>Olives
                        <input
                        name="olives"
                        type="checkbox"
                        checked={values.toppings.olives}
                        onChange={onCheckboxChange}
                        />
                    </label>

                    <label>Special Instructions
                        <textarea
                        name="instructions"
                        value={values.instructions}
                        onChange={onInputChange}
                        />
                    </label>
                </div>
            </div>
        </form>
    )

}