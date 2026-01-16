import fs from "fs";

export const readDB = (path) => {
  return JSON.parse(fs.readFileSync(path, "utf-8"));
};

export const writeDB = (path, data) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};
