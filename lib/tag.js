const conn = require('./db');
const template = require('./template.js');
const login = require('./login.js');
const crypto = require("crypto");



exports.tag = function (request, response, next) {
  conn.query(`
  select 
    a.parent_tag_id
    ,b.parent_tag_name
    ,firestoreid
    ,product_title
    ,ctr
    ,rn
  from tag_product_rel a
      ,parent_tag b
  where 1=1
  and a.parent_tag_id = b.parent_tag_id
  and a.parent_tag_id = ?
  `, [request.params.tagID], (err2, products) => {
    if (err2) {
      next(err2);
    }
    else if (products[0]) {
      console.log(products);
      const title = products[0].parent_tag_name;
      const description = products[0].parent_tag_name;
      const list = template.list(request.list);
      const html = template.html(title, list,
        `<h2>${title}</h2>${description}
          `
        , `<a href ="/page/create">create</a>
            <a href = "/page/update/${request.params.tagID}">update</a>
            <form action="/page/delete_process" method = "post" >
              <input type="hidden" name = "id" value="${request.params.tagID}">
              <input type="submit" value="delete">
            </form>
          `
        , login.authStatusUI(request, response)
      );
      // response.writeHead(202);
      response.send(html);
    } else {
      response.status(404).send('sorry. the tag has no products');
    }
  });
};

