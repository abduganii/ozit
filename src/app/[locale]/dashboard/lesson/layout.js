import LassonLoayout from '@/components/page/dashboard/lsn-layout'
import React from 'react'

export default function layout({children}) {
  return (
    <LassonLoayout>
      {children}
    </LassonLoayout>
  )
}
