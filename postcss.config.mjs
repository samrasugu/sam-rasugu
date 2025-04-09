const config = {
  plugins: [
    "@tailwindcss/postcss",
    "postcss-import", // for @ imports in css files
    "autoprefixer", // for autoprefixing css -- better browser compatibility
    ...(process.env.NODE_ENV === "production" ? ["cssnano"] : []), // minify only in production
  ],
};

export default config;
