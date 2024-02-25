import AboutUsPage from '@/components/page/about-us'
import axios_init from "@/utils/axios_init";


async function getData() {
    return await axios_init.get(`/common/team-members`)
}

export default async function page() {
    const data = await getData()
    return (
        <>
            <AboutUsPage teams={data}/>
        </>
    )
}
