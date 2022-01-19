module.exports = {
  images: {
    domains: ['coding-challenge-api.aerolab.co'],
  },
    webpack5: false,
    webpack: (config) => {
      config.node = {
        dns: "mock",
        fs: "empty",
        path: true,
        url: false,
      };
      return config;
    },
  };
    