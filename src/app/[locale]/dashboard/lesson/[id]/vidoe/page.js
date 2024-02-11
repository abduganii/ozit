import LassonPage from "@/components/page/dashboard/lsn-vidoe";
import axios_init from "@/utils/axios_init";

async function getData(id) {
  const res = await axios_init.get(`/course/lesson/${id}/`)
  return res
}
export default async function page({ params: { id } }) {
  const data = await getData(id)
  
  return (
    <>
      <LassonPage data={ data} />
    </>
  )
}
