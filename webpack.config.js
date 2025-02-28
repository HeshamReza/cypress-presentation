const path = require("path");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,  // ✅ Add this rule for CSS
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
