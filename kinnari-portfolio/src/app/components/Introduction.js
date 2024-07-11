import React from 'react'

function Introduction() {
  return (
    <section id="introduction" className="">
        <div className='bg-intro h-[400px] p-8 md:flex'>
            <div className='block md:inline-block md:w-[60%] w-auto md:pt-28'>
                <p className='md:text-3xl text-2xl italic text-center'>Transforming complex problems into elegant solutions through code...</p>
                {/* <p className='md:text-3xl text-2xl italic text-center'>Transforming ideas into seamless software solutions... </p> */}
            </div>
            <div className= 'block md:inline-block mx-auto my-0'>
                <img src='/dummy.png' alt="Kinnari Tamhane" className='rounded-full md:h-[300px] h-[250px] mt-5 md:mt-0'/>
            </div>
        </div>
    </section>
  )
}

export default Introduction