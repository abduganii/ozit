import NotesPage from "@/components/page/dashboard/notes-page";
import axios_init from "@/utils/axios_init";
import { cookies } from "next/headers";

async function getNotes() {
  // return await axios_init.get(`/common/notes`)
  const token = cookies().get("token")
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/common/notes`,{
    credentials:"include",
    headers: { Authorization: 'Bearer ' + token?.value || "" }
  })
  return res.json()
}
export default async function page() {
  const Notes = await getNotes()
    return (
      <>
        <NotesPage Notes={Notes} />
      </>
    )
  }