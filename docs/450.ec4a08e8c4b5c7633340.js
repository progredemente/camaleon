"use strict";(self.webpackChunkcamaleon=self.webpackChunkcamaleon||[]).push([[450],{450:function(t,e,n){n.r(e);var r=n(822),o=n.n(r),a=n(745),i=n(379),c=n.n(i),s=n(795),l=n.n(s),u=n(569),f=n.n(u),d=n(565),p=n.n(d),h=n(216),m=n.n(h),y=n(589),g=n.n(y),v=n(424),w={};function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(o=r.key,a=void 0,a=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),"symbol"===b(a)?a:String(a)),r)}var o,a}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}w.styleTagTransform=g(),w.setAttributes=p(),w.insert=f().bind(null,"head"),w.domAPI=l(),w.insertStyleElement=m(),c()(v.Z,w),v.Z&&v.Z.locals&&v.Z.locals;var F=n(87),C={};C.styleTagTransform=g(),C.setAttributes=p(),C.insert=f().bind(null,"head"),C.domAPI=l(),C.insertStyleElement=m(),c()(F.Z,C),F.Z&&F.Z.locals&&F.Z.locals;var k=function(){var t,e,n,r,o,a,i,c,s,l,u,f,d={},p=[],h=[],m=5003,y=0,g=!1,v=0,w=0,b=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],E=[],x=d.LZWEncoder=function(o,a,i,c){t=o,e=a,n=i,r=Math.max(2,c)},B=function(t,e){E[f++]=t,f>=254&&R(e)},F=function(t){C(m),y=l+2,g=!0,T(l,t)},C=function(t){for(var e=0;e<t;++e)p[e]=-1},k=d.compress=function(t,e){var n,r,o,a,d,v;for(g=!1,c=S(i=s=t),u=1+(l=1<<t-1),y=l+2,f=0,a=j(),v=0,n=m;n<65536;n*=2)++v;v=8-v,C(m),T(l,e);t:for(;-1!=(o=j());)if(n=(o<<12)+a,p[r=o<<v^a]!=n){if(p[r]>=0){d=5003-r,0===r&&(d=1);do{if((r-=d)<0&&(r+=5003),p[r]==n){a=h[r];continue t}}while(p[r]>=0)}T(a,e),a=o,y<4096?(h[r]=y++,p[r]=n):F(e)}else a=h[r];T(a,e),T(u,e)},R=(d.encode=function(n){n.writeByte(r),o=t*e,a=0,k(r+1,n),n.writeByte(0)},function(t){f>0&&(t.writeByte(f),t.writeBytes(E,0,f),f=0)}),S=function(t){return(1<<t)-1},j=function(){return 0===o?-1:(--o,255&n[a++])},T=function(t,e){for(v&=b[w],w>0?v|=t<<w:v=t,w+=i;w>=8;)B(255&v,e),v>>=8,w-=8;if((y>c||g)&&(g?(c=S(i=s),g=!1):(++i,c=12==i?4096:S(i))),t==u){for(;w>0;)B(255&v,e),v>>=8,w-=8;R(e)}};return x.apply(this,arguments),d},R=function(){var t,e,n,r,o,a={},i=256,c=1024,s=1<<18,l=[],u=[],f=[],d=[],p=a.NeuQuant=function(t,a,c){var s,l;for(e=t,n=a,r=c,o=new Array(i),s=0;s<i;s++)o[s]=new Array(4),(l=o[s])[0]=l[1]=l[2]=(s<<12)/i,f[s]=256,u[s]=0},h=(a.map=function(t,e,n){var r,a,c,s,u,f,d;for(u=1e3,d=-1,a=(r=l[e])-1;r<i||a>=0;)r<i&&((c=(f=o[r])[1]-e)>=u?r=i:(r++,c<0&&(c=-c),(s=f[0]-t)<0&&(s=-s),(c+=s)<u&&((s=f[2]-n)<0&&(s=-s),(c+=s)<u&&(u=c,d=f[3])))),a>=0&&((c=e-(f=o[a])[1])>=u?a=-1:(a--,c<0&&(c=-c),(s=f[0]-t)<0&&(s=-s),(c+=s)<u&&((s=f[2]-n)<0&&(s=-s),(c+=s)<u&&(u=c,d=f[3]))));return d},a.process=function(){return function(){var o,a,i,s,l,u,f,p,h,v,w,b,E,x;for(n<1509&&(r=1),t=30+(r-1)/3,b=e,E=0,x=n,v=(w=n/(3*r))/100|0,p=c,(f=(u=2048)>>6)<=1&&(f=0),o=0;o<f;o++)d[o]=p*(256*(f*f-o*o)/(f*f));for(h=n<1509?3:n%499!=0?1497:n%491!=0?1473:n%487!=0?1461:1509,o=0;o<w;)if(i=(255&b[E+0])<<4,s=(255&b[E+1])<<4,l=(255&b[E+2])<<4,a=g(i,s,l),y(p,a,i,s,l),0!==f&&m(f,a,i,s,l),(E+=h)>=x&&(E-=n),0===v&&(v=1),++o%v==0)for(p-=p/t,(f=(u-=u/30)>>6)<=1&&(f=0),a=0;a<f;a++)d[a]=p*(256*(f*f-a*a)/(f*f))}(),h(),function(){var t,e,n,r,a,c,s,u;for(s=0,u=0,t=0;t<i;t++){for(n=t,r=(a=o[t])[1],e=t+1;e<i;e++)(c=o[e])[1]<r&&(n=e,r=c[1]);if(c=o[n],t!=n&&(e=c[0],c[0]=a[0],a[0]=e,e=c[1],c[1]=a[1],a[1]=e,e=c[2],c[2]=a[2],a[2]=e,e=c[3],c[3]=a[3],a[3]=e),r!=s){for(l[s]=u+t>>1,e=s+1;e<r;e++)l[e]=t;s=r,u=t}}for(l[s]=u+255>>1,e=s+1;e<256;e++)l[e]=255}(),function(){for(var t=[],e=new Array(i),n=0;n<i;n++)e[o[n][3]]=n;for(var r=0,a=0;a<i;a++){var c=e[a];t[r++]=o[c][0],t[r++]=o[c][1],t[r++]=o[c][2]}return t}()},function(){var t;for(t=0;t<i;t++)o[t][0]>>=4,o[t][1]>>=4,o[t][2]>>=4,o[t][3]=t}),m=function(t,e,n,r,a){var c,l,u,f,p,h,m;for((u=e-t)<-1&&(u=-1),(f=e+t)>i&&(f=i),c=e+1,l=e-1,h=1;c<f||l>u;){if(p=d[h++],c<f){m=o[c++];try{m[0]-=p*(m[0]-n)/s,m[1]-=p*(m[1]-r)/s,m[2]-=p*(m[2]-a)/s}catch(t){}}if(l>u){m=o[l--];try{m[0]-=p*(m[0]-n)/s,m[1]-=p*(m[1]-r)/s,m[2]-=p*(m[2]-a)/s}catch(t){}}}},y=function(t,e,n,r,a){var i=o[e];i[0]-=t*(i[0]-n)/c,i[1]-=t*(i[1]-r)/c,i[2]-=t*(i[2]-a)/c},g=function(t,e,n){var r,a,c,s,l,d,p,h,m,y;for(m=h=~(1<<31),p=d=-1,r=0;r<i;r++)(a=(y=o[r])[0]-t)<0&&(a=-a),(c=y[1]-e)<0&&(c=-c),a+=c,(c=y[2]-n)<0&&(c=-c),(a+=c)<h&&(h=a,d=r),(s=a-(u[r]>>12))<m&&(m=s,p=r),l=f[r]>>10,f[r]-=l,u[r]+=l<<10;return f[d]+=64,u[d]-=65536,p};return p.apply(this,arguments),a},S=function(){for(var t=0,e={};t<256;t++)e[t]=String.fromCharCode(t);function n(){this.bin=[]}n.prototype.getData=function(){for(var t="",n=this.bin.length,r=0;r<n;r++)t+=e[this.bin[r]];return t},n.prototype.writeByte=function(t){this.bin.push(t)},n.prototype.writeUTFBytes=function(t){for(var e=t.length,n=0;n<e;n++)this.writeByte(t.charCodeAt(n))},n.prototype.writeBytes=function(t,e,n){for(var r=n||t.length,o=e||0;o<r;o++)this.writeByte(t[o])};var r,o,a,i,c,s,l,u,f,d={},p=null,h=-1,m=0,y=!1,g=[],v=7,w=-1,b=!1,E=!0,x=!1,B=10,F="Generated by jsgif (https://github.com/antimatter15/jsgif/)",C=(d.setDelay=function(t){m=Math.round(t/10)},d.setDispose=function(t){t>=0&&(w=t)},d.setRepeat=function(t){t>=0&&(h=t)},d.setTransparent=function(t){p=t},d.setComment=function(t){F=t},d.addFrame=function(t,e){if(null===t||!y||null===i)throw new Error("Please call start method before calling addFrame");var n=!0;try{e?t instanceof ImageData?(c=t.data,x&&r==t.width&&o==t.height||S(t.width,t.height)):t instanceof Uint8ClampedArray?t.length==r*o*4?c=t:(console.log("Please set the correct size: ImageData length mismatch"),n=!1):(console.log("Please provide correct input"),n=!1):(c=t.getImageData(0,0,t.canvas.width,t.canvas.height).data,x||S(t.canvas.width,t.canvas.height)),I(),j(),E&&(A(),N(),h>=0&&D()),P(),""!==F&&M(),O(),E||N(),Z(),E=!1}catch(t){n=!1}return n},d.download=function(t){if(null===i||0==b)console.log("Please call start method and add frames and call finish method before calling download");else{t=void 0!==t?t.endsWith(".gif")?t:t+".gif":"download.gif";var e=document.createElement("a");e.download=t,e.href=URL.createObjectURL(new Blob([new Uint8Array(i.bin)],{type:"image/gif"})),e.click()}},d.finish=function(){if(!y)return!1;var t=!0;y=!1;try{i.writeByte(59),b=!0}catch(e){t=!1}return t},function(){a=0,c=null,s=null,l=null,f=null,b=!1,E=!0}),S=(d.setFrameRate=function(t){15!=t&&(m=Math.round(100/t))},d.setQuality=function(t){t<1&&(t=1),B=t},d.setSize=function(t,e){y&&!E||((r=t)<1&&(r=320),(o=e)<1&&(o=240),x=!0)}),j=(d.start=function(){C();var t=!0;b=!1,i=new n;try{i.writeUTFBytes("GIF89a")}catch(e){t=!1}return y=t},d.cont=function(){return C(),b=!1,i=new n,y=!0},function(){var t=s.length,e=t/3;l=[];var n=new R(s,t,B);f=n.process();for(var r=0,o=0;o<e;o++){var i=n.map(255&s[r++],255&s[r++],255&s[r++]);g[i]=!0,l[o]=i}s=null,u=8,v=7,null!==p&&(a=T(p))}),T=function(t){if(null===f)return-1;for(var e=(16711680&t)>>16,n=(65280&t)>>8,r=255&t,o=0,a=16777216,i=f.length,c=0;c<i;){var s=e-(255&f[c++]),l=n-(255&f[c++]),u=r-(255&f[c]),d=s*s+l*l+u*u,p=c/3;g[p]&&d<a&&(a=d,o=p),c++}return o},I=function(){var t=r,e=o;s=[];for(var n=c,a=0,i=0;i<e;i++)for(var l=0;l<t;l++){var u=i*t*4+4*l;s[a++]=n[u],s[a++]=n[u+1],s[a++]=n[u+2]}},P=function(){var t,e;i.writeByte(33),i.writeByte(249),i.writeByte(4),null===p?(t=0,e=0):(t=1,e=2),w>=0&&(e=7&w),e<<=2,i.writeByte(0|e|t),U(m),i.writeByte(a),i.writeByte(0)},M=function(){i.writeByte(33),i.writeByte(254),i.writeByte(F.length),i.writeUTFBytes(F),i.writeByte(0)},O=function(){i.writeByte(44),U(0),U(0),U(r),U(o),E?i.writeByte(0):i.writeByte(128|v)},A=function(){U(r),U(o),i.writeByte(240|v),i.writeByte(0),i.writeByte(0)},D=function(){i.writeByte(33),i.writeByte(255),i.writeByte(11),i.writeUTFBytes("NETSCAPE2.0"),i.writeByte(3),i.writeByte(1),U(h),i.writeByte(0)},N=function(){i.writeBytes(f);for(var t=768-f.length,e=0;e<t;e++)i.writeByte(0)},U=function(t){i.writeByte(255&t),i.writeByte(t>>8&255)},Z=function(){new k(r,o,l,u).encode(i)};return d.stream=function(){return i},d.setProperties=function(t,e){y=t,E=e},d},j=n(671),T=n(390);function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=B(t);if(e){var o=B(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(i,t);var e,n,a=I(i);function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a.call(this,t)).state={loaded:!1,gif:null,face:null,crop:null},e.scaleFactor=.25,e.side=1500,e.img=null,e.cropperModalRef=(0,r.createRef)(),e}return e=i,(n=[{key:"componentDidMount",value:function(){var t=this;this.img=new Image,this.img.src="./camaleon.png",this.img.onload=function(){t.setState({loaded:!0}),t.create()}}},{key:"setCrop",value:function(t){this.setState({crop:t},this.create)}},{key:"create",value:function(){var t=new S;t.setRepeat(0),t.setDelay(100),t.start();var e=document.createElement("canvas");e.width=this.side*this.scaleFactor,e.height=this.side*this.scaleFactor;for(var n=e.getContext("2d",{willReadFrequently:!0}),r=0;r<3;r++)for(var o=0;o<360;o+=30)this.clear(n,this.scaleFactor),this.draw(o+10*r,n,this.scaleFactor),t.addFrame(n);t.finish();var a=t.stream().getData();this.setState({gif:"data:image/gif;base64,".concat(window.btoa(a))})}},{key:"draw",value:function(t,e){this.state.crop&&e.drawImage(this.state.crop,0,0,this.state.crop.width,this.state.crop.height,112*this.scaleFactor,473*this.scaleFactor,598*this.scaleFactor,598*this.scaleFactor),this.drawBody(t,e),e.drawImage(this.img,0,0,this.side,this.side,0,0,this.side*this.scaleFactor,this.side*this.scaleFactor),this.drawUrl(e,this.scaleFactor)}},{key:"drawBody",value:function(t,e){var n=document.createElement("canvas");n.width=this.side*this.scaleFactor,n.height=this.side*this.scaleFactor;var r=n.getContext("2d");r.fillStyle="hsl(".concat(t,", 100%, 50%)"),r.fillRect(0,0,this.side,this.side),r.globalCompositeOperation="destination-in",r.drawImage(this.img,this.side,0,this.side,this.side,0,0,this.side*this.scaleFactor,this.side*this.scaleFactor),r.globalCompositeOperation="source-over",e.drawImage(n,0,0)}},{key:"drawUrl",value:function(t){t.font="".concat(80*this.scaleFactor,"px ComicTypo"),t.textAlign="center",t.fillStyle="rgba(0, 0, 0, .5)",t.fillText("progredemente.com/camaleon",this.side*this.scaleFactor/2,70*this.scaleFactor)}},{key:"clear",value:function(t){t.fillStyle="white",t.fillRect(0,0,this.side*this.scaleFactor,this.side*this.scaleFactor)}},{key:"download",value:function(){var t=document.createElement("a");t.download="camaleon.gif",t.href=this.state.gif,t.click()}},{key:"upload",value:function(){var t=this,e=document.createElement("input");e.type="file",e.accept="image/png, image/jpeg",e.onchange=function(){var n=new FileReader;n.addEventListener("load",(function(e){var n=new Image;n.src=e.target.result,n.onload=function(){t.setState({face:n},(function(){t.cropperModalRef.current.showModal()}))}})),n.readAsDataURL(e.files[0])},e.click()}},{key:"render",value:function(){var t=this;return o().createElement(o().Fragment,null,!this.state.loaded&&o().createElement("div",{className:"loading"},o().createElement("img",{src:"".concat("/resources","/camaleon.png"),alt:"Cargando"}),"Cargando"),this.state.loaded&&this.state.gif&&o().createElement("div",{className:"app"},o().createElement("div",{className:"title"},o().createElement("img",{src:"./camaleon.png",alt:"Camaleón"}),o().createElement("div",null,"por ",o().createElement("a",{href:"/",target:"_blank"},"progredemente"))),o().createElement("img",{src:this.state.gif,alt:"gif",className:"gif"}),o().createElement("div",{className:"buttons"},o().createElement("div",{className:"prg-button",onClick:function(){t.upload()}},"Elegir cara ",o().createElement(j.Icon,{icon:"F"})),this.state.face&&o().createElement(o().Fragment,null,o().createElement("div",{className:"prg-button",onClick:function(){t.cropperModalRef.current.showModal()}},"Editar cara ",o().createElement(j.Icon,{icon:"E"})),o().createElement("div",{className:"prg-button download",onClick:function(){t.download()}},"Descargar ",o().createElement(j.Icon,{icon:"D"})))),this.state.face&&o().createElement(T.ImageCropperModal,{setCrop:function(e){return t.setCrop(e)},face:this.state.face,ref:this.cropperModalRef})))}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),i}(r.Component),M=P;a.createRoot(document.getElementById("root")).render(o().createElement(o().StrictMode,null,o().createElement(M,null)))},87:function(t,e,n){var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,".app {\n  height: 100%;\n  color: var(--primary-color);\n}\n\n.gif {\n  max-width: 100%;\n  display: block;\n  margin: 0 auto;\n}\n\n.buttons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  max-width: 500px;\n  margin: 10px auto;\n}\n\n.download {\n  --prg-button-background-color: var(--primary-color);\n  --prg-button-text-color: white;\n}\n\n.buttons > .prg-button {\n  flex: 40%;\n}\n\n\n.buttons > .prg-button.download {\n  flex: 100%;\n}\n\n.loading {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.loading > img {\n  width: 200px;\n}\n\n.title {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  padding: 10px 0;\n  max-width: 350px;\n  color: var(--secondary-color);\n}\n\n.title > img {\n  height: 240px;\n  width: 325px;\n  object-position: -3001px -1px;\n  object-fit: none;\n  margin-bottom: 10px;\n}\n\n.title > div {\n  margin-left: auto;\n  font-size: .75em;\n}\n\n.image-cropper-modal {\n  --image-cropper-modal-background-shade-color: rgba(18, 94, 13, 0.5);\n}",""]),e.Z=i},424:function(t,e,n){var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"* {\n    font-family: ComicTypo;\n    box-sizing: border-box;\n    --primary-color: #2ef020;\n    --secondary-color: #a1f09b;\n    /*--image-cropper-modal-background-shade-color: rgba(18, 94, 13, 0.5) !important;*/\n}\n\nhtml, body, #root {\n  height: 100%;\n}\n\nbody {\n    margin: 0;\n    font-size: 1.5em;\n}\n\na {\n    text-decoration: none;\n    color: var(--primary-color);\n}\n\n.prg-button {\n    --prg-button-background-color: var(--secondary-color);\n    --prg-button-text-color: black;\n}\n\n.image-cropper-modal {\n    --image-cropper-modal-background-shade-color: rgba(18, 94, 13, 0.5) !important;  \n}",""]),e.Z=i},645:function(t){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:function(t){t.exports=function(t){return t[1]}},745:function(t,e,n){var r=n(468);e.createRoot=r.createRoot,e.hydrateRoot=r.hydrateRoot},379:function(t){var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,f="".concat(l," ").concat(u);a[l]=u+1;var d=n(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(p);else{var h=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:f,updater:h,references:1})}i.push(f)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),l=0;l<a.length;l++){var u=n(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:function(t){var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(t){t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:function(t,e,n){t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:function(t){t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:function(t){t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}}]);