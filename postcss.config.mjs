const config = {
  plugins: [
    "postcss-import", // for @ imports in css files
    "@tailwindcss/postcss",
    "autoprefixer", // for autoprefixing css -- better browser compatibility
    ...(process.env.NODE_ENV === "production" ? ["cssnano"] : []), // minify only in production
  ],
};

export default config;
