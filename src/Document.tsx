import serialize from "serialize-javascript"

export default ({ children, config, initialProps, queryState }) => {
  return (
    <html>
      <head>
        <title>SSR with React Router</title>
      </head>
      <body>
        {/* It has to be on one line or it will trigger hydration error */}
        <div id="root">{children}</div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__INITIAL_DATA__ = ${initialProps}; 
              window.__CONFIG__ = ${serialize(config)};
              window.__REACT_QUERY_STATE__  = ${serialize(queryState)};
            `,
          }}
        ></script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  )
}
