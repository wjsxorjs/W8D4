/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites(){
        return [
            {
                source: "/api/:path*",
                destination: "http://localhost:8080/api/:path*"
            }
        ];
    }
};

export default nextConfig;
