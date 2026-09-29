import WaterFirePump from '@/components/Services/WaterFirePump'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Water Fire Pump Services',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} SecondChild={"Water Fire Pump Services"} />
            <WaterFirePump />
        </Layout>
    )
}
