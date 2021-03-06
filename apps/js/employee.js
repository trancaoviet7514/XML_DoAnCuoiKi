function getData() {
    let xhttp = new XMLHttpRequest();
    let query = 'http://localhost:3001/LaySanPham';
    xhttp.open('GET', query, false);
    xhttp.send();
    let listProducts = xhttp.responseXML.getElementsByTagName('Beer');
    return listProducts;
}

function setListProducts(listProducts) {
    if ($('#listProducts').length == 0) {
        return;
    }
    var html = `<div class='row'>`;
    for (i = 0; i < listProducts.length; i++) {
        var importPrice = parseInt(listProducts[i].getAttribute('Don_gia_Ban'), 10);
        var name = listProducts[i].getAttribute('Ten');
        var code = listProducts[i].getAttribute('Ma_so');
        var exportPrice = listProducts[i].getAttribute('Don_gia_Ban');
        var cost = parseInt(exportPrice, 10) + 10000;
        if (i % 4 === 0 && i >= 4) {
            html += `</div><div class='row'>`;
        }
        
html += `<div class="col-md-3 col-sm-6">
            <div class="single-shop-product">
                <div class="inner_content_product">
                    <div class="product_image">
                        <img src="../images/${code}.jpg">
                        <div class="product_image">
                            <div class="cart-left">
                                <p class="title">${name}</p>
                            </div>
                        </div>
                    </div>
                    <div class="product-option-shop">
                            
                            <a class="prime">${formatNumber(exportPrice)} VNĐ</a><br>
                            <div>
                                <input type="text" class="form-control"  placeholder="Số lượng" style="width: 50%">
                                <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Nhập</a>
                                
                            </div>
                            
                    </div>                   
                </div>
            </div>
        </div>`;
    }
    html+='</div>'
    $('#listProducts').html(html);
}

function formatNumber(number) {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}