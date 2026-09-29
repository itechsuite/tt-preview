import WeldingMachine from '@/components/Services/WeldingMachine'
import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'

export const metadata = {
    title: 'Welding Machine Services',
}

export default function page() {
    return (
        <Layout>
            <Breadcumb firstChild={'Services'} SecondChild={"Welding Machine Services"} />
            <WeldingMachine />
        </Layout>
    )
}
