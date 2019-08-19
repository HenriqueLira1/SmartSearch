// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/casadocodigo$1.0.0/src/app/views/home/monster-admin-lite-master/template/home.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/estatico/images/favicon.png\"><title>Monster Admin Template - The Most Complete & Trusted Bootstrap 4 Admin Template</title><link href=\"/estatico/plugins/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\"><link href=\"/estatico/template/css/style.css\" rel=\"stylesheet\"><link href=\"/estatico/template/css/colors/blue.css\" id=\"theme\" rel=\"stylesheet\"><!--[if lt IE 9]>\r\n    <script src=\"https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js\"></script>\r\n    <script src=\"https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js\"></script>\r\n<![endif]--></head><body class=\"fix-header fix-sidebar card-no-border\">");

  component_globals_tag({}, out);

  out.w("<div id=\"main-wrapper\"><header class=\"topbar\"><nav class=\"navbar top-navbar navbar-toggleable-sm navbar-light\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"index.html\"><span><img src=\"/estatico/images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\"></span></a></div><div class=\"navbar-collapse\"><ul class=\"navbar-nav mr-auto mt-md-0 \"><li class=\"nav-item\"> <a class=\"nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark\" href=\"javascript:void(0)\"><i class=\"ti-menu\"></i></a> </li><li class=\"nav-item hidden-sm-down\"><form class=\"app-search p-l-20\"><input type=\"text\" class=\"form-control\" placeholder=\"Search for...\"> <a class=\"srh-btn\"><i class=\"ti-search\"></i></a></form></li></ul><ul class=\"navbar-nav my-lg-0\"><li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle text-muted waves-effect waves-dark\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><img src=\"/estatico/images/users/1.jpg\" alt=\"user\" class=\"profile-pic m-r-5\">Markarn Doe</a></li></ul></div></nav></header><aside class=\"left-sidebar\"><div class=\"scroll-sidebar\"><nav class=\"sidebar-nav\"><ul id=\"sidebarnav\"><li><a href=\"index.html\" class=\"waves-effect\"><i class=\"fa fa-clock-o m-r-10\" aria-hidden=\"true\"></i>Dashboard</a></li><li><a href=\"pages-profile.html\" class=\"waves-effect\"><i class=\"fa fa-user m-r-10\" aria-hidden=\"true\"></i>Profile</a></li><li><a href=\"table-basic.html\" class=\"waves-effect\"><i class=\"fa fa-table m-r-10\" aria-hidden=\"true\"></i>Basic Table</a></li><li><a href=\"icon-fontawesome.html\" class=\"waves-effect\"><i class=\"fa fa-font m-r-10\" aria-hidden=\"true\"></i>Icons</a></li><li><a href=\"map-google.html\" class=\"waves-effect\"><i class=\"fa fa-globe m-r-10\" aria-hidden=\"true\"></i>Google Map</a></li><li><a href=\"pages-blank.html\" class=\"waves-effect\"><i class=\"fa fa-columns m-r-10\" aria-hidden=\"true\"></i>Blank Page</a></li><li><a href=\"pages-error-404.html\" class=\"waves-effect\"><i class=\"fa fa-info-circle m-r-10\" aria-hidden=\"true\"></i>Error 404</a></li></ul><div class=\"text-center m-t-30\"><a href=\"https://wrappixel.com/templates/monsteradmin/\" class=\"btn btn-danger\"> Upgrade to Pro</a></div></nav></div></aside><div class=\"page-wrapper\"><div class=\"container-fluid\"><div class=\"row page-titles\"><div class=\"col-md-6 col-8 align-self-center\"><h3 class=\"text-themecolor m-b-0 m-t-0\">Dashboard</h3><ol class=\"breadcrumb\"><li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Home</a></li><li class=\"breadcrumb-item active\">Dashboard</li></ol></div><div class=\"col-md-6 col-4 align-self-center\"><a href=\"https://wrappixel.com/templates/monsteradmin/\" class=\"btn pull-right hidden-sm-down btn-success\"> Upgrade to Pro</a></div></div><div class=\"row\"><div class=\"col-sm-6\"><div class=\"card\"><div class=\"card-block\"><h4 class=\"card-title\">Daily Sales</h4><div class=\"text-right\"><h2 class=\"font-light m-b-0\"><i class=\"ti-arrow-up text-success\"></i> $120</h2><span class=\"text-muted\">Todays Income</span></div><span class=\"text-success\">80%</span><div class=\"progress\"><div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 80%; height: 6px;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div></div></div></div></div><div class=\"col-sm-6\"><div class=\"card\"><div class=\"card-block\"><h4 class=\"card-title\">Weekly Sales</h4><div class=\"text-right\"><h2 class=\"font-light m-b-0\"><i class=\"ti-arrow-up text-info\"></i> $5,000</h2><span class=\"text-muted\">Todays Income</span></div><span class=\"text-info\">30%</span><div class=\"progress\"><div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 30%; height: 6px;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div></div></div></div></div></div><div class=\"row\"><div class=\"col-sm-12\"><div class=\"card\"><div class=\"card-block\"><h4 class=\"card-title\">Revenue Statistics</h4><div class=\"flot-chart\"><div class=\"flot-chart-content\" id=\"flot-line-chart\"></div></div></div></div></div></div><div class=\"row\"><div class=\"col-sm-12\"><div class=\"card\"><div class=\"card-block\"><select class=\"custom-select pull-right\"><option selected>January</option><option value=\"1\">February</option><option value=\"2\">March</option><option value=\"3\">April</option></select><h4 class=\"card-title\">Projects of the Month</h4><div class=\"table-responsive m-t-40\"><table class=\"table stylish-table\"><thead><tr><th colspan=\"2\">Assigned</th><th>Name</th><th>Budget</th></tr></thead><tbody><tr><td style=\"width:50px;\"><span class=\"round\">S</span></td><td><h6>Sunil Joshi</h6><small class=\"text-muted\">Web Designer</small></td><td>Elite Admin</td><td>$3.9K</td></tr><tr class=\"active\"><td><span class=\"round\"><img src=\"/estatico/images/users/2.jpg\" alt=\"user\" width=\"50\"></span></td><td><h6>Andrew</h6><small class=\"text-muted\">Project Manager</small></td><td>Real Homes</td><td>$23.9K</td></tr><tr><td><span class=\"round round-success\">B</span></td><td><h6>Bhavesh patel</h6><small class=\"text-muted\">Developer</small></td><td>MedicalPro Theme</td><td>$12.9K</td></tr><tr><td><span class=\"round round-primary\">N</span></td><td><h6>Nirav Joshi</h6><small class=\"text-muted\">Frontend Eng</small></td><td>Elite Admin</td><td>$10.9K</td></tr><tr><td><span class=\"round round-warning\">M</span></td><td><h6>Micheal Doe</h6><small class=\"text-muted\">Content Writer</small></td><td>Helping Hands</td><td>$12.9K</td></tr><tr><td><span class=\"round round-danger\">N</span></td><td><h6>Johnathan</h6><small class=\"text-muted\">Graphic</small></td><td>Digital Agency</td><td>$2.6K</td></tr></tbody></table></div></div></div></div></div><div class=\"row\"><div class=\"col-lg-4\"><div class=\"card\"><img class=\"card-img-top img-responsive\" src=\"/estatico/images/big/img1.jpg\" alt=\"Card\"><div class=\"card-block\"><ul class=\"list-inline font-14\"><li class=\"p-l-0\">20 May 2016</li><li><a href=\"javascript:void(0)\" class=\"link\">3 Comment</a></li></ul><h3 class=\"font-normal\">Featured Hydroflora Pots Garden &amp; Outdoors</h3></div></div></div><div class=\"col-lg-4\"><div class=\"card\"><img class=\"card-img-top img-responsive\" src=\"/estatico/images/big/img2.jpg\" alt=\"Card\"><div class=\"card-block\"><ul class=\"list-inline font-14\"><li class=\"p-l-0\">20 May 2016</li><li><a href=\"javascript:void(0)\" class=\"link\">3 Comment</a></li></ul><h3 class=\"font-normal\">Featured Hydroflora Pots Garden &amp; Outdoors</h3></div></div></div><div class=\"col-lg-4\"><div class=\"card\"><img class=\"card-img-top img-responsive\" src=\"/estatico/images/big/img4.jpg\" alt=\"Card\"><div class=\"card-block\"><ul class=\"list-inline font-14\"><li class=\"p-l-0\">20 May 2016</li><li><a href=\"javascript:void(0)\" class=\"link\">3 Comment</a></li></ul><h3 class=\"font-normal\">Featured Hydroflora Pots Garden &amp; Outdoors</h3></div></div></div></div></div><footer class=\"footer text-center\">© 2017 Monster Admin by wrappixel.com</footer></div></div><script src=\"/estatico/plugins/jquery/jquery.min.js\"></script><script src=\"/estatico/plugins/bootstrap/js/tether.min.js\"></script><script src=\"/estatico/plugins/bootstrap/js/bootstrap.min.js\"></script><script src=\"/estatico/template/js/jquery.slimscroll.js\"></script><script src=\"/estatico/template/js/waves.js\"></script><script src=\"/estatico/template/js/sidebarmenu.js\"></script><script src=\"/estatico/plugins/sticky-kit-master/dist/sticky-kit.min.js\"></script><script src=\"/estatico/template/js/custom.min.js\"></script><script src=\"/estatico/plugins/flot/jquery.flot.js\"></script><script src=\"/estatico/plugins/flot.tooltip/js/jquery.flot.tooltip.min.js\"></script><script src=\"/estatico/template/js/flot-data.js\"></script><script src=\"/estatico/plugins/styleswitcher/jQuery.style.switcher.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "210");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/casadocodigo$1.0.0/src/app/views/home/monster-admin-lite-master/template/home.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
