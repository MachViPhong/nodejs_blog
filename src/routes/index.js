const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  //   app.get("/news", (req, res) => {
  //     // res.send('Hello World!')
  //     console.log("q: ", req.query.q);
  //     res.render("news");
  //   }); thay bằng
  app.use("/news", newsRouter);

  //site: HOME, SEARCH, CONTACT
  // app.get("/", (req, res) => {
  //   // res.send('Hello World!')
  //   res.render("home");
  // });

  //   app.get("/search", (req, res) => {
  //     // console.log('query:', req.query.q);
  //     // res.send('Hello World!')
  //     res.render("search");
  //   });

  //   app.post("/search", (req, res) => {
  //     console.log("req.body:", req.body);
  //     res.send(" ");
  //   });
  app.use('/', siteRouter)
}

module.exports = route;
