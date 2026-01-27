import FireGas from '@/components/Portfolio/FireGas'
import HabitatPrep from '@/components/Portfolio/HabitatPrep'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Habitat Preparation ',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Portfolio'} SecondChild={"Habitat Preparation"} />
            <HabitatPrep />
        </Layout>
    )
}
