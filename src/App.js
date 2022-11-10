import './App.css';

import React, { useState } from 'react'
import FormInput from './components/FormInput';

export const App = () => {
  const [values, setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:""
  });

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Użytkownik",
      errorMessage:"Nazwa użytkownika powinna zawierać od 3 do 16 znaków i nie posiadać żadnych znaków specjalnych",
      label:"Nazwa użytkownika",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"Podaj poprawny adres email",
      label:"Email",
      required: true,
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"Urodziny",
      errorMessage:"Podaj poprawna date urodzin",
      label:"Data urodzin"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Hasło",
      errorMessage:"Hasło powinno posiadac od 8 do 20 znaków i posiadac przynajmniej jedna litere, jedna liczbe i jeden znak specjalny",
      label:"Hasło",
      pattern:"^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$",
      required: true,
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Potwierdź hasło",
      errorMessage:"Hasła nie są takie same :(",
      label:"Potwierdź hasło",
      pattern: values.password,
      required: true,
    }
  ]

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  console.log(values)
  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1>Rejestracja</h1>
        <hr/>
        {inputs.map((input) =>(
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))}
        <button>Wyślij</button>
      </form>
    </div>
    
  )
}


export default App;
