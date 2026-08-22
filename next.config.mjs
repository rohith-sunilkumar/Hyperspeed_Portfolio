/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber', '@gsap/react', 'gsap'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
