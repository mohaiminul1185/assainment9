import { useState } from 'react';
import toast from 'react-hot-toast';

const Login = () => {

  const [show,setShow] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    toast.success('Login Successful')
  }

  return (
    <form onSubmit={handleLogin}>

      <h1>Login</h1>

      <input type='email' placeholder='Email' required />

      <input
        type={show ? 'text' : 'password'}
        placeholder='Password'
        required
      />

      <button type='button' onClick={()=>setShow(!show)}>
        Eye
      </button>
<button type='button'>Google Login</button>
      <button type='submit'>Login</button>

    </form>
  )
}

export default Login;