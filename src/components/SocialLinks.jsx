import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill} from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed '>
        <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-200 ml-[-100px] hover:ml-[-5px] duration-200'>
                 <a href="" className='flex justify-between items-center w-full text-black'>                   
                    <>
                        LinkedIn<FaLinkedin size={40} color='#0077b5'/>
                    </>
                 </a>
             </li>
             <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-200 ml-[-100px] hover:ml-[-5px] duration-200'>
                 <a href="" className='flex justify-between items-center w-full text-black'>                   
                    <>
                        GitHub<FaGithub size={30} color='#333'/>
                    </>
                 </a>
             </li>
        </ul>
    </div>
    
  )
}

export default SocialLinks