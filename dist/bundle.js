function a0_0x20f8() {
  const _0x25abc2 = [
    "add",
    "flex\x20justify-end\x20mb-3",
    "1:436139286347:web:46e7e7fd66de34294a52ce",
    "<link\x20href=\x22https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.16/tailwind.min.css\x22\x20rel=\x22stylesheet\x22>",
    "13xMbDAH",
    "4280pjiqKz",
    "hidden",
    "10835724vMxwox",
    "click",
    "\x20rounded-lg\x20py-2\x20px-4\x20max-w-[70%]\x22>",
    "56121UBNCOs",
    "error",
    "style",
    "createElement",
    "Enter",
    "functions",
    "getElementById",
    "timestamp",
    "focus",
    "user",
    "5210SgmVBG",
    "embed-a94ed",
    "firestore",
    "FieldValue",
    "399mfaKOz",
    "Message\x20stored!",
    "classList",
    "value",
    "div",
    "messages",
    "chat-input",
    "436139286347",
    "serverTimestamp",
    "104680mozRhO",
    "toggle",
    "333ynNYcE",
    "className",
    "log",
    "message",
    "\x0a\x20\x20\x20\x20<div\x20id=\x22chat-bubble\x22\x20class=\x22w-16\x20h-16\x20bg-gray-800\x20rounded-full\x20flex\x20items-center\x20justify-center\x20cursor-pointer\x20text-3xl\x22>\x0a\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22w-10\x20h-10\x20text-white\x22\x20fill=\x22none\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20d=\x22M8\x2010h.01M12\x2010h.01M16\x2010h.01M9\x2016H5a2\x202\x200\x2001-2-2V6a2\x202\x200\x20012-2h14a2\x202\x200\x20012\x202v8a2\x202\x200\x2001-2\x202h-5l-5\x205v-5z\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<div\x20id=\x22chat-popup\x22\x20class=\x22hidden\x20absolute\x20bottom-20\x20right-0\x20w-96\x20bg-white\x20rounded-md\x20shadow-md\x20flex\x20flex-col\x20transition-all\x20text-sm\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22chat-header\x22\x20class=\x22flex\x20justify-between\x20items-center\x20p-4\x20bg-gray-800\x20text-white\x20rounded-t-md\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22m-0\x20text-lg\x22>Chat\x20Widget\x20by\x20GPT4</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22close-popup\x22\x20class=\x22bg-transparent\x20border-none\x20text-white\x20cursor-pointer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22h-6\x20w-6\x22\x20fill=\x22none\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20d=\x22M6\x2018L18\x206M6\x206l12\x2012\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22chat-messages\x22\x20class=\x22flex-1\x20p-4\x20overflow-y-auto\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22chat-input-container\x22\x20class=\x22p-4\x20border-t\x20border-gray-200\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20space-x-4\x20items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22chat-input\x22\x20class=\x22flex-1\x20border\x20border-gray-300\x20rounded-md\x20px-4\x20py-2\x20outline-none\x20w-3/4\x22\x20placeholder=\x22Type\x20your\x20message...\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22chat-submit\x22\x20class=\x22bg-gray-800\x20text-white\x20rounded-md\x20px-4\x20py-2\x20cursor-pointer\x22>Send</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "initializeApp",
    "data",
    "body",
    "</div>",
    "3626447zysPLW",
    "User",
    "\x0a\x20\x20\x20\x20.hidden\x20{\x20display:\x20none;\x20}\x0a\x20\x20\x20\x20#chat-widget-container\x20{\x20position:\x20fixed;\x20bottom:\x2020px;\x20right:\x2020px;\x20flex-direction:\x20column;\x20}\x0a\x20\x20\x20\x20#chat-popup\x20{\x20height:\x2070vh;\x20max-height:\x2070vh;\x20transition:\x20all\x200.3s;\x20overflow:\x20hidden;\x20}\x0a\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x20#chat-popup\x20{\x20position:\x20fixed;\x20top:\x200;\x20right:\x200;\x20bottom:\x200;\x20left:\x200;\x20width:\x20100%;\x20height:\x20100%;\x20max-height:\x20100%;\x20border-radius:\x200;\x20}\x20}\x0a\x20\x20",
    "scrollTop",
    "onSnapshot",
    "bg-gray-800\x20text-white",
    "chat-submit",
    "AIzaSyDBnq92SWovM3JYNBeHNGxxYy-E3_m_mtg",
    "key",
    "10604tJWzQb",
    "chat-messages",
    "head",
    "<div\x20class=\x22bg-gray-800\x20text-white\x20rounded-lg\x20py-2\x20px-4\x20max-w-[70%]\x22>",
    "2DZYYqa",
    "G-NGXTX2H8VM",
    "collection",
    "scrollHeight",
    "innerHTML",
    "chat-widget-container",
    "close-popup",
    "catch",
    "4235maNbqf",
    "appendChild",
    "forEach",
    "addEventListener",
    "then",
    "contains",
    "3012kGXPAy",
    "flex\x20mb-3",
    "<div\x20class=\x22",
    "keyup",
    "chat-popup",
  ];
  a0_0x20f8 = function () {
    return _0x25abc2;
  };
  return a0_0x20f8();
}
function a0_0x4a55(_0x27c6f9, _0xc0fe9e) {
  const _0x20f8d1 = a0_0x20f8();
  return (
    (a0_0x4a55 = function (_0x4a558a, _0x3487b7) {
      _0x4a558a = _0x4a558a - 0xa7;
      let _0x6ea636 = _0x20f8d1[_0x4a558a];
      return _0x6ea636;
    }),
    a0_0x4a55(_0x27c6f9, _0xc0fe9e)
  );
}
(function (_0x218aef, _0x2c7caa) {
  const _0x5b1885 = a0_0x4a55,
    _0x3e0bee = _0x218aef();
  while (!![]) {
    try {
      const _0x105d8e =
        (-parseInt(_0x5b1885(0xee)) / 0x1) * (parseInt(_0x5b1885(0xd1)) / 0x2) +
        (-parseInt(_0x5b1885(0xb0)) / 0x3) *
          (-parseInt(_0x5b1885(0xcd)) / 0x4) +
        (-parseInt(_0x5b1885(0xac)) / 0x5) * (parseInt(_0x5b1885(0xdf)) / 0x6) +
        (parseInt(_0x5b1885(0xd9)) / 0x7) * (parseInt(_0x5b1885(0xe9)) / 0x8) +
        (parseInt(_0x5b1885(0xbb)) / 0x9) * (-parseInt(_0x5b1885(0xb9)) / 0xa) +
        -parseInt(_0x5b1885(0xc4)) / 0xb +
        (parseInt(_0x5b1885(0xeb)) / 0xc) * (parseInt(_0x5b1885(0xe8)) / 0xd);
      if (_0x105d8e === _0x2c7caa) break;
      else _0x3e0bee["push"](_0x3e0bee["shift"]());
    } catch (_0x2edfef) {
      _0x3e0bee["push"](_0x3e0bee["shift"]());
    }
  }
})(a0_0x20f8, 0x4519d),
  !(function () {
    const _0x14aa09 = a0_0x4a55;
    firebase[_0x14aa09(0xc0)]({
      apiKey: _0x14aa09(0xcb),
      authDomain: "embed-a94ed.firebaseapp.com",
      projectId: _0x14aa09(0xad),
      storageBucket: "embed-a94ed.appspot.com",
      messagingSenderId: _0x14aa09(0xb7),
      appId: _0x14aa09(0xe6),
      measurementId: _0x14aa09(0xd2),
    });
    const _0x493fdb = firebase[_0x14aa09(0xae)]();
    firebase[_0x14aa09(0xa7)](),
      document[_0x14aa09(0xcf)]["insertAdjacentHTML"](
        "beforeend",
        _0x14aa09(0xe7)
      );
    const _0x43091f = document[_0x14aa09(0xf1)](_0x14aa09(0xf0));
    (_0x43091f["innerHTML"] = _0x14aa09(0xc6)),
      document[_0x14aa09(0xcf)][_0x14aa09(0xda)](_0x43091f);
    const _0x4dcca5 = document[_0x14aa09(0xf1)]("div");
    (_0x4dcca5["id"] = _0x14aa09(0xd6)),
      document[_0x14aa09(0xc2)][_0x14aa09(0xda)](_0x4dcca5),
      (_0x4dcca5[_0x14aa09(0xd5)] = _0x14aa09(0xbf));
    const _0x335201 = document[_0x14aa09(0xa8)](_0x14aa09(0xb6)),
      _0x4a224f = document["getElementById"](_0x14aa09(0xca)),
      _0x26e95a = document[_0x14aa09(0xa8)](_0x14aa09(0xce)),
      _0x2c24f7 = document[_0x14aa09(0xa8)]("chat-bubble"),
      _0x1f41b0 = document["getElementById"](_0x14aa09(0xe3)),
      _0x2c1339 = document[_0x14aa09(0xa8)](_0x14aa09(0xd7));
    function _0x5200a9() {
      const _0x40e98e = _0x14aa09;
      _0x1f41b0[_0x40e98e(0xb2)][_0x40e98e(0xba)](_0x40e98e(0xea)),
        _0x1f41b0[_0x40e98e(0xb2)][_0x40e98e(0xde)](_0x40e98e(0xea)) ||
          _0x335201[_0x40e98e(0xaa)]();
    }
    _0x4a224f[_0x14aa09(0xdc)](_0x14aa09(0xec), function () {
      const _0x136d00 = _0x335201["value"]["trim"]();
      _0x136d00 &&
        (function (_0x1f3edf) {
          const _0x124e35 = a0_0x4a55;
          (function (_0x22927e) {
            const _0x1e2732 = a0_0x4a55,
              _0x1bb513 = document[_0x1e2732(0xf1)](_0x1e2732(0xb4));
            (_0x1bb513[_0x1e2732(0xbc)] = _0x1e2732(0xe5)),
              (_0x1bb513[_0x1e2732(0xd5)] =
                _0x1e2732(0xd0) + _0x22927e + _0x1e2732(0xc3)),
              _0x26e95a[_0x1e2732(0xda)](_0x1bb513),
              (_0x26e95a[_0x1e2732(0xc7)] = _0x26e95a[_0x1e2732(0xd4)]);
          })(_0x1f3edf),
            (_0x335201[_0x124e35(0xb3)] = ""),
            _0x493fdb[_0x124e35(0xd3)](_0x124e35(0xb5))
              [_0x124e35(0xe4)]({
                user: "User",
                message: _0x1f3edf,
                timestamp:
                  firebase[_0x124e35(0xae)][_0x124e35(0xaf)][_0x124e35(0xb8)](),
              })
              [_0x124e35(0xdd)](() => {
                const _0x20d5b2 = _0x124e35;
                console[_0x20d5b2(0xbd)](_0x20d5b2(0xb1));
              })
              [_0x124e35(0xd8)]((_0x622446) => {
                const _0x4f9110 = _0x124e35;
                console[_0x4f9110(0xef)](
                  "Error\x20storing\x20message:\x20",
                  _0x622446
                );
              });
        })(_0x136d00);
    }),
      _0x335201["addEventListener"](_0x14aa09(0xe2), function (_0x5d32b9) {
        const _0x5f1d3e = _0x14aa09;
        _0x5f1d3e(0xf2) === _0x5d32b9[_0x5f1d3e(0xcc)] && _0x4a224f["click"]();
      }),
      _0x2c24f7[_0x14aa09(0xdc)](_0x14aa09(0xec), function () {
        _0x5200a9();
      }),
      _0x2c1339[_0x14aa09(0xdc)](_0x14aa09(0xec), function () {
        _0x5200a9();
      }),
      _0x493fdb[_0x14aa09(0xd3)](_0x14aa09(0xb5))
        ["orderBy"](_0x14aa09(0xa9))
        [_0x14aa09(0xc8)]((_0x10ecc9) => {
          const _0x3ba57e = _0x14aa09;
          (_0x26e95a[_0x3ba57e(0xd5)] = ""),
            _0x10ecc9[_0x3ba57e(0xdb)]((_0x3c999c) => {
              const _0x53cfe2 = _0x3ba57e,
                _0x4ce0be = _0x3c999c[_0x53cfe2(0xc1)](),
                _0x3169bf = document[_0x53cfe2(0xf1)](_0x53cfe2(0xb4));
              (_0x3169bf[_0x53cfe2(0xbc)] =
                _0x53cfe2(0xc5) === _0x4ce0be[_0x53cfe2(0xab)]
                  ? _0x53cfe2(0xe5)
                  : _0x53cfe2(0xe0)),
                (_0x3169bf[_0x53cfe2(0xd5)] =
                  _0x53cfe2(0xe1) +
                  (_0x53cfe2(0xc5) === _0x4ce0be[_0x53cfe2(0xab)]
                    ? _0x53cfe2(0xc9)
                    : "bg-gray-200\x20text-black") +
                  _0x53cfe2(0xed) +
                  _0x4ce0be[_0x53cfe2(0xbe)] +
                  _0x53cfe2(0xc3)),
                _0x26e95a[_0x53cfe2(0xda)](_0x3169bf);
            }),
            (_0x26e95a[_0x3ba57e(0xc7)] = _0x26e95a[_0x3ba57e(0xd4)]);
        });
  })();
