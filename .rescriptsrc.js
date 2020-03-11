const baseExtensions = ["mjs", "js", "ts", "tsx", "json", "jsx"];

module.exports = [
  {
    webpack: config => {
      const prevExtensions = config.resolve.extensions;
      const tenantExtensions = baseExtensions
        .map(ext => `.${process.env.REACT_APP_BRAND}.${ext}`)
        .filter(ext => !ext.includes("undefined"));
      config.resolve.extensions = [...tenantExtensions, ...prevExtensions];
      return config;
    }
  }
];
