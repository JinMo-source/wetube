import mongoose from "mongoose";
import User from "../models/User";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
  console.log(req.body);
  const { name, username, email, password } = req.body;
  const user = User.create({ name, username, email, password });

  return res.end();
};

export const login = (req, res) => {
  return res.send("Login");
};
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
