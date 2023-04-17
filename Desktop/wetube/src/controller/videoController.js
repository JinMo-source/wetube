import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
  } catch (err) {
    res.render("/");
  }
};

export const search = (req, res) => {
  return res.send("Search");
};
export const see = (req, res) => {
  {
    return res.send("see");
  }
};
/CREATE (CRUD)/;
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = async (req, res) => {
  const { title, description, createDate } = req.body;
  try {
    await Video.create({
      title,
      description,
    });
    console.log(Video);
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
/READ (CURD)/;
export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  return res.render("watch", { pageTitle: video.title, video });
};

/UPDATE(CRUD)/;
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  console.log(video);
  return res.render("edit", { pageTitle: "EDIT", video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  // console.log(req.body)
};
/DELETE (CRUD)/;
export const videoDelete = (req, res) => {
  return res.send("videoDelete");
};
