/** @type {import('next').NextConfig} */
const nextConfig = {
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
