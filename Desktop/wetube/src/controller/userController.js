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
  return res.render("login", { pageTitle: "Login" });
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const exists = await User.exists({ username });
  const user = await User.findOne({ username });
  if (!exists) {
    if (!user) {
      return res.render("login", {
        pageTitle: "Login",
        errorMessage: "An account with this username does not exists.",
      });
    }
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.render("login", {
      pageTitle: "Login",
      errorMessage: "Wrong password",
    });
  }

  return res.redirect("/");
};
// logout
export const logout = (req, res) => {
  return res.send("Logout");
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
