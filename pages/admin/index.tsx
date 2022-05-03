
import type { NextPage } from 'next'
import Head from 'next/head'
import LoginScreen from '../../components/admin/LoginScreen/LoginScreen';

const Admin: NextPage = () => {

    return (
        <>
            <Head>
                <title>{`Shrey Kumar's Admin Portal`}</title>
                <meta name="description" content="Admin Portal | Shrey Kumar" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
            </Head>
            <LoginScreen />
        </>
    );
}

export default Admin;