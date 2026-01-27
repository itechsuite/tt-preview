import Fire from '@/components/Services/Fire'
import ServiceSingle5 from '@/components/Services/Fire'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Fire_&_gas_alarm_system',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} SecondChild={"Fire_&_gas_alarm_system"} />
            <Fire />
        </Layout>
    )
}
