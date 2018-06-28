function getData() {
    let xhttp = new XMLHttpRequest();
    let query = 'http://localhost:3001/LaySanPham';
    xhttp.open('GET', query, false);
    xhttp.send();
    var listProducts = xhttp.responseXML.getElementsByTagName('Beer');
    var length = listProducts.length;
    for (let i = 0; i < length; i++) {
        if (listProducts[i].getAttribute('Tam_ngung') == '') {
            listProducts[i].parentNode.removeChild(listProducts[i]);
            length--;
        }
    }
    return listProducts;
}

function setListProductsForNewProduct(listProducts) {
    if ($('#newProducts').length == 0)
        return;
    let length = listProducts.length;
    let html = '';
    let code, name, exportPrice, status;
    for (i = 0; i < 9; i++) {
        random = Math.floor((Math.random() * (length - 1)) + 0);
        code = listProducts[random].getAttribute('Ma_so');
        name = listProducts[random].getAttribute('Ten');
        exportPrice = listProducts[random].getAttribute('Don_gia_Ban');

        if (i % 3 === 0)
            html += `<div class="content_grid">`;

        html += `<div class="col_1_of_3 span_1_of_3 simpleCart_shelfItem">
                    <a href="/single.html?Ma_so=${code}">
                        <div class="inner_content">
                            <div class="product_image">
                                <img src="images/${code}.jpg" class="img-responsive" alt="" />
                                <a href="" class="button item_add item_1"> Mua </a>
                                <div class="product_container">
                                    <div class="cart-left">
                                        <p class="title">${name}</p>
                                    </div>
                                    <div class="amount item_price special-price">
                                        <span id="product-price-384150411" class="price">${formatNumber(exportPrice)} đ</span>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>`

        if (i === 2 || i === 5 || i === 8)
            html += `</div>`;
    }

    $('#newProducts').html(html);
}

function setListProductsForBuy(listProducts) {
    if ($("#buyMuchProducts").length == 0)
        return;
    let length = listProducts.length;
    let count = 0;
    let html = '<ul id="flexiselDemo3">';
    let code, name, exportPrice;

    for (i = 0; i < length; i++) {
        code = listProducts[i].getAttribute('Ma_so');
        name = listProducts[i].getAttribute('Ten');
        exportPrice = listProducts[i].getAttribute('Don_gia_Ban');

        if (name.length < 35) {
            html += `<li>
                            <a href="/single.html?Ma_so=${code}">
                                <img src="images/${code}.jpg" class="img-responsive"  width="270px" height="324px"/>
                                <div class="grid-flex">
                                    <div href="#">${name}</div>
                                    <p>${formatNumber(exportPrice)} đ</p>
                                </div>
                            </a>
                        </li>`
            count++;
        }

        if (count === 10)
            break;
    }
    html += '</ul>';
    $("#buyMuchProducts").html(html);
}

function setListProductsForShop(listProducts, numberProductsOfAPage) {
    if ($("#listProductsForShop").length === 0)
        return;
    let length = listProducts.length;
    let html = '<ul>';
    let code, name, exportPrice, category;

    for (i = 0; i < numberProductsOfAPage; i++) {
        code = listProducts[i].getAttribute('Ma_so');
        name = listProducts[i].getAttribute('Ten');
        exportPrice = listProducts[i].getAttribute('Don_gia_Ban');

        html += `<li class="simpleCart_shelfItem">
            <a class="cbp-vm-image" href="/single.html?Ma_so=${code}">
                <div class="inner_content clearfix">
                    <div class="product_image">
                        <img src="images/${code}.jpg" class="img-responsive" alt="" />
                        <div class="product_container_shop">
                            <div class="cart-left">
                                <p class="title">${name}</p>
                            </div>
                            <div class="mount item_price price">${formatNumber(exportPrice)} đ</div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </a>
        </li>`
    }
    html += '</ul>';
    $("#listProductsForShop").html(html);
}

function setListProductsbyCategory(listProducts, categoryQuery) {
    if ($("#listProductsForShop").length === 0)
        return;
    let length = listProducts.length;
    let html = '<ul>';
    let code, name, exportPrice, category;

    let nameOfCategory = parseQuery(categoryQuery);

    for (i = 0; i < length; i++) {
        category = listProducts[i].getElementsByTagName('LoaiBeer')[0].getAttribute('Ma_so');

        if (category == nameOfCategory) {
            code = listProducts[i].getAttribute('Ma_so');
            name = listProducts[i].getAttribute('Ten');
            exportPrice = listProducts[i].getAttribute('Don_gia_Ban');
            html += `<li class="simpleCart_shelfItem">
            <a class="cbp-vm-image" href="/single.html?Ma_so=${code}">
                <div class="inner_content clearfix">
                    <div class="product_image">
                        <img src="images/${code}.jpg" class="img-responsive" alt="" />
                        <div class="product_container_shop">
                            <div class="cart-left">
                                <p class="title">${name}</p>
                            </div>
                            <div class="mount item_price price">${formatNumber(exportPrice)} đ</div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </a>
        </li>`
        }
    }
    html += '</ul>';
    $("#listProductsForShop").html(html);
}

function formatNumber(number) {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function parseQuery(params) {
    let index = params.lastIndexOf('=');
    return params.slice(index + 1);
}

function parseCode(params) {
    let index = params.lastIndexOf('_');
    return params.slice(index + 1);
}

//single
function setDetailProduct(listProducts, codeQuery) {
    if ($('#detailProduct').length == 0)
        return;
    let length = listProducts.length;
    let html = '';
    let code, name, exportPrice;

    let codeProductChoose = parseQuery(codeQuery);
    for (i = 0; i < length; i++) {
        code = listProducts[i].getAttribute('Ma_so');

        if (code === codeProductChoose) {
            name = listProducts[i].getAttribute('Ten');
            exportPrice = listProducts[i].getAttribute('Don_gia_Ban');

            html += `<div class="singel_right">
            <div class="labout span_1_of_a1">
                <div class="flexslider">
                    <ul class="slides">
                        <li data-thumb="/images/${code}.jpg">
                            <img src="/images/${code}.jpg" />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cont1 span_2_of_a1 simpleCart_shelfItem">
                <h1>${name}</h1>
                <ul class="rating">
                    <li>
                        <a class="product-rate" href="#">
                            <label> </label>
                        </a>
                        <span> </span>
                    </li>
                    <li>
                        <a href="#">1 Đánh Giá(s) Thêm Đánh Giá</a>
                    </li>
                    <div class="clearfix"></div>
                </ul>
                <div class="price_single">
                    <span class="amount item_price actual">${formatNumber(exportPrice)} đ</span>
                </div>

                <ul class="product-qty">
                    <span>Số lượng:</span>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                </ul>
                <div class="btn_form button item_add item_1">
                    <form id="Buy">
                        <input type="submit" value="Chọn mua" title="" />
                    </form>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>`
        }
    }

    $('#detailProduct').html(html);
}

function setProductSameCategory(listProducts, codeQuery) {
    if ($("#sameCategoryListProducts").length === 0)
        return;
    let length = listProducts.length;
    let code, name, exportPrice, category;

    let codeProductChoose = parseQuery(codeQuery);
    let nameOfCategory = listProducts[parseCode(codeProductChoose) - 1].getElementsByTagName('LoaiBeer')[0].getAttribute('Ma_so');
    html = `<ul id="flexiselDemo3">`;
    for (i = 0; i < length; i++) {
        if (i === parseCode(codeProductChoose) - 1)
            continue;
        else {
            category = listProducts[i].getElementsByTagName('LoaiBeer')[0].getAttribute('Ma_so');
            if (category == nameOfCategory) {
                code = listProducts[i].getAttribute('Ma_so');
                name = listProducts[i].getAttribute('Ten');
                exportPrice = listProducts[i].getAttribute('Don_gia_Ban');

                if (name.length < 40) {
                    html += `<li>
                        <a href="/single.html?Ma_so=${code}">
                        <img src="images/${code}.jpg" class="img-responsive"  width="270px" height="324px"/>
                        <div class="grid-flex">
                            <p>${name}</p>
                            <p>${formatNumber(exportPrice)} đ</p>
                        </div>
                    </a>`
                }  
            }
        }
    }
    html += `</ul>`
    $("#sameCategoryListProducts").html(html);
}