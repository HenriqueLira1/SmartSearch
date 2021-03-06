// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/smartsearch$1.0.0/src/app/views/login/login.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html> <head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/estatico/images/favicon.png\"><title>SmartSearch</title><link href=\"/estatico/plugins/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\"><link href=\"/estatico/template/css/style.css\" rel=\"stylesheet\"><link href=\"/estatico/template/css/login.css\" rel=\"stylesheet\"><link href=\"/estatico/template/css/colors/default-dark.css\" id=\"theme\" rel=\"stylesheet\"></head> <body>");

  component_globals_tag({}, out);

  out.w("<div class=\"login-page\"> <div class=\"form\"><p>SmartSearch</p>");

  if (data.errors) {
    out.w("<div> <div class=\"alert alert-danger\">" +
      marko_escapeXml(data.errors.message) +
      "</div></div>");
  }

  out.w("<form class=\"login-form\" method=\"POST\" action=\"/login\"><input type=\"text\" placeholder=\"email\" name=\"email\"><input type=\"password\" placeholder=\"senha\" name=\"password\"><input type=\"submit\" value=\"ENTRAR\"></form></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "23");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/smartsearch$1.0.0/src/app/views/login/login.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
