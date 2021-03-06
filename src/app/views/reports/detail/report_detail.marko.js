// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/smartsearch$1.0.0/src/app/views/reports/detail/report_detail.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <!-- Tell the browser to be responsive to screen width -->\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n    <!-- Favicon icon -->\n    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/estatico/images/favicon.png\">\n    <title>SmartSearch</title>\n    <!-- Bootstrap Core CSS -->\n    <link href=\"/estatico/plugins/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n    <!-- Custom CSS -->\n    <link href=\"/estatico/template/css/style.css\" rel=\"stylesheet\">\n    <!-- You can change the theme colors from here -->\n    <link href=\"/estatico/template/css/colors/default-dark.css\" id=\"theme\" rel=\"stylesheet\">\n</head> <body class=\"fix-header fix-sidebar card-no-border\">");

  component_globals_tag({}, out);

  out.w("<div class=\"preloader\"><svg class=\"circular\" viewBox=\"25 25 50 50\"><circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"></circle> </svg></div><div id=\"main-wrapper\"><header class=\"topbar\">\n    <nav class=\"navbar top-navbar navbar-toggleable-sm navbar-light\">        \n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"/\" style=\"color: #272c33\">\n                <!-- Logo icon -->\n                <b>\n                    <i class=\"fa fa-search\"></i>                    \n                </b>                \n                <!-- Logo text -->\n                <span>\n                    SmartSearch\n                </span>\n            </a>\n        </div>\n\n        <div class=\"navbar-collapse\">\n            <ul class=\"navbar-nav mr-auto mt-md-0 \">\n            </ul>\n\n            <!-- User profile and search -->            \n            <ul class=\"navbar-nav my-lg-0\">\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle text-muted waves-effect waves-dark\" href=\"\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><img src=\"/estatico/images/users/default.svg\" alt=\"user\" class=\"profile-pic m-r-5\" />User</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</header><aside class=\"left-sidebar\">\n    <div class=\"scroll-sidebar\">\n        <nav class=\"sidebar-nav\">\n            <ul id=\"sidebarnav\">\n                <li>\n                    <a href=\"/search\" class=\"waves-effect\"><i class=\"fa fa-search m-r-10\" aria-hidden=\"true\"></i>Pesquisar</a>\n                </li>\n                <li>\n                    <a href=\"/report\" class=\"waves-effect\"><i class=\"fa fa-list m-r-10\" aria-hidden=\"true\"></i>Relatórios</a>\n                </li>\n                <li>\n                    <a href=\"/user\" class=\"waves-effect\"><i class=\"fa fa-vcard m-r-10\" aria-hidden=\"true\"></i>Controle de acesso</a>\n                </li>\n            </ul>\n        </nav>\n    </div>\n</aside><div class=\"page-wrapper\"><div class=\"container-fluid\"><div class=\"row page-titles\"><div class=\"col-md-6 col-8 align-self-center\"><h3 class=\"text-themecolor m-b-0 m-t-0\">Relatórios</h3><ol class=\"breadcrumb\"><li class=\"breadcrumb-item\"><a href=\"/\">Home</a></li><li class=\"breadcrumb-item\"><a href=\"/report\">Relatórios</a></li><li class=\"breadcrumb-item active\">" +
    marko_escapeXml(data.name) +
    "</li></ol></div> </div> <div class=\"row\"> <div class=\"col-lg-4 col-xlg-3 col-md-5\"><div class=\"card\"><div class=\"card-block\" style=\"text-align: center;\"><img src=\"/estatico/images/users/default.svg\" class=\"img-circle\" width=\"150\"><h4 class=\"card-title m-t-10\">" +
    marko_escapeXml(data.name) +
    "</h4> </div></div></div><div class=\"col-lg-8 col-xlg-9 col-md-7\">");

  var for__24 = 0;

  marko_forEach(data.reportData, function(source) {
    var keyscope__25 = "[" + ((for__24++) + "]");

    out.w(" <div class=\"card\"> <div class=\"card-block\"><div class=\"form-horizontal form-material\"> <div class=\"form-group\"><h1 class=\"card-title m-t-10 col-md-12\" style=\"text-align: center;\">" +
      marko_escapeXml(source.name) +
      "</h1>");

    var for__31 = 0;

    marko_forEach(source.data, function(sourceData) {
      var keyscope__32 = "[" + (((for__31++) + keyscope__25) + "]");

      out.w(" ");

      if (((typeof sourceData.value) === "object") && (sourceData.value !== null)) {
        out.w("<h2 class=\"card-title m-t-10 col-md-12\">" +
          marko_escapeXml(sourceData.name) +
          "</h2>");

        var for__34 = 0;

        marko_forEach(sourceData.value, function(sourceChildData) {
          var keyscope__35 = "[" + (((for__34++) + keyscope__32) + "]");

          if (((typeof sourceChildData.value) === "object") && (sourceChildData.value !== null)) {
            out.w("<h2 class=\"card-title m-t-10 col-md-12\">" +
              marko_escapeXml(sourceChildData.name) +
              "</h2>");

            var for__37 = 0;

            marko_forEach(sourceChildData.value, function(sourceGrandChildData) {
              var keyscope__38 = "[" + (((for__37++) + keyscope__35) + "]");

              out.w("<h4 class=\"card-title m-t-10 col-md-6\" style=\"margin-left: 35px;\">" +
                marko_escapeXml(sourceGrandChildData.name) +
                "</h4><h6 class=\"card-subtitle col-md-6\" style=\"margin-left: 35px;\">" +
                marko_escapeXml(sourceGrandChildData.value) +
                "</h6>");
            });
          } else {
            out.w("<h4 class=\"card-title m-t-10 col-md-6\" style=\"margin-left: 35px;\">" +
              marko_escapeXml(sourceChildData.name) +
              "</h4><h6 class=\"card-subtitle col-md-6\" style=\"margin-left: 35px;\">" +
              marko_escapeXml(sourceChildData.value) +
              "</h6>");
          }
        });

        out.w(" ");
      } else {
        out.w("<h4 class=\"card-title m-t-10 col-md-12\">" +
          marko_escapeXml(sourceData.name) +
          "</h4><h6 class=\"card-subtitle col-md-12\">" +
          marko_escapeXml(sourceData.value) +
          "</h6>");
      }

      out.w(" ");
    });

    out.w(" </div> </div></div> </div>");
  });

  out.w("</div> </div></div> <footer class=\"footer text-center\">\n    © 2019 SmartSearch\n</footer></div></div><script src=\"/estatico/plugins/jquery/jquery.min.js\"></script>\n<!-- Bootstrap tether Core JavaScript -->\n<script src=\"/estatico/plugins/bootstrap/js/tether.min.js\"></script>\n<script src=\"/estatico/plugins/bootstrap/js/bootstrap.min.js\"></script>\n<!-- slimscrollbar scrollbar JavaScript -->\n<script src=\"/estatico/template/js/jquery.slimscroll.js\"></script>\n<!--Wave Effects -->\n<script src=\"/estatico/template/js/waves.js\"></script>\n<!--Menu sidebar -->\n<script src=\"/estatico/template/js/sidebarmenu.js\"></script>\n<!--stickey kit -->\n<script src=\"/estatico/plugins/sticky-kit-master/dist/sticky-kit.min.js\"></script>\n<!--Custom JavaScript -->\n<script src=\"/estatico/template/js/custom.min.js\"></script>\n<!-- Flot Charts JavaScript -->\n<script src=\"/estatico/plugins/flot/jquery.flot.js\"></script>\n<script src=\"/estatico/plugins/flot.tooltip/js/jquery.flot.tooltip.min.js\"></script>\n<script src=\"/estatico/template/js/flot-data.js\"></script>\n<!-- Style switcher -->\n<script src=\"/estatico/plugins/styleswitcher/jQuery.style.switcher.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "45");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/smartsearch$1.0.0/src/app/views/reports/detail/report_detail.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
