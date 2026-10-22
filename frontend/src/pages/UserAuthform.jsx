import React from 'react'
import Inputbox from '../Components/Inputbox'


function UserAuthform({ type }) {
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    return (
        <section className='h-cover flex justify-center items-center '>
            <form action="" className='w-[80%] max-w-100'>
                <h1 className='text-4xl font-gelasio capitalize text-center mb-24 '>
                    {type=='sign-in' ? 'welcome back' : "join us today"}</h1>

                {type != 'sign in '?
                    < Inputbox 
                        type="full name"
                        name='full name'
                        placeholder='full name'
            />
            :''
            }

                <Inputbox
                    type="email"
                    name='email'
                    placeholder='email'
                    icon='fi-rr-user'
                />

                <Inputbox
                    type="password"
                    name='password'
                    placeholder='password'
                />

                <button 
                className='btn-dark center mt-14'
                type='submit'
                onClick={handleSubmit}
                >
                    {
                        type.replace('-' , ' ')
                    }

                </button>

            </form>
        </section>

    )
}

export default UserAuthform
