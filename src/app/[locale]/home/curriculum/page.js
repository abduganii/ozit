import CurriculumPage from '@/components/page/curriculum'
import axios_init from "@/utils/axios_init";

async function getData(id) {
    return await axios_init.get(`/course/main-course/`)
}

export default async function page() {
  const data = await getData()
 
  return (
    <>
      <CurriculumPage data={data}/>
    </>
  )
}
