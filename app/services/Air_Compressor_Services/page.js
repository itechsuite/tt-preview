import AirCompressor from '@/components/Services/AirCompressor'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Air Compressor Services',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} SecondChild={"Air Compressor Services"} />
            <AirCompressor />
        </Layout>
    )
}
