'use strict';



;define("mapofmetal-ember/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("mapofmetal-ember/app", ["exports", "ember-resolver", "ember-load-initializers", "mapofmetal-ember/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("mapofmetal-ember/application/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ApplicationRoute = (_dec = Ember.inject.service('data'), (_class = (_temp = class ApplicationRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "dataRepository", _descriptor, this);
    }

    model() {
      let promises = [this.dataRepository.getGenres()];
      return Ember.RSVP.all(promises).then(array => {
        return {
          genres: array[0]
        };
      }).catch(error => {
        debugger;
      });
    }

    setupController(controller, models) {
      // debugger;
      models = {
        genres: models.genres
      };
      controller.setProperties(models);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "dataRepository", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ApplicationRoute;
});
;define("mapofmetal-ember/application/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "z9yzY1P+",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n\\n\"],[8,\"open-seadragon\",[],[[\"@genres\"],[[32,0,[\"genres\"]]]],null],[2,\"\\n\\n\"]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "mapofmetal-ember/application/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("mapofmetal-ember/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("mapofmetal-ember/components/-dynamic-element-alt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("mapofmetal-ember/components/-dynamic-element", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("mapofmetal-ember/components/bs-accordion", ["exports", "ember-bootstrap/components/bs-accordion"], function (_exports, _bsAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-accordion/item", ["exports", "ember-bootstrap/components/bs-accordion/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-accordion/item/body", ["exports", "ember-bootstrap/components/bs-accordion/item/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-accordion/item/title", ["exports", "ember-bootstrap/components/bs-accordion/item/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-alert", ["exports", "ember-bootstrap/components/bs-alert"], function (_exports, _bsAlert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-button-group", ["exports", "ember-bootstrap/components/bs-button-group"], function (_exports, _bsButtonGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-button-group/button", ["exports", "ember-bootstrap/components/bs-button-group/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-button", ["exports", "ember-bootstrap/components/bs-button"], function (_exports, _bsButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-carousel", ["exports", "ember-bootstrap/components/bs-carousel"], function (_exports, _bsCarousel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-carousel/slide", ["exports", "ember-bootstrap/components/bs-carousel/slide"], function (_exports, _slide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-collapse", ["exports", "ember-bootstrap/components/bs-collapse"], function (_exports, _bsCollapse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-dropdown", ["exports", "ember-bootstrap/components/bs-dropdown"], function (_exports, _bsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-dropdown/button", ["exports", "ember-bootstrap/components/bs-dropdown/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-dropdown/menu", ["exports", "ember-bootstrap/components/bs-dropdown/menu"], function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-dropdown/menu/divider", ["exports", "ember-bootstrap/components/bs-dropdown/menu/divider"], function (_exports, _divider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-dropdown/menu/item", ["exports", "ember-bootstrap/components/bs-dropdown/menu/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-dropdown/menu/link-to", ["exports", "ember-bootstrap/components/bs-dropdown/menu/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-dropdown/toggle", ["exports", "ember-bootstrap/components/bs-dropdown/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form", ["exports", "ember-bootstrap/components/bs-form"], function (_exports, _bsForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/element", ["exports", "ember-bootstrap/components/bs-form/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/element/control", ["exports", "ember-bootstrap/components/bs-form/element/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/element/control/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/control/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/element/control/input", ["exports", "ember-bootstrap/components/bs-form/element/control/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/element/control/radio", ["exports", "ember-bootstrap/components/bs-form/element/control/radio"], function (_exports, _radio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/element/control/textarea", ["exports", "ember-bootstrap/components/bs-form/element/control/textarea"], function (_exports, _textarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/element/errors", ["exports", "ember-bootstrap/components/bs-form/element/errors"], function (_exports, _errors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/element/feedback-icon", ["exports", "ember-bootstrap/components/bs-form/element/feedback-icon"], function (_exports, _feedbackIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/element/help-text", ["exports", "ember-bootstrap/components/bs-form/element/help-text"], function (_exports, _helpText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/element/label", ["exports", "ember-bootstrap/components/bs-form/element/label"], function (_exports, _label) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/element/layout/horizontal", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal"], function (_exports, _horizontal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/element/layout/horizontal/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/element/layout/inline", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline"], function (_exports, _inline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/element/layout/inline/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/element/layout/vertical", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical"], function (_exports, _vertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/element/layout/vertical/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/element/legend", ["exports", "ember-bootstrap/components/bs-form/element/legend"], function (_exports, _legend) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _legend.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-form/group", ["exports", "ember-bootstrap/components/bs-form/group"], function (_exports, _group) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-modal-simple", ["exports", "ember-bootstrap/components/bs-modal-simple"], function (_exports, _bsModalSimple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-modal", ["exports", "ember-bootstrap/components/bs-modal"], function (_exports, _bsModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-modal/body", ["exports", "ember-bootstrap/components/bs-modal/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-modal/dialog", ["exports", "ember-bootstrap/components/bs-modal/dialog"], function (_exports, _dialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-modal/footer", ["exports", "ember-bootstrap/components/bs-modal/footer"], function (_exports, _footer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-modal/header", ["exports", "ember-bootstrap/components/bs-modal/header"], function (_exports, _header) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-modal/header/close", ["exports", "ember-bootstrap/components/bs-modal/header/close"], function (_exports, _close) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-modal/header/title", ["exports", "ember-bootstrap/components/bs-modal/header/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-nav", ["exports", "ember-bootstrap/components/bs-nav"], function (_exports, _bsNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-nav/item", ["exports", "ember-bootstrap/components/bs-nav/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-nav/link-to", ["exports", "ember-bootstrap/components/bs-nav/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-navbar", ["exports", "ember-bootstrap/components/bs-navbar"], function (_exports, _bsNavbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-navbar/content", ["exports", "ember-bootstrap/components/bs-navbar/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-navbar/link-to", ["exports", "ember-bootstrap/components/bs-navbar/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-navbar/nav", ["exports", "ember-bootstrap/components/bs-navbar/nav"], function (_exports, _nav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-navbar/toggle", ["exports", "ember-bootstrap/components/bs-navbar/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-popover", ["exports", "ember-bootstrap/components/bs-popover"], function (_exports, _bsPopover) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-popover/element", ["exports", "ember-bootstrap/components/bs-popover/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-progress", ["exports", "ember-bootstrap/components/bs-progress"], function (_exports, _bsProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-progress/bar", ["exports", "ember-bootstrap/components/bs-progress/bar"], function (_exports, _bar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-tab", ["exports", "ember-bootstrap/components/bs-tab"], function (_exports, _bsTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-tab/pane", ["exports", "ember-bootstrap/components/bs-tab/pane"], function (_exports, _pane) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-tooltip", ["exports", "ember-bootstrap/components/bs-tooltip"], function (_exports, _bsTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
;define("mapofmetal-ember/components/bs-tooltip/element", ["exports", "ember-bootstrap/components/bs-tooltip/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("mapofmetal-ember/components/ember-modal-dialog-positioned-container", ["exports", "ember-modal-dialog/components/positioned-container"], function (_exports, _positionedContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
});
;define("mapofmetal-ember/components/ember-modal-dialog/-basic-dialog", ["exports", "ember-modal-dialog/components/basic-dialog"], function (_exports, _basicDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDialog.default;
    }
  });
});
;define("mapofmetal-ember/components/ember-modal-dialog/-in-place-dialog", ["exports", "ember-modal-dialog/components/in-place-dialog"], function (_exports, _inPlaceDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inPlaceDialog.default;
    }
  });
});
;define("mapofmetal-ember/components/ember-modal-dialog/-liquid-dialog", ["exports", "ember-modal-dialog/components/liquid-dialog"], function (_exports, _liquidDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidDialog.default;
    }
  });
});
;define("mapofmetal-ember/components/ember-modal-dialog/-liquid-tether-dialog", ["exports", "ember-modal-dialog/components/liquid-tether-dialog"], function (_exports, _liquidTetherDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidTetherDialog.default;
    }
  });
});
;define("mapofmetal-ember/components/ember-modal-dialog/-tether-dialog", ["exports", "ember-modal-dialog/components/tether-dialog"], function (_exports, _tetherDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});
;define("mapofmetal-ember/components/ember-popper-targeting-parent", ["exports", "ember-popper/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("mapofmetal-ember/components/ember-popper", ["exports", "ember-popper/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("mapofmetal-ember/components/ember-wormhole", ["exports", "ember-wormhole/components/ember-wormhole"], function (_exports, _emberWormhole) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
;define("mapofmetal-ember/components/modal-dialog", ["exports", "ember-modal-dialog/components/modal-dialog"], function (_exports, _modalDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _modalDialog.default;
    }
  });
});
;define("mapofmetal-ember/components/open-seadragon/component", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let OpenSeadragonComponent = (_dec = Ember._tracked, _dec2 = Ember._action, _dec3 = Ember._action, _dec4 = Ember._action, _dec5 = Ember._action, (_class = (_temp = class OpenSeadragonComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "showModal", _descriptor, this);

      Ember.set(this, 'genres', this.args.genres);
    }

    toggleModal(val) {
      // this.toggleProperty('isShowingModal');
      console.log(val);
      Ember.set(this, 'state', val);
      Ember.set(this, 'showModal', true); // This creates an element and appends it to the DOM.
      // var element = document.getElementById('youtube');
      // var node = document.createElement("iframe");
      // node.src = "https://www.youtube.com/embed/6S-n1Kw4HQU";
      // node.width = "420"
      // node.height = "345"
      // document.getElementById('youtube').appendChild(node);
    }

    nullAction() {}

    close() {
      Ember.set(this, 'showModal', false);
    }

    didRender() {
      var loadScript = function (scriptUrl, genres) {
        return new Promise((res, rej) => {
          // if (!document.getElementById('openseadragon1')) {
          const script = document.createElement('script');
          script.setAttribute("id", "openseadragon1");
          script.src = scriptUrl; // debugger;

          document.body.appendChild(script);

          script.onload = function () {
            var source = {
              Image: {
                xmlns: "http://schemas.microsoft.com/deepzoom/2008",
                Url: "/map4a_files/",
                Format: "jpeg",
                Overlap: "2",
                TileSize: "256",
                Size: {
                  Width: "7680",
                  Height: "4320"
                }
              }
            };
            var viewer = OpenSeadragon({
              id: "openseadragon1",
              prefixUrl: "//openseadragon.github.io/openseadragon/images/",
              tileSources: source,
              showNavigationControl: false,
              homeFillsViewer: false,
              visibilityRatio: 1.0,
              constrainDuringPan: true,
              minZoomLevel: 1,
              zoomPerClick: 1.0,
              // disabled
              zoomPerScroll: 1.4,
              springStiffness: 6.5,
              preserveImageSizeOnResize: false,
              overlays: genres // []
              // overlays: [
              //   {
              //       id: 'overlay1',
              //       x: 0.2,
              //       y: 0.2
              //   },
              //   {
              //     id: 'overlay2',
              //     x: 0.2,
              //     y: 0.2111
              //   }
              // ]

            });

            for (let i = 0; i < genres.length; i++) {
              new OpenSeadragon.MouseTracker({
                element: genres[i].id,

                clickHandler(e) {
                  let target = document.getElementById(e.eventSource.element.id);
                  console.log(target);
                }

              });
            }

            var db = viewer.viewport.getBounds();
            console.log(db); // debugger;

            var positionEl = document.querySelectorAll('.info .position')[0];
            var zoomEl = document.querySelectorAll('.info .zoom')[0];

            var updateZoom = function () {
              var zoom = viewer.viewport.getZoom(true);
              var imageZoom = viewer.viewport.viewportToImageZoom(zoom);
              zoomEl.innerHTML = `Zoom: ${Math.round(zoom * 100) / 100}<br/>Image Zoom: ${Math.round(imageZoom * 100) / 100}`;
            };

            viewer.addHandler('open', function () {
              var tiledImage = viewer.world.getItemAt(0);
              var imageRect = new OpenSeadragon.Rect(0, 0, 1000, 1000); // Or whatever area you want to focus on

              var viewportRect = tiledImage.imageToViewportRectangle(imageRect);
              viewer.viewport.fitBounds(viewportRect, true);
              viewer.viewport.zoomTo(2.0, (0.7, 0.23), true);
              viewer.viewport.applyConstraints();
              var tracker = new OpenSeadragon.MouseTracker({
                element: viewer.container,
                moveHandler: function (event) {
                  var webPoint = event.position;
                  var viewportPoint = viewer.viewport.pointFromPixel(webPoint);
                  var imagePoint = viewer.viewport.viewportToImageCoordinates(viewportPoint);
                  var zoom = viewer.viewport.getZoom(true);
                  var imageZoom = viewer.viewport.viewportToImageZoom(zoom);
                  positionEl.innerHTML = `Web: ${webPoint.toString()}<br/>Viewport: ${viewportPoint.toString()}<br/>Image: ${imagePoint.toString()}`;
                  updateZoom();
                }
              });
              tracker.setTracking(true);
              viewer.addHandler('animation', updateZoom);
            });
            viewer.addHandler('canvas-click', function (event) {
              // The canvas-click event gives us a position in web coordinates.
              var webPoint = event.position; // Convert that to viewport coordinates, the lingua franca of OpenSeadragon coordinates.

              var viewportPoint = viewer.viewport.pointFromPixel(webPoint); // Convert from viewport coordinates to image coordinates.

              var imagePoint = viewer.viewport.viewportToImageCoordinates(viewportPoint); // Show the results.

              console.log(webPoint.toString(), viewportPoint.toString(), imagePoint.toString());
            }); // new OpenSeadragon.MouseTracker({
            //   element: 'overlay1',
            //   clickHandler: function(e) {
            //     console.log(e);
            //     // let target = document.getElementById(e.eventSource.element.id);
            //     let target = document.getElementById('xxx');
            //     debugger;
            //     console.log(target);
            //     // // var $target = $(e.originalEvent.target);
            //     // var $target = document.getElementById('overlay1');
            //     // if ($target.is('a')) {
            //     //     if ($target.attr('target') === '_blank') {
            //     //         window.open($target.attr('href'));
            //     //     } else {
            //     //         location.href = $target.attr('href');
            //     //     }
            //     // } else {
            //     //     $('#overlay1').toggleClass('selected');
            //     // }
            //   }
            // });
            // new OpenSeadragon.MouseTracker({
            //   element: 'overlay2',
            //   clickHandler: function(e) {
            //     console.log(e);
            //     // let target = document.getElementById(e.eventSource.element.id);
            //     let target = document.getElementById('overlay2');
            //     debugger;
            //     console.log(target);
            //   }
            // });
            // res();
          };

          script.onerror = function () {
            rej();
          }; // } else {
          //   res();
          // }

        });
      };

      console.log('did render');
      loadScript('https://openseadragon.github.io/openseadragon/openseadragon.min.js', this.genres).then(() => {
        console.log('openseadragon script loaded');
      }).catch(e => {
        console.error('script failed to load'); //eslint-disable-line

        console.error(e); //eslint-disable-line
      });
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "showModal", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "toggleModal", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "toggleModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "nullAction", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "nullAction"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "close", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "close"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "didRender", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "didRender"), _class.prototype)), _class));
  _exports.default = OpenSeadragonComponent;
});
;define("mapofmetal-ember/components/open-seadragon/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "AjveSWko",
    "block": "{\"symbols\":[\"genre\",\"genre\",\"&default\"],\"statements\":[[11,\"div\"],[24,1,\"openseadragon1\"],[24,5,\"width: 98vw; height: 98vh;\"],[4,[38,2],[[32,0,[\"didRender\"]]],null],[12],[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[30,[36,3],[[32,0,[\"genres\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,5,\"background: none transparent; border: none; margin: 0px; padding: 0px; position: static;\"],[12],[11,\"img\"],[24,1,\"right-arrow-overlay\"],[24,\"src\",\"https://svgsilh.com/svg/1299051.svg\"],[24,\"alt\",\"Right arrow\"],[24,\"width\",\"20\"],[24,0,\"openseadragon-overlay\"],[24,5,\"position: absolute; left: 243.1px; top: 198.187px; display: block;\"],[4,[38,1],[\"click\",[30,[36,0],[[32,0,[\"toggleModal\"]],\"Massachusetts\"],null]],null],[12],[13],[13],[2,\"\\n\"]],\"parameters\":[2]}]]],[13],[2,\"\\n\\n\"],[6,[37,4],[[30,[36,3],[[30,[36,3],[[32,0,[\"genres\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"div\"],[15,1,[32,1,[\"id\"]]],[12],[2,\"\\n\"],[2,\"  \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"\\n\"],[18,3,null],[2,\"\\n\"],[10,\"div\"],[14,0,\"info\"],[14,5,\"float: left; width: 200px;\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"position\"],[12],[2,\"Web:\"],[10,\"br\"],[12],[13],[2,\"(3.5,129.92)\"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[2,\"Viewport:\"],[10,\"br\"],[12],[13],[2,\"(0.2,0.59)\"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[2,\"Image:\"],[10,\"br\"],[12],[13],[2,\"(1382.46,4177.6)\"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"zoom\"],[14,5,\"margin-top: 3em;\"],[12],[2,\"Zoom:\"],[10,\"br\"],[12],[13],[2,\"1.58\"],[10,\"br\"],[12],[13],[10,\"br\"],[12],[13],[2,\"Image Zoom:\"],[10,\"br\"],[12],[13],[2,\"0.09\"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[6,[37,6],[[35,5]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[8,\"modal-dialog\",[],[[\"@onClickOverlay\"],[[30,[36,0],[[32,0,[\"nullAction\"]]],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[10,\"br\"],[12],[13],[2,\" \"],[10,\"br\"],[12],[13],[2,\"\\n    \"],[10,\"br\"],[12],[13],[2,\" \"],[10,\"br\"],[12],[13],[2,\"\\n    \"],[10,\"br\"],[12],[13],[2,\" \"],[10,\"br\"],[12],[13],[2,\"\\n    \"],[10,\"br\"],[12],[13],[2,\" \"],[10,\"br\"],[12],[13],[2,\"\\n    \"],[10,\"br\"],[12],[13],[2,\" \"],[10,\"br\"],[12],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"container\"],[12],[2,\"\\n      \"],[10,\"iframe\"],[14,\"width\",\"240\"],[14,\"height\",\"145\"],[14,\"src\",\"https://www.youtube.com/embed/6S-n1Kw4HQU\"],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n    \\n    \"],[10,\"div\"],[12],[1,[32,0,[\"state\"]]],[13],[2,\"\\n    \"],[11,\"button\"],[24,0,\"btn btn-primary-outline m-r\"],[24,4,\"button\"],[4,[38,1],[\"click\",[32,0,[\"close\"]]],null],[12],[10,\"span\"],[14,0,\"fa fa-pencil-square-o\"],[12],[13],[2,\" \"],[10,\"span\"],[12],[2,\"Close\"],[13],[13],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"],[10,\"div\"],[14,5,\"position: absolute; top: 50px; right: 50px;\"],[14,1,\"youtube\"],[12],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"fn\",\"on\",\"did-insert\",\"-track-array\",\"each\",\"showModal\",\"if\"]}",
    "meta": {
      "moduleName": "mapofmetal-ember/components/open-seadragon/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("mapofmetal-ember/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("mapofmetal-ember/helpers/-element", ["exports", "ember-element-helper/helpers/-element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("mapofmetal-ember/helpers/-has-block-params", ["exports", "ember-named-blocks-polyfill/helpers/-has-block-params"], function (_exports, _hasBlockParams) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasBlockParams.default;
    }
  });
});
;define("mapofmetal-ember/helpers/-has-block", ["exports", "ember-named-blocks-polyfill/helpers/-has-block"], function (_exports, _hasBlock) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasBlock.default;
    }
  });
});
;define("mapofmetal-ember/helpers/-is-named-block-invocation", ["exports", "ember-named-blocks-polyfill/helpers/-is-named-block-invocation"], function (_exports, _isNamedBlockInvocation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isNamedBlockInvocation.default;
    }
  });
});
;define("mapofmetal-ember/helpers/-named-block-invocation", ["exports", "ember-named-blocks-polyfill/helpers/-named-block-invocation"], function (_exports, _namedBlockInvocation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _namedBlockInvocation.default;
    }
  });
});
;define("mapofmetal-ember/helpers/app-version", ["exports", "mapofmetal-ember/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("mapofmetal-ember/helpers/bs-contains", ["exports", "ember-bootstrap/helpers/bs-contains"], function (_exports, _bsContains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(_exports, "bsContains", {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
;define("mapofmetal-ember/helpers/bs-default", ["exports", "ember-bootstrap/helpers/bs-default"], function (_exports, _bsDefault) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDefault.default;
    }
  });
});
;define("mapofmetal-ember/helpers/bs-eq", ["exports", "ember-bootstrap/helpers/bs-eq"], function (_exports, _bsEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
});
;define("mapofmetal-ember/helpers/bs-noop", ["exports", "ember-bootstrap/helpers/bs-noop"], function (_exports, _bsNoop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNoop.default;
    }
  });
});
;define("mapofmetal-ember/helpers/bs-size-class", ["exports", "ember-bootstrap/helpers/bs-size-class"], function (_exports, _bsSizeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsSizeClass.default;
    }
  });
});
;define("mapofmetal-ember/helpers/bs-type-class", ["exports", "ember-bootstrap/helpers/bs-type-class"], function (_exports, _bsTypeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTypeClass.default;
    }
  });
});
;define("mapofmetal-ember/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("mapofmetal-ember/helpers/did-insert", ["exports", "ember-render-helpers/helpers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("mapofmetal-ember/helpers/did-update", ["exports", "ember-render-helpers/helpers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("mapofmetal-ember/helpers/element", ["exports", "ember-element-helper/helpers/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("mapofmetal-ember/helpers/format-name", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function formatName(params
  /*, hash*/
  ) {
    if (params && params[0]) {
      return params[0].split('__')[1];
    }

    return params;
  });

  _exports.default = _default;
});
;define("mapofmetal-ember/helpers/ignore-children", ["exports", "ember-ignore-children-helper/helpers/ignore-children"], function (_exports, _ignoreChildren) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ignoreChildren.default;
    }
  });
  Object.defineProperty(_exports, "ignoreChildren", {
    enumerable: true,
    get: function () {
      return _ignoreChildren.ignoreChildren;
    }
  });
});
;define("mapofmetal-ember/helpers/on-document", ["exports", "ember-on-helper/helpers/on-document"], function (_exports, _onDocument) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
;define("mapofmetal-ember/helpers/on-window", ["exports", "ember-on-helper/helpers/on-window"], function (_exports, _onWindow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
;define("mapofmetal-ember/helpers/on", ["exports", "ember-on-helper/helpers/on"], function (_exports, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
;define("mapofmetal-ember/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("mapofmetal-ember/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("mapofmetal-ember/helpers/ref-to", ["exports", "ember-ref-bucket/helpers/ref-to"], function (_exports, _refTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
  Object.defineProperty(_exports, "refTo", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
});
;define("mapofmetal-ember/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("mapofmetal-ember/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("mapofmetal-ember/helpers/will-destroy", ["exports", "ember-render-helpers/helpers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("mapofmetal-ember/index/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class IndexRoute extends Ember.Route {}

  _exports.default = IndexRoute;
});
;define("mapofmetal-ember/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ynblfh3g",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n\\n\"],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "mapofmetal-ember/index/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("mapofmetal-ember/initializers/add-modals-container", ["exports", "ember-modal-dialog/initializers/add-modals-container"], function (_exports, _addModalsContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
  _exports.default = _default;
});
;define("mapofmetal-ember/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "mapofmetal-ember/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("mapofmetal-ember/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("mapofmetal-ember/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define("mapofmetal-ember/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("mapofmetal-ember/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("mapofmetal-ember/initializers/export-application-global", ["exports", "mapofmetal-ember/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("mapofmetal-ember/initializers/load-bootstrap-config", ["exports", "mapofmetal-ember/config/environment", "ember-bootstrap/config"], function (_exports, _environment, _config) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize()
  /* container, application */
  {
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  var _default = {
    name: 'load-bootstrap-config',
    initialize
  };
  _exports.default = _default;
});
;define("mapofmetal-ember/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("mapofmetal-ember/modifiers/create-ref", ["exports", "ember-ref-bucket/modifiers/create-ref"], function (_exports, _createRef) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _createRef.default;
    }
  });
});
;define("mapofmetal-ember/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("mapofmetal-ember/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("mapofmetal-ember/modifiers/focus-trap", ["exports", "ember-focus-trap/modifiers/focus-trap"], function (_exports, _focusTrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
;define("mapofmetal-ember/modifiers/style", ["exports", "ember-style-modifier/modifiers/style"], function (_exports, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _style.default;
    }
  });
});
;define("mapofmetal-ember/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("mapofmetal-ember/router", ["exports", "mapofmetal-ember/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});
;define("mapofmetal-ember/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("mapofmetal-ember/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("mapofmetal-ember/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("mapofmetal-ember/services/data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class DataService extends Ember.Service {
    getGenres() {
      return [// {
      //   "px": 6336,
      //   "py": 1203,
      //   "width": 74,
      //   "height": 77,
      //   "id": "map-overlay__massachusetts",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      {
        id: 'right-arrow-overlay',
        x: 0.8630,
        y: 0.1570,
        placement: 'RIGHT',
        checkResize: false
      } // {
      //   "px": 0,
      //   "py": 80,
      //   "width": 40,
      //   "height": 40,
      //   "title": "garage_rock",
      //   "id": "map-overlay__garagerock",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 370,
      //   "py": 430,
      //   "width": 40,
      //   "height": 40,
      //   "id": "map-overlay__bluesrock",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 260,
      //   "py": 600,
      //   "width": 40,
      //   "height": 40,
      //   "id": "map-overlay__psychedelicrock",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 564,
      //   "py": 490,
      //   "width": 40,
      //   "height": 40,
      //   "id": "map-overlay__hardrock",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 549,
      //   "py": 866,
      //   "width": 40,
      //   "height": 40,
      //   "id": "map-overlay__shockrock",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 820,
      //   "py": 650,
      //   "width": 207,
      //   "height": 153,
      //   "id": "map-overlay__heavymetal",
      //   "className": "map-genre-overlay map-genre-overlay__primary"
      // },
      // {
      //   "px": 1120,
      //   "py": 933,
      //   "width": 80,
      //   "height": 80,
      //   "id": "map-overlay__progressivemetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 1361,
      //   "py": 673,
      //   "width": 50,
      //   "height": 53,
      //   "id": "map-overlay__punkrock",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 1348,
      //   "py": 904,
      //   "width": 84,
      //   "height": 77,
      //   "id": "map-overlay__nwobhm",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 770,
      //   "py": 1665,
      //   "width": 80,
      //   "height": 82,
      //   "id": "map-overlay__glammetal",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 1248,
      //   "py": 1565,
      //   "width": 149,
      //   "height": 116,
      //   "id": "map-overlay__doommetal",
      //   "className": "map-genre-overlay map-genre-overlay__primary"
      // },
      // {
      //   "px": 1221,
      //   "py": 2149,
      //   "width": 47,
      //   "height": 52,
      //   "id": "map-overlay__gothicrock",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 1541,
      //   "py": 2084,
      //   "width": 70,
      //   "height": 74,
      //   "id": "map-overlay__rapmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 1314,
      //   "py": 2667,
      //   "width": 79,
      //   "height": 72,
      //   "id": "map-overlay__visualkei",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 1947,
      //   "py": 2135,
      //   "width": 54,
      //   "height": 60,
      //   "id": "map-overlay__grunge",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 2150,
      //   "py": 2108,
      //   "width": 66,
      //   "height": 76,
      //   "id": "map-overlay__sludgemetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2110,
      //   "py": 2633,
      //   "width": 76,
      //   "height": 73,
      //   "id": "map-overlay__groovemetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2158,
      //   "py": 2980,
      //   "width": 68,
      //   "height": 72,
      //   "id": "map-overlay__gothmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2542,
      //   "py": 2887,
      //   "width": 73,
      //   "height": 76,
      //   "id": "map-overlay__neuedeutscheharte",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2647,
      //   "py": 2657,
      //   "width": 72,
      //   "height": 74,
      //   "id": "map-overlay__numetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2591,
      //   "py": 2450,
      //   "width": 75,
      //   "height": 82,
      //   "id": "map-overlay__alternativemetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3091,
      //   "py": 2543,
      //   "width": 49,
      //   "height": 52,
      //   "id": "map-overlay__postrock",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 3194,
      //   "py": 2904,
      //   "width": 71,
      //   "height": 77,
      //   "id": "map-overlay__nwoahm",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3320,
      //   "py": 2766,
      //   "width": 67,
      //   "height": 73,
      //   "id": "map-overlay__postmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2078,
      //   "py": 717,
      //   "width": 55,
      //   "height": 55,
      //   "id": "map-overlay__hardcorepunk",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 1711,
      //   "py": 1091,
      //   "width": 153,
      //   "height": 116,
      //   "id": "map-overlay__speedmetal",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 1696,
      //   "py": 1395,
      //   "width": 76,
      //   "height": 86,
      //   "id": "map-overlay__neoclassicalmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2008,
      //   "py": 1211,
      //   "width": 81,
      //   "height": 79,
      //   "id": "map-overlay__uspm",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 1879,
      //   "py": 1602,
      //   "width": 81,
      //   "height": 79,
      //   "id": "map-overlay__avantgardemetal",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 2181,
      //   "py": 1481,
      //   "width": 153,
      //   "height": 121,
      //   "id": "map-overlay__melodicpowermetal",
      //   "className": "map-genre-overlay map-genre-overlay__primary"
      // },
      // {
      //   "px": 2538,
      //   "py": 1197,
      //   "width": 144,
      //   "height": 112,
      //   "id": "map-overlay__thrashmetal",
      //   "className": "map-genre-overlay map-genre-overlay__primary"
      // },
      // {
      //   "px": 2585,
      //   "py": 2159,
      //   "width": 69,
      //   "height": 73,
      //   "id": "map-overlay__stonermetal",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3049,
      //   "py": 2257,
      //   "width": 64,
      //   "height": 61,
      //   "id": "map-overlay__deathdoom",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 2874,
      //   "py": 1868,
      //   "width": 147,
      //   "height": 119,
      //   "id": "map-overlay__folkmetal",
      //   "className": "map-genre-overlay map-genre-overlay__primary"
      // },
      // {
      //   "px": 2524,
      //   "py": 710,
      //   "width": 154,
      //   "height": 118,
      //   "id": "map-overlay__firstblackmetal",
      //   "className": "map-genre-overlay map-genre-overlay__primary"
      // },
      // {
      //   "px": 2810,
      //   "py": 1623,
      //   "width": 78,
      //   "height": 78,
      //   "id": "map-overlay__industrialmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2739,
      //   "py": 977,
      //   "width": 46,
      //   "height": 48,
      //   "id": "map-overlay__crustpunk",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 3262,
      //   "py": 563,
      //   "width": 53,
      //   "height": 54,
      //   "id": "map-overlay__darkambient",
      //   "className": "map-genre-overlay map-genre-overlay__related"
      // },
      // {
      //   "px": 3103,
      //   "py": 696,
      //   "width": 72,
      //   "height": 81,
      //   "id": "map-overlay__vikingmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 2959,
      //   "py": 1136,
      //   "width": 74,
      //   "height": 75,
      //   "id": "map-overlay__grindcore",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3159,
      //   "py": 1257,
      //   "width": 139,
      //   "height": 116,
      //   "id": "map-overlay__deathmetal",
      //   "className": "map-genre-overlay map-genre-overlay__primary"
      // },
      // {
      //   "px": 3327,
      //   "py": 1173,
      //   "width": 69,
      //   "height": 75,
      //   "id": "map-overlay__deathgrind",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3445,
      //   "py": 917,
      //   "width": 79,
      //   "height": 72,
      //   "id": "map-overlay__norwegianblack",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3488,
      //   "py": 1049,
      //   "width": 77,
      //   "height": 80,
      //   "id": "map-overlay__symphonicblackmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3712,
      //   "py": 600,
      //   "width": 74,
      //   "height": 85,
      //   "id": "map-overlay__blackambient",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3806,
      //   "py": 710,
      //   "width": 63,
      //   "height": 58,
      //   "id": "map-overlay__usblack",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3844,
      //   "py": 776,
      //   "width": 59,
      //   "height": 55,
      //   "id": "map-overlay__canadianblackmetal",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3889,
      //   "py": 834,
      //   "width": 60,
      //   "height": 56,
      //   "id": "map-overlay__greekblack",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3889,
      //   "py": 1126,
      //   "width": 82,
      //   "height": 79,
      //   "id": "map-overlay__depressiveblack",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3610,
      //   "py": 1234,
      //   "width": 81,
      //   "height": 79,
      //   "id": "map-overlay__blackeneddeath",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3559,
      //   "py": 1396,
      //   "width": 76,
      //   "height": 68,
      //   "id": "map-overlay__brutaldeath",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3303,
      //   "py": 1461,
      //   "width": 76,
      //   "height": 69,
      //   "id": "map-overlay__swedishdeath",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3218,
      //   "py": 1514,
      //   "width": 73,
      //   "height": 66,
      //   "id": "map-overlay__southamericandeath",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3139,
      //   "py": 1627,
      //   "width": 70,
      //   "height": 63,
      //   "id": "map-overlay__deathrash",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 3129,
      //   "py": 1719,
      //   "width": 72,
      //   "height": 76,
      //   "id": "map-overlay__crossoverthrash",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 4507,
      //   "py": 1026,
      //   "width": 67,
      //   "height": 71,
      //   "id": "map-overlay__unblackmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 4042,
      //   "py": 1396,
      //   "width": 80,
      //   "height": 71,
      //   "id": "map-overlay__techdeath",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 4084,
      //   "py": 1620,
      //   "width": 77,
      //   "height": 73,
      //   "id": "map-overlay__melodicdeath",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 6336,
      //   "py": 1103,
      //   "width": 74,
      //   "height": 77,
      //   "id": "map-overlay__blackenedcrust",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3549,
      //   "py": 1696,
      //   "width": 67,
      //   "height": 71,
      //   "id": "map-overlay__metalcore",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3749,
      //   "py": 1653,
      //   "width": 68,
      //   "height": 72,
      //   "id": "map-overlay__deathnroll",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3965,
      //   "py": 1886,
      //   "width": 77,
      //   "height": 72,
      //   "id": "map-overlay__mathcore",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 4263,
      //   "py": 1923,
      //   "width": 72,
      //   "height": 74,
      //   "id": "map-overlay__deathcore",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 4697,
      //   "py": 1467,
      //   "width": 74,
      //   "height": 79,
      //   "id": "map-overlay__djent",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // },
      // {
      //   "px": 4572,
      //   "py": 1785,
      //   "width": 73,
      //   "height": 81,
      //   "id": "map-overlay__trancemetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3236,
      //   "py": 1864,
      //   "width": 61,
      //   "height": 65,
      //   "id": "map-overlay__orientalmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3194,
      //   "py": 1932,
      //   "width": 61,
      //   "height": 63,
      //   "id": "map-overlay__celticmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3163,
      //   "py": 2001,
      //   "width": 57,
      //   "height": 59,
      //   "id": "map-overlay__medievalmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3572,
      //   "py": 2081,
      //   "width": 71,
      //   "height": 74,
      //   "id": "map-overlay__symphonicmetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3656,
      //   "py": 2266,
      //   "width": 67,
      //   "height": 63,
      //   "id": "map-overlay__dronemetal",
      //   "className": "map-genre-overlay map-genre-overlay__fusion"
      // },
      // {
      //   "px": 3674,
      //   "py": 2388,
      //   "width": 66,
      //   "height": 64,
      //   "id": "map-overlay__funeraldoom",
      //   "className": "map-genre-overlay map-genre-overlay__metal"
      // }
      ];
    }

  }

  _exports.default = DataService;
});
;define("mapofmetal-ember/services/modal-dialog", ["exports", "mapofmetal-ember/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function computedFromConfig(prop) {
    return Ember.computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  var _default = Ember.Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: null // injected by initializer

  });

  _exports.default = _default;
});
;define("mapofmetal-ember/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("mapofmetal-ember/templates/components/ember-popper-targeting-parent", ["exports", "ember-popper/templates/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("mapofmetal-ember/templates/components/ember-popper", ["exports", "ember-popper/templates/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("mapofmetal-ember/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("mapofmetal-ember/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("mapofmetal-ember/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("mapofmetal-ember/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('mapofmetal-ember/config/environment', [], function() {
  var prefix = 'mapofmetal-ember';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("mapofmetal-ember/app")["default"].create({"name":"mapofmetal-ember","version":"0.0.0+f7e11c9f"});
          }
        
//# sourceMappingURL=mapofmetal-ember.map
