import ColdCutting from '@/components/Services/ColdCutting'
import ServiceSingle2 from '@/components/Services/ColdCutting'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Cold Cutting',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} SecondChild={"Cold_Cutting"} />
            <ColdCutting />
        </Layout>
    )
}
