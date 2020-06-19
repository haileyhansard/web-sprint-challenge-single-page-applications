import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom"
import axios from 'axios'
import Form from './components/Form'
import formSchema from './components/formSchema'
import Order from './components/Order'
import * as Yup from 'yup'




const inititalFormValues = {
  name: '',
  size: '',
  toppings: {
    cheese: false,
    pepperoni: false,
    sausage: false,
    olives: false,
  },
  instructions: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  toppings: '',
  instructions: ''
}

const initialOrder = []
const initialDisabled = true


export default function App() {
  const [formValues, setFormValues] = useState(inititalFormValues)
  const [errors, setErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [order, setOrder] = useState(initialOrder)

  //Helpers
  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/order", newOrder)
    .then(response => {
      setOrder([...order, response.data])
    })
    .catch(err => {
      console.log("Error", err)
    })
  }

  //Event Handlers
  const onInputChange = evt => {
    evt.persist();
    const { name, value } = evt.target;

    Yup
    .reach(formSchema, name)
    .validate(value)
    .then(() => {
      setErrors({...errors,
        [name]:"" 
        })
      })
    .catch(err => {
      setErrors({
        ...errors,
        [name]: err.errors[0]
      })
    })
    
    setFormValues({
      ...formValues,
      [name]: value
    })

  }

  const OnCheckboxChange = evt => {
    const { name, checked } = evt.target
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: Object.keys(formValues.toppings)
        .filter(toppingName => (formValues.toppings[toppingName] === true))
    }
    postNewOrder(newOrder)
  }

 //Side Effect
 useEffect(() => {
   formSchema.isValid(formValues).then(valid => {
     setDisabled(!valid)
   })
 }, [formValues])
 

  return (
    <div>
      <nav>
        <h1 className='store-header'>Lambda Eats</h1>
        <div className='nav-links'>
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
          {/* <Link to='/'>Home</Link>
          <Link to='/xxx'>Help</Link> */}
        </div>
      </nav>
      <h1>Lambda Eats</h1>
      <p>Your favorite food delivery while coding</p>
      <Form
        values={formValues}
        onInputChange={onInputChange}
        OnCheckboxChange={OnCheckboxChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={errors} 
        />
{
  order.map(order => {
    return (
      <Order key={order.id} details={order} />
    )
  }) 
}
    </div>
  );
};

