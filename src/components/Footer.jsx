import React from 'react'

const Footer = () => {
    return (
        <div className=' bg-primary'>
            <div className='w-[95%] mx-auto flex max-md:flex-col gap-[20px] max-md:gap-[50px] text-[#fff] text-[16px] py-[50px]'>
                <div className='flex-1'>
                    <h4 className='text-[45px] font-bold'>Logo <span className='text-secondary'>Here</span></h4>
                    <p>NRI legal is most called for property services by overseas residing Indians. We are dedicated to solve property and other legal matters revolving around NRI individuals.</p>
                </div>
                <div className='flex-1'>
                    <div className='flex gap-[10px] mb-[26px]'>
                        <img src="./../public/assets/envelope-regular.svg" alt="img" className='w-[26px] '/>
                        <p>info@nrilegal.in</p>
                    </div>
                    <div className='flex gap-[10px] mb-[26px]'>
                        <img src="./../public/assets/location-dot-solid.svg" alt="img" className='w-[26px]'/>
                        <p>Chamber No. 168, First Floor, Lawyers Complex, District & Session Court Complex, Sector 43, Chandigarh, 160043</p>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='flex gap-[10px] mb-[26px]'>
                        <img src="./../public/assets/phone-solid.svg" alt="img" className='w-[26px]'/>
                        <p>0123-456-789</p>
                    </div>

                    <div className='flex gap-[10px] mb-[26px]'>
                        <img src="./../public/assets/clock-solid.svg" alt="img" className='w-[26px]'/>
                        <p>Monday - Friday: 10am - 6pm
                            Saturday: 10am - 2pm
                            Sunday: Closed</p>
                    </div>
                </div>

            </div>
            <div className='bg-primary flex justify-center items-center text-[16px]'>Developed By <pre className='font-bold text-secondary'> TechPaliyal</pre></div>
        </div>
    )
}

export default Footer