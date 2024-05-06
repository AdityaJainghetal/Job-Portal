import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { BsHouseDoor } from "react-icons/bs";
// import {CilocationOn} from 'react-icons/ai'
import { GiMoneyStack } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { GrUserManager } from "react-icons/gr";
import { AiFillControl } from "react-icons/ai";


function Search() {
  return (
    <div className='searchDiv grid gp-5 bg-greyIsh rounded-[10px] p-[3rem]'>
        <form action=''>
            <div className='firstDiv flex justify-evenly items-center rounded-[8px] 
            gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>


            <div className='flex gap-2 items-center'>
                <AiFillControl className = 'text-[25px] icon'/>
                <input type='text' className='bg-transparents text-blue-500 focus:outline-none
                      w-[100%]' placeholder='Role'/>
                      <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
                      hover:text-textColor icon'/>
            </div>
           


           
            <div className='flex gap-2 items-center'>
                < GrUserExpert className = 'text-[25px] icon'/>
                <input type='text' className='bg-transparents text-blue-500 focus:outline-none
                      w-[100%]' placeholder='Number of emoloyees'/>
                      <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
                      hover:text-textColor icon'/>
            </div>
           

           
            <div className='flex gap-2 items-center'>
                < GrUserManager className = 'text-[25px] icon'/>
                <input type='text' className='bg-transparents text-blue-500 focus:outline-none
                      w-[100%]' placeholder='Experience'/>
                      <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
                      hover:text-textColor icon'/>
            </div>
           

           
            <div className='flex gap-2 items-center'>
                <BsHouseDoor className = 'text-[25px] icon'/>
                <input type='text' className='bg-transparents text-blue-500 focus:outline-none
                      w-[100%]' placeholder='Remote'/>
                      <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
                      hover:text-textColor icon'/>
            </div>



            <div className='flex gap-2 items-center'>
                <GiMoneyStack className = 'text-[25px] icon'/>
                <input type='text' className='bg-transparents text-blue-500 focus:outline-none
                      w-[100%]' placeholder='Minimum base pay-Salery'/>
                      <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
                      hover:text-textColor icon'/>
            </div>
           
            <div className='flex gap-2 items-center'>
                <AiOutlineSearch className = 'text-[25px] icon'/>
                <input type='text' className='bg-transparents text-blue-500 focus:outline-none
                      w-[100%]' placeholder='Company Name'/>
                      <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
                      hover:text-textColor icon'/>
            </div>
           
           
           
           
           
            </div> 
        </form>
    </div>
  )
}

export default Search