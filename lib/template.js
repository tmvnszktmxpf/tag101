
const template = {
  html: function (title, list, body, control, authStatusUI = `<a href="/login">login</a> | <a href="/login/register">register</a>`) {
    return `
      <!doctype html>
      <html>
      <head>
        <title>TAG101 - ${title}</title>
        <meta charset="utf-8">
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        <link rel="stylesheet" type="text/css" href="https://tag101.shop/styles/style.css"></link>
        <script src="https://tag101.shop/js/hello.js""></script>
      </head>
      <body>
        ${authStatusUI}
        ${list}
        ${control}
        ${body}
      </body>
      </html>
      `;
  },
  list: function (tags) {
    var list = `
      <div class="container">
      <h1>TAG 101</h1>
    `;
    tags.forEach(tag => {
      list += `
        <a href="/tag/${tag.parent_tag_id}"><div class="button button-4">${tag.parent_tag_name}</div></a>
      `;
    });
    list += `</div>`;
    return list;




  },
  productlist: function (products) {
    var list = `<div class="cards">`;
    products.forEach(product => {
      list += `
        <div class="card">
        <img class="card__image" src="${product.coverimageurl}" alt="wave" />
        <div class="card-title">
          <a href="javascript:void();" class="toggle-info btn">
            <span class="left"></span>
            <span class="right"></span>
          </a>
          <h2>
              ${product.product_title}
              <small>${product.ctr}</small>
          </h2>
        </div>
        <div class="card-flap flap1">
          <div class="card-description">
            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
          </div>
          <div class="card-flap flap2">
            <div class="card-actions">
              <a href="https://class101.net/products/${product.firestoreid}" target='_blank' class="btn">Read more</a>
            </div>
          </div>
        </div>
      </div>
      `;
    });
    list += `</div>`;
    return list;
  }
}

module.exports = template;

