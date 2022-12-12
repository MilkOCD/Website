"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94],{4584:function(e,n,t){var r=t(7592),a=t(7829),o=t(178),i=t(6417),s=(0,r.ZP)(a.Z)((function(e){var n=e.theme;return"\n        padding: ".concat(n.spacing(4),";\n")}));n.Z=function(e){var n=e.children;return(0,i.jsx)(s,{className:"MuiPageTitle-wrapper",style:{margin:0},children:(0,i.jsx)(o.Z,{maxWidth:"lg",children:n})})}},249:function(e,n,t){var r=t(1413),a=t(5987),o=t(3033),i=t(9019),s=t(1113),c=t(4193),d=t(6417),l=["heading","subHeading","docs"];n.Z=function(e){var n=e.heading,t=void 0===n?"":n,u=e.subHeading,Z=void 0===u?"":u,v=e.docs,h=void 0===v?"":v,m=(0,a.Z)(e,l);return(0,d.jsxs)(i.ZP,(0,r.Z)((0,r.Z)({container:!0,justifyContent:"space-between",alignItems:"center"},m),{},{children:[(0,d.jsxs)(i.ZP,{item:!0,children:[(0,d.jsx)(s.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:t}),(0,d.jsx)(s.Z,{variant:"subtitle2",children:Z})]}),(0,d.jsx)(i.ZP,{item:!0,children:(0,d.jsxs)(c.Z,{href:h,target:"_blank",rel:"noopener noreferrer",sx:{mt:{xs:2,md:0}},variant:"contained",startIcon:(0,d.jsx)(o.Z,{fontSize:"small"}),children:[t," Documentation"]})})]}))}},7094:function(e,n,t){t.r(n);var r=t(9439),a=t(5964),o=t(7313),i=t(249),s=t(4584),c=t(178),d=t(9019),l=t(3428),u=t(4641),Z=t(9536),v=t(3405),h=t(4193),m=t(3585),p=t(8310),f=t(7216),x=t(2600),j=t(3213),g=t(3604),b=t(6149),C=t(1163),y=t(5211),M=t(1113),P=t(9994),w=t(6417),N=["username@gmail.com","user02@gmail.com"];function R(e){var n=e.onClose,t=e.selectedValue,r=e.open,a=function(e){n(e)};return(0,w.jsxs)(b.Z,{onClose:function(){n(t)},open:r,children:[(0,w.jsx)(g.Z,{children:"Set backup account"}),(0,w.jsxs)(p.Z,{sx:{pt:0},children:[N.map((function(e){return(0,w.jsxs)(f.ZP,{button:!0,onClick:function(){return a(e)},children:[(0,w.jsx)(x.Z,{children:(0,w.jsx)(m.Z,{sx:{bgcolor:P.Z[100],color:P.Z[600]},children:(0,w.jsx)(C.Z,{})})}),(0,w.jsx)(j.Z,{primary:e})]},e)})),(0,w.jsxs)(f.ZP,{autoFocus:!0,button:!0,onClick:function(){return a("addAccount")},children:[(0,w.jsx)(x.Z,{children:(0,w.jsx)(m.Z,{children:(0,w.jsx)(y.Z,{})})}),(0,w.jsx)(j.Z,{primary:"Add account"})]})]})]})}n.default=function(){var e=(0,o.useState)(!1),n=(0,r.Z)(e,2),t=n[0],m=n[1],p=(0,o.useState)(N[1]),f=(0,r.Z)(p,2),x=f[0],j=f[1];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(a.ql,{children:(0,w.jsx)("title",{children:"Modals - Components"})}),(0,w.jsx)(s.Z,{children:(0,w.jsx)(i.Z,{heading:"Modals",subHeading:"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.",docs:"https://material-ui.com/components/dialogs/"})}),(0,w.jsx)(c.Z,{maxWidth:"lg",children:(0,w.jsx)(d.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsxs)(l.Z,{children:[(0,w.jsx)(u.Z,{title:"Basic Dialog"}),(0,w.jsx)(Z.Z,{}),(0,w.jsxs)(v.Z,{children:[(0,w.jsxs)(M.Z,{variant:"subtitle1",component:"div",children:["Selected: ",x]}),(0,w.jsx)("br",{}),(0,w.jsx)(h.Z,{variant:"outlined",onClick:function(){m(!0)},children:"Open simple dialog"}),(0,w.jsx)(R,{selectedValue:x,open:t,onClose:function(e){m(!1),j(e)}})]})]})})})})]})}},5211:function(e,n,t){var r=t(4836);n.Z=void 0;var a=r(t(5045)),o=t(6417),i=(0,a.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.Z=i},3033:function(e,n,t){var r=t(4836);n.Z=void 0;var a=r(t(5045)),o=t(6417),i=(0,a.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddTwoTone");n.Z=i},1163:function(e,n,t){var r=t(4836);n.Z=void 0;var a=r(t(5045)),o=t(6417),i=(0,a.default)((0,o.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");n.Z=i},3405:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(7462),a=t(3366),o=t(7313),i=t(3061),s=t(1921),c=t(7592),d=t(7342),l=t(2298);function u(e){return(0,l.Z)("MuiCardContent",e)}(0,t(7430).Z)("MuiCardContent",["root"]);var Z=t(6417),v=["className","component"],h=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),m=o.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiCardContent"}),o=t.className,c=t.component,l=void 0===c?"div":c,m=(0,a.Z)(t,v),p=(0,r.Z)({},t,{component:l}),f=function(e){var n=e.classes;return(0,s.Z)({root:["root"]},u,n)}(p);return(0,Z.jsx)(h,(0,r.Z)({as:l,className:(0,i.Z)(f.root,o),ownerState:p,ref:n},m))}))},4641:function(e,n,t){t.d(n,{Z:function(){return b}});var r=t(4942),a=t(3366),o=t(7462),i=t(7313),s=t(3061),c=t(1921),d=t(1113),l=t(7342),u=t(7592),Z=t(2298);function v(e){return(0,Z.Z)("MuiCardHeader",e)}var h=(0,t(7430).Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=t(6417),p=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,n){var t;return(0,o.Z)((t={},(0,r.Z)(t,"& .".concat(h.title),n.title),(0,r.Z)(t,"& .".concat(h.subheader),n.subheader),t),n.root)}})({display:"flex",alignItems:"center",padding:16}),x=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,n){return n.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,n){return n.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,n){return n.content}})({flex:"1 1 auto"}),b=i.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiCardHeader"}),r=t.action,i=t.avatar,u=t.className,Z=t.component,h=void 0===Z?"div":Z,b=t.disableTypography,C=void 0!==b&&b,y=t.subheader,M=t.subheaderTypographyProps,P=t.title,w=t.titleTypographyProps,N=(0,a.Z)(t,p),R=(0,o.Z)({},t,{component:h,disableTypography:C}),k=function(e){var n=e.classes;return(0,c.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},v,n)}(R),H=P;null==H||H.type===d.Z||C||(H=(0,m.jsx)(d.Z,(0,o.Z)({variant:i?"body2":"h5",className:k.title,component:"span",display:"block"},w,{children:H})));var S=y;return null==S||S.type===d.Z||C||(S=(0,m.jsx)(d.Z,(0,o.Z)({variant:i?"body2":"body1",className:k.subheader,color:"text.secondary",component:"span",display:"block"},M,{children:S}))),(0,m.jsxs)(f,(0,o.Z)({className:(0,s.Z)(k.root,u),as:h,ref:n,ownerState:R},N,{children:[i&&(0,m.jsx)(x,{className:k.avatar,ownerState:R,children:i}),(0,m.jsxs)(g,{className:k.content,ownerState:R,children:[H,S]}),r&&(0,m.jsx)(j,{className:k.action,ownerState:R,children:r})]}))}))},3428:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(7462),a=t(3366),o=t(7313),i=t(3061),s=t(1921),c=t(7592),d=t(7342),l=t(2295),u=t(2298);function Z(e){return(0,u.Z)("MuiCard",e)}(0,t(7430).Z)("MuiCard",["root"]);var v=t(6417),h=["className","raised"],m=(0,c.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),p=o.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiCard"}),o=t.className,c=t.raised,l=void 0!==c&&c,u=(0,a.Z)(t,h),p=(0,r.Z)({},t,{raised:l}),f=function(e){var n=e.classes;return(0,s.Z)({root:["root"]},Z,n)}(p);return(0,v.jsx)(m,(0,r.Z)({className:(0,i.Z)(f.root,o),elevation:l?8:void 0,ref:n,ownerState:p},u))}))}}]);