
const template = {
  html: function (title, list, body, control, authStatusUI = `<a href="/login">login</a> | <a href="/login/register">register</a>`) {
    return `
      <!doctype html>
      <html>
      <head>
        <title>WEB3234 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        ${authStatusUI}
        <h1><a href="/">WEB</a></h1>
        ${list}
        ${control}
        ${body}
      </body>
      </html>
      `;
  },
  list: function (tags) {
    var list = '<ul>';
    tags.forEach(tag => {
      list = list + `<li><a href="/tag/${tag.parent_tag_id}">${tag.parent_tag_name}</a></li>`;
    });
    var list = list + '</ul>';
    return list;
  },
  productlist: function (products) {
    var list = '<ul>';
    products.forEach(product => {
      list += `<li><a href="https://class101.net/products/${product.firestoreid}" target="_blank">${product.product_title}</a></li>`
    });
    list += '</ul>';
    return list;
  },
  authorTable: function (authors) {
    var tag = '<table>';
    authors.forEach(author => {
      tag += '<tr>';
      tag += `
            <td>${author.name}</td>
            <td>${author.profile}</td>
            <td><a href="/author/update/${author.id}">update</a></td>
            <td>
            <form action="/author/delete_process" method = "post" >
              <input type="hidden" name = id value="${author.id}">
              <input type="submit" value="delete">
            </form>
            </td>`;
      tag += '</tr>';
    });
    tag += `
          <style>
              table{
                  border-collapse:collapse;
              }
              td {
                  border:1px solid black;
              }
          </style>
      `;
    return tag;
  }
}

module.exports = template;

