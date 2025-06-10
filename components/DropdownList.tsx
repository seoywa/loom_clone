'use client';

import { filterOptions } from '@/constants';
import Image from 'next/image';
import React, { useState } from 'react'

const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
        <div className='filter-trigger'>
          <figure>
            <Image src={'/assets/icons/hamburger.svg'} alt='menu' height={14} width={14} />
            {"  "}MOST RECENT
          </figure>

          <Image src={'/assets/icons/arrow-down.svg'} width={20} height={20} alt='arrow-down' />
        </div> 
      </div>

      {isOpen && (
        <ul className='dropdown'>
          {filterOptions.map(option => (
            <li key={option} className='list-item'>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropdownList