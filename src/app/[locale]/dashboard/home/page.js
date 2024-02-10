import DashboardHomePage from "@/components/page/dashboard/home";
import axios_init from "@/utils/axios_init";
async function getData() {

  const res = await axios_init.get('/course/list/')
    // if (!res.ok) {
    //     // This will activate the closest `error.js` Error Boundary
    //     throw new Error('Failed to fetch data')
    // }
    return res

}

export default async function page() {

  const data = await getData()
    return (
      <>
        <DashboardHomePage data={data}/>
      </>
    )
  }