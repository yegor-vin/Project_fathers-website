// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"A2T1":[function(require,module,exports) {
'use strict';

var accordion = document.querySelector('.accordion');
accordion.addEventListener('click', function () {
  this.classList.toggle('active');
  var panel = this.nextElementSibling;

  if (panel.style.display === 'block' && panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.display = 'block';
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }
});
var modal = document.querySelector('.modal');
var img = document.querySelector('.certificate__img-1');
var img1 = document.querySelector('.certificate__img-2');
var modalImg = document.querySelector('.modal__content');

img.onclick = function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
};

img1.onclick = function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
};

var span = document.getElementsByClassName('modal__close')[0];

span.onclick = function () {
  modal.style.display = 'none';
};

var panelModal = document.querySelector('.panel__modal');
var panelImage = document.querySelector('.panel__table-img');
var panelModalImage = document.querySelector('.panel__modal-content');
var panelCaptionText = document.querySelector('.panel__caption');

panelImage.onclick = function () {
  panelModal.style.display = 'block';
  panelModalImage.src = this.src;
  panelCaptionText.innerHTML = this.alt;
};

var panelModalCloseBtn = document.querySelector('.panel__modal-close');

panelModalCloseBtn.onclick = function () {
  panelModal.style.display = 'none';
};

var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.querySelectorAll('.slideshow__img-container');

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 1700);
}

var batteriesGallery = document.querySelector('.batteries__image-container');
var mainImg = batteriesGallery.querySelector('.batteries__main-img');
var itemImages = batteriesGallery.querySelectorAll('.slider__item');
batteriesGallery.addEventListener('click', function (event) {
  event.preventDefault();
  var parent = event.target.parentNode;
  var imageLink = parent.getAttribute('href');
  mainImg.src = imageLink;
});
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/Project_fathers-website/app.cc670166.js.map