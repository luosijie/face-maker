(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/canvas-center/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/canvas-center/index.jsx?taro&type=script&parse=COMPONENT&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/canvas-center/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _mobx = __webpack_require__(/*! @tarojs/mobx */ "./node_modules/@tarojs/mobx/index.js");

var _iconAddImage = __webpack_require__(/*! ../../assets/images/icon-add-image.png */ "./src/assets/images/icon-add-image.png");

var _iconAddImage2 = _interopRequireDefault(_iconAddImage);

__webpack_require__(/*! ./index.scss */ "./src/components/canvas-center/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _mobx.inject)('counterStore'), _dec(_class = (0, _mobx.observer)(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["imageAdd"], _this.config = {
      navigationBarTitleText: '编辑'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentWillReact',
    value: function componentWillReact() {
      console.log('componentWillReact');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // const context = Taro.createCanvasContext('canvas', this.$scope)
      // // context.drawImage(imageExample, 0, 0, 300, 300)
      // context.setFillStyle('#000000')
      // context.setFontSize('20')
      // context.fillText('asdda', 0, 0)
      // context.draw()
      console.log('canvas-绘图', this);
      var query = wx.createSelectorQuery().in(this.$scope);
      var imgUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602046663531&di=ea528410cd6762a658cf53dc347425b5&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D583874135%2C70653437%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3607%26h%3D2408';
      // wx.downloadFile({
      //     url: imgUrl,
      //     success (res) {
      //         console.log('image from dowmloadFile', res.tempFilePath)
      //         wx.getImageInfo({
      //             src: res.tempFilePath,
      //             success (resImageInfo) {
      //                 console.log('image from getImageInfo', resImageInfo)
      //             },
      //             fail (err) {
      //                 console.log('err from getImageInfo', err)
      //             }
      //         })
      //     }
      // })
      wx.getImageInfo({
        src: imgUrl,
        success: function success(tempImage) {
          query.select('#myCanvas').fields({ node: true, size: true }).exec(function (res) {
            var canvas = res[0].node;
            var ctx = canvas.getContext('2d');
            var dpr = wx.getSystemInfoSync().pixelRatio;
            canvas.width = res[0].width * dpr;
            canvas.height = res[0].height * dpr;
            ctx.scale(dpr, dpr);
            // ctx.fillRect(0, 0, canvas.width, canvas.height)
            console.log('image-temp-path', tempImage.path);
            ctx.drawImage(tempImage.path, 0, 0, 300, 300);
          });
        },
        fail: function fail(err) {
          console.error('err from getImageInfo', err);
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'navigateTo',
    value: function navigateTo(url) {
      // window.location.href = url
    }
  }, {
    key: 'onReady',
    value: function onReady() {
      console.log("ss");
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {
        imageAdd: _iconAddImage2.default
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class2.$$events = [], _class2.$$componentPath = "components/canvas-center/index", _temp2)) || _class) || _class);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/luo/Projects/compony/face-maker/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/canvas-center/index.jsx?taro&type=template&parse=COMPONENT&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/luo/Projects/compony/face-maker/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/canvas-center/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/canvas-center/index.wxml";

/***/ }),

/***/ "./src/assets/images/icon-add-image.png":
/*!**********************************************!*\
  !*** ./src/assets/images/icon-add-image.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAAAXNSR0IArs4c6QAAA1FJREFUeAHtnL9rE2Ecxi8XU5Amg4NxKCGkUdKhu7hEaPcKLi5OgpODi3+G+A8UurtJwc0WG6fOLgkxgVB0CGKHtIshjc9zea+8PZ6ASLja3Pfg8r7v877J3fPJ9973uB9vLhDLYDDYnkwmz1DVnE6na0iLotlNlc5yudx37Hwrn8+/r1arB0kjOV84OTl5MB6PdwHisa8vcx6AjgqFwstKpdKNfV5C6ff7TYgfAOQO0lEYhm+R7q+urn4rl8tn8RduejocDovn5+f34WPn4uLiDdISwJwifbK+vv6F/iIoLkKOHZBDNHqBBgM2WOYFgVCF5z143CIYRMzDy4hB5ederzfFeoBGl9GzzEBib/RL3/RPDtRDdqqoYB8yYoRgnbIiKwv90jf8jsiBPEI3ygTsQ7JwyKg/m75dHxqQR4hG7GC57M+SzH7G/pshQobnIQFHmczi8PyTByMlOjFbpmH3X/5cz3+RUGxJEDAoCSAsGhSDIggIySLFoAgCQrJIMSiCgJAsUgyKICAkixSDIggIySLFoAgCQrJIMSiCgJBuCS11qdvtPsI9mE234Xaj0Yjuv6S+I26D/wUUd/H8NfcJV9Z3kVwrFOtTXHT4iUHxabi8QTEogoCQLFIMiiAgpFSGZJyH3MV5yFex/UjCXbmSV/e80+nseOVkdhPnMT+T4iLLqUDBY1S8kX/vb3YcgG6jHVe5rKys5GXFAkXrUwTMVCKlVqud4pDYFtuPJJzFvkKEPGUB+Y/Iv5vXFr/1a17dovRUoMDob+zw4bydbrfbfh/yY2NjY27beb+xSN0OH0HToBgUQUBIFikGRRAQUiqjj9juFQmjEx9kPnZi/0rlNRT4YG303Gy9Xs/UQ8WKdczC+hRBx6AYFEFASBYpBkUQEJJFikERBIRkkWJQBAEhWaQYFEFASBYpBkUQEJJFyhwo0dvpfLNb1GdG8vyfhbjAw8kQAveqe2YgJI3G/smDh0/LNfDvvSS/k4Vy7L8VcroMOuZkCHz3Pwvukx7p200GEZBHyPlDEDJHaFjC7co9rJm6LEm/9E3/5EAe0ejD+UMgcLqMLVD7lJWIoU/6pW/6JwfkZ1OFMIPKJhKbP8WHQjA20w4peJEyK84+sz4n0x/CzjlpAVahwAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/components/canvas-center/index.jsx":
/*!************************************************!*\
  !*** ./src/components/canvas-center/index.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=COMPONENT& */ "./src/components/canvas-center/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=COMPONENT& */ "./src/components/canvas-center/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/canvas-center/index.jsx?taro&type=script&parse=COMPONENT&":
/*!**********************************************************************************!*\
  !*** ./src/components/canvas-center/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/canvas-center/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/canvas-center/index.jsx?taro&type=template&parse=COMPONENT&":
/*!************************************************************************************!*\
  !*** ./src/components/canvas-center/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_luo_Projects_compony_face_maker_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/luo/Projects/compony/face-maker/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/luo/Projects/compony/face-maker/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/canvas-center/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_luo_Projects_compony_face_maker_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_luo_Projects_compony_face_maker_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_luo_Projects_compony_face_maker_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_file_loader_dist_cjs_js_name_path_name_wxml_context_Users_luo_Projects_compony_face_maker_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/canvas-center/index.scss":
/*!*************************************************!*\
  !*** ./src/components/canvas-center/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/components/canvas-center/index.jsx","runtime","taro","vendors"]]]);