const express = require("express");
const app = express();
const multer  = require('multer')
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended : false }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
  
  const upload = multer({ storage: storage })

app.get('/', (req, res) =>  {
    res.render('homepage');
});

app.post('/upload', upload.single('file'), (req , res)=> {
    console.log(req.body);
    console.log(req.file);

    res.redirect('/')
})

const port = 5000 ; 
app.listen(port , ()=> {
    console.log("server is listen on port 5000")
})