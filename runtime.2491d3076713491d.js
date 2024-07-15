(() => {
    "use strict";
    var __webpack_modules__ = {}, __webpack_exports__ = {};
    
    function __webpack_require__(moduleId) {
        var module = __webpack_modules__[moduleId];
        if (module !== undefined) {
            return module.exports;
        }
        var newModule = __webpack_modules__[moduleId] = {
            id: moduleId,
            loaded: false,
            exports: {}
        };
        __webpack_exports__[moduleId].call(newModule.exports, newModule, newModule.exports, __webpack_require__);
        newModule.loaded = true;
        return newModule.exports;
    }

    // Several other functions and definitions follow, but they're not relevant to show here
})();
