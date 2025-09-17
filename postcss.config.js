module.exports = (ctx) => ({
    plugins: [
        require("autoprefixer"),
        require("cssnano")({
            preset: "default",
        }),
        // Only run PurgeCSS in production
        ...(ctx.env === "production"
            ? [
                  require("@fullhuman/postcss-purgecss").default({
                      content: ["./*.html", "src/**/*.html"],
                      defaultExtractor: (content) =>
                          content.match(/[\w-/:]+(?<!:)/g) || [],
                  }),
              ]
            : []),
    ],
});
