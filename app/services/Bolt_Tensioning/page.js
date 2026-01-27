import BoltTensioning from '@/components/Services/BoltTensioning'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Bolt Tensioning',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} SecondChild={"Bolt Tensioning"} />
            <BoltTensioning />
        </Layout>
    )
}
