import HabitatPreparation from '@/components/Services/HabitatPreparation'
import ServiceSingle3 from '@/components/Services/HabitatPreparation'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Habitat_preparation',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} SecondChild={"Habitat_preparation"} />
            <HabitatPreparation />
        </Layout>
    )
}
