import { useEffect, useState } from "react";

const Home = () => {

  const [services,setServices] = useState([])

  useEffect(()=>{

    fetch('/services.json')
    .then(res=>res.json())
    .then(data=>setServices(data))

  },[])

  return (

    <div>

      <div className="hero">

        <div className="hero-content">

          <h1>Keep Your Pets Warm This Winter</h1>

          <p>
            Cozy care, grooming and winter protection for your lovely pets.
          </p>

          <button className="btn">Explore Services</button>

        </div>

      </div>

      <h1 className="section-title">
        Popular Winter Services
      </h1>

      <div className="services">

        {
          services.map(service => (

            <div className="card" key={service.serviceId}>

              <img src={service.image} />

              <div className="card-content">

                <h2>{service.serviceName}</h2>

                <p>{service.description}</p>

                <p>⭐ {service.rating}</p>

                <p>💲 {service.price}</p>

                <button className="btn">
                  View Details
                </button>

              </div>

            </div>

          ))
        }

      </div>

      <div className="extra">

        <div className="extra-box">
          <h2>Winter Care Tips</h2>
          <p>
            Always keep your pets warm and hydrated during winter season.
          </p>
        </div>

        <div className="extra-box">
          <h2>Expert Veterinarians</h2>
          <p>
            Our experts help your furry friends stay healthy and happy.
          </p>
        </div>

      </div>

    </div>

  )
}

export default Home;