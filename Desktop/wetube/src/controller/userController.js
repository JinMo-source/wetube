import User from "../models/User";
import bcrypt from "bcrypt";

// Join
export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
  console.log(req.body);
  const { name, username, email, password, password2, location } = req.body;
  if (password != password2) {
    return res.state(400).render("/join", {
      errorMassage: "Password confirmation does not match.",
    });
  }
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.render("join", {
      pageTitle,
      errorMessage: "This username/email is already taken.",
    });
  }

  await User.create({ name, username, email, password, location });

  return res.redirect("/");
};

// login
export const getLogin = (req, res) => {
  return res.render("login", {
    pageTitle: "Login",
    githubLogin: process.env.CLIENT_ID,
  });
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const exists = await User.exists({ username });
  const user = await User.findOne({ username });
  if (!exists) {
    if (!user) {
      return res.state(400).render("login", {
        pageTitle: "Login",
        errorMessage: "An account with this username does not exists.",
      });
    }
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.state(400).render("login", {
      pageTitle: "Login",
      errorMessage: "Wrong password",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;

  return res.redirect("/");
};
export const startGithubLogin = (req, res) => {
  return res.send("h1");
};
export const finishGithubLogin = (req, res) => {
  return res.send("h1");
};
// logout
export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
export const user = (req, res) => {
  return res.send("user");
};

export const userEdit = (req, res) => {
  return res.send("userEdit");
};

export const profileDelete = (req, res) => {
  return res.send("profileDelete");
};
