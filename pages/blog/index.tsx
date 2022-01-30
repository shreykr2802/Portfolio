
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react';
import BlogContents from '../../components/blogContents/BlogContents';

const Blog: NextPage = () => {

    useEffect(() => {
        fetch('/api/hello').then(res => res.json()).then(res => console.log(res))
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            <Head>
                <title>Shrey Kumar's Blog</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BlogContents />
        </>
    );
}

export default Blog;