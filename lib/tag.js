const db = require('./db');
const template = require('./template.js');
const login = require('./login.js');



exports.tag = function (request, response, next) {
  if (login.authIsOwner(request, response) === false) {
    response.end('login required');
    return false;
  }
  const conn = db.conn();
  conn.query(`
  select 
    a.parent_tag_id
    ,b.parent_tag_name
    ,firestoreid
    ,product_title
    ,ctr
    ,rn
    ,coverimageurl
  from tag_product_rel a
      ,parent_tag b
  where 1=1
  and a.parent_tag_id = b.parent_tag_id
  and a.parent_tag_id = ?
  order by rn
  `, [request.params.tagID], (err2, products) => {
    if (err2) {
      next(err2);
    }
    else if (products[0]) {
      const title = products[0].parent_tag_name;
      const list = template.list(request.list);
      const html = template.html(title, list,
        `<h2>${title}</h2>
        ${template.productlist(products)}
          `
        , ``
        , login.authStatusUI(request, response)
      );
      // response.writeHead(202);
      response.send(html);
    } else {
      response.status(404).send('sorry. the tag has no products');
    }
  });
};

