export const trending = (req, res) => {
  let videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
  ];

  return res.render("home", { pageTitle: "Home", videos });
};
export const join = (req, res) => {
  return res.send("Join");
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
