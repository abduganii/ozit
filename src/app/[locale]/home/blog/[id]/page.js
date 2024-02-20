import SingleBlogsPage from "@/components/page/blog-id/inde";
import axios_init from "@/utils/axios_init";

async function getBlogs() {
  return await axios_init.get(`/common/posts`)
}
async function getBlogsById(id) {
  return await axios_init.get(`/common/posts/${id}`)
}
export default async function page({ params: { id }}) {
  const Blogs = await getBlogs()
  const SingleBlogs = await getBlogsById(id)
  
  return (
    <>
      <SingleBlogsPage Blogs={Blogs} SingleBlogs={SingleBlogs} />
    </>
  )
}
