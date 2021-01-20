import corsProxy from "cors-anywhere";

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3001;

corsProxy
  .createServer({
    originWhitelist: [],
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, host, () => {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
