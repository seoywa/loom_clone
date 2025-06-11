'use client'

import { daysAgo } from '@/lib/utils'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const VideoDetailHeader = ({ 
  title, description, createdAt, userImg, username, videoId, ownerId, visibility, thumbnailUrl, id
}: VideoDetailHeaderProps) => {
  const [copied, setCopied] = useState(false);
  const router = useRouter()
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/video/${id}`);

    setCopied(true);
  }

  useEffect(() => {
    const changedChecked = setTimeout(() => {
      if (copied) setCopied(false)

    }, 2000)

    return () => clearTimeout(changedChecked)
  }, [copied]);

  return (
    <header className='detail-header'>
      <aside className='user-info'>
        <h1>{title}</h1>
        <p>{description}</p>
        <figure>
          <button onClick={() => router.push(`/profile/${ownerId}`)}>
            <Image src={userImg || ''} alt='user' width={24} height={24} className='rounded-full' />
            <h2>
              {username ?? 'Guest'}
            </h2>
          </button>

          <figcaption>
            <span className='mt-1'>•</span>
            <p>{daysAgo(createdAt)}</p>
          </figcaption>
        </figure>
      </aside>

      <aside className='cta'>
        <button onClick={handleCopyLink}>
          <Image src={copied ? '/assets/images/checked.png' : '/assets/icons/link.svg'} alt='copy' width={24} height={24} />
        </button>
      </aside>
    </header>
  )
}

export default VideoDetailHeader