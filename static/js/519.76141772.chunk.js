"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[519],{4584:function(e,n,r){var t=r(7592),o=r(7829),a=r(178),i=r(6417),s=(0,t.ZP)(o.Z)((function(e){var n=e.theme;return"\n        padding: ".concat(n.spacing(4),";\n")}));n.Z=function(e){var n=e.children;return(0,i.jsx)(s,{className:"MuiPageTitle-wrapper",style:{margin:0},children:(0,i.jsx)(a.Z,{maxWidth:"lg",children:n})})}},249:function(e,n,r){var t=r(1413),o=r(5987),a=r(3033),i=r(9019),s=r(1113),d=r(4193),c=r(6417),l=["heading","subHeading","docs"];n.Z=function(e){var n=e.heading,r=void 0===n?"":n,u=e.subHeading,p=void 0===u?"":u,m=e.docs,x=void 0===m?"":m,h=(0,o.Z)(e,l);return(0,c.jsxs)(i.ZP,(0,t.Z)((0,t.Z)({container:!0,justifyContent:"space-between",alignItems:"center"},h),{},{children:[(0,c.jsxs)(i.ZP,{item:!0,children:[(0,c.jsx)(s.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:r}),(0,c.jsx)(s.Z,{variant:"subtitle2",children:p})]}),(0,c.jsx)(i.ZP,{item:!0,children:(0,c.jsxs)(d.Z,{href:x,target:"_blank",rel:"noopener noreferrer",sx:{mt:{xs:2,md:0}},variant:"contained",startIcon:(0,c.jsx)(a.Z,{fontSize:"small"}),children:[r," Documentation"]})})]}))}},5519:function(e,n,r){r.r(n),r.d(n,{default:function(){return L}});var t=r(5964),o=r(249),a=r(4584),i=r(178),s=r(9019),d=r(3428),c=r(4641),l=r(9536),u=r(3405),p=r(4506),m=r(9439),x=r(4942),h=r(3366),f=r(7462),Z=r(7313),b=(r(6214),r(3061)),v=r(1921),g=r(7592),j=r(7342),R=r(5033),y=r(2295),w=r(3417),A=r(3800),C=r(2298),S=r(7430);function M(e){return(0,C.Z)("MuiAccordion",e)}var N=(0,S.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),k=r(6417),G=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],P=(0,g.ZP)(y.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[(0,x.Z)({},"& .".concat(N.region),n.region),n.root,!r.square&&n.rounded,!r.disableGutters&&n.gutters]}})((function(e){var n,r=e.theme,t={duration:r.transitions.duration.shortest};return n={position:"relative",transition:r.transitions.create(["margin"],t),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(r.vars||r).palette.divider,transition:r.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&:before":{display:"none"}}},(0,x.Z)(n,"&.".concat(N.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),(0,x.Z)(n,"&.".concat(N.disabled),{backgroundColor:(r.vars||r).palette.action.disabledBackground}),n}),(function(e){var n=e.theme,r=e.ownerState;return(0,f.Z)({},!r.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(n.vars||n).shape.borderRadius,borderTopRightRadius:(n.vars||n).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(n.vars||n).shape.borderRadius,borderBottomRightRadius:(n.vars||n).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!r.disableGutters&&(0,x.Z)({},"&.".concat(N.expanded),{margin:"16px 0"}))})),I=Z.forwardRef((function(e,n){var r=(0,j.Z)({props:e,name:"MuiAccordion"}),t=r.children,o=r.className,a=r.defaultExpanded,i=void 0!==a&&a,s=r.disabled,d=void 0!==s&&s,c=r.disableGutters,l=void 0!==c&&c,u=r.expanded,x=r.onChange,g=r.square,y=void 0!==g&&g,C=r.TransitionComponent,S=void 0===C?R.Z:C,N=r.TransitionProps,I=(0,h.Z)(r,G),T=(0,A.Z)({controlled:u,default:i,name:"Accordion",state:"expanded"}),V=(0,m.Z)(T,2),q=V[0],B=V[1],W=Z.useCallback((function(e){B(!q),x&&x(e,!q)}),[q,x,B]),D=Z.Children.toArray(t),H=(0,p.Z)(D),L=H[0],E=H.slice(1),z=Z.useMemo((function(){return{expanded:q,disabled:d,disableGutters:l,toggle:W}}),[q,d,l,W]),F=(0,f.Z)({},r,{square:y,disabled:d,disableGutters:l,expanded:q}),O=function(e){var n=e.classes,r={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return(0,v.Z)(r,M,n)}(F);return(0,k.jsxs)(P,(0,f.Z)({className:(0,b.Z)(O.root,o),ref:n,ownerState:F,square:y},I,{children:[(0,k.jsx)(w.Z.Provider,{value:z,children:L}),(0,k.jsx)(S,(0,f.Z)({in:q,timeout:"auto"},N,{children:(0,k.jsx)("div",{"aria-labelledby":L.props.id,id:L.props["aria-controls"],role:"region",className:O.region,children:E})}))]}))})),T=r(7182);function V(e){return(0,C.Z)("MuiAccordionDetails",e)}(0,S.Z)("MuiAccordionDetails",["root"]);var q=["className"],B=(0,g.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),W=Z.forwardRef((function(e,n){var r=(0,j.Z)({props:e,name:"MuiAccordionDetails"}),t=r.className,o=(0,h.Z)(r,q),a=r,i=function(e){var n=e.classes;return(0,v.Z)({root:["root"]},V,n)}(a);return(0,k.jsx)(B,(0,f.Z)({className:(0,b.Z)(i.root,t),ref:n,ownerState:a},o))})),D=r(1113),H=r(6306);var L=function(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(t.ql,{children:(0,k.jsx)("title",{children:"Accordions - Components"})}),(0,k.jsx)(a.Z,{children:(0,k.jsx)(o.Z,{heading:"Accordions",subHeading:"Accordions contain creation flows and allow lightweight editing of an element.",docs:"https://material-ui.com/components/accordion/"})}),(0,k.jsx)(i.Z,{maxWidth:"lg",children:(0,k.jsx)(s.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:(0,k.jsx)(s.ZP,{item:!0,xs:12,children:(0,k.jsxs)(d.Z,{children:[(0,k.jsx)(c.Z,{title:"Basic Example"}),(0,k.jsx)(l.Z,{}),(0,k.jsxs)(u.Z,{children:[(0,k.jsxs)(I,{children:[(0,k.jsx)(T.Z,{expandIcon:(0,k.jsx)(H.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,k.jsx)(D.Z,{children:"Accordion 1"})}),(0,k.jsx)(W,{children:(0,k.jsx)(D.Z,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),(0,k.jsxs)(I,{children:[(0,k.jsx)(T.Z,{expandIcon:(0,k.jsx)(H.Z,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:(0,k.jsx)(D.Z,{children:"Accordion 2"})}),(0,k.jsx)(W,{children:(0,k.jsx)(D.Z,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),(0,k.jsx)(I,{disabled:!0,children:(0,k.jsx)(T.Z,{expandIcon:(0,k.jsx)(H.Z,{}),"aria-controls":"panel3a-content",id:"panel3a-header",children:(0,k.jsx)(D.Z,{children:"Disabled Accordion"})})})]})]})})})})]})}},3033:function(e,n,r){var t=r(4836);n.Z=void 0;var o=t(r(5045)),a=r(6417),i=(0,o.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddTwoTone");n.Z=i},7182:function(e,n,r){r.d(n,{Z:function(){return j}});var t=r(4942),o=r(3366),a=r(7462),i=r(7313),s=r(3061),d=r(1921),c=r(7592),l=r(7342),u=r(7999),p=r(3417),m=r(2298);function x(e){return(0,m.Z)("MuiAccordionSummary",e)}var h=(0,r(7430).Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),f=r(6417),Z=["children","className","expandIcon","focusVisibleClassName","onClick"],b=(0,c.ZP)(u.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){var n,r=e.theme,o=e.ownerState,i={duration:r.transitions.duration.shortest};return(0,a.Z)((n={display:"flex",minHeight:48,padding:r.spacing(0,2),transition:r.transitions.create(["min-height","background-color"],i)},(0,t.Z)(n,"&.".concat(h.focusVisible),{backgroundColor:(r.vars||r).palette.action.focus}),(0,t.Z)(n,"&.".concat(h.disabled),{opacity:(r.vars||r).palette.action.disabledOpacity}),(0,t.Z)(n,"&:hover:not(.".concat(h.disabled,")"),{cursor:"pointer"}),n),!o.disableGutters&&(0,t.Z)({},"&.".concat(h.expanded),{minHeight:64}))})),v=(0,c.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,n){return n.content}})((function(e){var n=e.theme,r=e.ownerState;return(0,a.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!r.disableGutters&&(0,t.Z)({transition:n.transitions.create(["margin"],{duration:n.transitions.duration.shortest})},"&.".concat(h.expanded),{margin:"20px 0"}))})),g=(0,c.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,n){return n.expandIconWrapper}})((function(e){var n=e.theme;return(0,t.Z)({display:"flex",color:(n.vars||n).palette.action.active,transform:"rotate(0deg)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest})},"&.".concat(h.expanded),{transform:"rotate(180deg)"})})),j=i.forwardRef((function(e,n){var r=(0,l.Z)({props:e,name:"MuiAccordionSummary"}),t=r.children,c=r.className,u=r.expandIcon,m=r.focusVisibleClassName,h=r.onClick,j=(0,o.Z)(r,Z),R=i.useContext(p.Z),y=R.disabled,w=void 0!==y&&y,A=R.disableGutters,C=R.expanded,S=R.toggle,M=(0,a.Z)({},r,{expanded:C,disabled:w,disableGutters:A}),N=function(e){var n=e.classes,r=e.expanded,t=e.disabled,o=e.disableGutters,a={root:["root",r&&"expanded",t&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]};return(0,d.Z)(a,x,n)}(M);return(0,f.jsxs)(b,(0,a.Z)({focusRipple:!1,disableRipple:!0,disabled:w,component:"div","aria-expanded":C,className:(0,s.Z)(N.root,c),focusVisibleClassName:(0,s.Z)(N.focusVisible,m),onClick:function(e){S&&S(e),h&&h(e)},ref:n,ownerState:M},j,{children:[(0,f.jsx)(v,{className:N.content,ownerState:M,children:t}),u&&(0,f.jsx)(g,{className:N.expandIconWrapper,ownerState:M,children:u})]}))}))},3417:function(e,n,r){var t=r(7313).createContext({});n.Z=t}}]);