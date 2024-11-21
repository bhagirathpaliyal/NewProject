import React from 'react'
import callLogo from '/public/assets/phone-solid.svg'
const HCallSec = () => {
  return (
<div className="bg-call-bg bg-cover bg-no-repeat py-20 text-center text-white">
  <h4 className="text-3xl lg:text-5xl font-bold mb-8">Contact David Willburn</h4>
  <div className="flex flex-wrap justify-center ">
    <button className="bg-secondary p-4 rounded-l-lg">
      <img src={callLogo} alt="Call" className="h-6 w-6" />
    </button>
    <div className="bg-primary px-6 py-3 rounded-r-lg">
      <span>0123-456-789</span>
    </div>
  </div>
</div>

  )
}

export default HCallSec;