import fs from 'fs'
export default function handler(req, res) {
  const list = [];
  fs.readdirSync("public/work/").forEach(file => {
    const nameNdesc = file.split(".")[0].split("-");
    const name = nameNdesc[0];
    const desc = nameNdesc[1];
    list.push({ file, name, desc });
  });
  const filesize = list.length;
  list.unshift(filesize);
  res.status(200).json(list);
}

