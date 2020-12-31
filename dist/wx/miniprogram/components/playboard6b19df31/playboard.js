
var window = window || {};

window["webpackJsonp"] = require("../../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* mpx inject */ global.currentModuleId = "m475e9226"
global.currentResource = "/Users/luo/Projects/self/face-maker/src/miniprogram/components/playboard.mpx"
global.currentCtor = Component
global.currentCtorType = "component"
global.currentSrcMode = "wx"
/* mpx inject */ global.currentInject = {
  moduleId: "m475e9226",
  render: function () {
    this._c("mpxShow", this.mpxShow) || this._c("mpxShow", this.mpxShow) === undefined ? '' : 'display:none;';
    this._r();
  }
};
/* harmony import */ var _babel_loader_node_modules_mpxjs_webpack_plugin_lib_selector_type_script_index_0_playboard_mpx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(450);
/* empty/unused harmony star reexport */global.currentModuleId
/* script */


/* styles */
__webpack_require__(461)

/* json */
__webpack_require__(462)

/* template */
__webpack_require__(463)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(451);
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(453);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(179);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(314);
/* harmony import */ var _babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(445);
/* harmony import */ var _utils_loadImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(460);







var ACTION_TYEP = {
  MOVE: 'MOVE',
  // 移动
  SCALE: 'SCALE',
  // 缩放
  ROTATE: 'ROTATE',
  // 旋转
  DELETE: 'DELETE',
  // 旋转
  NULL: 'NULL' // 空闲

};
Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_4__["createComponent"])({
  data: {
    startTouches: [],
    startSelected: null,
    actionType: '',
    image: {
      move: null,
      scale: null,
      delete: null,
      rotate: null
    }
  },
  computed: {
    mode() {
      return _store__WEBPACK_IMPORTED_MODULE_5__["default"].state.mode;
    },

    canvas() {
      return _store__WEBPACK_IMPORTED_MODULE_5__["default"].state.canvas;
    },

    ctx() {
      return _store__WEBPACK_IMPORTED_MODULE_5__["default"].state.ctx;
    },

    elements() {
      return _store__WEBPACK_IMPORTED_MODULE_5__["default"].state.elements;
    },

    activeIndex() {
      return _store__WEBPACK_IMPORTED_MODULE_5__["default"].state.activeIndex;
    },

    dpr() {
      return wx.getSystemInfoSync().pixelRatio;
    }

  },
  watch: {
    elements() {
      console.log('canvas elements change', this.elements);
      this.renderCanvas();
    },

    mode() {
      this.renderCanvas();
    },

    activeIndex() {
      this.renderCanvas();
    }

  },
  methods: {
    /**
     * 绘制图片
     * @param { Object } ele canvas元素
     */
    drawImage(ele) {
      this.ctx.save();
      var width = ele.width;
      var height = ele.height;
      var centerX = ele.left + ele.width / 2;
      var centerY = ele.top + ele.height / 2;
      this.ctx.translate(centerX, centerY);
      this.ctx.rotate(ele.rotate);
      this.ctx.drawImage(ele.data, ele.left - centerX, ele.top - centerY, width, height);
      this.ctx.restore();
    },

    /**
     * 绘制文字
     * @param { Object } ele canvas元素
     */
    drawText(ele) {
      this.ctx.save();
      var width = ele.size * ele.data.length;
      var height = ele.size;
      var centerX = ele.left + width / 2;
      var centerY = ele.top + height / 2;
      this.ctx.translate(centerX, centerY);
      this.ctx.rotate(ele.rotate);
      this.ctx.font = "".concat(ele.size, "px bold sans-serif");
      this.ctx.globalAlpha = ele.opacity;
      this.ctx.fillStyle = ele.fillStyle;
      this.ctx.strokeStyle = ele.strokeStyle; // this.ctx.lineWidth = 2

      this.ctx.textBaseline = 'top';
      console.log('draw-text', ele);
      this.ctx.fillText(ele.data, ele.left - centerX, ele.top - centerY);
      this.ctx.strokeText(ele.data, ele.left - centerX, ele.top - centerY);
      this.ctx.restore();
    },

    // 画布渲染函数
    renderCanvas() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.drawGrid();
      console.log('draw-background', this.background);
      if (this.background) this.drawImage(this.background);

      for (var i = 0; i < this.elements.length; i++) {
        var ele = this.elements[i]; // 渲染背景

        if (ele.type === 'background') {
          this.drawImage(ele);
        }

        if (ele.type === 'sticker') {
          this.drawImage(ele);
        } // 渲染文字


        if (ele.type === 'text') {
          this.drawText(ele);
        } // 选中元素添加控制元件


        if (this.activeIndex === i) {
          this.initController(ele);
        }
      }
    },

    /**
     * 检测鼠标是否与物体发生碰撞
     * @param { Number } x 鼠标坐标X
     * @param { Number } y 鼠标坐标Y
     * @param { Object } y canvas元素
     * @return { Boolean } 是否发生碰撞
     */
    isCollided(x, y, ele) {
      var controllerSize = this.convert2ControllerSize(ele);
      var unrotatedSize = this.convert2unrotatedSize(x, y, controllerSize.centerX, controllerSize.centerY, ele.rotate);
      return unrotatedSize.left > controllerSize.left && unrotatedSize.top > controllerSize.top && unrotatedSize.left < controllerSize.left + controllerSize.width && unrotatedSize.top < controllerSize.top + controllerSize.height ? unrotatedSize : null;
    },

    /**
     * 将canvas尺寸转为控制点的尺寸
     * @param { Object } ele canvas元素
     * @return { Object } 坐标集合
     */
    convert2ControllerSize(ele) {
      var left, top, width, height, centerX, centerY, rotate;

      if (ele.type === 'text') {
        left = ele.left - 5;
        top = ele.top - 5;
        width = ele.size * ele.data.length + 10;
        height = ele.size + 10;
      } else {
        left = ele.left;
        top = ele.top;
        width = ele.width;
        height = ele.height;
      }

      rotate = ele.rotate;
      centerX = left + width / 2;
      centerY = top + height / 2;
      return {
        left,
        top,
        width,
        height,
        rotate,
        centerX,
        centerY
      };
    },

    touchstart(e) {
      if (!this.elements.length) return;
      this.actionType = ACTION_TYEP.NULL;
      this.startTouches = e.touches;
      var collidedEle = this.elements[0];
      var collided;

      for (var i = this.elements.length - 1; i > 0; i--) {
        var selected = this.elements[i]; // 检测鼠标是否与canvas元素发生碰撞

        collided = this.isCollided(e.touches[0].x, e.touches[0].y, selected);

        if (collided) {
          console.log('碰撞成功', collidedEle);
          collidedEle = selected;
          _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('setActiveIndex', i);
          _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('setMode', collidedEle.type);
          break;
        }
      }

      var controllerSize = this.convert2ControllerSize(collidedEle);
      this.startSelected = _babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_corejs3_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3___default()({}, collidedEle), {}, {
        centerX: controllerSize.centerX,
        centerY: controllerSize.centerY
      });

      if (!collided) {
        if (e.touches.length === 1) {
          console.log('单指触发');
          this.actionType = ACTION_TYEP.MOVE;
        } else if (e.touches.length === 2) {
          console.log('双指触发');
          this.actionType = ACTION_TYEP.SCALE;
        }

        _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('setActiveIndex', null);
        this.renderCanvas();
        return;
      } // TODO：功能未完善
      // if (Math.sqrt((collided.left - controllerSize.left) ** 2 + (collided.top - controllerSize.top) ** 2) < 20) {
      //   console.log('移动模式')
      //   this.actionType = ACTION_TYEP.MOVE
      // } else if (Math.sqrt((collided.left - controllerSize.left) ** 2 + (collided.top - controllerSize.top - controllerSize.height) ** 2) < 20) {
      //   console.log('缩放模式')
      //   this.actionType = ACTION_TYEP.SCALE
      // } else if (Math.sqrt((collided.left - controllerSize.left - controllerSize.width) ** 2 + (collided.top - controllerSize.top) ** 2) < 20) {
      //   console.log('删除模式')
      //   this.actionType = ACTION_TYEP.DELETE
      //   this.handleDelete()
      // } else


      if (Math.sqrt(Math.pow(collided.left - controllerSize.left - controllerSize.width, 2) + Math.pow(collided.top - controllerSize.top - controllerSize.height, 2)) < 20) {
        console.log('旋转模式');
        this.actionType = ACTION_TYEP.ROTATE;
      } else if (e.touches.length === 1) {
        console.log('单指触发');
        this.actionType = ACTION_TYEP.MOVE;
      } else if (e.touches.length === 2) {
        console.log('双指触发');
        this.actionType = ACTION_TYEP.SCALE;
      }

      this.renderCanvas();
    },

    touchmove(e) {
      console.log(this.actionType);
      if (this.activeIndex === null && this.mode !== 'background') return;
      if (this.actionType === ACTION_TYEP.ROTATE) this.handleRotate(e);
      if (this.actionType === ACTION_TYEP.MOVE) this.handleMove(e);
      if (this.actionType === ACTION_TYEP.SCALE) this.handleScale(e);
    },

    touchend(e) {
      this.actionType = ACTION_TYEP.NULL;
      console.log('touch-end', e);
    },

    // 移动事件绑定函数
    handleMove(e) {
      var _context;

      console.log('mouse-move', e);
      if (e.touches.length > 1) return;
      var x = e.touches[0].x;
      var y = e.touches[0].y;
      var dx = this.startTouches[0].x - x;
      var dy = this.startTouches[0].y - y;

      var elements = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default()(_context = this.elements).call(_context);

      elements[this.activeIndex || 0].left = this.startSelected.left - dx;
      elements[this.activeIndex || 0].top = this.startSelected.top - dy;
      _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('setElements', elements);
    },

    // 缩放事件绑定函数
    handleScale(e) {
      var _context2;

      if (e.touches.length !== 2 || this.mode !== 'background') return;
      var startLength = Math.sqrt(Math.pow(this.startTouches[0].x - this.startTouches[1].x, 2) + Math.pow(this.startTouches[0].y - this.startTouches[1].y, 2));
      var endLength = Math.sqrt(Math.pow(e.touches[0].x - e.touches[1].x, 2) + Math.pow(e.touches[0].y - e.touches[1].y, 2));
      var scale = endLength / startLength;

      var elements = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = this.elements).call(_context2);

      var selected = elements[this.activeIndex || 0];
      selected.left = this.startSelected.centerX - this.startSelected.width * scale / 2;
      selected.top = this.startSelected.centerY - this.startSelected.height * scale / 2;
      selected.width = this.startSelected.width * scale;
      selected.height = this.startSelected.height * scale; // elements[this.activeIndex || 0].scale = this.startSelected.scale * scale

      _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('setElements', elements);
    },

    // 旋转绑定函数
    handleRotate(e) {
      var _context3;

      console.log('handleRotate');
      var start = this.startTouches[0];
      var end = e.touches[0];
      var center = {
        x: this.startSelected.centerX,
        y: this.startSelected.centerY
      };
      var startLength = Math.sqrt(Math.pow(center.x - start.x, 2) + Math.pow(center.y - start.y, 2));
      var endLength = Math.sqrt(Math.pow(center.x - end.x, 2) + Math.pow(center.y - end.y, 2));
      var radian = this.convert2Radian(start, end, center);
      var scale = endLength / startLength;

      var elements = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = this.elements).call(_context3);

      var selected = elements[this.activeIndex]; // 旋转

      selected.rotate = this.startSelected.rotate - radian; // 缩放

      if (selected.type === 'text') {
        selected.left = this.startSelected.centerX - this.startSelected.size * this.startSelected.data.length * scale / 2;
        selected.top = this.startSelected.centerY - this.startSelected.size * scale / 2;
        selected.size = this.startSelected.size * scale;
      }

      if (selected.type === 'sticker') {
        selected.left = this.startSelected.centerX - this.startSelected.width * scale / 2;
        selected.top = this.startSelected.centerY - this.startSelected.height * scale / 2;
        selected.width = this.startSelected.width * scale;
        selected.height = this.startSelected.height * scale;
      }

      _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('setElements', elements);
    },

    // 删除绑定函数
    handleDelete() {
      wx.showModal({
        title: '提示',
        content: '确认删除元素吗',

        success(res) {
          if (res.confirm) {
            _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('deleteActiveELement');
          }
        }

      });
    },

    initSelectStatus() {//
    },

    /**
     * 将坐标转化为旋转前的坐标
     * 用于碰撞检测
     * @param { Number } x
     * @param { Number } y
     * @param { Number } ox 原点坐标x
     * @param { Number } oy 原点坐标y
     * @param { Number } r 旋转弧度
     * @return { Object } {left, top} 旋转前的坐标
     */
    convert2unrotatedSize(x, y, ox, oy, r) {
      x = x - ox;
      y = y - oy;
      return {
        left: x * Math.cos(-r) - y * Math.sin(-r) + ox,
        top: x * Math.sin(-r) + y * Math.cos(-r) + oy
      };
    },

    // 初始化画布
    initCanvas() {
      var _this = this;

      return _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var query;
        return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                query = _this.createSelectorQuery();
                query.select('#canvas').fields({
                  node: true,
                  size: true
                }).exec( /*#__PURE__*/function () {
                  var _ref = _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
                    var canvas, ctx, imageRotate;
                    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            canvas = res[0].node;
                            ctx = canvas.getContext('2d');
                            _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('setCanvas', canvas);
                            _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('setCtx', ctx); // TODO：功能未完善
                            // await loadImage('/images/icon-move.png', this.canvas).then(res => {
                            //   console.log('this', this)
                            //   this.image.move = res
                            // })
                            // await loadImage('/images/icon-scale.png', this.canvas).then(res => {
                            //   this.image.scale = res
                            // })
                            // await loadImage('/images/icon-delete.png', this.canvas).then(res => {
                            //   this.image.delete = res
                            // })

                            _context4.next = 6;
                            return Object(_utils_loadImage__WEBPACK_IMPORTED_MODULE_6__["default"])('/images/icon-rotate.png', _this.canvas);

                          case 6:
                            imageRotate = _context4.sent;
                            _this.image.rotate = imageRotate;
                            _this.canvas.width = res[0].width * _this.dpr;
                            _this.canvas.height = res[0].height * _this.dpr;

                            _this.ctx.scale(_this.dpr, _this.dpr);

                            _this.drawGrid();

                          case 12:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee2);
      }))();
    },

    /**
     * 已知2点坐标，求旋转弧度
     * @param { Object } s 开始坐标
     * @param { Object } e 结束坐标
     * @param { Object } c 原点坐标
     * @return { Number } 旋转弧度
     */
    convert2Radian(s, e, c) {
      var sx = s.x - c.x;
      var sy = s.y - c.y;
      var ex = e.x - c.x;
      var ey = e.y - c.y;
      var rs = Math.atan2(sy, sx);
      var re = Math.atan2(ey, ex);
      return rs - re;
    },

    initController(ele) {
      var cs = this.convert2ControllerSize(ele);
      this.ctx.save();
      this.ctx.strokeStyle = '#eee';
      this.ctx.translate(cs.centerX, cs.centerY);
      this.ctx.rotate(cs.rotate); // this.ctx.scale(activeElement.scale, activeElement.scale)

      this.ctx.setLineDash([10, 5], 5);
      this.ctx.strokeRect(cs.left - cs.centerX, cs.top - cs.centerY, cs.width, cs.height); // 绘制控制点-旋转

      this.ctx.drawImage(this.image.rotate, cs.left + cs.width - 10 - cs.centerX, cs.top + cs.height - 10 - cs.centerY, 20, 20); // TODO：功能未完善
      // // 绘制控制点-移动
      // this.ctx.drawImage(this.image.move, cs.left - 10 - cs.centerX, cs.top - 10 - cs.centerY, 20, 20)
      // // 绘制控制点-缩放
      // this.ctx.drawImage(this.image.scale, cs.left - 10 - cs.centerX, cs.top + cs.height - 10 - cs.centerY, 20, 20)
      // // 绘制控制点-删除
      // this.ctx.drawImage(this.image.delete, cs.left + cs.width - 10 - cs.centerX, cs.top - 10 - cs.centerY, 20, 20)

      this.ctx.restore();
    },

    // 绘制网格做地图
    drawGrid() {
      this.ctx.save();
      var lineNums = 3;
      var cWidth = this.ctx.canvas.width / this.dpr; // const cHeight = this.ctx.canvas.height

      var lineGap = cWidth / lineNums;
      this.ctx.strokeStyle = '#ccc';
      this.ctx.setLineDash([5, 5]); // 绘制x轴

      for (var i = 0; i <= lineNums; i++) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, lineGap * i);
        this.ctx.lineTo(cWidth, lineGap * i);
        this.ctx.stroke();
      } // 绘制y轴


      for (var _i = 0; _i <= lineNums; _i++) {
        this.ctx.beginPath();
        this.ctx.moveTo(lineGap * _i, 0);
        this.ctx.lineTo(lineGap * _i, cWidth);
        this.ctx.stroke();
      }

      this.ctx.restore();
    }

  },

  ready() {
    var _this2 = this;

    return _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this2.initCanvas();

            case 2:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee3);
    }))();
  }

});

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

// removed by extractor

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

// removed by extractor

/***/ })

},[[449,1]]]);
//# sourceMappingURL=playboard.js.map