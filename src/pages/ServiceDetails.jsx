import toast from 'react-hot-toast'

const ServiceDetails = () => {

  const handleBook = (e) => {
    e.preventDefault()
    toast.success('Service Booked')
    e.target.reset()
  }

  return (
    <div>

      <img width='300px' src='https://i.ibb.co/F4p3G4t/dog1.jpg' />

      <h1>Winter Grooming</h1>

      <p>Price: $30</p>

      <form onSubmit={handleBook}>

        <input type='text' placeholder='Name' required />

        <input type='email' placeholder='Email' required />

        <button type='submit'>Book Now</button>

      </form>

    </div>
  )
}

export default ServiceDetails