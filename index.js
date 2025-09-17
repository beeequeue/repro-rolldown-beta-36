import { createDevMiddleware, renderPage } from "vike/server"

const arr = []

if (process.env.NODE_ENV === "development") {
  const { devMiddleware } = await createDevMiddleware({
    root: process.cwd(),
    viteConfig: {
      server: { hmr: { port: hmrPort } },
    },
  })
  arr.push(devMiddleware)
} else {
  arr.push(await renderPage({
    headersOriginal: event.req.headers,
    urlOriginal: event.req.url,
    token: event.context.token,
    user: event.context.user,
  }))
}
