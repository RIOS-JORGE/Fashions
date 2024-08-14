import React from 'react'

const Contactos = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center h-screen bg-black">
        <h1 className=" text-3xl text-yellow-400 p-5 z-10 shadow-lg shadow-yellow-400 mb-9">
          Jorge D Rios
        </h1>
        <ul>
            <li><a className=" text-xl text-yellow-400  mb-9 sm:text-2xl" href="https://github.com/RIOS-JORGE"> github</a></li>
            <br />
            <li><a className=" text-xl text-yellow-400  mb-9 sm:text-2xl" href="https://www.linkedin.com/in/jorgerios-frontend-developer"> linkedin</a></li>
        </ul>
      </div>
    </>
  )
}

export default Contactos
