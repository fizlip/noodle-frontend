"use client"
import React from 'react'
import Image from 'next/image'

function Dashboard() {

  return (
    <main className="flex flex-col justify-between align-center w-[100%]">
      <div className="text-center mt-0 bg-green-100">
        <div className='w-[70%] m-auto p-20'>
          <h1 className='text-7xl font-bold mt-20'>Create a Noodle</h1>
          <div className='grid grid-cols-2 gap-10 mt-10'>
            <div className='align-left justify-left'>
              <div className='align-left text-left text-xl font-bold'>If...</div>
              <div className='flex'>
                <input placeholder='Search for trigger...' className='rounded-lg p-3 border border-black align-left justify-left w-[100%]' type="text" />
              </div>
            </div>
            <div>
              <div className='align-left justify-left'>
                <div className='align-left text-left text-xl font-bold'>Then!</div>
                <div>
                  <input placeholder='Search for function...' className='rounded-lg p-3 border border-black align-left justify-left w-[100%]' type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ml-[20%] mr-[20%] mt-10'>
        <h1 className='text-2xl '>Recommended Noodles</h1>
        <div className='grid grid-cols-3 gap-10 pt-10'>
          <div className='border rounded-md'>
            <div className='p-5 pb-0 flex'>
              <Image 
                src="/eth-logo.png"
                width={40}
                height={25}
                alt="pic"
                className="rounded-md"
                objectFit='contain'
                layout="fixed"
              />
              <Image 
                src="/x-logo.avif"
                width={40}
                height={25}
                alt="pic"
                className="rounded-md"
                objectFit='contain'
                layout="fixed"
              />
            </div>
            <div className='p-5 rounded text-lg'>
              <p>Create new X post when deposits hit a goal</p>
            </div>
            <div className='bg-neutral-100 p-2 pl-5'>
              <p>Try it!</p>
            </div>
          </div>
          <div className='border rounded text-lg'>
            <div className='p-5 pb-0 flex'>
              <Image 
                src="/eth-logo.png"
                width={30}
                height={10}
                alt="pic"
                className="rounded-md"
                objectFit='contain'
                layout="fixed"
              />
              <Image 
                src="/sheets-logo.png"
                width={30}
                height={10}
                alt="pic"
                className="rounded-md"
                objectFit='contain'
                layout="fixed"
              />
            </div>
            <div className='p-5 rounded text-lg'>
              <p>Save all balances in a Spreadsheet</p>
            </div>
            <div className='bg-neutral-100 p-2 pl-5'>
              <p>Try it!</p>
            </div>
          </div>
          <div className='border rounded text-lg'>
            <div className='p-5 pb-0 flex'>
              <Image 
                src="/eth-logo.png"
                width={30}
                height={10}
                alt="pic"
                className="rounded-md"
                objectFit='contain'
                layout="fixed"
              />
              <Image 
                src="/gpt-logo.png"
                width={30}
                height={10}
                alt="pic"
                className="rounded-md"
                objectFit='contain'
                layout="fixed"
              />
              <Image 
                src="/tiktok.png"
                width={30}
                height={10}
                alt="pic"
                className="rounded-md"
                objectFit='contain'
                layout="fixed"
              />
              <Image 
                src="/chimp.jpg"
                width={30}
                height={10}
                alt="pic"
                className="rounded-md"
                objectFit='contain'
                layout="fixed"
              />
            </div>
            <div className='p-5 rounded text-lg'>
              <p>Create a markeing campaign for an NFT project.</p>
            </div>
            <div className='bg-neutral-100 p-2 pl-5'>
              <p>Try it!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard;