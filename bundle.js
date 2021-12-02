(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // scripts/postnotedata.js
  var require_postnotedata = __commonJS({
    "scripts/postnotedata.js"(exports, module) {
      function postNoteData2() {
        console.log("heelo");
      }
      module.exports = postNoteData2;
    }
  });

  // index.js
  var postNoteData = require_postnotedata();
  var noteTitle = document.querySelector("#title");
  var noteContent = document.querySelector("#note-content");
  var btn = document.querySelector("#btn");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    postNoteData();
  });
})();
