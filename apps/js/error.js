module.exports = function(res, error) {
    res.writeHead(404, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    let html = `
    <!--A Design by W3layouts
    Author: W3layout
    Author URL: http://w3layouts.com
    License: Creative Commons Attribution 3.0 Unported
    License URL: http://creativecommons.org/licenses/by/3.0/
    -->
    <!DOCTYPE HTML>
    <html>
    
    <head>
        <title>Đăng nhập</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="Shape" />
        <link href="./css/bootstrap.min.css" rel='stylesheet' type='text/css' />
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <!-- Custom Theme files -->
        <link href="./css/style.css" rel='stylesheet' type='text/css' />
        <link href="./css/component.css" rel='stylesheet' type='text/css' />
        <!-- Custom Theme files -->
        <!--webfont-->
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Lemonada" rel="stylesheet">
        <link href="./css/magnific-popup.css" rel="stylesheet" type="text/css">
    
    
    </head>
    
    <body>
        <div class="header">
            <div class="container">
                <div class="header-top">
                    <div class="logo">
                        <a href="./index.html">
                            <img src="./images/logo.png" alt="" />
                        </a>
                    </div>
                    <div class="header_right">
                            <a id="btn_login" href="./login.html">Đăng nhập</a>
                            <a id="name_user" href="#" style="display: none"></a>
                            <a id="btn_logout" href="#" style="display: none">Đăng xuất</a>
                        <div class="clearfix"></div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="content_box">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="menu_box">
                                <h3 class="menu_head">Menu</h3>
                                <ul class="nav">
                                    <li>
                                        <a href="./index.html">Trang chủ</a>
                                    </li>
                                    <li>
                                        <a href="./apparel.html">Cửa hàng</a>
                                    </li>
                                    <li>
                                        <a href="./contact.html">Liên hệ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="dreamcrub">
                                <ul class="breadcrumbs">
                                    <li class="home">
                                        <a href="./index.html" title="Trở về trang chủ">Trang chủ</a>&nbsp;
                                        <span>&gt;</span>
                                    </li>
                                    <li class="home">&nbsp; &nbsp;Lỗi
                                        <span>&gt;</span>&nbsp;
                                    </li>
                                    <li class="women">
                                        ${error}
                                    </li>
                                </ul>
                                <ul class="previous">
                                    <li>
                                        <a href="./index.html">Trở về trang chủ</a>
                                    </li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
                            <div class="page-not-found">
                                <h1>404</h1>
                                <h2>${error}</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="brands">
                
            </div>
        </div>
        <div class="container">
            
        </div>
        
    </body>
    <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
    <script src="./js/jquery.min.js"></script>
    <script src="./js/login.js"></script>
    <script src="./js/account.js"></script>
    <script src="./js/jquery.easydropdown.js"></script>
    <!-- Add fancyBox main JS and CSS files -->
    <script src="./js/jquery.magnific-popup.js" type="text/javascript"></script>
    
    <script>
        $(document).ready(function () {
            $('.popup-with-zoom-anim').magnificPopup({
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: true,
                preloader: false,
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-zoom-in'
            });
        });
    </script>
    
    </html>
`
    res.end(html);
}