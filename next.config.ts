// import type { NextConfig } from "next";
// import createMDX from "@next/mdx";

// const nextConfig: NextConfig = {
//   pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
//   experimental: {
//     mdxRs: true,
//     viewTransition: true,
//   },
// };

// const withMDX = createMDX({});

// export default withMDX(nextConfig);

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // ...
  },
};

export default nextConfig;
