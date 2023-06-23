import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-4 bg-[#146FF8] text-left text-white w-full p-[3rem]'>
        <ul>
            <li className="p-[0.5rem]">Faq</li>
            <li className="p-[0.5rem]">Fee Schedule</li>
            <li className="p-[0.5rem]">Account</li>
            <li className="p-[0.5rem]">Customer Relationship Summary</li>
        </ul>
        <ul>
            <li className="p-[0.5rem]">About POTUS</li>
            <li className="p-[0.5rem]">Our Story</li>
            <li className="p-[0.5rem]">Careers</li>
            <li className="p-[0.5rem]">Blog</li>
            <li className="p-[0.5rem]">BrokerCheck</li>
            <li className="p-[0.5rem]">Script Editor</li>
         
        </ul>
        <ul>
            <li className="p-[0.5rem]">Terms & Conditions</li>
            <li className="p-[0.5rem]">Privacy Policy</li>
            <li className="p-[0.5rem]">Business Continuity Plan</li>
            <li className="p-[0.5rem]">Disclosures</li>
            <li className="p-[0.5rem]">Data Disclaimer</li>
            
        </ul>
        <ul>
            <li className="p-[0.5rem]">Contact us</li>
            <li className="p-[0.5rem]">customerservices@webull.us</li>
            <li className="p-[0.5rem]">+1 (888) 828-0618</li>
        </ul>
       
    </div>
  )
}

export default Footer