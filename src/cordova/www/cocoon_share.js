!function(){var o=window.Cocoon;!o&&window.cordova&&"undefined"!=typeof require&&(o=cordova.require("com.ludei.cocoon.common.Cocoon")),o.define("Cocoon.Share",function(n){return n.share=function(n,e,c){c=c||function(){},o.exec("LDSharePlugin","share",[n,e],function(o){c(o[0],o[1],o[2])},function(o){c(o[0],o[1],o[2])})},n})}();