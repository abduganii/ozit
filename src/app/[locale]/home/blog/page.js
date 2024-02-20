import BlogsPage from "@/components/page/blog";
import axios_init from "@/utils/axios_init";

async function getBlogs() {
  return await axios_init.get(`/common/posts`)
}
export default async function page() {
  const Blogs = await getBlogs()
  return (
    <>
      <BlogsPage Blogs={Blogs} />
    </>
  )
}
