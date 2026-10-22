import React from 'react'
import Inputbox from '../Components/Inputbox'


function UserAuthform({ type }) {
    return (
        <section className='h-cover flex justify-center items-center '>
            <form action="" className='w-[80%] max-w-100'>
                <h1 className='text-4xl font-gelasio capitalize text-center mb-24 '>
                    {type=='sign-in' ? 'welcome back' : "join us today"}</h1>

                {type != 'sign in '?
                    < Inputbox 
                        type="email"
                        name='Full name'
                        placeholder='Full name'
            />
            :''
            }

                <Inputbox
                    type="email"
                    name='Full name'
                    placeholder='Full name'
                    icon='fi-rr-user'
                />

                <Inputbox
                    type="email"
                    name='Full name'
                    placeholder='Full name'
                />

            </form>
        </section>

    )
}

export default UserAuthform
