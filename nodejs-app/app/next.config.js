/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'gatomagico.com',
				protocol: 'https',
			},
		],
	},
};

module.exports = nextConfig;