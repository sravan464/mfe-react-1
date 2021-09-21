const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "sravan-org",
    projectName: "app-react",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, { 
    externals: [ /^@sravan-org\/.+/]
 
    // modify the webpack config however you'd like to by adding to this object
  });
};
