/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route("/", "game-board/index.tsx", () => {
        route("win", "game-board/win.tsx");
        route("lose", "game-board/lose.tsx");
      });
    });
  },
};
