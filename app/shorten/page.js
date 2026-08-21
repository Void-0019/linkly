"use client"
import React, {useState } from 'react'
import {toast, Bounce } from 'react-toastify';

const Shorten = () => {
  const [url, setUrl] = useState("")
  const [shorturl, setShortUrl] = useState("")
  const [generated, setGenerated] = useState(false)

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUrl("")
        setShortUrl("")
        console.log(result)

          toast.success(result.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
      })
      .catch((error) => console.error(error));
  }

  

  return (
        <div className='mx-auto w-2xl bg-purple-100 my-16 p-10 rounded-3xl flex flex-col gap-'>
          <h1 className='font-bold text-2xl mb-5'>Generate your short URLs</h1>
          <div className='flex flex-col gap-2'>
            <input type="text"
              value={url}
              className='p-4 focus:outline-purple-600 bg-white rounded-xl'
              placeholder='Enter your URL'
              onChange={e => { setUrl(e.target.value) }} />

            <input type="text"
              value={shorturl}
              className='p-4 focus:outline-purple-600 bg-white rounded-xl'
              placeholder='Enter your preferred short URL text'
              onChange={e => { setShortUrl(e.target.value) }} />

            <button onClick={generate} className='mt-5 bg-purple-500 rounded-lg px-3 py-1 text-white cursor-pointer hover:bg-purple-800 font-bold'>Generate</button>
          </div>
        </div>
  )
}

export default Shorten
