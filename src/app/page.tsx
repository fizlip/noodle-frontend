import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Home() {

  return (
    <main className="m-auto flex min-h-screen flex-col justify-between p-24 align-center w-[80%]">
      <div className="text-center m-auto mt-0">
        <h1 className='text-8xl font-bold'>Scale success with automation</h1>
        <p className='text-3xl m-10'>Build automated Web3 workflows customized for your business</p>
        <Link href="/dashboard" className='m-2 p-4 pl-10 pr-10 bg-pink-500 rounded-full text-white font-bold'>Start for free</Link>
      </div>
      <div className='shadow-md align-center justify-center m-auto w-[80%] mt-20'>
        <div className='flex bg-green-800 text-white text-bold rounded-xl w-[100%]'>
          <div className='w-[50%] relative'>
            <div>
              <Image 
                src="/architexts.avif"
                width={500}
                height={200}
                alt="pic"
                className="rounded-l-xl"
                objectFit='contain'
                layout="fixed"
              />
            </div>
            <div className='top-[20%] left-[15%] absolute text-white'>
              <div className='flex bg-white text-center text-black p-5 pl-5 pr-10 rounded-xl'>
                <div>
                  <Image 
                    src="/tiktok.png"
                    width={40}
                    height={25}
                    alt="pic"
                    className="rounded-l-xl"
                    objectFit='contain'
                    layout="fixed"
                  />
                </div>
                <div className='text-left pl-5'>
                  <p className='text-xs font-bold'>This happens</p>
                  <p className='text-xl'>Upload</p>
                </div>
              </div>
              <div className='mt-10 flex bg-white text-center text-black p-5 pl-5 pr-10 rounded-xl'>
                <div>
                  <Image 
                    src="/link.png"
                    width={40}
                    height={25}
                    alt="pic"
                    className="rounded-l-xl"
                    objectFit='contain'
                    layout="fixed"
                  />
                </div>
                <div className='text-left pl-5'>
                  <p className='text-xs font-bold'>Automatically do this</p>
                  <p className='text-xl'>Update dNFT</p>
                </div>
              </div>
              <div className='mt-10 flex bg-white text-center text-black p-5 pl-5 pr-10 rounded-xl'>
                <div>
                  <Image 
                    src="/dicsord.png"
                    width={40}
                    height={25}
                    alt="pic"
                    className="rounded-l-xl"
                    objectFit='contain'
                    layout="fixed"
                  />
                </div>
                <div className='text-left pl-5'>
                  <p className='text-xs font-bold'>Automatically do this</p>
                  <p className='text-xl'>Send message to team</p>
                </div>
              </div>
              <div className='mt-10 flex bg-white text-center text-black p-5 pl-5 pr-10 rounded-xl'>
                <div>
                  <Image 
                    src="/chimp.jpg"
                    width={40}
                    height={25}
                    alt="pic"
                    className="rounded-full"
                    objectFit='contain'
                    layout="fixed"
                  />
                </div>
                <div className='text-left pl-5'>
                  <p className='text-xs font-bold'>Automatically do this</p>
                  <p className='text-xl'>Push campaign</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[50%]'>
            <h1 className='text-5xl mt-[50%] p-7'>Integrate Web3 into your workflow, align it with your needs and your role.</h1>
            <button className='border-2 p-2 pl-10 pr-10 rounded-full ml-10 mt-10'>Explore automation solutions.</button>
          </div>
        </div>
      </div>
    </main>
  )
}
