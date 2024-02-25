import LassonLoayout from '@/components/page/dashboard/lsn-layout'
import { cookies } from 'next/headers'
import React from 'react'

async function getData() {
  // const res = await axios_init.get('/course/detail/1/')
  const token = cookies().get("token")
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/course/main-course/`,{
    credentials:"include",
    headers: { Authorization: 'Bearer ' + token?.value || "" }
  })
  return res.json()
}

export default async function layout({ children}) {
  const data = await getData()
  return (
    <LassonLoayout data={data} >
      {children}
    </LassonLoayout>
  )
}
