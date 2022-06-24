
const express = require('express')
const app = express()
const port = 80
const template = require('./lib/template.js');
const compression = require('compression');
const conn = require('./lib/db');
const bodyParser = require('body-parser')
const tagRouter = require('./routes/tag');
const login = require('./lib/login.js');
const session = require('express-session')
const FileStore = require('session-file-store')(session);
const flash = require('connect-flash');





app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.get('*', (req, res, next) => {
  conn.query(`select * from parent_tag`, (err, parent_tags) => {
    // console.log(parent_tags);
    req.list = parent_tags;
    next();
  });
});
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: new FileStore({})
}))
app.use(flash());

const passport = require('./lib/passport')(app);



const loginRouter = require('./routes/login')(passport);


app.use('/tag', tagRouter);
app.use('/login', loginRouter);


app.get('/', (req, res) => {
  const title = 'Welcome';
  const description = 'Hello, Node.js';
  const list = template.list(req.list);
  const authStatusUI = login.authStatusUI(req, res);
  const html = template.html(title, list,
    `<h2>${title}</h2>${description}
    <img src= '/images/okr_pc_01.png'>
    `
    , `<a href ="/page/create">create</a>`
    , authStatusUI
  );
  res.writeHead(202);
  res.end(html);
})


app.use((req, res) => {
  res.status(404).send('sorry');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




