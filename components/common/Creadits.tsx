import Link from 'next/link'
import React from 'react'

const Credits = () => {
  return (
    <section className='flex items-center justify-center py-2'>
      <span className='text-xs sm:text-sm text-gray-400'>
        A project by {' '}
        <strong>TeamNextCraft</strong> • {' '}
        <Link
          rel='Developers Team Link'
          href={'https://github.com/orgs/TeamNextCraft'}
          target='_blank'
          className='underline underline-offset-2'
        >
          View our Github
        </Link>
      </span>
    </section>
  )
}

export default Credits