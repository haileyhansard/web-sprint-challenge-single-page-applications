import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom"
import axios from 'axios'
import Form from './components/Form'
import formSchema from './components/formSchema'
import Order from './components/Order'
import * as Yup from 'yup'
import './App.css'


//Establish Initial States

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
  ...inititalFormValues,
  toppings: '',
}

const initialOrders = []
const initialDisabled = false


export default function App() {
  const [formValues, setFormValues] = useState(inititalFormValues)
  const [errors, setErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [orders, setOrders] = useState(initialOrders)
 
  //Side Effect
 useEffect(() => {
   formSchema
   .isValid(formValues)
   .then(valid => {
     setDisabled(!valid)
   })
 }, [formValues])

 const updateOrders = order => {
   setOrders(orders => [...orders, order]);
 }
 
 //Helpers
  const createOrder = (order) => {
    axios.post("https://reqres.in/api/order", order)
    .then(response => {
      console.log("response", response.data)
      updateOrders(response.data)
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
      });
    })
  
    .catch(err => {
      setErrors({
        ...errors,
        [name]: err.errors[0]
      });
    });
    
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onCheckboxChange = evt => {
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
      // toppings: formValues.toppings,
      toppings: Object.keys(formValues.toppings)
        .filter(toppingName => (formValues.toppings[toppingName] === true)),
      instructions: formValues.instructions.trim(),
    }
    createOrder(newOrder)
  }


 

  return (
    <div className="App">
      <nav className='store-header'>
        <h1>Lambda Eats</h1>
        <div className='nav-links'>
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
          {/* <Link to='/'>Home</Link>
          <Link to='/xxx'>Help</Link> */}
        </div>
      </nav>
      <h1>We Love Pizza!</h1>
      <h3>Your favorite food delivery while coding</h3>
      <Form
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={errors} 
        />

      {orders.map(order => {
          return (
            <Order key={order.name} details={order} />
          )
        }) 
      }

    </div>
  );
};

