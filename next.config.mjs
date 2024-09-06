/** @type {import('next').NextConfig} */

const nextConfig = {
	// Enable Partial Prerendering, i.e. PPR
	experimental: {
		ppr: 'incremental',
	},
};

export default nextConfig;
