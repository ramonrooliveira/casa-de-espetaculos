module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/historia': { page: '/historia' },
      '/estrutura': { page: '/estrutura' },
      '/pub': { page: '/pub' },
      '/galeria': { page: '/galeria' },
      '/contato': { page: '/contato' },
    }
  },
}