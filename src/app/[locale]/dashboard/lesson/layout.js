import LassonLoayout from '@/components/page/dashboard/lsn-layout'
import axios_init from '@/utils/axios_init'
import React from 'react'

async function getData() {
  const res = await axios_init.get('/course/detail/1/')
  return res 
}

export default async function layout({ children }) {
  const data = await getData()
  return (
    <LassonLoayout data={data}>
      {children}
    </LassonLoayout>
  )
}
