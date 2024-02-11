import DashboardHomePage from "@/components/page/dashboard/home";
import axios_init from "@/utils/axios_init";

async function getData() {
  const res = await axios_init.get('/course/detail/1/')
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