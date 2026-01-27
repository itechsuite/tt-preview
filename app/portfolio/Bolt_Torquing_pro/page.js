import BoltTorquingpro from '@/components/Portfolio/BoltTorquingpro'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Bolt Torquing',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Portfolio'} SecondChild={"Bolt Torquing"} />
            <BoltTorquingpro />
        </Layout>
    )
}
