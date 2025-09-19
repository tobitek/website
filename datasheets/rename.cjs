const fs = require("fs");
const path = require("path");

// Directory containing your files
const directory = "./"; // change this to your folder path

// Regex to match the filenames
const regex = /^Datasheet - ([A-Za-z0-9]+)\((\d+)\)\.pdf$/;

fs.readdirSync(directory).forEach((file) => {
  const match = file.match(regex);

  if (match) {
    const prefix = match[1]; // e.g. BMF1
    const number = match[2]; // e.g. 8015

    const newName = `${prefix}-${number}-datasheet.pdf`;
    const oldPath = path.join(directory, file);
    const newPath = path.join(directory, newName);

    fs.renameSync(oldPath, newPath);

    console.log(`Renamed: ${file} -> ${newName}`);
  }
});

