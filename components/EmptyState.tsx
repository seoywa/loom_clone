import Image from 'next/image'
import React from 'react'

const EmptyState = ({ icon, title, description }: EmptyStateProps ) => {
  return (
    <section className='empty-state'>
      <div>
        <Image src={icon} height={46} width={46} alt='icon' />
      </div>
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
    </section>
  )
}

export default EmptyState