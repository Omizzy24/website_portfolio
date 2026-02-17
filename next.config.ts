import { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.omaralshammary.com",
				port: "",
				pathname: "/**",
				search: ""
			}
		]
	}
};

export default nextConfig;