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
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = async (req, res) => {
  const { title, description, createDate } = req.body;
  try {
    console.log(Video);
    await Video.create({
      title,
      description,
    });
    return res.redirect("/");
  } catch (err) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
export const videoDelete = (req, res) => {
  return res.send("videoDelete");
};
