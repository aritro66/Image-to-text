(this.webpackJsonpimagetotext=this.webpackJsonpimagetotext||[]).push([[0],{101:function(e,t,c){},107:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),i=c(14),n=c.n(i),r=(c(69),c(6)),j=c(60),l=c.n(j),d=c.p+"static/media/img.b1110424.jpg",o=c.p+"static/media/arrow.ba91d9f6.jpg",b=c.p+"static/media/text.dbf02e8f.jpg",O=c(64),x=c(15),h=c(51),g=c(43),m=c(62),u=c(63),p=c(25),f=(c(101),c(1));var v=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(""),n=Object(r.a)(i,2),j=n[0],v=n[1],I=Object(a.useState)(""),y=Object(r.a)(I,2),C=y[0],w=y[1],S=Object(a.useState)(!1),L=Object(r.a)(S,2),k=L[0],F=L[1],R=Object(a.useState)(!1),N=Object(r.a)(R,2),T=N[0],U=N[1],z=Object(a.useState)(!1),A=Object(r.a)(z,2),B=A[0],E=A[1],J=Object(a.useRef)(null);return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("main",{className:"App-main",children:[Object(f.jsxs)("header",{id:"headingstyle",children:[Object(f.jsx)("h1",{id:"heading",children:"Image to Text Converter"}),Object(f.jsxs)("div",{id:"process",children:[Object(f.jsx)("img",{src:d}),Object(f.jsx)("img",{src:o}),Object(f.jsx)("img",{src:b})]})]}),Object(f.jsxs)("div",{id:"file",children:[Object(f.jsx)("h2",{children:"Choose File"}),Object(f.jsxs)(O.a,{variant:"danger",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)(m.a,{animation:"grow",variant:"danger",size:"sm"})," Please choose only image file"]}),Object(f.jsxs)(x.a,{as:"ol",numbered:!0,children:[Object(f.jsx)(x.a.Item,{as:"li",variant:"danger",children:".jpg"}),Object(f.jsx)(x.a.Item,{as:"li",variant:"danger",children:".jpeg"}),Object(f.jsx)(x.a.Item,{as:"li",variant:"danger",children:".jfif"}),Object(f.jsx)(x.a.Item,{as:"li",variant:"danger",children:".pjpeg"}),Object(f.jsx)(x.a.Item,{as:"li",variant:"danger",children:".pjp"}),Object(f.jsx)(x.a.Item,{as:"li",variant:"danger",children:".png"}),Object(f.jsx)(x.a.Item,{as:"li",variant:"danger",children:".svg"}),Object(f.jsx)(x.a.Item,{as:"li",variant:"danger",children:".webp"})]})]}),Object(f.jsx)("hr",{}),Object(f.jsxs)(g.a.Group,{controlId:"formFileLg",className:"mb-3",children:[Object(f.jsx)(g.a.Label,{children:"Click to choose"}),Object(f.jsx)(g.a.Control,{type:"file",size:"lg",ref:J})]}),Object(f.jsx)(h.a,{variant:"outline-success",onClick:function(){if(console.log("undefined"===typeof J.current.files[0]),"undefined"===typeof J.current.files[0])console.log(1),U(!0);else{console.log(2);var e=URL.createObjectURL(J.current.files[0]);F(!0),E(!1),w(""),l.a.recognize(e,"eng",{logger:function(e){v(e.status),s(100*parseFloat(e.progress))}}).catch((function(e){console.error(e)})).then((function(e){console.log(e);var t=e.data.text;w(t),F(!1),E(!0)}))}},children:"Convert To Text"})]}),Object(f.jsxs)("div",{id:"output",children:[Object(f.jsx)("h3",{children:"Extracted text"}),Object(f.jsxs)("div",{className:"text-box",children:[k&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("p",{children:[j," "]}),Object(f.jsx)(u.a,{striped:!0,variant:"success",animated:!0,now:c})]}),Object(f.jsxs)("pre",{children:[" ",C," "]})]})]}),Object(f.jsx)("div",{id:"image-selected",children:B?Object(f.jsx)("img",{src:URL.createObjectURL(J.current.files[0]),alt:"logo"}):""}),Object(f.jsxs)(p.a,{show:T,children:[Object(f.jsx)(p.a.Header,{children:Object(f.jsx)(p.a.Title,{children:"Modal heading"})}),Object(f.jsx)(p.a.Body,{children:"Please choose one image file!!!"}),Object(f.jsx)(p.a.Footer,{children:Object(f.jsx)(h.a,{variant:"secondary",onClick:function(){return U(!1)},children:"Close"})})]})]})})};c(106);n.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root"))},69:function(e,t,c){}},[[107,1,2]]]);
//# sourceMappingURL=main.7a16ddee.chunk.js.map