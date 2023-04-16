export const search = (req, res) => {
  return res.send("Search");
};
export const see = (req, res) => {
  {
    return res.send("see");
  }
};
export const getEdit = (req, res) => {
  return res.render("edit", { pageTitle: "EDIT" });
};
export const postEdit = (req, res) => {
  console.log(req.body);
  return res.redirect("/");
};
export const videoDelete = (req, res) => {
  return res.send("videoDelete");
};
