'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const About = () => {
    const router = useRouter()

    const isLoggedIn = false;

    const handleLogin = () => {
        if (isLoggedIn) {
            router.push('/about/address')
        } else {
            router.push('/')
        }
    }

    return (
        <div>
            <h3>About page</h3>
            <h3><Link href='/about/address' className='text-blue-600'>see address</Link></h3>
            <button type='button' onClick={handleLogin}
            className='text-yellow-600'
            >Next (Address)</button>
        </div>
    );
};

export default About;