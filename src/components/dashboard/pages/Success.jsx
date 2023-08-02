import React from 'react'
import Layout from '../Layout'
import Success1 from '../../../assets/success.png'
import { Button } from '@mui/material'


const Success = () => {
    const goBack = ()=>{
        window.history.back()
    }
    return (

        <Layout>
           <section className='flex items-center justify-center h-[80vh]'>
           <div className='flex items-center justify-center flex-col md:w-[70%] m-auto text-center  className="p-[1rem] min-h-[599px]  rounded-[20px] bg-white rounded-[24px]   my-[2rem]"
        '  style={{ boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.07)' }}>
                <img src={Success1} alt="" />
                <h2>Yay!!! 🎉</h2>
                <p>
                    Your application to become a vetted tailor has been sent, a Fitted Agent will get in touch with you regard the next steps. Goodluck!</p>
                    <div className='mt-[1rem] text-left'>
          <Button sx={{ background: 'pink' }} type='submit' onClick={goBack} variant="contained">Return to Dashboard </Button>
        </div>
            </div>
           </section>
        </Layout>
    )
}

export default Success