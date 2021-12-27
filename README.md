This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This demonstrates that the `next-fonts` package can be used in `next.config.js` to preload woff2 files in a `next/head` component.

However, I haven't gotten the explicit css preload to work. Additionally, although the preload request appears to be successful, the following warning is generated

    The resource http://localhost:3001/_next/static/chunks/fonts/montserrat-latin-500-normal-ade7985dfab42940651537039e999ad9.woff2 was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.
