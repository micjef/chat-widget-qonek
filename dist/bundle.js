function a0_0x348a(){const _0x313bc7=['insertAdjacentHTML','initializeApp','<div\x20class=\x22','qonek-uat.appspot.com','where','appendChild','collection','click','keyup','6ntODxg','firestore','onSnapshot','error','serverTimestamp','7772uNRxMj','timestamp','\x0a\x20\x20\x20\x20\x20\x20.hidden\x20{\x20display:\x20none;\x20}\x0a\x20\x20\x20\x20\x20\x20#chat-widget-container\x20{\x20position:\x20fixed;\x20bottom:\x2020px;\x20right:\x2020px;\x20flex-direction:\x20column;\x20}\x0a\x20\x20\x20\x20\x20\x20#chat-popup\x20{\x20height:\x2070vh;\x20max-height:\x2070vh;\x20transition:\x20all\x200.3s;\x20overflow:\x20hidden;\x20}\x0a\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x20#chat-popup\x20{\x20position:\x20fixed;\x20top:\x200;\x20right:\x200;\x20bottom:\x200;\x20left:\x200;\x20width:\x20100%;\x20height:\x20100%;\x20max-height:\x20100%;\x20border-radius:\x200;\x20}\x20}\x0a\x20\x20\x20\x20','head','chat-submit','57dtkoJu','799774JdefJJ','<link\x20href=\x22https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.16/tailwind.min.css\x22\x20rel=\x22stylesheet\x22>','addEventListener','innerHTML','10oQeiOd','392WyjBFG','bg-gray-800\x20text-white','chat-popup','chat-widget-container','4819507TEYEWg','</div>','438045620329','length','1bXaNAi','trim','27393132MpOFUI','chat-bubble','forEach','toggle','\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22chat-bubble\x22\x20class=\x22w-16\x20h-16\x20bg-gray-800\x20rounded-full\x20flex\x20items-center\x20justify-center\x20cursor-pointer\x20text-3xl\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22w-10\x20h-10\x20text-white\x22\x20fill=\x22none\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20d=\x22M8\x2010h.01M12\x2010h.01M16\x2010h.01M9\x2016H5a2\x202\x200\x2001-2-2V6a2\x202\x200\x20012-2h14a2\x202\x200\x20012\x202v8a2\x202\x200\x2001-2\x202h-5l-5\x205v-5z\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22chat-popup\x22\x20class=\x22hidden\x20absolute\x20bottom-20\x20right-0\x20w-96\x20bg-white\x20rounded-md\x20shadow-md\x20flex\x20flex-col\x20transition-all\x20text-sm\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22chat-header\x22\x20class=\x22flex\x20justify-between\x20items-center\x20p-4\x20bg-gray-800\x20text-white\x20rounded-t-md\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22m-0\x20text-lg\x22>Chat\x20Widget</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22close-popup\x22\x20class=\x22bg-transparent\x20border-none\x20text-white\x20cursor-pointer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20class=\x22h-6\x20w-6\x22\x20fill=\x22none\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20d=\x22M6\x2018L18\x206M6\x206l12\x2012\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22chat-messages\x22\x20class=\x22flex-1\x20p-4\x20overflow-y-auto\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22chat-input-container\x22\x20class=\x22p-4\x20border-t\x20border-gray-200\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20space-x-4\x20items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22chat-input\x22\x20class=\x22flex-1\x20border\x20border-gray-300\x20rounded-md\x20px-4\x20py-2\x20outline-none\x20w-3/4\x22\x20placeholder=\x22Type\x20your\x20message...\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22chat-submit\x22\x20class=\x22bg-gray-800\x20text-white\x20rounded-md\x20px-4\x20py-2\x20cursor-pointer\x22>Send</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20','user','initChatWidget','focus','Enter','message','9694344gnHPUB','beforeend','className','log','contains','add','5666725DmlAAg','classList','chat-messages','204093PvWkEv','hidden','catch','close-popup','then','createElement','messages','scrollHeight','getElementById','tes','AIzaSyCWrdd9kE3kUQpmNg4_w2_4Fw00pAPailM','Firebase\x20configuration,\x20groupId,\x20and\x20username\x20are\x20required.','div','chat-input','style','value','qonek-uat','flex\x20justify-end\x20mb-3'];a0_0x348a=function(){return _0x313bc7;};return a0_0x348a();}function a0_0x35c6(_0x6d0f8f,_0x2a9f11){const _0x348a93=a0_0x348a();return a0_0x35c6=function(_0x35c688,_0x5bbf41){_0x35c688=_0x35c688-0x1b3;let _0x50167f=_0x348a93[_0x35c688];return _0x50167f;},a0_0x35c6(_0x6d0f8f,_0x2a9f11);}(function(_0x3ec282,_0x407127){const _0x40df95=a0_0x35c6,_0x5b8e2e=_0x3ec282();while(!![]){try{const _0x2b6074=-parseInt(_0x40df95(0x1f8))/0x1*(-parseInt(_0x40df95(0x1eb))/0x2)+-parseInt(_0x40df95(0x1ea))/0x3*(-parseInt(_0x40df95(0x1e5))/0x4)+-parseInt(_0x40df95(0x1c2))/0x5*(parseInt(_0x40df95(0x1e0))/0x6)+-parseInt(_0x40df95(0x1f4))/0x7+-parseInt(_0x40df95(0x1f0))/0x8*(parseInt(_0x40df95(0x1c5))/0x9)+-parseInt(_0x40df95(0x1ef))/0xa*(-parseInt(_0x40df95(0x1bc))/0xb)+parseInt(_0x40df95(0x1fa))/0xc;if(_0x2b6074===_0x407127)break;else _0x5b8e2e['push'](_0x5b8e2e['shift']());}catch(_0x5023f7){_0x5b8e2e['push'](_0x5b8e2e['shift']());}}}(a0_0x348a,0xa30ca),!function(_0x5cb466){const _0x484dca=a0_0x35c6;_0x5cb466[_0x484dca(0x1b8)]=function(_0x2a943a){const _0x27a64f=_0x484dca,_0x546129={'apiKey':_0x27a64f(0x1cf),'authDomain':'qonek-uat.firebaseapp.com','projectId':_0x27a64f(0x1d5),'storageBucket':_0x27a64f(0x1da),'messagingSenderId':_0x27a64f(0x1f6),'appId':'1:438045620329:web:b848f758736fb9571e4af8','measurementId':'G-RS59LS1MN4'},_0x45f770='tes',_0x211fd6=_0x27a64f(0x1ce);if(!_0x546129)return void console[_0x27a64f(0x1e3)](_0x27a64f(0x1d0));firebase['apps'][_0x27a64f(0x1f7)]||firebase[_0x27a64f(0x1d8)](_0x546129);const _0x3fd973=firebase[_0x27a64f(0x1e1)]();document[_0x27a64f(0x1e8)][_0x27a64f(0x1d7)](_0x27a64f(0x1bd),_0x27a64f(0x1ec));const _0x2974dc=document[_0x27a64f(0x1ca)](_0x27a64f(0x1d3));_0x2974dc[_0x27a64f(0x1ee)]=_0x27a64f(0x1e7),document[_0x27a64f(0x1e8)][_0x27a64f(0x1dc)](_0x2974dc);const _0x48cf00=document[_0x27a64f(0x1ca)](_0x27a64f(0x1d1));_0x48cf00['id']=_0x27a64f(0x1f3),document['body'][_0x27a64f(0x1dc)](_0x48cf00),_0x48cf00[_0x27a64f(0x1ee)]=_0x27a64f(0x1b6);const _0x11c291=document[_0x27a64f(0x1cd)](_0x27a64f(0x1d2)),_0x51df9c=document['getElementById'](_0x27a64f(0x1e9)),_0x15f6c1=document[_0x27a64f(0x1cd)](_0x27a64f(0x1c4)),_0x55a2a2=document[_0x27a64f(0x1cd)](_0x27a64f(0x1b3)),_0x10b93=document['getElementById'](_0x27a64f(0x1f2)),_0x1e8c8f=document[_0x27a64f(0x1cd)](_0x27a64f(0x1c8));function _0x3f8ce4(){const _0x48d3f9=_0x27a64f;_0x10b93[_0x48d3f9(0x1c3)][_0x48d3f9(0x1b5)](_0x48d3f9(0x1c6)),_0x10b93[_0x48d3f9(0x1c3)][_0x48d3f9(0x1c0)](_0x48d3f9(0x1c6))||_0x11c291[_0x48d3f9(0x1b9)]();}_0x51df9c[_0x27a64f(0x1ed)](_0x27a64f(0x1de),function(){const _0xc86209=_0x27a64f,_0xa13989=_0x11c291[_0xc86209(0x1d4)][_0xc86209(0x1f9)]();_0xa13989&&function(_0x3730d9){const _0x3ecf40=_0xc86209;(function(_0x3bfbc4){const _0x56a0be=a0_0x35c6,_0x44b017=document[_0x56a0be(0x1ca)](_0x56a0be(0x1d1));_0x44b017[_0x56a0be(0x1be)]=_0x56a0be(0x1d6),_0x44b017[_0x56a0be(0x1ee)]='<div\x20class=\x22bg-gray-800\x20text-white\x20rounded-lg\x20py-2\x20px-4\x20max-w-[70%]\x22>'+_0x3bfbc4+_0x56a0be(0x1f5),_0x15f6c1[_0x56a0be(0x1dc)](_0x44b017),_0x15f6c1['scrollTop']=_0x15f6c1[_0x56a0be(0x1cc)];}(_0x3730d9),_0x11c291['value']='',_0x3fd973['collection'](_0x3ecf40(0x1cb))[_0x3ecf40(0x1c1)]({'user':_0x211fd6,'groupId':_0x45f770,'message':_0x3730d9,'timestamp':firebase[_0x3ecf40(0x1e1)]['FieldValue'][_0x3ecf40(0x1e4)]()})[_0x3ecf40(0x1c9)](()=>{const _0x61f3b1=_0x3ecf40;console[_0x61f3b1(0x1bf)]('Message\x20stored!');})[_0x3ecf40(0x1c7)](_0x4e8b9c=>{console['error']('Error\x20storing\x20message:\x20',_0x4e8b9c);}));}(_0xa13989);}),_0x11c291[_0x27a64f(0x1ed)](_0x27a64f(0x1df),function(_0x369a8f){const _0x2797fb=_0x27a64f;_0x2797fb(0x1ba)===_0x369a8f['key']&&_0x51df9c[_0x2797fb(0x1de)]();}),_0x55a2a2[_0x27a64f(0x1ed)](_0x27a64f(0x1de),function(){_0x3f8ce4();}),_0x1e8c8f[_0x27a64f(0x1ed)]('click',function(){_0x3f8ce4();}),_0x3fd973[_0x27a64f(0x1dd)](_0x27a64f(0x1cb))[_0x27a64f(0x1db)]('groupId','==',_0x45f770)['orderBy'](_0x27a64f(0x1e6))[_0x27a64f(0x1e2)](_0x44ab3b=>{const _0x21745d=_0x27a64f;_0x15f6c1[_0x21745d(0x1ee)]='',_0x44ab3b[_0x21745d(0x1b4)](_0x258d27=>{const _0x157f3f=_0x21745d,_0x14fb24=_0x258d27['data'](),_0x100841=document[_0x157f3f(0x1ca)](_0x157f3f(0x1d1));_0x100841[_0x157f3f(0x1be)]=_0x14fb24[_0x157f3f(0x1b7)]===_0x211fd6?_0x157f3f(0x1d6):'flex\x20mb-3',_0x100841[_0x157f3f(0x1ee)]=_0x157f3f(0x1d9)+(_0x14fb24[_0x157f3f(0x1b7)]===_0x211fd6?_0x157f3f(0x1f1):'bg-gray-200\x20text-black')+'\x20rounded-lg\x20py-2\x20px-4\x20max-w-[70%]\x22>'+_0x14fb24[_0x157f3f(0x1bb)]+_0x157f3f(0x1f5),_0x15f6c1['appendChild'](_0x100841);}),_0x15f6c1['scrollTop']=_0x15f6c1[_0x21745d(0x1cc)];});};}(window));