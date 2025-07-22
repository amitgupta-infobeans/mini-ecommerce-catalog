import React from 'react'
import { useFormStatus } from 'react-dom'
// import { useForm } from 'react-hook-form';

export const SubmitButton = () => {

  const status = useFormStatus();
  // console.log(status)
  return <button className='p-2 bg-black text-white' disabled={status.loading} >{status.pending ? "Submitting..." : "Submit"}</button>
}

export const UseFormStatusHook = () => {

  const handleData = async () => {
    await new Promise((res) => setTimeout(() => {
      res("Success from Promise...")
    }, 2000))
    console.log("okay form has been submited..")
  }
  return (
    <>
      <h1 className='text-2xl mt-10 underline font-bold'>UseFormStatusHook exmaple...</h1>
      <form action={handleData}>
        <input className='p-2 border m-3' type='text' name="firstname" />
        <SubmitButton/>
      </form>
    </>
  )
}

