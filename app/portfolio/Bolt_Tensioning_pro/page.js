import BoltTensioningPro from '@/components/Portfolio/BoltTensioningPro'
import PortfolioSingle1 from '@/components/Portfolio/BoltTensioningPro'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Bolt Tensioning pro',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Portfolio'} SecondChild={"Bolt Tensioning pro"} />
            <BoltTensioningPro />
        </Layout>
    )
}
