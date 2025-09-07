import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [
      path.join(process.cwd(), "src", "styles"),
      path.join(process.cwd(), "src", "styles", "mixins"),
    ],
    additionalData: `
      @use "_breakpoints.sass" as *;
      @use "_variables.sass" as *;
      @use "_mixins.sass" as *;
    `,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "devtop.io" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "www.primefaces.org" },
      { protocol: "https", hostname: "plugins.jetbrains.com" },
      { protocol: "https", hostname: "images.icon-icons.com" },
      { protocol: "https", hostname: "cdn.worldvectorlogo.com" },
      { protocol: "https", hostname: "cdn.freebiesupply.com" },
      { protocol: "https", hostname: "ngrx.io" },
      { protocol: "https", hostname: "user-images.githubusercontent.com" },
      { protocol: "https", hostname: "rxjs.dev" },
      { protocol: "https", hostname: "logodix.com" },
      { protocol: "https", hostname: "i0.wp.com" },
      { protocol: "https", hostname: "ph-files.imgix.net" },
      { protocol: "https", hostname: "uxwing.com" },
      { protocol: "https", hostname: "miro.medium.com" },
      { protocol: "https", hostname: "cdn4.iconfinder.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "vitejs.dev" },
      { protocol: "https", hostname: "bun.sh" },
      { protocol: "https", hostname: "assets.stickpng.com" },
      { protocol: "https", hostname: "www.netlify.com" },
      { protocol: "https", hostname: "pipedream.com" },
      { protocol: "https", hostname: "assets.streamlinehq.com" },
      { protocol: "https", hostname: "testing-library.com" },
      { protocol: "https", hostname: "logo.svgcdn.com" },
      { protocol: "https", hostname: "github.githubassets.com" },
      { protocol: "https", hostname: "helios-i.mashable.com" },
      { protocol: "https", hostname: "softat.co.in" },
      { protocol: "https", hostname: "lovable.dev" },
      { protocol: "https", hostname: "framerusercontent.com" },
    ],
  },
};

export default nextConfig;
