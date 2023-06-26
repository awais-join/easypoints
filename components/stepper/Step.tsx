import React, { useEffect, useState } from 'react';

type Props = {
  value: number;
  activeValue: number;
  text: string;
  number:number;
};

const Step = ({ text, activeValue,  value ,number}: Props) => {
console.log("🚀 ~ file: Step.tsx:11 ~ Step ~ value:", value)


  return (
    <div className='flex w-full relative items-center'>
      <hr className={`${activeValue !== 0 &&`w-full  ` }`} />
    <div className="flex  flex-col  items-center mt-8 space-y-2 ">
      <p className={`px-2 bg-primary-50 text-primary-500 rounded-full `}>{number}</p>
      <span className="text-lg text-primary-400 font-bold">{text}</span>
    </div>
    <hr
  
    className={`${activeValue !==5 &&"w-full  "}`} />
    {activeValue === 0 ?(
      <>
    <div className={`absolute hidden md:block px-1 py-1 ${value >= 1 ?" bg-primary-700":"bg-primary-300"} right-[33%]   rounded-full `}></div>
    <div className={`absolute hidden md:block px-1 py-1 ${value >= 2 ?" bg-primary-700":"bg-primary-300"} right-[1%] rounded-full  `} ></div>
    </>

    ) : activeValue === 5 &&(
      <div className={`absolute  hidden md:block px-1 py-1 ${value >= 4 ?"bg-primary-700":"bg-primary-300"} left-[20%] rounded-full `} ></div>
      
    )}
    </div>

  );
};

export default Step;
