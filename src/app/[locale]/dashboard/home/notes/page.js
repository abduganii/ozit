import NotesPage from "@/components/page/dashboard/notes-page";
import axios_init from "@/utils/axios_init";

async function getNotes() {
  return await axios_init.get(`/common/notes`)
}
export default async function page() {
  const Notes = await getNotes()
    return (
      <>
        <NotesPage Notes={Notes} />
      </>
    )
  }