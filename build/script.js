!function(){var n,e,t,r,o,i,u,a,f,c,l,d,s,p,m,g,h,v,w,y,_,b,D,k,x,C,M,T,A,J,R,S,I,q,B,E,L,j,O,z,U,P,W,K,F,N,G,X,Y,H=[].slice;window.iced={Deferrals:function(){function n(n){this.continuation=n,this.count=1,this.ret=null}return n.prototype._fulfill=function(){return--this.count?void 0:this.continuation(this.ret)},n.prototype.defer=function(n){var e=this;return++this.count,function(){var t,r;return t=1<=arguments.length?H.call(arguments,0):[],null!=n&&null!=(r=n.assign_fn)&&r.apply(null,t),e._fulfill()}},n}(),findDeferral:function(){return null},trampoline:function(n){return n()}},window.__iced_k=window.__iced_k_noop=function(){},e=function(n){return setTimeout(n,0)},n=function(){var n;return window.aborted=!0,0<(n="undefined"!=typeof xhr&&null!==xhr?xhr.readyState:void 0)&&4>n?xhr.abort():void 0},R=function(n,e){return this instanceof R?(this.error=n,this.stack=e,this):new R(n,e)},P=function(n){return null!=n&&!(n instanceof R)},Y=function(n,e){var t,r,o;for(null==e&&(e=!1),r=0,o=n,e&&console.log("----- traceback -----");o instanceof R;)t={level:r++,error:o.error},e&&console.log(JSON.stringify(t)),o=o.stack,t.data=o,"string"==typeof o&&e&&console.log("-> "+o);return e&&console.log("-------- end --------"),t},B=function(n,t,r,o){return e(function(){var e,i,u,a;return P(n)?(u=document.createElement("canvas"),a=document.createElement("canvas"),u.width=n.width,u.height=n.height,a.width=t,a.height=r,e=u.getContext("2d"),i=a.getContext("2d"),e.putImageData(n,0,0),i.drawImage(u,0,0,t,r),o(i.getImageData(0,0,t,r))):o(R("Bad image data",n))})},E=function(n,t){return e(function(){var e,r;return P(n)?(r=document.createElement("canvas"),r.width=n.width,r.height=n.height,e=r.getContext("2d"),e.drawImage(n,0,0),t(e.getImageData(0,0,r.width,r.height))):t(R("Bad image",n))})},k=function(n,e){var t,r,o,i;if(P(n))return t=window.URL||window.webkitURL,r=document.createElement("a"),i=[n,e,"_blank"],r.href=i[0],r.download=i[1],r.target=i[2],o=document.createEvent("MouseEvent"),o.initMouseEvent("click",!0,!0,window,0,o.screenX,o.screenY,o.clientX,o.clientY,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,0,null),r.dispatchEvent(o)},x=function(n,t){return e(function(){var e;return P(n)?(e=document.createElement("img"),e.onload=function(){return t(e)},e.onerror=function(){return t(R("Wrong image format",n))},e.src=n):t(R("Bad URL",n))})},o=function(n,t,r){return e(function(){var e,o;return P(n)?(e=window.URL||window.webkitURL,e&&!t?r(e.createObjectURL(n)):(o=new FileReader,o.onload=function(){return r(this.result)},o.readAsDataURL(n))):r(R("Bad blob",n))})},i=function(n,t){return e(function(){var e,r,i,u,a,f;return f=__iced_k_noop,u=iced.findDeferral(arguments),P(n)?(function(e){a=new iced.Deferrals(e,{parent:u,filename:"--"}),o(n,!1,a.defer({assign_fn:function(){return function(){return i=arguments[0]}}(),lineno:103})),a._fulfill()}(function(){!function(n){a=new iced.Deferrals(n,{parent:u,filename:"--"}),x(i,a.defer({assign_fn:function(){return function(){return r=arguments[0]}}(),lineno:104})),a._fulfill()}(function(){!function(n){a=new iced.Deferrals(n,{parent:u,filename:"--"}),E(r,a.defer({assign_fn:function(){return function(){return r=arguments[0]}}(),lineno:105})),a._fulfill()}(function(){return e=window.URL||window.webkitURL,e.revokeObjectURL(i),t(r)})})}),void 0):t(R("Bad blob",n))})},r=function(n,e){var t;return P(n)?(t=new FileReader,t.onload=function(){return e(this.result)},t.onerror=function(){return e(R("File reading error",n))},t.readAsArrayBuffer(n)):e(R("Bad blob",n))},t=function(n){return null!=n&&(n.name=Math.random().toString(36).slice(2)+".jpg"),n},O=function(n,e){return null==e&&(e="image/jpeg"),P(n)?new Blob([n.buffer],{type:e}):R("Bad object",n)},z=function(n,e){return i(O(n),e)},U=function(n){var e;switch(null!=n?null!=(e=n.name)?e.split(".").pop().toLowerCase():void 0:void 0){case"gif":return"image/gif";case"png":return"image/png";case"jpg":case"jpeg":return"image/jpeg";default:return"application/octet-stream"}},L=function(n,t,r){return e(function(){var e;return this.wikicb={timeout:setTimeout(function(){return wikicb.panic()},15e3),func:function(n){return clearTimeout(wikicb.timeout),r(n)},panic:function(){return wikicb.func=function(){},r(R("Wikimedia not responding",JSON.stringify(n)))}},e=document.createElement("script"),e.type="text/javascript",e.src="http://commons.wikimedia.org/w/api.php?action=query&format=json&callback=wikicb.func&"+$.param(n),"function"==typeof t&&t({type:"wiki",url:e.src}),$("body").append(e)})},j=function(n,e,t){var r,o;return r=o=-1,this.xhr=new XMLHttpRequest,xhr.open("GET",n,!0),xhr.responseType="arraybuffer","function"==typeof e&&e({type:"progress",name:"download",url:n,progress:0}),xhr.onprogress=function(t){return t.lengthComputable&&(o=0|100*t.loaded/t.total,o>100&&(o=100)),o>r+9?(r=o,"function"==typeof e?e({type:"progress",name:"download",url:n,progress:o}):void 0):void 0},xhr.onabort=function(){return t({type:"error",code:-1})},xhr.onerror=function(){return t({type:"error",code:this.status})},xhr.onload=function(){return 200!==this.status?t({type:"error",code:this.status}):t({type:"done",buffer:this.response})},xhr.send()},I=function(n){var e,t,r,o,i,u,a,f,c,l,d,s,p,m,g;for(p={},p.first={x:0,y:1},r={x:1,y:1},u=o=1,i=.33,p.first.next=r,t=g=0;n>=0?n>g:g>n;t=n>=0?++g:--g)for(s=p.first;s.next;)l=s.next,m=i+Math.random()*(1-2*i),f=s.x+m*(l.x-s.x),e=.5>m?f-s.x:l.x-f,c=s.y+m*(l.y-s.y),c+=e*(2*Math.random()-1),a={x:f,y:c},u>c&&(u=c),c>o&&(o=c),a.next=l,s.next=a,s=l;if(o!==u)for(d=1/(o-u),s=p.first;s;)s.y=d*(s.y-u),s=s.next;else for(s=p.first;s;)s.y=1,s=s.next;return p},S=function(n,e,t,r,o,i,u,a,f,c,l,d){var s,p,m,g,h,v,w,y,_,b,$,D,k,x,C,M,T,A,J,R,S;for(x=0,S=.5/255,$="rgba("+u+","+a+","+f+",",D=Math.pow(2,d+1),p=(1-2*Math.random())*i,J=.5*(e+r),R=.5*(t+o),C=e-J,M=t-R,k=Math.sin(p),m=Math.cos(p),T=m*C-k*M,A=k*C+m*M,g=J+T,v=R+A,h=J-T,w=R-A,y=n.createLinearGradient(g,v,h,w),b=I(d),_=b.first;_;)s=c+_.y*l,S>s&&(s=0),s>1&&(s=1),y.addColorStop(x/D,$+s+")"),_=_.next,x++;return y},A=function(n,t,r){return e(function(){var e,o,i,u,a,f,c,l,d,s,p,m,g,h,v,w,y,_,b,$,D,k;for(f=document.createElement("canvas"),f.width=0|1.2*Math.sqrt(n)+1,f.height=0|Math.sqrt(n)*(1/1.2)+1,a=f.getContext("2d"),h=m=0,y=b=0,g=12,w=f.width,s=2*f.height,_=y+w/2,$=b+s/2,o=Math.PI/32,p=D=0;g>=0?g>D:D>g;p=g>=0?++D:--D){if(this.aborted)return r(R("Aborted by user"));k=function(){var n,e;for(e=[],n=0;2>=n;n++)e.push(0|256*Math.random());return e}(),v=k[0],c=k[1],i=k[2],a.globalCompositeOperation="lighter",e=2/g,d=1.1*s/2,l=8,u=0,a.fillStyle=S(a,_,$-d,_,$+d,o,v,c,i,u,e,l),a.fillRect(y,b,w,s),a.globalCompositeOperation="destination-over",h=0|100*(p+1)/g,h>m+9&&(m=h,"function"==typeof t&&t({type:"progress",name:"generate",progress:h}))}return r(a.getImageData(0,0,f.width,f.height))})},C=function(n){switch(n){case-1:return"Download aborted by user";case 0:return"Cross-domain request error";case 404:return"File not found";case 405:return"This is not JPEG";case 406:return"Bad URL specified";case 503:return"Over Google App Engine quota";default:return"Download error"}},T=function(n,t,r){return e(function(){var e,o,i,u,a,f,c,l,d,s,p,m=this;s=__iced_k_noop,l=iced.findDeferral(arguments),function(s){var g;o=0,g=function(s){var h,v;return h=s,v=function(){return iced.trampoline(function(){return++o,g(s)})},p=v,2>=o?m.aborted?r(R("Aborted by user")):(c=0|(new Date).getTime()/1e3,a=1104537600,u=c-2678400,c=0|Math.random()*(u-a)+a,a=[n>>2,n>>5,100][o],u=[n,n<<1,20971520][o],function(n){d=new iced.Deferrals(n,{parent:l,filename:"--"}),L({list:"allimages",aisort:"timestamp",aidir:"older",aistart:c,aiminsize:a,aimaxsize:u,aiprop:"url|dimensions|mime",ailimit:15*(o+1)},t,d.defer({assign_fn:function(){return function(){return e=arguments[0]}}(),lineno:289})),d._fulfill()}(function(){var o,u,c,s,m;if("undefined"!=typeof e&&null!==e?null!=(c=e.query)?c.allimages:void 0:void 0)for(f=null,a=1<<30,s=e.query.allimages,o=0,u=s.length;u>o;o++)if(i=s[o],"image/jpeg"===i.mime&&n<=(m=i.width*i.height)&&a>m){if(i.width*i.height<1e4)continue;a=i.width*i.height,f=i}!function(n){return P(f)?(function(n){d=new iced.Deferrals(n,{parent:l,filename:"--"}),j(f.url,t,d.defer({assign_fn:function(){return function(){return e=arguments[0]}}(),lineno:300})),d._fulfill()}(function(){return"done"!==e.type?r(R("Wikimedia download error",R(C(e.code),f.url))):r(e)}),void 0):n()}(p)}),void 0):h()},g(s)}(function(){return r(R("Could not find anything on Wikimedia"))})})},M=function(n,t,r){return e(function(){var e,o,i,u,a,f,c,l,d,s,p,m,g=this;if(l=__iced_k_noop,f=iced.findDeferral(arguments),u=["http://hugs-1.appspot.com/","http://hugs-2.appspot.com/"],!P(n))return r(R("Bad URL",n));for(/:\/\//.test(n)||(n="http://"+n),o=d=u.length-1;d>=0;o=d+=-1)a=u[o],u[o]+=btoa(n);for(o=s=u.length-1;s>=0;o=s+=-1)a=u[o],i=0|Math.random()*(o+1),m=[u[i],u[o]],u[o]=m[0],u[i]=m[1];!function(o){var i,l,d,s;d=[n].concat(u),l=d.length,i=0,s=function(n){var o,u;return o=n,u=function(){return iced.trampoline(function(){return++i,s(n)})},p=u,l>i?(a=d[i],g.aborted?r(R("Aborted by user")):(function(n){c=new iced.Deferrals(n,{parent:f,filename:"--"}),j(a,t,c.defer({assign_fn:function(){return function(){return e=arguments[0]}}(),lineno:319})),c._fulfill()}(function(){!function(n){return"done"!==e.type?n():(function(){o()}(n),void 0)}(function(){return p(t({type:"download",url:a,code:e.code}))})}),void 0)):o()},s(o)}(function(){return"done"!==("undefined"!=typeof e&&null!==e?e.type:void 0)?r(R("File download error",R(C(e.code),n))):r(e)})})},D=function(n,e,t){var r,o,i;i=[],("undefined"==typeof dark||null===dark)&&(this.dark=new Worker("build/dark.js"));for(r in n)if(o=n[r],o instanceof ArrayBuffer&&i.push(o),!P(o))return t(R("Bad object",o));return dark.onmessage=function(r){switch(r.data.type){case"error":return null!=n.buffer&&delete n.buffer,t(R("Dark.js error: "+r.data.name,R(r.data.msg,JSON.stringify(n))));case"progress":case"debug":return"function"==typeof e?e(r.data):void 0;default:return"function"==typeof e&&e(r.data),t(r.data)}},dark.postMessage(n,i)},K=function(n,e,t){var r,o,i,u,a;return o=n/e,t=Math.max(100,t),n>e&&(u=[t,0|t/o],i=u[0],r=u[1]),e>=n&&(a=[0|t*o,t],i=a[0],r=a[1]),[i,r]},F=function(n,t,r,o){return e(function(){var e,i,u,a,f,c,l,d,s,p,m=this;return d=__iced_k_noop,c=iced.findDeferral(arguments),P(n)?(p=K(n.width,n.height,100),f=p[0],i=p[1],function(d){var p;u=0,p=function(d){var g,h;return g=d,h=function(){return iced.trampoline(function(){return++u,p(d)})},s=h,5>=u?m.aborted?o(R("Aborted by user")):(function(t){l=new iced.Deferrals(t,{parent:c,filename:"--"}),B(n,f,i,l.defer({assign_fn:function(){return function(){return e=arguments[0]}}(),lineno:355})),l._fulfill()}(function(){!function(n){l=new iced.Deferrals(n,{parent:c,filename:"--"}),D({action:"encode",method:"steg",buffer:e,width:f,height:i},r,l.defer({assign_fn:function(){return function(){return e=arguments[0]}}(),lineno:357})),l._fulfill()}(function(){return P(e)?("function"==typeof r&&r({type:"probe",width:f,height:i,rate:100*e.csize/t}),function(n){return e.csize>=t?(function(){g()}(n),void 0):n()}(function(){!function(e){return f>=n.width||i>=n.height?(function(){g()}(e),void 0):e()}(function(){var r,o;return a=1.4*Math.sqrt(t/e.csize),r=[0|f*a,0|i*a],f=r[0],i=r[1],s(f>n.width||i>n.height?(o=[n.width,n.height],f=o[0],i=o[1],o):void 0)})}),void 0):o(R("Cannot encode",e))})}),void 0):g()},p(d)}(function(){return e.csize<t?o(R("Container too small",e)):B(n,f,i,o)}),void 0):o(R("Bad container",n))})},W=function(n,t,r,o,i){return e(function(){var e,u,a,f,c,l,d,s,p,m=this;return s=__iced_k_noop,l=iced.findDeferral(arguments),n instanceof ImageData||n instanceof ArrayBuffer?(null==n.width&&(n.width=0),null==n.height&&(n.height=0),i(n)):(function(s){return"rand"!==n?s():(function(n){var u,c,s,g;s=[4,2,0],c=s.length,u=0,g=function(n){var h,v;return h=n,v=function(){return iced.trampoline(function(){return++u,g(n)})},p=v,c>u?(a=s[u],m.aborted?i(R("Aborted by user")):(f=Math.max(4e4,r>>2<<a),t||(f=Math.min(2<<20,f)),function(n){d=new iced.Deferrals(n,{parent:l,filename:"--"}),T(f,o,d.defer({assign_fn:function(){return function(){return e=arguments[0]}}(),lineno:379})),d._fulfill()}(function(){!function(n){d=new iced.Deferrals(n,{parent:l,filename:"--"}),z(e,d.defer({assign_fn:function(){return function(){return e=arguments[0]}}(),lineno:380})),d._fulfill()}(function(){!function(n){return P(e)?(function(){h()}(n),void 0):n()}(p)})}),void 0)):h()},g(n)}(function(){!function(n){var o;return t&&("undefined"!=typeof e&&null!==e?e.width:void 0)*("undefined"!=typeof e&&null!==e?e.height:void 0)>=4*r?(o=K(e.width,e.height,0|2*Math.sqrt(r)),c=o[0],u=o[1],function(n){d=new iced.Deferrals(n,{parent:l,filename:"--"}),B(e,c,u,d.defer({assign_fn:function(){return function(){return e=arguments[0]}}(),lineno:385})),d._fulfill()}(n),void 0):n()}(function(){return P(e)?i(e):s()})}),void 0)}(function(){return t||(r=Math.min(2<<20,r)),A(Math.max(4e4,r),o,i)}),void 0)})},N=function(n,t,r,o){return e(function(){var e,i,u,a,f,c,l,d,s=this;return l=__iced_k_noop,f=iced.findDeferral(arguments),n instanceof ImageData?F(n,t,r,o):(function(i){return"rand"===n&&2097152>t?(a=Math.max(4e4,t<<4),function(n){var i;u=0,i=function(n){var l,p;return l=n,p=function(){return iced.trampoline(function(){return++u,i(n)})},d=p,2>=u?s.aborted?o(R("Aborted by user")):(function(n){c=new iced.Deferrals(n,{parent:f,filename:"--"}),T(a,r,c.defer({assign_fn:function(){return function(){return e=arguments[0]}}(),lineno:397})),c._fulfill()}(function(){!function(n){c=new iced.Deferrals(n,{parent:f,filename:"--"}),z(e,c.defer({assign_fn:function(){return function(){return e=arguments[0]}}(),lineno:398})),c._fulfill()}(function(){!function(n){c=new iced.Deferrals(n,{parent:f,filename:"--"}),F(e,t,r,c.defer({assign_fn:function(){return function(){return e=arguments[0]}}(),lineno:399})),c._fulfill()}(function(){return P(e)?o(e):d(a*=1.5)})})}),void 0):l()},i(n)}(i),void 0):i()}(function(){a=4e4,function(n){var l;u=0,l=function(n){var p,m;return p=n,m=function(){return iced.trampoline(function(){return++u,l(n)})},d=m,7>=u?s.aborted?o(R("Aborted by user")):(function(n){c=new iced.Deferrals(n,{parent:f,filename:"--"}),A(a,r,c.defer({assign_fn:function(){return function(){return i=arguments[0]}}(),lineno:405})),c._fulfill()}(function(){!function(n){c=new iced.Deferrals(n,{parent:f,filename:"--"}),D({action:"encode",method:"steg",buffer:i,width:"undefined"!=typeof i&&null!==i?i.width:void 0,height:"undefined"!=typeof i&&null!==i?i.height:void 0},r,c.defer({assign_fn:function(){return function(){return e=arguments[0]}}(),lineno:407})),c._fulfill()}(function(){return P(e)?("function"==typeof r&&r({type:"probe",width:i.width,height:i.height,rate:100*e.csize/t}),function(n){return e.csize>=t?(function(){p()}(n),void 0):n()}(function(){return d(a*=1.2*t/e.csize)}),void 0):o(R("Cannot encode",e))})}),void 0):p()},l(n)}(function(){return P(i)&&("undefined"!=typeof e&&null!==e?e.csize:void 0)>=t?o(i):o(R("Error probing container",n))})}),void 0)})},G=function(n,e,o){var u,a,f,c,l,d,s,p,m,g;return m=__iced_k_noop,s=iced.findDeferral(arguments),this.aborted=!1,c=n.data,d=null!=(g=n.pass)?g:"",a=null!=n.data&&null!=n.method,"function"==typeof e&&e({type:"progress",name:"init",request:n}),a?"steg"===n.method&&""===d?o(R("Empty password not allowed")):(function(t){return"rand"===c||"grad"===c?t():(function(n){return c instanceof Blob?n():(function(n){p=new iced.Deferrals(n,{parent:s,filename:"--",funcname:"processRequest"}),M(c,e,p.defer({assign_fn:function(){return function(){return c=arguments[0]}}(),lineno:428})),p._fulfill()}(function(){return n(c=O(c))}),void 0)}(function(){!function(e){"encode"===n.action&&"steg"===n.method?function(n){p=new iced.Deferrals(n,{parent:s,filename:"--",funcname:"processRequest"}),i(c,p.defer({assign_fn:function(){return function(){return c=arguments[0]}}(),lineno:431})),p._fulfill()}(e):function(n){p=new iced.Deferrals(n,{parent:s,filename:"--",funcname:"processRequest"}),r(c,p.defer({assign_fn:function(){return function(){return c=arguments[0]}}(),lineno:432})),p._fulfill()}(e)}(function(){return P(c)?t():o(R("Bad data",c))})}),void 0)}(function(){!function(e){return n.hide?(function(e){return n.hide instanceof Blob?(function(e){p=new iced.Deferrals(e,{parent:s,filename:"--",funcname:"processRequest"}),r(n.hide,p.defer({assign_fn:function(){return function(){return l=arguments[0]}}(),lineno:436})),p._fulfill()}(e),void 0):o(R("Encoding by URL not supported",n.hide))}(function(){return P(l)?e():o(R("Bad data",l))}),void 0):e()}(function(){!function(r){return"encode"!==n.action?r():(function(t){p=new iced.Deferrals(t,{parent:s,filename:"--",funcname:"processRequest"}),D({action:"encrypt",name:n.hide.name,pass:d,buffer:l},e,p.defer({assign_fn:function(){return function(){return u=arguments[0]}}(),lineno:441})),p._fulfill()}(function(){return P(u)?(function(t){return"steg"===n.method?t():(function(t){p=new iced.Deferrals(t,{parent:s,filename:"--",funcname:"processRequest"}),W(c,n.safe,u.size,e,p.defer({assign_fn:function(){return function(){return u=arguments[0]}}(),lineno:444})),p._fulfill()}(t),void 0)}(function(){!function(t){return"steg"!==n.method?t():(function(n){p=new iced.Deferrals(n,{parent:s,filename:"--",funcname:"processRequest"}),N(c,u.size,e,p.defer({assign_fn:function(){return function(){return u=arguments[0]}}(),lineno:446})),p._fulfill()}(t),void 0)}(function(){!function(t){p=new iced.Deferrals(t,{parent:s,filename:"--",funcname:"processRequest"}),D({action:"encode",method:n.method,buffer:u,width:null!=u?u.width:void 0,height:null!=u?u.height:void 0},e,p.defer({assign_fn:function(){return function(){return u=arguments[0]}}(),lineno:449})),p._fulfill()}(function(){return P(u)?o(t(O(u))):o(R("Cannot encode",u))})})}),void 0):o(R("Cannot encrypt",u))}),void 0)}(function(){!function(t){return"decode"!==n.action?t():(function(t){p=new iced.Deferrals(t,{parent:s,filename:"--",funcname:"processRequest"}),D({action:"decode",buffer:c,method:n.method},e,p.defer({assign_fn:function(){return function(){return u=arguments[0]}}(),lineno:454})),p._fulfill()}(function(){return P(u)?(function(n){p=new iced.Deferrals(n,{parent:s,filename:"--",funcname:"processRequest"}),D({action:"decrypt",pass:d},e,p.defer({assign_fn:function(){return function(){return u=arguments[0]}}(),lineno:456})),p._fulfill()}(function(){return P(u)?(f=O(u,U(u)),f.name=u.name,o(f)):o(R("Cannot decrypt",u))}),void 0):o(R("Cannot decode",u))}),void 0)}(function(){return o(R("Bad action",JSON.stringify(n)))})})})}),void 0):o(R("Missing argument",JSON.stringify(n)))},q={optAction:null,fileData:null,dropDown:null,optMethod:null,fileJpeg:null,dropTimer:null,optData:null,prvData:null,dropTarg:null,optJpeg:null,prvJpeg:null,optSafe:null,optPass:null},X=function(n){var e,t,r,o;return t=navigator.appName,o=navigator.userAgent,e=o.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\d+)*)/i),null!=e&&(r=o.match(/version\/([\d]+)/i)),null!=r&&(e[2]=r[1]),null!=e&&(e=[e[1],parseInt(e[2])]),null==e&&(e=[t,navigator.appVersion]),"Safari"===e[0]&&e[1]>5||"Chrome"===e[0]&&e[1]>24||"Firefox"===e[0]&&e[1]>16?!0:window.location.replace(n)},J=function(n){return n.stopPropagation(),n.preventDefault()},u=function(e){return 27===e.which?(J(e),n()):void 0},s=function(n){var e,t,r,o,i;if(J(n),!q.fileData&&(e=n.dataTransfer,null!=e?e.files:void 0))for(i=e.files,r=0,o=i.length;o>r;r++)return t=i[r],q.fileData=t,$("form").submit()},p=function(){return $('<input type="file">').click().change(function(){var n;return(null!=(n=this.files)?n.length:void 0)>0?(q.fileData=this.files[0],$("form").submit()):void 0})},w=function(n,t){return e(function(){var e,r,o,u,a,f,c,l,d;d=__iced_k_noop,c=iced.findDeferral(arguments),q[t]=null,n&&/image/.test(n.type)&&function(t){l=new iced.Deferrals(t,{parent:c,filename:"--"}),i(n,l.defer({assign_fn:function(){return function(){return e=arguments[0]}}(),lineno:533})),l._fulfill()}(function(){var n;n=K("undefined"!=typeof e&&null!==e?e.width:void 0,"undefined"!=typeof e&&null!==e?e.height:void 0,150),f=n[0],u=n[1],function(n){l=new iced.Deferrals(n,{parent:c,filename:"--"}),B(e,f,u,l.defer({assign_fn:function(){return function(){return e=arguments[0]}}(),lineno:535})),l._fulfill()}(function(){P(e)&&(o=document.createElement("canvas"),o.width=e.width,o.height=e.height,r=o.getContext("2d"),r.putImageData(e,0,0),function(n){l=new iced.Deferrals(n,{parent:c,filename:"--"}),x(o.toDataURL(),l.defer({assign_fn:function(){return function(){return a=arguments[0]}}(),lineno:542})),l._fulfill()}(function(){return P(a)?q[t]=a:void 0}))})})})},c=function(n,e){var t;return t=n.css("background-color"),(t=t.match(/rgb\(([\d]+), ([\d]+), ([\d]+)\)/))?(t[1]=parseInt(t[1])+e,t[2]=parseInt(t[2])+e,t[3]=parseInt(t[3])+e,t="rgb("+t[1]+", "+t[2]+", "+t[3]+")",n.css("background-color",t),/ctr-from/.test(n.next().attr("class"))&&n.next().css("border-left-color",t),/ctr-to/.test(n.prev().attr("class"))?n.prev().css("border-top-color",t).css("border-bottom-color",t):void 0):void 0},f=function(n,e,t){return e?$("<div>").html(e).addClass("ctr-float "+n).appendTo($("#control")).mouseenter(function(){return c($(this),-30)}).mouseleave(function(){return c($(this),30)}).click(t,d):$("<div>").addClass(n).appendTo("#control")},b=function(){var n,e;return n=0|(null!=(e=$("#control div.ctr-float:last").position())?e.left:void 0),$("input").css("padding-left",10+n),$("input").css("width",410-n)},g=function(n,e){var t,r,o;return r=function(t){var r;return r=$(t.target),13!==t.which||"password"===n||r.val()!==e&&""!==r.val()?r.prop("type")!==n?(r.removeAttr("type").prop("type",n).val(""),r.focus().select()):void 0:(p(),J(t))},t=function(n){return""===n.val()?n.removeAttr("type").prop("type","text").val(e):void 0},o=function(n){return"text"===n.prop("type")?setTimeout(function(){return $("form").submit()},100):void 0},$("input").clone().val(e).attr("type","text").keypress(r).blur(function(){return t($(this))}).click(function(){return $(this).select()}).on("paste",function(){return o($(this))}).on("drop",s).insertBefore($("input")).focus().select().next().remove()},d=function(n){var e,t,r,o,i;return r=function(){return q.dropDown&&q.dropDown.remove(),q.dropDown=null},e=function(){return q.dropTimer&&clearTimeout(q.dropTimer),q.dropTimer=q.dropTarg=null},i=function(){var n;return e(),null!=(n=q.dropDown)?n.fadeOut(200).queue(r):void 0},o=function(){return e(),q.dropTimer=setTimeout(i,3e3)},q.dropTarg===n.target?i():n.data===a?n.data($(n.target))&&i():(r()||o(),t=$("<div>").addClass("drop-arrow").add($("<div>").addClass("drop-content").html(n.data($(n.target)))),q.dropTarg=n.target,q.dropDown=$("<div>").html(t).css("position","absolute").css("top",n.pageY+20).css("left",n.pageX-75).mouseenter(e).mouseleave(o).click(i).appendTo("body").hide().fadeIn(200))},a=function(n){var e,t;return t=function(n){return n!==q.optAction?"decode"===n?($(".ctr-color-3").addClass("ctr-stop"),$(".ctr-color-4").remove(),$(".ctr-to-4").remove()):($(".ctr-color-3").removeClass("ctr-stop").next().remove(),f("ctr-from-3 ctr-to-4",null,null),f("ctr-color-4 ctr-stop",q.optJpeg,h),f("ctr-float",null,null)):void 0},"file"===q.optData?("decode"===q.optAction&&(e="encode"),"encode"===q.optAction&&(e="decode"),"encode"===e?($(".ctr-color-3").removeClass("ctr-stop").next().remove(),f("ctr-from-3 ctr-to-4",null,null),f("ctr-color-4 ctr-stop",q.optJpeg,h),f("ctr-float",null,null)):($(".ctr-color-3").addClass("ctr-stop"),$(".ctr-color-4").remove(),$(".ctr-to-4").remove()),q.optAction=e,n.html(e),b()):void 0},v=function(n){var e,t,r,o,i,u,a,f,c;return o=function(n,e){return n.html(e),e===q.optMethod?"checked":void 0},u=function(e){return q.optMethod=e.target.textContent,n.html(e.target.textContent),b()},i=function(n,e){return n.html(e),q.optSafe?void 0:"checked"},a=function(){return q.optSafe=!q.optSafe,!0},c=[$("<li>"),$("<li>"),$("<li>"),$("<li>")],e=c[0],t=c[1],r=c[2],f=c[3],e.click(u).addClass(o(e,"auto")),t.click(u).addClass(o(t,"join")),r.click(u).addClass(o(r,"steg")),f.click(a).addClass(i(f,"unsafe")),$("<ul>").append(e.add(t.add(r.add($("<hr>").add(f)))))},l=function(){var n,e;return e=$("<ul>"),n=function(){return m(y)},q.prvData&&e.append($(q.prvData)),"file"===q.optData?e.append($("<li>").html(q.fileData.name).add($("<li>").html((q.fileData.size>>10)+" Kb"))):e.append($("<li>").html(q.fileData)),e.append($("<hr>").add($("<li>").click(n).html("reset")))},h=function(n){var e,t,r,o,i,u,a,f,c;return o=function(n,e){return n.html(e),e===q.optJpeg?"checked":void 0},a='<input type="file" accept="image/*">',u=function(){return $(a).click().change(function(){var e;if(0!==(null!=(e=this.files)?e.length:void 0)&&/image/.test(this.files[0].type))return q.fileJpeg=this.files[0],w(this.files[0],"prvJpeg"),q.optJpeg="image",n.html("image"),b()})},i=function(e){var t;return t=e.target.textContent,"image"===t&&(t="rand"),q.optJpeg=t,n.html(t),b(),q.fileJpeg=q.prvJpeg=null,"image"===e.target.textContent?u():void 0},c=[$("<li>"),$("<li>"),$("<li>"),$("<ul>")],e=c[0],t=c[1],r=c[2],f=c[3],q.prvJpeg&&f.append($(q.prvJpeg).add($("<li>").html(q.fileJpeg.name).add($("<li>").html((q.fileJpeg.size>>10)+" Kb").add($("<hr>"))))),e.click(i).addClass(o(e,"rand")),t.click(i).addClass(o(t,"grad")),r.click(i).addClass(o(r,"image")),f.append(e.add(t.add(r)))},m=function(e){var t;d({target:q.dropTarg});for(t in q)q[t]=null;return $(document).off("keyup").keyup(u),document.ondrop=s,document.onclick=null,document.ondragover=document.ondragenter=J,$("#control").remove(),$("figure").remove(),$("#progress").remove(),$("form").fadeIn(400),$("h2").fadeIn(400),$("ul").fadeIn(400),$("h1").off("click").click(function(){return m(y)}),$("h3").html("").off("click").show(),$("input").prop("disabled",!1),n(),$("input").css("width",410).css("padding-left",10),g("text","Select image"),$("<div>").prop("id","control").appendTo("form"),$("<div>").prop("id","button").addClass("btn-upload").appendTo("#control").off("click").click(p).hide().fadeIn(400),$("form").off("submit").submit(function(n){var t,r,o,i,u,c;return J(n),w(q.fileData,"prvData"),r=function(){return g("password","Enter password")},t=function(){return localStorage.setItem("method",q.optMethod),localStorage.setItem("wikisafe",q.optSafe),localStorage.setItem("container",q.fileJpeg?"rand":q.optJpeg),"url"!==q.optData&&localStorage.setItem("action",q.optAction),$("h3").html(""),"password"===$("input").attr("type")&&(q.optPass=$("input").val()),q.optPass||"join"===q.optMethod?$("#control").fadeOut(400).queue(function(){return d({target:q.dropTarg}),null==q.fileJpeg&&(q.fileJpeg=q.optJpeg),$("#control").remove(),q.prvData=null,$("input").css("width",410).css("padding-left",10),g("password"),q.prvJpeg=null,$("input").prop("disabled",!0),$("<div>").prop("id","progress").appendTo("form"),e($("form").off("submit").submit(function(n){return J(n)}))}):$("h3").css("opacity",0).off("click").stop().animate({opacity:1},400).html("Empty password not allowed").delay(1e3).animate({opacity:0},400)},q.optAction=null!=(o=localStorage.getItem("action"))?o:"encode",q.fileData||(q.optAction="decode"),q.optData=q.fileData&&"file"||"url",q.fileData=q.fileData||$("input").val(),q.optMethod=null!=(i=localStorage.getItem("method"))?i:"auto",q.optJpeg=null!=(u=localStorage.getItem("container"))?u:"rand",q.optSafe=null!=(c=localStorage.getItem("wikisafe"))?c:"true",q.optSafe="true"===q.optSafe,f("ctr-color-1 ctr-start",q.optAction,a),f("ctr-from-1 ctr-to-2",null,null),f("ctr-color-2",q.optMethod,v),f("ctr-from-2 ctr-to-3",null,null),"encode"===q.optAction?(f("ctr-color-3",q.optData,l),f("ctr-from-3 ctr-to-4",null,null),f("ctr-color-4 ctr-stop",q.optJpeg,h)):f("ctr-color-3 ctr-stop",q.optData,l),f("ctr-float",null,null),$("input").val(""),b(),$("#button").removeClass("btn-upload").off("click"),$("#button").addClass("btn-process").click(t),$("form").off("submit").submit(function(n){return J(n),t()}),"file"===q.optData?r():setTimeout(r,100)&&$("#control").hide().fadeIn(400)})},_=function(n){var e,t,r,o;return t=null!=(r=n.name)?r:n.type,e=0|4.41*Math.min(Math.max(null!=(o=n.progress)?o:0,18),100),"progress"!==n.type?$("#progress").html(t):$("#progress").stop().animate({width:e},400).html(t)},y=function(){var n,e,t,r,i,u,a,f,c,l;l=__iced_k_noop,f=iced.findDeferral(arguments),t=function(n,e){var t;return t=e.name+'<br><span dir="ltr">'+((e.size>>10)+1)+" Kb</span>",$("<figure>").append(n).appendTo("section").append($("<figcaption>").html(t).css("max-width",$(n).width()-6)).click(function(){return k(a,e.name)}).css({opacity:0}).animate({opacity:1},400)},r=function(n){var e,t,r;return e=null!=(t=null!=(r=Y(n,!0))?r.error:void 0)?t:"Some error occured",$("h3").stop().css("opacity",1).html("Oops! "+e+" :("),document.onclick=function(){return m(y)}},u=/^(?!.*Chrome).*Safari.*$/.test(navigator.userAgent),e={action:q.optAction,pass:q.optPass,method:q.optMethod,safe:q.optSafe},"decode"===q.optAction&&(e.data=q.fileData),"encode"===q.optAction&&(e.data=q.fileJpeg),"encode"===q.optAction&&(e.hide=q.fileData),function(t){c=new iced.Deferrals(t,{parent:f,filename:"--",funcname:"controlProcess"}),G(e,_,c.defer({assign_fn:function(){return function(){return n=arguments[0]}}(),lineno:811})),c._fulfill()}(function(){!function(e){c=new iced.Deferrals(e,{parent:f,filename:"--",funcname:"controlProcess"}),o(n,u,c.defer({assign_fn:function(){return function(){return a=arguments[0]}}(),lineno:812})),c._fulfill()}(function(){return P(a)?(function(e){return/image/.test(n.type)?(function(n){c=new iced.Deferrals(n,{parent:f,filename:"--",funcname:"controlProcess"}),x(a,c.defer({assign_fn:function(){return function(){return i=arguments[0]}}(),lineno:814})),c._fulfill()}(e),void 0):e()}(function(){return"undefined"!=typeof i&&null!==i&&P(i)||(i=$("<div>")),$("h2").fadeOut(400),$("form").fadeOut(400),$("h3").fadeOut(400),$("ul").fadeOut(400),setTimeout(function(){return t(i,n)},450)}),void 0):r(a)})})},X("//browser-update.org/update.html"),jQuery.event.props.push("dataTransfer"),m(y),console.log("Privacy is necessary for an open society in the electronic age.\n... We cannot expect governments, corporations, or other large,\nfaceless organizations to grant us privacy ... We  must  defend\nour own privacy if we expect to have any. ... Cypherpunks write\ncode.  We know  that someone has to  write  software  to defend\nprivacy, and ... we're going to write it. (c) Eric Hughes, 1993")}.call(this);