import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill} from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed '>
        <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-200 ml-[-90px] hover:ml-[-1px] duration-200'>
                 <a href="https://www.linkedin.com/in/bala-venkat-3bb292231" className='flex justify-between items-center w-full text-black'>                   
                    <>
                        LinkedIn<FaLinkedin size={40} color='#0077b5'/>
                    </>
                 </a>
             </li>
             <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-200 ml-[-90px] hover:ml-[-1px] duration-200'>
                 <a href="https://github.com/balavenkat123" className='flex justify-between items-center w-full text-black'>                   
                    <>
                        GitHub<FaGithub size={40} color='#333'/>
                    </>
                 </a>
             </li>
             <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-200 ml-[-90px] hover:ml-[-1px] duration-200'>
                 <a href="mailto:balavenkat17902@gmail.com" className='flex justify-between items-center w-full text-black'>                   
                    <>
                        Mail me<HiOutlineMail size={40}  color="red"/>
                    </>
                 </a>
             </li>
             <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-200 ml-[-90px] hover:ml-[-1px] duration-200'>
                 <a href="/bala-resumewuthpic.pdf" className='flex justify-between items-center w-full text-black' download={true}>                   
                    <>
                        resume<BsFillPersonLinesFill size={40} />
                    </>
                 </a>
             </li>

        </ul>
    </div>
    
  )
}

export default SocialLinks