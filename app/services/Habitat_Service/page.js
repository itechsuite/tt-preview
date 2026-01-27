import HabitatService from '@/components/Services/HabitatService'
import ServiceSingle4 from '@/components/Services/HabitatService'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'


export const metadata = {
    title: 'Habitat_Service',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} SecondChild={"Habitat Service"} />
            <HabitatService />
        </Layout>
    )
}
