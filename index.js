const { response } = require("express");
const express = require("express");
const app = express();
const fs = require("fs");
const fileUpload = require("express-fileupload");
const PORT = 3000;
const bodyParser = require("body-parser");
const path = require("path");
const { render } = require("ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(express.static("public"));
app.set("view engine", "ejs");

const getData = () => {
  const db = fs.readFileSync("input.json");

  return JSON.parse(db.toString());
};

app.get("/", (req, res) => {
  const data = getData();
  // console.log(data)
  res.render("home", { data });
});

app.get("/admin", (req, res) => {
  res.render("admin", {
    auth: false,
  });
});

app.post("/admin", (req, res) => {
  const __user = req.body;
  const data = getData();
  if (__user.username === "thongnv" && __user.password === "123") {
    res.render("admin", {
      auth: true,
      data,
    });
  } else {
    res.render("admin", {
      auth: false,
    });
  }
});

app.post("/change", (req, res) => {
  fs.writeFileSync("input.json", JSON.stringify(req.body));
  // let image = req.files.background;
  // if (image) {
  //   image.mv(
  //     path.resolve(__dirname, "public/assets/img", "banner.jpg"),
  //     function (err) {
  //       res.json({ status: "thanh cong" });
  //     }
  //   );
  // }
  res.json({ status: "thanh cong", data: JSON.stringify(req.body) });
});

app.listen(PORT || 3000, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
