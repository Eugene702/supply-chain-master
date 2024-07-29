/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        COMPANY_NAME: process.env.COMPANY_NAME
    },
    async redirects() {
        return [
            {
                destination: '/dashboard',
                source: '/',
                permanent: false
            },
            {
                destination: '/warehouse/items',
                source: '/warehouse',
                permanent: false
            },
        ]
    },

    images: {
        remotePatterns: [
            {
                hostname: 'eugenefeilianputrarangga.vercel.app',
            }
        ]
    }
};

export default nextConfig;
