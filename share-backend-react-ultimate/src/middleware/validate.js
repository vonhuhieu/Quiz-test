'use strict';var _0x1d9164=_0x5b9d;(function(_0x4a4e3b,_0x6d8794){var _0x52b72=_0x5b9d,_0x2d7486=_0x4a4e3b();while(!![]){try{var _0x3250af=parseInt(_0x52b72(0x189))/0x1*(parseInt(_0x52b72(0x19c))/0x2)+-parseInt(_0x52b72(0x19d))/0x3+parseInt(_0x52b72(0x19a))/0x4*(parseInt(_0x52b72(0x196))/0x5)+parseInt(_0x52b72(0x186))/0x6*(-parseInt(_0x52b72(0x18d))/0x7)+-parseInt(_0x52b72(0x197))/0x8+parseInt(_0x52b72(0x18f))/0x9+parseInt(_0x52b72(0x198))/0xa;if(_0x3250af===_0x6d8794)break;else _0x2d7486['push'](_0x2d7486['shift']());}catch(_0x70ac7f){_0x2d7486['push'](_0x2d7486['shift']());}}}(_0x1fdf,0xef648));function _0x5b9d(_0x17ee95,_0x3a320c){var _0x1fdf4e=_0x1fdf();return _0x5b9d=function(_0x5b9de8,_0x389031){_0x5b9de8=_0x5b9de8-0x186;var _0x54a461=_0x1fdf4e[_0x5b9de8];return _0x54a461;},_0x5b9d(_0x17ee95,_0x3a320c);}var Joi=require(_0x1d9164(0x18e)),httpStatus=require(_0x1d9164(0x190)),pick=require('../utils/pick'),ApiError=require(_0x1d9164(0x19b)),validate=function(_0x134c53){return function(_0x544d3c,_0x4894bb,_0x1940c9){var _0x402e87=_0x5b9d,_0x36b9f7,_0x433436=pick(_0x134c53,['params','query',_0x402e87(0x19e)]),_0x401842=pick(_0x544d3c,Object[_0x402e87(0x188)](_0x433436)),_0x433436=Joi['compile'](_0x433436)[_0x402e87(0x191)]({'errors':{'label':_0x402e87(0x18b)},'abortEarly':!0x1})[_0x402e87(0x194)](_0x401842),_0x401842=_0x433436[_0x402e87(0x187)],_0x433436=_0x433436['error'];return _0x433436?(_0x36b9f7=_0x433436[_0x402e87(0x18c)][_0x402e87(0x192)](function(_0x147bf1){var _0x13937d=_0x402e87;return{'id':_0x147bf1['path']['splice'](0x1)[_0x13937d(0x18a)]('.'),'message':_0x147bf1['message']};}),_0x433436=_0x433436[_0x402e87(0x18c)][_0x402e87(0x192)](function(_0x5a1d3d){var _0x56fd06=_0x402e87;return _0x5a1d3d[_0x56fd06(0x193)];})[_0x402e87(0x18a)](',\x20'),_0x1940c9(new ApiError(httpStatus[_0x402e87(0x199)],_0x433436,_0x36b9f7))):(Object[_0x402e87(0x195)](_0x544d3c,_0x401842),_0x1940c9());};};function _0x1fdf(){var _0x45db9f=['http-status','prefs','map','message','validate','assign','320UflDcm','10817360gVBwln','3026650gtIEdY','BAD_REQUEST','112420louCVa','../utils/ApiError','186wmhnSm','1657329WwyTNy','body','54OMfPXG','value','keys','19255RSYtMd','join','key','details','1393147mVpwJI','joi','7058286fNjwUY'];_0x1fdf=function(){return _0x45db9f;};return _0x1fdf();}module['exports']=validate;