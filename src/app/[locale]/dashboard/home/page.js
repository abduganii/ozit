import DashboardHomePage from "@/components/page/dashboard/home";

async function getData() {
    const res = await fetch(`${process.env.NEXT_BASE_URL}/v1/course/detail/1/`, {
        next: { revalidate: 1 }
    })
   
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // if (!res.ok) {
    //     // This will activate the closest `error.js` Error Boundary
    //     throw new Error('Failed to fetch data')
    // }

    return res.json()
}

export default async function page() {
  const data = await getData()
 
    return (
      <>
        <DashboardHomePage data={data}/>
      </>
    )
  }