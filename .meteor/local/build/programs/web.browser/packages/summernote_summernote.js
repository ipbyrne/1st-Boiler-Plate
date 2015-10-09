//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/summernote_summernote/packages/summernote_summernote.js  //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/summernote:summernote/dist/summernote.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * Super simple wysiwyg editor on Bootstrap v0.6.16                                                                    // 2
 * http://summernote.org/                                                                                              // 3
 *                                                                                                                     // 4
 * summernote.js                                                                                                       // 5
 * Copyright 2013-2015 Alan Hong. and other contributors                                                               // 6
 * summernote may be freely distributed under the MIT license./                                                        // 7
 *                                                                                                                     // 8
 * Date: 2015-08-03T16:41Z                                                                                             // 9
 */                                                                                                                    // 10
(function (factory) {                                                                                                  // 11
  /* global define */                                                                                                  // 12
  if (typeof define === 'function' && define.amd) {                                                                    // 13
    // AMD. Register as an anonymous module.                                                                           // 14
    define(['jquery'], factory);                                                                                       // 15
  } else {                                                                                                             // 16
    // Browser globals: jQuery                                                                                         // 17
    factory(window.jQuery);                                                                                            // 18
  }                                                                                                                    // 19
}(function ($) {                                                                                                       // 20
                                                                                                                       // 21
                                                                                                                       // 22
                                                                                                                       // 23
  if (!Array.prototype.reduce) {                                                                                       // 24
    /**                                                                                                                // 25
     * Array.prototype.reduce polyfill                                                                                 // 26
     *                                                                                                                 // 27
     * @param {Function} callback                                                                                      // 28
     * @param {Value} [initialValue]                                                                                   // 29
     * @return {Value}                                                                                                 // 30
     *                                                                                                                 // 31
     * @see http://goo.gl/WNriQD                                                                                       // 32
     */                                                                                                                // 33
    Array.prototype.reduce = function (callback) {                                                                     // 34
      var t = Object(this), len = t.length >>> 0, k = 0, value;                                                        // 35
      if (arguments.length === 2) {                                                                                    // 36
        value = arguments[1];                                                                                          // 37
      } else {                                                                                                         // 38
        while (k < len && !(k in t)) {                                                                                 // 39
          k++;                                                                                                         // 40
        }                                                                                                              // 41
        if (k >= len) {                                                                                                // 42
          throw new TypeError('Reduce of empty array with no initial value');                                          // 43
        }                                                                                                              // 44
        value = t[k++];                                                                                                // 45
      }                                                                                                                // 46
      for (; k < len; k++) {                                                                                           // 47
        if (k in t) {                                                                                                  // 48
          value = callback(value, t[k], k, t);                                                                         // 49
        }                                                                                                              // 50
      }                                                                                                                // 51
      return value;                                                                                                    // 52
    };                                                                                                                 // 53
  }                                                                                                                    // 54
                                                                                                                       // 55
  if ('function' !== typeof Array.prototype.filter) {                                                                  // 56
    /**                                                                                                                // 57
     * Array.prototype.filter polyfill                                                                                 // 58
     *                                                                                                                 // 59
     * @param {Function} func                                                                                          // 60
     * @return {Array}                                                                                                 // 61
     *                                                                                                                 // 62
     * @see http://goo.gl/T1KFnq                                                                                       // 63
     */                                                                                                                // 64
    Array.prototype.filter = function (func) {                                                                         // 65
      var t = Object(this), len = t.length >>> 0;                                                                      // 66
                                                                                                                       // 67
      var res = [];                                                                                                    // 68
      var thisArg = arguments.length >= 2 ? arguments[1] : void 0;                                                     // 69
      for (var i = 0; i < len; i++) {                                                                                  // 70
        if (i in t) {                                                                                                  // 71
          var val = t[i];                                                                                              // 72
          if (func.call(thisArg, val, i, t)) {                                                                         // 73
            res.push(val);                                                                                             // 74
          }                                                                                                            // 75
        }                                                                                                              // 76
      }                                                                                                                // 77
                                                                                                                       // 78
      return res;                                                                                                      // 79
    };                                                                                                                 // 80
  }                                                                                                                    // 81
                                                                                                                       // 82
  if (!Array.prototype.map) {                                                                                          // 83
    /**                                                                                                                // 84
     * Array.prototype.map polyfill                                                                                    // 85
     *                                                                                                                 // 86
     * @param {Function} callback                                                                                      // 87
     * @return {Array}                                                                                                 // 88
     *                                                                                                                 // 89
     * @see https://goo.gl/SMWaMK                                                                                      // 90
     */                                                                                                                // 91
    Array.prototype.map = function (callback, thisArg) {                                                               // 92
      var T, A, k;                                                                                                     // 93
      if (this === null) {                                                                                             // 94
        throw new TypeError(' this is null or not defined');                                                           // 95
      }                                                                                                                // 96
                                                                                                                       // 97
      var O = Object(this);                                                                                            // 98
      var len = O.length >>> 0;                                                                                        // 99
      if (typeof callback !== 'function') {                                                                            // 100
        throw new TypeError(callback + ' is not a function');                                                          // 101
      }                                                                                                                // 102
                                                                                                                       // 103
      if (arguments.length > 1) {                                                                                      // 104
        T = thisArg;                                                                                                   // 105
      }                                                                                                                // 106
                                                                                                                       // 107
      A = new Array(len);                                                                                              // 108
      k = 0;                                                                                                           // 109
                                                                                                                       // 110
      while (k < len) {                                                                                                // 111
        var kValue, mappedValue;                                                                                       // 112
        if (k in O) {                                                                                                  // 113
          kValue = O[k];                                                                                               // 114
          mappedValue = callback.call(T, kValue, k, O);                                                                // 115
          A[k] = mappedValue;                                                                                          // 116
        }                                                                                                              // 117
        k++;                                                                                                           // 118
      }                                                                                                                // 119
      return A;                                                                                                        // 120
    };                                                                                                                 // 121
  }                                                                                                                    // 122
                                                                                                                       // 123
  var isSupportAmd = typeof define === 'function' && define.amd;                                                       // 124
                                                                                                                       // 125
  /**                                                                                                                  // 126
   * returns whether font is installed or not.                                                                         // 127
   *                                                                                                                   // 128
   * @param {String} fontName                                                                                          // 129
   * @return {Boolean}                                                                                                 // 130
   */                                                                                                                  // 131
  var isFontInstalled = function (fontName) {                                                                          // 132
    var testFontName = fontName === 'Comic Sans MS' ? 'Courier New' : 'Comic Sans MS';                                 // 133
    var $tester = $('<div>').css({                                                                                     // 134
      position: 'absolute',                                                                                            // 135
      left: '-9999px',                                                                                                 // 136
      top: '-9999px',                                                                                                  // 137
      fontSize: '200px'                                                                                                // 138
    }).text('mmmmmmmmmwwwwwww').appendTo(document.body);                                                               // 139
                                                                                                                       // 140
    var originalWidth = $tester.css('fontFamily', testFontName).width();                                               // 141
    var width = $tester.css('fontFamily', fontName + ',' + testFontName).width();                                      // 142
                                                                                                                       // 143
    $tester.remove();                                                                                                  // 144
                                                                                                                       // 145
    return originalWidth !== width;                                                                                    // 146
  };                                                                                                                   // 147
                                                                                                                       // 148
  var userAgent = navigator.userAgent;                                                                                 // 149
  var isMSIE = /MSIE|Trident/i.test(userAgent);                                                                        // 150
  var browserVersion;                                                                                                  // 151
  if (isMSIE) {                                                                                                        // 152
    var matches = /MSIE (\d+[.]\d+)/.exec(userAgent);                                                                  // 153
    if (matches) {                                                                                                     // 154
      browserVersion = parseFloat(matches[1]);                                                                         // 155
    }                                                                                                                  // 156
    matches = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(userAgent);                                                  // 157
    if (matches) {                                                                                                     // 158
      browserVersion = parseFloat(matches[1]);                                                                         // 159
    }                                                                                                                  // 160
  }                                                                                                                    // 161
                                                                                                                       // 162
  /**                                                                                                                  // 163
   * @class core.agent                                                                                                 // 164
   *                                                                                                                   // 165
   * Object which check platform and agent                                                                             // 166
   *                                                                                                                   // 167
   * @singleton                                                                                                        // 168
   * @alternateClassName agent                                                                                         // 169
   */                                                                                                                  // 170
  var agent = {                                                                                                        // 171
    /** @property {Boolean} [isMac=false] true if this agent is Mac  */                                                // 172
    isMac: navigator.appVersion.indexOf('Mac') > -1,                                                                   // 173
    /** @property {Boolean} [isMSIE=false] true if this agent is a Internet Explorer  */                               // 174
    isMSIE: isMSIE,                                                                                                    // 175
    /** @property {Boolean} [isFF=false] true if this agent is a Firefox  */                                           // 176
    isFF: /firefox/i.test(userAgent),                                                                                  // 177
    isWebkit: /webkit/i.test(userAgent),                                                                               // 178
    /** @property {Boolean} [isSafari=false] true if this agent is a Safari  */                                        // 179
    isSafari: /safari/i.test(userAgent),                                                                               // 180
    /** @property {Float} browserVersion current browser version  */                                                   // 181
    browserVersion: browserVersion,                                                                                    // 182
    /** @property {String} jqueryVersion current jQuery version string  */                                             // 183
    jqueryVersion: parseFloat($.fn.jquery),                                                                            // 184
    isSupportAmd: isSupportAmd,                                                                                        // 185
    hasCodeMirror: isSupportAmd ? require.specified('CodeMirror') : !!window.CodeMirror,                               // 186
    isFontInstalled: isFontInstalled,                                                                                  // 187
    isW3CRangeSupport: !!document.createRange                                                                          // 188
  };                                                                                                                   // 189
                                                                                                                       // 190
  /**                                                                                                                  // 191
   * @class core.func                                                                                                  // 192
   *                                                                                                                   // 193
   * func utils (for high-order func's arg)                                                                            // 194
   *                                                                                                                   // 195
   * @singleton                                                                                                        // 196
   * @alternateClassName func                                                                                          // 197
   */                                                                                                                  // 198
  var func = (function () {                                                                                            // 199
    var eq = function (itemA) {                                                                                        // 200
      return function (itemB) {                                                                                        // 201
        return itemA === itemB;                                                                                        // 202
      };                                                                                                               // 203
    };                                                                                                                 // 204
                                                                                                                       // 205
    var eq2 = function (itemA, itemB) {                                                                                // 206
      return itemA === itemB;                                                                                          // 207
    };                                                                                                                 // 208
                                                                                                                       // 209
    var peq2 = function (propName) {                                                                                   // 210
      return function (itemA, itemB) {                                                                                 // 211
        return itemA[propName] === itemB[propName];                                                                    // 212
      };                                                                                                               // 213
    };                                                                                                                 // 214
                                                                                                                       // 215
    var ok = function () {                                                                                             // 216
      return true;                                                                                                     // 217
    };                                                                                                                 // 218
                                                                                                                       // 219
    var fail = function () {                                                                                           // 220
      return false;                                                                                                    // 221
    };                                                                                                                 // 222
                                                                                                                       // 223
    var not = function (f) {                                                                                           // 224
      return function () {                                                                                             // 225
        return !f.apply(f, arguments);                                                                                 // 226
      };                                                                                                               // 227
    };                                                                                                                 // 228
                                                                                                                       // 229
    var and = function (fA, fB) {                                                                                      // 230
      return function (item) {                                                                                         // 231
        return fA(item) && fB(item);                                                                                   // 232
      };                                                                                                               // 233
    };                                                                                                                 // 234
                                                                                                                       // 235
    var self = function (a) {                                                                                          // 236
      return a;                                                                                                        // 237
    };                                                                                                                 // 238
                                                                                                                       // 239
    var idCounter = 0;                                                                                                 // 240
                                                                                                                       // 241
    /**                                                                                                                // 242
     * generate a globally-unique id                                                                                   // 243
     *                                                                                                                 // 244
     * @param {String} [prefix]                                                                                        // 245
     */                                                                                                                // 246
    var uniqueId = function (prefix) {                                                                                 // 247
      var id = ++idCounter + '';                                                                                       // 248
      return prefix ? prefix + id : id;                                                                                // 249
    };                                                                                                                 // 250
                                                                                                                       // 251
    /**                                                                                                                // 252
     * returns bnd (bounds) from rect                                                                                  // 253
     *                                                                                                                 // 254
     * - IE Compatability Issue: http://goo.gl/sRLOAo                                                                  // 255
     * - Scroll Issue: http://goo.gl/sNjUc                                                                             // 256
     *                                                                                                                 // 257
     * @param {Rect} rect                                                                                              // 258
     * @return {Object} bounds                                                                                         // 259
     * @return {Number} bounds.top                                                                                     // 260
     * @return {Number} bounds.left                                                                                    // 261
     * @return {Number} bounds.width                                                                                   // 262
     * @return {Number} bounds.height                                                                                  // 263
     */                                                                                                                // 264
    var rect2bnd = function (rect) {                                                                                   // 265
      var $document = $(document);                                                                                     // 266
      return {                                                                                                         // 267
        top: rect.top + $document.scrollTop(),                                                                         // 268
        left: rect.left + $document.scrollLeft(),                                                                      // 269
        width: rect.right - rect.left,                                                                                 // 270
        height: rect.bottom - rect.top                                                                                 // 271
      };                                                                                                               // 272
    };                                                                                                                 // 273
                                                                                                                       // 274
    /**                                                                                                                // 275
     * returns a copy of the object where the keys have become the values and the values the keys.                     // 276
     * @param {Object} obj                                                                                             // 277
     * @return {Object}                                                                                                // 278
     */                                                                                                                // 279
    var invertObject = function (obj) {                                                                                // 280
      var inverted = {};                                                                                               // 281
      for (var key in obj) {                                                                                           // 282
        if (obj.hasOwnProperty(key)) {                                                                                 // 283
          inverted[obj[key]] = key;                                                                                    // 284
        }                                                                                                              // 285
      }                                                                                                                // 286
      return inverted;                                                                                                 // 287
    };                                                                                                                 // 288
                                                                                                                       // 289
    /**                                                                                                                // 290
     * @param {String} namespace                                                                                       // 291
     * @param {String} [prefix]                                                                                        // 292
     * @return {String}                                                                                                // 293
     */                                                                                                                // 294
    var namespaceToCamel = function (namespace, prefix) {                                                              // 295
      prefix = prefix || '';                                                                                           // 296
      return prefix + namespace.split('.').map(function (name) {                                                       // 297
        return name.substring(0, 1).toUpperCase() + name.substring(1);                                                 // 298
      }).join('');                                                                                                     // 299
    };                                                                                                                 // 300
                                                                                                                       // 301
    return {                                                                                                           // 302
      eq: eq,                                                                                                          // 303
      eq2: eq2,                                                                                                        // 304
      peq2: peq2,                                                                                                      // 305
      ok: ok,                                                                                                          // 306
      fail: fail,                                                                                                      // 307
      self: self,                                                                                                      // 308
      not: not,                                                                                                        // 309
      and: and,                                                                                                        // 310
      uniqueId: uniqueId,                                                                                              // 311
      rect2bnd: rect2bnd,                                                                                              // 312
      invertObject: invertObject,                                                                                      // 313
      namespaceToCamel: namespaceToCamel                                                                               // 314
    };                                                                                                                 // 315
  })();                                                                                                                // 316
                                                                                                                       // 317
  /**                                                                                                                  // 318
   * @class core.list                                                                                                  // 319
   *                                                                                                                   // 320
   * list utils                                                                                                        // 321
   *                                                                                                                   // 322
   * @singleton                                                                                                        // 323
   * @alternateClassName list                                                                                          // 324
   */                                                                                                                  // 325
  var list = (function () {                                                                                            // 326
    /**                                                                                                                // 327
     * returns the first item of an array.                                                                             // 328
     *                                                                                                                 // 329
     * @param {Array} array                                                                                            // 330
     */                                                                                                                // 331
    var head = function (array) {                                                                                      // 332
      return array[0];                                                                                                 // 333
    };                                                                                                                 // 334
                                                                                                                       // 335
    /**                                                                                                                // 336
     * returns the last item of an array.                                                                              // 337
     *                                                                                                                 // 338
     * @param {Array} array                                                                                            // 339
     */                                                                                                                // 340
    var last = function (array) {                                                                                      // 341
      return array[array.length - 1];                                                                                  // 342
    };                                                                                                                 // 343
                                                                                                                       // 344
    /**                                                                                                                // 345
     * returns everything but the last entry of the array.                                                             // 346
     *                                                                                                                 // 347
     * @param {Array} array                                                                                            // 348
     */                                                                                                                // 349
    var initial = function (array) {                                                                                   // 350
      return array.slice(0, array.length - 1);                                                                         // 351
    };                                                                                                                 // 352
                                                                                                                       // 353
    /**                                                                                                                // 354
     * returns the rest of the items in an array.                                                                      // 355
     *                                                                                                                 // 356
     * @param {Array} array                                                                                            // 357
     */                                                                                                                // 358
    var tail = function (array) {                                                                                      // 359
      return array.slice(1);                                                                                           // 360
    };                                                                                                                 // 361
                                                                                                                       // 362
    /**                                                                                                                // 363
     * returns item of array                                                                                           // 364
     */                                                                                                                // 365
    var find = function (array, pred) {                                                                                // 366
      for (var idx = 0, len = array.length; idx < len; idx ++) {                                                       // 367
        var item = array[idx];                                                                                         // 368
        if (pred(item)) {                                                                                              // 369
          return item;                                                                                                 // 370
        }                                                                                                              // 371
      }                                                                                                                // 372
    };                                                                                                                 // 373
                                                                                                                       // 374
    /**                                                                                                                // 375
     * returns true if all of the values in the array pass the predicate truth test.                                   // 376
     */                                                                                                                // 377
    var all = function (array, pred) {                                                                                 // 378
      for (var idx = 0, len = array.length; idx < len; idx ++) {                                                       // 379
        if (!pred(array[idx])) {                                                                                       // 380
          return false;                                                                                                // 381
        }                                                                                                              // 382
      }                                                                                                                // 383
      return true;                                                                                                     // 384
    };                                                                                                                 // 385
                                                                                                                       // 386
    /**                                                                                                                // 387
     * returns index of item                                                                                           // 388
     */                                                                                                                // 389
    var indexOf = function (array, item) {                                                                             // 390
      return $.inArray(item, array);                                                                                   // 391
    };                                                                                                                 // 392
                                                                                                                       // 393
    /**                                                                                                                // 394
     * returns true if the value is present in the list.                                                               // 395
     */                                                                                                                // 396
    var contains = function (array, item) {                                                                            // 397
      return indexOf(array, item) !== -1;                                                                              // 398
    };                                                                                                                 // 399
                                                                                                                       // 400
    /**                                                                                                                // 401
     * get sum from a list                                                                                             // 402
     *                                                                                                                 // 403
     * @param {Array} array - array                                                                                    // 404
     * @param {Function} fn - iterator                                                                                 // 405
     */                                                                                                                // 406
    var sum = function (array, fn) {                                                                                   // 407
      fn = fn || func.self;                                                                                            // 408
      return array.reduce(function (memo, v) {                                                                         // 409
        return memo + fn(v);                                                                                           // 410
      }, 0);                                                                                                           // 411
    };                                                                                                                 // 412
                                                                                                                       // 413
    /**                                                                                                                // 414
     * returns a copy of the collection with array type.                                                               // 415
     * @param {Collection} collection - collection eg) node.childNodes, ...                                            // 416
     */                                                                                                                // 417
    var from = function (collection) {                                                                                 // 418
      var result = [], idx = -1, length = collection.length;                                                           // 419
      while (++idx < length) {                                                                                         // 420
        result[idx] = collection[idx];                                                                                 // 421
      }                                                                                                                // 422
      return result;                                                                                                   // 423
    };                                                                                                                 // 424
                                                                                                                       // 425
    /**                                                                                                                // 426
     * cluster elements by predicate function.                                                                         // 427
     *                                                                                                                 // 428
     * @param {Array} array - array                                                                                    // 429
     * @param {Function} fn - predicate function for cluster rule                                                      // 430
     * @param {Array[]}                                                                                                // 431
     */                                                                                                                // 432
    var clusterBy = function (array, fn) {                                                                             // 433
      if (!array.length) { return []; }                                                                                // 434
      var aTail = tail(array);                                                                                         // 435
      return aTail.reduce(function (memo, v) {                                                                         // 436
        var aLast = last(memo);                                                                                        // 437
        if (fn(last(aLast), v)) {                                                                                      // 438
          aLast[aLast.length] = v;                                                                                     // 439
        } else {                                                                                                       // 440
          memo[memo.length] = [v];                                                                                     // 441
        }                                                                                                              // 442
        return memo;                                                                                                   // 443
      }, [[head(array)]]);                                                                                             // 444
    };                                                                                                                 // 445
                                                                                                                       // 446
    /**                                                                                                                // 447
     * returns a copy of the array with all falsy values removed                                                       // 448
     *                                                                                                                 // 449
     * @param {Array} array - array                                                                                    // 450
     * @param {Function} fn - predicate function for cluster rule                                                      // 451
     */                                                                                                                // 452
    var compact = function (array) {                                                                                   // 453
      var aResult = [];                                                                                                // 454
      for (var idx = 0, len = array.length; idx < len; idx ++) {                                                       // 455
        if (array[idx]) { aResult.push(array[idx]); }                                                                  // 456
      }                                                                                                                // 457
      return aResult;                                                                                                  // 458
    };                                                                                                                 // 459
                                                                                                                       // 460
    /**                                                                                                                // 461
     * produces a duplicate-free version of the array                                                                  // 462
     *                                                                                                                 // 463
     * @param {Array} array                                                                                            // 464
     */                                                                                                                // 465
    var unique = function (array) {                                                                                    // 466
      var results = [];                                                                                                // 467
                                                                                                                       // 468
      for (var idx = 0, len = array.length; idx < len; idx ++) {                                                       // 469
        if (!contains(results, array[idx])) {                                                                          // 470
          results.push(array[idx]);                                                                                    // 471
        }                                                                                                              // 472
      }                                                                                                                // 473
                                                                                                                       // 474
      return results;                                                                                                  // 475
    };                                                                                                                 // 476
                                                                                                                       // 477
    /**                                                                                                                // 478
     * returns next item.                                                                                              // 479
     * @param {Array} array                                                                                            // 480
     */                                                                                                                // 481
    var next = function (array, item) {                                                                                // 482
      var idx = indexOf(array, item);                                                                                  // 483
      if (idx === -1) { return null; }                                                                                 // 484
                                                                                                                       // 485
      return array[idx + 1];                                                                                           // 486
    };                                                                                                                 // 487
                                                                                                                       // 488
    /**                                                                                                                // 489
     * returns prev item.                                                                                              // 490
     * @param {Array} array                                                                                            // 491
     */                                                                                                                // 492
    var prev = function (array, item) {                                                                                // 493
      var idx = indexOf(array, item);                                                                                  // 494
      if (idx === -1) { return null; }                                                                                 // 495
                                                                                                                       // 496
      return array[idx - 1];                                                                                           // 497
    };                                                                                                                 // 498
                                                                                                                       // 499
    return { head: head, last: last, initial: initial, tail: tail,                                                     // 500
             prev: prev, next: next, find: find, contains: contains,                                                   // 501
             all: all, sum: sum, from: from,                                                                           // 502
             clusterBy: clusterBy, compact: compact, unique: unique };                                                 // 503
  })();                                                                                                                // 504
                                                                                                                       // 505
                                                                                                                       // 506
  var NBSP_CHAR = String.fromCharCode(160);                                                                            // 507
  var ZERO_WIDTH_NBSP_CHAR = '\ufeff';                                                                                 // 508
                                                                                                                       // 509
  /**                                                                                                                  // 510
   * @class core.dom                                                                                                   // 511
   *                                                                                                                   // 512
   * Dom functions                                                                                                     // 513
   *                                                                                                                   // 514
   * @singleton                                                                                                        // 515
   * @alternateClassName dom                                                                                           // 516
   */                                                                                                                  // 517
  var dom = (function () {                                                                                             // 518
    /**                                                                                                                // 519
     * @method isEditable                                                                                              // 520
     *                                                                                                                 // 521
     * returns whether node is `note-editable` or not.                                                                 // 522
     *                                                                                                                 // 523
     * @param {Node} node                                                                                              // 524
     * @return {Boolean}                                                                                               // 525
     */                                                                                                                // 526
    var isEditable = function (node) {                                                                                 // 527
      return node && $(node).hasClass('note-editable');                                                                // 528
    };                                                                                                                 // 529
                                                                                                                       // 530
    /**                                                                                                                // 531
     * @method isControlSizing                                                                                         // 532
     *                                                                                                                 // 533
     * returns whether node is `note-control-sizing` or not.                                                           // 534
     *                                                                                                                 // 535
     * @param {Node} node                                                                                              // 536
     * @return {Boolean}                                                                                               // 537
     */                                                                                                                // 538
    var isControlSizing = function (node) {                                                                            // 539
      return node && $(node).hasClass('note-control-sizing');                                                          // 540
    };                                                                                                                 // 541
                                                                                                                       // 542
    /**                                                                                                                // 543
     * @method  buildLayoutInfo                                                                                        // 544
     *                                                                                                                 // 545
     * build layoutInfo from $editor(.note-editor)                                                                     // 546
     *                                                                                                                 // 547
     * @param {jQuery} $editor                                                                                         // 548
     * @return {Object}                                                                                                // 549
     * @return {Function} return.editor                                                                                // 550
     * @return {Node} return.dropzone                                                                                  // 551
     * @return {Node} return.toolbar                                                                                   // 552
     * @return {Node} return.editable                                                                                  // 553
     * @return {Node} return.codable                                                                                   // 554
     * @return {Node} return.popover                                                                                   // 555
     * @return {Node} return.handle                                                                                    // 556
     * @return {Node} return.dialog                                                                                    // 557
     */                                                                                                                // 558
    var buildLayoutInfo = function ($editor) {                                                                         // 559
      var makeFinder;                                                                                                  // 560
                                                                                                                       // 561
      // air mode                                                                                                      // 562
      if ($editor.hasClass('note-air-editor')) {                                                                       // 563
        var id = list.last($editor.attr('id').split('-'));                                                             // 564
        makeFinder = function (sIdPrefix) {                                                                            // 565
          return function () { return $(sIdPrefix + id); };                                                            // 566
        };                                                                                                             // 567
                                                                                                                       // 568
        return {                                                                                                       // 569
          editor: function () { return $editor; },                                                                     // 570
          holder : function () { return $editor.data('holder'); },                                                     // 571
          editable: function () { return $editor; },                                                                   // 572
          popover: makeFinder('#note-popover-'),                                                                       // 573
          handle: makeFinder('#note-handle-'),                                                                         // 574
          dialog: makeFinder('#note-dialog-')                                                                          // 575
        };                                                                                                             // 576
                                                                                                                       // 577
        // frame mode                                                                                                  // 578
      } else {                                                                                                         // 579
        makeFinder = function (className, $base) {                                                                     // 580
          $base = $base || $editor;                                                                                    // 581
          return function () { return $base.find(className); };                                                        // 582
        };                                                                                                             // 583
                                                                                                                       // 584
        var options = $editor.data('options');                                                                         // 585
        var $dialogHolder = (options && options.dialogsInBody) ? $(document.body) : null;                              // 586
                                                                                                                       // 587
        return {                                                                                                       // 588
          editor: function () { return $editor; },                                                                     // 589
          holder : function () { return $editor.data('holder'); },                                                     // 590
          dropzone: makeFinder('.note-dropzone'),                                                                      // 591
          toolbar: makeFinder('.note-toolbar'),                                                                        // 592
          editable: makeFinder('.note-editable'),                                                                      // 593
          codable: makeFinder('.note-codable'),                                                                        // 594
          statusbar: makeFinder('.note-statusbar'),                                                                    // 595
          popover: makeFinder('.note-popover'),                                                                        // 596
          handle: makeFinder('.note-handle'),                                                                          // 597
          dialog: makeFinder('.note-dialog', $dialogHolder)                                                            // 598
        };                                                                                                             // 599
      }                                                                                                                // 600
    };                                                                                                                 // 601
                                                                                                                       // 602
    /**                                                                                                                // 603
     * returns makeLayoutInfo from editor's descendant node.                                                           // 604
     *                                                                                                                 // 605
     * @private                                                                                                        // 606
     * @param {Node} descendant                                                                                        // 607
     * @return {Object}                                                                                                // 608
     */                                                                                                                // 609
    var makeLayoutInfo = function (descendant) {                                                                       // 610
      var $target = $(descendant).closest('.note-editor, .note-air-editor, .note-air-layout');                         // 611
                                                                                                                       // 612
      if (!$target.length) {                                                                                           // 613
        return null;                                                                                                   // 614
      }                                                                                                                // 615
                                                                                                                       // 616
      var $editor;                                                                                                     // 617
      if ($target.is('.note-editor, .note-air-editor')) {                                                              // 618
        $editor = $target;                                                                                             // 619
      } else {                                                                                                         // 620
        $editor = $('#note-editor-' + list.last($target.attr('id').split('-')));                                       // 621
      }                                                                                                                // 622
                                                                                                                       // 623
      return buildLayoutInfo($editor);                                                                                 // 624
    };                                                                                                                 // 625
                                                                                                                       // 626
    /**                                                                                                                // 627
     * @method makePredByNodeName                                                                                      // 628
     *                                                                                                                 // 629
     * returns predicate which judge whether nodeName is same                                                          // 630
     *                                                                                                                 // 631
     * @param {String} nodeName                                                                                        // 632
     * @return {Function}                                                                                              // 633
     */                                                                                                                // 634
    var makePredByNodeName = function (nodeName) {                                                                     // 635
      nodeName = nodeName.toUpperCase();                                                                               // 636
      return function (node) {                                                                                         // 637
        return node && node.nodeName.toUpperCase() === nodeName;                                                       // 638
      };                                                                                                               // 639
    };                                                                                                                 // 640
                                                                                                                       // 641
    /**                                                                                                                // 642
     * @method isText                                                                                                  // 643
     *                                                                                                                 // 644
     *                                                                                                                 // 645
     *                                                                                                                 // 646
     * @param {Node} node                                                                                              // 647
     * @return {Boolean} true if node's type is text(3)                                                                // 648
     */                                                                                                                // 649
    var isText = function (node) {                                                                                     // 650
      return node && node.nodeType === 3;                                                                              // 651
    };                                                                                                                 // 652
                                                                                                                       // 653
    /**                                                                                                                // 654
     * ex) br, col, embed, hr, img, input, ...                                                                         // 655
     * @see http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements                                     // 656
     */                                                                                                                // 657
    var isVoid = function (node) {                                                                                     // 658
      return node && /^BR|^IMG|^HR|^IFRAME|^BUTTON/.test(node.nodeName.toUpperCase());                                 // 659
    };                                                                                                                 // 660
                                                                                                                       // 661
    var isPara = function (node) {                                                                                     // 662
      if (isEditable(node)) {                                                                                          // 663
        return false;                                                                                                  // 664
      }                                                                                                                // 665
                                                                                                                       // 666
      // Chrome(v31.0), FF(v25.0.1) use DIV for paragraph                                                              // 667
      return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());                                          // 668
    };                                                                                                                 // 669
                                                                                                                       // 670
    var isLi = makePredByNodeName('LI');                                                                               // 671
                                                                                                                       // 672
    var isPurePara = function (node) {                                                                                 // 673
      return isPara(node) && !isLi(node);                                                                              // 674
    };                                                                                                                 // 675
                                                                                                                       // 676
    var isTable = makePredByNodeName('TABLE');                                                                         // 677
                                                                                                                       // 678
    var isInline = function (node) {                                                                                   // 679
      return !isBodyContainer(node) &&                                                                                 // 680
             !isList(node) &&                                                                                          // 681
             !isHr(node) &&                                                                                            // 682
             !isPara(node) &&                                                                                          // 683
             !isTable(node) &&                                                                                         // 684
             !isBlockquote(node);                                                                                      // 685
    };                                                                                                                 // 686
                                                                                                                       // 687
    var isList = function (node) {                                                                                     // 688
      return node && /^UL|^OL/.test(node.nodeName.toUpperCase());                                                      // 689
    };                                                                                                                 // 690
                                                                                                                       // 691
    var isHr = makePredByNodeName('HR');                                                                               // 692
                                                                                                                       // 693
    var isCell = function (node) {                                                                                     // 694
      return node && /^TD|^TH/.test(node.nodeName.toUpperCase());                                                      // 695
    };                                                                                                                 // 696
                                                                                                                       // 697
    var isBlockquote = makePredByNodeName('BLOCKQUOTE');                                                               // 698
                                                                                                                       // 699
    var isBodyContainer = function (node) {                                                                            // 700
      return isCell(node) || isBlockquote(node) || isEditable(node);                                                   // 701
    };                                                                                                                 // 702
                                                                                                                       // 703
    var isAnchor = makePredByNodeName('A');                                                                            // 704
                                                                                                                       // 705
    var isParaInline = function (node) {                                                                               // 706
      return isInline(node) && !!ancestor(node, isPara);                                                               // 707
    };                                                                                                                 // 708
                                                                                                                       // 709
    var isBodyInline = function (node) {                                                                               // 710
      return isInline(node) && !ancestor(node, isPara);                                                                // 711
    };                                                                                                                 // 712
                                                                                                                       // 713
    var isBody = makePredByNodeName('BODY');                                                                           // 714
                                                                                                                       // 715
    /**                                                                                                                // 716
     * returns whether nodeB is closest sibling of nodeA                                                               // 717
     *                                                                                                                 // 718
     * @param {Node} nodeA                                                                                             // 719
     * @param {Node} nodeB                                                                                             // 720
     * @return {Boolean}                                                                                               // 721
     */                                                                                                                // 722
    var isClosestSibling = function (nodeA, nodeB) {                                                                   // 723
      return nodeA.nextSibling === nodeB ||                                                                            // 724
             nodeA.previousSibling === nodeB;                                                                          // 725
    };                                                                                                                 // 726
                                                                                                                       // 727
    /**                                                                                                                // 728
     * returns array of closest siblings with node                                                                     // 729
     *                                                                                                                 // 730
     * @param {Node} node                                                                                              // 731
     * @param {function} [pred] - predicate function                                                                   // 732
     * @return {Node[]}                                                                                                // 733
     */                                                                                                                // 734
    var withClosestSiblings = function (node, pred) {                                                                  // 735
      pred = pred || func.ok;                                                                                          // 736
                                                                                                                       // 737
      var siblings = [];                                                                                               // 738
      if (node.previousSibling && pred(node.previousSibling)) {                                                        // 739
        siblings.push(node.previousSibling);                                                                           // 740
      }                                                                                                                // 741
      siblings.push(node);                                                                                             // 742
      if (node.nextSibling && pred(node.nextSibling)) {                                                                // 743
        siblings.push(node.nextSibling);                                                                               // 744
      }                                                                                                                // 745
      return siblings;                                                                                                 // 746
    };                                                                                                                 // 747
                                                                                                                       // 748
    /**                                                                                                                // 749
     * blank HTML for cursor position                                                                                  // 750
     * - [workaround] old IE only works with &nbsp;                                                                    // 751
     * - [workaround] IE11 and other browser works with bogus br                                                       // 752
     */                                                                                                                // 753
    var blankHTML = agent.isMSIE && agent.browserVersion < 11 ? '&nbsp;' : '<br>';                                     // 754
                                                                                                                       // 755
    /**                                                                                                                // 756
     * @method nodeLength                                                                                              // 757
     *                                                                                                                 // 758
     * returns #text's text size or element's childNodes size                                                          // 759
     *                                                                                                                 // 760
     * @param {Node} node                                                                                              // 761
     */                                                                                                                // 762
    var nodeLength = function (node) {                                                                                 // 763
      if (isText(node)) {                                                                                              // 764
        return node.nodeValue.length;                                                                                  // 765
      }                                                                                                                // 766
                                                                                                                       // 767
      return node.childNodes.length;                                                                                   // 768
    };                                                                                                                 // 769
                                                                                                                       // 770
    /**                                                                                                                // 771
     * returns whether node is empty or not.                                                                           // 772
     *                                                                                                                 // 773
     * @param {Node} node                                                                                              // 774
     * @return {Boolean}                                                                                               // 775
     */                                                                                                                // 776
    var isEmpty = function (node) {                                                                                    // 777
      var len = nodeLength(node);                                                                                      // 778
                                                                                                                       // 779
      if (len === 0) {                                                                                                 // 780
        return true;                                                                                                   // 781
      } else if (!isText(node) && len === 1 && node.innerHTML === blankHTML) {                                         // 782
        // ex) <p><br></p>, <span><br></span>                                                                          // 783
        return true;                                                                                                   // 784
      } else if (list.all(node.childNodes, isText) && node.innerHTML === '') {                                         // 785
        // ex) <p></p>, <span></span>                                                                                  // 786
        return true;                                                                                                   // 787
      }                                                                                                                // 788
                                                                                                                       // 789
      return false;                                                                                                    // 790
    };                                                                                                                 // 791
                                                                                                                       // 792
    /**                                                                                                                // 793
     * padding blankHTML if node is empty (for cursor position)                                                        // 794
     */                                                                                                                // 795
    var paddingBlankHTML = function (node) {                                                                           // 796
      if (!isVoid(node) && !nodeLength(node)) {                                                                        // 797
        node.innerHTML = blankHTML;                                                                                    // 798
      }                                                                                                                // 799
    };                                                                                                                 // 800
                                                                                                                       // 801
    /**                                                                                                                // 802
     * find nearest ancestor predicate hit                                                                             // 803
     *                                                                                                                 // 804
     * @param {Node} node                                                                                              // 805
     * @param {Function} pred - predicate function                                                                     // 806
     */                                                                                                                // 807
    var ancestor = function (node, pred) {                                                                             // 808
      while (node) {                                                                                                   // 809
        if (pred(node)) { return node; }                                                                               // 810
        if (isEditable(node)) { break; }                                                                               // 811
                                                                                                                       // 812
        node = node.parentNode;                                                                                        // 813
      }                                                                                                                // 814
      return null;                                                                                                     // 815
    };                                                                                                                 // 816
                                                                                                                       // 817
    /**                                                                                                                // 818
     * find nearest ancestor only single child blood line and predicate hit                                            // 819
     *                                                                                                                 // 820
     * @param {Node} node                                                                                              // 821
     * @param {Function} pred - predicate function                                                                     // 822
     */                                                                                                                // 823
    var singleChildAncestor = function (node, pred) {                                                                  // 824
      node = node.parentNode;                                                                                          // 825
                                                                                                                       // 826
      while (node) {                                                                                                   // 827
        if (nodeLength(node) !== 1) { break; }                                                                         // 828
        if (pred(node)) { return node; }                                                                               // 829
        if (isEditable(node)) { break; }                                                                               // 830
                                                                                                                       // 831
        node = node.parentNode;                                                                                        // 832
      }                                                                                                                // 833
      return null;                                                                                                     // 834
    };                                                                                                                 // 835
                                                                                                                       // 836
    /**                                                                                                                // 837
     * returns new array of ancestor nodes (until predicate hit).                                                      // 838
     *                                                                                                                 // 839
     * @param {Node} node                                                                                              // 840
     * @param {Function} [optional] pred - predicate function                                                          // 841
     */                                                                                                                // 842
    var listAncestor = function (node, pred) {                                                                         // 843
      pred = pred || func.fail;                                                                                        // 844
                                                                                                                       // 845
      var ancestors = [];                                                                                              // 846
      ancestor(node, function (el) {                                                                                   // 847
        if (!isEditable(el)) {                                                                                         // 848
          ancestors.push(el);                                                                                          // 849
        }                                                                                                              // 850
                                                                                                                       // 851
        return pred(el);                                                                                               // 852
      });                                                                                                              // 853
      return ancestors;                                                                                                // 854
    };                                                                                                                 // 855
                                                                                                                       // 856
    /**                                                                                                                // 857
     * find farthest ancestor predicate hit                                                                            // 858
     */                                                                                                                // 859
    var lastAncestor = function (node, pred) {                                                                         // 860
      var ancestors = listAncestor(node);                                                                              // 861
      return list.last(ancestors.filter(pred));                                                                        // 862
    };                                                                                                                 // 863
                                                                                                                       // 864
    /**                                                                                                                // 865
     * returns common ancestor node between two nodes.                                                                 // 866
     *                                                                                                                 // 867
     * @param {Node} nodeA                                                                                             // 868
     * @param {Node} nodeB                                                                                             // 869
     */                                                                                                                // 870
    var commonAncestor = function (nodeA, nodeB) {                                                                     // 871
      var ancestors = listAncestor(nodeA);                                                                             // 872
      for (var n = nodeB; n; n = n.parentNode) {                                                                       // 873
        if ($.inArray(n, ancestors) > -1) { return n; }                                                                // 874
      }                                                                                                                // 875
      return null; // difference document area                                                                         // 876
    };                                                                                                                 // 877
                                                                                                                       // 878
    /**                                                                                                                // 879
     * listing all previous siblings (until predicate hit).                                                            // 880
     *                                                                                                                 // 881
     * @param {Node} node                                                                                              // 882
     * @param {Function} [optional] pred - predicate function                                                          // 883
     */                                                                                                                // 884
    var listPrev = function (node, pred) {                                                                             // 885
      pred = pred || func.fail;                                                                                        // 886
                                                                                                                       // 887
      var nodes = [];                                                                                                  // 888
      while (node) {                                                                                                   // 889
        if (pred(node)) { break; }                                                                                     // 890
        nodes.push(node);                                                                                              // 891
        node = node.previousSibling;                                                                                   // 892
      }                                                                                                                // 893
      return nodes;                                                                                                    // 894
    };                                                                                                                 // 895
                                                                                                                       // 896
    /**                                                                                                                // 897
     * listing next siblings (until predicate hit).                                                                    // 898
     *                                                                                                                 // 899
     * @param {Node} node                                                                                              // 900
     * @param {Function} [pred] - predicate function                                                                   // 901
     */                                                                                                                // 902
    var listNext = function (node, pred) {                                                                             // 903
      pred = pred || func.fail;                                                                                        // 904
                                                                                                                       // 905
      var nodes = [];                                                                                                  // 906
      while (node) {                                                                                                   // 907
        if (pred(node)) { break; }                                                                                     // 908
        nodes.push(node);                                                                                              // 909
        node = node.nextSibling;                                                                                       // 910
      }                                                                                                                // 911
      return nodes;                                                                                                    // 912
    };                                                                                                                 // 913
                                                                                                                       // 914
    /**                                                                                                                // 915
     * listing descendant nodes                                                                                        // 916
     *                                                                                                                 // 917
     * @param {Node} node                                                                                              // 918
     * @param {Function} [pred] - predicate function                                                                   // 919
     */                                                                                                                // 920
    var listDescendant = function (node, pred) {                                                                       // 921
      var descendents = [];                                                                                            // 922
      pred = pred || func.ok;                                                                                          // 923
                                                                                                                       // 924
      // start DFS(depth first search) with node                                                                       // 925
      (function fnWalk(current) {                                                                                      // 926
        if (node !== current && pred(current)) {                                                                       // 927
          descendents.push(current);                                                                                   // 928
        }                                                                                                              // 929
        for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {                                         // 930
          fnWalk(current.childNodes[idx]);                                                                             // 931
        }                                                                                                              // 932
      })(node);                                                                                                        // 933
                                                                                                                       // 934
      return descendents;                                                                                              // 935
    };                                                                                                                 // 936
                                                                                                                       // 937
    /**                                                                                                                // 938
     * wrap node with new tag.                                                                                         // 939
     *                                                                                                                 // 940
     * @param {Node} node                                                                                              // 941
     * @param {Node} tagName of wrapper                                                                                // 942
     * @return {Node} - wrapper                                                                                        // 943
     */                                                                                                                // 944
    var wrap = function (node, wrapperName) {                                                                          // 945
      var parent = node.parentNode;                                                                                    // 946
      var wrapper = $('<' + wrapperName + '>')[0];                                                                     // 947
                                                                                                                       // 948
      parent.insertBefore(wrapper, node);                                                                              // 949
      wrapper.appendChild(node);                                                                                       // 950
                                                                                                                       // 951
      return wrapper;                                                                                                  // 952
    };                                                                                                                 // 953
                                                                                                                       // 954
    /**                                                                                                                // 955
     * insert node after preceding                                                                                     // 956
     *                                                                                                                 // 957
     * @param {Node} node                                                                                              // 958
     * @param {Node} preceding - predicate function                                                                    // 959
     */                                                                                                                // 960
    var insertAfter = function (node, preceding) {                                                                     // 961
      var next = preceding.nextSibling, parent = preceding.parentNode;                                                 // 962
      if (next) {                                                                                                      // 963
        parent.insertBefore(node, next);                                                                               // 964
      } else {                                                                                                         // 965
        parent.appendChild(node);                                                                                      // 966
      }                                                                                                                // 967
      return node;                                                                                                     // 968
    };                                                                                                                 // 969
                                                                                                                       // 970
    /**                                                                                                                // 971
     * append elements.                                                                                                // 972
     *                                                                                                                 // 973
     * @param {Node} node                                                                                              // 974
     * @param {Collection} aChild                                                                                      // 975
     */                                                                                                                // 976
    var appendChildNodes = function (node, aChild) {                                                                   // 977
      $.each(aChild, function (idx, child) {                                                                           // 978
        node.appendChild(child);                                                                                       // 979
      });                                                                                                              // 980
      return node;                                                                                                     // 981
    };                                                                                                                 // 982
                                                                                                                       // 983
    /**                                                                                                                // 984
     * returns whether boundaryPoint is left edge or not.                                                              // 985
     *                                                                                                                 // 986
     * @param {BoundaryPoint} point                                                                                    // 987
     * @return {Boolean}                                                                                               // 988
     */                                                                                                                // 989
    var isLeftEdgePoint = function (point) {                                                                           // 990
      return point.offset === 0;                                                                                       // 991
    };                                                                                                                 // 992
                                                                                                                       // 993
    /**                                                                                                                // 994
     * returns whether boundaryPoint is right edge or not.                                                             // 995
     *                                                                                                                 // 996
     * @param {BoundaryPoint} point                                                                                    // 997
     * @return {Boolean}                                                                                               // 998
     */                                                                                                                // 999
    var isRightEdgePoint = function (point) {                                                                          // 1000
      return point.offset === nodeLength(point.node);                                                                  // 1001
    };                                                                                                                 // 1002
                                                                                                                       // 1003
    /**                                                                                                                // 1004
     * returns whether boundaryPoint is edge or not.                                                                   // 1005
     *                                                                                                                 // 1006
     * @param {BoundaryPoint} point                                                                                    // 1007
     * @return {Boolean}                                                                                               // 1008
     */                                                                                                                // 1009
    var isEdgePoint = function (point) {                                                                               // 1010
      return isLeftEdgePoint(point) || isRightEdgePoint(point);                                                        // 1011
    };                                                                                                                 // 1012
                                                                                                                       // 1013
    /**                                                                                                                // 1014
     * returns wheter node is left edge of ancestor or not.                                                            // 1015
     *                                                                                                                 // 1016
     * @param {Node} node                                                                                              // 1017
     * @param {Node} ancestor                                                                                          // 1018
     * @return {Boolean}                                                                                               // 1019
     */                                                                                                                // 1020
    var isLeftEdgeOf = function (node, ancestor) {                                                                     // 1021
      while (node && node !== ancestor) {                                                                              // 1022
        if (position(node) !== 0) {                                                                                    // 1023
          return false;                                                                                                // 1024
        }                                                                                                              // 1025
        node = node.parentNode;                                                                                        // 1026
      }                                                                                                                // 1027
                                                                                                                       // 1028
      return true;                                                                                                     // 1029
    };                                                                                                                 // 1030
                                                                                                                       // 1031
    /**                                                                                                                // 1032
     * returns whether node is right edge of ancestor or not.                                                          // 1033
     *                                                                                                                 // 1034
     * @param {Node} node                                                                                              // 1035
     * @param {Node} ancestor                                                                                          // 1036
     * @return {Boolean}                                                                                               // 1037
     */                                                                                                                // 1038
    var isRightEdgeOf = function (node, ancestor) {                                                                    // 1039
      while (node && node !== ancestor) {                                                                              // 1040
        if (position(node) !== nodeLength(node.parentNode) - 1) {                                                      // 1041
          return false;                                                                                                // 1042
        }                                                                                                              // 1043
        node = node.parentNode;                                                                                        // 1044
      }                                                                                                                // 1045
                                                                                                                       // 1046
      return true;                                                                                                     // 1047
    };                                                                                                                 // 1048
                                                                                                                       // 1049
    /**                                                                                                                // 1050
     * returns whether point is left edge of ancestor or not.                                                          // 1051
     * @param {BoundaryPoint} point                                                                                    // 1052
     * @param {Node} ancestor                                                                                          // 1053
     * @return {Boolean}                                                                                               // 1054
     */                                                                                                                // 1055
    var isLeftEdgePointOf = function (point, ancestor) {                                                               // 1056
      return isLeftEdgePoint(point) && isLeftEdgeOf(point.node, ancestor);                                             // 1057
    };                                                                                                                 // 1058
                                                                                                                       // 1059
    /**                                                                                                                // 1060
     * returns whether point is right edge of ancestor or not.                                                         // 1061
     * @param {BoundaryPoint} point                                                                                    // 1062
     * @param {Node} ancestor                                                                                          // 1063
     * @return {Boolean}                                                                                               // 1064
     */                                                                                                                // 1065
    var isRightEdgePointOf = function (point, ancestor) {                                                              // 1066
      return isRightEdgePoint(point) && isRightEdgeOf(point.node, ancestor);                                           // 1067
    };                                                                                                                 // 1068
                                                                                                                       // 1069
    /**                                                                                                                // 1070
     * returns offset from parent.                                                                                     // 1071
     *                                                                                                                 // 1072
     * @param {Node} node                                                                                              // 1073
     */                                                                                                                // 1074
    var position = function (node) {                                                                                   // 1075
      var offset = 0;                                                                                                  // 1076
      while ((node = node.previousSibling)) {                                                                          // 1077
        offset += 1;                                                                                                   // 1078
      }                                                                                                                // 1079
      return offset;                                                                                                   // 1080
    };                                                                                                                 // 1081
                                                                                                                       // 1082
    var hasChildren = function (node) {                                                                                // 1083
      return !!(node && node.childNodes && node.childNodes.length);                                                    // 1084
    };                                                                                                                 // 1085
                                                                                                                       // 1086
    /**                                                                                                                // 1087
     * returns previous boundaryPoint                                                                                  // 1088
     *                                                                                                                 // 1089
     * @param {BoundaryPoint} point                                                                                    // 1090
     * @param {Boolean} isSkipInnerOffset                                                                              // 1091
     * @return {BoundaryPoint}                                                                                         // 1092
     */                                                                                                                // 1093
    var prevPoint = function (point, isSkipInnerOffset) {                                                              // 1094
      var node, offset;                                                                                                // 1095
                                                                                                                       // 1096
      if (point.offset === 0) {                                                                                        // 1097
        if (isEditable(point.node)) {                                                                                  // 1098
          return null;                                                                                                 // 1099
        }                                                                                                              // 1100
                                                                                                                       // 1101
        node = point.node.parentNode;                                                                                  // 1102
        offset = position(point.node);                                                                                 // 1103
      } else if (hasChildren(point.node)) {                                                                            // 1104
        node = point.node.childNodes[point.offset - 1];                                                                // 1105
        offset = nodeLength(node);                                                                                     // 1106
      } else {                                                                                                         // 1107
        node = point.node;                                                                                             // 1108
        offset = isSkipInnerOffset ? 0 : point.offset - 1;                                                             // 1109
      }                                                                                                                // 1110
                                                                                                                       // 1111
      return {                                                                                                         // 1112
        node: node,                                                                                                    // 1113
        offset: offset                                                                                                 // 1114
      };                                                                                                               // 1115
    };                                                                                                                 // 1116
                                                                                                                       // 1117
    /**                                                                                                                // 1118
     * returns next boundaryPoint                                                                                      // 1119
     *                                                                                                                 // 1120
     * @param {BoundaryPoint} point                                                                                    // 1121
     * @param {Boolean} isSkipInnerOffset                                                                              // 1122
     * @return {BoundaryPoint}                                                                                         // 1123
     */                                                                                                                // 1124
    var nextPoint = function (point, isSkipInnerOffset) {                                                              // 1125
      var node, offset;                                                                                                // 1126
                                                                                                                       // 1127
      if (nodeLength(point.node) === point.offset) {                                                                   // 1128
        if (isEditable(point.node)) {                                                                                  // 1129
          return null;                                                                                                 // 1130
        }                                                                                                              // 1131
                                                                                                                       // 1132
        node = point.node.parentNode;                                                                                  // 1133
        offset = position(point.node) + 1;                                                                             // 1134
      } else if (hasChildren(point.node)) {                                                                            // 1135
        node = point.node.childNodes[point.offset];                                                                    // 1136
        offset = 0;                                                                                                    // 1137
      } else {                                                                                                         // 1138
        node = point.node;                                                                                             // 1139
        offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;                                        // 1140
      }                                                                                                                // 1141
                                                                                                                       // 1142
      return {                                                                                                         // 1143
        node: node,                                                                                                    // 1144
        offset: offset                                                                                                 // 1145
      };                                                                                                               // 1146
    };                                                                                                                 // 1147
                                                                                                                       // 1148
    /**                                                                                                                // 1149
     * returns whether pointA and pointB is same or not.                                                               // 1150
     *                                                                                                                 // 1151
     * @param {BoundaryPoint} pointA                                                                                   // 1152
     * @param {BoundaryPoint} pointB                                                                                   // 1153
     * @return {Boolean}                                                                                               // 1154
     */                                                                                                                // 1155
    var isSamePoint = function (pointA, pointB) {                                                                      // 1156
      return pointA.node === pointB.node && pointA.offset === pointB.offset;                                           // 1157
    };                                                                                                                 // 1158
                                                                                                                       // 1159
    /**                                                                                                                // 1160
     * returns whether point is visible (can set cursor) or not.                                                       // 1161
     *                                                                                                                 // 1162
     * @param {BoundaryPoint} point                                                                                    // 1163
     * @return {Boolean}                                                                                               // 1164
     */                                                                                                                // 1165
    var isVisiblePoint = function (point) {                                                                            // 1166
      if (isText(point.node) || !hasChildren(point.node) || isEmpty(point.node)) {                                     // 1167
        return true;                                                                                                   // 1168
      }                                                                                                                // 1169
                                                                                                                       // 1170
      var leftNode = point.node.childNodes[point.offset - 1];                                                          // 1171
      var rightNode = point.node.childNodes[point.offset];                                                             // 1172
      if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode))) {                                      // 1173
        return true;                                                                                                   // 1174
      }                                                                                                                // 1175
                                                                                                                       // 1176
      return false;                                                                                                    // 1177
    };                                                                                                                 // 1178
                                                                                                                       // 1179
    /**                                                                                                                // 1180
     * @method prevPointUtil                                                                                           // 1181
     *                                                                                                                 // 1182
     * @param {BoundaryPoint} point                                                                                    // 1183
     * @param {Function} pred                                                                                          // 1184
     * @return {BoundaryPoint}                                                                                         // 1185
     */                                                                                                                // 1186
    var prevPointUntil = function (point, pred) {                                                                      // 1187
      while (point) {                                                                                                  // 1188
        if (pred(point)) {                                                                                             // 1189
          return point;                                                                                                // 1190
        }                                                                                                              // 1191
                                                                                                                       // 1192
        point = prevPoint(point);                                                                                      // 1193
      }                                                                                                                // 1194
                                                                                                                       // 1195
      return null;                                                                                                     // 1196
    };                                                                                                                 // 1197
                                                                                                                       // 1198
    /**                                                                                                                // 1199
     * @method nextPointUntil                                                                                          // 1200
     *                                                                                                                 // 1201
     * @param {BoundaryPoint} point                                                                                    // 1202
     * @param {Function} pred                                                                                          // 1203
     * @return {BoundaryPoint}                                                                                         // 1204
     */                                                                                                                // 1205
    var nextPointUntil = function (point, pred) {                                                                      // 1206
      while (point) {                                                                                                  // 1207
        if (pred(point)) {                                                                                             // 1208
          return point;                                                                                                // 1209
        }                                                                                                              // 1210
                                                                                                                       // 1211
        point = nextPoint(point);                                                                                      // 1212
      }                                                                                                                // 1213
                                                                                                                       // 1214
      return null;                                                                                                     // 1215
    };                                                                                                                 // 1216
                                                                                                                       // 1217
    /**                                                                                                                // 1218
     * returns whether point has character or not.                                                                     // 1219
     *                                                                                                                 // 1220
     * @param {Point} point                                                                                            // 1221
     * @return {Boolean}                                                                                               // 1222
     */                                                                                                                // 1223
    var isCharPoint = function (point) {                                                                               // 1224
      if (!isText(point.node)) {                                                                                       // 1225
        return false;                                                                                                  // 1226
      }                                                                                                                // 1227
                                                                                                                       // 1228
      var ch = point.node.nodeValue.charAt(point.offset - 1);                                                          // 1229
      return ch && (ch !== ' ' && ch !== NBSP_CHAR);                                                                   // 1230
    };                                                                                                                 // 1231
                                                                                                                       // 1232
    /**                                                                                                                // 1233
     * @method walkPoint                                                                                               // 1234
     *                                                                                                                 // 1235
     * @param {BoundaryPoint} startPoint                                                                               // 1236
     * @param {BoundaryPoint} endPoint                                                                                 // 1237
     * @param {Function} handler                                                                                       // 1238
     * @param {Boolean} isSkipInnerOffset                                                                              // 1239
     */                                                                                                                // 1240
    var walkPoint = function (startPoint, endPoint, handler, isSkipInnerOffset) {                                      // 1241
      var point = startPoint;                                                                                          // 1242
                                                                                                                       // 1243
      while (point) {                                                                                                  // 1244
        handler(point);                                                                                                // 1245
                                                                                                                       // 1246
        if (isSamePoint(point, endPoint)) {                                                                            // 1247
          break;                                                                                                       // 1248
        }                                                                                                              // 1249
                                                                                                                       // 1250
        var isSkipOffset = isSkipInnerOffset &&                                                                        // 1251
                           startPoint.node !== point.node &&                                                           // 1252
                           endPoint.node !== point.node;                                                               // 1253
        point = nextPoint(point, isSkipOffset);                                                                        // 1254
      }                                                                                                                // 1255
    };                                                                                                                 // 1256
                                                                                                                       // 1257
    /**                                                                                                                // 1258
     * @method makeOffsetPath                                                                                          // 1259
     *                                                                                                                 // 1260
     * return offsetPath(array of offset) from ancestor                                                                // 1261
     *                                                                                                                 // 1262
     * @param {Node} ancestor - ancestor node                                                                          // 1263
     * @param {Node} node                                                                                              // 1264
     */                                                                                                                // 1265
    var makeOffsetPath = function (ancestor, node) {                                                                   // 1266
      var ancestors = listAncestor(node, func.eq(ancestor));                                                           // 1267
      return ancestors.map(position).reverse();                                                                        // 1268
    };                                                                                                                 // 1269
                                                                                                                       // 1270
    /**                                                                                                                // 1271
     * @method fromOffsetPath                                                                                          // 1272
     *                                                                                                                 // 1273
     * return element from offsetPath(array of offset)                                                                 // 1274
     *                                                                                                                 // 1275
     * @param {Node} ancestor - ancestor node                                                                          // 1276
     * @param {array} offsets - offsetPath                                                                             // 1277
     */                                                                                                                // 1278
    var fromOffsetPath = function (ancestor, offsets) {                                                                // 1279
      var current = ancestor;                                                                                          // 1280
      for (var i = 0, len = offsets.length; i < len; i++) {                                                            // 1281
        if (current.childNodes.length <= offsets[i]) {                                                                 // 1282
          current = current.childNodes[current.childNodes.length - 1];                                                 // 1283
        } else {                                                                                                       // 1284
          current = current.childNodes[offsets[i]];                                                                    // 1285
        }                                                                                                              // 1286
      }                                                                                                                // 1287
      return current;                                                                                                  // 1288
    };                                                                                                                 // 1289
                                                                                                                       // 1290
    /**                                                                                                                // 1291
     * @method splitNode                                                                                               // 1292
     *                                                                                                                 // 1293
     * split element or #text                                                                                          // 1294
     *                                                                                                                 // 1295
     * @param {BoundaryPoint} point                                                                                    // 1296
     * @param {Object} [options]                                                                                       // 1297
     * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false                                              // 1298
     * @param {Boolean} [options.isNotSplitEdgePoint] - default: false                                                 // 1299
     * @return {Node} right node of boundaryPoint                                                                      // 1300
     */                                                                                                                // 1301
    var splitNode = function (point, options) {                                                                        // 1302
      var isSkipPaddingBlankHTML = options && options.isSkipPaddingBlankHTML;                                          // 1303
      var isNotSplitEdgePoint = options && options.isNotSplitEdgePoint;                                                // 1304
                                                                                                                       // 1305
      // edge case                                                                                                     // 1306
      if (isEdgePoint(point) && (isText(point.node) || isNotSplitEdgePoint)) {                                         // 1307
        if (isLeftEdgePoint(point)) {                                                                                  // 1308
          return point.node;                                                                                           // 1309
        } else if (isRightEdgePoint(point)) {                                                                          // 1310
          return point.node.nextSibling;                                                                               // 1311
        }                                                                                                              // 1312
      }                                                                                                                // 1313
                                                                                                                       // 1314
      // split #text                                                                                                   // 1315
      if (isText(point.node)) {                                                                                        // 1316
        return point.node.splitText(point.offset);                                                                     // 1317
      } else {                                                                                                         // 1318
        var childNode = point.node.childNodes[point.offset];                                                           // 1319
        var clone = insertAfter(point.node.cloneNode(false), point.node);                                              // 1320
        appendChildNodes(clone, listNext(childNode));                                                                  // 1321
                                                                                                                       // 1322
        if (!isSkipPaddingBlankHTML) {                                                                                 // 1323
          paddingBlankHTML(point.node);                                                                                // 1324
          paddingBlankHTML(clone);                                                                                     // 1325
        }                                                                                                              // 1326
                                                                                                                       // 1327
        return clone;                                                                                                  // 1328
      }                                                                                                                // 1329
    };                                                                                                                 // 1330
                                                                                                                       // 1331
    /**                                                                                                                // 1332
     * @method splitTree                                                                                               // 1333
     *                                                                                                                 // 1334
     * split tree by point                                                                                             // 1335
     *                                                                                                                 // 1336
     * @param {Node} root - split root                                                                                 // 1337
     * @param {BoundaryPoint} point                                                                                    // 1338
     * @param {Object} [options]                                                                                       // 1339
     * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false                                              // 1340
     * @param {Boolean} [options.isNotSplitEdgePoint] - default: false                                                 // 1341
     * @return {Node} right node of boundaryPoint                                                                      // 1342
     */                                                                                                                // 1343
    var splitTree = function (root, point, options) {                                                                  // 1344
      // ex) [#text, <span>, <p>]                                                                                      // 1345
      var ancestors = listAncestor(point.node, func.eq(root));                                                         // 1346
                                                                                                                       // 1347
      if (!ancestors.length) {                                                                                         // 1348
        return null;                                                                                                   // 1349
      } else if (ancestors.length === 1) {                                                                             // 1350
        return splitNode(point, options);                                                                              // 1351
      }                                                                                                                // 1352
                                                                                                                       // 1353
      return ancestors.reduce(function (node, parent) {                                                                // 1354
        if (node === point.node) {                                                                                     // 1355
          node = splitNode(point, options);                                                                            // 1356
        }                                                                                                              // 1357
                                                                                                                       // 1358
        return splitNode({                                                                                             // 1359
          node: parent,                                                                                                // 1360
          offset: node ? dom.position(node) : nodeLength(parent)                                                       // 1361
        }, options);                                                                                                   // 1362
      });                                                                                                              // 1363
    };                                                                                                                 // 1364
                                                                                                                       // 1365
    /**                                                                                                                // 1366
     * split point                                                                                                     // 1367
     *                                                                                                                 // 1368
     * @param {Point} point                                                                                            // 1369
     * @param {Boolean} isInline                                                                                       // 1370
     * @return {Object}                                                                                                // 1371
     */                                                                                                                // 1372
    var splitPoint = function (point, isInline) {                                                                      // 1373
      // find splitRoot, container                                                                                     // 1374
      //  - inline: splitRoot is a child of paragraph                                                                  // 1375
      //  - block: splitRoot is a child of bodyContainer                                                               // 1376
      var pred = isInline ? isPara : isBodyContainer;                                                                  // 1377
      var ancestors = listAncestor(point.node, pred);                                                                  // 1378
      var topAncestor = list.last(ancestors) || point.node;                                                            // 1379
                                                                                                                       // 1380
      var splitRoot, container;                                                                                        // 1381
      if (pred(topAncestor)) {                                                                                         // 1382
        splitRoot = ancestors[ancestors.length - 2];                                                                   // 1383
        container = topAncestor;                                                                                       // 1384
      } else {                                                                                                         // 1385
        splitRoot = topAncestor;                                                                                       // 1386
        container = splitRoot.parentNode;                                                                              // 1387
      }                                                                                                                // 1388
                                                                                                                       // 1389
      // if splitRoot is exists, split with splitTree                                                                  // 1390
      var pivot = splitRoot && splitTree(splitRoot, point, {                                                           // 1391
        isSkipPaddingBlankHTML: isInline,                                                                              // 1392
        isNotSplitEdgePoint: isInline                                                                                  // 1393
      });                                                                                                              // 1394
                                                                                                                       // 1395
      // if container is point.node, find pivot with point.offset                                                      // 1396
      if (!pivot && container === point.node) {                                                                        // 1397
        pivot = point.node.childNodes[point.offset];                                                                   // 1398
      }                                                                                                                // 1399
                                                                                                                       // 1400
      return {                                                                                                         // 1401
        rightNode: pivot,                                                                                              // 1402
        container: container                                                                                           // 1403
      };                                                                                                               // 1404
    };                                                                                                                 // 1405
                                                                                                                       // 1406
    var create = function (nodeName) {                                                                                 // 1407
      return document.createElement(nodeName);                                                                         // 1408
    };                                                                                                                 // 1409
                                                                                                                       // 1410
    var createText = function (text) {                                                                                 // 1411
      return document.createTextNode(text);                                                                            // 1412
    };                                                                                                                 // 1413
                                                                                                                       // 1414
    /**                                                                                                                // 1415
     * @method remove                                                                                                  // 1416
     *                                                                                                                 // 1417
     * remove node, (isRemoveChild: remove child or not)                                                               // 1418
     *                                                                                                                 // 1419
     * @param {Node} node                                                                                              // 1420
     * @param {Boolean} isRemoveChild                                                                                  // 1421
     */                                                                                                                // 1422
    var remove = function (node, isRemoveChild) {                                                                      // 1423
      if (!node || !node.parentNode) { return; }                                                                       // 1424
      if (node.removeNode) { return node.removeNode(isRemoveChild); }                                                  // 1425
                                                                                                                       // 1426
      var parent = node.parentNode;                                                                                    // 1427
      if (!isRemoveChild) {                                                                                            // 1428
        var nodes = [];                                                                                                // 1429
        var i, len;                                                                                                    // 1430
        for (i = 0, len = node.childNodes.length; i < len; i++) {                                                      // 1431
          nodes.push(node.childNodes[i]);                                                                              // 1432
        }                                                                                                              // 1433
                                                                                                                       // 1434
        for (i = 0, len = nodes.length; i < len; i++) {                                                                // 1435
          parent.insertBefore(nodes[i], node);                                                                         // 1436
        }                                                                                                              // 1437
      }                                                                                                                // 1438
                                                                                                                       // 1439
      parent.removeChild(node);                                                                                        // 1440
    };                                                                                                                 // 1441
                                                                                                                       // 1442
    /**                                                                                                                // 1443
     * @method removeWhile                                                                                             // 1444
     *                                                                                                                 // 1445
     * @param {Node} node                                                                                              // 1446
     * @param {Function} pred                                                                                          // 1447
     */                                                                                                                // 1448
    var removeWhile = function (node, pred) {                                                                          // 1449
      while (node) {                                                                                                   // 1450
        if (isEditable(node) || !pred(node)) {                                                                         // 1451
          break;                                                                                                       // 1452
        }                                                                                                              // 1453
                                                                                                                       // 1454
        var parent = node.parentNode;                                                                                  // 1455
        remove(node);                                                                                                  // 1456
        node = parent;                                                                                                 // 1457
      }                                                                                                                // 1458
    };                                                                                                                 // 1459
                                                                                                                       // 1460
    /**                                                                                                                // 1461
     * @method replace                                                                                                 // 1462
     *                                                                                                                 // 1463
     * replace node with provided nodeName                                                                             // 1464
     *                                                                                                                 // 1465
     * @param {Node} node                                                                                              // 1466
     * @param {String} nodeName                                                                                        // 1467
     * @return {Node} - new node                                                                                       // 1468
     */                                                                                                                // 1469
    var replace = function (node, nodeName) {                                                                          // 1470
      if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {                                                    // 1471
        return node;                                                                                                   // 1472
      }                                                                                                                // 1473
                                                                                                                       // 1474
      var newNode = create(nodeName);                                                                                  // 1475
                                                                                                                       // 1476
      if (node.style.cssText) {                                                                                        // 1477
        newNode.style.cssText = node.style.cssText;                                                                    // 1478
      }                                                                                                                // 1479
                                                                                                                       // 1480
      appendChildNodes(newNode, list.from(node.childNodes));                                                           // 1481
      insertAfter(newNode, node);                                                                                      // 1482
      remove(node);                                                                                                    // 1483
                                                                                                                       // 1484
      return newNode;                                                                                                  // 1485
    };                                                                                                                 // 1486
                                                                                                                       // 1487
    var isTextarea = makePredByNodeName('TEXTAREA');                                                                   // 1488
                                                                                                                       // 1489
    /**                                                                                                                // 1490
     * @param {jQuery} $node                                                                                           // 1491
     * @param {Boolean} [stripLinebreaks] - default: false                                                             // 1492
     */                                                                                                                // 1493
    var value = function ($node, stripLinebreaks) {                                                                    // 1494
      var val = isTextarea($node[0]) ? $node.val() : $node.html();                                                     // 1495
      if (stripLinebreaks) {                                                                                           // 1496
        return val.replace(/[\n\r]/g, '');                                                                             // 1497
      }                                                                                                                // 1498
      return val;                                                                                                      // 1499
    };                                                                                                                 // 1500
                                                                                                                       // 1501
    /**                                                                                                                // 1502
     * @method html                                                                                                    // 1503
     *                                                                                                                 // 1504
     * get the HTML contents of node                                                                                   // 1505
     *                                                                                                                 // 1506
     * @param {jQuery} $node                                                                                           // 1507
     * @param {Boolean} [isNewlineOnBlock]                                                                             // 1508
     */                                                                                                                // 1509
    var html = function ($node, isNewlineOnBlock) {                                                                    // 1510
      var markup = value($node);                                                                                       // 1511
                                                                                                                       // 1512
      if (isNewlineOnBlock) {                                                                                          // 1513
        var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;                                                        // 1514
        markup = markup.replace(regexTag, function (match, endSlash, name) {                                           // 1515
          name = name.toUpperCase();                                                                                   // 1516
          var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) &&                                     // 1517
                                       !!endSlash;                                                                     // 1518
          var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);                                    // 1519
                                                                                                                       // 1520
          return match + ((isEndOfInlineContainer || isBlockNode) ? '\n' : '');                                        // 1521
        });                                                                                                            // 1522
        markup = $.trim(markup);                                                                                       // 1523
      }                                                                                                                // 1524
                                                                                                                       // 1525
      return markup;                                                                                                   // 1526
    };                                                                                                                 // 1527
                                                                                                                       // 1528
    return {                                                                                                           // 1529
      /** @property {String} NBSP_CHAR */                                                                              // 1530
      NBSP_CHAR: NBSP_CHAR,                                                                                            // 1531
      /** @property {String} ZERO_WIDTH_NBSP_CHAR */                                                                   // 1532
      ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,                                                                      // 1533
      /** @property {String} blank */                                                                                  // 1534
      blank: blankHTML,                                                                                                // 1535
      /** @property {String} emptyPara */                                                                              // 1536
      emptyPara: '<p>' + blankHTML + '</p>',                                                                           // 1537
      makePredByNodeName: makePredByNodeName,                                                                          // 1538
      isEditable: isEditable,                                                                                          // 1539
      isControlSizing: isControlSizing,                                                                                // 1540
      buildLayoutInfo: buildLayoutInfo,                                                                                // 1541
      makeLayoutInfo: makeLayoutInfo,                                                                                  // 1542
      isText: isText,                                                                                                  // 1543
      isVoid: isVoid,                                                                                                  // 1544
      isPara: isPara,                                                                                                  // 1545
      isPurePara: isPurePara,                                                                                          // 1546
      isInline: isInline,                                                                                              // 1547
      isBlock: func.not(isInline),                                                                                     // 1548
      isBodyInline: isBodyInline,                                                                                      // 1549
      isBody: isBody,                                                                                                  // 1550
      isParaInline: isParaInline,                                                                                      // 1551
      isList: isList,                                                                                                  // 1552
      isTable: isTable,                                                                                                // 1553
      isCell: isCell,                                                                                                  // 1554
      isBlockquote: isBlockquote,                                                                                      // 1555
      isBodyContainer: isBodyContainer,                                                                                // 1556
      isAnchor: isAnchor,                                                                                              // 1557
      isDiv: makePredByNodeName('DIV'),                                                                                // 1558
      isLi: isLi,                                                                                                      // 1559
      isBR: makePredByNodeName('BR'),                                                                                  // 1560
      isSpan: makePredByNodeName('SPAN'),                                                                              // 1561
      isB: makePredByNodeName('B'),                                                                                    // 1562
      isU: makePredByNodeName('U'),                                                                                    // 1563
      isS: makePredByNodeName('S'),                                                                                    // 1564
      isI: makePredByNodeName('I'),                                                                                    // 1565
      isImg: makePredByNodeName('IMG'),                                                                                // 1566
      isTextarea: isTextarea,                                                                                          // 1567
      isEmpty: isEmpty,                                                                                                // 1568
      isEmptyAnchor: func.and(isAnchor, isEmpty),                                                                      // 1569
      isClosestSibling: isClosestSibling,                                                                              // 1570
      withClosestSiblings: withClosestSiblings,                                                                        // 1571
      nodeLength: nodeLength,                                                                                          // 1572
      isLeftEdgePoint: isLeftEdgePoint,                                                                                // 1573
      isRightEdgePoint: isRightEdgePoint,                                                                              // 1574
      isEdgePoint: isEdgePoint,                                                                                        // 1575
      isLeftEdgeOf: isLeftEdgeOf,                                                                                      // 1576
      isRightEdgeOf: isRightEdgeOf,                                                                                    // 1577
      isLeftEdgePointOf: isLeftEdgePointOf,                                                                            // 1578
      isRightEdgePointOf: isRightEdgePointOf,                                                                          // 1579
      prevPoint: prevPoint,                                                                                            // 1580
      nextPoint: nextPoint,                                                                                            // 1581
      isSamePoint: isSamePoint,                                                                                        // 1582
      isVisiblePoint: isVisiblePoint,                                                                                  // 1583
      prevPointUntil: prevPointUntil,                                                                                  // 1584
      nextPointUntil: nextPointUntil,                                                                                  // 1585
      isCharPoint: isCharPoint,                                                                                        // 1586
      walkPoint: walkPoint,                                                                                            // 1587
      ancestor: ancestor,                                                                                              // 1588
      singleChildAncestor: singleChildAncestor,                                                                        // 1589
      listAncestor: listAncestor,                                                                                      // 1590
      lastAncestor: lastAncestor,                                                                                      // 1591
      listNext: listNext,                                                                                              // 1592
      listPrev: listPrev,                                                                                              // 1593
      listDescendant: listDescendant,                                                                                  // 1594
      commonAncestor: commonAncestor,                                                                                  // 1595
      wrap: wrap,                                                                                                      // 1596
      insertAfter: insertAfter,                                                                                        // 1597
      appendChildNodes: appendChildNodes,                                                                              // 1598
      position: position,                                                                                              // 1599
      hasChildren: hasChildren,                                                                                        // 1600
      makeOffsetPath: makeOffsetPath,                                                                                  // 1601
      fromOffsetPath: fromOffsetPath,                                                                                  // 1602
      splitTree: splitTree,                                                                                            // 1603
      splitPoint: splitPoint,                                                                                          // 1604
      create: create,                                                                                                  // 1605
      createText: createText,                                                                                          // 1606
      remove: remove,                                                                                                  // 1607
      removeWhile: removeWhile,                                                                                        // 1608
      replace: replace,                                                                                                // 1609
      html: html,                                                                                                      // 1610
      value: value                                                                                                     // 1611
    };                                                                                                                 // 1612
  })();                                                                                                                // 1613
                                                                                                                       // 1614
                                                                                                                       // 1615
  var range = (function () {                                                                                           // 1616
                                                                                                                       // 1617
    /**                                                                                                                // 1618
     * return boundaryPoint from TextRange, inspired by Andy Na's HuskyRange.js                                        // 1619
     *                                                                                                                 // 1620
     * @param {TextRange} textRange                                                                                    // 1621
     * @param {Boolean} isStart                                                                                        // 1622
     * @return {BoundaryPoint}                                                                                         // 1623
     *                                                                                                                 // 1624
     * @see http://msdn.microsoft.com/en-us/library/ie/ms535872(v=vs.85).aspx                                          // 1625
     */                                                                                                                // 1626
    var textRangeToPoint = function (textRange, isStart) {                                                             // 1627
      var container = textRange.parentElement(), offset;                                                               // 1628
                                                                                                                       // 1629
      var tester = document.body.createTextRange(), prevContainer;                                                     // 1630
      var childNodes = list.from(container.childNodes);                                                                // 1631
      for (offset = 0; offset < childNodes.length; offset++) {                                                         // 1632
        if (dom.isText(childNodes[offset])) {                                                                          // 1633
          continue;                                                                                                    // 1634
        }                                                                                                              // 1635
        tester.moveToElementText(childNodes[offset]);                                                                  // 1636
        if (tester.compareEndPoints('StartToStart', textRange) >= 0) {                                                 // 1637
          break;                                                                                                       // 1638
        }                                                                                                              // 1639
        prevContainer = childNodes[offset];                                                                            // 1640
      }                                                                                                                // 1641
                                                                                                                       // 1642
      if (offset !== 0 && dom.isText(childNodes[offset - 1])) {                                                        // 1643
        var textRangeStart = document.body.createTextRange(), curTextNode = null;                                      // 1644
        textRangeStart.moveToElementText(prevContainer || container);                                                  // 1645
        textRangeStart.collapse(!prevContainer);                                                                       // 1646
        curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;                                // 1647
                                                                                                                       // 1648
        var pointTester = textRange.duplicate();                                                                       // 1649
        pointTester.setEndPoint('StartToStart', textRangeStart);                                                       // 1650
        var textCount = pointTester.text.replace(/[\r\n]/g, '').length;                                                // 1651
                                                                                                                       // 1652
        while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {                                  // 1653
          textCount -= curTextNode.nodeValue.length;                                                                   // 1654
          curTextNode = curTextNode.nextSibling;                                                                       // 1655
        }                                                                                                              // 1656
                                                                                                                       // 1657
        /* jshint ignore:start */                                                                                      // 1658
        var dummy = curTextNode.nodeValue; // enforce IE to re-reference curTextNode, hack                             // 1659
        /* jshint ignore:end */                                                                                        // 1660
                                                                                                                       // 1661
        if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) &&                               // 1662
            textCount === curTextNode.nodeValue.length) {                                                              // 1663
          textCount -= curTextNode.nodeValue.length;                                                                   // 1664
          curTextNode = curTextNode.nextSibling;                                                                       // 1665
        }                                                                                                              // 1666
                                                                                                                       // 1667
        container = curTextNode;                                                                                       // 1668
        offset = textCount;                                                                                            // 1669
      }                                                                                                                // 1670
                                                                                                                       // 1671
      return {                                                                                                         // 1672
        cont: container,                                                                                               // 1673
        offset: offset                                                                                                 // 1674
      };                                                                                                               // 1675
    };                                                                                                                 // 1676
                                                                                                                       // 1677
    /**                                                                                                                // 1678
     * return TextRange from boundary point (inspired by google closure-library)                                       // 1679
     * @param {BoundaryPoint} point                                                                                    // 1680
     * @return {TextRange}                                                                                             // 1681
     */                                                                                                                // 1682
    var pointToTextRange = function (point) {                                                                          // 1683
      var textRangeInfo = function (container, offset) {                                                               // 1684
        var node, isCollapseToStart;                                                                                   // 1685
                                                                                                                       // 1686
        if (dom.isText(container)) {                                                                                   // 1687
          var prevTextNodes = dom.listPrev(container, func.not(dom.isText));                                           // 1688
          var prevContainer = list.last(prevTextNodes).previousSibling;                                                // 1689
          node =  prevContainer || container.parentNode;                                                               // 1690
          offset += list.sum(list.tail(prevTextNodes), dom.nodeLength);                                                // 1691
          isCollapseToStart = !prevContainer;                                                                          // 1692
        } else {                                                                                                       // 1693
          node = container.childNodes[offset] || container;                                                            // 1694
          if (dom.isText(node)) {                                                                                      // 1695
            return textRangeInfo(node, 0);                                                                             // 1696
          }                                                                                                            // 1697
                                                                                                                       // 1698
          offset = 0;                                                                                                  // 1699
          isCollapseToStart = false;                                                                                   // 1700
        }                                                                                                              // 1701
                                                                                                                       // 1702
        return {                                                                                                       // 1703
          node: node,                                                                                                  // 1704
          collapseToStart: isCollapseToStart,                                                                          // 1705
          offset: offset                                                                                               // 1706
        };                                                                                                             // 1707
      };                                                                                                               // 1708
                                                                                                                       // 1709
      var textRange = document.body.createTextRange();                                                                 // 1710
      var info = textRangeInfo(point.node, point.offset);                                                              // 1711
                                                                                                                       // 1712
      textRange.moveToElementText(info.node);                                                                          // 1713
      textRange.collapse(info.collapseToStart);                                                                        // 1714
      textRange.moveStart('character', info.offset);                                                                   // 1715
      return textRange;                                                                                                // 1716
    };                                                                                                                 // 1717
                                                                                                                       // 1718
    /**                                                                                                                // 1719
     * Wrapped Range                                                                                                   // 1720
     *                                                                                                                 // 1721
     * @constructor                                                                                                    // 1722
     * @param {Node} sc - start container                                                                              // 1723
     * @param {Number} so - start offset                                                                               // 1724
     * @param {Node} ec - end container                                                                                // 1725
     * @param {Number} eo - end offset                                                                                 // 1726
     */                                                                                                                // 1727
    var WrappedRange = function (sc, so, ec, eo) {                                                                     // 1728
      this.sc = sc;                                                                                                    // 1729
      this.so = so;                                                                                                    // 1730
      this.ec = ec;                                                                                                    // 1731
      this.eo = eo;                                                                                                    // 1732
                                                                                                                       // 1733
      // nativeRange: get nativeRange from sc, so, ec, eo                                                              // 1734
      var nativeRange = function () {                                                                                  // 1735
        if (agent.isW3CRangeSupport) {                                                                                 // 1736
          var w3cRange = document.createRange();                                                                       // 1737
          w3cRange.setStart(sc, so);                                                                                   // 1738
          w3cRange.setEnd(ec, eo);                                                                                     // 1739
                                                                                                                       // 1740
          return w3cRange;                                                                                             // 1741
        } else {                                                                                                       // 1742
          var textRange = pointToTextRange({                                                                           // 1743
            node: sc,                                                                                                  // 1744
            offset: so                                                                                                 // 1745
          });                                                                                                          // 1746
                                                                                                                       // 1747
          textRange.setEndPoint('EndToEnd', pointToTextRange({                                                         // 1748
            node: ec,                                                                                                  // 1749
            offset: eo                                                                                                 // 1750
          }));                                                                                                         // 1751
                                                                                                                       // 1752
          return textRange;                                                                                            // 1753
        }                                                                                                              // 1754
      };                                                                                                               // 1755
                                                                                                                       // 1756
      this.getPoints = function () {                                                                                   // 1757
        return {                                                                                                       // 1758
          sc: sc,                                                                                                      // 1759
          so: so,                                                                                                      // 1760
          ec: ec,                                                                                                      // 1761
          eo: eo                                                                                                       // 1762
        };                                                                                                             // 1763
      };                                                                                                               // 1764
                                                                                                                       // 1765
      this.getStartPoint = function () {                                                                               // 1766
        return {                                                                                                       // 1767
          node: sc,                                                                                                    // 1768
          offset: so                                                                                                   // 1769
        };                                                                                                             // 1770
      };                                                                                                               // 1771
                                                                                                                       // 1772
      this.getEndPoint = function () {                                                                                 // 1773
        return {                                                                                                       // 1774
          node: ec,                                                                                                    // 1775
          offset: eo                                                                                                   // 1776
        };                                                                                                             // 1777
      };                                                                                                               // 1778
                                                                                                                       // 1779
      /**                                                                                                              // 1780
       * select update visible range                                                                                   // 1781
       */                                                                                                              // 1782
      this.select = function () {                                                                                      // 1783
        var nativeRng = nativeRange();                                                                                 // 1784
        if (agent.isW3CRangeSupport) {                                                                                 // 1785
          var selection = document.getSelection();                                                                     // 1786
          if (selection.rangeCount > 0) {                                                                              // 1787
            selection.removeAllRanges();                                                                               // 1788
          }                                                                                                            // 1789
          selection.addRange(nativeRng);                                                                               // 1790
        } else {                                                                                                       // 1791
          nativeRng.select();                                                                                          // 1792
        }                                                                                                              // 1793
                                                                                                                       // 1794
        return this;                                                                                                   // 1795
      };                                                                                                               // 1796
                                                                                                                       // 1797
      /**                                                                                                              // 1798
       * @return {WrappedRange}                                                                                        // 1799
       */                                                                                                              // 1800
      this.normalize = function () {                                                                                   // 1801
                                                                                                                       // 1802
        /**                                                                                                            // 1803
         * @param {BoundaryPoint} point                                                                                // 1804
         * @param {Boolean} isLeftToRight                                                                              // 1805
         * @return {BoundaryPoint}                                                                                     // 1806
         */                                                                                                            // 1807
        var getVisiblePoint = function (point, isLeftToRight) {                                                        // 1808
          if ((dom.isVisiblePoint(point) && !dom.isEdgePoint(point)) ||                                                // 1809
              (dom.isVisiblePoint(point) && dom.isRightEdgePoint(point) && !isLeftToRight) ||                          // 1810
              (dom.isVisiblePoint(point) && dom.isLeftEdgePoint(point) && isLeftToRight) ||                            // 1811
              (dom.isVisiblePoint(point) && dom.isBlock(point.node) && dom.isEmpty(point.node))) {                     // 1812
            return point;                                                                                              // 1813
          }                                                                                                            // 1814
                                                                                                                       // 1815
          // point on block's edge                                                                                     // 1816
          var block = dom.ancestor(point.node, dom.isBlock);                                                           // 1817
          if (((dom.isLeftEdgePointOf(point, block) || dom.isVoid(dom.prevPoint(point).node)) && !isLeftToRight) ||    // 1818
              ((dom.isRightEdgePointOf(point, block) || dom.isVoid(dom.nextPoint(point).node)) && isLeftToRight)) {    // 1819
                                                                                                                       // 1820
            // returns point already on visible point                                                                  // 1821
            if (dom.isVisiblePoint(point)) {                                                                           // 1822
              return point;                                                                                            // 1823
            }                                                                                                          // 1824
            // reverse direction                                                                                       // 1825
            isLeftToRight = !isLeftToRight;                                                                            // 1826
          }                                                                                                            // 1827
                                                                                                                       // 1828
          var nextPoint = isLeftToRight ? dom.nextPointUntil(dom.nextPoint(point), dom.isVisiblePoint) :               // 1829
                                          dom.prevPointUntil(dom.prevPoint(point), dom.isVisiblePoint);                // 1830
          return nextPoint || point;                                                                                   // 1831
        };                                                                                                             // 1832
                                                                                                                       // 1833
        var endPoint = getVisiblePoint(this.getEndPoint(), false);                                                     // 1834
        var startPoint = this.isCollapsed() ? endPoint : getVisiblePoint(this.getStartPoint(), true);                  // 1835
                                                                                                                       // 1836
        return new WrappedRange(                                                                                       // 1837
          startPoint.node,                                                                                             // 1838
          startPoint.offset,                                                                                           // 1839
          endPoint.node,                                                                                               // 1840
          endPoint.offset                                                                                              // 1841
        );                                                                                                             // 1842
      };                                                                                                               // 1843
                                                                                                                       // 1844
      /**                                                                                                              // 1845
       * returns matched nodes on range                                                                                // 1846
       *                                                                                                               // 1847
       * @param {Function} [pred] - predicate function                                                                 // 1848
       * @param {Object} [options]                                                                                     // 1849
       * @param {Boolean} [options.includeAncestor]                                                                    // 1850
       * @param {Boolean} [options.fullyContains]                                                                      // 1851
       * @return {Node[]}                                                                                              // 1852
       */                                                                                                              // 1853
      this.nodes = function (pred, options) {                                                                          // 1854
        pred = pred || func.ok;                                                                                        // 1855
                                                                                                                       // 1856
        var includeAncestor = options && options.includeAncestor;                                                      // 1857
        var fullyContains = options && options.fullyContains;                                                          // 1858
                                                                                                                       // 1859
        // TODO compare points and sort                                                                                // 1860
        var startPoint = this.getStartPoint();                                                                         // 1861
        var endPoint = this.getEndPoint();                                                                             // 1862
                                                                                                                       // 1863
        var nodes = [];                                                                                                // 1864
        var leftEdgeNodes = [];                                                                                        // 1865
                                                                                                                       // 1866
        dom.walkPoint(startPoint, endPoint, function (point) {                                                         // 1867
          if (dom.isEditable(point.node)) {                                                                            // 1868
            return;                                                                                                    // 1869
          }                                                                                                            // 1870
                                                                                                                       // 1871
          var node;                                                                                                    // 1872
          if (fullyContains) {                                                                                         // 1873
            if (dom.isLeftEdgePoint(point)) {                                                                          // 1874
              leftEdgeNodes.push(point.node);                                                                          // 1875
            }                                                                                                          // 1876
            if (dom.isRightEdgePoint(point) && list.contains(leftEdgeNodes, point.node)) {                             // 1877
              node = point.node;                                                                                       // 1878
            }                                                                                                          // 1879
          } else if (includeAncestor) {                                                                                // 1880
            node = dom.ancestor(point.node, pred);                                                                     // 1881
          } else {                                                                                                     // 1882
            node = point.node;                                                                                         // 1883
          }                                                                                                            // 1884
                                                                                                                       // 1885
          if (node && pred(node)) {                                                                                    // 1886
            nodes.push(node);                                                                                          // 1887
          }                                                                                                            // 1888
        }, true);                                                                                                      // 1889
                                                                                                                       // 1890
        return list.unique(nodes);                                                                                     // 1891
      };                                                                                                               // 1892
                                                                                                                       // 1893
      /**                                                                                                              // 1894
       * returns commonAncestor of range                                                                               // 1895
       * @return {Element} - commonAncestor                                                                            // 1896
       */                                                                                                              // 1897
      this.commonAncestor = function () {                                                                              // 1898
        return dom.commonAncestor(sc, ec);                                                                             // 1899
      };                                                                                                               // 1900
                                                                                                                       // 1901
      /**                                                                                                              // 1902
       * returns expanded range by pred                                                                                // 1903
       *                                                                                                               // 1904
       * @param {Function} pred - predicate function                                                                   // 1905
       * @return {WrappedRange}                                                                                        // 1906
       */                                                                                                              // 1907
      this.expand = function (pred) {                                                                                  // 1908
        var startAncestor = dom.ancestor(sc, pred);                                                                    // 1909
        var endAncestor = dom.ancestor(ec, pred);                                                                      // 1910
                                                                                                                       // 1911
        if (!startAncestor && !endAncestor) {                                                                          // 1912
          return new WrappedRange(sc, so, ec, eo);                                                                     // 1913
        }                                                                                                              // 1914
                                                                                                                       // 1915
        var boundaryPoints = this.getPoints();                                                                         // 1916
                                                                                                                       // 1917
        if (startAncestor) {                                                                                           // 1918
          boundaryPoints.sc = startAncestor;                                                                           // 1919
          boundaryPoints.so = 0;                                                                                       // 1920
        }                                                                                                              // 1921
                                                                                                                       // 1922
        if (endAncestor) {                                                                                             // 1923
          boundaryPoints.ec = endAncestor;                                                                             // 1924
          boundaryPoints.eo = dom.nodeLength(endAncestor);                                                             // 1925
        }                                                                                                              // 1926
                                                                                                                       // 1927
        return new WrappedRange(                                                                                       // 1928
          boundaryPoints.sc,                                                                                           // 1929
          boundaryPoints.so,                                                                                           // 1930
          boundaryPoints.ec,                                                                                           // 1931
          boundaryPoints.eo                                                                                            // 1932
        );                                                                                                             // 1933
      };                                                                                                               // 1934
                                                                                                                       // 1935
      /**                                                                                                              // 1936
       * @param {Boolean} isCollapseToStart                                                                            // 1937
       * @return {WrappedRange}                                                                                        // 1938
       */                                                                                                              // 1939
      this.collapse = function (isCollapseToStart) {                                                                   // 1940
        if (isCollapseToStart) {                                                                                       // 1941
          return new WrappedRange(sc, so, sc, so);                                                                     // 1942
        } else {                                                                                                       // 1943
          return new WrappedRange(ec, eo, ec, eo);                                                                     // 1944
        }                                                                                                              // 1945
      };                                                                                                               // 1946
                                                                                                                       // 1947
      /**                                                                                                              // 1948
       * splitText on range                                                                                            // 1949
       */                                                                                                              // 1950
      this.splitText = function () {                                                                                   // 1951
        var isSameContainer = sc === ec;                                                                               // 1952
        var boundaryPoints = this.getPoints();                                                                         // 1953
                                                                                                                       // 1954
        if (dom.isText(ec) && !dom.isEdgePoint(this.getEndPoint())) {                                                  // 1955
          ec.splitText(eo);                                                                                            // 1956
        }                                                                                                              // 1957
                                                                                                                       // 1958
        if (dom.isText(sc) && !dom.isEdgePoint(this.getStartPoint())) {                                                // 1959
          boundaryPoints.sc = sc.splitText(so);                                                                        // 1960
          boundaryPoints.so = 0;                                                                                       // 1961
                                                                                                                       // 1962
          if (isSameContainer) {                                                                                       // 1963
            boundaryPoints.ec = boundaryPoints.sc;                                                                     // 1964
            boundaryPoints.eo = eo - so;                                                                               // 1965
          }                                                                                                            // 1966
        }                                                                                                              // 1967
                                                                                                                       // 1968
        return new WrappedRange(                                                                                       // 1969
          boundaryPoints.sc,                                                                                           // 1970
          boundaryPoints.so,                                                                                           // 1971
          boundaryPoints.ec,                                                                                           // 1972
          boundaryPoints.eo                                                                                            // 1973
        );                                                                                                             // 1974
      };                                                                                                               // 1975
                                                                                                                       // 1976
      /**                                                                                                              // 1977
       * delete contents on range                                                                                      // 1978
       * @return {WrappedRange}                                                                                        // 1979
       */                                                                                                              // 1980
      this.deleteContents = function () {                                                                              // 1981
        if (this.isCollapsed()) {                                                                                      // 1982
          return this;                                                                                                 // 1983
        }                                                                                                              // 1984
                                                                                                                       // 1985
        var rng = this.splitText();                                                                                    // 1986
        var nodes = rng.nodes(null, {                                                                                  // 1987
          fullyContains: true                                                                                          // 1988
        });                                                                                                            // 1989
                                                                                                                       // 1990
        // find new cursor point                                                                                       // 1991
        var point = dom.prevPointUntil(rng.getStartPoint(), function (point) {                                         // 1992
          return !list.contains(nodes, point.node);                                                                    // 1993
        });                                                                                                            // 1994
                                                                                                                       // 1995
        var emptyParents = [];                                                                                         // 1996
        $.each(nodes, function (idx, node) {                                                                           // 1997
          // find empty parents                                                                                        // 1998
          var parent = node.parentNode;                                                                                // 1999
          if (point.node !== parent && dom.nodeLength(parent) === 1) {                                                 // 2000
            emptyParents.push(parent);                                                                                 // 2001
          }                                                                                                            // 2002
          dom.remove(node, false);                                                                                     // 2003
        });                                                                                                            // 2004
                                                                                                                       // 2005
        // remove empty parents                                                                                        // 2006
        $.each(emptyParents, function (idx, node) {                                                                    // 2007
          dom.remove(node, false);                                                                                     // 2008
        });                                                                                                            // 2009
                                                                                                                       // 2010
        return new WrappedRange(                                                                                       // 2011
          point.node,                                                                                                  // 2012
          point.offset,                                                                                                // 2013
          point.node,                                                                                                  // 2014
          point.offset                                                                                                 // 2015
        ).normalize();                                                                                                 // 2016
      };                                                                                                               // 2017
                                                                                                                       // 2018
      /**                                                                                                              // 2019
       * makeIsOn: return isOn(pred) function                                                                          // 2020
       */                                                                                                              // 2021
      var makeIsOn = function (pred) {                                                                                 // 2022
        return function () {                                                                                           // 2023
          var ancestor = dom.ancestor(sc, pred);                                                                       // 2024
          return !!ancestor && (ancestor === dom.ancestor(ec, pred));                                                  // 2025
        };                                                                                                             // 2026
      };                                                                                                               // 2027
                                                                                                                       // 2028
      // isOnEditable: judge whether range is on editable or not                                                       // 2029
      this.isOnEditable = makeIsOn(dom.isEditable);                                                                    // 2030
      // isOnList: judge whether range is on list node or not                                                          // 2031
      this.isOnList = makeIsOn(dom.isList);                                                                            // 2032
      // isOnAnchor: judge whether range is on anchor node or not                                                      // 2033
      this.isOnAnchor = makeIsOn(dom.isAnchor);                                                                        // 2034
      // isOnAnchor: judge whether range is on cell node or not                                                        // 2035
      this.isOnCell = makeIsOn(dom.isCell);                                                                            // 2036
                                                                                                                       // 2037
      /**                                                                                                              // 2038
       * @param {Function} pred                                                                                        // 2039
       * @return {Boolean}                                                                                             // 2040
       */                                                                                                              // 2041
      this.isLeftEdgeOf = function (pred) {                                                                            // 2042
        if (!dom.isLeftEdgePoint(this.getStartPoint())) {                                                              // 2043
          return false;                                                                                                // 2044
        }                                                                                                              // 2045
                                                                                                                       // 2046
        var node = dom.ancestor(this.sc, pred);                                                                        // 2047
        return node && dom.isLeftEdgeOf(this.sc, node);                                                                // 2048
      };                                                                                                               // 2049
                                                                                                                       // 2050
      /**                                                                                                              // 2051
       * returns whether range was collapsed or not                                                                    // 2052
       */                                                                                                              // 2053
      this.isCollapsed = function () {                                                                                 // 2054
        return sc === ec && so === eo;                                                                                 // 2055
      };                                                                                                               // 2056
                                                                                                                       // 2057
      /**                                                                                                              // 2058
       * wrap inline nodes which children of body with paragraph                                                       // 2059
       *                                                                                                               // 2060
       * @return {WrappedRange}                                                                                        // 2061
       */                                                                                                              // 2062
      this.wrapBodyInlineWithPara = function () {                                                                      // 2063
        if (dom.isBodyContainer(sc) && dom.isEmpty(sc)) {                                                              // 2064
          sc.innerHTML = dom.emptyPara;                                                                                // 2065
          return new WrappedRange(sc.firstChild, 0, sc.firstChild, 0);                                                 // 2066
        }                                                                                                              // 2067
                                                                                                                       // 2068
        /**                                                                                                            // 2069
         * [workaround] firefox often create range on not visible point. so normalize here.                            // 2070
         *  - firefox: |<p>text</p>|                                                                                   // 2071
         *  - chrome: <p>|text|</p>                                                                                    // 2072
         */                                                                                                            // 2073
        var rng = this.normalize();                                                                                    // 2074
        if (dom.isParaInline(sc) || dom.isPara(sc)) {                                                                  // 2075
          return rng;                                                                                                  // 2076
        }                                                                                                              // 2077
                                                                                                                       // 2078
        // find inline top ancestor                                                                                    // 2079
        var topAncestor;                                                                                               // 2080
        if (dom.isInline(rng.sc)) {                                                                                    // 2081
          var ancestors = dom.listAncestor(rng.sc, func.not(dom.isInline));                                            // 2082
          topAncestor = list.last(ancestors);                                                                          // 2083
          if (!dom.isInline(topAncestor)) {                                                                            // 2084
            topAncestor = ancestors[ancestors.length - 2] || rng.sc.childNodes[rng.so];                                // 2085
          }                                                                                                            // 2086
        } else {                                                                                                       // 2087
          topAncestor = rng.sc.childNodes[rng.so > 0 ? rng.so - 1 : 0];                                                // 2088
        }                                                                                                              // 2089
                                                                                                                       // 2090
        // siblings not in paragraph                                                                                   // 2091
        var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();                                    // 2092
        inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline));               // 2093
                                                                                                                       // 2094
        // wrap with paragraph                                                                                         // 2095
        if (inlineSiblings.length) {                                                                                   // 2096
          var para = dom.wrap(list.head(inlineSiblings), 'p');                                                         // 2097
          dom.appendChildNodes(para, list.tail(inlineSiblings));                                                       // 2098
        }                                                                                                              // 2099
                                                                                                                       // 2100
        return this.normalize();                                                                                       // 2101
      };                                                                                                               // 2102
                                                                                                                       // 2103
      /**                                                                                                              // 2104
       * insert node at current cursor                                                                                 // 2105
       *                                                                                                               // 2106
       * @param {Node} node                                                                                            // 2107
       * @return {Node}                                                                                                // 2108
       */                                                                                                              // 2109
      this.insertNode = function (node) {                                                                              // 2110
        var rng = this.wrapBodyInlineWithPara().deleteContents();                                                      // 2111
        var info = dom.splitPoint(rng.getStartPoint(), dom.isInline(node));                                            // 2112
                                                                                                                       // 2113
        if (info.rightNode) {                                                                                          // 2114
          info.rightNode.parentNode.insertBefore(node, info.rightNode);                                                // 2115
        } else {                                                                                                       // 2116
          info.container.appendChild(node);                                                                            // 2117
        }                                                                                                              // 2118
                                                                                                                       // 2119
        return node;                                                                                                   // 2120
      };                                                                                                               // 2121
                                                                                                                       // 2122
      /**                                                                                                              // 2123
       * insert html at current cursor                                                                                 // 2124
       */                                                                                                              // 2125
      this.pasteHTML = function (markup) {                                                                             // 2126
        var contentsContainer = $('<div></div>').html(markup)[0];                                                      // 2127
        var childNodes = list.from(contentsContainer.childNodes);                                                      // 2128
                                                                                                                       // 2129
        var rng = this.wrapBodyInlineWithPara().deleteContents();                                                      // 2130
                                                                                                                       // 2131
        return childNodes.reverse().map(function (childNode) {                                                         // 2132
          return rng.insertNode(childNode);                                                                            // 2133
        }).reverse();                                                                                                  // 2134
      };                                                                                                               // 2135
                                                                                                                       // 2136
      /**                                                                                                              // 2137
       * returns text in range                                                                                         // 2138
       *                                                                                                               // 2139
       * @return {String}                                                                                              // 2140
       */                                                                                                              // 2141
      this.toString = function () {                                                                                    // 2142
        var nativeRng = nativeRange();                                                                                 // 2143
        return agent.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;                                        // 2144
      };                                                                                                               // 2145
                                                                                                                       // 2146
      /**                                                                                                              // 2147
       * returns range for word before cursor                                                                          // 2148
       *                                                                                                               // 2149
       * @param {Boolean} [findAfter] - find after cursor, default: false                                              // 2150
       * @return {WrappedRange}                                                                                        // 2151
       */                                                                                                              // 2152
      this.getWordRange = function (findAfter) {                                                                       // 2153
        var endPoint = this.getEndPoint();                                                                             // 2154
                                                                                                                       // 2155
        if (!dom.isCharPoint(endPoint)) {                                                                              // 2156
          return this;                                                                                                 // 2157
        }                                                                                                              // 2158
                                                                                                                       // 2159
        var startPoint = dom.prevPointUntil(endPoint, function (point) {                                               // 2160
          return !dom.isCharPoint(point);                                                                              // 2161
        });                                                                                                            // 2162
                                                                                                                       // 2163
        if (findAfter) {                                                                                               // 2164
          endPoint = dom.nextPointUntil(endPoint, function (point) {                                                   // 2165
            return !dom.isCharPoint(point);                                                                            // 2166
          });                                                                                                          // 2167
        }                                                                                                              // 2168
                                                                                                                       // 2169
        return new WrappedRange(                                                                                       // 2170
          startPoint.node,                                                                                             // 2171
          startPoint.offset,                                                                                           // 2172
          endPoint.node,                                                                                               // 2173
          endPoint.offset                                                                                              // 2174
        );                                                                                                             // 2175
      };                                                                                                               // 2176
                                                                                                                       // 2177
      /**                                                                                                              // 2178
       * create offsetPath bookmark                                                                                    // 2179
       *                                                                                                               // 2180
       * @param {Node} editable                                                                                        // 2181
       */                                                                                                              // 2182
      this.bookmark = function (editable) {                                                                            // 2183
        return {                                                                                                       // 2184
          s: {                                                                                                         // 2185
            path: dom.makeOffsetPath(editable, sc),                                                                    // 2186
            offset: so                                                                                                 // 2187
          },                                                                                                           // 2188
          e: {                                                                                                         // 2189
            path: dom.makeOffsetPath(editable, ec),                                                                    // 2190
            offset: eo                                                                                                 // 2191
          }                                                                                                            // 2192
        };                                                                                                             // 2193
      };                                                                                                               // 2194
                                                                                                                       // 2195
      /**                                                                                                              // 2196
       * create offsetPath bookmark base on paragraph                                                                  // 2197
       *                                                                                                               // 2198
       * @param {Node[]} paras                                                                                         // 2199
       */                                                                                                              // 2200
      this.paraBookmark = function (paras) {                                                                           // 2201
        return {                                                                                                       // 2202
          s: {                                                                                                         // 2203
            path: list.tail(dom.makeOffsetPath(list.head(paras), sc)),                                                 // 2204
            offset: so                                                                                                 // 2205
          },                                                                                                           // 2206
          e: {                                                                                                         // 2207
            path: list.tail(dom.makeOffsetPath(list.last(paras), ec)),                                                 // 2208
            offset: eo                                                                                                 // 2209
          }                                                                                                            // 2210
        };                                                                                                             // 2211
      };                                                                                                               // 2212
                                                                                                                       // 2213
      /**                                                                                                              // 2214
       * getClientRects                                                                                                // 2215
       * @return {Rect[]}                                                                                              // 2216
       */                                                                                                              // 2217
      this.getClientRects = function () {                                                                              // 2218
        var nativeRng = nativeRange();                                                                                 // 2219
        return nativeRng.getClientRects();                                                                             // 2220
      };                                                                                                               // 2221
    };                                                                                                                 // 2222
                                                                                                                       // 2223
  /**                                                                                                                  // 2224
   * @class core.range                                                                                                 // 2225
   *                                                                                                                   // 2226
   * Data structure                                                                                                    // 2227
   *  * BoundaryPoint: a point of dom tree                                                                             // 2228
   *  * BoundaryPoints: two boundaryPoints corresponding to the start and the end of the Range                         // 2229
   *                                                                                                                   // 2230
   * See to http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position                        // 2231
   *                                                                                                                   // 2232
   * @singleton                                                                                                        // 2233
   * @alternateClassName range                                                                                         // 2234
   */                                                                                                                  // 2235
    return {                                                                                                           // 2236
      /**                                                                                                              // 2237
       * @method                                                                                                       // 2238
       *                                                                                                               // 2239
       * create Range Object From arguments or Browser Selection                                                       // 2240
       *                                                                                                               // 2241
       * @param {Node} sc - start container                                                                            // 2242
       * @param {Number} so - start offset                                                                             // 2243
       * @param {Node} ec - end container                                                                              // 2244
       * @param {Number} eo - end offset                                                                               // 2245
       * @return {WrappedRange}                                                                                        // 2246
       */                                                                                                              // 2247
      create : function (sc, so, ec, eo) {                                                                             // 2248
        if (!arguments.length) { // from Browser Selection                                                             // 2249
          if (agent.isW3CRangeSupport) {                                                                               // 2250
            var selection = document.getSelection();                                                                   // 2251
            if (!selection || selection.rangeCount === 0) {                                                            // 2252
              return null;                                                                                             // 2253
            } else if (dom.isBody(selection.anchorNode)) {                                                             // 2254
              // Firefox: returns entire body as range on initialization. We won't never need it.                      // 2255
              return null;                                                                                             // 2256
            }                                                                                                          // 2257
                                                                                                                       // 2258
            var nativeRng = selection.getRangeAt(0);                                                                   // 2259
            sc = nativeRng.startContainer;                                                                             // 2260
            so = nativeRng.startOffset;                                                                                // 2261
            ec = nativeRng.endContainer;                                                                               // 2262
            eo = nativeRng.endOffset;                                                                                  // 2263
          } else { // IE8: TextRange                                                                                   // 2264
            var textRange = document.selection.createRange();                                                          // 2265
            var textRangeEnd = textRange.duplicate();                                                                  // 2266
            textRangeEnd.collapse(false);                                                                              // 2267
            var textRangeStart = textRange;                                                                            // 2268
            textRangeStart.collapse(true);                                                                             // 2269
                                                                                                                       // 2270
            var startPoint = textRangeToPoint(textRangeStart, true),                                                   // 2271
            endPoint = textRangeToPoint(textRangeEnd, false);                                                          // 2272
                                                                                                                       // 2273
            // same visible point case: range was collapsed.                                                           // 2274
            if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) &&                                      // 2275
                dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) &&                                     // 2276
                endPoint.node.nextSibling === startPoint.node) {                                                       // 2277
              startPoint = endPoint;                                                                                   // 2278
            }                                                                                                          // 2279
                                                                                                                       // 2280
            sc = startPoint.cont;                                                                                      // 2281
            so = startPoint.offset;                                                                                    // 2282
            ec = endPoint.cont;                                                                                        // 2283
            eo = endPoint.offset;                                                                                      // 2284
          }                                                                                                            // 2285
        } else if (arguments.length === 2) { //collapsed                                                               // 2286
          ec = sc;                                                                                                     // 2287
          eo = so;                                                                                                     // 2288
        }                                                                                                              // 2289
        return new WrappedRange(sc, so, ec, eo);                                                                       // 2290
      },                                                                                                               // 2291
                                                                                                                       // 2292
      /**                                                                                                              // 2293
       * @method                                                                                                       // 2294
       *                                                                                                               // 2295
       * create WrappedRange from node                                                                                 // 2296
       *                                                                                                               // 2297
       * @param {Node} node                                                                                            // 2298
       * @return {WrappedRange}                                                                                        // 2299
       */                                                                                                              // 2300
      createFromNode: function (node) {                                                                                // 2301
        var sc = node;                                                                                                 // 2302
        var so = 0;                                                                                                    // 2303
        var ec = node;                                                                                                 // 2304
        var eo = dom.nodeLength(ec);                                                                                   // 2305
                                                                                                                       // 2306
        // browsers can't target a picture or void node                                                                // 2307
        if (dom.isVoid(sc)) {                                                                                          // 2308
          so = dom.listPrev(sc).length - 1;                                                                            // 2309
          sc = sc.parentNode;                                                                                          // 2310
        }                                                                                                              // 2311
        if (dom.isBR(ec)) {                                                                                            // 2312
          eo = dom.listPrev(ec).length - 1;                                                                            // 2313
          ec = ec.parentNode;                                                                                          // 2314
        } else if (dom.isVoid(ec)) {                                                                                   // 2315
          eo = dom.listPrev(ec).length;                                                                                // 2316
          ec = ec.parentNode;                                                                                          // 2317
        }                                                                                                              // 2318
                                                                                                                       // 2319
        return this.create(sc, so, ec, eo);                                                                            // 2320
      },                                                                                                               // 2321
                                                                                                                       // 2322
      /**                                                                                                              // 2323
       * create WrappedRange from node after position                                                                  // 2324
       *                                                                                                               // 2325
       * @param {Node} node                                                                                            // 2326
       * @return {WrappedRange}                                                                                        // 2327
       */                                                                                                              // 2328
      createFromNodeBefore: function (node) {                                                                          // 2329
        return this.createFromNode(node).collapse(true);                                                               // 2330
      },                                                                                                               // 2331
                                                                                                                       // 2332
      /**                                                                                                              // 2333
       * create WrappedRange from node after position                                                                  // 2334
       *                                                                                                               // 2335
       * @param {Node} node                                                                                            // 2336
       * @return {WrappedRange}                                                                                        // 2337
       */                                                                                                              // 2338
      createFromNodeAfter: function (node) {                                                                           // 2339
        return this.createFromNode(node).collapse();                                                                   // 2340
      },                                                                                                               // 2341
                                                                                                                       // 2342
      /**                                                                                                              // 2343
       * @method                                                                                                       // 2344
       *                                                                                                               // 2345
       * create WrappedRange from bookmark                                                                             // 2346
       *                                                                                                               // 2347
       * @param {Node} editable                                                                                        // 2348
       * @param {Object} bookmark                                                                                      // 2349
       * @return {WrappedRange}                                                                                        // 2350
       */                                                                                                              // 2351
      createFromBookmark : function (editable, bookmark) {                                                             // 2352
        var sc = dom.fromOffsetPath(editable, bookmark.s.path);                                                        // 2353
        var so = bookmark.s.offset;                                                                                    // 2354
        var ec = dom.fromOffsetPath(editable, bookmark.e.path);                                                        // 2355
        var eo = bookmark.e.offset;                                                                                    // 2356
        return new WrappedRange(sc, so, ec, eo);                                                                       // 2357
      },                                                                                                               // 2358
                                                                                                                       // 2359
      /**                                                                                                              // 2360
       * @method                                                                                                       // 2361
       *                                                                                                               // 2362
       * create WrappedRange from paraBookmark                                                                         // 2363
       *                                                                                                               // 2364
       * @param {Object} bookmark                                                                                      // 2365
       * @param {Node[]} paras                                                                                         // 2366
       * @return {WrappedRange}                                                                                        // 2367
       */                                                                                                              // 2368
      createFromParaBookmark: function (bookmark, paras) {                                                             // 2369
        var so = bookmark.s.offset;                                                                                    // 2370
        var eo = bookmark.e.offset;                                                                                    // 2371
        var sc = dom.fromOffsetPath(list.head(paras), bookmark.s.path);                                                // 2372
        var ec = dom.fromOffsetPath(list.last(paras), bookmark.e.path);                                                // 2373
                                                                                                                       // 2374
        return new WrappedRange(sc, so, ec, eo);                                                                       // 2375
      }                                                                                                                // 2376
    };                                                                                                                 // 2377
  })();                                                                                                                // 2378
                                                                                                                       // 2379
  /**                                                                                                                  // 2380
   * @class defaults                                                                                                   // 2381
   *                                                                                                                   // 2382
   * @singleton                                                                                                        // 2383
   */                                                                                                                  // 2384
  var defaults = {                                                                                                     // 2385
    /** @property */                                                                                                   // 2386
    version: '0.6.16',                                                                                                 // 2387
                                                                                                                       // 2388
    /**                                                                                                                // 2389
     *                                                                                                                 // 2390
     * for event options, reference to EventHandler.attach                                                             // 2391
     *                                                                                                                 // 2392
     * @property {Object} options                                                                                      // 2393
     * @property {String/Number} [options.width=null] set editor width                                                 // 2394
     * @property {String/Number} [options.height=null] set editor height, ex) 300                                      // 2395
     * @property {String/Number} options.minHeight set minimum height of editor                                        // 2396
     * @property {String/Number} options.maxHeight                                                                     // 2397
     * @property {String/Number} options.focus                                                                         // 2398
     * @property {Number} options.tabsize                                                                              // 2399
     * @property {Boolean} options.styleWithSpan                                                                       // 2400
     * @property {Object} options.codemirror                                                                           // 2401
     * @property {Object} [options.codemirror.mode='text/html']                                                        // 2402
     * @property {Object} [options.codemirror.htmlMode=true]                                                           // 2403
     * @property {Object} [options.codemirror.lineNumbers=true]                                                        // 2404
     * @property {String} [options.lang=en-US] language 'en-US', 'ko-KR', ...                                          // 2405
     * @property {String} [options.direction=null] text direction, ex) 'rtl'                                           // 2406
     * @property {Array} [options.toolbar]                                                                             // 2407
     * @property {Boolean} [options.airMode=false]                                                                     // 2408
     * @property {Array} [options.airPopover]                                                                          // 2409
     * @property {Fucntion} [options.onInit] initialize                                                                // 2410
     * @property {Fucntion} [options.onsubmit]                                                                         // 2411
     */                                                                                                                // 2412
    options: {                                                                                                         // 2413
      width: null,                  // set editor width                                                                // 2414
      height: null,                 // set editor height, ex) 300                                                      // 2415
                                                                                                                       // 2416
      minHeight: null,              // set minimum height of editor                                                    // 2417
      maxHeight: null,              // set maximum height of editor                                                    // 2418
                                                                                                                       // 2419
      focus: false,                 // set focus to editable area after initializing summernote                        // 2420
                                                                                                                       // 2421
      tabsize: 4,                   // size of tab ex) 2 or 4                                                          // 2422
      styleWithSpan: true,          // style with span (Chrome and FF only)                                            // 2423
                                                                                                                       // 2424
      disableLinkTarget: false,     // hide link Target Checkbox                                                       // 2425
      disableDragAndDrop: false,    // disable drag and drop event                                                     // 2426
      disableResizeEditor: false,   // disable resizing editor                                                         // 2427
      disableResizeImage: false,    // disable resizing image                                                          // 2428
                                                                                                                       // 2429
      shortcuts: true,              // enable keyboard shortcuts                                                       // 2430
                                                                                                                       // 2431
      textareaAutoSync: true,       // enable textarea auto sync                                                       // 2432
                                                                                                                       // 2433
      placeholder: false,           // enable placeholder text                                                         // 2434
      prettifyHtml: true,           // enable prettifying html while toggling codeview                                 // 2435
                                                                                                                       // 2436
      iconPrefix: 'fa fa-',         // prefix for css icon classes                                                     // 2437
                                                                                                                       // 2438
      icons: {                                                                                                         // 2439
        font: {                                                                                                        // 2440
          bold: 'bold',                                                                                                // 2441
          italic: 'italic',                                                                                            // 2442
          underline: 'underline',                                                                                      // 2443
          clear: 'eraser',                                                                                             // 2444
          height: 'text-height',                                                                                       // 2445
          strikethrough: 'strikethrough',                                                                              // 2446
          superscript: 'superscript',                                                                                  // 2447
          subscript: 'subscript'                                                                                       // 2448
        },                                                                                                             // 2449
        image: {                                                                                                       // 2450
          image: 'picture-o',                                                                                          // 2451
          floatLeft: 'align-left',                                                                                     // 2452
          floatRight: 'align-right',                                                                                   // 2453
          floatNone: 'align-justify',                                                                                  // 2454
          shapeRounded: 'square',                                                                                      // 2455
          shapeCircle: 'circle-o',                                                                                     // 2456
          shapeThumbnail: 'picture-o',                                                                                 // 2457
          shapeNone: 'times',                                                                                          // 2458
          remove: 'trash-o'                                                                                            // 2459
        },                                                                                                             // 2460
        link: {                                                                                                        // 2461
          link: 'link',                                                                                                // 2462
          unlink: 'unlink',                                                                                            // 2463
          edit: 'edit'                                                                                                 // 2464
        },                                                                                                             // 2465
        table: {                                                                                                       // 2466
          table: 'table'                                                                                               // 2467
        },                                                                                                             // 2468
        hr: {                                                                                                          // 2469
          insert: 'minus'                                                                                              // 2470
        },                                                                                                             // 2471
        style: {                                                                                                       // 2472
          style: 'magic'                                                                                               // 2473
        },                                                                                                             // 2474
        lists: {                                                                                                       // 2475
          unordered: 'list-ul',                                                                                        // 2476
          ordered: 'list-ol'                                                                                           // 2477
        },                                                                                                             // 2478
        options: {                                                                                                     // 2479
          help: 'question',                                                                                            // 2480
          fullscreen: 'arrows-alt',                                                                                    // 2481
          codeview: 'code'                                                                                             // 2482
        },                                                                                                             // 2483
        paragraph: {                                                                                                   // 2484
          paragraph: 'align-left',                                                                                     // 2485
          outdent: 'outdent',                                                                                          // 2486
          indent: 'indent',                                                                                            // 2487
          left: 'align-left',                                                                                          // 2488
          center: 'align-center',                                                                                      // 2489
          right: 'align-right',                                                                                        // 2490
          justify: 'align-justify'                                                                                     // 2491
        },                                                                                                             // 2492
        color: {                                                                                                       // 2493
          recent: 'font'                                                                                               // 2494
        },                                                                                                             // 2495
        history: {                                                                                                     // 2496
          undo: 'undo',                                                                                                // 2497
          redo: 'repeat'                                                                                               // 2498
        },                                                                                                             // 2499
        misc: {                                                                                                        // 2500
          check: 'check'                                                                                               // 2501
        }                                                                                                              // 2502
      },                                                                                                               // 2503
                                                                                                                       // 2504
      dialogsInBody: false,          // false will add dialogs into editor                                             // 2505
                                                                                                                       // 2506
      codemirror: {                 // codemirror options                                                              // 2507
        mode: 'text/html',                                                                                             // 2508
        htmlMode: true,                                                                                                // 2509
        lineNumbers: true                                                                                              // 2510
      },                                                                                                               // 2511
                                                                                                                       // 2512
      // language                                                                                                      // 2513
      lang: 'en-US',                // language 'en-US', 'ko-KR', ...                                                  // 2514
      direction: null,              // text direction, ex) 'rtl'                                                       // 2515
                                                                                                                       // 2516
      // toolbar                                                                                                       // 2517
      toolbar: [                                                                                                       // 2518
        ['style', ['style']],                                                                                          // 2519
        ['font', ['bold', 'italic', 'underline', 'clear']],                                                            // 2520
        // ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],            // 2521
        ['fontname', ['fontname']],                                                                                    // 2522
        ['fontsize', ['fontsize']],                                                                                    // 2523
        ['color', ['color']],                                                                                          // 2524
        ['para', ['ul', 'ol', 'paragraph']],                                                                           // 2525
        ['height', ['height']],                                                                                        // 2526
        ['table', ['table']],                                                                                          // 2527
        ['insert', ['link', 'picture', 'hr']],                                                                         // 2528
        ['view', ['fullscreen', 'codeview']],                                                                          // 2529
        ['help', ['help']]                                                                                             // 2530
      ],                                                                                                               // 2531
                                                                                                                       // 2532
      plugin : { },                                                                                                    // 2533
                                                                                                                       // 2534
      // air mode: inline editor                                                                                       // 2535
      airMode: false,                                                                                                  // 2536
      // airPopover: [                                                                                                 // 2537
      //   ['style', ['style']],                                                                                       // 2538
      //   ['font', ['bold', 'italic', 'underline', 'clear']],                                                         // 2539
      //   ['fontname', ['fontname']],                                                                                 // 2540
      //   ['color', ['color']],                                                                                       // 2541
      //   ['para', ['ul', 'ol', 'paragraph']],                                                                        // 2542
      //   ['height', ['height']],                                                                                     // 2543
      //   ['table', ['table']],                                                                                       // 2544
      //   ['insert', ['link', 'picture']],                                                                            // 2545
      //   ['help', ['help']]                                                                                          // 2546
      // ],                                                                                                            // 2547
      airPopover: [                                                                                                    // 2548
        ['color', ['color']],                                                                                          // 2549
        ['font', ['bold', 'underline', 'clear']],                                                                      // 2550
        ['para', ['ul', 'paragraph']],                                                                                 // 2551
        ['table', ['table']],                                                                                          // 2552
        ['insert', ['link', 'picture']]                                                                                // 2553
      ],                                                                                                               // 2554
                                                                                                                       // 2555
      // style tag                                                                                                     // 2556
      styleTags: ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],                                       // 2557
                                                                                                                       // 2558
      // default fontName                                                                                              // 2559
      defaultFontName: 'Helvetica Neue',                                                                               // 2560
                                                                                                                       // 2561
      // fontName                                                                                                      // 2562
      fontNames: [                                                                                                     // 2563
        'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',                                                        // 2564
        'Helvetica Neue', 'Helvetica', 'Impact', 'Lucida Grande',                                                      // 2565
        'Tahoma', 'Times New Roman', 'Verdana'                                                                         // 2566
      ],                                                                                                               // 2567
      fontNamesIgnoreCheck: [],                                                                                        // 2568
                                                                                                                       // 2569
      fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],                                                 // 2570
                                                                                                                       // 2571
      // pallete colors(n x n)                                                                                         // 2572
      colors: [                                                                                                        // 2573
        ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],                      // 2574
        ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],                      // 2575
        ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],                      // 2576
        ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],                      // 2577
        ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],                      // 2578
        ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],                      // 2579
        ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],                      // 2580
        ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']                       // 2581
      ],                                                                                                               // 2582
                                                                                                                       // 2583
      // lineHeight                                                                                                    // 2584
      lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],                                           // 2585
                                                                                                                       // 2586
      // insertTable max size                                                                                          // 2587
      insertTableMaxSize: {                                                                                            // 2588
        col: 10,                                                                                                       // 2589
        row: 10                                                                                                        // 2590
      },                                                                                                               // 2591
                                                                                                                       // 2592
      // image                                                                                                         // 2593
      maximumImageFileSize: null, // size in bytes, null = no limit                                                    // 2594
                                                                                                                       // 2595
      // callbacks                                                                                                     // 2596
      oninit: null,             // initialize                                                                          // 2597
      onfocus: null,            // editable has focus                                                                  // 2598
      onblur: null,             // editable out of focus                                                               // 2599
      onenter: null,            // enter key pressed                                                                   // 2600
      onkeyup: null,            // keyup                                                                               // 2601
      onkeydown: null,          // keydown                                                                             // 2602
      onImageUpload: null,      // imageUpload                                                                         // 2603
      onImageUploadError: null, // imageUploadError                                                                    // 2604
      onMediaDelete: null,      // media delete                                                                        // 2605
      onToolbarClick: null,                                                                                            // 2606
      onsubmit: null,                                                                                                  // 2607
                                                                                                                       // 2608
      /**                                                                                                              // 2609
       * manipulate link address when user create link                                                                 // 2610
       * @param {String} sLinkUrl                                                                                      // 2611
       * @return {String}                                                                                              // 2612
       */                                                                                                              // 2613
      onCreateLink: function (sLinkUrl) {                                                                              // 2614
        if (sLinkUrl.indexOf('@') !== -1 && sLinkUrl.indexOf(':') === -1) {                                            // 2615
          sLinkUrl =  'mailto:' + sLinkUrl;                                                                            // 2616
        }                                                                                                              // 2617
                                                                                                                       // 2618
        return sLinkUrl;                                                                                               // 2619
      },                                                                                                               // 2620
                                                                                                                       // 2621
      keyMap: {                                                                                                        // 2622
        pc: {                                                                                                          // 2623
          'ENTER': 'insertParagraph',                                                                                  // 2624
          'CTRL+Z': 'undo',                                                                                            // 2625
          'CTRL+Y': 'redo',                                                                                            // 2626
          'TAB': 'tab',                                                                                                // 2627
          'SHIFT+TAB': 'untab',                                                                                        // 2628
          'CTRL+B': 'bold',                                                                                            // 2629
          'CTRL+I': 'italic',                                                                                          // 2630
          'CTRL+U': 'underline',                                                                                       // 2631
          'CTRL+SHIFT+S': 'strikethrough',                                                                             // 2632
          'CTRL+BACKSLASH': 'removeFormat',                                                                            // 2633
          'CTRL+SHIFT+L': 'justifyLeft',                                                                               // 2634
          'CTRL+SHIFT+E': 'justifyCenter',                                                                             // 2635
          'CTRL+SHIFT+R': 'justifyRight',                                                                              // 2636
          'CTRL+SHIFT+J': 'justifyFull',                                                                               // 2637
          'CTRL+SHIFT+NUM7': 'insertUnorderedList',                                                                    // 2638
          'CTRL+SHIFT+NUM8': 'insertOrderedList',                                                                      // 2639
          'CTRL+LEFTBRACKET': 'outdent',                                                                               // 2640
          'CTRL+RIGHTBRACKET': 'indent',                                                                               // 2641
          'CTRL+NUM0': 'formatPara',                                                                                   // 2642
          'CTRL+NUM1': 'formatH1',                                                                                     // 2643
          'CTRL+NUM2': 'formatH2',                                                                                     // 2644
          'CTRL+NUM3': 'formatH3',                                                                                     // 2645
          'CTRL+NUM4': 'formatH4',                                                                                     // 2646
          'CTRL+NUM5': 'formatH5',                                                                                     // 2647
          'CTRL+NUM6': 'formatH6',                                                                                     // 2648
          'CTRL+ENTER': 'insertHorizontalRule',                                                                        // 2649
          'CTRL+K': 'showLinkDialog'                                                                                   // 2650
        },                                                                                                             // 2651
                                                                                                                       // 2652
        mac: {                                                                                                         // 2653
          'ENTER': 'insertParagraph',                                                                                  // 2654
          'CMD+Z': 'undo',                                                                                             // 2655
          'CMD+SHIFT+Z': 'redo',                                                                                       // 2656
          'TAB': 'tab',                                                                                                // 2657
          'SHIFT+TAB': 'untab',                                                                                        // 2658
          'CMD+B': 'bold',                                                                                             // 2659
          'CMD+I': 'italic',                                                                                           // 2660
          'CMD+U': 'underline',                                                                                        // 2661
          'CMD+SHIFT+S': 'strikethrough',                                                                              // 2662
          'CMD+BACKSLASH': 'removeFormat',                                                                             // 2663
          'CMD+SHIFT+L': 'justifyLeft',                                                                                // 2664
          'CMD+SHIFT+E': 'justifyCenter',                                                                              // 2665
          'CMD+SHIFT+R': 'justifyRight',                                                                               // 2666
          'CMD+SHIFT+J': 'justifyFull',                                                                                // 2667
          'CMD+SHIFT+NUM7': 'insertUnorderedList',                                                                     // 2668
          'CMD+SHIFT+NUM8': 'insertOrderedList',                                                                       // 2669
          'CMD+LEFTBRACKET': 'outdent',                                                                                // 2670
          'CMD+RIGHTBRACKET': 'indent',                                                                                // 2671
          'CMD+NUM0': 'formatPara',                                                                                    // 2672
          'CMD+NUM1': 'formatH1',                                                                                      // 2673
          'CMD+NUM2': 'formatH2',                                                                                      // 2674
          'CMD+NUM3': 'formatH3',                                                                                      // 2675
          'CMD+NUM4': 'formatH4',                                                                                      // 2676
          'CMD+NUM5': 'formatH5',                                                                                      // 2677
          'CMD+NUM6': 'formatH6',                                                                                      // 2678
          'CMD+ENTER': 'insertHorizontalRule',                                                                         // 2679
          'CMD+K': 'showLinkDialog'                                                                                    // 2680
        }                                                                                                              // 2681
      }                                                                                                                // 2682
    },                                                                                                                 // 2683
                                                                                                                       // 2684
    // default language: en-US                                                                                         // 2685
    lang: {                                                                                                            // 2686
      'en-US': {                                                                                                       // 2687
        font: {                                                                                                        // 2688
          bold: 'Bold',                                                                                                // 2689
          italic: 'Italic',                                                                                            // 2690
          underline: 'Underline',                                                                                      // 2691
          clear: 'Remove Font Style',                                                                                  // 2692
          height: 'Line Height',                                                                                       // 2693
          name: 'Font Family',                                                                                         // 2694
          strikethrough: 'Strikethrough',                                                                              // 2695
          subscript: 'Subscript',                                                                                      // 2696
          superscript: 'Superscript',                                                                                  // 2697
          size: 'Font Size'                                                                                            // 2698
        },                                                                                                             // 2699
        image: {                                                                                                       // 2700
          image: 'Picture',                                                                                            // 2701
          insert: 'Insert Image',                                                                                      // 2702
          resizeFull: 'Resize Full',                                                                                   // 2703
          resizeHalf: 'Resize Half',                                                                                   // 2704
          resizeQuarter: 'Resize Quarter',                                                                             // 2705
          floatLeft: 'Float Left',                                                                                     // 2706
          floatRight: 'Float Right',                                                                                   // 2707
          floatNone: 'Float None',                                                                                     // 2708
          shapeRounded: 'Shape: Rounded',                                                                              // 2709
          shapeCircle: 'Shape: Circle',                                                                                // 2710
          shapeThumbnail: 'Shape: Thumbnail',                                                                          // 2711
          shapeNone: 'Shape: None',                                                                                    // 2712
          dragImageHere: 'Drag image or text here',                                                                    // 2713
          dropImage: 'Drop image or Text',                                                                             // 2714
          selectFromFiles: 'Select from files',                                                                        // 2715
          maximumFileSize: 'Maximum file size',                                                                        // 2716
          maximumFileSizeError: 'Maximum file size exceeded.',                                                         // 2717
          url: 'Image URL',                                                                                            // 2718
          remove: 'Remove Image'                                                                                       // 2719
        },                                                                                                             // 2720
        link: {                                                                                                        // 2721
          link: 'Link',                                                                                                // 2722
          insert: 'Insert Link',                                                                                       // 2723
          unlink: 'Unlink',                                                                                            // 2724
          edit: 'Edit',                                                                                                // 2725
          textToDisplay: 'Text to display',                                                                            // 2726
          url: 'To what URL should this link go?',                                                                     // 2727
          openInNewWindow: 'Open in new window'                                                                        // 2728
        },                                                                                                             // 2729
        table: {                                                                                                       // 2730
          table: 'Table'                                                                                               // 2731
        },                                                                                                             // 2732
        hr: {                                                                                                          // 2733
          insert: 'Insert Horizontal Rule'                                                                             // 2734
        },                                                                                                             // 2735
        style: {                                                                                                       // 2736
          style: 'Style',                                                                                              // 2737
          normal: 'Normal',                                                                                            // 2738
          blockquote: 'Quote',                                                                                         // 2739
          pre: 'Code',                                                                                                 // 2740
          h1: 'Header 1',                                                                                              // 2741
          h2: 'Header 2',                                                                                              // 2742
          h3: 'Header 3',                                                                                              // 2743
          h4: 'Header 4',                                                                                              // 2744
          h5: 'Header 5',                                                                                              // 2745
          h6: 'Header 6'                                                                                               // 2746
        },                                                                                                             // 2747
        lists: {                                                                                                       // 2748
          unordered: 'Unordered list',                                                                                 // 2749
          ordered: 'Ordered list'                                                                                      // 2750
        },                                                                                                             // 2751
        options: {                                                                                                     // 2752
          help: 'Help',                                                                                                // 2753
          fullscreen: 'Full Screen',                                                                                   // 2754
          codeview: 'Code View'                                                                                        // 2755
        },                                                                                                             // 2756
        paragraph: {                                                                                                   // 2757
          paragraph: 'Paragraph',                                                                                      // 2758
          outdent: 'Outdent',                                                                                          // 2759
          indent: 'Indent',                                                                                            // 2760
          left: 'Align left',                                                                                          // 2761
          center: 'Align center',                                                                                      // 2762
          right: 'Align right',                                                                                        // 2763
          justify: 'Justify full'                                                                                      // 2764
        },                                                                                                             // 2765
        color: {                                                                                                       // 2766
          recent: 'Recent Color',                                                                                      // 2767
          more: 'More Color',                                                                                          // 2768
          background: 'Background Color',                                                                              // 2769
          foreground: 'Foreground Color',                                                                              // 2770
          transparent: 'Transparent',                                                                                  // 2771
          setTransparent: 'Set transparent',                                                                           // 2772
          reset: 'Reset',                                                                                              // 2773
          resetToDefault: 'Reset to default'                                                                           // 2774
        },                                                                                                             // 2775
        shortcut: {                                                                                                    // 2776
          shortcuts: 'Keyboard shortcuts',                                                                             // 2777
          close: 'Close',                                                                                              // 2778
          textFormatting: 'Text formatting',                                                                           // 2779
          action: 'Action',                                                                                            // 2780
          paragraphFormatting: 'Paragraph formatting',                                                                 // 2781
          documentStyle: 'Document Style',                                                                             // 2782
          extraKeys: 'Extra keys'                                                                                      // 2783
        },                                                                                                             // 2784
        history: {                                                                                                     // 2785
          undo: 'Undo',                                                                                                // 2786
          redo: 'Redo'                                                                                                 // 2787
        }                                                                                                              // 2788
      }                                                                                                                // 2789
    }                                                                                                                  // 2790
  };                                                                                                                   // 2791
                                                                                                                       // 2792
  /**                                                                                                                  // 2793
   * @class core.async                                                                                                 // 2794
   *                                                                                                                   // 2795
   * Async functions which returns `Promise`                                                                           // 2796
   *                                                                                                                   // 2797
   * @singleton                                                                                                        // 2798
   * @alternateClassName async                                                                                         // 2799
   */                                                                                                                  // 2800
  var async = (function () {                                                                                           // 2801
    /**                                                                                                                // 2802
     * @method readFileAsDataURL                                                                                       // 2803
     *                                                                                                                 // 2804
     * read contents of file as representing URL                                                                       // 2805
     *                                                                                                                 // 2806
     * @param {File} file                                                                                              // 2807
     * @return {Promise} - then: sDataUrl                                                                              // 2808
     */                                                                                                                // 2809
    var readFileAsDataURL = function (file) {                                                                          // 2810
      return $.Deferred(function (deferred) {                                                                          // 2811
        $.extend(new FileReader(), {                                                                                   // 2812
          onload: function (e) {                                                                                       // 2813
            var sDataURL = e.target.result;                                                                            // 2814
            deferred.resolve(sDataURL);                                                                                // 2815
          },                                                                                                           // 2816
          onerror: function () {                                                                                       // 2817
            deferred.reject(this);                                                                                     // 2818
          }                                                                                                            // 2819
        }).readAsDataURL(file);                                                                                        // 2820
      }).promise();                                                                                                    // 2821
    };                                                                                                                 // 2822
                                                                                                                       // 2823
    /**                                                                                                                // 2824
     * @method createImage                                                                                             // 2825
     *                                                                                                                 // 2826
     * create `<image>` from url string                                                                                // 2827
     *                                                                                                                 // 2828
     * @param {String} sUrl                                                                                            // 2829
     * @param {String} filename                                                                                        // 2830
     * @return {Promise} - then: $image                                                                                // 2831
     */                                                                                                                // 2832
    var createImage = function (sUrl, filename) {                                                                      // 2833
      return $.Deferred(function (deferred) {                                                                          // 2834
        var $img = $('<img>');                                                                                         // 2835
                                                                                                                       // 2836
        $img.one('load', function () {                                                                                 // 2837
          $img.off('error abort');                                                                                     // 2838
          deferred.resolve($img);                                                                                      // 2839
        }).one('error abort', function () {                                                                            // 2840
          $img.off('load').detach();                                                                                   // 2841
          deferred.reject($img);                                                                                       // 2842
        }).css({                                                                                                       // 2843
          display: 'none'                                                                                              // 2844
        }).appendTo(document.body).attr({                                                                              // 2845
          'src': sUrl,                                                                                                 // 2846
          'data-filename': filename                                                                                    // 2847
        });                                                                                                            // 2848
      }).promise();                                                                                                    // 2849
    };                                                                                                                 // 2850
                                                                                                                       // 2851
    return {                                                                                                           // 2852
      readFileAsDataURL: readFileAsDataURL,                                                                            // 2853
      createImage: createImage                                                                                         // 2854
    };                                                                                                                 // 2855
  })();                                                                                                                // 2856
                                                                                                                       // 2857
  /**                                                                                                                  // 2858
   * @class core.key                                                                                                   // 2859
   *                                                                                                                   // 2860
   * Object for keycodes.                                                                                              // 2861
   *                                                                                                                   // 2862
   * @singleton                                                                                                        // 2863
   * @alternateClassName key                                                                                           // 2864
   */                                                                                                                  // 2865
  var key = (function () {                                                                                             // 2866
    var keyMap = {                                                                                                     // 2867
      'BACKSPACE': 8,                                                                                                  // 2868
      'TAB': 9,                                                                                                        // 2869
      'ENTER': 13,                                                                                                     // 2870
      'SPACE': 32,                                                                                                     // 2871
                                                                                                                       // 2872
      // Number: 0-9                                                                                                   // 2873
      'NUM0': 48,                                                                                                      // 2874
      'NUM1': 49,                                                                                                      // 2875
      'NUM2': 50,                                                                                                      // 2876
      'NUM3': 51,                                                                                                      // 2877
      'NUM4': 52,                                                                                                      // 2878
      'NUM5': 53,                                                                                                      // 2879
      'NUM6': 54,                                                                                                      // 2880
      'NUM7': 55,                                                                                                      // 2881
      'NUM8': 56,                                                                                                      // 2882
                                                                                                                       // 2883
      // Alphabet: a-z                                                                                                 // 2884
      'B': 66,                                                                                                         // 2885
      'E': 69,                                                                                                         // 2886
      'I': 73,                                                                                                         // 2887
      'J': 74,                                                                                                         // 2888
      'K': 75,                                                                                                         // 2889
      'L': 76,                                                                                                         // 2890
      'R': 82,                                                                                                         // 2891
      'S': 83,                                                                                                         // 2892
      'U': 85,                                                                                                         // 2893
      'V': 86,                                                                                                         // 2894
      'Y': 89,                                                                                                         // 2895
      'Z': 90,                                                                                                         // 2896
                                                                                                                       // 2897
      'SLASH': 191,                                                                                                    // 2898
      'LEFTBRACKET': 219,                                                                                              // 2899
      'BACKSLASH': 220,                                                                                                // 2900
      'RIGHTBRACKET': 221                                                                                              // 2901
    };                                                                                                                 // 2902
                                                                                                                       // 2903
    return {                                                                                                           // 2904
      /**                                                                                                              // 2905
       * @method isEdit                                                                                                // 2906
       *                                                                                                               // 2907
       * @param {Number} keyCode                                                                                       // 2908
       * @return {Boolean}                                                                                             // 2909
       */                                                                                                              // 2910
      isEdit: function (keyCode) {                                                                                     // 2911
        return list.contains([8, 9, 13, 32], keyCode);                                                                 // 2912
      },                                                                                                               // 2913
      /**                                                                                                              // 2914
       * @method isMove                                                                                                // 2915
       *                                                                                                               // 2916
       * @param {Number} keyCode                                                                                       // 2917
       * @return {Boolean}                                                                                             // 2918
       */                                                                                                              // 2919
      isMove: function (keyCode) {                                                                                     // 2920
        return list.contains([37, 38, 39, 40], keyCode);                                                               // 2921
      },                                                                                                               // 2922
      /**                                                                                                              // 2923
       * @property {Object} nameFromCode                                                                               // 2924
       * @property {String} nameFromCode.8 "BACKSPACE"                                                                 // 2925
       */                                                                                                              // 2926
      nameFromCode: func.invertObject(keyMap),                                                                         // 2927
      code: keyMap                                                                                                     // 2928
    };                                                                                                                 // 2929
  })();                                                                                                                // 2930
                                                                                                                       // 2931
  /**                                                                                                                  // 2932
   * @class editing.History                                                                                            // 2933
   *                                                                                                                   // 2934
   * Editor History                                                                                                    // 2935
   *                                                                                                                   // 2936
   */                                                                                                                  // 2937
  var History = function ($editable) {                                                                                 // 2938
    var stack = [], stackOffset = -1;                                                                                  // 2939
    var editable = $editable[0];                                                                                       // 2940
                                                                                                                       // 2941
    var makeSnapshot = function () {                                                                                   // 2942
      var rng = range.create();                                                                                        // 2943
      var emptyBookmark = {s: {path: [], offset: 0}, e: {path: [], offset: 0}};                                        // 2944
                                                                                                                       // 2945
      return {                                                                                                         // 2946
        contents: $editable.html(),                                                                                    // 2947
        bookmark: (rng ? rng.bookmark(editable) : emptyBookmark)                                                       // 2948
      };                                                                                                               // 2949
    };                                                                                                                 // 2950
                                                                                                                       // 2951
    var applySnapshot = function (snapshot) {                                                                          // 2952
      if (snapshot.contents !== null) {                                                                                // 2953
        $editable.html(snapshot.contents);                                                                             // 2954
      }                                                                                                                // 2955
      if (snapshot.bookmark !== null) {                                                                                // 2956
        range.createFromBookmark(editable, snapshot.bookmark).select();                                                // 2957
      }                                                                                                                // 2958
    };                                                                                                                 // 2959
                                                                                                                       // 2960
    /**                                                                                                                // 2961
     * undo                                                                                                            // 2962
     */                                                                                                                // 2963
    this.undo = function () {                                                                                          // 2964
      // Create snap shot if not yet recorded                                                                          // 2965
      if ($editable.html() !== stack[stackOffset].contents) {                                                          // 2966
        this.recordUndo();                                                                                             // 2967
      }                                                                                                                // 2968
                                                                                                                       // 2969
      if (0 < stackOffset) {                                                                                           // 2970
        stackOffset--;                                                                                                 // 2971
        applySnapshot(stack[stackOffset]);                                                                             // 2972
      }                                                                                                                // 2973
    };                                                                                                                 // 2974
                                                                                                                       // 2975
    /**                                                                                                                // 2976
     * redo                                                                                                            // 2977
     */                                                                                                                // 2978
    this.redo = function () {                                                                                          // 2979
      if (stack.length - 1 > stackOffset) {                                                                            // 2980
        stackOffset++;                                                                                                 // 2981
        applySnapshot(stack[stackOffset]);                                                                             // 2982
      }                                                                                                                // 2983
    };                                                                                                                 // 2984
                                                                                                                       // 2985
    /**                                                                                                                // 2986
     * recorded undo                                                                                                   // 2987
     */                                                                                                                // 2988
    this.recordUndo = function () {                                                                                    // 2989
      stackOffset++;                                                                                                   // 2990
                                                                                                                       // 2991
      // Wash out stack after stackOffset                                                                              // 2992
      if (stack.length > stackOffset) {                                                                                // 2993
        stack = stack.slice(0, stackOffset);                                                                           // 2994
      }                                                                                                                // 2995
                                                                                                                       // 2996
      // Create new snapshot and push it to the end                                                                    // 2997
      stack.push(makeSnapshot());                                                                                      // 2998
    };                                                                                                                 // 2999
                                                                                                                       // 3000
    // Create first undo stack                                                                                         // 3001
    this.recordUndo();                                                                                                 // 3002
  };                                                                                                                   // 3003
                                                                                                                       // 3004
  /**                                                                                                                  // 3005
   * @class editing.Style                                                                                              // 3006
   *                                                                                                                   // 3007
   * Style                                                                                                             // 3008
   *                                                                                                                   // 3009
   */                                                                                                                  // 3010
  var Style = function () {                                                                                            // 3011
    /**                                                                                                                // 3012
     * @method jQueryCSS                                                                                               // 3013
     *                                                                                                                 // 3014
     * [workaround] for old jQuery                                                                                     // 3015
     * passing an array of style properties to .css()                                                                  // 3016
     * will result in an object of property-value pairs.                                                               // 3017
     * (compability with version < 1.9)                                                                                // 3018
     *                                                                                                                 // 3019
     * @private                                                                                                        // 3020
     * @param  {jQuery} $obj                                                                                           // 3021
     * @param  {Array} propertyNames - An array of one or more CSS properties.                                         // 3022
     * @return {Object}                                                                                                // 3023
     */                                                                                                                // 3024
    var jQueryCSS = function ($obj, propertyNames) {                                                                   // 3025
      if (agent.jqueryVersion < 1.9) {                                                                                 // 3026
        var result = {};                                                                                               // 3027
        $.each(propertyNames, function (idx, propertyName) {                                                           // 3028
          result[propertyName] = $obj.css(propertyName);                                                               // 3029
        });                                                                                                            // 3030
        return result;                                                                                                 // 3031
      }                                                                                                                // 3032
      return $obj.css.call($obj, propertyNames);                                                                       // 3033
    };                                                                                                                 // 3034
                                                                                                                       // 3035
    /**                                                                                                                // 3036
     * returns style object from node                                                                                  // 3037
     *                                                                                                                 // 3038
     * @param {jQuery} $node                                                                                           // 3039
     * @return {Object}                                                                                                // 3040
     */                                                                                                                // 3041
    this.fromNode = function ($node) {                                                                                 // 3042
      var properties = ['font-family', 'font-size', 'text-align', 'list-style-type', 'line-height'];                   // 3043
      var styleInfo = jQueryCSS($node, properties) || {};                                                              // 3044
      styleInfo['font-size'] = parseInt(styleInfo['font-size'], 10);                                                   // 3045
      return styleInfo;                                                                                                // 3046
    };                                                                                                                 // 3047
                                                                                                                       // 3048
    /**                                                                                                                // 3049
     * paragraph level style                                                                                           // 3050
     *                                                                                                                 // 3051
     * @param {WrappedRange} rng                                                                                       // 3052
     * @param {Object} styleInfo                                                                                       // 3053
     */                                                                                                                // 3054
    this.stylePara = function (rng, styleInfo) {                                                                       // 3055
      $.each(rng.nodes(dom.isPara, {                                                                                   // 3056
        includeAncestor: true                                                                                          // 3057
      }), function (idx, para) {                                                                                       // 3058
        $(para).css(styleInfo);                                                                                        // 3059
      });                                                                                                              // 3060
    };                                                                                                                 // 3061
                                                                                                                       // 3062
    /**                                                                                                                // 3063
     * insert and returns styleNodes on range.                                                                         // 3064
     *                                                                                                                 // 3065
     * @param {WrappedRange} rng                                                                                       // 3066
     * @param {Object} [options] - options for styleNodes                                                              // 3067
     * @param {String} [options.nodeName] - default: `SPAN`                                                            // 3068
     * @param {Boolean} [options.expandClosestSibling] - default: `false`                                              // 3069
     * @param {Boolean} [options.onlyPartialContains] - default: `false`                                               // 3070
     * @return {Node[]}                                                                                                // 3071
     */                                                                                                                // 3072
    this.styleNodes = function (rng, options) {                                                                        // 3073
      rng = rng.splitText();                                                                                           // 3074
                                                                                                                       // 3075
      var nodeName = options && options.nodeName || 'SPAN';                                                            // 3076
      var expandClosestSibling = !!(options && options.expandClosestSibling);                                          // 3077
      var onlyPartialContains = !!(options && options.onlyPartialContains);                                            // 3078
                                                                                                                       // 3079
      if (rng.isCollapsed()) {                                                                                         // 3080
        return [rng.insertNode(dom.create(nodeName))];                                                                 // 3081
      }                                                                                                                // 3082
                                                                                                                       // 3083
      var pred = dom.makePredByNodeName(nodeName);                                                                     // 3084
      var nodes = rng.nodes(dom.isText, {                                                                              // 3085
        fullyContains: true                                                                                            // 3086
      }).map(function (text) {                                                                                         // 3087
        return dom.singleChildAncestor(text, pred) || dom.wrap(text, nodeName);                                        // 3088
      });                                                                                                              // 3089
                                                                                                                       // 3090
      if (expandClosestSibling) {                                                                                      // 3091
        if (onlyPartialContains) {                                                                                     // 3092
          var nodesInRange = rng.nodes();                                                                              // 3093
          // compose with partial contains predication                                                                 // 3094
          pred = func.and(pred, function (node) {                                                                      // 3095
            return list.contains(nodesInRange, node);                                                                  // 3096
          });                                                                                                          // 3097
        }                                                                                                              // 3098
                                                                                                                       // 3099
        return nodes.map(function (node) {                                                                             // 3100
          var siblings = dom.withClosestSiblings(node, pred);                                                          // 3101
          var head = list.head(siblings);                                                                              // 3102
          var tails = list.tail(siblings);                                                                             // 3103
          $.each(tails, function (idx, elem) {                                                                         // 3104
            dom.appendChildNodes(head, elem.childNodes);                                                               // 3105
            dom.remove(elem);                                                                                          // 3106
          });                                                                                                          // 3107
          return list.head(siblings);                                                                                  // 3108
        });                                                                                                            // 3109
      } else {                                                                                                         // 3110
        return nodes;                                                                                                  // 3111
      }                                                                                                                // 3112
    };                                                                                                                 // 3113
                                                                                                                       // 3114
    /**                                                                                                                // 3115
     * get current style on cursor                                                                                     // 3116
     *                                                                                                                 // 3117
     * @param {WrappedRange} rng                                                                                       // 3118
     * @return {Object} - object contains style properties.                                                            // 3119
     */                                                                                                                // 3120
    this.current = function (rng) {                                                                                    // 3121
      var $cont = $(dom.isText(rng.sc) ? rng.sc.parentNode : rng.sc);                                                  // 3122
      var styleInfo = this.fromNode($cont);                                                                            // 3123
                                                                                                                       // 3124
      // document.queryCommandState for toggle state                                                                   // 3125
      styleInfo['font-bold'] = document.queryCommandState('bold') ? 'bold' : 'normal';                                 // 3126
      styleInfo['font-italic'] = document.queryCommandState('italic') ? 'italic' : 'normal';                           // 3127
      styleInfo['font-underline'] = document.queryCommandState('underline') ? 'underline' : 'normal';                  // 3128
      styleInfo['font-strikethrough'] = document.queryCommandState('strikeThrough') ? 'strikethrough' : 'normal';      // 3129
      styleInfo['font-superscript'] = document.queryCommandState('superscript') ? 'superscript' : 'normal';            // 3130
      styleInfo['font-subscript'] = document.queryCommandState('subscript') ? 'subscript' : 'normal';                  // 3131
                                                                                                                       // 3132
      // list-style-type to list-style(unordered, ordered)                                                             // 3133
      if (!rng.isOnList()) {                                                                                           // 3134
        styleInfo['list-style'] = 'none';                                                                              // 3135
      } else {                                                                                                         // 3136
        var aOrderedType = ['circle', 'disc', 'disc-leading-zero', 'square'];                                          // 3137
        var isUnordered = $.inArray(styleInfo['list-style-type'], aOrderedType) > -1;                                  // 3138
        styleInfo['list-style'] = isUnordered ? 'unordered' : 'ordered';                                               // 3139
      }                                                                                                                // 3140
                                                                                                                       // 3141
      var para = dom.ancestor(rng.sc, dom.isPara);                                                                     // 3142
      if (para && para.style['line-height']) {                                                                         // 3143
        styleInfo['line-height'] = para.style.lineHeight;                                                              // 3144
      } else {                                                                                                         // 3145
        var lineHeight = parseInt(styleInfo['line-height'], 10) / parseInt(styleInfo['font-size'], 10);                // 3146
        styleInfo['line-height'] = lineHeight.toFixed(1);                                                              // 3147
      }                                                                                                                // 3148
                                                                                                                       // 3149
      styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);                                       // 3150
      styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);                                                  // 3151
      styleInfo.range = rng;                                                                                           // 3152
                                                                                                                       // 3153
      return styleInfo;                                                                                                // 3154
    };                                                                                                                 // 3155
  };                                                                                                                   // 3156
                                                                                                                       // 3157
                                                                                                                       // 3158
  /**                                                                                                                  // 3159
   * @class editing.Bullet                                                                                             // 3160
   *                                                                                                                   // 3161
   * @alternateClassName Bullet                                                                                        // 3162
   */                                                                                                                  // 3163
  var Bullet = function () {                                                                                           // 3164
    /**                                                                                                                // 3165
     * @method insertOrderedList                                                                                       // 3166
     *                                                                                                                 // 3167
     * toggle ordered list                                                                                             // 3168
     *                                                                                                                 // 3169
     * @type command                                                                                                   // 3170
     */                                                                                                                // 3171
    this.insertOrderedList = function () {                                                                             // 3172
      this.toggleList('OL');                                                                                           // 3173
    };                                                                                                                 // 3174
                                                                                                                       // 3175
    /**                                                                                                                // 3176
     * @method insertUnorderedList                                                                                     // 3177
     *                                                                                                                 // 3178
     * toggle unordered list                                                                                           // 3179
     *                                                                                                                 // 3180
     * @type command                                                                                                   // 3181
     */                                                                                                                // 3182
    this.insertUnorderedList = function () {                                                                           // 3183
      this.toggleList('UL');                                                                                           // 3184
    };                                                                                                                 // 3185
                                                                                                                       // 3186
    /**                                                                                                                // 3187
     * @method indent                                                                                                  // 3188
     *                                                                                                                 // 3189
     * indent                                                                                                          // 3190
     *                                                                                                                 // 3191
     * @type command                                                                                                   // 3192
     */                                                                                                                // 3193
    this.indent = function () {                                                                                        // 3194
      var self = this;                                                                                                 // 3195
      var rng = range.create().wrapBodyInlineWithPara();                                                               // 3196
                                                                                                                       // 3197
      var paras = rng.nodes(dom.isPara, { includeAncestor: true });                                                    // 3198
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));                                                 // 3199
                                                                                                                       // 3200
      $.each(clustereds, function (idx, paras) {                                                                       // 3201
        var head = list.head(paras);                                                                                   // 3202
        if (dom.isLi(head)) {                                                                                          // 3203
          self.wrapList(paras, head.parentNode.nodeName);                                                              // 3204
        } else {                                                                                                       // 3205
          $.each(paras, function (idx, para) {                                                                         // 3206
            $(para).css('marginLeft', function (idx, val) {                                                            // 3207
              return (parseInt(val, 10) || 0) + 25;                                                                    // 3208
            });                                                                                                        // 3209
          });                                                                                                          // 3210
        }                                                                                                              // 3211
      });                                                                                                              // 3212
                                                                                                                       // 3213
      rng.select();                                                                                                    // 3214
    };                                                                                                                 // 3215
                                                                                                                       // 3216
    /**                                                                                                                // 3217
     * @method outdent                                                                                                 // 3218
     *                                                                                                                 // 3219
     * outdent                                                                                                         // 3220
     *                                                                                                                 // 3221
     * @type command                                                                                                   // 3222
     */                                                                                                                // 3223
    this.outdent = function () {                                                                                       // 3224
      var self = this;                                                                                                 // 3225
      var rng = range.create().wrapBodyInlineWithPara();                                                               // 3226
                                                                                                                       // 3227
      var paras = rng.nodes(dom.isPara, { includeAncestor: true });                                                    // 3228
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));                                                 // 3229
                                                                                                                       // 3230
      $.each(clustereds, function (idx, paras) {                                                                       // 3231
        var head = list.head(paras);                                                                                   // 3232
        if (dom.isLi(head)) {                                                                                          // 3233
          self.releaseList([paras]);                                                                                   // 3234
        } else {                                                                                                       // 3235
          $.each(paras, function (idx, para) {                                                                         // 3236
            $(para).css('marginLeft', function (idx, val) {                                                            // 3237
              val = (parseInt(val, 10) || 0);                                                                          // 3238
              return val > 25 ? val - 25 : '';                                                                         // 3239
            });                                                                                                        // 3240
          });                                                                                                          // 3241
        }                                                                                                              // 3242
      });                                                                                                              // 3243
                                                                                                                       // 3244
      rng.select();                                                                                                    // 3245
    };                                                                                                                 // 3246
                                                                                                                       // 3247
    /**                                                                                                                // 3248
     * @method toggleList                                                                                              // 3249
     *                                                                                                                 // 3250
     * toggle list                                                                                                     // 3251
     *                                                                                                                 // 3252
     * @param {String} listName - OL or UL                                                                             // 3253
     */                                                                                                                // 3254
    this.toggleList = function (listName) {                                                                            // 3255
      var self = this;                                                                                                 // 3256
      var rng = range.create().wrapBodyInlineWithPara();                                                               // 3257
                                                                                                                       // 3258
      var paras = rng.nodes(dom.isPara, { includeAncestor: true });                                                    // 3259
      var bookmark = rng.paraBookmark(paras);                                                                          // 3260
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));                                                 // 3261
                                                                                                                       // 3262
      // paragraph to list                                                                                             // 3263
      if (list.find(paras, dom.isPurePara)) {                                                                          // 3264
        var wrappedParas = [];                                                                                         // 3265
        $.each(clustereds, function (idx, paras) {                                                                     // 3266
          wrappedParas = wrappedParas.concat(self.wrapList(paras, listName));                                          // 3267
        });                                                                                                            // 3268
        paras = wrappedParas;                                                                                          // 3269
      // list to paragraph or change list style                                                                        // 3270
      } else {                                                                                                         // 3271
        var diffLists = rng.nodes(dom.isList, {                                                                        // 3272
          includeAncestor: true                                                                                        // 3273
        }).filter(function (listNode) {                                                                                // 3274
          return !$.nodeName(listNode, listName);                                                                      // 3275
        });                                                                                                            // 3276
                                                                                                                       // 3277
        if (diffLists.length) {                                                                                        // 3278
          $.each(diffLists, function (idx, listNode) {                                                                 // 3279
            dom.replace(listNode, listName);                                                                           // 3280
          });                                                                                                          // 3281
        } else {                                                                                                       // 3282
          paras = this.releaseList(clustereds, true);                                                                  // 3283
        }                                                                                                              // 3284
      }                                                                                                                // 3285
                                                                                                                       // 3286
      range.createFromParaBookmark(bookmark, paras).select();                                                          // 3287
    };                                                                                                                 // 3288
                                                                                                                       // 3289
    /**                                                                                                                // 3290
     * @method wrapList                                                                                                // 3291
     *                                                                                                                 // 3292
     * @param {Node[]} paras                                                                                           // 3293
     * @param {String} listName                                                                                        // 3294
     * @return {Node[]}                                                                                                // 3295
     */                                                                                                                // 3296
    this.wrapList = function (paras, listName) {                                                                       // 3297
      var head = list.head(paras);                                                                                     // 3298
      var last = list.last(paras);                                                                                     // 3299
                                                                                                                       // 3300
      var prevList = dom.isList(head.previousSibling) && head.previousSibling;                                         // 3301
      var nextList = dom.isList(last.nextSibling) && last.nextSibling;                                                 // 3302
                                                                                                                       // 3303
      var listNode = prevList || dom.insertAfter(dom.create(listName || 'UL'), last);                                  // 3304
                                                                                                                       // 3305
      // P to LI                                                                                                       // 3306
      paras = paras.map(function (para) {                                                                              // 3307
        return dom.isPurePara(para) ? dom.replace(para, 'LI') : para;                                                  // 3308
      });                                                                                                              // 3309
                                                                                                                       // 3310
      // append to list(<ul>, <ol>)                                                                                    // 3311
      dom.appendChildNodes(listNode, paras);                                                                           // 3312
                                                                                                                       // 3313
      if (nextList) {                                                                                                  // 3314
        dom.appendChildNodes(listNode, list.from(nextList.childNodes));                                                // 3315
        dom.remove(nextList);                                                                                          // 3316
      }                                                                                                                // 3317
                                                                                                                       // 3318
      return paras;                                                                                                    // 3319
    };                                                                                                                 // 3320
                                                                                                                       // 3321
    /**                                                                                                                // 3322
     * @method releaseList                                                                                             // 3323
     *                                                                                                                 // 3324
     * @param {Array[]} clustereds                                                                                     // 3325
     * @param {Boolean} isEscapseToBody                                                                                // 3326
     * @return {Node[]}                                                                                                // 3327
     */                                                                                                                // 3328
    this.releaseList = function (clustereds, isEscapseToBody) {                                                        // 3329
      var releasedParas = [];                                                                                          // 3330
                                                                                                                       // 3331
      $.each(clustereds, function (idx, paras) {                                                                       // 3332
        var head = list.head(paras);                                                                                   // 3333
        var last = list.last(paras);                                                                                   // 3334
                                                                                                                       // 3335
        var headList = isEscapseToBody ? dom.lastAncestor(head, dom.isList) :                                          // 3336
                                         head.parentNode;                                                              // 3337
        var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {                                      // 3338
          node: last.parentNode,                                                                                       // 3339
          offset: dom.position(last) + 1                                                                               // 3340
        }, {                                                                                                           // 3341
          isSkipPaddingBlankHTML: true                                                                                 // 3342
        }) : null;                                                                                                     // 3343
                                                                                                                       // 3344
        var middleList = dom.splitTree(headList, {                                                                     // 3345
          node: head.parentNode,                                                                                       // 3346
          offset: dom.position(head)                                                                                   // 3347
        }, {                                                                                                           // 3348
          isSkipPaddingBlankHTML: true                                                                                 // 3349
        });                                                                                                            // 3350
                                                                                                                       // 3351
        paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi) :                                           // 3352
                                  list.from(middleList.childNodes).filter(dom.isLi);                                   // 3353
                                                                                                                       // 3354
        // LI to P                                                                                                     // 3355
        if (isEscapseToBody || !dom.isList(headList.parentNode)) {                                                     // 3356
          paras = paras.map(function (para) {                                                                          // 3357
            return dom.replace(para, 'P');                                                                             // 3358
          });                                                                                                          // 3359
        }                                                                                                              // 3360
                                                                                                                       // 3361
        $.each(list.from(paras).reverse(), function (idx, para) {                                                      // 3362
          dom.insertAfter(para, headList);                                                                             // 3363
        });                                                                                                            // 3364
                                                                                                                       // 3365
        // remove empty lists                                                                                          // 3366
        var rootLists = list.compact([headList, middleList, lastList]);                                                // 3367
        $.each(rootLists, function (idx, rootList) {                                                                   // 3368
          var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));                                 // 3369
          $.each(listNodes.reverse(), function (idx, listNode) {                                                       // 3370
            if (!dom.nodeLength(listNode)) {                                                                           // 3371
              dom.remove(listNode, true);                                                                              // 3372
            }                                                                                                          // 3373
          });                                                                                                          // 3374
        });                                                                                                            // 3375
                                                                                                                       // 3376
        releasedParas = releasedParas.concat(paras);                                                                   // 3377
      });                                                                                                              // 3378
                                                                                                                       // 3379
      return releasedParas;                                                                                            // 3380
    };                                                                                                                 // 3381
  };                                                                                                                   // 3382
                                                                                                                       // 3383
                                                                                                                       // 3384
  /**                                                                                                                  // 3385
   * @class editing.Typing                                                                                             // 3386
   *                                                                                                                   // 3387
   * Typing                                                                                                            // 3388
   *                                                                                                                   // 3389
   */                                                                                                                  // 3390
  var Typing = function () {                                                                                           // 3391
                                                                                                                       // 3392
    // a Bullet instance to toggle lists off                                                                           // 3393
    var bullet = new Bullet();                                                                                         // 3394
                                                                                                                       // 3395
    /**                                                                                                                // 3396
     * insert tab                                                                                                      // 3397
     *                                                                                                                 // 3398
     * @param {jQuery} $editable                                                                                       // 3399
     * @param {WrappedRange} rng                                                                                       // 3400
     * @param {Number} tabsize                                                                                         // 3401
     */                                                                                                                // 3402
    this.insertTab = function ($editable, rng, tabsize) {                                                              // 3403
      var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));                                            // 3404
      rng = rng.deleteContents();                                                                                      // 3405
      rng.insertNode(tab, true);                                                                                       // 3406
                                                                                                                       // 3407
      rng = range.create(tab, tabsize);                                                                                // 3408
      rng.select();                                                                                                    // 3409
    };                                                                                                                 // 3410
                                                                                                                       // 3411
    /**                                                                                                                // 3412
     * insert paragraph                                                                                                // 3413
     */                                                                                                                // 3414
    this.insertParagraph = function () {                                                                               // 3415
      var rng = range.create();                                                                                        // 3416
                                                                                                                       // 3417
      // deleteContents on range.                                                                                      // 3418
      rng = rng.deleteContents();                                                                                      // 3419
                                                                                                                       // 3420
      // Wrap range if it needs to be wrapped by paragraph                                                             // 3421
      rng = rng.wrapBodyInlineWithPara();                                                                              // 3422
                                                                                                                       // 3423
      // finding paragraph                                                                                             // 3424
      var splitRoot = dom.ancestor(rng.sc, dom.isPara);                                                                // 3425
                                                                                                                       // 3426
      var nextPara;                                                                                                    // 3427
      // on paragraph: split paragraph                                                                                 // 3428
      if (splitRoot) {                                                                                                 // 3429
        // if it is an empty line with li                                                                              // 3430
        if (dom.isEmpty(splitRoot) && dom.isLi(splitRoot)) {                                                           // 3431
          // disable UL/OL and escape!                                                                                 // 3432
          bullet.toggleList(splitRoot.parentNode.nodeName);                                                            // 3433
          return;                                                                                                      // 3434
        // if new line has content (not a line break)                                                                  // 3435
        } else {                                                                                                       // 3436
          nextPara = dom.splitTree(splitRoot, rng.getStartPoint());                                                    // 3437
                                                                                                                       // 3438
          var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);                                         // 3439
          emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));                         // 3440
                                                                                                                       // 3441
          $.each(emptyAnchors, function (idx, anchor) {                                                                // 3442
            dom.remove(anchor);                                                                                        // 3443
          });                                                                                                          // 3444
        }                                                                                                              // 3445
      // no paragraph: insert empty paragraph                                                                          // 3446
      } else {                                                                                                         // 3447
        var next = rng.sc.childNodes[rng.so];                                                                          // 3448
        nextPara = $(dom.emptyPara)[0];                                                                                // 3449
        if (next) {                                                                                                    // 3450
          rng.sc.insertBefore(nextPara, next);                                                                         // 3451
        } else {                                                                                                       // 3452
          rng.sc.appendChild(nextPara);                                                                                // 3453
        }                                                                                                              // 3454
      }                                                                                                                // 3455
                                                                                                                       // 3456
      range.create(nextPara, 0).normalize().select();                                                                  // 3457
                                                                                                                       // 3458
    };                                                                                                                 // 3459
                                                                                                                       // 3460
  };                                                                                                                   // 3461
                                                                                                                       // 3462
  /**                                                                                                                  // 3463
   * @class editing.Table                                                                                              // 3464
   *                                                                                                                   // 3465
   * Table                                                                                                             // 3466
   *                                                                                                                   // 3467
   */                                                                                                                  // 3468
  var Table = function () {                                                                                            // 3469
    /**                                                                                                                // 3470
     * handle tab key                                                                                                  // 3471
     *                                                                                                                 // 3472
     * @param {WrappedRange} rng                                                                                       // 3473
     * @param {Boolean} isShift                                                                                        // 3474
     */                                                                                                                // 3475
    this.tab = function (rng, isShift) {                                                                               // 3476
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);                                                       // 3477
      var table = dom.ancestor(cell, dom.isTable);                                                                     // 3478
      var cells = dom.listDescendant(table, dom.isCell);                                                               // 3479
                                                                                                                       // 3480
      var nextCell = list[isShift ? 'prev' : 'next'](cells, cell);                                                     // 3481
      if (nextCell) {                                                                                                  // 3482
        range.create(nextCell, 0).select();                                                                            // 3483
      }                                                                                                                // 3484
    };                                                                                                                 // 3485
                                                                                                                       // 3486
    /**                                                                                                                // 3487
     * create empty table element                                                                                      // 3488
     *                                                                                                                 // 3489
     * @param {Number} rowCount                                                                                        // 3490
     * @param {Number} colCount                                                                                        // 3491
     * @return {Node}                                                                                                  // 3492
     */                                                                                                                // 3493
    this.createTable = function (colCount, rowCount) {                                                                 // 3494
      var tds = [], tdHTML;                                                                                            // 3495
      for (var idxCol = 0; idxCol < colCount; idxCol++) {                                                              // 3496
        tds.push('<td>' + dom.blank + '</td>');                                                                        // 3497
      }                                                                                                                // 3498
      tdHTML = tds.join('');                                                                                           // 3499
                                                                                                                       // 3500
      var trs = [], trHTML;                                                                                            // 3501
      for (var idxRow = 0; idxRow < rowCount; idxRow++) {                                                              // 3502
        trs.push('<tr>' + tdHTML + '</tr>');                                                                           // 3503
      }                                                                                                                // 3504
      trHTML = trs.join('');                                                                                           // 3505
      return $('<table class="table table-bordered">' + trHTML + '</table>')[0];                                       // 3506
    };                                                                                                                 // 3507
  };                                                                                                                   // 3508
                                                                                                                       // 3509
                                                                                                                       // 3510
  var KEY_BOGUS = 'bogus';                                                                                             // 3511
                                                                                                                       // 3512
  /**                                                                                                                  // 3513
   * @class editing.Editor                                                                                             // 3514
   *                                                                                                                   // 3515
   * Editor                                                                                                            // 3516
   *                                                                                                                   // 3517
   */                                                                                                                  // 3518
  var Editor = function (handler) {                                                                                    // 3519
                                                                                                                       // 3520
    var self = this;                                                                                                   // 3521
    var style = new Style();                                                                                           // 3522
    var table = new Table();                                                                                           // 3523
    var typing = new Typing();                                                                                         // 3524
    var bullet = new Bullet();                                                                                         // 3525
                                                                                                                       // 3526
    /**                                                                                                                // 3527
     * @method createRange                                                                                             // 3528
     *                                                                                                                 // 3529
     * create range                                                                                                    // 3530
     *                                                                                                                 // 3531
     * @param {jQuery} $editable                                                                                       // 3532
     * @return {WrappedRange}                                                                                          // 3533
     */                                                                                                                // 3534
    this.createRange = function ($editable) {                                                                          // 3535
      this.focus($editable);                                                                                           // 3536
      return range.create();                                                                                           // 3537
    };                                                                                                                 // 3538
                                                                                                                       // 3539
    /**                                                                                                                // 3540
     * @method saveRange                                                                                               // 3541
     *                                                                                                                 // 3542
     * save current range                                                                                              // 3543
     *                                                                                                                 // 3544
     * @param {jQuery} $editable                                                                                       // 3545
     * @param {Boolean} [thenCollapse=false]                                                                           // 3546
     */                                                                                                                // 3547
    this.saveRange = function ($editable, thenCollapse) {                                                              // 3548
      this.focus($editable);                                                                                           // 3549
      $editable.data('range', range.create());                                                                         // 3550
      if (thenCollapse) {                                                                                              // 3551
        range.create().collapse().select();                                                                            // 3552
      }                                                                                                                // 3553
    };                                                                                                                 // 3554
                                                                                                                       // 3555
    /**                                                                                                                // 3556
     * @method saveRange                                                                                               // 3557
     *                                                                                                                 // 3558
     * save current node list to $editable.data('childNodes')                                                          // 3559
     *                                                                                                                 // 3560
     * @param {jQuery} $editable                                                                                       // 3561
     */                                                                                                                // 3562
    this.saveNode = function ($editable) {                                                                             // 3563
      // copy child node reference                                                                                     // 3564
      var copy = [];                                                                                                   // 3565
      for (var key  = 0, len = $editable[0].childNodes.length; key < len; key++) {                                     // 3566
        copy.push($editable[0].childNodes[key]);                                                                       // 3567
      }                                                                                                                // 3568
      $editable.data('childNodes', copy);                                                                              // 3569
    };                                                                                                                 // 3570
                                                                                                                       // 3571
    /**                                                                                                                // 3572
     * @method restoreRange                                                                                            // 3573
     *                                                                                                                 // 3574
     * restore lately range                                                                                            // 3575
     *                                                                                                                 // 3576
     * @param {jQuery} $editable                                                                                       // 3577
     */                                                                                                                // 3578
    this.restoreRange = function ($editable) {                                                                         // 3579
      var rng = $editable.data('range');                                                                               // 3580
      if (rng) {                                                                                                       // 3581
        rng.select();                                                                                                  // 3582
        this.focus($editable);                                                                                         // 3583
      }                                                                                                                // 3584
    };                                                                                                                 // 3585
                                                                                                                       // 3586
    /**                                                                                                                // 3587
     * @method restoreNode                                                                                             // 3588
     *                                                                                                                 // 3589
     * restore lately node list                                                                                        // 3590
     *                                                                                                                 // 3591
     * @param {jQuery} $editable                                                                                       // 3592
     */                                                                                                                // 3593
    this.restoreNode = function ($editable) {                                                                          // 3594
      $editable.html('');                                                                                              // 3595
      var child = $editable.data('childNodes');                                                                        // 3596
      for (var index = 0, len = child.length; index < len; index++) {                                                  // 3597
        $editable[0].appendChild(child[index]);                                                                        // 3598
      }                                                                                                                // 3599
    };                                                                                                                 // 3600
                                                                                                                       // 3601
    /**                                                                                                                // 3602
     * @method currentStyle                                                                                            // 3603
     *                                                                                                                 // 3604
     * current style                                                                                                   // 3605
     *                                                                                                                 // 3606
     * @param {Node} target                                                                                            // 3607
     * @return {Object|Boolean} unfocus                                                                                // 3608
     */                                                                                                                // 3609
    this.currentStyle = function (target) {                                                                            // 3610
      var rng = range.create();                                                                                        // 3611
      var styleInfo =  rng && rng.isOnEditable() ? style.current(rng.normalize()) : {};                                // 3612
      if (dom.isImg(target)) {                                                                                         // 3613
        styleInfo.image = target;                                                                                      // 3614
      }                                                                                                                // 3615
      return styleInfo;                                                                                                // 3616
    };                                                                                                                 // 3617
                                                                                                                       // 3618
    /**                                                                                                                // 3619
     * style from node                                                                                                 // 3620
     *                                                                                                                 // 3621
     * @param {jQuery} $node                                                                                           // 3622
     * @return {Object}                                                                                                // 3623
     */                                                                                                                // 3624
    this.styleFromNode = function ($node) {                                                                            // 3625
      return style.fromNode($node);                                                                                    // 3626
    };                                                                                                                 // 3627
                                                                                                                       // 3628
    var triggerOnBeforeChange = function ($editable) {                                                                 // 3629
      var $holder = dom.makeLayoutInfo($editable).holder();                                                            // 3630
      handler.bindCustomEvent(                                                                                         // 3631
        $holder, $editable.data('callbacks'), 'before.command'                                                         // 3632
      )($editable.html(), $editable);                                                                                  // 3633
    };                                                                                                                 // 3634
                                                                                                                       // 3635
    var triggerOnChange = function ($editable) {                                                                       // 3636
      var $holder = dom.makeLayoutInfo($editable).holder();                                                            // 3637
      handler.bindCustomEvent(                                                                                         // 3638
        $holder, $editable.data('callbacks'), 'change'                                                                 // 3639
      )($editable.html(), $editable);                                                                                  // 3640
    };                                                                                                                 // 3641
                                                                                                                       // 3642
    /**                                                                                                                // 3643
     * @method undo                                                                                                    // 3644
     * undo                                                                                                            // 3645
     * @param {jQuery} $editable                                                                                       // 3646
     */                                                                                                                // 3647
    this.undo = function ($editable) {                                                                                 // 3648
      triggerOnBeforeChange($editable);                                                                                // 3649
      $editable.data('NoteHistory').undo();                                                                            // 3650
      triggerOnChange($editable);                                                                                      // 3651
    };                                                                                                                 // 3652
                                                                                                                       // 3653
    /**                                                                                                                // 3654
     * @method redo                                                                                                    // 3655
     * redo                                                                                                            // 3656
     * @param {jQuery} $editable                                                                                       // 3657
     */                                                                                                                // 3658
    this.redo = function ($editable) {                                                                                 // 3659
      triggerOnBeforeChange($editable);                                                                                // 3660
      $editable.data('NoteHistory').redo();                                                                            // 3661
      triggerOnChange($editable);                                                                                      // 3662
    };                                                                                                                 // 3663
                                                                                                                       // 3664
    /**                                                                                                                // 3665
     * @method beforeCommand                                                                                           // 3666
     * before command                                                                                                  // 3667
     * @param {jQuery} $editable                                                                                       // 3668
     */                                                                                                                // 3669
    var beforeCommand = this.beforeCommand = function ($editable) {                                                    // 3670
      triggerOnBeforeChange($editable);                                                                                // 3671
      // keep focus on editable before command execution                                                               // 3672
      self.focus($editable);                                                                                           // 3673
    };                                                                                                                 // 3674
                                                                                                                       // 3675
    /**                                                                                                                // 3676
     * @method afterCommand                                                                                            // 3677
     * after command                                                                                                   // 3678
     * @param {jQuery} $editable                                                                                       // 3679
     * @param {Boolean} isPreventTrigger                                                                               // 3680
     */                                                                                                                // 3681
    var afterCommand = this.afterCommand = function ($editable, isPreventTrigger) {                                    // 3682
      $editable.data('NoteHistory').recordUndo();                                                                      // 3683
      if (!isPreventTrigger) {                                                                                         // 3684
        triggerOnChange($editable);                                                                                    // 3685
      }                                                                                                                // 3686
    };                                                                                                                 // 3687
                                                                                                                       // 3688
    /**                                                                                                                // 3689
     * @method bold                                                                                                    // 3690
     * @param {jQuery} $editable                                                                                       // 3691
     * @param {Mixed} value                                                                                            // 3692
     */                                                                                                                // 3693
                                                                                                                       // 3694
    /**                                                                                                                // 3695
     * @method italic                                                                                                  // 3696
     * @param {jQuery} $editable                                                                                       // 3697
     * @param {Mixed} value                                                                                            // 3698
     */                                                                                                                // 3699
                                                                                                                       // 3700
    /**                                                                                                                // 3701
     * @method underline                                                                                               // 3702
     * @param {jQuery} $editable                                                                                       // 3703
     * @param {Mixed} value                                                                                            // 3704
     */                                                                                                                // 3705
                                                                                                                       // 3706
    /**                                                                                                                // 3707
     * @method strikethrough                                                                                           // 3708
     * @param {jQuery} $editable                                                                                       // 3709
     * @param {Mixed} value                                                                                            // 3710
     */                                                                                                                // 3711
                                                                                                                       // 3712
    /**                                                                                                                // 3713
     * @method formatBlock                                                                                             // 3714
     * @param {jQuery} $editable                                                                                       // 3715
     * @param {Mixed} value                                                                                            // 3716
     */                                                                                                                // 3717
                                                                                                                       // 3718
    /**                                                                                                                // 3719
     * @method superscript                                                                                             // 3720
     * @param {jQuery} $editable                                                                                       // 3721
     * @param {Mixed} value                                                                                            // 3722
     */                                                                                                                // 3723
                                                                                                                       // 3724
    /**                                                                                                                // 3725
     * @method subscript                                                                                               // 3726
     * @param {jQuery} $editable                                                                                       // 3727
     * @param {Mixed} value                                                                                            // 3728
     */                                                                                                                // 3729
                                                                                                                       // 3730
    /**                                                                                                                // 3731
     * @method justifyLeft                                                                                             // 3732
     * @param {jQuery} $editable                                                                                       // 3733
     * @param {Mixed} value                                                                                            // 3734
     */                                                                                                                // 3735
                                                                                                                       // 3736
    /**                                                                                                                // 3737
     * @method justifyCenter                                                                                           // 3738
     * @param {jQuery} $editable                                                                                       // 3739
     * @param {Mixed} value                                                                                            // 3740
     */                                                                                                                // 3741
                                                                                                                       // 3742
    /**                                                                                                                // 3743
     * @method justifyRight                                                                                            // 3744
     * @param {jQuery} $editable                                                                                       // 3745
     * @param {Mixed} value                                                                                            // 3746
     */                                                                                                                // 3747
                                                                                                                       // 3748
    /**                                                                                                                // 3749
     * @method justifyFull                                                                                             // 3750
     * @param {jQuery} $editable                                                                                       // 3751
     * @param {Mixed} value                                                                                            // 3752
     */                                                                                                                // 3753
                                                                                                                       // 3754
    /**                                                                                                                // 3755
     * @method formatBlock                                                                                             // 3756
     * @param {jQuery} $editable                                                                                       // 3757
     * @param {Mixed} value                                                                                            // 3758
     */                                                                                                                // 3759
                                                                                                                       // 3760
    /**                                                                                                                // 3761
     * @method removeFormat                                                                                            // 3762
     * @param {jQuery} $editable                                                                                       // 3763
     * @param {Mixed} value                                                                                            // 3764
     */                                                                                                                // 3765
                                                                                                                       // 3766
    /**                                                                                                                // 3767
     * @method backColor                                                                                               // 3768
     * @param {jQuery} $editable                                                                                       // 3769
     * @param {Mixed} value                                                                                            // 3770
     */                                                                                                                // 3771
                                                                                                                       // 3772
    /**                                                                                                                // 3773
     * @method foreColor                                                                                               // 3774
     * @param {jQuery} $editable                                                                                       // 3775
     * @param {Mixed} value                                                                                            // 3776
     */                                                                                                                // 3777
                                                                                                                       // 3778
    /**                                                                                                                // 3779
     * @method insertHorizontalRule                                                                                    // 3780
     * @param {jQuery} $editable                                                                                       // 3781
     * @param {Mixed} value                                                                                            // 3782
     */                                                                                                                // 3783
                                                                                                                       // 3784
    /**                                                                                                                // 3785
     * @method fontName                                                                                                // 3786
     *                                                                                                                 // 3787
     * change font name                                                                                                // 3788
     *                                                                                                                 // 3789
     * @param {jQuery} $editable                                                                                       // 3790
     * @param {Mixed} value                                                                                            // 3791
     */                                                                                                                // 3792
                                                                                                                       // 3793
    /* jshint ignore:start */                                                                                          // 3794
    // native commands(with execCommand), generate function for execCommand                                            // 3795
    var commands = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',                        // 3796
                    'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',                                     // 3797
                    'formatBlock', 'removeFormat',                                                                     // 3798
                    'backColor', 'foreColor', 'fontName'];                                                             // 3799
                                                                                                                       // 3800
    for (var idx = 0, len = commands.length; idx < len; idx ++) {                                                      // 3801
      this[commands[idx]] = (function (sCmd) {                                                                         // 3802
        return function ($editable, value) {                                                                           // 3803
          beforeCommand($editable);                                                                                    // 3804
                                                                                                                       // 3805
          document.execCommand(sCmd, false, value);                                                                    // 3806
                                                                                                                       // 3807
          afterCommand($editable, true);                                                                               // 3808
        };                                                                                                             // 3809
      })(commands[idx]);                                                                                               // 3810
    }                                                                                                                  // 3811
    /* jshint ignore:end */                                                                                            // 3812
                                                                                                                       // 3813
    /**                                                                                                                // 3814
     * @method tab                                                                                                     // 3815
     *                                                                                                                 // 3816
     * handle tab key                                                                                                  // 3817
     *                                                                                                                 // 3818
     * @param {jQuery} $editable                                                                                       // 3819
     * @param {Object} options                                                                                         // 3820
     */                                                                                                                // 3821
    this.tab = function ($editable, options) {                                                                         // 3822
      var rng = this.createRange($editable);                                                                           // 3823
      if (rng.isCollapsed() && rng.isOnCell()) {                                                                       // 3824
        table.tab(rng);                                                                                                // 3825
      } else {                                                                                                         // 3826
        beforeCommand($editable);                                                                                      // 3827
        typing.insertTab($editable, rng, options.tabsize);                                                             // 3828
        afterCommand($editable);                                                                                       // 3829
      }                                                                                                                // 3830
    };                                                                                                                 // 3831
                                                                                                                       // 3832
    /**                                                                                                                // 3833
     * @method untab                                                                                                   // 3834
     *                                                                                                                 // 3835
     * handle shift+tab key                                                                                            // 3836
     *                                                                                                                 // 3837
     */                                                                                                                // 3838
    this.untab = function ($editable) {                                                                                // 3839
      var rng = this.createRange($editable);                                                                           // 3840
      if (rng.isCollapsed() && rng.isOnCell()) {                                                                       // 3841
        table.tab(rng, true);                                                                                          // 3842
      }                                                                                                                // 3843
    };                                                                                                                 // 3844
                                                                                                                       // 3845
    /**                                                                                                                // 3846
     * @method insertParagraph                                                                                         // 3847
     *                                                                                                                 // 3848
     * insert paragraph                                                                                                // 3849
     *                                                                                                                 // 3850
     * @param {Node} $editable                                                                                         // 3851
     */                                                                                                                // 3852
    this.insertParagraph = function ($editable) {                                                                      // 3853
      beforeCommand($editable);                                                                                        // 3854
      typing.insertParagraph($editable);                                                                               // 3855
      afterCommand($editable);                                                                                         // 3856
    };                                                                                                                 // 3857
                                                                                                                       // 3858
    /**                                                                                                                // 3859
     * @method insertOrderedList                                                                                       // 3860
     *                                                                                                                 // 3861
     * @param {jQuery} $editable                                                                                       // 3862
     */                                                                                                                // 3863
    this.insertOrderedList = function ($editable) {                                                                    // 3864
      beforeCommand($editable);                                                                                        // 3865
      bullet.insertOrderedList($editable);                                                                             // 3866
      afterCommand($editable);                                                                                         // 3867
    };                                                                                                                 // 3868
                                                                                                                       // 3869
    /**                                                                                                                // 3870
     * @param {jQuery} $editable                                                                                       // 3871
     */                                                                                                                // 3872
    this.insertUnorderedList = function ($editable) {                                                                  // 3873
      beforeCommand($editable);                                                                                        // 3874
      bullet.insertUnorderedList($editable);                                                                           // 3875
      afterCommand($editable);                                                                                         // 3876
    };                                                                                                                 // 3877
                                                                                                                       // 3878
    /**                                                                                                                // 3879
     * @param {jQuery} $editable                                                                                       // 3880
     */                                                                                                                // 3881
    this.indent = function ($editable) {                                                                               // 3882
      beforeCommand($editable);                                                                                        // 3883
      bullet.indent($editable);                                                                                        // 3884
      afterCommand($editable);                                                                                         // 3885
    };                                                                                                                 // 3886
                                                                                                                       // 3887
    /**                                                                                                                // 3888
     * @param {jQuery} $editable                                                                                       // 3889
     */                                                                                                                // 3890
    this.outdent = function ($editable) {                                                                              // 3891
      beforeCommand($editable);                                                                                        // 3892
      bullet.outdent($editable);                                                                                       // 3893
      afterCommand($editable);                                                                                         // 3894
    };                                                                                                                 // 3895
                                                                                                                       // 3896
    /**                                                                                                                // 3897
     * insert image                                                                                                    // 3898
     *                                                                                                                 // 3899
     * @param {jQuery} $editable                                                                                       // 3900
     * @param {String} sUrl                                                                                            // 3901
     */                                                                                                                // 3902
    this.insertImage = function ($editable, sUrl, filename) {                                                          // 3903
      async.createImage(sUrl, filename).then(function ($image) {                                                       // 3904
        beforeCommand($editable);                                                                                      // 3905
        $image.css({                                                                                                   // 3906
          display: '',                                                                                                 // 3907
          width: Math.min($editable.width(), $image.width())                                                           // 3908
        });                                                                                                            // 3909
        range.create().insertNode($image[0]);                                                                          // 3910
        range.createFromNodeAfter($image[0]).select();                                                                 // 3911
        afterCommand($editable);                                                                                       // 3912
      }).fail(function () {                                                                                            // 3913
        var $holder = dom.makeLayoutInfo($editable).holder();                                                          // 3914
        handler.bindCustomEvent(                                                                                       // 3915
          $holder, $editable.data('callbacks'), 'image.upload.error'                                                   // 3916
        )();                                                                                                           // 3917
      });                                                                                                              // 3918
    };                                                                                                                 // 3919
                                                                                                                       // 3920
    /**                                                                                                                // 3921
     * @method insertNode                                                                                              // 3922
     * insert node                                                                                                     // 3923
     * @param {Node} $editable                                                                                         // 3924
     * @param {Node} node                                                                                              // 3925
     */                                                                                                                // 3926
    this.insertNode = function ($editable, node) {                                                                     // 3927
      beforeCommand($editable);                                                                                        // 3928
      range.create().insertNode(node);                                                                                 // 3929
      range.createFromNodeAfter(node).select();                                                                        // 3930
      afterCommand($editable);                                                                                         // 3931
    };                                                                                                                 // 3932
                                                                                                                       // 3933
    /**                                                                                                                // 3934
     * insert text                                                                                                     // 3935
     * @param {Node} $editable                                                                                         // 3936
     * @param {String} text                                                                                            // 3937
     */                                                                                                                // 3938
    this.insertText = function ($editable, text) {                                                                     // 3939
      beforeCommand($editable);                                                                                        // 3940
      var textNode = range.create().insertNode(dom.createText(text));                                                  // 3941
      range.create(textNode, dom.nodeLength(textNode)).select();                                                       // 3942
      afterCommand($editable);                                                                                         // 3943
    };                                                                                                                 // 3944
                                                                                                                       // 3945
    /**                                                                                                                // 3946
     * paste HTML                                                                                                      // 3947
     * @param {Node} $editable                                                                                         // 3948
     * @param {String} markup                                                                                          // 3949
     */                                                                                                                // 3950
    this.pasteHTML = function ($editable, markup) {                                                                    // 3951
      beforeCommand($editable);                                                                                        // 3952
      var contents = range.create().pasteHTML(markup);                                                                 // 3953
      range.createFromNodeAfter(list.last(contents)).select();                                                         // 3954
      afterCommand($editable);                                                                                         // 3955
    };                                                                                                                 // 3956
                                                                                                                       // 3957
    /**                                                                                                                // 3958
     * formatBlock                                                                                                     // 3959
     *                                                                                                                 // 3960
     * @param {jQuery} $editable                                                                                       // 3961
     * @param {String} tagName                                                                                         // 3962
     */                                                                                                                // 3963
    this.formatBlock = function ($editable, tagName) {                                                                 // 3964
      beforeCommand($editable);                                                                                        // 3965
      // [workaround] for MSIE, IE need `<`                                                                            // 3966
      tagName = agent.isMSIE ? '<' + tagName + '>' : tagName;                                                          // 3967
      document.execCommand('FormatBlock', false, tagName);                                                             // 3968
      afterCommand($editable);                                                                                         // 3969
    };                                                                                                                 // 3970
                                                                                                                       // 3971
    this.formatPara = function ($editable) {                                                                           // 3972
      beforeCommand($editable);                                                                                        // 3973
      this.formatBlock($editable, 'P');                                                                                // 3974
      afterCommand($editable);                                                                                         // 3975
    };                                                                                                                 // 3976
                                                                                                                       // 3977
    /* jshint ignore:start */                                                                                          // 3978
    for (var idx = 1; idx <= 6; idx ++) {                                                                              // 3979
      this['formatH' + idx] = function (idx) {                                                                         // 3980
        return function ($editable) {                                                                                  // 3981
          this.formatBlock($editable, 'H' + idx);                                                                      // 3982
        };                                                                                                             // 3983
      }(idx);                                                                                                          // 3984
    };                                                                                                                 // 3985
    /* jshint ignore:end */                                                                                            // 3986
                                                                                                                       // 3987
    /**                                                                                                                // 3988
     * fontSize                                                                                                        // 3989
     *                                                                                                                 // 3990
     * @param {jQuery} $editable                                                                                       // 3991
     * @param {String} value - px                                                                                      // 3992
     */                                                                                                                // 3993
    this.fontSize = function ($editable, value) {                                                                      // 3994
      var rng = range.create();                                                                                        // 3995
                                                                                                                       // 3996
      if (rng.isCollapsed()) {                                                                                         // 3997
        var spans = style.styleNodes(rng);                                                                             // 3998
        var firstSpan = list.head(spans);                                                                              // 3999
                                                                                                                       // 4000
        $(spans).css({                                                                                                 // 4001
          'font-size': value + 'px'                                                                                    // 4002
        });                                                                                                            // 4003
                                                                                                                       // 4004
        // [workaround] added styled bogus span for style                                                              // 4005
        //  - also bogus character needed for cursor position                                                          // 4006
        if (firstSpan && !dom.nodeLength(firstSpan)) {                                                                 // 4007
          firstSpan.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR;                                                              // 4008
          range.createFromNodeAfter(firstSpan.firstChild).select();                                                    // 4009
          $editable.data(KEY_BOGUS, firstSpan);                                                                        // 4010
        }                                                                                                              // 4011
      } else {                                                                                                         // 4012
        beforeCommand($editable);                                                                                      // 4013
        $(style.styleNodes(rng)).css({                                                                                 // 4014
          'font-size': value + 'px'                                                                                    // 4015
        });                                                                                                            // 4016
        afterCommand($editable);                                                                                       // 4017
      }                                                                                                                // 4018
    };                                                                                                                 // 4019
                                                                                                                       // 4020
    /**                                                                                                                // 4021
     * insert horizontal rule                                                                                          // 4022
     * @param {jQuery} $editable                                                                                       // 4023
     */                                                                                                                // 4024
    this.insertHorizontalRule = function ($editable) {                                                                 // 4025
      beforeCommand($editable);                                                                                        // 4026
                                                                                                                       // 4027
      var rng = range.create();                                                                                        // 4028
      var hrNode = rng.insertNode($('<HR/>')[0]);                                                                      // 4029
      if (hrNode.nextSibling) {                                                                                        // 4030
        range.create(hrNode.nextSibling, 0).normalize().select();                                                      // 4031
      }                                                                                                                // 4032
                                                                                                                       // 4033
      afterCommand($editable);                                                                                         // 4034
    };                                                                                                                 // 4035
                                                                                                                       // 4036
    /**                                                                                                                // 4037
     * remove bogus node and character                                                                                 // 4038
     */                                                                                                                // 4039
    this.removeBogus = function ($editable) {                                                                          // 4040
      var bogusNode = $editable.data(KEY_BOGUS);                                                                       // 4041
      if (!bogusNode) {                                                                                                // 4042
        return;                                                                                                        // 4043
      }                                                                                                                // 4044
                                                                                                                       // 4045
      var textNode = list.find(list.from(bogusNode.childNodes), dom.isText);                                           // 4046
                                                                                                                       // 4047
      var bogusCharIdx = textNode.nodeValue.indexOf(dom.ZERO_WIDTH_NBSP_CHAR);                                         // 4048
      if (bogusCharIdx !== -1) {                                                                                       // 4049
        textNode.deleteData(bogusCharIdx, 1);                                                                          // 4050
      }                                                                                                                // 4051
                                                                                                                       // 4052
      if (dom.isEmpty(bogusNode)) {                                                                                    // 4053
        dom.remove(bogusNode);                                                                                         // 4054
      }                                                                                                                // 4055
                                                                                                                       // 4056
      $editable.removeData(KEY_BOGUS);                                                                                 // 4057
    };                                                                                                                 // 4058
                                                                                                                       // 4059
    /**                                                                                                                // 4060
     * lineHeight                                                                                                      // 4061
     * @param {jQuery} $editable                                                                                       // 4062
     * @param {String} value                                                                                           // 4063
     */                                                                                                                // 4064
    this.lineHeight = function ($editable, value) {                                                                    // 4065
      beforeCommand($editable);                                                                                        // 4066
      style.stylePara(range.create(), {                                                                                // 4067
        lineHeight: value                                                                                              // 4068
      });                                                                                                              // 4069
      afterCommand($editable);                                                                                         // 4070
    };                                                                                                                 // 4071
                                                                                                                       // 4072
    /**                                                                                                                // 4073
     * unlink                                                                                                          // 4074
     *                                                                                                                 // 4075
     * @type command                                                                                                   // 4076
     *                                                                                                                 // 4077
     * @param {jQuery} $editable                                                                                       // 4078
     */                                                                                                                // 4079
    this.unlink = function ($editable) {                                                                               // 4080
      var rng = this.createRange($editable);                                                                           // 4081
      if (rng.isOnAnchor()) {                                                                                          // 4082
        var anchor = dom.ancestor(rng.sc, dom.isAnchor);                                                               // 4083
        rng = range.createFromNode(anchor);                                                                            // 4084
        rng.select();                                                                                                  // 4085
                                                                                                                       // 4086
        beforeCommand($editable);                                                                                      // 4087
        document.execCommand('unlink');                                                                                // 4088
        afterCommand($editable);                                                                                       // 4089
      }                                                                                                                // 4090
    };                                                                                                                 // 4091
                                                                                                                       // 4092
    /**                                                                                                                // 4093
     * create link (command)                                                                                           // 4094
     *                                                                                                                 // 4095
     * @param {jQuery} $editable                                                                                       // 4096
     * @param {Object} linkInfo                                                                                        // 4097
     * @param {Object} options                                                                                         // 4098
     */                                                                                                                // 4099
    this.createLink = function ($editable, linkInfo, options) {                                                        // 4100
      var linkUrl = linkInfo.url;                                                                                      // 4101
      var linkText = linkInfo.text;                                                                                    // 4102
      var isNewWindow = linkInfo.isNewWindow;                                                                          // 4103
      var rng = linkInfo.range || this.createRange($editable);                                                         // 4104
      var isTextChanged = rng.toString() !== linkText;                                                                 // 4105
                                                                                                                       // 4106
      options = options || dom.makeLayoutInfo($editable).editor().data('options');                                     // 4107
                                                                                                                       // 4108
      beforeCommand($editable);                                                                                        // 4109
                                                                                                                       // 4110
      if (options.onCreateLink) {                                                                                      // 4111
        linkUrl = options.onCreateLink(linkUrl);                                                                       // 4112
      }                                                                                                                // 4113
                                                                                                                       // 4114
      var anchors = [];                                                                                                // 4115
      if (isTextChanged) {                                                                                             // 4116
        // Create a new link when text changed.                                                                        // 4117
        var anchor = rng.insertNode($('<A>' + linkText + '</A>')[0]);                                                  // 4118
        anchors.push(anchor);                                                                                          // 4119
      } else {                                                                                                         // 4120
        anchors = style.styleNodes(rng, {                                                                              // 4121
          nodeName: 'A',                                                                                               // 4122
          expandClosestSibling: true,                                                                                  // 4123
          onlyPartialContains: true                                                                                    // 4124
        });                                                                                                            // 4125
      }                                                                                                                // 4126
                                                                                                                       // 4127
      $.each(anchors, function (idx, anchor) {                                                                         // 4128
        $(anchor).attr('href', linkUrl);                                                                               // 4129
        if (isNewWindow) {                                                                                             // 4130
          $(anchor).attr('target', '_blank');                                                                          // 4131
        } else {                                                                                                       // 4132
          $(anchor).removeAttr('target');                                                                              // 4133
        }                                                                                                              // 4134
      });                                                                                                              // 4135
                                                                                                                       // 4136
      var startRange = range.createFromNodeBefore(list.head(anchors));                                                 // 4137
      var startPoint = startRange.getStartPoint();                                                                     // 4138
      var endRange = range.createFromNodeAfter(list.last(anchors));                                                    // 4139
      var endPoint = endRange.getEndPoint();                                                                           // 4140
                                                                                                                       // 4141
      range.create(                                                                                                    // 4142
        startPoint.node,                                                                                               // 4143
        startPoint.offset,                                                                                             // 4144
        endPoint.node,                                                                                                 // 4145
        endPoint.offset                                                                                                // 4146
      ).select();                                                                                                      // 4147
                                                                                                                       // 4148
      afterCommand($editable);                                                                                         // 4149
    };                                                                                                                 // 4150
                                                                                                                       // 4151
    /**                                                                                                                // 4152
     * returns link info                                                                                               // 4153
     *                                                                                                                 // 4154
     * @return {Object}                                                                                                // 4155
     * @return {WrappedRange} return.range                                                                             // 4156
     * @return {String} return.text                                                                                    // 4157
     * @return {Boolean} [return.isNewWindow=true]                                                                     // 4158
     * @return {String} [return.url=""]                                                                                // 4159
     */                                                                                                                // 4160
    this.getLinkInfo = function ($editable) {                                                                          // 4161
      this.focus($editable);                                                                                           // 4162
                                                                                                                       // 4163
      var rng = range.create().expand(dom.isAnchor);                                                                   // 4164
                                                                                                                       // 4165
      // Get the first anchor on range(for edit).                                                                      // 4166
      var $anchor = $(list.head(rng.nodes(dom.isAnchor)));                                                             // 4167
                                                                                                                       // 4168
      return {                                                                                                         // 4169
        range: rng,                                                                                                    // 4170
        text: rng.toString(),                                                                                          // 4171
        isNewWindow: $anchor.length ? $anchor.attr('target') === '_blank' : false,                                     // 4172
        url: $anchor.length ? $anchor.attr('href') : ''                                                                // 4173
      };                                                                                                               // 4174
    };                                                                                                                 // 4175
                                                                                                                       // 4176
    /**                                                                                                                // 4177
     * setting color                                                                                                   // 4178
     *                                                                                                                 // 4179
     * @param {Node} $editable                                                                                         // 4180
     * @param {Object} sObjColor  color code                                                                           // 4181
     * @param {String} sObjColor.foreColor foreground color                                                            // 4182
     * @param {String} sObjColor.backColor background color                                                            // 4183
     */                                                                                                                // 4184
    this.color = function ($editable, sObjColor) {                                                                     // 4185
      var oColor = JSON.parse(sObjColor);                                                                              // 4186
      var foreColor = oColor.foreColor, backColor = oColor.backColor;                                                  // 4187
                                                                                                                       // 4188
      beforeCommand($editable);                                                                                        // 4189
                                                                                                                       // 4190
      if (foreColor) { document.execCommand('foreColor', false, foreColor); }                                          // 4191
      if (backColor) { document.execCommand('backColor', false, backColor); }                                          // 4192
                                                                                                                       // 4193
      afterCommand($editable);                                                                                         // 4194
    };                                                                                                                 // 4195
                                                                                                                       // 4196
    /**                                                                                                                // 4197
     * insert Table                                                                                                    // 4198
     *                                                                                                                 // 4199
     * @param {Node} $editable                                                                                         // 4200
     * @param {String} sDim dimension of table (ex : "5x5")                                                            // 4201
     */                                                                                                                // 4202
    this.insertTable = function ($editable, sDim) {                                                                    // 4203
      var dimension = sDim.split('x');                                                                                 // 4204
      beforeCommand($editable);                                                                                        // 4205
                                                                                                                       // 4206
      var rng = range.create().deleteContents();                                                                       // 4207
      rng.insertNode(table.createTable(dimension[0], dimension[1]));                                                   // 4208
      afterCommand($editable);                                                                                         // 4209
    };                                                                                                                 // 4210
                                                                                                                       // 4211
    /**                                                                                                                // 4212
     * float me                                                                                                        // 4213
     *                                                                                                                 // 4214
     * @param {jQuery} $editable                                                                                       // 4215
     * @param {String} value                                                                                           // 4216
     * @param {jQuery} $target                                                                                         // 4217
     */                                                                                                                // 4218
    this.floatMe = function ($editable, value, $target) {                                                              // 4219
      beforeCommand($editable);                                                                                        // 4220
      // bootstrap                                                                                                     // 4221
      $target.removeClass('pull-left pull-right');                                                                     // 4222
      if (value && value !== 'none') {                                                                                 // 4223
        $target.addClass('pull-' + value);                                                                             // 4224
      }                                                                                                                // 4225
                                                                                                                       // 4226
      // fallback for non-bootstrap                                                                                    // 4227
      $target.css('float', value);                                                                                     // 4228
      afterCommand($editable);                                                                                         // 4229
    };                                                                                                                 // 4230
                                                                                                                       // 4231
    /**                                                                                                                // 4232
     * change image shape                                                                                              // 4233
     *                                                                                                                 // 4234
     * @param {jQuery} $editable                                                                                       // 4235
     * @param {String} value css class                                                                                 // 4236
     * @param {Node} $target                                                                                           // 4237
     */                                                                                                                // 4238
    this.imageShape = function ($editable, value, $target) {                                                           // 4239
      beforeCommand($editable);                                                                                        // 4240
                                                                                                                       // 4241
      $target.removeClass('img-rounded img-circle img-thumbnail');                                                     // 4242
                                                                                                                       // 4243
      if (value) {                                                                                                     // 4244
        $target.addClass(value);                                                                                       // 4245
      }                                                                                                                // 4246
                                                                                                                       // 4247
      afterCommand($editable);                                                                                         // 4248
    };                                                                                                                 // 4249
                                                                                                                       // 4250
    /**                                                                                                                // 4251
     * resize overlay element                                                                                          // 4252
     * @param {jQuery} $editable                                                                                       // 4253
     * @param {String} value                                                                                           // 4254
     * @param {jQuery} $target - target element                                                                        // 4255
     */                                                                                                                // 4256
    this.resize = function ($editable, value, $target) {                                                               // 4257
      beforeCommand($editable);                                                                                        // 4258
                                                                                                                       // 4259
      $target.css({                                                                                                    // 4260
        width: value * 100 + '%',                                                                                      // 4261
        height: ''                                                                                                     // 4262
      });                                                                                                              // 4263
                                                                                                                       // 4264
      afterCommand($editable);                                                                                         // 4265
    };                                                                                                                 // 4266
                                                                                                                       // 4267
    /**                                                                                                                // 4268
     * @param {Position} pos                                                                                           // 4269
     * @param {jQuery} $target - target element                                                                        // 4270
     * @param {Boolean} [bKeepRatio] - keep ratio                                                                      // 4271
     */                                                                                                                // 4272
    this.resizeTo = function (pos, $target, bKeepRatio) {                                                              // 4273
      var imageSize;                                                                                                   // 4274
      if (bKeepRatio) {                                                                                                // 4275
        var newRatio = pos.y / pos.x;                                                                                  // 4276
        var ratio = $target.data('ratio');                                                                             // 4277
        imageSize = {                                                                                                  // 4278
          width: ratio > newRatio ? pos.x : pos.y / ratio,                                                             // 4279
          height: ratio > newRatio ? pos.x * ratio : pos.y                                                             // 4280
        };                                                                                                             // 4281
      } else {                                                                                                         // 4282
        imageSize = {                                                                                                  // 4283
          width: pos.x,                                                                                                // 4284
          height: pos.y                                                                                                // 4285
        };                                                                                                             // 4286
      }                                                                                                                // 4287
                                                                                                                       // 4288
      $target.css(imageSize);                                                                                          // 4289
    };                                                                                                                 // 4290
                                                                                                                       // 4291
    /**                                                                                                                // 4292
     * remove media object                                                                                             // 4293
     *                                                                                                                 // 4294
     * @param {jQuery} $editable                                                                                       // 4295
     * @param {String} value - dummy argument (for keep interface)                                                     // 4296
     * @param {jQuery} $target - target element                                                                        // 4297
     */                                                                                                                // 4298
    this.removeMedia = function ($editable, value, $target) {                                                          // 4299
      beforeCommand($editable);                                                                                        // 4300
      $target.detach();                                                                                                // 4301
                                                                                                                       // 4302
      handler.bindCustomEvent(                                                                                         // 4303
        $(), $editable.data('callbacks'), 'media.delete'                                                               // 4304
      )($target, $editable);                                                                                           // 4305
                                                                                                                       // 4306
      afterCommand($editable);                                                                                         // 4307
    };                                                                                                                 // 4308
                                                                                                                       // 4309
    /**                                                                                                                // 4310
     * set focus                                                                                                       // 4311
     *                                                                                                                 // 4312
     * @param $editable                                                                                                // 4313
     */                                                                                                                // 4314
    this.focus = function ($editable) {                                                                                // 4315
      $editable.focus();                                                                                               // 4316
                                                                                                                       // 4317
      // [workaround] for firefox bug http://goo.gl/lVfAaI                                                             // 4318
      if (agent.isFF && !range.create().isOnEditable()) {                                                              // 4319
        range.createFromNode($editable[0])                                                                             // 4320
             .normalize()                                                                                              // 4321
             .collapse()                                                                                               // 4322
             .select();                                                                                                // 4323
      }                                                                                                                // 4324
    };                                                                                                                 // 4325
                                                                                                                       // 4326
    /**                                                                                                                // 4327
     * returns whether contents is empty or not.                                                                       // 4328
     *                                                                                                                 // 4329
     * @param {jQuery} $editable                                                                                       // 4330
     * @return {Boolean}                                                                                               // 4331
     */                                                                                                                // 4332
    this.isEmpty = function ($editable) {                                                                              // 4333
      return dom.isEmpty($editable[0]) || dom.emptyPara === $editable.html();                                          // 4334
    };                                                                                                                 // 4335
  };                                                                                                                   // 4336
                                                                                                                       // 4337
  /**                                                                                                                  // 4338
   * @class module.Button                                                                                              // 4339
   *                                                                                                                   // 4340
   * Button                                                                                                            // 4341
   */                                                                                                                  // 4342
  var Button = function () {                                                                                           // 4343
    /**                                                                                                                // 4344
     * update button status                                                                                            // 4345
     *                                                                                                                 // 4346
     * @param {jQuery} $container                                                                                      // 4347
     * @param {Object} styleInfo                                                                                       // 4348
     */                                                                                                                // 4349
    this.update = function ($container, styleInfo) {                                                                   // 4350
      /**                                                                                                              // 4351
       * handle dropdown's check mark (for fontname, fontsize, lineHeight).                                            // 4352
       * @param {jQuery} $btn                                                                                          // 4353
       * @param {Number} value                                                                                         // 4354
       */                                                                                                              // 4355
      var checkDropdownMenu = function ($btn, value) {                                                                 // 4356
        $btn.find('.dropdown-menu li a').each(function () {                                                            // 4357
          // always compare string to avoid creating another func.                                                     // 4358
          var isChecked = ($(this).data('value') + '') === (value + '');                                               // 4359
          this.className = isChecked ? 'checked' : '';                                                                 // 4360
        });                                                                                                            // 4361
      };                                                                                                               // 4362
                                                                                                                       // 4363
      /**                                                                                                              // 4364
       * update button state(active or not).                                                                           // 4365
       *                                                                                                               // 4366
       * @private                                                                                                      // 4367
       * @param {String} selector                                                                                      // 4368
       * @param {Function} pred                                                                                        // 4369
       */                                                                                                              // 4370
      var btnState = function (selector, pred) {                                                                       // 4371
        var $btn = $container.find(selector);                                                                          // 4372
        $btn.toggleClass('active', pred());                                                                            // 4373
      };                                                                                                               // 4374
                                                                                                                       // 4375
      if (styleInfo.image) {                                                                                           // 4376
        var $img = $(styleInfo.image);                                                                                 // 4377
                                                                                                                       // 4378
        btnState('button[data-event="imageShape"][data-value="img-rounded"]', function () {                            // 4379
          return $img.hasClass('img-rounded');                                                                         // 4380
        });                                                                                                            // 4381
        btnState('button[data-event="imageShape"][data-value="img-circle"]', function () {                             // 4382
          return $img.hasClass('img-circle');                                                                          // 4383
        });                                                                                                            // 4384
        btnState('button[data-event="imageShape"][data-value="img-thumbnail"]', function () {                          // 4385
          return $img.hasClass('img-thumbnail');                                                                       // 4386
        });                                                                                                            // 4387
        btnState('button[data-event="imageShape"]:not([data-value])', function () {                                    // 4388
          return !$img.is('.img-rounded, .img-circle, .img-thumbnail');                                                // 4389
        });                                                                                                            // 4390
                                                                                                                       // 4391
        var imgFloat = $img.css('float');                                                                              // 4392
        btnState('button[data-event="floatMe"][data-value="left"]', function () {                                      // 4393
          return imgFloat === 'left';                                                                                  // 4394
        });                                                                                                            // 4395
        btnState('button[data-event="floatMe"][data-value="right"]', function () {                                     // 4396
          return imgFloat === 'right';                                                                                 // 4397
        });                                                                                                            // 4398
        btnState('button[data-event="floatMe"][data-value="none"]', function () {                                      // 4399
          return imgFloat !== 'left' && imgFloat !== 'right';                                                          // 4400
        });                                                                                                            // 4401
                                                                                                                       // 4402
        var style = $img.attr('style');                                                                                // 4403
        btnState('button[data-event="resize"][data-value="1"]', function () {                                          // 4404
          return !!/(^|\s)(max-)?width\s*:\s*100%/.test(style);                                                        // 4405
        });                                                                                                            // 4406
        btnState('button[data-event="resize"][data-value="0.5"]', function () {                                        // 4407
          return !!/(^|\s)(max-)?width\s*:\s*50%/.test(style);                                                         // 4408
        });                                                                                                            // 4409
        btnState('button[data-event="resize"][data-value="0.25"]', function () {                                       // 4410
          return !!/(^|\s)(max-)?width\s*:\s*25%/.test(style);                                                         // 4411
        });                                                                                                            // 4412
        return;                                                                                                        // 4413
      }                                                                                                                // 4414
                                                                                                                       // 4415
      // fontname                                                                                                      // 4416
      var $fontname = $container.find('.note-fontname');                                                               // 4417
      if ($fontname.length) {                                                                                          // 4418
        var selectedFont = styleInfo['font-family'];                                                                   // 4419
        if (!!selectedFont) {                                                                                          // 4420
                                                                                                                       // 4421
          var list = selectedFont.split(',');                                                                          // 4422
          for (var i = 0, len = list.length; i < len; i++) {                                                           // 4423
            selectedFont = list[i].replace(/[\'\"]/g, '').replace(/\s+$/, '').replace(/^\s+/, '');                     // 4424
            if (agent.isFontInstalled(selectedFont)) {                                                                 // 4425
              break;                                                                                                   // 4426
            }                                                                                                          // 4427
          }                                                                                                            // 4428
                                                                                                                       // 4429
          $fontname.find('.note-current-fontname').text(selectedFont);                                                 // 4430
          checkDropdownMenu($fontname, selectedFont);                                                                  // 4431
                                                                                                                       // 4432
        }                                                                                                              // 4433
      }                                                                                                                // 4434
                                                                                                                       // 4435
      // fontsize                                                                                                      // 4436
      var $fontsize = $container.find('.note-fontsize');                                                               // 4437
      $fontsize.find('.note-current-fontsize').text(styleInfo['font-size']);                                           // 4438
      checkDropdownMenu($fontsize, parseFloat(styleInfo['font-size']));                                                // 4439
                                                                                                                       // 4440
      // lineheight                                                                                                    // 4441
      var $lineHeight = $container.find('.note-height');                                                               // 4442
      checkDropdownMenu($lineHeight, parseFloat(styleInfo['line-height']));                                            // 4443
                                                                                                                       // 4444
      btnState('button[data-event="bold"]', function () {                                                              // 4445
        return styleInfo['font-bold'] === 'bold';                                                                      // 4446
      });                                                                                                              // 4447
      btnState('button[data-event="italic"]', function () {                                                            // 4448
        return styleInfo['font-italic'] === 'italic';                                                                  // 4449
      });                                                                                                              // 4450
      btnState('button[data-event="underline"]', function () {                                                         // 4451
        return styleInfo['font-underline'] === 'underline';                                                            // 4452
      });                                                                                                              // 4453
      btnState('button[data-event="strikethrough"]', function () {                                                     // 4454
        return styleInfo['font-strikethrough'] === 'strikethrough';                                                    // 4455
      });                                                                                                              // 4456
      btnState('button[data-event="superscript"]', function () {                                                       // 4457
        return styleInfo['font-superscript'] === 'superscript';                                                        // 4458
      });                                                                                                              // 4459
      btnState('button[data-event="subscript"]', function () {                                                         // 4460
        return styleInfo['font-subscript'] === 'subscript';                                                            // 4461
      });                                                                                                              // 4462
      btnState('button[data-event="justifyLeft"]', function () {                                                       // 4463
        return styleInfo['text-align'] === 'left' || styleInfo['text-align'] === 'start';                              // 4464
      });                                                                                                              // 4465
      btnState('button[data-event="justifyCenter"]', function () {                                                     // 4466
        return styleInfo['text-align'] === 'center';                                                                   // 4467
      });                                                                                                              // 4468
      btnState('button[data-event="justifyRight"]', function () {                                                      // 4469
        return styleInfo['text-align'] === 'right';                                                                    // 4470
      });                                                                                                              // 4471
      btnState('button[data-event="justifyFull"]', function () {                                                       // 4472
        return styleInfo['text-align'] === 'justify';                                                                  // 4473
      });                                                                                                              // 4474
      btnState('button[data-event="insertUnorderedList"]', function () {                                               // 4475
        return styleInfo['list-style'] === 'unordered';                                                                // 4476
      });                                                                                                              // 4477
      btnState('button[data-event="insertOrderedList"]', function () {                                                 // 4478
        return styleInfo['list-style'] === 'ordered';                                                                  // 4479
      });                                                                                                              // 4480
    };                                                                                                                 // 4481
                                                                                                                       // 4482
    /**                                                                                                                // 4483
     * update recent color                                                                                             // 4484
     *                                                                                                                 // 4485
     * @param {Node} button                                                                                            // 4486
     * @param {String} eventName                                                                                       // 4487
     * @param {Mixed} value                                                                                            // 4488
     */                                                                                                                // 4489
    this.updateRecentColor = function (button, eventName, value) {                                                     // 4490
      var $color = $(button).closest('.note-color');                                                                   // 4491
      var $recentColor = $color.find('.note-recent-color');                                                            // 4492
      var colorInfo = JSON.parse($recentColor.attr('data-value'));                                                     // 4493
      colorInfo[eventName] = value;                                                                                    // 4494
      $recentColor.attr('data-value', JSON.stringify(colorInfo));                                                      // 4495
      var sKey = eventName === 'backColor' ? 'background-color' : 'color';                                             // 4496
      $recentColor.find('i').css(sKey, value);                                                                         // 4497
    };                                                                                                                 // 4498
  };                                                                                                                   // 4499
                                                                                                                       // 4500
  /**                                                                                                                  // 4501
   * @class module.Toolbar                                                                                             // 4502
   *                                                                                                                   // 4503
   * Toolbar                                                                                                           // 4504
   */                                                                                                                  // 4505
  var Toolbar = function () {                                                                                          // 4506
    var button = new Button();                                                                                         // 4507
                                                                                                                       // 4508
    this.update = function ($toolbar, styleInfo) {                                                                     // 4509
      button.update($toolbar, styleInfo);                                                                              // 4510
    };                                                                                                                 // 4511
                                                                                                                       // 4512
    /**                                                                                                                // 4513
     * @param {Node} button                                                                                            // 4514
     * @param {String} eventName                                                                                       // 4515
     * @param {String} value                                                                                           // 4516
     */                                                                                                                // 4517
    this.updateRecentColor = function (buttonNode, eventName, value) {                                                 // 4518
      button.updateRecentColor(buttonNode, eventName, value);                                                          // 4519
    };                                                                                                                 // 4520
                                                                                                                       // 4521
    /**                                                                                                                // 4522
     * activate buttons exclude codeview                                                                               // 4523
     * @param {jQuery} $toolbar                                                                                        // 4524
     */                                                                                                                // 4525
    this.activate = function ($toolbar) {                                                                              // 4526
      $toolbar.find('button')                                                                                          // 4527
              .not('button[data-event="codeview"]')                                                                    // 4528
              .removeClass('disabled');                                                                                // 4529
    };                                                                                                                 // 4530
                                                                                                                       // 4531
    /**                                                                                                                // 4532
     * deactivate buttons exclude codeview                                                                             // 4533
     * @param {jQuery} $toolbar                                                                                        // 4534
     */                                                                                                                // 4535
    this.deactivate = function ($toolbar) {                                                                            // 4536
      $toolbar.find('button')                                                                                          // 4537
              .not('button[data-event="codeview"]')                                                                    // 4538
              .addClass('disabled');                                                                                   // 4539
    };                                                                                                                 // 4540
                                                                                                                       // 4541
    /**                                                                                                                // 4542
     * @param {jQuery} $container                                                                                      // 4543
     * @param {Boolean} [bFullscreen=false]                                                                            // 4544
     */                                                                                                                // 4545
    this.updateFullscreen = function ($container, bFullscreen) {                                                       // 4546
      var $btn = $container.find('button[data-event="fullscreen"]');                                                   // 4547
      $btn.toggleClass('active', bFullscreen);                                                                         // 4548
    };                                                                                                                 // 4549
                                                                                                                       // 4550
    /**                                                                                                                // 4551
     * @param {jQuery} $container                                                                                      // 4552
     * @param {Boolean} [isCodeview=false]                                                                             // 4553
     */                                                                                                                // 4554
    this.updateCodeview = function ($container, isCodeview) {                                                          // 4555
      var $btn = $container.find('button[data-event="codeview"]');                                                     // 4556
      $btn.toggleClass('active', isCodeview);                                                                          // 4557
                                                                                                                       // 4558
      if (isCodeview) {                                                                                                // 4559
        this.deactivate($container);                                                                                   // 4560
      } else {                                                                                                         // 4561
        this.activate($container);                                                                                     // 4562
      }                                                                                                                // 4563
    };                                                                                                                 // 4564
                                                                                                                       // 4565
    /**                                                                                                                // 4566
     * get button in toolbar                                                                                           // 4567
     *                                                                                                                 // 4568
     * @param {jQuery} $editable                                                                                       // 4569
     * @param {String} name                                                                                            // 4570
     * @return {jQuery}                                                                                                // 4571
     */                                                                                                                // 4572
    this.get = function ($editable, name) {                                                                            // 4573
      var $toolbar = dom.makeLayoutInfo($editable).toolbar();                                                          // 4574
                                                                                                                       // 4575
      return $toolbar.find('[data-name=' + name + ']');                                                                // 4576
    };                                                                                                                 // 4577
                                                                                                                       // 4578
    /**                                                                                                                // 4579
     * set button state                                                                                                // 4580
     * @param {jQuery} $editable                                                                                       // 4581
     * @param {String} name                                                                                            // 4582
     * @param {Boolean} [isActive=true]                                                                                // 4583
     */                                                                                                                // 4584
    this.setButtonState = function ($editable, name, isActive) {                                                       // 4585
      isActive = (isActive === false) ? false : true;                                                                  // 4586
                                                                                                                       // 4587
      var $button = this.get($editable, name);                                                                         // 4588
      $button.toggleClass('active', isActive);                                                                         // 4589
    };                                                                                                                 // 4590
  };                                                                                                                   // 4591
                                                                                                                       // 4592
  var EDITABLE_PADDING = 24;                                                                                           // 4593
                                                                                                                       // 4594
  var Statusbar = function () {                                                                                        // 4595
    var $document = $(document);                                                                                       // 4596
                                                                                                                       // 4597
    this.attach = function (layoutInfo, options) {                                                                     // 4598
      if (!options.disableResizeEditor) {                                                                              // 4599
        layoutInfo.statusbar().on('mousedown', hStatusbarMousedown);                                                   // 4600
      }                                                                                                                // 4601
    };                                                                                                                 // 4602
                                                                                                                       // 4603
    /**                                                                                                                // 4604
     * `mousedown` event handler on statusbar                                                                          // 4605
     *                                                                                                                 // 4606
     * @param {MouseEvent} event                                                                                       // 4607
     */                                                                                                                // 4608
    var hStatusbarMousedown = function (event) {                                                                       // 4609
      event.preventDefault();                                                                                          // 4610
      event.stopPropagation();                                                                                         // 4611
                                                                                                                       // 4612
      var $editable = dom.makeLayoutInfo(event.target).editable();                                                     // 4613
      var editableTop = $editable.offset().top - $document.scrollTop();                                                // 4614
                                                                                                                       // 4615
      var layoutInfo = dom.makeLayoutInfo(event.currentTarget || event.target);                                        // 4616
      var options = layoutInfo.editor().data('options');                                                               // 4617
                                                                                                                       // 4618
      $document.on('mousemove', function (event) {                                                                     // 4619
        var nHeight = event.clientY - (editableTop + EDITABLE_PADDING);                                                // 4620
                                                                                                                       // 4621
        nHeight = (options.minHeight > 0) ? Math.max(nHeight, options.minHeight) : nHeight;                            // 4622
        nHeight = (options.maxHeight > 0) ? Math.min(nHeight, options.maxHeight) : nHeight;                            // 4623
                                                                                                                       // 4624
        $editable.height(nHeight);                                                                                     // 4625
      }).one('mouseup', function () {                                                                                  // 4626
        $document.off('mousemove');                                                                                    // 4627
      });                                                                                                              // 4628
    };                                                                                                                 // 4629
  };                                                                                                                   // 4630
                                                                                                                       // 4631
  /**                                                                                                                  // 4632
   * @class module.Popover                                                                                             // 4633
   *                                                                                                                   // 4634
   * Popover (http://getbootstrap.com/javascript/#popovers)                                                            // 4635
   *                                                                                                                   // 4636
   */                                                                                                                  // 4637
  var Popover = function () {                                                                                          // 4638
    var button = new Button();                                                                                         // 4639
                                                                                                                       // 4640
    /**                                                                                                                // 4641
     * returns position from placeholder                                                                               // 4642
     *                                                                                                                 // 4643
     * @private                                                                                                        // 4644
     * @param {Node} placeholder                                                                                       // 4645
     * @param {Object} options                                                                                         // 4646
     * @param {Boolean} options.isAirMode                                                                              // 4647
     * @return {Position}                                                                                              // 4648
     */                                                                                                                // 4649
    var posFromPlaceholder = function (placeholder, options) {                                                         // 4650
      var isAirMode = options && options.isAirMode;                                                                    // 4651
      var isLeftTop = options && options.isLeftTop;                                                                    // 4652
                                                                                                                       // 4653
      var $placeholder = $(placeholder);                                                                               // 4654
      var pos = isAirMode ? $placeholder.offset() : $placeholder.position();                                           // 4655
      var height = isLeftTop ? 0 : $placeholder.outerHeight(true); // include margin                                   // 4656
                                                                                                                       // 4657
      // popover below placeholder.                                                                                    // 4658
      return {                                                                                                         // 4659
        left: pos.left,                                                                                                // 4660
        top: pos.top + height                                                                                          // 4661
      };                                                                                                               // 4662
    };                                                                                                                 // 4663
                                                                                                                       // 4664
    /**                                                                                                                // 4665
     * show popover                                                                                                    // 4666
     *                                                                                                                 // 4667
     * @private                                                                                                        // 4668
     * @param {jQuery} popover                                                                                         // 4669
     * @param {Position} pos                                                                                           // 4670
     */                                                                                                                // 4671
    var showPopover = function ($popover, pos) {                                                                       // 4672
      $popover.css({                                                                                                   // 4673
        display: 'block',                                                                                              // 4674
        left: pos.left,                                                                                                // 4675
        top: pos.top                                                                                                   // 4676
      });                                                                                                              // 4677
    };                                                                                                                 // 4678
                                                                                                                       // 4679
    var PX_POPOVER_ARROW_OFFSET_X = 20;                                                                                // 4680
                                                                                                                       // 4681
    /**                                                                                                                // 4682
     * update current state                                                                                            // 4683
     * @param {jQuery} $popover - popover container                                                                    // 4684
     * @param {Object} styleInfo - style object                                                                        // 4685
     * @param {Boolean} isAirMode                                                                                      // 4686
     */                                                                                                                // 4687
    this.update = function ($popover, styleInfo, isAirMode) {                                                          // 4688
      button.update($popover, styleInfo);                                                                              // 4689
                                                                                                                       // 4690
      var $linkPopover = $popover.find('.note-link-popover');                                                          // 4691
      if (styleInfo.anchor) {                                                                                          // 4692
        var $anchor = $linkPopover.find('a');                                                                          // 4693
        var href = $(styleInfo.anchor).attr('href');                                                                   // 4694
        var target = $(styleInfo.anchor).attr('target');                                                               // 4695
        $anchor.attr('href', href).html(href);                                                                         // 4696
        if (!target) {                                                                                                 // 4697
          $anchor.removeAttr('target');                                                                                // 4698
        } else {                                                                                                       // 4699
          $anchor.attr('target', '_blank');                                                                            // 4700
        }                                                                                                              // 4701
        showPopover($linkPopover, posFromPlaceholder(styleInfo.anchor, {                                               // 4702
          isAirMode: isAirMode                                                                                         // 4703
        }));                                                                                                           // 4704
      } else {                                                                                                         // 4705
        $linkPopover.hide();                                                                                           // 4706
      }                                                                                                                // 4707
                                                                                                                       // 4708
      var $imagePopover = $popover.find('.note-image-popover');                                                        // 4709
      if (styleInfo.image) {                                                                                           // 4710
        showPopover($imagePopover, posFromPlaceholder(styleInfo.image, {                                               // 4711
          isAirMode: isAirMode,                                                                                        // 4712
          isLeftTop: true                                                                                              // 4713
        }));                                                                                                           // 4714
      } else {                                                                                                         // 4715
        $imagePopover.hide();                                                                                          // 4716
      }                                                                                                                // 4717
                                                                                                                       // 4718
      var $airPopover = $popover.find('.note-air-popover');                                                            // 4719
      if (isAirMode && styleInfo.range && !styleInfo.range.isCollapsed()) {                                            // 4720
        var rect = list.last(styleInfo.range.getClientRects());                                                        // 4721
        if (rect) {                                                                                                    // 4722
          var bnd = func.rect2bnd(rect);                                                                               // 4723
          showPopover($airPopover, {                                                                                   // 4724
            left: Math.max(bnd.left + bnd.width / 2 - PX_POPOVER_ARROW_OFFSET_X, 0),                                   // 4725
            top: bnd.top + bnd.height                                                                                  // 4726
          });                                                                                                          // 4727
        }                                                                                                              // 4728
      } else {                                                                                                         // 4729
        $airPopover.hide();                                                                                            // 4730
      }                                                                                                                // 4731
    };                                                                                                                 // 4732
                                                                                                                       // 4733
    /**                                                                                                                // 4734
     * @param {Node} button                                                                                            // 4735
     * @param {String} eventName                                                                                       // 4736
     * @param {String} value                                                                                           // 4737
     */                                                                                                                // 4738
    this.updateRecentColor = function (button, eventName, value) {                                                     // 4739
      button.updateRecentColor(button, eventName, value);                                                              // 4740
    };                                                                                                                 // 4741
                                                                                                                       // 4742
    /**                                                                                                                // 4743
     * hide all popovers                                                                                               // 4744
     * @param {jQuery} $popover - popover container                                                                    // 4745
     */                                                                                                                // 4746
    this.hide = function ($popover) {                                                                                  // 4747
      $popover.children().hide();                                                                                      // 4748
    };                                                                                                                 // 4749
  };                                                                                                                   // 4750
                                                                                                                       // 4751
  /**                                                                                                                  // 4752
   * @class module.Handle                                                                                              // 4753
   *                                                                                                                   // 4754
   * Handle                                                                                                            // 4755
   */                                                                                                                  // 4756
  var Handle = function (handler) {                                                                                    // 4757
    var $document = $(document);                                                                                       // 4758
                                                                                                                       // 4759
    /**                                                                                                                // 4760
     * `mousedown` event handler on $handle                                                                            // 4761
     *  - controlSizing: resize image                                                                                  // 4762
     *                                                                                                                 // 4763
     * @param {MouseEvent} event                                                                                       // 4764
     */                                                                                                                // 4765
    var hHandleMousedown = function (event) {                                                                          // 4766
      if (dom.isControlSizing(event.target)) {                                                                         // 4767
        event.preventDefault();                                                                                        // 4768
        event.stopPropagation();                                                                                       // 4769
                                                                                                                       // 4770
        var layoutInfo = dom.makeLayoutInfo(event.target),                                                             // 4771
            $handle = layoutInfo.handle(),                                                                             // 4772
            $popover = layoutInfo.popover(),                                                                           // 4773
            $editable = layoutInfo.editable(),                                                                         // 4774
            $editor = layoutInfo.editor();                                                                             // 4775
                                                                                                                       // 4776
        var target = $handle.find('.note-control-selection').data('target'),                                           // 4777
            $target = $(target), posStart = $target.offset(),                                                          // 4778
            scrollTop = $document.scrollTop();                                                                         // 4779
                                                                                                                       // 4780
        var isAirMode = $editor.data('options').airMode;                                                               // 4781
                                                                                                                       // 4782
        $document.on('mousemove', function (event) {                                                                   // 4783
          handler.invoke('editor.resizeTo', {                                                                          // 4784
            x: event.clientX - posStart.left,                                                                          // 4785
            y: event.clientY - (posStart.top - scrollTop)                                                              // 4786
          }, $target, !event.shiftKey);                                                                                // 4787
                                                                                                                       // 4788
          handler.invoke('handle.update', $handle, {image: target}, isAirMode);                                        // 4789
          handler.invoke('popover.update', $popover, {image: target}, isAirMode);                                      // 4790
        }).one('mouseup', function () {                                                                                // 4791
          $document.off('mousemove');                                                                                  // 4792
          handler.invoke('editor.afterCommand', $editable);                                                            // 4793
        });                                                                                                            // 4794
                                                                                                                       // 4795
        if (!$target.data('ratio')) { // original ratio.                                                               // 4796
          $target.data('ratio', $target.height() / $target.width());                                                   // 4797
        }                                                                                                              // 4798
      }                                                                                                                // 4799
    };                                                                                                                 // 4800
                                                                                                                       // 4801
    this.attach = function (layoutInfo) {                                                                              // 4802
      layoutInfo.handle().on('mousedown', hHandleMousedown);                                                           // 4803
    };                                                                                                                 // 4804
                                                                                                                       // 4805
    /**                                                                                                                // 4806
     * update handle                                                                                                   // 4807
     * @param {jQuery} $handle                                                                                         // 4808
     * @param {Object} styleInfo                                                                                       // 4809
     * @param {Boolean} isAirMode                                                                                      // 4810
     */                                                                                                                // 4811
    this.update = function ($handle, styleInfo, isAirMode) {                                                           // 4812
      var $selection = $handle.find('.note-control-selection');                                                        // 4813
      if (styleInfo.image) {                                                                                           // 4814
        var $image = $(styleInfo.image);                                                                               // 4815
        var pos = isAirMode ? $image.offset() : $image.position();                                                     // 4816
                                                                                                                       // 4817
        // include margin                                                                                              // 4818
        var imageSize = {                                                                                              // 4819
          w: $image.outerWidth(true),                                                                                  // 4820
          h: $image.outerHeight(true)                                                                                  // 4821
        };                                                                                                             // 4822
                                                                                                                       // 4823
        $selection.css({                                                                                               // 4824
          display: 'block',                                                                                            // 4825
          left: pos.left,                                                                                              // 4826
          top: pos.top,                                                                                                // 4827
          width: imageSize.w,                                                                                          // 4828
          height: imageSize.h                                                                                          // 4829
        }).data('target', styleInfo.image); // save current image element.                                             // 4830
        var sizingText = imageSize.w + 'x' + imageSize.h;                                                              // 4831
        $selection.find('.note-control-selection-info').text(sizingText);                                              // 4832
      } else {                                                                                                         // 4833
        $selection.hide();                                                                                             // 4834
      }                                                                                                                // 4835
    };                                                                                                                 // 4836
                                                                                                                       // 4837
    /**                                                                                                                // 4838
     * hide                                                                                                            // 4839
     *                                                                                                                 // 4840
     * @param {jQuery} $handle                                                                                         // 4841
     */                                                                                                                // 4842
    this.hide = function ($handle) {                                                                                   // 4843
      $handle.children().hide();                                                                                       // 4844
    };                                                                                                                 // 4845
  };                                                                                                                   // 4846
                                                                                                                       // 4847
  var Fullscreen = function (handler) {                                                                                // 4848
    var $window = $(window);                                                                                           // 4849
    var $scrollbar = $('html, body');                                                                                  // 4850
                                                                                                                       // 4851
    /**                                                                                                                // 4852
     * toggle fullscreen                                                                                               // 4853
     *                                                                                                                 // 4854
     * @param {Object} layoutInfo                                                                                      // 4855
     */                                                                                                                // 4856
    this.toggle = function (layoutInfo) {                                                                              // 4857
                                                                                                                       // 4858
      var $editor = layoutInfo.editor(),                                                                               // 4859
          $toolbar = layoutInfo.toolbar(),                                                                             // 4860
          $editable = layoutInfo.editable(),                                                                           // 4861
          $codable = layoutInfo.codable();                                                                             // 4862
                                                                                                                       // 4863
      var resize = function (size) {                                                                                   // 4864
        $editable.css('height', size.h);                                                                               // 4865
        $codable.css('height', size.h);                                                                                // 4866
        if ($codable.data('cmeditor')) {                                                                               // 4867
          $codable.data('cmeditor').setsize(null, size.h);                                                             // 4868
        }                                                                                                              // 4869
      };                                                                                                               // 4870
                                                                                                                       // 4871
      $editor.toggleClass('fullscreen');                                                                               // 4872
      var isFullscreen = $editor.hasClass('fullscreen');                                                               // 4873
      if (isFullscreen) {                                                                                              // 4874
        $editable.data('orgheight', $editable.css('height'));                                                          // 4875
                                                                                                                       // 4876
        $window.on('resize', function () {                                                                             // 4877
          resize({                                                                                                     // 4878
            h: $window.height() - $toolbar.outerHeight()                                                               // 4879
          });                                                                                                          // 4880
        }).trigger('resize');                                                                                          // 4881
                                                                                                                       // 4882
        $scrollbar.css('overflow', 'hidden');                                                                          // 4883
      } else {                                                                                                         // 4884
        $window.off('resize');                                                                                         // 4885
        resize({                                                                                                       // 4886
          h: $editable.data('orgheight')                                                                               // 4887
        });                                                                                                            // 4888
        $scrollbar.css('overflow', 'visible');                                                                         // 4889
      }                                                                                                                // 4890
                                                                                                                       // 4891
      handler.invoke('toolbar.updateFullscreen', $toolbar, isFullscreen);                                              // 4892
    };                                                                                                                 // 4893
  };                                                                                                                   // 4894
                                                                                                                       // 4895
                                                                                                                       // 4896
  var CodeMirror;                                                                                                      // 4897
  if (agent.hasCodeMirror) {                                                                                           // 4898
    if (agent.isSupportAmd) {                                                                                          // 4899
      require(['CodeMirror'], function (cm) {                                                                          // 4900
        CodeMirror = cm;                                                                                               // 4901
      });                                                                                                              // 4902
    } else {                                                                                                           // 4903
      CodeMirror = window.CodeMirror;                                                                                  // 4904
    }                                                                                                                  // 4905
  }                                                                                                                    // 4906
                                                                                                                       // 4907
  /**                                                                                                                  // 4908
   * @class Codeview                                                                                                   // 4909
   */                                                                                                                  // 4910
  var Codeview = function (handler) {                                                                                  // 4911
                                                                                                                       // 4912
    this.sync = function (layoutInfo) {                                                                                // 4913
      var isCodeview = handler.invoke('codeview.isActivated', layoutInfo);                                             // 4914
      if (isCodeview && agent.hasCodeMirror) {                                                                         // 4915
        layoutInfo.codable().data('cmEditor').save();                                                                  // 4916
      }                                                                                                                // 4917
    };                                                                                                                 // 4918
                                                                                                                       // 4919
    /**                                                                                                                // 4920
     * @param {Object} layoutInfo                                                                                      // 4921
     * @return {Boolean}                                                                                               // 4922
     */                                                                                                                // 4923
    this.isActivated = function (layoutInfo) {                                                                         // 4924
      var $editor = layoutInfo.editor();                                                                               // 4925
      return $editor.hasClass('codeview');                                                                             // 4926
    };                                                                                                                 // 4927
                                                                                                                       // 4928
    /**                                                                                                                // 4929
     * toggle codeview                                                                                                 // 4930
     *                                                                                                                 // 4931
     * @param {Object} layoutInfo                                                                                      // 4932
     */                                                                                                                // 4933
    this.toggle = function (layoutInfo) {                                                                              // 4934
      if (this.isActivated(layoutInfo)) {                                                                              // 4935
        this.deactivate(layoutInfo);                                                                                   // 4936
      } else {                                                                                                         // 4937
        this.activate(layoutInfo);                                                                                     // 4938
      }                                                                                                                // 4939
    };                                                                                                                 // 4940
                                                                                                                       // 4941
    /**                                                                                                                // 4942
     * activate code view                                                                                              // 4943
     *                                                                                                                 // 4944
     * @param {Object} layoutInfo                                                                                      // 4945
     */                                                                                                                // 4946
    this.activate = function (layoutInfo) {                                                                            // 4947
      var $editor = layoutInfo.editor(),                                                                               // 4948
          $toolbar = layoutInfo.toolbar(),                                                                             // 4949
          $editable = layoutInfo.editable(),                                                                           // 4950
          $codable = layoutInfo.codable(),                                                                             // 4951
          $popover = layoutInfo.popover(),                                                                             // 4952
          $handle = layoutInfo.handle();                                                                               // 4953
                                                                                                                       // 4954
      var options = $editor.data('options');                                                                           // 4955
                                                                                                                       // 4956
      $codable.val(dom.html($editable, options.prettifyHtml));                                                         // 4957
      $codable.height($editable.height());                                                                             // 4958
                                                                                                                       // 4959
      handler.invoke('toolbar.updateCodeview', $toolbar, true);                                                        // 4960
      handler.invoke('popover.hide', $popover);                                                                        // 4961
      handler.invoke('handle.hide', $handle);                                                                          // 4962
                                                                                                                       // 4963
      $editor.addClass('codeview');                                                                                    // 4964
                                                                                                                       // 4965
      $codable.focus();                                                                                                // 4966
                                                                                                                       // 4967
      // activate CodeMirror as codable                                                                                // 4968
      if (agent.hasCodeMirror) {                                                                                       // 4969
        var cmEditor = CodeMirror.fromTextArea($codable[0], options.codemirror);                                       // 4970
                                                                                                                       // 4971
        // CodeMirror TernServer                                                                                       // 4972
        if (options.codemirror.tern) {                                                                                 // 4973
          var server = new CodeMirror.TernServer(options.codemirror.tern);                                             // 4974
          cmEditor.ternServer = server;                                                                                // 4975
          cmEditor.on('cursorActivity', function (cm) {                                                                // 4976
            server.updateArgHints(cm);                                                                                 // 4977
          });                                                                                                          // 4978
        }                                                                                                              // 4979
                                                                                                                       // 4980
        // CodeMirror hasn't Padding.                                                                                  // 4981
        cmEditor.setSize(null, $editable.outerHeight());                                                               // 4982
        $codable.data('cmEditor', cmEditor);                                                                           // 4983
      }                                                                                                                // 4984
    };                                                                                                                 // 4985
                                                                                                                       // 4986
    /**                                                                                                                // 4987
     * deactivate code view                                                                                            // 4988
     *                                                                                                                 // 4989
     * @param {Object} layoutInfo                                                                                      // 4990
     */                                                                                                                // 4991
    this.deactivate = function (layoutInfo) {                                                                          // 4992
      var $holder = layoutInfo.holder(),                                                                               // 4993
          $editor = layoutInfo.editor(),                                                                               // 4994
          $toolbar = layoutInfo.toolbar(),                                                                             // 4995
          $editable = layoutInfo.editable(),                                                                           // 4996
          $codable = layoutInfo.codable();                                                                             // 4997
                                                                                                                       // 4998
      var options = $editor.data('options');                                                                           // 4999
                                                                                                                       // 5000
      // deactivate CodeMirror as codable                                                                              // 5001
      if (agent.hasCodeMirror) {                                                                                       // 5002
        var cmEditor = $codable.data('cmEditor');                                                                      // 5003
        $codable.val(cmEditor.getValue());                                                                             // 5004
        cmEditor.toTextArea();                                                                                         // 5005
      }                                                                                                                // 5006
                                                                                                                       // 5007
      var value = dom.value($codable, options.prettifyHtml) || dom.emptyPara;                                          // 5008
      var isChange = $editable.html() !== value;                                                                       // 5009
                                                                                                                       // 5010
      $editable.html(value);                                                                                           // 5011
      $editable.height(options.height ? $codable.height() : 'auto');                                                   // 5012
      $editor.removeClass('codeview');                                                                                 // 5013
                                                                                                                       // 5014
      if (isChange) {                                                                                                  // 5015
        handler.bindCustomEvent(                                                                                       // 5016
          $holder, $editable.data('callbacks'), 'change'                                                               // 5017
        )($editable.html(), $editable);                                                                                // 5018
      }                                                                                                                // 5019
                                                                                                                       // 5020
      $editable.focus();                                                                                               // 5021
                                                                                                                       // 5022
      handler.invoke('toolbar.updateCodeview', $toolbar, false);                                                       // 5023
    };                                                                                                                 // 5024
  };                                                                                                                   // 5025
                                                                                                                       // 5026
  var DragAndDrop = function (handler) {                                                                               // 5027
    var $document = $(document);                                                                                       // 5028
                                                                                                                       // 5029
    /**                                                                                                                // 5030
     * attach Drag and Drop Events                                                                                     // 5031
     *                                                                                                                 // 5032
     * @param {Object} layoutInfo - layout Informations                                                                // 5033
     * @param {Object} options                                                                                         // 5034
     */                                                                                                                // 5035
    this.attach = function (layoutInfo, options) {                                                                     // 5036
      if (options.airMode || options.disableDragAndDrop) {                                                             // 5037
        // prevent default drop event                                                                                  // 5038
        $document.on('drop', function (e) {                                                                            // 5039
          e.preventDefault();                                                                                          // 5040
        });                                                                                                            // 5041
      } else {                                                                                                         // 5042
        this.attachDragAndDropEvent(layoutInfo, options);                                                              // 5043
      }                                                                                                                // 5044
    };                                                                                                                 // 5045
                                                                                                                       // 5046
    /**                                                                                                                // 5047
     * attach Drag and Drop Events                                                                                     // 5048
     *                                                                                                                 // 5049
     * @param {Object} layoutInfo - layout Informations                                                                // 5050
     * @param {Object} options                                                                                         // 5051
     */                                                                                                                // 5052
    this.attachDragAndDropEvent = function (layoutInfo, options) {                                                     // 5053
      var collection = $(),                                                                                            // 5054
          $editor = layoutInfo.editor(),                                                                               // 5055
          $dropzone = layoutInfo.dropzone(),                                                                           // 5056
          $dropzoneMessage = $dropzone.find('.note-dropzone-message');                                                 // 5057
                                                                                                                       // 5058
      // show dropzone on dragenter when dragging a object to document                                                 // 5059
      // -but only if the editor is visible, i.e. has a positive width and height                                      // 5060
      $document.on('dragenter', function (e) {                                                                         // 5061
        var isCodeview = handler.invoke('codeview.isActivated', layoutInfo);                                           // 5062
        var hasEditorSize = $editor.width() > 0 && $editor.height() > 0;                                               // 5063
        if (!isCodeview && !collection.length && hasEditorSize) {                                                      // 5064
          $editor.addClass('dragover');                                                                                // 5065
          $dropzone.width($editor.width());                                                                            // 5066
          $dropzone.height($editor.height());                                                                          // 5067
          $dropzoneMessage.text(options.langInfo.image.dragImageHere);                                                 // 5068
        }                                                                                                              // 5069
        collection = collection.add(e.target);                                                                         // 5070
      }).on('dragleave', function (e) {                                                                                // 5071
        collection = collection.not(e.target);                                                                         // 5072
        if (!collection.length) {                                                                                      // 5073
          $editor.removeClass('dragover');                                                                             // 5074
        }                                                                                                              // 5075
      }).on('drop', function () {                                                                                      // 5076
        collection = $();                                                                                              // 5077
        $editor.removeClass('dragover');                                                                               // 5078
      });                                                                                                              // 5079
                                                                                                                       // 5080
      // change dropzone's message on hover.                                                                           // 5081
      $dropzone.on('dragenter', function () {                                                                          // 5082
        $dropzone.addClass('hover');                                                                                   // 5083
        $dropzoneMessage.text(options.langInfo.image.dropImage);                                                       // 5084
      }).on('dragleave', function () {                                                                                 // 5085
        $dropzone.removeClass('hover');                                                                                // 5086
        $dropzoneMessage.text(options.langInfo.image.dragImageHere);                                                   // 5087
      });                                                                                                              // 5088
                                                                                                                       // 5089
      // attach dropImage                                                                                              // 5090
      $dropzone.on('drop', function (event) {                                                                          // 5091
                                                                                                                       // 5092
        var dataTransfer = event.originalEvent.dataTransfer;                                                           // 5093
        var layoutInfo = dom.makeLayoutInfo(event.currentTarget || event.target);                                      // 5094
                                                                                                                       // 5095
        if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {                                         // 5096
          event.preventDefault();                                                                                      // 5097
          layoutInfo.editable().focus();                                                                               // 5098
          handler.insertImages(layoutInfo, dataTransfer.files);                                                        // 5099
        } else {                                                                                                       // 5100
          var insertNodefunc = function () {                                                                           // 5101
            layoutInfo.holder().summernote('insertNode', this);                                                        // 5102
          };                                                                                                           // 5103
                                                                                                                       // 5104
          for (var i = 0, len = dataTransfer.types.length; i < len; i++) {                                             // 5105
            var type = dataTransfer.types[i];                                                                          // 5106
            var content = dataTransfer.getData(type);                                                                  // 5107
                                                                                                                       // 5108
            if (type.toLowerCase().indexOf('text') > -1) {                                                             // 5109
              layoutInfo.holder().summernote('pasteHTML', content);                                                    // 5110
            } else {                                                                                                   // 5111
              $(content).each(insertNodefunc);                                                                         // 5112
            }                                                                                                          // 5113
          }                                                                                                            // 5114
        }                                                                                                              // 5115
      }).on('dragover', false); // prevent default dragover event                                                      // 5116
    };                                                                                                                 // 5117
  };                                                                                                                   // 5118
                                                                                                                       // 5119
  var Clipboard = function (handler) {                                                                                 // 5120
    var $paste;                                                                                                        // 5121
                                                                                                                       // 5122
    this.attach = function (layoutInfo) {                                                                              // 5123
      // [workaround] getting image from clipboard                                                                     // 5124
      //  - IE11 and Firefox: CTRL+v hook                                                                              // 5125
      //  - Webkit: event.clipboardData                                                                                // 5126
      if ((agent.isMSIE && agent.browserVersion > 10) || agent.isFF) {                                                 // 5127
        $paste = $('<div />').attr('contenteditable', true).css({                                                      // 5128
          position : 'absolute',                                                                                       // 5129
          left : -100000,                                                                                              // 5130
          opacity : 0                                                                                                  // 5131
        });                                                                                                            // 5132
                                                                                                                       // 5133
        layoutInfo.editable().on('keydown', function (e) {                                                             // 5134
          if (e.ctrlKey && e.keyCode === key.code.V) {                                                                 // 5135
            handler.invoke('saveRange', layoutInfo.editable());                                                        // 5136
            $paste.focus();                                                                                            // 5137
                                                                                                                       // 5138
            setTimeout(function () {                                                                                   // 5139
              pasteByHook(layoutInfo);                                                                                 // 5140
            }, 0);                                                                                                     // 5141
          }                                                                                                            // 5142
        });                                                                                                            // 5143
                                                                                                                       // 5144
        layoutInfo.editable().before($paste);                                                                          // 5145
      } else {                                                                                                         // 5146
        layoutInfo.editable().on('paste', pasteByEvent);                                                               // 5147
      }                                                                                                                // 5148
    };                                                                                                                 // 5149
                                                                                                                       // 5150
    var pasteByHook = function (layoutInfo) {                                                                          // 5151
      var $editable = layoutInfo.editable();                                                                           // 5152
      var node = $paste[0].firstChild;                                                                                 // 5153
                                                                                                                       // 5154
      if (dom.isImg(node)) {                                                                                           // 5155
        var dataURI = node.src;                                                                                        // 5156
        var decodedData = atob(dataURI.split(',')[1]);                                                                 // 5157
        var array = new Uint8Array(decodedData.length);                                                                // 5158
        for (var i = 0; i < decodedData.length; i++) {                                                                 // 5159
          array[i] = decodedData.charCodeAt(i);                                                                        // 5160
        }                                                                                                              // 5161
                                                                                                                       // 5162
        var blob = new Blob([array], { type : 'image/png' });                                                          // 5163
        blob.name = 'clipboard.png';                                                                                   // 5164
                                                                                                                       // 5165
        handler.invoke('restoreRange', $editable);                                                                     // 5166
        handler.invoke('focus', $editable);                                                                            // 5167
        handler.insertImages(layoutInfo, [blob]);                                                                      // 5168
      } else {                                                                                                         // 5169
        var pasteContent = $('<div />').html($paste.html()).html();                                                    // 5170
        handler.invoke('restoreRange', $editable);                                                                     // 5171
        handler.invoke('focus', $editable);                                                                            // 5172
                                                                                                                       // 5173
        if (pasteContent) {                                                                                            // 5174
          handler.invoke('pasteHTML', $editable, pasteContent);                                                        // 5175
        }                                                                                                              // 5176
      }                                                                                                                // 5177
                                                                                                                       // 5178
      $paste.empty();                                                                                                  // 5179
    };                                                                                                                 // 5180
                                                                                                                       // 5181
    /**                                                                                                                // 5182
     * paste by clipboard event                                                                                        // 5183
     *                                                                                                                 // 5184
     * @param {Event} event                                                                                            // 5185
     */                                                                                                                // 5186
    var pasteByEvent = function (event) {                                                                              // 5187
      var clipboardData = event.originalEvent.clipboardData;                                                           // 5188
      var layoutInfo = dom.makeLayoutInfo(event.currentTarget || event.target);                                        // 5189
      var $editable = layoutInfo.editable();                                                                           // 5190
                                                                                                                       // 5191
      if (clipboardData && clipboardData.items && clipboardData.items.length) {                                        // 5192
        var item = list.head(clipboardData.items);                                                                     // 5193
        if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {                                              // 5194
          handler.insertImages(layoutInfo, [item.getAsFile()]);                                                        // 5195
        }                                                                                                              // 5196
        handler.invoke('editor.afterCommand', $editable);                                                              // 5197
      }                                                                                                                // 5198
    };                                                                                                                 // 5199
  };                                                                                                                   // 5200
                                                                                                                       // 5201
  var LinkDialog = function (handler) {                                                                                // 5202
                                                                                                                       // 5203
    /**                                                                                                                // 5204
     * toggle button status                                                                                            // 5205
     *                                                                                                                 // 5206
     * @private                                                                                                        // 5207
     * @param {jQuery} $btn                                                                                            // 5208
     * @param {Boolean} isEnable                                                                                       // 5209
     */                                                                                                                // 5210
    var toggleBtn = function ($btn, isEnable) {                                                                        // 5211
      $btn.toggleClass('disabled', !isEnable);                                                                         // 5212
      $btn.attr('disabled', !isEnable);                                                                                // 5213
    };                                                                                                                 // 5214
                                                                                                                       // 5215
    /**                                                                                                                // 5216
     * bind enter key                                                                                                  // 5217
     *                                                                                                                 // 5218
     * @private                                                                                                        // 5219
     * @param {jQuery} $input                                                                                          // 5220
     * @param {jQuery} $btn                                                                                            // 5221
     */                                                                                                                // 5222
    var bindEnterKey = function ($input, $btn) {                                                                       // 5223
      $input.on('keypress', function (event) {                                                                         // 5224
        if (event.keyCode === key.code.ENTER) {                                                                        // 5225
          $btn.trigger('click');                                                                                       // 5226
        }                                                                                                              // 5227
      });                                                                                                              // 5228
    };                                                                                                                 // 5229
                                                                                                                       // 5230
    /**                                                                                                                // 5231
     * Show link dialog and set event handlers on dialog controls.                                                     // 5232
     *                                                                                                                 // 5233
     * @param {jQuery} $editable                                                                                       // 5234
     * @param {jQuery} $dialog                                                                                         // 5235
     * @param {Object} linkInfo                                                                                        // 5236
     * @return {Promise}                                                                                               // 5237
     */                                                                                                                // 5238
    this.showLinkDialog = function ($editable, $dialog, linkInfo) {                                                    // 5239
      return $.Deferred(function (deferred) {                                                                          // 5240
        var $linkDialog = $dialog.find('.note-link-dialog');                                                           // 5241
                                                                                                                       // 5242
        var $linkText = $linkDialog.find('.note-link-text'),                                                           // 5243
        $linkUrl = $linkDialog.find('.note-link-url'),                                                                 // 5244
        $linkBtn = $linkDialog.find('.note-link-btn'),                                                                 // 5245
        $openInNewWindow = $linkDialog.find('input[type=checkbox]');                                                   // 5246
                                                                                                                       // 5247
        $linkDialog.one('shown.bs.modal', function () {                                                                // 5248
          $linkText.val(linkInfo.text);                                                                                // 5249
                                                                                                                       // 5250
          $linkText.on('input', function () {                                                                          // 5251
            toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());                                                    // 5252
            // if linktext was modified by keyup,                                                                      // 5253
            // stop cloning text from linkUrl                                                                          // 5254
            linkInfo.text = $linkText.val();                                                                           // 5255
          });                                                                                                          // 5256
                                                                                                                       // 5257
          // if no url was given, copy text to url                                                                     // 5258
          if (!linkInfo.url) {                                                                                         // 5259
            linkInfo.url = linkInfo.text || 'http://';                                                                 // 5260
            toggleBtn($linkBtn, linkInfo.text);                                                                        // 5261
          }                                                                                                            // 5262
                                                                                                                       // 5263
          $linkUrl.on('input', function () {                                                                           // 5264
            toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());                                                    // 5265
            // display same link on `Text to display` input                                                            // 5266
            // when create a new link                                                                                  // 5267
            if (!linkInfo.text) {                                                                                      // 5268
              $linkText.val($linkUrl.val());                                                                           // 5269
            }                                                                                                          // 5270
          }).val(linkInfo.url).trigger('focus').trigger('select');                                                     // 5271
                                                                                                                       // 5272
          bindEnterKey($linkUrl, $linkBtn);                                                                            // 5273
          bindEnterKey($linkText, $linkBtn);                                                                           // 5274
                                                                                                                       // 5275
          $openInNewWindow.prop('checked', linkInfo.isNewWindow);                                                      // 5276
                                                                                                                       // 5277
          $linkBtn.one('click', function (event) {                                                                     // 5278
            event.preventDefault();                                                                                    // 5279
                                                                                                                       // 5280
            deferred.resolve({                                                                                         // 5281
              range: linkInfo.range,                                                                                   // 5282
              url: $linkUrl.val(),                                                                                     // 5283
              text: $linkText.val(),                                                                                   // 5284
              isNewWindow: $openInNewWindow.is(':checked')                                                             // 5285
            });                                                                                                        // 5286
            $linkDialog.modal('hide');                                                                                 // 5287
          });                                                                                                          // 5288
        }).one('hidden.bs.modal', function () {                                                                        // 5289
          // detach events                                                                                             // 5290
          $linkText.off('input keypress');                                                                             // 5291
          $linkUrl.off('input keypress');                                                                              // 5292
          $linkBtn.off('click');                                                                                       // 5293
                                                                                                                       // 5294
          if (deferred.state() === 'pending') {                                                                        // 5295
            deferred.reject();                                                                                         // 5296
          }                                                                                                            // 5297
        }).modal('show');                                                                                              // 5298
      }).promise();                                                                                                    // 5299
    };                                                                                                                 // 5300
                                                                                                                       // 5301
    /**                                                                                                                // 5302
     * @param {Object} layoutInfo                                                                                      // 5303
     */                                                                                                                // 5304
    this.show = function (layoutInfo) {                                                                                // 5305
      var $editor = layoutInfo.editor(),                                                                               // 5306
          $dialog = layoutInfo.dialog(),                                                                               // 5307
          $editable = layoutInfo.editable(),                                                                           // 5308
          $popover = layoutInfo.popover(),                                                                             // 5309
          linkInfo = handler.invoke('editor.getLinkInfo', $editable);                                                  // 5310
                                                                                                                       // 5311
      var options = $editor.data('options');                                                                           // 5312
                                                                                                                       // 5313
      handler.invoke('editor.saveRange', $editable);                                                                   // 5314
      this.showLinkDialog($editable, $dialog, linkInfo).then(function (linkInfo) {                                     // 5315
        handler.invoke('editor.restoreRange', $editable);                                                              // 5316
        handler.invoke('editor.createLink', $editable, linkInfo, options);                                             // 5317
        // hide popover after creating link                                                                            // 5318
        handler.invoke('popover.hide', $popover);                                                                      // 5319
      }).fail(function () {                                                                                            // 5320
        handler.invoke('editor.restoreRange', $editable);                                                              // 5321
      });                                                                                                              // 5322
    };                                                                                                                 // 5323
  };                                                                                                                   // 5324
                                                                                                                       // 5325
  var ImageDialog = function (handler) {                                                                               // 5326
    /**                                                                                                                // 5327
     * toggle button status                                                                                            // 5328
     *                                                                                                                 // 5329
     * @private                                                                                                        // 5330
     * @param {jQuery} $btn                                                                                            // 5331
     * @param {Boolean} isEnable                                                                                       // 5332
     */                                                                                                                // 5333
    var toggleBtn = function ($btn, isEnable) {                                                                        // 5334
      $btn.toggleClass('disabled', !isEnable);                                                                         // 5335
      $btn.attr('disabled', !isEnable);                                                                                // 5336
    };                                                                                                                 // 5337
                                                                                                                       // 5338
    /**                                                                                                                // 5339
     * bind enter key                                                                                                  // 5340
     *                                                                                                                 // 5341
     * @private                                                                                                        // 5342
     * @param {jQuery} $input                                                                                          // 5343
     * @param {jQuery} $btn                                                                                            // 5344
     */                                                                                                                // 5345
    var bindEnterKey = function ($input, $btn) {                                                                       // 5346
      $input.on('keypress', function (event) {                                                                         // 5347
        if (event.keyCode === key.code.ENTER) {                                                                        // 5348
          $btn.trigger('click');                                                                                       // 5349
        }                                                                                                              // 5350
      });                                                                                                              // 5351
    };                                                                                                                 // 5352
                                                                                                                       // 5353
    this.show = function (layoutInfo) {                                                                                // 5354
      var $dialog = layoutInfo.dialog(),                                                                               // 5355
          $editable = layoutInfo.editable();                                                                           // 5356
                                                                                                                       // 5357
      handler.invoke('editor.saveRange', $editable);                                                                   // 5358
      this.showImageDialog($editable, $dialog).then(function (data) {                                                  // 5359
        handler.invoke('editor.restoreRange', $editable);                                                              // 5360
                                                                                                                       // 5361
        if (typeof data === 'string') {                                                                                // 5362
          // image url                                                                                                 // 5363
          handler.invoke('editor.insertImage', $editable, data);                                                       // 5364
        } else {                                                                                                       // 5365
          // array of files                                                                                            // 5366
          handler.insertImages(layoutInfo, data);                                                                      // 5367
        }                                                                                                              // 5368
      }).fail(function () {                                                                                            // 5369
        handler.invoke('editor.restoreRange', $editable);                                                              // 5370
      });                                                                                                              // 5371
    };                                                                                                                 // 5372
                                                                                                                       // 5373
    /**                                                                                                                // 5374
     * show image dialog                                                                                               // 5375
     *                                                                                                                 // 5376
     * @param {jQuery} $editable                                                                                       // 5377
     * @param {jQuery} $dialog                                                                                         // 5378
     * @return {Promise}                                                                                               // 5379
     */                                                                                                                // 5380
    this.showImageDialog = function ($editable, $dialog) {                                                             // 5381
      return $.Deferred(function (deferred) {                                                                          // 5382
        var $imageDialog = $dialog.find('.note-image-dialog');                                                         // 5383
                                                                                                                       // 5384
        var $imageInput = $dialog.find('.note-image-input'),                                                           // 5385
            $imageUrl = $dialog.find('.note-image-url'),                                                               // 5386
            $imageBtn = $dialog.find('.note-image-btn');                                                               // 5387
                                                                                                                       // 5388
        $imageDialog.one('shown.bs.modal', function () {                                                               // 5389
          // Cloning imageInput to clear element.                                                                      // 5390
          $imageInput.replaceWith($imageInput.clone()                                                                  // 5391
            .on('change', function () {                                                                                // 5392
              deferred.resolve(this.files || this.value);                                                              // 5393
              $imageDialog.modal('hide');                                                                              // 5394
            })                                                                                                         // 5395
            .val('')                                                                                                   // 5396
          );                                                                                                           // 5397
                                                                                                                       // 5398
          $imageBtn.click(function (event) {                                                                           // 5399
            event.preventDefault();                                                                                    // 5400
                                                                                                                       // 5401
            deferred.resolve($imageUrl.val());                                                                         // 5402
            $imageDialog.modal('hide');                                                                                // 5403
          });                                                                                                          // 5404
                                                                                                                       // 5405
          $imageUrl.on('keyup paste', function (event) {                                                               // 5406
            var url;                                                                                                   // 5407
                                                                                                                       // 5408
            if (event.type === 'paste') {                                                                              // 5409
              url = event.originalEvent.clipboardData.getData('text');                                                 // 5410
            } else {                                                                                                   // 5411
              url = $imageUrl.val();                                                                                   // 5412
            }                                                                                                          // 5413
                                                                                                                       // 5414
            toggleBtn($imageBtn, url);                                                                                 // 5415
          }).val('').trigger('focus');                                                                                 // 5416
          bindEnterKey($imageUrl, $imageBtn);                                                                          // 5417
        }).one('hidden.bs.modal', function () {                                                                        // 5418
          $imageInput.off('change');                                                                                   // 5419
          $imageUrl.off('keyup paste keypress');                                                                       // 5420
          $imageBtn.off('click');                                                                                      // 5421
                                                                                                                       // 5422
          if (deferred.state() === 'pending') {                                                                        // 5423
            deferred.reject();                                                                                         // 5424
          }                                                                                                            // 5425
        }).modal('show');                                                                                              // 5426
      });                                                                                                              // 5427
    };                                                                                                                 // 5428
  };                                                                                                                   // 5429
                                                                                                                       // 5430
  var HelpDialog = function (handler) {                                                                                // 5431
    /**                                                                                                                // 5432
     * show help dialog                                                                                                // 5433
     *                                                                                                                 // 5434
     * @param {jQuery} $editable                                                                                       // 5435
     * @param {jQuery} $dialog                                                                                         // 5436
     * @return {Promise}                                                                                               // 5437
     */                                                                                                                // 5438
    this.showHelpDialog = function ($editable, $dialog) {                                                              // 5439
      return $.Deferred(function (deferred) {                                                                          // 5440
        var $helpDialog = $dialog.find('.note-help-dialog');                                                           // 5441
                                                                                                                       // 5442
        $helpDialog.one('hidden.bs.modal', function () {                                                               // 5443
          deferred.resolve();                                                                                          // 5444
        }).modal('show');                                                                                              // 5445
      }).promise();                                                                                                    // 5446
    };                                                                                                                 // 5447
                                                                                                                       // 5448
    /**                                                                                                                // 5449
     * @param {Object} layoutInfo                                                                                      // 5450
     */                                                                                                                // 5451
    this.show = function (layoutInfo) {                                                                                // 5452
      var $dialog = layoutInfo.dialog(),                                                                               // 5453
          $editable = layoutInfo.editable();                                                                           // 5454
                                                                                                                       // 5455
      handler.invoke('editor.saveRange', $editable, true);                                                             // 5456
      this.showHelpDialog($editable, $dialog).then(function () {                                                       // 5457
        handler.invoke('editor.restoreRange', $editable);                                                              // 5458
      });                                                                                                              // 5459
    };                                                                                                                 // 5460
  };                                                                                                                   // 5461
                                                                                                                       // 5462
                                                                                                                       // 5463
  /**                                                                                                                  // 5464
   * @class EventHandler                                                                                               // 5465
   *                                                                                                                   // 5466
   * EventHandler                                                                                                      // 5467
   *  - TODO: new instance per a editor                                                                                // 5468
   */                                                                                                                  // 5469
  var EventHandler = function () {                                                                                     // 5470
    var self = this;                                                                                                   // 5471
                                                                                                                       // 5472
    /**                                                                                                                // 5473
     * Modules                                                                                                         // 5474
     */                                                                                                                // 5475
    var modules = this.modules = {                                                                                     // 5476
      editor: new Editor(this),                                                                                        // 5477
      toolbar: new Toolbar(this),                                                                                      // 5478
      statusbar: new Statusbar(this),                                                                                  // 5479
      popover: new Popover(this),                                                                                      // 5480
      handle: new Handle(this),                                                                                        // 5481
      fullscreen: new Fullscreen(this),                                                                                // 5482
      codeview: new Codeview(this),                                                                                    // 5483
      dragAndDrop: new DragAndDrop(this),                                                                              // 5484
      clipboard: new Clipboard(this),                                                                                  // 5485
      linkDialog: new LinkDialog(this),                                                                                // 5486
      imageDialog: new ImageDialog(this),                                                                              // 5487
      helpDialog: new HelpDialog(this)                                                                                 // 5488
    };                                                                                                                 // 5489
                                                                                                                       // 5490
    /**                                                                                                                // 5491
     * invoke module's method                                                                                          // 5492
     *                                                                                                                 // 5493
     * @param {String} moduleAndMethod - ex) 'editor.redo'                                                             // 5494
     * @param {...*} arguments - arguments of method                                                                   // 5495
     * @return {*}                                                                                                     // 5496
     */                                                                                                                // 5497
    this.invoke = function () {                                                                                        // 5498
      var moduleAndMethod = list.head(list.from(arguments));                                                           // 5499
      var args = list.tail(list.from(arguments));                                                                      // 5500
                                                                                                                       // 5501
      var splits = moduleAndMethod.split('.');                                                                         // 5502
      var hasSeparator = splits.length > 1;                                                                            // 5503
      var moduleName = hasSeparator && list.head(splits);                                                              // 5504
      var methodName = hasSeparator ? list.last(splits) : list.head(splits);                                           // 5505
                                                                                                                       // 5506
      var module = this.getModule(moduleName);                                                                         // 5507
      var method = module[methodName];                                                                                 // 5508
                                                                                                                       // 5509
      return method && method.apply(module, args);                                                                     // 5510
    };                                                                                                                 // 5511
                                                                                                                       // 5512
    /**                                                                                                                // 5513
     * returns module                                                                                                  // 5514
     *                                                                                                                 // 5515
     * @param {String} moduleName - name of module                                                                     // 5516
     * @return {Module} - defaults is editor                                                                           // 5517
     */                                                                                                                // 5518
    this.getModule = function (moduleName) {                                                                           // 5519
      return this.modules[moduleName] || this.modules.editor;                                                          // 5520
    };                                                                                                                 // 5521
                                                                                                                       // 5522
    /**                                                                                                                // 5523
     * @param {jQuery} $holder                                                                                         // 5524
     * @param {Object} callbacks                                                                                       // 5525
     * @param {String} eventNamespace                                                                                  // 5526
     * @returns {Function}                                                                                             // 5527
     */                                                                                                                // 5528
    var bindCustomEvent = this.bindCustomEvent = function ($holder, callbacks, eventNamespace) {                       // 5529
      return function () {                                                                                             // 5530
        var callback = callbacks[func.namespaceToCamel(eventNamespace, 'on')];                                         // 5531
        if (callback) {                                                                                                // 5532
          callback.apply($holder[0], arguments);                                                                       // 5533
        }                                                                                                              // 5534
        return $holder.trigger('summernote.' + eventNamespace, arguments);                                             // 5535
      };                                                                                                               // 5536
    };                                                                                                                 // 5537
                                                                                                                       // 5538
    /**                                                                                                                // 5539
     * insert Images from file array.                                                                                  // 5540
     *                                                                                                                 // 5541
     * @private                                                                                                        // 5542
     * @param {Object} layoutInfo                                                                                      // 5543
     * @param {File[]} files                                                                                           // 5544
     */                                                                                                                // 5545
    this.insertImages = function (layoutInfo, files) {                                                                 // 5546
      var $editor = layoutInfo.editor(),                                                                               // 5547
          $editable = layoutInfo.editable(),                                                                           // 5548
          $holder = layoutInfo.holder();                                                                               // 5549
                                                                                                                       // 5550
      var callbacks = $editable.data('callbacks');                                                                     // 5551
      var options = $editor.data('options');                                                                           // 5552
                                                                                                                       // 5553
      // If onImageUpload options setted                                                                               // 5554
      if (callbacks.onImageUpload) {                                                                                   // 5555
        bindCustomEvent($holder, callbacks, 'image.upload')(files);                                                    // 5556
      // else insert Image as dataURL                                                                                  // 5557
      } else {                                                                                                         // 5558
        $.each(files, function (idx, file) {                                                                           // 5559
          var filename = file.name;                                                                                    // 5560
          if (options.maximumImageFileSize && options.maximumImageFileSize < file.size) {                              // 5561
            bindCustomEvent($holder, callbacks, 'image.upload.error')(options.langInfo.image.maximumFileSizeError);    // 5562
          } else {                                                                                                     // 5563
            async.readFileAsDataURL(file).then(function (sDataURL) {                                                   // 5564
              modules.editor.insertImage($editable, sDataURL, filename);                                               // 5565
            }).fail(function () {                                                                                      // 5566
              bindCustomEvent($holder, callbacks, 'image.upload.error')(options.langInfo.image.maximumFileSizeError);  // 5567
            });                                                                                                        // 5568
          }                                                                                                            // 5569
        });                                                                                                            // 5570
      }                                                                                                                // 5571
    };                                                                                                                 // 5572
                                                                                                                       // 5573
    var commands = {                                                                                                   // 5574
      /**                                                                                                              // 5575
       * @param {Object} layoutInfo                                                                                    // 5576
       */                                                                                                              // 5577
      showLinkDialog: function (layoutInfo) {                                                                          // 5578
        modules.linkDialog.show(layoutInfo);                                                                           // 5579
      },                                                                                                               // 5580
                                                                                                                       // 5581
      /**                                                                                                              // 5582
       * @param {Object} layoutInfo                                                                                    // 5583
       */                                                                                                              // 5584
      showImageDialog: function (layoutInfo) {                                                                         // 5585
        modules.imageDialog.show(layoutInfo);                                                                          // 5586
      },                                                                                                               // 5587
                                                                                                                       // 5588
      /**                                                                                                              // 5589
       * @param {Object} layoutInfo                                                                                    // 5590
       */                                                                                                              // 5591
      showHelpDialog: function (layoutInfo) {                                                                          // 5592
        modules.helpDialog.show(layoutInfo);                                                                           // 5593
      },                                                                                                               // 5594
                                                                                                                       // 5595
      /**                                                                                                              // 5596
       * @param {Object} layoutInfo                                                                                    // 5597
       */                                                                                                              // 5598
      fullscreen: function (layoutInfo) {                                                                              // 5599
        modules.fullscreen.toggle(layoutInfo);                                                                         // 5600
      },                                                                                                               // 5601
                                                                                                                       // 5602
      /**                                                                                                              // 5603
       * @param {Object} layoutInfo                                                                                    // 5604
       */                                                                                                              // 5605
      codeview: function (layoutInfo) {                                                                                // 5606
        modules.codeview.toggle(layoutInfo);                                                                           // 5607
      }                                                                                                                // 5608
    };                                                                                                                 // 5609
                                                                                                                       // 5610
    var hMousedown = function (event) {                                                                                // 5611
      //preventDefault Selection for FF, IE8+                                                                          // 5612
      if (dom.isImg(event.target)) {                                                                                   // 5613
        event.preventDefault();                                                                                        // 5614
      }                                                                                                                // 5615
    };                                                                                                                 // 5616
                                                                                                                       // 5617
    var hKeyupAndMouseup = function (event) {                                                                          // 5618
      var layoutInfo = dom.makeLayoutInfo(event.currentTarget || event.target);                                        // 5619
      modules.editor.removeBogus(layoutInfo.editable());                                                               // 5620
      hToolbarAndPopoverUpdate(event);                                                                                 // 5621
    };                                                                                                                 // 5622
                                                                                                                       // 5623
    /**                                                                                                                // 5624
     * update sytle info                                                                                               // 5625
     * @param {Object} styleInfo                                                                                       // 5626
     * @param {Object} layoutInfo                                                                                      // 5627
     */                                                                                                                // 5628
    this.updateStyleInfo = function (styleInfo, layoutInfo) {                                                          // 5629
      if (!styleInfo) {                                                                                                // 5630
        return;                                                                                                        // 5631
      }                                                                                                                // 5632
      var isAirMode = layoutInfo.editor().data('options').airMode;                                                     // 5633
      if (!isAirMode) {                                                                                                // 5634
        modules.toolbar.update(layoutInfo.toolbar(), styleInfo);                                                       // 5635
      }                                                                                                                // 5636
                                                                                                                       // 5637
      modules.popover.update(layoutInfo.popover(), styleInfo, isAirMode);                                              // 5638
      modules.handle.update(layoutInfo.handle(), styleInfo, isAirMode);                                                // 5639
    };                                                                                                                 // 5640
                                                                                                                       // 5641
    var hToolbarAndPopoverUpdate = function (event) {                                                                  // 5642
      var target = event.target;                                                                                       // 5643
      // delay for range after mouseup                                                                                 // 5644
      setTimeout(function () {                                                                                         // 5645
        var layoutInfo = dom.makeLayoutInfo(target);                                                                   // 5646
        var styleInfo = modules.editor.currentStyle(target);                                                           // 5647
        self.updateStyleInfo(styleInfo, layoutInfo);                                                                   // 5648
      }, 0);                                                                                                           // 5649
    };                                                                                                                 // 5650
                                                                                                                       // 5651
    var hScroll = function (event) {                                                                                   // 5652
      var layoutInfo = dom.makeLayoutInfo(event.currentTarget || event.target);                                        // 5653
      //hide popover and handle when scrolled                                                                          // 5654
      modules.popover.hide(layoutInfo.popover());                                                                      // 5655
      modules.handle.hide(layoutInfo.handle());                                                                        // 5656
    };                                                                                                                 // 5657
                                                                                                                       // 5658
    var hToolbarAndPopoverMousedown = function (event) {                                                               // 5659
      // prevent default event when insertTable (FF, Webkit)                                                           // 5660
      var $btn = $(event.target).closest('[data-event]');                                                              // 5661
      if ($btn.length) {                                                                                               // 5662
        event.preventDefault();                                                                                        // 5663
      }                                                                                                                // 5664
    };                                                                                                                 // 5665
                                                                                                                       // 5666
    var hToolbarAndPopoverClick = function (event) {                                                                   // 5667
      var $btn = $(event.target).closest('[data-event]');                                                              // 5668
                                                                                                                       // 5669
      if (!$btn.length) {                                                                                              // 5670
        return;                                                                                                        // 5671
      }                                                                                                                // 5672
                                                                                                                       // 5673
      var eventName = $btn.attr('data-event'),                                                                         // 5674
          value = $btn.attr('data-value'),                                                                             // 5675
          hide = $btn.attr('data-hide');                                                                               // 5676
                                                                                                                       // 5677
      var layoutInfo = dom.makeLayoutInfo(event.target);                                                               // 5678
                                                                                                                       // 5679
      // before command: detect control selection element($target)                                                     // 5680
      var $target;                                                                                                     // 5681
      if ($.inArray(eventName, ['resize', 'floatMe', 'removeMedia', 'imageShape']) !== -1) {                           // 5682
        var $selection = layoutInfo.handle().find('.note-control-selection');                                          // 5683
        $target = $($selection.data('target'));                                                                        // 5684
      }                                                                                                                // 5685
                                                                                                                       // 5686
      // If requested, hide the popover when the button is clicked.                                                    // 5687
      // Useful for things like showHelpDialog.                                                                        // 5688
      if (hide) {                                                                                                      // 5689
        $btn.parents('.popover').hide();                                                                               // 5690
      }                                                                                                                // 5691
                                                                                                                       // 5692
      if ($.isFunction($.summernote.pluginEvents[eventName])) {                                                        // 5693
        $.summernote.pluginEvents[eventName](event, modules.editor, layoutInfo, value);                                // 5694
      } else if (modules.editor[eventName]) { // on command                                                            // 5695
        var $editable = layoutInfo.editable();                                                                         // 5696
        $editable.focus();                                                                                             // 5697
        modules.editor[eventName]($editable, value, $target);                                                          // 5698
        event.preventDefault();                                                                                        // 5699
      } else if (commands[eventName]) {                                                                                // 5700
        commands[eventName].call(this, layoutInfo);                                                                    // 5701
        event.preventDefault();                                                                                        // 5702
      }                                                                                                                // 5703
                                                                                                                       // 5704
      // after command                                                                                                 // 5705
      if ($.inArray(eventName, ['backColor', 'foreColor']) !== -1) {                                                   // 5706
        var options = layoutInfo.editor().data('options', options);                                                    // 5707
        var module = options.airMode ? modules.popover : modules.toolbar;                                              // 5708
        module.updateRecentColor(list.head($btn), eventName, value);                                                   // 5709
      }                                                                                                                // 5710
                                                                                                                       // 5711
      hToolbarAndPopoverUpdate(event);                                                                                 // 5712
    };                                                                                                                 // 5713
                                                                                                                       // 5714
    var PX_PER_EM = 18;                                                                                                // 5715
    var hDimensionPickerMove = function (event, options) {                                                             // 5716
      var $picker = $(event.target.parentNode); // target is mousecatcher                                              // 5717
      var $dimensionDisplay = $picker.next();                                                                          // 5718
      var $catcher = $picker.find('.note-dimension-picker-mousecatcher');                                              // 5719
      var $highlighted = $picker.find('.note-dimension-picker-highlighted');                                           // 5720
      var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');                                       // 5721
                                                                                                                       // 5722
      var posOffset;                                                                                                   // 5723
      // HTML5 with jQuery - e.offsetX is undefined in Firefox                                                         // 5724
      if (event.offsetX === undefined) {                                                                               // 5725
        var posCatcher = $(event.target).offset();                                                                     // 5726
        posOffset = {                                                                                                  // 5727
          x: event.pageX - posCatcher.left,                                                                            // 5728
          y: event.pageY - posCatcher.top                                                                              // 5729
        };                                                                                                             // 5730
      } else {                                                                                                         // 5731
        posOffset = {                                                                                                  // 5732
          x: event.offsetX,                                                                                            // 5733
          y: event.offsetY                                                                                             // 5734
        };                                                                                                             // 5735
      }                                                                                                                // 5736
                                                                                                                       // 5737
      var dim = {                                                                                                      // 5738
        c: Math.ceil(posOffset.x / PX_PER_EM) || 1,                                                                    // 5739
        r: Math.ceil(posOffset.y / PX_PER_EM) || 1                                                                     // 5740
      };                                                                                                               // 5741
                                                                                                                       // 5742
      $highlighted.css({ width: dim.c + 'em', height: dim.r + 'em' });                                                 // 5743
      $catcher.attr('data-value', dim.c + 'x' + dim.r);                                                                // 5744
                                                                                                                       // 5745
      if (3 < dim.c && dim.c < options.insertTableMaxSize.col) {                                                       // 5746
        $unhighlighted.css({ width: dim.c + 1 + 'em'});                                                                // 5747
      }                                                                                                                // 5748
                                                                                                                       // 5749
      if (3 < dim.r && dim.r < options.insertTableMaxSize.row) {                                                       // 5750
        $unhighlighted.css({ height: dim.r + 1 + 'em'});                                                               // 5751
      }                                                                                                                // 5752
                                                                                                                       // 5753
      $dimensionDisplay.html(dim.c + ' x ' + dim.r);                                                                   // 5754
    };                                                                                                                 // 5755
                                                                                                                       // 5756
    /**                                                                                                                // 5757
     * bind KeyMap on keydown                                                                                          // 5758
     *                                                                                                                 // 5759
     * @param {Object} layoutInfo                                                                                      // 5760
     * @param {Object} keyMap                                                                                          // 5761
     */                                                                                                                // 5762
    this.bindKeyMap = function (layoutInfo, keyMap) {                                                                  // 5763
      var $editor = layoutInfo.editor();                                                                               // 5764
      var $editable = layoutInfo.editable();                                                                           // 5765
                                                                                                                       // 5766
      $editable.on('keydown', function (event) {                                                                       // 5767
        var keys = [];                                                                                                 // 5768
                                                                                                                       // 5769
        // modifier                                                                                                    // 5770
        if (event.metaKey) { keys.push('CMD'); }                                                                       // 5771
        if (event.ctrlKey && !event.altKey) { keys.push('CTRL'); }                                                     // 5772
        if (event.shiftKey) { keys.push('SHIFT'); }                                                                    // 5773
                                                                                                                       // 5774
        // keycode                                                                                                     // 5775
        var keyName = key.nameFromCode[event.keyCode];                                                                 // 5776
        if (keyName) {                                                                                                 // 5777
          keys.push(keyName);                                                                                          // 5778
        }                                                                                                              // 5779
                                                                                                                       // 5780
        var pluginEvent;                                                                                               // 5781
        var keyString = keys.join('+');                                                                                // 5782
        var eventName = keyMap[keyString];                                                                             // 5783
        if (eventName) {                                                                                               // 5784
          // FIXME Summernote doesn't support event pipeline yet.                                                      // 5785
          //  - Plugin -> Base Code                                                                                    // 5786
          pluginEvent = $.summernote.pluginEvents[keyString];                                                          // 5787
          if ($.isFunction(pluginEvent)) {                                                                             // 5788
            if (pluginEvent(event, modules.editor, layoutInfo)) {                                                      // 5789
              return false;                                                                                            // 5790
            }                                                                                                          // 5791
          }                                                                                                            // 5792
                                                                                                                       // 5793
          pluginEvent = $.summernote.pluginEvents[eventName];                                                          // 5794
                                                                                                                       // 5795
          if ($.isFunction(pluginEvent)) {                                                                             // 5796
            pluginEvent(event, modules.editor, layoutInfo);                                                            // 5797
          } else if (modules.editor[eventName]) {                                                                      // 5798
            modules.editor[eventName]($editable, $editor.data('options'));                                             // 5799
            event.preventDefault();                                                                                    // 5800
          } else if (commands[eventName]) {                                                                            // 5801
            commands[eventName].call(this, layoutInfo);                                                                // 5802
            event.preventDefault();                                                                                    // 5803
          }                                                                                                            // 5804
        } else if (key.isEdit(event.keyCode)) {                                                                        // 5805
          modules.editor.afterCommand($editable);                                                                      // 5806
        }                                                                                                              // 5807
      });                                                                                                              // 5808
    };                                                                                                                 // 5809
                                                                                                                       // 5810
    /**                                                                                                                // 5811
     * attach eventhandler                                                                                             // 5812
     *                                                                                                                 // 5813
     * @param {Object} layoutInfo - layout Informations                                                                // 5814
     * @param {Object} options - user options include custom event handlers                                            // 5815
     */                                                                                                                // 5816
    this.attach = function (layoutInfo, options) {                                                                     // 5817
      // handlers for editable                                                                                         // 5818
      if (options.shortcuts) {                                                                                         // 5819
        this.bindKeyMap(layoutInfo, options.keyMap[agent.isMac ? 'mac' : 'pc']);                                       // 5820
      }                                                                                                                // 5821
      layoutInfo.editable().on('mousedown', hMousedown);                                                               // 5822
      layoutInfo.editable().on('keyup mouseup', hKeyupAndMouseup);                                                     // 5823
      layoutInfo.editable().on('scroll', hScroll);                                                                     // 5824
                                                                                                                       // 5825
      // handler for clipboard                                                                                         // 5826
      modules.clipboard.attach(layoutInfo, options);                                                                   // 5827
                                                                                                                       // 5828
      // handler for handle and popover                                                                                // 5829
      modules.handle.attach(layoutInfo, options);                                                                      // 5830
      layoutInfo.popover().on('click', hToolbarAndPopoverClick);                                                       // 5831
      layoutInfo.popover().on('mousedown', hToolbarAndPopoverMousedown);                                               // 5832
                                                                                                                       // 5833
      // handler for drag and drop                                                                                     // 5834
      modules.dragAndDrop.attach(layoutInfo, options);                                                                 // 5835
                                                                                                                       // 5836
      // handlers for frame mode (toolbar, statusbar)                                                                  // 5837
      if (!options.airMode) {                                                                                          // 5838
        // handler for toolbar                                                                                         // 5839
        layoutInfo.toolbar().on('click', hToolbarAndPopoverClick);                                                     // 5840
        layoutInfo.toolbar().on('mousedown', hToolbarAndPopoverMousedown);                                             // 5841
                                                                                                                       // 5842
        // handler for statusbar                                                                                       // 5843
        modules.statusbar.attach(layoutInfo, options);                                                                 // 5844
      }                                                                                                                // 5845
                                                                                                                       // 5846
      // handler for table dimension                                                                                   // 5847
      var $catcherContainer = options.airMode ? layoutInfo.popover() :                                                 // 5848
                                                layoutInfo.toolbar();                                                  // 5849
      var $catcher = $catcherContainer.find('.note-dimension-picker-mousecatcher');                                    // 5850
      $catcher.css({                                                                                                   // 5851
        width: options.insertTableMaxSize.col + 'em',                                                                  // 5852
        height: options.insertTableMaxSize.row + 'em'                                                                  // 5853
      }).on('mousemove', function (event) {                                                                            // 5854
        hDimensionPickerMove(event, options);                                                                          // 5855
      });                                                                                                              // 5856
                                                                                                                       // 5857
      // save options on editor                                                                                        // 5858
      layoutInfo.editor().data('options', options);                                                                    // 5859
                                                                                                                       // 5860
      // ret styleWithCSS for backColor / foreColor clearing with 'inherit'.                                           // 5861
      if (!agent.isMSIE) {                                                                                             // 5862
        // [workaround] for Firefox                                                                                    // 5863
        //  - protect FF Error: NS_ERROR_FAILURE: Failure                                                              // 5864
        setTimeout(function () {                                                                                       // 5865
          document.execCommand('styleWithCSS', 0, options.styleWithSpan);                                              // 5866
        }, 0);                                                                                                         // 5867
      }                                                                                                                // 5868
                                                                                                                       // 5869
      // History                                                                                                       // 5870
      var history = new History(layoutInfo.editable());                                                                // 5871
      layoutInfo.editable().data('NoteHistory', history);                                                              // 5872
                                                                                                                       // 5873
      // All editor status will be saved on editable with jquery's data                                                // 5874
      // for support multiple editor with singleton object.                                                            // 5875
      layoutInfo.editable().data('callbacks', {                                                                        // 5876
        onInit: options.onInit,                                                                                        // 5877
        onFocus: options.onFocus,                                                                                      // 5878
        onBlur: options.onBlur,                                                                                        // 5879
        onKeydown: options.onKeydown,                                                                                  // 5880
        onKeyup: options.onKeyup,                                                                                      // 5881
        onMousedown: options.onMousedown,                                                                              // 5882
        onEnter: options.onEnter,                                                                                      // 5883
        onPaste: options.onPaste,                                                                                      // 5884
        onBeforeCommand: options.onBeforeCommand,                                                                      // 5885
        onChange: options.onChange,                                                                                    // 5886
        onImageUpload: options.onImageUpload,                                                                          // 5887
        onImageUploadError: options.onImageUploadError,                                                                // 5888
        onMediaDelete: options.onMediaDelete,                                                                          // 5889
        onToolbarClick: options.onToolbarClick                                                                         // 5890
      });                                                                                                              // 5891
                                                                                                                       // 5892
      var styleInfo = modules.editor.styleFromNode(layoutInfo.editable());                                             // 5893
      this.updateStyleInfo(styleInfo, layoutInfo);                                                                     // 5894
    };                                                                                                                 // 5895
                                                                                                                       // 5896
    /**                                                                                                                // 5897
     * attach jquery custom event                                                                                      // 5898
     *                                                                                                                 // 5899
     * @param {Object} layoutInfo - layout Informations                                                                // 5900
     */                                                                                                                // 5901
    this.attachCustomEvent = function (layoutInfo, options) {                                                          // 5902
      var $holder = layoutInfo.holder();                                                                               // 5903
      var $editable = layoutInfo.editable();                                                                           // 5904
      var callbacks = $editable.data('callbacks');                                                                     // 5905
                                                                                                                       // 5906
      $editable.focus(bindCustomEvent($holder, callbacks, 'focus'));                                                   // 5907
      $editable.blur(bindCustomEvent($holder, callbacks, 'blur'));                                                     // 5908
                                                                                                                       // 5909
      $editable.keydown(function (event) {                                                                             // 5910
        if (event.keyCode === key.code.ENTER) {                                                                        // 5911
          bindCustomEvent($holder, callbacks, 'enter').call(this, event);                                              // 5912
        }                                                                                                              // 5913
        bindCustomEvent($holder, callbacks, 'keydown').call(this, event);                                              // 5914
      });                                                                                                              // 5915
      $editable.keyup(bindCustomEvent($holder, callbacks, 'keyup'));                                                   // 5916
                                                                                                                       // 5917
      $editable.on('mousedown', bindCustomEvent($holder, callbacks, 'mousedown'));                                     // 5918
      $editable.on('mouseup', bindCustomEvent($holder, callbacks, 'mouseup'));                                         // 5919
      $editable.on('scroll', bindCustomEvent($holder, callbacks, 'scroll'));                                           // 5920
                                                                                                                       // 5921
      $editable.on('paste', bindCustomEvent($holder, callbacks, 'paste'));                                             // 5922
                                                                                                                       // 5923
      // [workaround] IE doesn't have input events for contentEditable                                                 // 5924
      //  - see: https://goo.gl/4bfIvA                                                                                 // 5925
      var changeEventName = agent.isMSIE ? 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted' : 'input';    // 5926
      $editable.on(changeEventName, function () {                                                                      // 5927
        bindCustomEvent($holder, callbacks, 'change')($editable.html(), $editable);                                    // 5928
      });                                                                                                              // 5929
                                                                                                                       // 5930
      if (!options.airMode) {                                                                                          // 5931
        layoutInfo.toolbar().click(bindCustomEvent($holder, callbacks, 'toolbar.click'));                              // 5932
        layoutInfo.popover().click(bindCustomEvent($holder, callbacks, 'popover.click'));                              // 5933
      }                                                                                                                // 5934
                                                                                                                       // 5935
      // Textarea: auto filling the code before form submit.                                                           // 5936
      if (dom.isTextarea(list.head($holder))) {                                                                        // 5937
        $holder.closest('form').submit(function (e) {                                                                  // 5938
          layoutInfo.holder().val(layoutInfo.holder().code());                                                         // 5939
          bindCustomEvent($holder, callbacks, 'submit').call(this, e, $holder.code());                                 // 5940
        });                                                                                                            // 5941
      }                                                                                                                // 5942
                                                                                                                       // 5943
      // textarea auto sync                                                                                            // 5944
      if (dom.isTextarea(list.head($holder)) && options.textareaAutoSync) {                                            // 5945
        $holder.on('summernote.change', function () {                                                                  // 5946
          layoutInfo.holder().val(layoutInfo.holder().code());                                                         // 5947
        });                                                                                                            // 5948
      }                                                                                                                // 5949
                                                                                                                       // 5950
      // fire init event                                                                                               // 5951
      bindCustomEvent($holder, callbacks, 'init')(layoutInfo);                                                         // 5952
                                                                                                                       // 5953
      // fire plugin init event                                                                                        // 5954
      for (var i = 0, len = $.summernote.plugins.length; i < len; i++) {                                               // 5955
        if ($.isFunction($.summernote.plugins[i].init)) {                                                              // 5956
          $.summernote.plugins[i].init(layoutInfo);                                                                    // 5957
        }                                                                                                              // 5958
      }                                                                                                                // 5959
    };                                                                                                                 // 5960
                                                                                                                       // 5961
    this.detach = function (layoutInfo, options) {                                                                     // 5962
      layoutInfo.holder().off();                                                                                       // 5963
      layoutInfo.editable().off();                                                                                     // 5964
                                                                                                                       // 5965
      layoutInfo.popover().off();                                                                                      // 5966
      layoutInfo.handle().off();                                                                                       // 5967
      layoutInfo.dialog().off();                                                                                       // 5968
                                                                                                                       // 5969
      if (!options.airMode) {                                                                                          // 5970
        layoutInfo.dropzone().off();                                                                                   // 5971
        layoutInfo.toolbar().off();                                                                                    // 5972
        layoutInfo.statusbar().off();                                                                                  // 5973
      }                                                                                                                // 5974
    };                                                                                                                 // 5975
  };                                                                                                                   // 5976
                                                                                                                       // 5977
  /**                                                                                                                  // 5978
   * @class Renderer                                                                                                   // 5979
   *                                                                                                                   // 5980
   * renderer                                                                                                          // 5981
   *                                                                                                                   // 5982
   * rendering toolbar and editable                                                                                    // 5983
   */                                                                                                                  // 5984
  var Renderer = function () {                                                                                         // 5985
                                                                                                                       // 5986
    /**                                                                                                                // 5987
     * bootstrap button template                                                                                       // 5988
     * @private                                                                                                        // 5989
     * @param {String} label button name                                                                               // 5990
     * @param {Object} [options] button options                                                                        // 5991
     * @param {String} [options.event] data-event                                                                      // 5992
     * @param {String} [options.className] button's class name                                                         // 5993
     * @param {String} [options.value] data-value                                                                      // 5994
     * @param {String} [options.title] button's title for popup                                                        // 5995
     * @param {String} [options.dropdown] dropdown html                                                                // 5996
     * @param {String} [options.hide] data-hide                                                                        // 5997
     */                                                                                                                // 5998
    var tplButton = function (label, options) {                                                                        // 5999
      var event = options.event;                                                                                       // 6000
      var value = options.value;                                                                                       // 6001
      var title = options.title;                                                                                       // 6002
      var className = options.className;                                                                               // 6003
      var dropdown = options.dropdown;                                                                                 // 6004
      var hide = options.hide;                                                                                         // 6005
                                                                                                                       // 6006
      return (dropdown ? '<div class="btn-group' +                                                                     // 6007
               (className ? ' ' + className : '') + '">' : '') +                                                       // 6008
               '<button type="button"' +                                                                               // 6009
                 ' class="btn btn-default btn-sm' +                                                                    // 6010
                   ((!dropdown && className) ? ' ' + className : '') +                                                 // 6011
                   (dropdown ? ' dropdown-toggle' : '') +                                                              // 6012
                 '"' +                                                                                                 // 6013
                 (dropdown ? ' data-toggle="dropdown"' : '') +                                                         // 6014
                 (title ? ' title="' + title + '"' : '') +                                                             // 6015
                 (event ? ' data-event="' + event + '"' : '') +                                                        // 6016
                 (value ? ' data-value=\'' + value + '\'' : '') +                                                      // 6017
                 (hide ? ' data-hide=\'' + hide + '\'' : '') +                                                         // 6018
                 ' tabindex="-1">' +                                                                                   // 6019
                 label +                                                                                               // 6020
                 (dropdown ? ' <span class="caret"></span>' : '') +                                                    // 6021
               '</button>' +                                                                                           // 6022
               (dropdown || '') +                                                                                      // 6023
             (dropdown ? '</div>' : '');                                                                               // 6024
    };                                                                                                                 // 6025
                                                                                                                       // 6026
    /**                                                                                                                // 6027
     * bootstrap icon button template                                                                                  // 6028
     * @private                                                                                                        // 6029
     * @param {String} iconClassName                                                                                   // 6030
     * @param {Object} [options]                                                                                       // 6031
     * @param {String} [options.event]                                                                                 // 6032
     * @param {String} [options.value]                                                                                 // 6033
     * @param {String} [options.title]                                                                                 // 6034
     * @param {String} [options.dropdown]                                                                              // 6035
     */                                                                                                                // 6036
    var tplIconButton = function (iconClassName, options) {                                                            // 6037
      var label = '<i class="' + iconClassName + '"></i>';                                                             // 6038
      return tplButton(label, options);                                                                                // 6039
    };                                                                                                                 // 6040
                                                                                                                       // 6041
    /**                                                                                                                // 6042
     * bootstrap popover template                                                                                      // 6043
     * @private                                                                                                        // 6044
     * @param {String} className                                                                                       // 6045
     * @param {String} content                                                                                         // 6046
     */                                                                                                                // 6047
    var tplPopover = function (className, content) {                                                                   // 6048
      var $popover = $('<div class="' + className + ' popover bottom in" style="display: none;">' +                    // 6049
               '<div class="arrow"></div>' +                                                                           // 6050
               '<div class="popover-content">' +                                                                       // 6051
               '</div>' +                                                                                              // 6052
             '</div>');                                                                                                // 6053
                                                                                                                       // 6054
      $popover.find('.popover-content').append(content);                                                               // 6055
      return $popover;                                                                                                 // 6056
    };                                                                                                                 // 6057
                                                                                                                       // 6058
    /**                                                                                                                // 6059
     * bootstrap dialog template                                                                                       // 6060
     *                                                                                                                 // 6061
     * @param {String} className                                                                                       // 6062
     * @param {String} [title='']                                                                                      // 6063
     * @param {String} body                                                                                            // 6064
     * @param {String} [footer='']                                                                                     // 6065
     */                                                                                                                // 6066
    var tplDialog = function (className, title, body, footer) {                                                        // 6067
      return '<div class="' + className + ' modal" aria-hidden="false">' +                                             // 6068
               '<div class="modal-dialog">' +                                                                          // 6069
                 '<div class="modal-content">' +                                                                       // 6070
                   (title ?                                                                                            // 6071
                   '<div class="modal-header">' +                                                                      // 6072
                     '<button type="button" class="close" aria-hidden="true" tabindex="-1">&times;</button>' +         // 6073
                     '<h4 class="modal-title">' + title + '</h4>' +                                                    // 6074
                   '</div>' : ''                                                                                       // 6075
                   ) +                                                                                                 // 6076
                   '<div class="modal-body">' + body + '</div>' +                                                      // 6077
                   (footer ?                                                                                           // 6078
                   '<div class="modal-footer">' + footer + '</div>' : ''                                               // 6079
                   ) +                                                                                                 // 6080
                 '</div>' +                                                                                            // 6081
               '</div>' +                                                                                              // 6082
             '</div>';                                                                                                 // 6083
    };                                                                                                                 // 6084
                                                                                                                       // 6085
    /**                                                                                                                // 6086
     * bootstrap dropdown template                                                                                     // 6087
     *                                                                                                                 // 6088
     * @param {String|String[]} contents                                                                               // 6089
     * @param {String} [className='']                                                                                  // 6090
     * @param {String} [nodeName='']                                                                                   // 6091
     */                                                                                                                // 6092
    var tplDropdown = function (contents, className, nodeName) {                                                       // 6093
      var classes = 'dropdown-menu' + (className ? ' ' + className : '');                                              // 6094
      nodeName = nodeName || 'ul';                                                                                     // 6095
      if (contents instanceof Array) {                                                                                 // 6096
        contents = contents.join('');                                                                                  // 6097
      }                                                                                                                // 6098
                                                                                                                       // 6099
      return '<' + nodeName + ' class="' + classes + '">' + contents + '</' + nodeName + '>';                          // 6100
    };                                                                                                                 // 6101
                                                                                                                       // 6102
    var tplButtonInfo = {                                                                                              // 6103
      picture: function (lang, options) {                                                                              // 6104
        return tplIconButton(options.iconPrefix + options.icons.image.image, {                                         // 6105
          event: 'showImageDialog',                                                                                    // 6106
          title: lang.image.image,                                                                                     // 6107
          hide: true                                                                                                   // 6108
        });                                                                                                            // 6109
      },                                                                                                               // 6110
      link: function (lang, options) {                                                                                 // 6111
        return tplIconButton(options.iconPrefix + options.icons.link.link, {                                           // 6112
          event: 'showLinkDialog',                                                                                     // 6113
          title: lang.link.link,                                                                                       // 6114
          hide: true                                                                                                   // 6115
        });                                                                                                            // 6116
      },                                                                                                               // 6117
      table: function (lang, options) {                                                                                // 6118
        var dropdown = [                                                                                               // 6119
          '<div class="note-dimension-picker">',                                                                       // 6120
          '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>',          // 6121
          '<div class="note-dimension-picker-highlighted"></div>',                                                     // 6122
          '<div class="note-dimension-picker-unhighlighted"></div>',                                                   // 6123
          '</div>',                                                                                                    // 6124
          '<div class="note-dimension-display"> 1 x 1 </div>'                                                          // 6125
        ];                                                                                                             // 6126
                                                                                                                       // 6127
        return tplIconButton(options.iconPrefix + options.icons.table.table, {                                         // 6128
          title: lang.table.table,                                                                                     // 6129
          dropdown: tplDropdown(dropdown, 'note-table')                                                                // 6130
        });                                                                                                            // 6131
      },                                                                                                               // 6132
      style: function (lang, options) {                                                                                // 6133
        var items = options.styleTags.reduce(function (memo, v) {                                                      // 6134
          var label = lang.style[v === 'p' ? 'normal' : v];                                                            // 6135
          return memo + '<li><a data-event="formatBlock" href="#" data-value="' + v + '">' +                           // 6136
                   (                                                                                                   // 6137
                     (v === 'p' || v === 'pre') ? label :                                                              // 6138
                     '<' + v + '>' + label + '</' + v + '>'                                                            // 6139
                   ) +                                                                                                 // 6140
                 '</a></li>';                                                                                          // 6141
        }, '');                                                                                                        // 6142
                                                                                                                       // 6143
        return tplIconButton(options.iconPrefix + options.icons.style.style, {                                         // 6144
          title: lang.style.style,                                                                                     // 6145
          dropdown: tplDropdown(items)                                                                                 // 6146
        });                                                                                                            // 6147
      },                                                                                                               // 6148
      fontname: function (lang, options) {                                                                             // 6149
        var realFontList = [];                                                                                         // 6150
        var items = options.fontNames.reduce(function (memo, v) {                                                      // 6151
          if (!agent.isFontInstalled(v) && !list.contains(options.fontNamesIgnoreCheck, v)) {                          // 6152
            return memo;                                                                                               // 6153
          }                                                                                                            // 6154
          realFontList.push(v);                                                                                        // 6155
          return memo + '<li><a data-event="fontName" href="#" data-value="' + v + '" style="font-family:\'' + v + '\'">' +
                          '<i class="' + options.iconPrefix + options.icons.misc.check + '"></i> ' + v +               // 6157
                        '</a></li>';                                                                                   // 6158
        }, '');                                                                                                        // 6159
                                                                                                                       // 6160
        var hasDefaultFont = agent.isFontInstalled(options.defaultFontName);                                           // 6161
        var defaultFontName = (hasDefaultFont) ? options.defaultFontName : realFontList[0];                            // 6162
                                                                                                                       // 6163
        var label = '<span class="note-current-fontname">' +                                                           // 6164
                        defaultFontName +                                                                              // 6165
                     '</span>';                                                                                        // 6166
        return tplButton(label, {                                                                                      // 6167
          title: lang.font.name,                                                                                       // 6168
          className: 'note-fontname',                                                                                  // 6169
          dropdown: tplDropdown(items, 'note-check')                                                                   // 6170
        });                                                                                                            // 6171
      },                                                                                                               // 6172
      fontsize: function (lang, options) {                                                                             // 6173
        var items = options.fontSizes.reduce(function (memo, v) {                                                      // 6174
          return memo + '<li><a data-event="fontSize" href="#" data-value="' + v + '">' +                              // 6175
                          '<i class="' + options.iconPrefix + options.icons.misc.check + '"></i> ' + v +               // 6176
                        '</a></li>';                                                                                   // 6177
        }, '');                                                                                                        // 6178
                                                                                                                       // 6179
        var label = '<span class="note-current-fontsize">11</span>';                                                   // 6180
        return tplButton(label, {                                                                                      // 6181
          title: lang.font.size,                                                                                       // 6182
          className: 'note-fontsize',                                                                                  // 6183
          dropdown: tplDropdown(items, 'note-check')                                                                   // 6184
        });                                                                                                            // 6185
      },                                                                                                               // 6186
      color: function (lang, options) {                                                                                // 6187
        var colorButtonLabel = '<i class="' +                                                                          // 6188
                                  options.iconPrefix + options.icons.color.recent +                                    // 6189
                                '" style="color:black;background-color:yellow;"></i>';                                 // 6190
                                                                                                                       // 6191
        var colorButton = tplButton(colorButtonLabel, {                                                                // 6192
          className: 'note-recent-color',                                                                              // 6193
          title: lang.color.recent,                                                                                    // 6194
          event: 'color',                                                                                              // 6195
          value: '{"backColor":"yellow"}'                                                                              // 6196
        });                                                                                                            // 6197
                                                                                                                       // 6198
        var items = [                                                                                                  // 6199
          '<li><div class="btn-group">',                                                                               // 6200
          '<div class="note-palette-title">' + lang.color.background + '</div>',                                       // 6201
          '<div class="note-color-reset" data-event="backColor"',                                                      // 6202
          ' data-value="inherit" title="' + lang.color.transparent + '">' + lang.color.setTransparent + '</div>',      // 6203
          '<div class="note-color-palette" data-target-event="backColor"></div>',                                      // 6204
          '</div><div class="btn-group">',                                                                             // 6205
          '<div class="note-palette-title">' + lang.color.foreground + '</div>',                                       // 6206
          '<div class="note-color-reset" data-event="foreColor" data-value="inherit" title="' + lang.color.reset + '">',
          lang.color.resetToDefault,                                                                                   // 6208
          '</div>',                                                                                                    // 6209
          '<div class="note-color-palette" data-target-event="foreColor"></div>',                                      // 6210
          '</div></li>'                                                                                                // 6211
        ];                                                                                                             // 6212
                                                                                                                       // 6213
        var moreButton = tplButton('', {                                                                               // 6214
          title: lang.color.more,                                                                                      // 6215
          dropdown: tplDropdown(items)                                                                                 // 6216
        });                                                                                                            // 6217
                                                                                                                       // 6218
        return colorButton + moreButton;                                                                               // 6219
      },                                                                                                               // 6220
      bold: function (lang, options) {                                                                                 // 6221
        return tplIconButton(options.iconPrefix + options.icons.font.bold, {                                           // 6222
          event: 'bold',                                                                                               // 6223
          title: lang.font.bold                                                                                        // 6224
        });                                                                                                            // 6225
      },                                                                                                               // 6226
      italic: function (lang, options) {                                                                               // 6227
        return tplIconButton(options.iconPrefix + options.icons.font.italic, {                                         // 6228
          event: 'italic',                                                                                             // 6229
          title: lang.font.italic                                                                                      // 6230
        });                                                                                                            // 6231
      },                                                                                                               // 6232
      underline: function (lang, options) {                                                                            // 6233
        return tplIconButton(options.iconPrefix + options.icons.font.underline, {                                      // 6234
          event: 'underline',                                                                                          // 6235
          title: lang.font.underline                                                                                   // 6236
        });                                                                                                            // 6237
      },                                                                                                               // 6238
      strikethrough: function (lang, options) {                                                                        // 6239
        return tplIconButton(options.iconPrefix + options.icons.font.strikethrough, {                                  // 6240
          event: 'strikethrough',                                                                                      // 6241
          title: lang.font.strikethrough                                                                               // 6242
        });                                                                                                            // 6243
      },                                                                                                               // 6244
      superscript: function (lang, options) {                                                                          // 6245
        return tplIconButton(options.iconPrefix + options.icons.font.superscript, {                                    // 6246
          event: 'superscript',                                                                                        // 6247
          title: lang.font.superscript                                                                                 // 6248
        });                                                                                                            // 6249
      },                                                                                                               // 6250
      subscript: function (lang, options) {                                                                            // 6251
        return tplIconButton(options.iconPrefix + options.icons.font.subscript, {                                      // 6252
          event: 'subscript',                                                                                          // 6253
          title: lang.font.subscript                                                                                   // 6254
        });                                                                                                            // 6255
      },                                                                                                               // 6256
      clear: function (lang, options) {                                                                                // 6257
        return tplIconButton(options.iconPrefix + options.icons.font.clear, {                                          // 6258
          event: 'removeFormat',                                                                                       // 6259
          title: lang.font.clear                                                                                       // 6260
        });                                                                                                            // 6261
      },                                                                                                               // 6262
      ul: function (lang, options) {                                                                                   // 6263
        return tplIconButton(options.iconPrefix + options.icons.lists.unordered, {                                     // 6264
          event: 'insertUnorderedList',                                                                                // 6265
          title: lang.lists.unordered                                                                                  // 6266
        });                                                                                                            // 6267
      },                                                                                                               // 6268
      ol: function (lang, options) {                                                                                   // 6269
        return tplIconButton(options.iconPrefix + options.icons.lists.ordered, {                                       // 6270
          event: 'insertOrderedList',                                                                                  // 6271
          title: lang.lists.ordered                                                                                    // 6272
        });                                                                                                            // 6273
      },                                                                                                               // 6274
      paragraph: function (lang, options) {                                                                            // 6275
        var leftButton = tplIconButton(options.iconPrefix + options.icons.paragraph.left, {                            // 6276
          title: lang.paragraph.left,                                                                                  // 6277
          event: 'justifyLeft'                                                                                         // 6278
        });                                                                                                            // 6279
        var centerButton = tplIconButton(options.iconPrefix + options.icons.paragraph.center, {                        // 6280
          title: lang.paragraph.center,                                                                                // 6281
          event: 'justifyCenter'                                                                                       // 6282
        });                                                                                                            // 6283
        var rightButton = tplIconButton(options.iconPrefix + options.icons.paragraph.right, {                          // 6284
          title: lang.paragraph.right,                                                                                 // 6285
          event: 'justifyRight'                                                                                        // 6286
        });                                                                                                            // 6287
        var justifyButton = tplIconButton(options.iconPrefix + options.icons.paragraph.justify, {                      // 6288
          title: lang.paragraph.justify,                                                                               // 6289
          event: 'justifyFull'                                                                                         // 6290
        });                                                                                                            // 6291
                                                                                                                       // 6292
        var outdentButton = tplIconButton(options.iconPrefix + options.icons.paragraph.outdent, {                      // 6293
          title: lang.paragraph.outdent,                                                                               // 6294
          event: 'outdent'                                                                                             // 6295
        });                                                                                                            // 6296
        var indentButton = tplIconButton(options.iconPrefix + options.icons.paragraph.indent, {                        // 6297
          title: lang.paragraph.indent,                                                                                // 6298
          event: 'indent'                                                                                              // 6299
        });                                                                                                            // 6300
                                                                                                                       // 6301
        var dropdown = [                                                                                               // 6302
          '<div class="note-align btn-group">',                                                                        // 6303
          leftButton + centerButton + rightButton + justifyButton,                                                     // 6304
          '</div><div class="note-list btn-group">',                                                                   // 6305
          indentButton + outdentButton,                                                                                // 6306
          '</div>'                                                                                                     // 6307
        ];                                                                                                             // 6308
                                                                                                                       // 6309
        return tplIconButton(options.iconPrefix + options.icons.paragraph.paragraph, {                                 // 6310
          title: lang.paragraph.paragraph,                                                                             // 6311
          dropdown: tplDropdown(dropdown, '', 'div')                                                                   // 6312
        });                                                                                                            // 6313
      },                                                                                                               // 6314
      height: function (lang, options) {                                                                               // 6315
        var items = options.lineHeights.reduce(function (memo, v) {                                                    // 6316
          return memo + '<li><a data-event="lineHeight" href="#" data-value="' + parseFloat(v) + '">' +                // 6317
                          '<i class="' + options.iconPrefix + options.icons.misc.check + '"></i> ' + v +               // 6318
                        '</a></li>';                                                                                   // 6319
        }, '');                                                                                                        // 6320
                                                                                                                       // 6321
        return tplIconButton(options.iconPrefix + options.icons.font.height, {                                         // 6322
          title: lang.font.height,                                                                                     // 6323
          dropdown: tplDropdown(items, 'note-check')                                                                   // 6324
        });                                                                                                            // 6325
                                                                                                                       // 6326
      },                                                                                                               // 6327
      help: function (lang, options) {                                                                                 // 6328
        return tplIconButton(options.iconPrefix + options.icons.options.help, {                                        // 6329
          event: 'showHelpDialog',                                                                                     // 6330
          title: lang.options.help,                                                                                    // 6331
          hide: true                                                                                                   // 6332
        });                                                                                                            // 6333
      },                                                                                                               // 6334
      fullscreen: function (lang, options) {                                                                           // 6335
        return tplIconButton(options.iconPrefix + options.icons.options.fullscreen, {                                  // 6336
          event: 'fullscreen',                                                                                         // 6337
          title: lang.options.fullscreen                                                                               // 6338
        });                                                                                                            // 6339
      },                                                                                                               // 6340
      codeview: function (lang, options) {                                                                             // 6341
        return tplIconButton(options.iconPrefix + options.icons.options.codeview, {                                    // 6342
          event: 'codeview',                                                                                           // 6343
          title: lang.options.codeview                                                                                 // 6344
        });                                                                                                            // 6345
      },                                                                                                               // 6346
      undo: function (lang, options) {                                                                                 // 6347
        return tplIconButton(options.iconPrefix + options.icons.history.undo, {                                        // 6348
          event: 'undo',                                                                                               // 6349
          title: lang.history.undo                                                                                     // 6350
        });                                                                                                            // 6351
      },                                                                                                               // 6352
      redo: function (lang, options) {                                                                                 // 6353
        return tplIconButton(options.iconPrefix + options.icons.history.redo, {                                        // 6354
          event: 'redo',                                                                                               // 6355
          title: lang.history.redo                                                                                     // 6356
        });                                                                                                            // 6357
      },                                                                                                               // 6358
      hr: function (lang, options) {                                                                                   // 6359
        return tplIconButton(options.iconPrefix + options.icons.hr.insert, {                                           // 6360
          event: 'insertHorizontalRule',                                                                               // 6361
          title: lang.hr.insert                                                                                        // 6362
        });                                                                                                            // 6363
      }                                                                                                                // 6364
    };                                                                                                                 // 6365
                                                                                                                       // 6366
    var tplPopovers = function (lang, options) {                                                                       // 6367
      var tplLinkPopover = function () {                                                                               // 6368
        var linkButton = tplIconButton(options.iconPrefix + options.icons.link.edit, {                                 // 6369
          title: lang.link.edit,                                                                                       // 6370
          event: 'showLinkDialog',                                                                                     // 6371
          hide: true                                                                                                   // 6372
        });                                                                                                            // 6373
        var unlinkButton = tplIconButton(options.iconPrefix + options.icons.link.unlink, {                             // 6374
          title: lang.link.unlink,                                                                                     // 6375
          event: 'unlink'                                                                                              // 6376
        });                                                                                                            // 6377
        var content = '<a href="http://www.google.com" target="_blank">www.google.com</a>&nbsp;&nbsp;' +               // 6378
                      '<div class="note-insert btn-group">' +                                                          // 6379
                        linkButton + unlinkButton +                                                                    // 6380
                      '</div>';                                                                                        // 6381
        return tplPopover('note-link-popover', content);                                                               // 6382
      };                                                                                                               // 6383
                                                                                                                       // 6384
      var tplImagePopover = function () {                                                                              // 6385
        var fullButton = tplButton('<span class="note-fontsize-10">100%</span>', {                                     // 6386
          title: lang.image.resizeFull,                                                                                // 6387
          event: 'resize',                                                                                             // 6388
          value: '1'                                                                                                   // 6389
        });                                                                                                            // 6390
        var halfButton = tplButton('<span class="note-fontsize-10">50%</span>', {                                      // 6391
          title: lang.image.resizeHalf,                                                                                // 6392
          event: 'resize',                                                                                             // 6393
          value: '0.5'                                                                                                 // 6394
        });                                                                                                            // 6395
        var quarterButton = tplButton('<span class="note-fontsize-10">25%</span>', {                                   // 6396
          title: lang.image.resizeQuarter,                                                                             // 6397
          event: 'resize',                                                                                             // 6398
          value: '0.25'                                                                                                // 6399
        });                                                                                                            // 6400
                                                                                                                       // 6401
        var leftButton = tplIconButton(options.iconPrefix + options.icons.image.floatLeft, {                           // 6402
          title: lang.image.floatLeft,                                                                                 // 6403
          event: 'floatMe',                                                                                            // 6404
          value: 'left'                                                                                                // 6405
        });                                                                                                            // 6406
        var rightButton = tplIconButton(options.iconPrefix + options.icons.image.floatRight, {                         // 6407
          title: lang.image.floatRight,                                                                                // 6408
          event: 'floatMe',                                                                                            // 6409
          value: 'right'                                                                                               // 6410
        });                                                                                                            // 6411
        var justifyButton = tplIconButton(options.iconPrefix + options.icons.image.floatNone, {                        // 6412
          title: lang.image.floatNone,                                                                                 // 6413
          event: 'floatMe',                                                                                            // 6414
          value: 'none'                                                                                                // 6415
        });                                                                                                            // 6416
                                                                                                                       // 6417
        var roundedButton = tplIconButton(options.iconPrefix + options.icons.image.shapeRounded, {                     // 6418
          title: lang.image.shapeRounded,                                                                              // 6419
          event: 'imageShape',                                                                                         // 6420
          value: 'img-rounded'                                                                                         // 6421
        });                                                                                                            // 6422
        var circleButton = tplIconButton(options.iconPrefix + options.icons.image.shapeCircle, {                       // 6423
          title: lang.image.shapeCircle,                                                                               // 6424
          event: 'imageShape',                                                                                         // 6425
          value: 'img-circle'                                                                                          // 6426
        });                                                                                                            // 6427
        var thumbnailButton = tplIconButton(options.iconPrefix + options.icons.image.shapeThumbnail, {                 // 6428
          title: lang.image.shapeThumbnail,                                                                            // 6429
          event: 'imageShape',                                                                                         // 6430
          value: 'img-thumbnail'                                                                                       // 6431
        });                                                                                                            // 6432
        var noneButton = tplIconButton(options.iconPrefix + options.icons.image.shapeNone, {                           // 6433
          title: lang.image.shapeNone,                                                                                 // 6434
          event: 'imageShape',                                                                                         // 6435
          value: ''                                                                                                    // 6436
        });                                                                                                            // 6437
                                                                                                                       // 6438
        var removeButton = tplIconButton(options.iconPrefix + options.icons.image.remove, {                            // 6439
          title: lang.image.remove,                                                                                    // 6440
          event: 'removeMedia',                                                                                        // 6441
          value: 'none'                                                                                                // 6442
        });                                                                                                            // 6443
                                                                                                                       // 6444
        var content = (options.disableResizeImage ? '' : '<div class="btn-group">' + fullButton + halfButton + quarterButton + '</div>') +
                      '<div class="btn-group">' + leftButton + rightButton + justifyButton + '</div><br>' +            // 6446
                      '<div class="btn-group">' + roundedButton + circleButton + thumbnailButton + noneButton + '</div>' +
                      '<div class="btn-group">' + removeButton + '</div>';                                             // 6448
        return tplPopover('note-image-popover', content);                                                              // 6449
      };                                                                                                               // 6450
                                                                                                                       // 6451
      var tplAirPopover = function () {                                                                                // 6452
        var $content = $('<div />');                                                                                   // 6453
        for (var idx = 0, len = options.airPopover.length; idx < len; idx ++) {                                        // 6454
          var group = options.airPopover[idx];                                                                         // 6455
                                                                                                                       // 6456
          var $group = $('<div class="note-' + group[0] + ' btn-group">');                                             // 6457
          for (var i = 0, lenGroup = group[1].length; i < lenGroup; i++) {                                             // 6458
            var $button = $(tplButtonInfo[group[1][i]](lang, options));                                                // 6459
                                                                                                                       // 6460
            $button.attr('data-name', group[1][i]);                                                                    // 6461
                                                                                                                       // 6462
            $group.append($button);                                                                                    // 6463
          }                                                                                                            // 6464
          $content.append($group);                                                                                     // 6465
        }                                                                                                              // 6466
                                                                                                                       // 6467
        return tplPopover('note-air-popover', $content.children());                                                    // 6468
      };                                                                                                               // 6469
                                                                                                                       // 6470
      var $notePopover = $('<div class="note-popover" />');                                                            // 6471
                                                                                                                       // 6472
      $notePopover.append(tplLinkPopover());                                                                           // 6473
      $notePopover.append(tplImagePopover());                                                                          // 6474
                                                                                                                       // 6475
      if (options.airMode) {                                                                                           // 6476
        $notePopover.append(tplAirPopover());                                                                          // 6477
      }                                                                                                                // 6478
                                                                                                                       // 6479
      return $notePopover;                                                                                             // 6480
    };                                                                                                                 // 6481
                                                                                                                       // 6482
    var tplHandles = function (options) {                                                                              // 6483
      return '<div class="note-handle">' +                                                                             // 6484
               '<div class="note-control-selection">' +                                                                // 6485
                 '<div class="note-control-selection-bg"></div>' +                                                     // 6486
                 '<div class="note-control-holder note-control-nw"></div>' +                                           // 6487
                 '<div class="note-control-holder note-control-ne"></div>' +                                           // 6488
                 '<div class="note-control-holder note-control-sw"></div>' +                                           // 6489
                 '<div class="' +                                                                                      // 6490
                 (options.disableResizeImage ? 'note-control-holder' : 'note-control-sizing') +                        // 6491
                 ' note-control-se"></div>' +                                                                          // 6492
                 (options.disableResizeImage ? '' : '<div class="note-control-selection-info"></div>') +               // 6493
               '</div>' +                                                                                              // 6494
             '</div>';                                                                                                 // 6495
    };                                                                                                                 // 6496
                                                                                                                       // 6497
    /**                                                                                                                // 6498
     * shortcut table template                                                                                         // 6499
     * @param {String} title                                                                                           // 6500
     * @param {String} body                                                                                            // 6501
     */                                                                                                                // 6502
    var tplShortcut = function (title, keys) {                                                                         // 6503
      var keyClass = 'note-shortcut-col col-xs-6 note-shortcut-';                                                      // 6504
      var body = [];                                                                                                   // 6505
                                                                                                                       // 6506
      for (var i in keys) {                                                                                            // 6507
        if (keys.hasOwnProperty(i)) {                                                                                  // 6508
          body.push(                                                                                                   // 6509
            '<div class="' + keyClass + 'key">' + keys[i].kbd + '</div>' +                                             // 6510
            '<div class="' + keyClass + 'name">' + keys[i].text + '</div>'                                             // 6511
            );                                                                                                         // 6512
        }                                                                                                              // 6513
      }                                                                                                                // 6514
                                                                                                                       // 6515
      return '<div class="note-shortcut-row row"><div class="' + keyClass + 'title col-xs-offset-6">' + title + '</div></div>' +
             '<div class="note-shortcut-row row">' + body.join('</div><div class="note-shortcut-row row">') + '</div>';
    };                                                                                                                 // 6518
                                                                                                                       // 6519
    var tplShortcutText = function (lang) {                                                                            // 6520
      var keys = [                                                                                                     // 6521
        { kbd: '⌘ + B', text: lang.font.bold },                                                                        // 6522
        { kbd: '⌘ + I', text: lang.font.italic },                                                                      // 6523
        { kbd: '⌘ + U', text: lang.font.underline },                                                                   // 6524
        { kbd: '⌘ + \\', text: lang.font.clear }                                                                       // 6525
      ];                                                                                                               // 6526
                                                                                                                       // 6527
      return tplShortcut(lang.shortcut.textFormatting, keys);                                                          // 6528
    };                                                                                                                 // 6529
                                                                                                                       // 6530
    var tplShortcutAction = function (lang) {                                                                          // 6531
      var keys = [                                                                                                     // 6532
        { kbd: '⌘ + Z', text: lang.history.undo },                                                                     // 6533
        { kbd: '⌘ + ⇧ + Z', text: lang.history.redo },                                                                 // 6534
        { kbd: '⌘ + ]', text: lang.paragraph.indent },                                                                 // 6535
        { kbd: '⌘ + [', text: lang.paragraph.outdent },                                                                // 6536
        { kbd: '⌘ + ENTER', text: lang.hr.insert }                                                                     // 6537
      ];                                                                                                               // 6538
                                                                                                                       // 6539
      return tplShortcut(lang.shortcut.action, keys);                                                                  // 6540
    };                                                                                                                 // 6541
                                                                                                                       // 6542
    var tplShortcutPara = function (lang) {                                                                            // 6543
      var keys = [                                                                                                     // 6544
        { kbd: '⌘ + ⇧ + L', text: lang.paragraph.left },                                                               // 6545
        { kbd: '⌘ + ⇧ + E', text: lang.paragraph.center },                                                             // 6546
        { kbd: '⌘ + ⇧ + R', text: lang.paragraph.right },                                                              // 6547
        { kbd: '⌘ + ⇧ + J', text: lang.paragraph.justify },                                                            // 6548
        { kbd: '⌘ + ⇧ + NUM7', text: lang.lists.ordered },                                                             // 6549
        { kbd: '⌘ + ⇧ + NUM8', text: lang.lists.unordered }                                                            // 6550
      ];                                                                                                               // 6551
                                                                                                                       // 6552
      return tplShortcut(lang.shortcut.paragraphFormatting, keys);                                                     // 6553
    };                                                                                                                 // 6554
                                                                                                                       // 6555
    var tplShortcutStyle = function (lang) {                                                                           // 6556
      var keys = [                                                                                                     // 6557
        { kbd: '⌘ + NUM0', text: lang.style.normal },                                                                  // 6558
        { kbd: '⌘ + NUM1', text: lang.style.h1 },                                                                      // 6559
        { kbd: '⌘ + NUM2', text: lang.style.h2 },                                                                      // 6560
        { kbd: '⌘ + NUM3', text: lang.style.h3 },                                                                      // 6561
        { kbd: '⌘ + NUM4', text: lang.style.h4 },                                                                      // 6562
        { kbd: '⌘ + NUM5', text: lang.style.h5 },                                                                      // 6563
        { kbd: '⌘ + NUM6', text: lang.style.h6 }                                                                       // 6564
      ];                                                                                                               // 6565
                                                                                                                       // 6566
      return tplShortcut(lang.shortcut.documentStyle, keys);                                                           // 6567
    };                                                                                                                 // 6568
                                                                                                                       // 6569
    var tplExtraShortcuts = function (lang, options) {                                                                 // 6570
      var extraKeys = options.extraKeys;                                                                               // 6571
      var keys = [];                                                                                                   // 6572
                                                                                                                       // 6573
      for (var key in extraKeys) {                                                                                     // 6574
        if (extraKeys.hasOwnProperty(key)) {                                                                           // 6575
          keys.push({ kbd: key, text: extraKeys[key] });                                                               // 6576
        }                                                                                                              // 6577
      }                                                                                                                // 6578
                                                                                                                       // 6579
      return tplShortcut(lang.shortcut.extraKeys, keys);                                                               // 6580
    };                                                                                                                 // 6581
                                                                                                                       // 6582
    var tplShortcutTable = function (lang, options) {                                                                  // 6583
      var colClass = 'class="note-shortcut note-shortcut-col col-sm-6 col-xs-12"';                                     // 6584
      var template = [                                                                                                 // 6585
        '<div ' + colClass + '>' + tplShortcutAction(lang, options) + '</div>' +                                       // 6586
        '<div ' + colClass + '>' + tplShortcutText(lang, options) + '</div>',                                          // 6587
        '<div ' + colClass + '>' + tplShortcutStyle(lang, options) + '</div>' +                                        // 6588
        '<div ' + colClass + '>' + tplShortcutPara(lang, options) + '</div>'                                           // 6589
      ];                                                                                                               // 6590
                                                                                                                       // 6591
      if (options.extraKeys) {                                                                                         // 6592
        template.push('<div ' + colClass + '>' + tplExtraShortcuts(lang, options) + '</div>');                         // 6593
      }                                                                                                                // 6594
                                                                                                                       // 6595
      return '<div class="note-shortcut-row row">' +                                                                   // 6596
               template.join('</div><div class="note-shortcut-row row">') +                                            // 6597
             '</div>';                                                                                                 // 6598
    };                                                                                                                 // 6599
                                                                                                                       // 6600
    var replaceMacKeys = function (sHtml) {                                                                            // 6601
      return sHtml.replace(/⌘/g, 'Ctrl').replace(/⇧/g, 'Shift');                                                       // 6602
    };                                                                                                                 // 6603
                                                                                                                       // 6604
    var tplDialogInfo = {                                                                                              // 6605
      image: function (lang, options) {                                                                                // 6606
        var imageLimitation = '';                                                                                      // 6607
        if (options.maximumImageFileSize) {                                                                            // 6608
          var unit = Math.floor(Math.log(options.maximumImageFileSize) / Math.log(1024));                              // 6609
          var readableSize = (options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 +                    // 6610
                             ' ' + ' KMGTP'[unit] + 'B';                                                               // 6611
          imageLimitation = '<small>' + lang.image.maximumFileSize + ' : ' + readableSize + '</small>';                // 6612
        }                                                                                                              // 6613
                                                                                                                       // 6614
        var body = '<div class="form-group row note-group-select-from-files">' +                                       // 6615
                     '<label>' + lang.image.selectFromFiles + '</label>' +                                             // 6616
                     '<input class="note-image-input form-control" type="file" name="files" accept="image/*" multiple="multiple" />' +
                     imageLimitation +                                                                                 // 6618
                   '</div>' +                                                                                          // 6619
                   '<div class="form-group row">' +                                                                    // 6620
                     '<label>' + lang.image.url + '</label>' +                                                         // 6621
                     '<input class="note-image-url form-control col-md-12" type="text" />' +                           // 6622
                   '</div>';                                                                                           // 6623
        var footer = '<button href="#" class="btn btn-primary note-image-btn disabled" disabled>' + lang.image.insert + '</button>';
        return tplDialog('note-image-dialog', lang.image.insert, body, footer);                                        // 6625
      },                                                                                                               // 6626
                                                                                                                       // 6627
      link: function (lang, options) {                                                                                 // 6628
        var body = '<div class="form-group row">' +                                                                    // 6629
                     '<label>' + lang.link.textToDisplay + '</label>' +                                                // 6630
                     '<input class="note-link-text form-control col-md-12" type="text" />' +                           // 6631
                   '</div>' +                                                                                          // 6632
                   '<div class="form-group row">' +                                                                    // 6633
                     '<label>' + lang.link.url + '</label>' +                                                          // 6634
                     '<input class="note-link-url form-control col-md-12" type="text" value="http://" />' +            // 6635
                   '</div>' +                                                                                          // 6636
                   (!options.disableLinkTarget ?                                                                       // 6637
                     '<div class="checkbox">' +                                                                        // 6638
                       '<label>' + '<input type="checkbox" checked> ' +                                                // 6639
                         lang.link.openInNewWindow +                                                                   // 6640
                       '</label>' +                                                                                    // 6641
                     '</div>' : ''                                                                                     // 6642
                   );                                                                                                  // 6643
        var footer = '<button href="#" class="btn btn-primary note-link-btn disabled" disabled>' + lang.link.insert + '</button>';
        return tplDialog('note-link-dialog', lang.link.insert, body, footer);                                          // 6645
      },                                                                                                               // 6646
                                                                                                                       // 6647
      help: function (lang, options) {                                                                                 // 6648
        var body = '<a class="modal-close pull-right" aria-hidden="true" tabindex="-1">' + lang.shortcut.close + '</a>' +
                   '<div class="title">' + lang.shortcut.shortcuts + '</div>' +                                        // 6650
                   (agent.isMac ? tplShortcutTable(lang, options) : replaceMacKeys(tplShortcutTable(lang, options))) + // 6651
                   '<p class="text-center">' +                                                                         // 6652
                     '<a href="//summernote.org/" target="_blank">Summernote 0.6.16</a> · ' +                          // 6653
                     '<a href="//github.com/summernote/summernote" target="_blank">Project</a> · ' +                   // 6654
                     '<a href="//github.com/summernote/summernote/issues" target="_blank">Issues</a>' +                // 6655
                   '</p>';                                                                                             // 6656
        return tplDialog('note-help-dialog', '', body, '');                                                            // 6657
      }                                                                                                                // 6658
    };                                                                                                                 // 6659
                                                                                                                       // 6660
    var tplDialogs = function (lang, options) {                                                                        // 6661
      var dialogs = '';                                                                                                // 6662
                                                                                                                       // 6663
      $.each(tplDialogInfo, function (idx, tplDialog) {                                                                // 6664
        dialogs += tplDialog(lang, options);                                                                           // 6665
      });                                                                                                              // 6666
                                                                                                                       // 6667
      return '<div class="note-dialog">' + dialogs + '</div>';                                                         // 6668
    };                                                                                                                 // 6669
                                                                                                                       // 6670
    var tplStatusbar = function () {                                                                                   // 6671
      return '<div class="note-resizebar">' +                                                                          // 6672
               '<div class="note-icon-bar"></div>' +                                                                   // 6673
               '<div class="note-icon-bar"></div>' +                                                                   // 6674
               '<div class="note-icon-bar"></div>' +                                                                   // 6675
             '</div>';                                                                                                 // 6676
    };                                                                                                                 // 6677
                                                                                                                       // 6678
    var representShortcut = function (str) {                                                                           // 6679
      if (agent.isMac) {                                                                                               // 6680
        str = str.replace('CMD', '⌘').replace('SHIFT', '⇧');                                                           // 6681
      }                                                                                                                // 6682
                                                                                                                       // 6683
      return str.replace('BACKSLASH', '\\')                                                                            // 6684
                .replace('SLASH', '/')                                                                                 // 6685
                .replace('LEFTBRACKET', '[')                                                                           // 6686
                .replace('RIGHTBRACKET', ']');                                                                         // 6687
    };                                                                                                                 // 6688
                                                                                                                       // 6689
    /**                                                                                                                // 6690
     * createTooltip                                                                                                   // 6691
     *                                                                                                                 // 6692
     * @param {jQuery} $container                                                                                      // 6693
     * @param {Object} keyMap                                                                                          // 6694
     * @param {String} [sPlacement]                                                                                    // 6695
     */                                                                                                                // 6696
    var createTooltip = function ($container, keyMap, sPlacement) {                                                    // 6697
      var invertedKeyMap = func.invertObject(keyMap);                                                                  // 6698
      var $buttons = $container.find('button');                                                                        // 6699
                                                                                                                       // 6700
      $buttons.each(function (i, elBtn) {                                                                              // 6701
        var $btn = $(elBtn);                                                                                           // 6702
        var sShortcut = invertedKeyMap[$btn.data('event')];                                                            // 6703
        if (sShortcut) {                                                                                               // 6704
          $btn.attr('title', function (i, v) {                                                                         // 6705
            return v + ' (' + representShortcut(sShortcut) + ')';                                                      // 6706
          });                                                                                                          // 6707
        }                                                                                                              // 6708
      // bootstrap tooltip on btn-group bug                                                                            // 6709
      // https://github.com/twbs/bootstrap/issues/5687                                                                 // 6710
      }).tooltip({                                                                                                     // 6711
        container: 'body',                                                                                             // 6712
        trigger: 'hover',                                                                                              // 6713
        placement: sPlacement || 'top'                                                                                 // 6714
      }).on('click', function () {                                                                                     // 6715
        $(this).tooltip('hide');                                                                                       // 6716
      });                                                                                                              // 6717
    };                                                                                                                 // 6718
                                                                                                                       // 6719
    // createPalette                                                                                                   // 6720
    var createPalette = function ($container, options) {                                                               // 6721
      var colorInfo = options.colors;                                                                                  // 6722
      $container.find('.note-color-palette').each(function () {                                                        // 6723
        var $palette = $(this), eventName = $palette.attr('data-target-event');                                        // 6724
        var paletteContents = [];                                                                                      // 6725
        for (var row = 0, lenRow = colorInfo.length; row < lenRow; row++) {                                            // 6726
          var colors = colorInfo[row];                                                                                 // 6727
          var buttons = [];                                                                                            // 6728
          for (var col = 0, lenCol = colors.length; col < lenCol; col++) {                                             // 6729
            var color = colors[col];                                                                                   // 6730
            buttons.push(['<button type="button" class="note-color-btn" style="background-color:', color,              // 6731
                           ';" data-event="', eventName,                                                               // 6732
                           '" data-value="', color,                                                                    // 6733
                           '" title="', color,                                                                         // 6734
                           '" data-toggle="button" tabindex="-1"></button>'].join(''));                                // 6735
          }                                                                                                            // 6736
          paletteContents.push('<div class="note-color-row">' + buttons.join('') + '</div>');                          // 6737
        }                                                                                                              // 6738
        $palette.html(paletteContents.join(''));                                                                       // 6739
      });                                                                                                              // 6740
    };                                                                                                                 // 6741
                                                                                                                       // 6742
    /**                                                                                                                // 6743
     * create summernote layout (air mode)                                                                             // 6744
     *                                                                                                                 // 6745
     * @param {jQuery} $holder                                                                                         // 6746
     * @param {Object} options                                                                                         // 6747
     */                                                                                                                // 6748
    this.createLayoutByAirMode = function ($holder, options) {                                                         // 6749
      var langInfo = options.langInfo;                                                                                 // 6750
      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];                                                         // 6751
      var id = func.uniqueId();                                                                                        // 6752
                                                                                                                       // 6753
      $holder.addClass('note-air-editor note-editable panel-body');                                                    // 6754
      $holder.attr({                                                                                                   // 6755
        'id': 'note-editor-' + id,                                                                                     // 6756
        'contentEditable': true                                                                                        // 6757
      });                                                                                                              // 6758
                                                                                                                       // 6759
      var body = document.body;                                                                                        // 6760
                                                                                                                       // 6761
      // create Popover                                                                                                // 6762
      var $popover = $(tplPopovers(langInfo, options));                                                                // 6763
      $popover.addClass('note-air-layout');                                                                            // 6764
      $popover.attr('id', 'note-popover-' + id);                                                                       // 6765
      $popover.appendTo(body);                                                                                         // 6766
      createTooltip($popover, keyMap);                                                                                 // 6767
      createPalette($popover, options);                                                                                // 6768
                                                                                                                       // 6769
      // create Handle                                                                                                 // 6770
      var $handle = $(tplHandles(options));                                                                            // 6771
      $handle.addClass('note-air-layout');                                                                             // 6772
      $handle.attr('id', 'note-handle-' + id);                                                                         // 6773
      $handle.appendTo(body);                                                                                          // 6774
                                                                                                                       // 6775
      // create Dialog                                                                                                 // 6776
      var $dialog = $(tplDialogs(langInfo, options));                                                                  // 6777
      $dialog.addClass('note-air-layout');                                                                             // 6778
      $dialog.attr('id', 'note-dialog-' + id);                                                                         // 6779
      $dialog.find('button.close, a.modal-close').click(function () {                                                  // 6780
        $(this).closest('.modal').modal('hide');                                                                       // 6781
      });                                                                                                              // 6782
      $dialog.appendTo(body);                                                                                          // 6783
    };                                                                                                                 // 6784
                                                                                                                       // 6785
    /**                                                                                                                // 6786
     * create summernote layout (normal mode)                                                                          // 6787
     *                                                                                                                 // 6788
     * @param {jQuery} $holder                                                                                         // 6789
     * @param {Object} options                                                                                         // 6790
     */                                                                                                                // 6791
    this.createLayoutByFrame = function ($holder, options) {                                                           // 6792
      var langInfo = options.langInfo;                                                                                 // 6793
                                                                                                                       // 6794
      //01. create Editor                                                                                              // 6795
      var $editor = $('<div class="note-editor panel panel-default" />');                                              // 6796
      if (options.width) {                                                                                             // 6797
        $editor.width(options.width);                                                                                  // 6798
      }                                                                                                                // 6799
                                                                                                                       // 6800
      //02. statusbar (resizebar)                                                                                      // 6801
      if (options.height > 0) {                                                                                        // 6802
        $('<div class="note-statusbar">' + (options.disableResizeEditor ? '' : tplStatusbar()) + '</div>').prependTo($editor);
      }                                                                                                                // 6804
                                                                                                                       // 6805
      //03 editing area                                                                                                // 6806
      var $editingArea = $('<div class="note-editing-area" />');                                                       // 6807
      //03. create editable                                                                                            // 6808
      var isContentEditable = !$holder.is(':disabled');                                                                // 6809
      var $editable = $('<div class="note-editable panel-body" contentEditable="' + isContentEditable + '"></div>').prependTo($editingArea);
                                                                                                                       // 6811
      if (options.height) {                                                                                            // 6812
        $editable.height(options.height);                                                                              // 6813
      }                                                                                                                // 6814
      if (options.direction) {                                                                                         // 6815
        $editable.attr('dir', options.direction);                                                                      // 6816
      }                                                                                                                // 6817
      var placeholder = $holder.attr('placeholder') || options.placeholder;                                            // 6818
      if (placeholder) {                                                                                               // 6819
        $editable.attr('data-placeholder', placeholder);                                                               // 6820
      }                                                                                                                // 6821
                                                                                                                       // 6822
      $editable.html(dom.html($holder) || dom.emptyPara);                                                              // 6823
                                                                                                                       // 6824
      //031. create codable                                                                                            // 6825
      $('<textarea class="note-codable"></textarea>').prependTo($editingArea);                                         // 6826
                                                                                                                       // 6827
      //04. create Popover                                                                                             // 6828
      var $popover = $(tplPopovers(langInfo, options)).prependTo($editingArea);                                        // 6829
      createPalette($popover, options);                                                                                // 6830
      createTooltip($popover, keyMap);                                                                                 // 6831
                                                                                                                       // 6832
      //05. handle(control selection, ...)                                                                             // 6833
      $(tplHandles(options)).prependTo($editingArea);                                                                  // 6834
                                                                                                                       // 6835
      $editingArea.prependTo($editor);                                                                                 // 6836
                                                                                                                       // 6837
      //06. create Toolbar                                                                                             // 6838
      var $toolbar = $('<div class="note-toolbar panel-heading" />');                                                  // 6839
      for (var idx = 0, len = options.toolbar.length; idx < len; idx ++) {                                             // 6840
        var groupName = options.toolbar[idx][0];                                                                       // 6841
        var groupButtons = options.toolbar[idx][1];                                                                    // 6842
                                                                                                                       // 6843
        var $group = $('<div class="note-' + groupName + ' btn-group" />');                                            // 6844
        for (var i = 0, btnLength = groupButtons.length; i < btnLength; i++) {                                         // 6845
          var buttonInfo = tplButtonInfo[groupButtons[i]];                                                             // 6846
          // continue creating toolbar even if a button doesn't exist                                                  // 6847
          if (!$.isFunction(buttonInfo)) { continue; }                                                                 // 6848
                                                                                                                       // 6849
          var $button = $(buttonInfo(langInfo, options));                                                              // 6850
          $button.attr('data-name', groupButtons[i]);  // set button's alias, becuase to get button element from $toolbar
          $group.append($button);                                                                                      // 6852
        }                                                                                                              // 6853
        $toolbar.append($group);                                                                                       // 6854
      }                                                                                                                // 6855
                                                                                                                       // 6856
      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];                                                         // 6857
      createPalette($toolbar, options);                                                                                // 6858
      createTooltip($toolbar, keyMap, 'bottom');                                                                       // 6859
      $toolbar.prependTo($editor);                                                                                     // 6860
                                                                                                                       // 6861
      //07. create Dropzone                                                                                            // 6862
      $('<div class="note-dropzone"><div class="note-dropzone-message"></div></div>').prependTo($editor);              // 6863
                                                                                                                       // 6864
      //08. create Dialog                                                                                              // 6865
      var $dialogContainer = options.dialogsInBody ? $(document.body) : $editor;                                       // 6866
      var $dialog = $(tplDialogs(langInfo, options)).prependTo($dialogContainer);                                      // 6867
      $dialog.find('button.close, a.modal-close').click(function () {                                                  // 6868
        $(this).closest('.modal').modal('hide');                                                                       // 6869
      });                                                                                                              // 6870
                                                                                                                       // 6871
      //09. Editor/Holder switch                                                                                       // 6872
      $editor.insertAfter($holder);                                                                                    // 6873
      $holder.hide();                                                                                                  // 6874
    };                                                                                                                 // 6875
                                                                                                                       // 6876
    this.hasNoteEditor = function ($holder) {                                                                          // 6877
      return this.noteEditorFromHolder($holder).length > 0;                                                            // 6878
    };                                                                                                                 // 6879
                                                                                                                       // 6880
    this.noteEditorFromHolder = function ($holder) {                                                                   // 6881
      if ($holder.hasClass('note-air-editor')) {                                                                       // 6882
        return $holder;                                                                                                // 6883
      } else if ($holder.next().hasClass('note-editor')) {                                                             // 6884
        return $holder.next();                                                                                         // 6885
      } else {                                                                                                         // 6886
        return $();                                                                                                    // 6887
      }                                                                                                                // 6888
    };                                                                                                                 // 6889
                                                                                                                       // 6890
    /**                                                                                                                // 6891
     * create summernote layout                                                                                        // 6892
     *                                                                                                                 // 6893
     * @param {jQuery} $holder                                                                                         // 6894
     * @param {Object} options                                                                                         // 6895
     */                                                                                                                // 6896
    this.createLayout = function ($holder, options) {                                                                  // 6897
      if (options.airMode) {                                                                                           // 6898
        this.createLayoutByAirMode($holder, options);                                                                  // 6899
      } else {                                                                                                         // 6900
        this.createLayoutByFrame($holder, options);                                                                    // 6901
      }                                                                                                                // 6902
    };                                                                                                                 // 6903
                                                                                                                       // 6904
    /**                                                                                                                // 6905
     * returns layoutInfo from holder                                                                                  // 6906
     *                                                                                                                 // 6907
     * @param {jQuery} $holder - placeholder                                                                           // 6908
     * @return {Object}                                                                                                // 6909
     */                                                                                                                // 6910
    this.layoutInfoFromHolder = function ($holder) {                                                                   // 6911
      var $editor = this.noteEditorFromHolder($holder);                                                                // 6912
      if (!$editor.length) {                                                                                           // 6913
        return;                                                                                                        // 6914
      }                                                                                                                // 6915
                                                                                                                       // 6916
      // connect $holder to $editor                                                                                    // 6917
      $editor.data('holder', $holder);                                                                                 // 6918
                                                                                                                       // 6919
      return dom.buildLayoutInfo($editor);                                                                             // 6920
    };                                                                                                                 // 6921
                                                                                                                       // 6922
    /**                                                                                                                // 6923
     * removeLayout                                                                                                    // 6924
     *                                                                                                                 // 6925
     * @param {jQuery} $holder - placeholder                                                                           // 6926
     * @param {Object} layoutInfo                                                                                      // 6927
     * @param {Object} options                                                                                         // 6928
     *                                                                                                                 // 6929
     */                                                                                                                // 6930
    this.removeLayout = function ($holder, layoutInfo, options) {                                                      // 6931
      if (options.airMode) {                                                                                           // 6932
        $holder.removeClass('note-air-editor note-editable')                                                           // 6933
               .removeAttr('id contentEditable');                                                                      // 6934
                                                                                                                       // 6935
        layoutInfo.popover().remove();                                                                                 // 6936
        layoutInfo.handle().remove();                                                                                  // 6937
        layoutInfo.dialog().remove();                                                                                  // 6938
      } else {                                                                                                         // 6939
        $holder.html(layoutInfo.editable().html());                                                                    // 6940
                                                                                                                       // 6941
        if (options.dialogsInBody) {                                                                                   // 6942
          layoutInfo.dialog().remove();                                                                                // 6943
        }                                                                                                              // 6944
        layoutInfo.editor().remove();                                                                                  // 6945
        $holder.show();                                                                                                // 6946
      }                                                                                                                // 6947
    };                                                                                                                 // 6948
                                                                                                                       // 6949
    /**                                                                                                                // 6950
     *                                                                                                                 // 6951
     * @return {Object}                                                                                                // 6952
     * @return {function(label, options=):string} return.button {@link #tplButton function to make text button}        // 6953
     * @return {function(iconClass, options=):string} return.iconButton {@link #tplIconButton function to make icon button}
     * @return {function(className, title=, body=, footer=):string} return.dialog {@link #tplDialog function to make dialog}
     */                                                                                                                // 6956
    this.getTemplate = function () {                                                                                   // 6957
      return {                                                                                                         // 6958
        button: tplButton,                                                                                             // 6959
        iconButton: tplIconButton,                                                                                     // 6960
        dialog: tplDialog                                                                                              // 6961
      };                                                                                                               // 6962
    };                                                                                                                 // 6963
                                                                                                                       // 6964
    /**                                                                                                                // 6965
     * add button information                                                                                          // 6966
     *                                                                                                                 // 6967
     * @param {String} name button name                                                                                // 6968
     * @param {Function} buttonInfo function to make button, reference to {@link #tplButton},{@link #tplIconButton}    // 6969
     */                                                                                                                // 6970
    this.addButtonInfo = function (name, buttonInfo) {                                                                 // 6971
      tplButtonInfo[name] = buttonInfo;                                                                                // 6972
    };                                                                                                                 // 6973
                                                                                                                       // 6974
    /**                                                                                                                // 6975
     *                                                                                                                 // 6976
     * @param {String} name                                                                                            // 6977
     * @param {Function} dialogInfo function to make dialog, reference to {@link #tplDialog}                           // 6978
     */                                                                                                                // 6979
    this.addDialogInfo = function (name, dialogInfo) {                                                                 // 6980
      tplDialogInfo[name] = dialogInfo;                                                                                // 6981
    };                                                                                                                 // 6982
  };                                                                                                                   // 6983
                                                                                                                       // 6984
                                                                                                                       // 6985
  // jQuery namespace for summernote                                                                                   // 6986
  /**                                                                                                                  // 6987
   * @class $.summernote                                                                                               // 6988
   *                                                                                                                   // 6989
   * summernote attribute                                                                                              // 6990
   *                                                                                                                   // 6991
   * @mixin defaults                                                                                                   // 6992
   * @singleton                                                                                                        // 6993
   *                                                                                                                   // 6994
   */                                                                                                                  // 6995
  $.summernote = $.summernote || {};                                                                                   // 6996
                                                                                                                       // 6997
  // extends default settings                                                                                          // 6998
  //  - $.summernote.version                                                                                           // 6999
  //  - $.summernote.options                                                                                           // 7000
  //  - $.summernote.lang                                                                                              // 7001
  $.extend($.summernote, defaults);                                                                                    // 7002
                                                                                                                       // 7003
  var renderer = new Renderer();                                                                                       // 7004
  var eventHandler = new EventHandler();                                                                               // 7005
                                                                                                                       // 7006
  $.extend($.summernote, {                                                                                             // 7007
    /** @property {Renderer} */                                                                                        // 7008
    renderer: renderer,                                                                                                // 7009
    /** @property {EventHandler} */                                                                                    // 7010
    eventHandler: eventHandler,                                                                                        // 7011
    /**                                                                                                                // 7012
     * @property {Object} core                                                                                         // 7013
     * @property {core.agent} core.agent                                                                               // 7014
     * @property {core.dom} core.dom                                                                                   // 7015
     * @property {core.range} core.range                                                                               // 7016
     */                                                                                                                // 7017
    core: {                                                                                                            // 7018
      agent: agent,                                                                                                    // 7019
      list : list,                                                                                                     // 7020
      dom: dom,                                                                                                        // 7021
      range: range                                                                                                     // 7022
    },                                                                                                                 // 7023
    /**                                                                                                                // 7024
     * @property {Object}                                                                                              // 7025
     * pluginEvents event list for plugins                                                                             // 7026
     * event has name and callback function.                                                                           // 7027
     *                                                                                                                 // 7028
     * ```                                                                                                             // 7029
     * $.summernote.addPlugin({                                                                                        // 7030
     *     events : {                                                                                                  // 7031
     *          'hello' : function(layoutInfo, value, $target) {                                                       // 7032
     *              console.log('event name is hello, value is ' + value );                                            // 7033
     *          }                                                                                                      // 7034
     *     }                                                                                                           // 7035
     * })                                                                                                              // 7036
     * ```                                                                                                             // 7037
     *                                                                                                                 // 7038
     * * event name is data-event property.                                                                            // 7039
     * * layoutInfo is a summernote layout information.                                                                // 7040
     * * value is data-value property.                                                                                 // 7041
     */                                                                                                                // 7042
    pluginEvents: {},                                                                                                  // 7043
                                                                                                                       // 7044
    plugins : []                                                                                                       // 7045
  });                                                                                                                  // 7046
                                                                                                                       // 7047
  /**                                                                                                                  // 7048
   * @method addPlugin                                                                                                 // 7049
   *                                                                                                                   // 7050
   * add Plugin in Summernote                                                                                          // 7051
   *                                                                                                                   // 7052
   * Summernote can make a own plugin.                                                                                 // 7053
   *                                                                                                                   // 7054
   * ### Define plugin                                                                                                 // 7055
   * ```                                                                                                               // 7056
   * // get template function                                                                                          // 7057
   * var tmpl = $.summernote.renderer.getTemplate();                                                                   // 7058
   *                                                                                                                   // 7059
   * // add a button                                                                                                   // 7060
   * $.summernote.addPlugin({                                                                                          // 7061
   *     buttons : {                                                                                                   // 7062
   *        // "hello"  is button's namespace.                                                                         // 7063
   *        "hello" : function(lang, options) {                                                                        // 7064
   *            // make icon button by template function                                                               // 7065
   *            return tmpl.iconButton(options.iconPrefix + 'header', {                                                // 7066
   *                // callback function name when button clicked                                                      // 7067
   *                event : 'hello',                                                                                   // 7068
   *                // set data-value property                                                                         // 7069
   *                value : 'hello',                                                                                   // 7070
   *                hide : true                                                                                        // 7071
   *            });                                                                                                    // 7072
   *        }                                                                                                          // 7073
   *                                                                                                                   // 7074
   *     },                                                                                                            // 7075
   *                                                                                                                   // 7076
   *     events : {                                                                                                    // 7077
   *        "hello" : function(layoutInfo, value) {                                                                    // 7078
   *            // here is event code                                                                                  // 7079
   *        }                                                                                                          // 7080
   *     }                                                                                                             // 7081
   * });                                                                                                               // 7082
   * ```                                                                                                               // 7083
   * ### Use a plugin in toolbar                                                                                       // 7084
   *                                                                                                                   // 7085
   * ```                                                                                                               // 7086
   *    $("#editor").summernote({                                                                                      // 7087
   *    ...                                                                                                            // 7088
   *    toolbar : [                                                                                                    // 7089
   *        // display hello plugin in toolbar                                                                         // 7090
   *        ['group', [ 'hello' ]]                                                                                     // 7091
   *    ]                                                                                                              // 7092
   *    ...                                                                                                            // 7093
   *    });                                                                                                            // 7094
   * ```                                                                                                               // 7095
   *                                                                                                                   // 7096
   *                                                                                                                   // 7097
   * @param {Object} plugin                                                                                            // 7098
   * @param {Object} [plugin.buttons] define plugin button. for detail, see to Renderer.addButtonInfo                  // 7099
   * @param {Object} [plugin.dialogs] define plugin dialog. for detail, see to Renderer.addDialogInfo                  // 7100
   * @param {Object} [plugin.events] add event in $.summernote.pluginEvents                                            // 7101
   * @param {Object} [plugin.langs] update $.summernote.lang                                                           // 7102
   * @param {Object} [plugin.options] update $.summernote.options                                                      // 7103
   */                                                                                                                  // 7104
  $.summernote.addPlugin = function (plugin) {                                                                         // 7105
                                                                                                                       // 7106
    // save plugin list                                                                                                // 7107
    $.summernote.plugins.push(plugin);                                                                                 // 7108
                                                                                                                       // 7109
    if (plugin.buttons) {                                                                                              // 7110
      $.each(plugin.buttons, function (name, button) {                                                                 // 7111
        renderer.addButtonInfo(name, button);                                                                          // 7112
      });                                                                                                              // 7113
    }                                                                                                                  // 7114
                                                                                                                       // 7115
    if (plugin.dialogs) {                                                                                              // 7116
      $.each(plugin.dialogs, function (name, dialog) {                                                                 // 7117
        renderer.addDialogInfo(name, dialog);                                                                          // 7118
      });                                                                                                              // 7119
    }                                                                                                                  // 7120
                                                                                                                       // 7121
    if (plugin.events) {                                                                                               // 7122
      $.each(plugin.events, function (name, event) {                                                                   // 7123
        $.summernote.pluginEvents[name] = event;                                                                       // 7124
      });                                                                                                              // 7125
    }                                                                                                                  // 7126
                                                                                                                       // 7127
    if (plugin.langs) {                                                                                                // 7128
      $.each(plugin.langs, function (locale, lang) {                                                                   // 7129
        if ($.summernote.lang[locale]) {                                                                               // 7130
          $.extend($.summernote.lang[locale], lang);                                                                   // 7131
        }                                                                                                              // 7132
      });                                                                                                              // 7133
    }                                                                                                                  // 7134
                                                                                                                       // 7135
    if (plugin.options) {                                                                                              // 7136
      $.extend($.summernote.options, plugin.options);                                                                  // 7137
    }                                                                                                                  // 7138
  };                                                                                                                   // 7139
                                                                                                                       // 7140
  /*                                                                                                                   // 7141
   * extend $.fn                                                                                                       // 7142
   */                                                                                                                  // 7143
  $.fn.extend({                                                                                                        // 7144
    /**                                                                                                                // 7145
     * @method                                                                                                         // 7146
     * Initialize summernote                                                                                           // 7147
     *  - create editor layout and attach Mouse and keyboard events.                                                   // 7148
     *                                                                                                                 // 7149
     * ```                                                                                                             // 7150
     * $("#summernote").summernote( { options ..} );                                                                   // 7151
     * ```                                                                                                             // 7152
     *                                                                                                                 // 7153
     * @member $.fn                                                                                                    // 7154
     * @param {Object|String} options reference to $.summernote.options                                                // 7155
     * @return {this}                                                                                                  // 7156
     */                                                                                                                // 7157
    summernote: function () {                                                                                          // 7158
      // check first argument's type                                                                                   // 7159
      //  - {String}: External API call {{module}}.{{method}}                                                          // 7160
      //  - {Object}: init options                                                                                     // 7161
      var type = $.type(list.head(arguments));                                                                         // 7162
      var isExternalAPICalled = type === 'string';                                                                     // 7163
      var hasInitOptions = type === 'object';                                                                          // 7164
                                                                                                                       // 7165
      // extend default options with custom user options                                                               // 7166
      var options = hasInitOptions ? list.head(arguments) : {};                                                        // 7167
                                                                                                                       // 7168
      options = $.extend({}, $.summernote.options, options);                                                           // 7169
      options.icons = $.extend({}, $.summernote.options.icons, options.icons);                                         // 7170
                                                                                                                       // 7171
      // Include langInfo in options for later use, e.g. for image drag-n-drop                                         // 7172
      // Setup language info with en-US as default                                                                     // 7173
      options.langInfo = $.extend(true, {}, $.summernote.lang['en-US'], $.summernote.lang[options.lang]);              // 7174
                                                                                                                       // 7175
      // override plugin options                                                                                       // 7176
      if (!isExternalAPICalled && hasInitOptions) {                                                                    // 7177
        for (var i = 0, len = $.summernote.plugins.length; i < len; i++) {                                             // 7178
          var plugin = $.summernote.plugins[i];                                                                        // 7179
                                                                                                                       // 7180
          if (options.plugin[plugin.name]) {                                                                           // 7181
            $.summernote.plugins[i] = $.extend(true, plugin, options.plugin[plugin.name]);                             // 7182
          }                                                                                                            // 7183
        }                                                                                                              // 7184
      }                                                                                                                // 7185
                                                                                                                       // 7186
      this.each(function (idx, holder) {                                                                               // 7187
        var $holder = $(holder);                                                                                       // 7188
                                                                                                                       // 7189
        // if layout isn't created yet, createLayout and attach events                                                 // 7190
        if (!renderer.hasNoteEditor($holder)) {                                                                        // 7191
          renderer.createLayout($holder, options);                                                                     // 7192
                                                                                                                       // 7193
          var layoutInfo = renderer.layoutInfoFromHolder($holder);                                                     // 7194
          $holder.data('layoutInfo', layoutInfo);                                                                      // 7195
                                                                                                                       // 7196
          eventHandler.attach(layoutInfo, options);                                                                    // 7197
          eventHandler.attachCustomEvent(layoutInfo, options);                                                         // 7198
        }                                                                                                              // 7199
      });                                                                                                              // 7200
                                                                                                                       // 7201
      var $first = this.first();                                                                                       // 7202
      if ($first.length) {                                                                                             // 7203
        var layoutInfo = renderer.layoutInfoFromHolder($first);                                                        // 7204
                                                                                                                       // 7205
        // external API                                                                                                // 7206
        if (isExternalAPICalled) {                                                                                     // 7207
          var moduleAndMethod = list.head(list.from(arguments));                                                       // 7208
          var args = list.tail(list.from(arguments));                                                                  // 7209
                                                                                                                       // 7210
          // TODO now external API only works for editor                                                               // 7211
          var params = [moduleAndMethod, layoutInfo.editable()].concat(args);                                          // 7212
          return eventHandler.invoke.apply(eventHandler, params);                                                      // 7213
        } else if (options.focus) {                                                                                    // 7214
          // focus on first editable element for initialize editor                                                     // 7215
          layoutInfo.editable().focus();                                                                               // 7216
        }                                                                                                              // 7217
      }                                                                                                                // 7218
                                                                                                                       // 7219
      return this;                                                                                                     // 7220
    },                                                                                                                 // 7221
                                                                                                                       // 7222
    /**                                                                                                                // 7223
     * @method                                                                                                         // 7224
     *                                                                                                                 // 7225
     * get the HTML contents of note or set the HTML contents of note.                                                 // 7226
     *                                                                                                                 // 7227
     * * get contents                                                                                                  // 7228
     * ```                                                                                                             // 7229
     * var content = $("#summernote").code();                                                                          // 7230
     * ```                                                                                                             // 7231
     * * set contents                                                                                                  // 7232
     *                                                                                                                 // 7233
     * ```                                                                                                             // 7234
     * $("#summernote").code(html);                                                                                    // 7235
     * ```                                                                                                             // 7236
     *                                                                                                                 // 7237
     * @member $.fn                                                                                                    // 7238
     * @param {String} [html] - HTML contents(optional, set)                                                           // 7239
     * @return {this|String} - context(set) or HTML contents of note(get).                                             // 7240
     */                                                                                                                // 7241
    code: function (html) {                                                                                            // 7242
      // get the HTML contents of note                                                                                 // 7243
      if (html === undefined) {                                                                                        // 7244
        var $holder = this.first();                                                                                    // 7245
        if (!$holder.length) {                                                                                         // 7246
          return;                                                                                                      // 7247
        }                                                                                                              // 7248
                                                                                                                       // 7249
        var layoutInfo = renderer.layoutInfoFromHolder($holder);                                                       // 7250
        var $editable = layoutInfo && layoutInfo.editable();                                                           // 7251
                                                                                                                       // 7252
        if ($editable && $editable.length) {                                                                           // 7253
          var isCodeview = eventHandler.invoke('codeview.isActivated', layoutInfo);                                    // 7254
          eventHandler.invoke('codeview.sync', layoutInfo);                                                            // 7255
          return isCodeview ? layoutInfo.codable().val() :                                                             // 7256
                              layoutInfo.editable().html();                                                            // 7257
        }                                                                                                              // 7258
        return dom.value($holder);                                                                                     // 7259
      }                                                                                                                // 7260
                                                                                                                       // 7261
      // set the HTML contents of note                                                                                 // 7262
      this.each(function (i, holder) {                                                                                 // 7263
        var layoutInfo = renderer.layoutInfoFromHolder($(holder));                                                     // 7264
        var $editable = layoutInfo && layoutInfo.editable();                                                           // 7265
        if ($editable) {                                                                                               // 7266
          $editable.html(html);                                                                                        // 7267
        }                                                                                                              // 7268
      });                                                                                                              // 7269
                                                                                                                       // 7270
      return this;                                                                                                     // 7271
    },                                                                                                                 // 7272
                                                                                                                       // 7273
    /**                                                                                                                // 7274
     * @method                                                                                                         // 7275
     *                                                                                                                 // 7276
     * destroy Editor Layout and detach Key and Mouse Event                                                            // 7277
     *                                                                                                                 // 7278
     * @member $.fn                                                                                                    // 7279
     * @return {this}                                                                                                  // 7280
     */                                                                                                                // 7281
    destroy: function () {                                                                                             // 7282
      this.each(function (idx, holder) {                                                                               // 7283
        var $holder = $(holder);                                                                                       // 7284
                                                                                                                       // 7285
        if (!renderer.hasNoteEditor($holder)) {                                                                        // 7286
          return;                                                                                                      // 7287
        }                                                                                                              // 7288
                                                                                                                       // 7289
        var info = renderer.layoutInfoFromHolder($holder);                                                             // 7290
        var options = info.editor().data('options');                                                                   // 7291
                                                                                                                       // 7292
        eventHandler.detach(info, options);                                                                            // 7293
        renderer.removeLayout($holder, info, options);                                                                 // 7294
      });                                                                                                              // 7295
                                                                                                                       // 7296
      return this;                                                                                                     // 7297
    }                                                                                                                  // 7298
  });                                                                                                                  // 7299
}));                                                                                                                   // 7300
                                                                                                                       // 7301
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 7311
}).call(this);                                                       // 7312
                                                                     // 7313
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['summernote:summernote'] = {};

})();
