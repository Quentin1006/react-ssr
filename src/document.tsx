export default ({ children }: any) => {
  return (
    <html>
      <head>
        <title>SSR with React Router</title>
      </head>
      <body>
        {/* It has to be on one line or it will trigger hydration error */}
        <div id="root">{children}</div>

        {/* <script src="/bundle.js"></script> */}
      </body>
    </html>
  )
}
