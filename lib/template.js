
const template = {
  html: function (title, list, body, control, authStatusUI = `<a href="/login">login</a> | <a href="/login/register">register</a>`) {
    return `
      <!doctype html>
      <html>
      <head>
        <title>WEB3234 - ${title}</title>
        <meta charset="utf-8">
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        <link rel="stylesheet" type="text/css" href="https://parenttag101.ml/styles/style.css"></link>
        <script src="https://parenttag101.ml/js/hello.js""></script>
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
    var list = `<div class="cards">`;
    products.forEach(product => {
      list += `
        <div class="card">
        <div class="card__image-holder">
          <img class="card__image" src="${product.coverimageurl}" alt="wave" />
        </div>
        <div class="card-title">
          <a href="#" class="toggle-info btn">
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
              <a href="https://class101.net/products/${product.firestoreid}" target="_self" class="btn">Read more</a>
            </div>
          </div>
        </div>
      </div>
      `;
    });
    list += `</div>`;
    return list;


    return `
    






    
    <li><a href="https://class101.net/products/${product.firestoreid}" target="_blank">${product.product_title}</a></li>



   
  


    <div class="cards">

    <div class="card">
      <div class="card__image-holder">
        <img class="card__image" src="https://source.unsplash.com/300x225/?wave" alt="wave" />
      </div>
      <div class="card-title">
        <a href="#" class="toggle-info btn">
          <span class="left"></span>
          <span class="right"></span>
        </a>
        <h2>
            Card title
            <small>Image from unsplash.com</small>
        </h2>
      </div>
      <div class="card-flap flap1">
        <div class="card-description">
          This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
        </div>
        <div class="card-flap flap2">
          <div class="card-actions">
            <a href="#" class="btn">Read more</a>
          </div>
        </div>
      </div>
    </div>
  
    <div class="card">
      <div class="card__image-holder">
        <img class="card__image" src="https://source.unsplash.com/300x225/?beach" alt="beach" />
      </div>
      <div class="card-title">
        <a href="#" class="toggle-info btn">
          <span class="left"></span>
          <span class="right"></span>
        </a>
        <h2>
            Card title
            <small>Image from unsplash.com</small>
        </h2>
      </div>
      <div class="card-flap flap1">
        <div class="card-description">
          This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
        </div>
        <div class="card-flap flap2">
          <div class="card-actions">
            <a href="#" class="btn">Read more</a>
          </div>
        </div>
      </div>
    </div>
  
    <div class="card">
      <div class="card__image-holder">
        <img class="card__image" src="https://source.unsplash.com/300x225/?mountain" alt="mountain" />
      </div>
      <div class="card-title">
        <a href="#" class="toggle-info btn">
          <span class="left"></span>
          <span class="right"></span>
        </a>
        <h2>
            Card title
            <small>Image from unsplash.com</small>
        </h2>
      </div>
      <div class="card-flap flap1">
        <div class="card-description">
          This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
        </div>
        <div class="card-flap flap2">
          <div class="card-actions">
            <a href="#" class="btn">Read more</a>
          </div>
        </div>
      </div>
    </div>
  
    <div class="card">
      <div class="card__image-holder">
        <img class="card__image" src="https://source.unsplash.com/300x225/?field" alt="field" />
      </div>
      <div class="card-title">
        <a href="#" class="toggle-info btn">
          <span class="left"></span>
          <span class="right"></span>
        </a>
        <h2>
            Card title
            <small>Image from unsplash.com</small>
        </h2>
      </div>
      <div class="card-flap flap1">
        <div class="card-description">
          This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
        </div>
        <div class="card-flap flap2">
          <div class="card-actions">
            <a href="#" class="btn">Read more</a>
          </div>
        </div>
      </div>
    </div>
  
    <div class="card">
      <div class="card__image-holder">
        <img class="card__image" src="https://source.unsplash.com/300x225/?water" alt="water" />
      </div>
      <div class="card-title">
        <a href="#" class="toggle-info btn">
          <span class="left"></span>
          <span class="right"></span>
        </a>
        <h2>
            Card title
            <small>Image from unsplash.com</small>
        </h2>
      </div>
      <div class="card-flap flap1">
        <div class="card-description">
          This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
        </div>
        <div class="card-flap flap2">
          <div class="card-actions">
            <a href="#" class="btn">Read more</a>
          </div>
        </div>
      </div>
    </div>
  
    <div class="card">
      <div class="card__image-holder">
        <img class="card__image" src="https://source.unsplash.com/300x225/?river" alt="river" />
      </div>
      <div class="card-title">
        <a href="#" class="toggle-info btn">
          <span class="left"></span>
          <span class="right"></span>
        </a>
        <h2>
            Card title
            <small>Image from unsplash.com</small>
        </h2>
      </div>
      <div class="card-flap flap1">
        <div class="card-description">
          This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
        </div>
        <div class="card-flap flap2">
          <div class="card-actions">
            <a href="#" class="btn">Read more</a>
          </div>
        </div>
      </div>
    </div>
  
    <div class="card">
      <div class="card__image-holder">
        <img class="card__image" src="https://source.unsplash.com/300x225/?kite" alt="kite" />
      </div>
      <div class="card-title">
        <a href="#" class="toggle-info btn">
          <span class="left"></span>
          <span class="right"></span>
        </a>
        <h2>
            Card title
            <small>Image from unsplash.com</small>
        </h2>
      </div>
      <div class="card-flap flap1">
        <div class="card-description">
          This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
        </div>
        <div class="card-flap flap2">
          <div class="card-actions">
            <a href="#" class="btn">Read more</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card">
      <div class="card__image-holder">
        <img class="card__image" src="https://source.unsplash.com/300x225/?underwater" alt="underwater" />
      </div>
      <div class="card-title">
        <a href="#" class="toggle-info btn">
          <span class="left"></span>
          <span class="right"></span>
        </a>
        <h2>
            Card title
            <small>Image from unsplash.com</small>
        </h2>
      </div>
      <div class="card-flap flap1">
        <div class="card-description">
          This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
        </div>
        <div class="card-flap flap2">
          <div class="card-actions">
            <a href="#" class="btn">Read more</a>
          </div>
        </div>
      </div>
    </div>
  
    <div class="card">
      <div class="card__image-holder">
        <img class="card__image" src="https://source.unsplash.com/300x225/?desert" alt="desert" />
      </div>
      <div class="card-title">
        <a href="#" class="toggle-info btn">
          <span class="left"></span>
          <span class="right"></span>
        </a>
        <h2>
            Card title
            <small>Image from unsplash.com</small>
        </h2>
      </div>
      <div class="card-flap flap1">
        <div class="card-description">
          This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
        </div>
        <div class="card-flap flap2">
          <div class="card-actions">
            <a href="#" class="btn">Read more</a>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  
  
  
  
    

























    `;






  }
}

module.exports = template;

