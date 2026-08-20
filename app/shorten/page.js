"use client"
import React, { useState } from 'react'

const Shorten = () => {
    const [url, setUrl] = useState("")
    const [shorturl, setShortUrl] = useState("")
    const [generated, setGenerated] = useState(false)

  return (
    <div className='mx-auto w-2xl bg-purple-100 my-16 p-10 rounded-3xl flex flex-col gap-'>
      <h1 className='font-bold text-2xl mb-5'>Generate your short URLs</h1>
      <div className='flex flex-col gap-2'>
        <input type="text"
        value={url}
        className='p-4 focus:outline-purple-600 bg-white rounded-xl'
         placeholder='Enter your URL'
         onChange={e =>{setUrl(e.target.value)}}/>

        <input type="text"
        value={shorturl}
        className='p-4 focus:outline-purple-600 bg-white rounded-xl' 
        placeholder='Enter your preferred short URL text'
        onChange={e =>{setShortUrl(e.target.value)}} />
        <button className='mt-5 bg-purple-500 rounded-lg px-3 py-1 text-white cursor-pointer hover:bg-purple-800 font-bold'>Generate</button>
      </div>
    </div>
  )
}

export default Shorten
