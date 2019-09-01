// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/casadocodigo$1.0.0/src/app/views/errors/500.marko",
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

  out.w("<html><head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <!-- Tell the browser to be responsive to screen width -->\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n    <!-- Favicon icon -->\n    <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/estatico/images/favicon.png\">\n    <title>SmartSearch</title>\n    <!-- Bootstrap Core CSS -->\n    <link href=\"/estatico/plugins/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\">\n    <!-- Custom CSS -->\n    <link href=\"/estatico/template/css/style.css\" rel=\"stylesheet\">\n    <!-- You can change the theme colors from here -->\n    <link href=\"/estatico/template/css/colors/default-dark.css\" id=\"theme\" rel=\"stylesheet\">\n</head> <body class=\"fix-header card-no-border\">");

  component_globals_tag({}, out);

  out.w("<section id=\"wrapper\" class=\"error-page\"><div class=\"error-box\"><div class=\"error-body text-center\"><h1>500</h1><h3 class=\"text-uppercase\">Houve um problema. Tente mais tarde.</h3> <a href=\"/\" class=\"btn btn-info btn-rounded waves-effect waves-light m-b-40\">Voltar</a> </div><footer class=\"footer text-center\">\n    © 2019 SmartSearch\n</footer></div></section><script src=\"/estatico/plugins/jquery/jquery.min.js\"></script>\n<!-- Bootstrap tether Core JavaScript -->\n<script src=\"/estatico/plugins/bootstrap/js/tether.min.js\"></script>\n<script src=\"/estatico/plugins/bootstrap/js/bootstrap.min.js\"></script>\n<!-- slimscrollbar scrollbar JavaScript -->\n<script src=\"/estatico/template/js/jquery.slimscroll.js\"></script>\n<!--Wave Effects -->\n<script src=\"/estatico/template/js/waves.js\"></script>\n<!--Menu sidebar -->\n<script src=\"/estatico/template/js/sidebarmenu.js\"></script>\n<!--stickey kit -->\n<script src=\"/estatico/plugins/sticky-kit-master/dist/sticky-kit.min.js\"></script>\n<!--Custom JavaScript -->\n<script src=\"/estatico/template/js/custom.min.js\"></script>\n<!-- Flot Charts JavaScript -->\n<script src=\"/estatico/plugins/flot/jquery.flot.js\"></script>\n<script src=\"/estatico/plugins/flot.tooltip/js/jquery.flot.tooltip.min.js\"></script>\n<script src=\"/estatico/template/js/flot-data.js\"></script>\n<!-- Style switcher -->\n<script src=\"/estatico/plugins/styleswitcher/jQuery.style.switcher.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "8");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/casadocodigo$1.0.0/src/app/views/errors/500.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
