/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	experimental: {
		outputStandalone: true,
	},
	trailingSlash: true,
	compiler: {
		// ssr and displayName are configured by default
		styledComponents: true,
		removeConsole: true
	},
	webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
		const webpackPack = require("webpack");
		config.plugins.push(
			new webpackPack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"window.jQuery": "jquery",
			})
		);

		return config;
	},
	async redirects() {
		return [
			{
				source: "/",
				destination: "/loading",
				permanent: false,
			},
		];
	},
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
			"/loading": { page: "/loading" },
			"/main": { page: "/main" },
			"/contact": { page: "/contact" },
			"/our-brand": { page: "/our-brand" },
			"/projects": { page: "/projects" },
			"/projects/:project:name": { page: "/projects/[project]/[name]/index" },
			"/our-team": { page: "/our-team" },
			"/our-team/:team:name": { page: "/our-team/[team]/[name]/index" }
		};
	},
};

module.exports = nextConfig;
