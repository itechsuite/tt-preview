import BoltTorquing from '@/components/Services/BoltTorquing'
import ServiceSingle6 from '@/components/Services/BoltTorquing'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Bolt Torquing & Tensioning',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} SecondChild={"Bolt Torquing and Tensioning"} />
            <BoltTorquing />
        </Layout>
    )
}
