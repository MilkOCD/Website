"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[475],{6306:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5045)),i=n(6417),a=(0,o.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=a},1872:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7462),o=n(3366),i=n(7313),a=n(3061),s=n(1921),d=n(7592),c=n(7342),u=n(2298);function l(e){return(0,u.Z)("MuiAccordionDetails",e)}(0,n(7430).Z)("MuiAccordionDetails",["root"]);var p=n(6417),f=["className"],m=(0,d.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),v=i.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiAccordionDetails"}),i=n.className,d=(0,o.Z)(n,f),u=n,v=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},l,t)}(u);return(0,p.jsx)(m,(0,r.Z)({className:(0,a.Z)(v.root,i),ref:t,ownerState:u},d))}))},7182:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(4942),o=n(3366),i=n(7462),a=n(7313),s=n(3061),d=n(1921),c=n(7592),u=n(7342),l=n(7999),p=n(3417),f=n(2298);function m(e){return(0,f.Z)("MuiAccordionSummary",e)}var v=(0,n(7430).Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),h=n(6417),Z=["children","className","expandIcon","focusVisibleClassName","onClick"],x=(0,c.ZP)(l.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,n=e.theme,o=e.ownerState,a={duration:n.transitions.duration.shortest};return(0,i.Z)((t={display:"flex",minHeight:48,padding:n.spacing(0,2),transition:n.transitions.create(["min-height","background-color"],a)},(0,r.Z)(t,"&.".concat(v.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,r.Z)(t,"&.".concat(v.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),(0,r.Z)(t,"&:hover:not(.".concat(v.disabled,")"),{cursor:"pointer"}),t),!o.disableGutters&&(0,r.Z)({},"&.".concat(v.expanded),{minHeight:64}))})),g=(0,c.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!n.disableGutters&&(0,r.Z)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(v.expanded),{margin:"20px 0"}))})),b=(0,c.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})((function(e){var t=e.theme;return(0,r.Z)({display:"flex",color:(t.vars||t).palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(v.expanded),{transform:"rotate(180deg)"})})),w=a.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiAccordionSummary"}),r=n.children,c=n.className,l=n.expandIcon,f=n.focusVisibleClassName,v=n.onClick,w=(0,o.Z)(n,Z),y=a.useContext(p.Z),R=y.disabled,C=void 0!==R&&R,S=y.disableGutters,E=y.expanded,M=y.toggle,A=(0,i.Z)({},n,{expanded:E,disabled:C,disableGutters:S}),N=function(e){var t=e.classes,n=e.expanded,r=e.disabled,o=e.disableGutters,i={root:["root",n&&"expanded",r&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]};return(0,d.Z)(i,m,t)}(A);return(0,h.jsxs)(x,(0,i.Z)({focusRipple:!1,disableRipple:!0,disabled:C,component:"div","aria-expanded":E,className:(0,s.Z)(N.root,c),focusVisibleClassName:(0,s.Z)(N.focusVisible,f),onClick:function(e){M&&M(e),v&&v(e)},ref:t,ownerState:A},w,{children:[(0,h.jsx)(g,{className:N.content,ownerState:A,children:r}),l&&(0,h.jsx)(b,{className:N.expandIconWrapper,ownerState:A,children:l})]}))}))},2769:function(e,t,n){n.d(t,{Z:function(){return R}});var r=n(4506),o=n(9439),i=n(4942),a=n(3366),s=n(7462),d=n(7313),c=(n(6214),n(3061)),u=n(1921),l=n(7592),p=n(7342),f=n(5033),m=n(2295),v=n(3417),h=n(3800),Z=n(2298);function x(e){return(0,Z.Z)("MuiAccordion",e)}var g=(0,n(7430).Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),b=n(6417),w=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],y=(0,l.ZP)(m.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,i.Z)({},"& .".concat(g.region),t.region),t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,r={duration:n.transitions.duration.shortest};return t={position:"relative",transition:n.transitions.create(["margin"],r),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(n.vars||n).palette.divider,transition:n.transitions.create(["opacity","background-color"],r)},"&:first-of-type":{"&:before":{display:"none"}}},(0,i.Z)(t,"&.".concat(g.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),(0,i.Z)(t,"&.".concat(g.disabled),{backgroundColor:(n.vars||n).palette.action.disabledBackground}),t}),(function(e){var t=e.theme,n=e.ownerState;return(0,s.Z)({},!n.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(t.vars||t).shape.borderRadius,borderBottomRightRadius:(t.vars||t).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!n.disableGutters&&(0,i.Z)({},"&.".concat(g.expanded),{margin:"16px 0"}))})),R=d.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiAccordion"}),i=n.children,l=n.className,m=n.defaultExpanded,Z=void 0!==m&&m,g=n.disabled,R=void 0!==g&&g,C=n.disableGutters,S=void 0!==C&&C,E=n.expanded,M=n.onChange,A=n.square,N=void 0!==A&&A,G=n.TransitionComponent,k=void 0===G?f.Z:G,I=n.TransitionProps,j=(0,a.Z)(n,w),T=(0,h.Z)({controlled:E,default:Z,name:"Accordion",state:"expanded"}),z=(0,o.Z)(T,2),P=z[0],D=z[1],W=d.useCallback((function(e){D(!P),M&&M(e,!P)}),[P,M,D]),V=d.Children.toArray(i),q=(0,r.Z)(V),B=q[0],H=q.slice(1),L=d.useMemo((function(){return{expanded:P,disabled:R,disableGutters:S,toggle:W}}),[P,R,S,W]),F=(0,s.Z)({},n,{square:N,disabled:R,disableGutters:S,expanded:P}),O=function(e){var t=e.classes,n={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return(0,u.Z)(n,x,t)}(F);return(0,b.jsxs)(y,(0,s.Z)({className:(0,c.Z)(O.root,l),ref:t,ownerState:F,square:N},j,{children:[(0,b.jsx)(v.Z.Provider,{value:L,children:B}),(0,b.jsx)(k,(0,s.Z)({in:P,timeout:"auto"},I,{children:(0,b.jsx)("div",{"aria-labelledby":B.props.id,id:B.props["aria-controls"],role:"region",className:O.region,children:H})}))]}))}))},3417:function(e,t,n){var r=n(7313).createContext({});t.Z=r},5033:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(4942),o=n(3366),i=n(7462),a=n(7313),s=n(3061),d=n(2242),c=n(1921),u=n(7592),l=n(7342),p=n(5829),f=n(265),m=n(9860),v=n(6983),h=n(2298);function Z(e){return(0,h.Z)("MuiCollapse",e)}(0,n(7430).Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var x=n(6417),g=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],b=(0,u.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({height:0,overflow:"hidden",transition:t.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:t.transitions.create("width")},"entered"===n.state&&(0,i.Z)({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})})),w=(0,u.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(e,t){return t.wrapper}})((function(e){var t=e.ownerState;return(0,i.Z)({display:"flex",width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),y=(0,u.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(e,t){return t.wrapperInner}})((function(e){var t=e.ownerState;return(0,i.Z)({width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),R=a.forwardRef((function(e,t){var n=(0,l.Z)({props:e,name:"MuiCollapse"}),u=n.addEndListener,h=n.children,R=n.className,C=n.collapsedSize,S=void 0===C?"0px":C,E=n.component,M=n.easing,A=n.in,N=n.onEnter,G=n.onEntered,k=n.onEntering,I=n.onExit,j=n.onExited,T=n.onExiting,z=n.orientation,P=void 0===z?"vertical":z,D=n.style,W=n.timeout,V=void 0===W?p.x9.standard:W,q=n.TransitionComponent,B=void 0===q?d.ZP:q,H=(0,o.Z)(n,g),L=(0,i.Z)({},n,{orientation:P,collapsedSize:S}),F=function(e){var t=e.orientation,n=e.classes,r={root:["root","".concat(t)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(t)],wrapperInner:["wrapperInner","".concat(t)]};return(0,c.Z)(r,Z,n)}(L),O=(0,m.Z)(),J=a.useRef(),K=a.useRef(null),Q=a.useRef(),U="number"===typeof S?"".concat(S,"px"):S,X="horizontal"===P,Y=X?"width":"height";a.useEffect((function(){return function(){clearTimeout(J.current)}}),[]);var $=a.useRef(null),_=(0,v.Z)(t,$),ee=function(e){return function(t){if(e){var n=$.current;void 0===t?e(n):e(n,t)}}},te=function(){return K.current?K.current[X?"clientWidth":"clientHeight"]:0},ne=ee((function(e,t){K.current&&X&&(K.current.style.position="absolute"),e.style[Y]=U,N&&N(e,t)})),re=ee((function(e,t){var n=te();K.current&&X&&(K.current.style.position="");var r=(0,f.C)({style:D,timeout:V,easing:M},{mode:"enter"}),o=r.duration,i=r.easing;if("auto"===V){var a=O.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(a,"ms"),Q.current=a}else e.style.transitionDuration="string"===typeof o?o:"".concat(o,"ms");e.style[Y]="".concat(n,"px"),e.style.transitionTimingFunction=i,k&&k(e,t)})),oe=ee((function(e,t){e.style[Y]="auto",G&&G(e,t)})),ie=ee((function(e){e.style[Y]="".concat(te(),"px"),I&&I(e)})),ae=ee(j),se=ee((function(e){var t=te(),n=(0,f.C)({style:D,timeout:V,easing:M},{mode:"exit"}),r=n.duration,o=n.easing;if("auto"===V){var i=O.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(i,"ms"),Q.current=i}else e.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");e.style[Y]=U,e.style.transitionTimingFunction=o,T&&T(e)}));return(0,x.jsx)(B,(0,i.Z)({in:A,onEnter:ne,onEntered:oe,onEntering:re,onExit:ie,onExited:ae,onExiting:se,addEndListener:function(e){"auto"===V&&(J.current=setTimeout(e,Q.current||0)),u&&u($.current,e)},nodeRef:$,timeout:"auto"===V?null:V},H,{children:function(e,t){return(0,x.jsx)(b,(0,i.Z)({as:E,className:(0,s.Z)(F.root,R,{entered:F.entered,exited:!A&&"0px"===U&&F.hidden}[e]),style:(0,i.Z)((0,r.Z)({},X?"minWidth":"minHeight",U),D),ownerState:(0,i.Z)({},L,{state:e}),ref:_},t,{children:(0,x.jsx)(w,{ownerState:(0,i.Z)({},L,{state:e}),className:F.wrapper,ref:K,children:(0,x.jsx)(y,{ownerState:(0,i.Z)({},L,{state:e}),className:F.wrapperInner,children:h})})}))}}))}));R.muiSupportAuto=!0;var C=R}}]);