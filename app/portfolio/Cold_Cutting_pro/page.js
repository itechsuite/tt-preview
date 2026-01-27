import ColdCuttingpro from '@/components/Portfolio/ColdCuttingpro'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Cold Cutting pro',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Portfolio'} SecondChild={"Cold Cutting pro"} />
            <ColdCuttingpro />
        </Layout>
    )
}
