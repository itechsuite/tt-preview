import BoltTensioningPro from '@/components/Portfolio/BoltTensioningPro'
import PortfolioSingle1 from '@/components/Portfolio/BoltTensioningPro'
import FireGas from '@/components/Portfolio/FireGas'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Fire and Gas System ',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Portfolio'} SecondChild={"Fire and Gas System"} />
            <FireGas />
        </Layout>
    )
}
