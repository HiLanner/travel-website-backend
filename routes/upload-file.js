var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'public/' })

router.post('/avatar', upload.single('avatar'), (req, res, next) => {
  // 没有附带文件
  console.log(req.file)
  if (!req.file) {
  res.json({ ok: false });
  return;
}
// 输出文件信息
console.log('====================================================');
console.log('fieldname: ' + req.file.fieldname);
console.log('originalname: ' + req.file.originalname);
console.log('encoding: ' + req.file.encoding);
console.log('mimetype: ' + req.file.mimetype);
console.log('size: ' + (req.file.size / 1024).toFixed(2) + 'KB');
console.log('destination: ' + req.file.destination);
console.log('filename: ' + req.file.filename);
console.log('path: ' + req.file.path);
})
module.exports = router;