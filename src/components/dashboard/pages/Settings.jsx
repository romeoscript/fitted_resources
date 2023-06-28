import React from 'react'
import Layout from '../Layout'

const Settings = () => {
  return (
    <div>
        <Layout>
            <section className='p-[2rem] grid gap-5'>
                <aside className='h-[314px] rounded-[20px] bg-white' style={{boxShadow:' 0px 4px 20px -1px rgba(0, 0, 0, 0.25)'}}>
                    <h1>Settings</h1>
                </aside>
                <aside className='h-[314px] rounded-[20px] bg-white' style={{boxShadow:' 0px 4px 20px -1px rgba(0, 0, 0, 0.25)'}}>
                    <h1>Settings</h1>
                </aside>
            </section>
        </Layout>
    </div>
  )
}

export default Settings