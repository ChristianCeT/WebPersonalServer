const express = require("express");
const UserController = require("../controllers/user");
const multer = require("multer");
const md_auth = require("../middlewares/authenticated");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/avatar");
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const md_upload = multer({ storage: storage });

//const multipart = require("connect-multiparty");
//const md_upload_avatar = multipart({ uploadDir: "./uploads/avatar" });

const api = express.Router();

api.post("/sign-up", UserController.signUp);
api.post("/sign-in", UserController.signIn);
api.get("/users", [md_auth.ensureAuth], UserController.getUsers);
api.get("/users-active", [md_auth.ensureAuth], UserController.getUsersActive);
api.put(
  "/upload-avatar/:id",
  [md_auth.ensureAuth, md_upload.single("avatar")],
  UserController.uploadAvatar
);
api.get("/get-avatar/:avatarName", UserController.getAvatar);
api.put("/update-user/:id", [md_auth.ensureAuth], UserController.updateUser);
api.put(
  "/activate-user/:id",
  [md_auth.ensureAuth],
  UserController.activateUser
);
api.delete("/delete-user/:id", [md_auth.ensureAuth], UserController.deleteUser);
api.post("/sign-up-admin", [md_auth.ensureAuth], UserController.signUpAdmin);

module.exports = api;
