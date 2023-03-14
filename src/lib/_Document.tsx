export default ({ children, initialProps }) => {
  return (
    <html>
      <head>
        <title>SSR with React Router</title>
      </head>
      <body>
        {/* It has to be on one line or it will trigger hydration error */}
        <div id="root">{children}</div>
        <script
          dangerouslySetInnerHTML={{ __html: `window.__INITIAL_DATA__ = ${initialProps}` }}
        ></script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  )
}
