import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
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
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'www.primefaces.org' },
      { protocol: 'https', hostname: 'styled-components.com' },
      { protocol: 'https', hostname: 'ngrx.io' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'rxjs.dev' },
      { protocol: 'https', hostname: 'apexcharts.com' },
      { protocol: 'https', hostname: 'react-query.tanstack.com' },
      { protocol: 'https', hostname: 'images.ctfassets.net' },
      { protocol: 'https', hostname: 'www.netlify.com' },
      { protocol: 'https', hostname: 'assets.vercel.com' },
      { protocol: 'https', hostname: 'testing-library.com' },
      { protocol: 'https', hostname: 'www.anthropic.com' },
      { protocol: 'https', hostname: 'www.cursor.so' },
      { protocol: 'https', hostname: 'vuex.vuejs.org' },
      { protocol: 'https', hostname: 'github.githubassets.com' },
      { protocol: 'https', hostname: 'about.gitlab.com' },
      { protocol: 'https', hostname: 'www.docker.com' },
      { protocol: 'https', hostname: 'uxwing.com' },
      { protocol: 'https', hostname: 'karma-runner.github.io' },
      { protocol: 'https', hostname: 'i0.wp.com' },
      { protocol: 'https', hostname: 'devtop.io' },
      { protocol: 'https', hostname: 'cdn.worldvectorlogo.com' },
      { protocol: 'https', hostname: 'images.icon-icons.com' },
      { protocol: 'https', hostname: 'cdn.freebiesupply.com' },
      { protocol: 'https', hostname: 'rxjs.dev' },
      { protocol: 'https', hostname: 'miro.medium.com' },
      { protocol: 'https', hostname: 'plugins.jetbrains.com' },
      { protocol: 'https', hostname: 'images.seeklogo.com' },
      { protocol: 'https', hostname: 'ph-files.imgix.net' },
      { protocol: 'https', hostname: 'uxwing.com' },
      { protocol: 'https', hostname: 'logodix.com' },
      { protocol: 'https', hostname: 'www.npmjs.com' },
      { protocol: 'https', hostname: 'miro.medium.com' },
      { protocol: 'https', hostname: 'images.seeklogo.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'assets.streamlinehq.com' },
      { protocol: 'https', hostname: 'logos.fandom.com' },
      { protocol: 'https', hostname: 'logos-world.net' },
      { protocol: 'https', hostname: 'media.tekpon.com' },
      { protocol: 'https', hostname: 'logo.svgcdn.com' },
      { protocol: 'https', hostname: 'cdn.freebiesupply.com' },
      { protocol: 'https', hostname: 'assets.stickpng.com' },
      { protocol: 'https', hostname: 'pnghdpro.com' },
      { protocol: 'https', hostname: 'registry.npmmirror.com' },
      { protocol: 'https', hostname: 'softat.co.in' },
      { protocol: 'https', hostname: 'lovable.dev' },
      { protocol: 'https', hostname: 'user-images.githubusercontent.com' },
      { protocol: 'https', hostname: 'framerusercontent.com' },
      // Add more domains here if you replace the placeholder logos
    ],
  },
};

export default nextConfig;
