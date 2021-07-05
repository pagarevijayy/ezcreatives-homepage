"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = emailAPI;

function emailAPI(req, res) {
  res.status(200).json({
    name: "EMAIL"
  });
}