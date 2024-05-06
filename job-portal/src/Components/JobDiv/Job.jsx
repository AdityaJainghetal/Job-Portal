import React from 'react'
import { BiTimeFive } from "react-icons/bi";
import fampay from '../../assets/fampay.png';
import logo from '../../assets/logo.png'
import Ema from '../../assets/Ema.png'
import Narrative from '../../assets/Narrative.png'
import Bot from '../../assets/Bot.png'
import Loop from '../../assets/Loop.png'
import Awiros from '../../assets/Awiros.png'
import degenerous from '../../assets/degenerous.png'
import BeBetta from '../../assets/BeBetta.png'
import Firefly from '../../assets/Firefly.png'
import Canary from '../../assets/Canary.png'
import RichPannel from '../../assets/RichPannel.png'


const Data = [
    {
        id:1,
        image: fampay,
        title: 'Web Developer',
        time:'10days ago',
        location:'Canada',
        Salary : 'Estimated Salary 12LPA -15LPA',
        desc: 'FamPay said on Wednesday it has raised $38 million in its Series A round led by Elevation Capital. General Catalyst, Rocketship VC, Greenoaks Capital and existing investors',
        company:'Fampay',
        

    },

    {
        id:2,
        image: logo,
        title: 'Founding Engg',
        time:'10days ago',
        location:'India',
        Salary : 'Estimated Salary 12LPA -15LPA',
        desc: 'At Firstock, we believe the financial system should be built with easy to understand for everyone That why we create products that let you start investing at your own, on your own terms.',
        company:'fitstock',
       

    },

    {
        id:3,
        image: logo,
        title: 'Product Manager',
        time:'10days ago',
        location:'India',
        Salary : 'Estimated Salary 12LPA -15LPA',
        desc: 'Trumio is an AI-powered group work platform for university students to gain real world project experience alongside their academic course work. With Trumio, students can find, contract, manage, and deliver on global projects using the latest AI and domain specific tools.',
        company:'Trumio'

    },


    {
        id:4,
        image: Ema,
        title: 'Software prouctive Engg',
        time:'5days ago',
        location:'Bangalore',
        Salary : 'Estimated Salary 12LPA -15LPA',
        desc: 'The European Medicines Agency is an agency of the European Union in charge of the evaluation and supervision of pharmaceutical products. Prior to 2004, it was known as the European Agency for the Evaluation of Medicinal Products or European Medicines Evaluation Agency',
        company:'Ema'

    },


    {
        id:5,
        image: Narrative,
        title: 'Founding Fullstock Engg',
        time:'10days ago',
        location:'India',
        Salary : 'Estimated Salary 12LPA -15LPA',
        desc: 'Narrative is an AI-powered invoice audit, payments and analytics tool. We verify proofs submitted by drivers for brokers, invoices received by shippers highlighting the errors and missing items Payments: Pay invoices accurately and on time with their preferred method.Dashboard Track logistics spend, error rates, and carrier performance for additional saving',
        company:'Narrative (yc w23)'

    },


    {
        id:6,
        image: Bot,
        title: 'Fullstock Engg' ,
        time:'Now',
        location:'Canada',
        Salary : 'Estimated Salary 12LPA -15LPA',
        desc: ' a virtual employee for your business that can answer most of your customers questions on your behalf and helps efficiently manage customer communication. product and technology functions at both public and private software companies, and in his own startups, that were leaders in their category.',
        company:'Business On bot'

    },

    {
        id:7,
        image: Loop,
        title: 'Web Developer',
        time:'10days ago',
        location:'Canada',
        Salary : 'Estimated Salary 12LPA -15LPA',
        desc: 'Loop is your co-pilot to manage your food brand. Empower your team to minimize errors, stay ahead of food trends and boost revenue through data-driven smart workflows. We help the world leading restaurants grow their businesses. We make it easy to harness the power of data and to use it to guide decisions.',
        company:'Loop kitchen'

    },

    {
        id:8,
        image: Awiros,
        title: 'Computer Vision Lead',
        time:'10days ago',
        location:'India',
        Salary : 'Estimated Salary 15LPA-20LPA',
        desc: 'Awiros is an open platform for Computer Vision and AI developers, providing them with all of the neccessary resources for transforming AI algorithms into end-to-end solutions. It is, therefore, used by developers from across the world for testing, training, benchmarking and deploying their applications.',
        company:'Awiros'

    },

    {
        id:9,
        image: degenerous,
        title: 'Web Developer',
        time:'10days ago',
        location:'India',
        Salary : 'Estimated Salary 12LPA -15LPA',
        desc: 'DeGenerous DAO is committed to real-world change. From funding international service trips to our flagship apps daily use by kids - Lions International - with over 1.4M members and 50k local clubs',
        company: 'DeGenerous',
    },

    {
        id:10,
        image: BeBetta,
        title: 'Product Desginer',
        time:'Now',
        location:'Bangalore',
        Salary : 'Estimated Salary 12LPA -15LPA',
        desc: 'Strap in, sports fans! We turning the sports betting world on its head. At BeBetta, it not about the money—it about the rush of the game, the pride in your picks, and the cheers when you get it right  And we keep it clean and green—no risks, just the joy of playing the odds with the skills you’ve mastered. We’re here to amp up the fun and keep it that way, one prediction at a time.',
        company: 'BeBetta'
    },

    {
        id:11,
        image:  BeBetta,
        title: 'Android developer',
        time:'10days ago',
        location:'Canada',
        Salary : 'Estimated Salary 12LPA -15LPA',
        desc: 'Strap in, sports fans! We turning the sports betting world on its head. At BeBetta, it not about the money—it about the rush of the game, the pride in your picks, and the cheers when you get it right  And we keep it clean and green—no risks, just the joy of playing the odds with the skills you’ve mastered. We’re here to amp up the fun and keep it that way, one prediction at a time',
        company:' BeBetta'

    },

    {
        id:12,
        image: BeBetta,
        title: 'CTO',
        time:'10days ago',
        location:'Canada',
        Salary : 'Estimated Salary 12LPA -15LPA',
        desc: 'Strap in, sports fans! We turning the sports betting world on its head. At BeBetta, it not about the money—it about the rush of the game, the pride in your picks, and the cheers when you get it right  And we keep it clean and green—no risks, just the joy of playing the odds with the skills you’ve mastered. We’re here to amp up the fun and keep it that way, one prediction at a time',
        company:'BeBetta'

    },

    {
        id:14,
        image: Firefly,
        title: 'Front end developer',
        time:'Now',
        location:'Canada',
        Salary : 'Estimated Salary 12LPA -15LPA',
        desc: 'Fueled by the most advanced tracking, measurement, and optimization capabilities available in the out-of-home space, Firefly is an innovative data-first ad network. Leveraging the industry’s first ever audience planning capabilities, we deliver the most relevant messages at the most relevant moments with our suite of dynamic on-car, in-car, and experiential solutions.',
        company:'Firefly'

    },

    {
        id:15,
        image: Canary,
        title: 'Web Developer',
        time:'Now',
        location:'India',
        Salary : 'Estimated Salary 12LPA -15LPA',
        desc: 'A method of pathogen threat detection that uses B cells, a type of white blood cell that binds to and recognizes pathogens13. CANARY stands for Cellular Analysis and Notification of Antigen Risks and Yields3',
        company:'Canary Technologies'

    },

    {
        id:16,
        image: RichPannel,
        title: 'Web Developer',
        time:'Now',
        location:'Canada',
        Salary : 'Estimated Salary 12LPA -15LPA',
        desc: 'Merchants highly recommend this app for its superior CRM features, user-friendly interface, and seamless integrations. They appreciate the responsive live chat support, AI-assisted draft responses, and the ability to view customer carts. The app integration with Aircall is praised for recording and logging conversations.',
        company:'RichPannel'

    },



]




function Job() {
  return (
    <div>

        <div className='jobContainer flex gap-10 justify-center flex-wrap item-center py-10'>
         

              {
                Data.map(({id,image,title,time,location,desc,company,Salary}) =>{
                    return(

                        <div key={id} className='group group/item singleJob w-[350px] p-[20px] bg-white rounded [10px]
                        hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

                        <div className='company flex items-center gap-2'>
                        <img src={image} alt='Company Logo' className='w-[10%]'/>
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                    </div>
              
              
              
                <span className='flex justify-between items-center gap-4'>
                    {/* <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1> */}
                   
                <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive/>{time}
                </span>   
                </span>
                <h2 className='text-[16px] font-semilight text-textColor group-hover:text-white'>{title}</h2>
                <h6 className='text-[#ccc]'>{location}</h6>

                <h3 className='text-[#3e3939] font-bold'>{Salary}</h3>
               <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
               group-hover:text-white'>
               {desc}
               </p>

{/* 
                    <div className='company flex items-center gap-2'>
                        <img src={fampay} alt='Company Logo' className='w-[10%]'/>
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>Campay</span>
                    </div> */}

                    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px]
                     font-semibold item: text-textColor hover:bg-white group-hover/item:text-textColor '>Easy Apply</button>

                    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px]
                     font-semibold item: text-textColor hover:bg-white group-hover/item:text-textColor '>Unlock referrals asks</button>
                    </div>


                    )
                })
              }

        </div>
    </div>
  )
}

export default Job