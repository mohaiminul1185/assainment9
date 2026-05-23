import toast from 'react-hot-toast';

const Register = () => {

  const handleRegister = (e) => {
    e.preventDefault()

    toast.success('Register Successful')
  }

  return (
    <form onSubmit={handleRegister}>

      <h1>Register</h1>

      <input type='text' placeholder='Name' required />
      <input type='email' placeholder='Email' required />
      <input type='text' placeholder='Photo URL' required />
      <input type='password' placeholder='Password' required />

      <button type='submit'>Register</button>

    </form>
  )
}

export default Register;