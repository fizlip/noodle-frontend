"use client"
import {useEffect, useState, useContext} from 'react'
import SidebarComponent from './SidebarComponent'
import Sidebar from './Sidebar'

import { MdAdd, MdOutlineDashboard } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { GiFastNoodles } from "react-icons/gi";
import { RiHistoryFill } from "react-icons/ri";
import { IoStorefront } from "react-icons/io5";

import Link from 'next/link'

import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { createPublicClient, http } from 'viem'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import Image from 'next/image'
 
function Profile() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
 
  if (isConnected)
    return (
      <div className='flex'>
        <div>
          <Image 
            src="/chimp.jpg"
            width={30}
            height={10}
            alt="pic"
            className="rounded-full"
            objectFit='contain'
            layout="fixed"
          />
        </div>
        <div className='text-mono text-sm pt-1 pl-2'>
          {address?.slice(0,6)}
          ...
          {address?.slice(-4)}
        </div>
        <div>
          <button onClick={() => disconnect()}></button>
        </div>
      </div>
    )
  return <button onClick={() => connect()}>Connect Wallet</button>
}
 
const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  }),
})

interface Props {
  children: React.ReactNode;
}

const LayoutMain: React.FC<Props> = ({children}) => {

  const [mouseHoverLeft, setMouseHoverLeft] = useState(false)
  const [mouseHoverRight, setMouseHoverRight] = useState(false)
  const ICON_SIZE = 30;

  const [active, setActive] = useState("");

  return(
    <div>
      <div className='flex w-[100%] border-b p-5 items-stretch relative'>
        <div>
          <Link href="/" className='font-mono font-bold text-green-700 text-lg'>Noodle()</Link>
        </div>
        <div className='absolute right-10'>
          <div className='border p-2 shadow-md bg-pink-500 text-white rounded-full'>
            <WagmiConfig config={config}>
              <Profile />
            </WagmiConfig>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="relative group z-0" onMouseEnter={() => {if(window.innerWidth >= 680){setMouseHoverLeft(true)}}} onMouseLeave={() => setMouseHoverLeft(false)}>
          <Sidebar>
            <div className="p-4 invisible sm:visible absolute sm:relative">
            {
              mouseHoverLeft ?
                <Link className="transition-none" key="/editor" href="/editor">
                  <h5 className="pz-4 ml-[-10px] p-0 font-bold bg-pink-500 flex rounded-lg align-center justify-center"><MdAddBox color="white" size={40}/></h5>
                </Link>
                :
                <Link key="/editor" href="/editor">
                  <h5 className="pz-4 ml-[-10px] font-bold bg-pink-500 rounded-lg"><MdAddBox color="white" size={40}/></h5>
                </Link>
            }
            </div>
            <SidebarComponent mouseHover={mouseHoverLeft} icon={<MdOutlineDashboard size={ICON_SIZE} />} title="Dashboard" href="/dashboard" />
            <SidebarComponent mouseHover={mouseHoverLeft} icon={<GiFastNoodles size={ICON_SIZE}/>} title="Noodles" href="/editor"/>
            <SidebarComponent mouseHover={mouseHoverLeft} icon={<IoStorefront size={ICON_SIZE}/>} title="Marketplace" href="/settings"/>
            <SidebarComponent mouseHover={mouseHoverLeft} icon={<RiHistoryFill size={ICON_SIZE}/>} title="History" href="/system"/>
          </Sidebar>
        </div>
        <div className="w-[100%]">
          {children}
        </div>
        <div>
          <div className="relative group z-0 shadow-xl" onMouseEnter={() => {if(window.innerWidth >= 680){setMouseHoverRight(true)}}} onMouseLeave={() => setMouseHoverRight(false)}>
          <Sidebar>
            <div className="p-4 invisible sm:visible absolute sm:relative">
            {
              mouseHoverRight ?
                <Link className="transition-none" key="/editor" href="/editor">
                  <h5 className="pz-4 ml-[-10px] p-0 font-bold bg-pink-500 flex rounded-lg align-center justify-center"><MdAddBox color="white" size={40}/></h5>
                </Link>
                :
                <Link key="/editor" href="/editor">
                  <h5 className="pz-4 ml-[-10px] font-bold bg-pink-500 rounded-lg"><MdAddBox color="white" size={40}/></h5>
                </Link>
            }
            </div>
            <SidebarComponent mouseHover={mouseHoverRight} icon={<MdOutlineDashboard size={ICON_SIZE} />} title="Dashboard" href="/dashboard" />
            <SidebarComponent mouseHover={mouseHoverRight} icon={<GiFastNoodles size={ICON_SIZE}/>} title="Noodles" href="/editor"/>
            <SidebarComponent mouseHover={mouseHoverRight} icon={<IoStorefront size={ICON_SIZE}/>} title="Marketplace" href="/settings"/>
            <SidebarComponent mouseHover={mouseHoverRight} icon={<RiHistoryFill size={ICON_SIZE}/>} title="History" href="/system"/>
          </Sidebar>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutMain;