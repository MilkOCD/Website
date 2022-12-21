"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[974],{7134:function(e,r,n){var t=n(1413),o=n(5987),c=n(7592),a=n(6417),i=["className","color","children"],s=(0,c.ZP)("span")((function(e){var r=e.theme;return"\n      background-color: ".concat(r.colors.alpha.black[5],";\n      padding: ").concat(r.spacing(.5,1),";\n      font-size: ").concat(r.typography.pxToRem(13),";\n      border-radius: ").concat(r.general.borderRadius,";\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: ").concat(r.spacing(3),";\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: ").concat(r.colors.primary.lighter,";\n          color: ").concat(r.palette.primary.main,"\n        }\n\n        &-black {\n          background-color: ").concat(r.colors.alpha.black[100],";\n          color: ").concat(r.colors.alpha.white[100],";\n        }\n        \n        &-secondary {\n          background-color: ").concat(r.colors.secondary.lighter,";\n          color: ").concat(r.palette.secondary.main,"\n        }\n        \n        &-success {\n          background-color: ").concat(r.colors.success.lighter,";\n          color: ").concat(r.palette.success.main,"\n        }\n        \n        &-warning {\n          background-color: ").concat(r.colors.warning.lighter,";\n          color: ").concat(r.palette.warning.main,"\n        }\n              \n        &-error {\n          background-color: ").concat(r.colors.error.lighter,";\n          color: ").concat(r.palette.error.main,"\n        }\n        \n        &-info {\n          background-color: ").concat(r.colors.info.lighter,";\n          color: ").concat(r.palette.info.main,"\n        }\n      }\n")}));r.Z=function(e){e.className;var r=e.color,n=void 0===r?"secondary":r,c=e.children,l=(0,o.Z)(e,i);return(0,a.jsx)(s,(0,t.Z)((0,t.Z)({className:"MuiLabel-"+n},l),{},{children:c}))}},4584:function(e,r,n){var t=n(7592),o=n(7829),c=n(178),a=n(6417),i=(0,t.ZP)(o.Z)((function(e){var r=e.theme;return"\n        padding: ".concat(r.spacing(4),";\n")}));r.Z=function(e){var r=e.children;return(0,a.jsx)(i,{className:"MuiPageTitle-wrapper",style:{margin:0},children:(0,a.jsx)(c.Z,{maxWidth:"lg",children:r})})}},7974:function(e,r,n){n.r(r),n.d(r,{default:function(){return ee}});var t=n(5964),o=n(9019),c=n(1113),a=n(4193),i=n(3033),s=n(6417);var l=function(){return(0,s.jsxs)(o.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,s.jsxs)(o.ZP,{item:!0,children:[(0,s.jsx)(c.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:"Transactions"}),(0,s.jsxs)(c.Z,{variant:"subtitle2",children:["Ph\xed Thanh Th\u1ee7y",", these are your recent transactions"]})]}),(0,s.jsx)(o.ZP,{item:!0,children:(0,s.jsx)(a.Z,{sx:{mt:{xs:2,md:0}},variant:"contained",startIcon:(0,s.jsx)(i.Z,{fontSize:"small"}),children:"Create transaction"})})]})},d=n(4584),u=n(178),h=n(3428),m=n(3433),p=n(1413),x=n(9439),g=n(7313),Z=n(9600),y=n(1733),j=n.n(y),f=n(9860),D=n(7829),v=n(4641),C=n(1550),b=n(5103),k=n(4256),T=n(1405),w=n(9536),B=n(1629),P=n(6835),W=n(3477),I=n(4076),F=n(7478),N=n(4758),S=n(3467),A=n(112),M=n(7131),O=n(8227),$=n(7134),z=n(3993),K=n(1312),R=n(2047),J=n(8310),G=n(7216),H=n(3213),Y=n(7592),E=n(3946),L=(0,Y.ZP)(a.Z)((function(e){var r=e.theme;return"\n     background: ".concat(r.colors.error.main,";\n     color: ").concat(r.palette.error.contrastText,";\n\n     &:hover {\n        background: ").concat(r.colors.error.dark,";\n     }\n    ")}));var U=function(){var e=(0,g.useState)(!1),r=(0,x.Z)(e,2),n=r[0],t=r[1],o=(0,g.useRef)(null);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(D.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,s.jsxs)(D.Z,{display:"flex",alignItems:"center",children:[(0,s.jsx)(c.Z,{variant:"h5",color:"text.secondary",children:"Bulk actions:"}),(0,s.jsx)(L,{sx:{ml:1},startIcon:(0,s.jsx)(K.Z,{}),variant:"contained",children:"Delete"})]}),(0,s.jsx)(M.Z,{color:"primary",onClick:function(){t(!0)},ref:o,sx:{ml:2,p:1},children:(0,s.jsx)(E.Z,{})})]}),(0,s.jsx)(R.Z,{keepMounted:!0,anchorEl:o.current,open:n,onClose:function(){t(!1)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},children:(0,s.jsxs)(J.Z,{sx:{p:1},component:"nav",children:[(0,s.jsx)(G.ZP,{button:!0,children:(0,s.jsx)(H.Z,{primary:"Bulk delete selected"})}),(0,s.jsx)(G.ZP,{button:!0,children:(0,s.jsx)(H.Z,{primary:"Bulk edit selected"})})]})})]})},V=function(e){var r={failed:{text:"Failed",color:"error"},completed:{text:"Completed",color:"success"},pending:{text:"Pending",color:"warning"}}[e],n=r.text,t=r.color;return(0,s.jsx)($.Z,{color:t,children:n})},Q=function(e){var r=e.cryptoOrders,n=(0,g.useState)([]),t=(0,x.Z)(n,2),o=t[0],a=t[1],i=o.length>0,l=(0,g.useState)(0),d=(0,x.Z)(l,2),u=d[0],y=d[1],$=(0,g.useState)(5),R=(0,x.Z)($,2),J=R[0],G=R[1],H=(0,g.useState)({status:null}),Y=(0,x.Z)(H,2),E=Y[0],L=Y[1],Q=function(e,r){return e.filter((function(e){var n=!0;return r.status&&e.status!==r.status&&(n=!1),n}))}(r,E),q=function(e,r,n){return e.slice(r*n,r*n+n)}(Q,u,J),X=o.length>0&&o.length<r.length,_=o.length===r.length,ee=(0,f.Z)();return(0,s.jsxs)(h.Z,{children:[i&&(0,s.jsx)(D.Z,{flex:1,p:2,children:(0,s.jsx)(U,{})}),!i&&(0,s.jsx)(v.Z,{action:(0,s.jsx)(D.Z,{width:150,children:(0,s.jsxs)(C.Z,{fullWidth:!0,variant:"outlined",children:[(0,s.jsx)(b.Z,{children:"Status"}),(0,s.jsx)(k.Z,{value:E.status||"all",onChange:function(e){var r=null;"all"!==e.target.value&&(r=e.target.value),L((function(e){return(0,p.Z)((0,p.Z)({},e),{},{status:r})}))},label:"Status",autoWidth:!0,children:[{id:"all",name:"All"},{id:"completed",name:"Completed"},{id:"pending",name:"Pending"},{id:"failed",name:"Failed"}].map((function(e){return(0,s.jsx)(T.Z,{value:e.id,children:e.name},e.id)}))})]})}),title:"Recent Orders"}),(0,s.jsx)(w.Z,{}),(0,s.jsx)(B.Z,{children:(0,s.jsxs)(P.Z,{children:[(0,s.jsx)(W.Z,{children:(0,s.jsxs)(I.Z,{children:[(0,s.jsx)(F.Z,{padding:"checkbox",children:(0,s.jsx)(N.Z,{color:"primary",checked:_,indeterminate:X,onChange:function(e){a(e.target.checked?r.map((function(e){return e.id})):[])}})}),(0,s.jsx)(F.Z,{children:"Order Details"}),(0,s.jsx)(F.Z,{children:"Order ID"}),(0,s.jsx)(F.Z,{children:"Source"}),(0,s.jsx)(F.Z,{align:"right",children:"Amount"}),(0,s.jsx)(F.Z,{align:"right",children:"Status"}),(0,s.jsx)(F.Z,{align:"right",children:"Actions"})]})}),(0,s.jsx)(S.Z,{children:q.map((function(e){var r=o.includes(e.id);return(0,s.jsxs)(I.Z,{hover:!0,selected:r,children:[(0,s.jsx)(F.Z,{padding:"checkbox",children:(0,s.jsx)(N.Z,{color:"primary",checked:r,onChange:function(r){return n=e.id,void(o.includes(n)?a((function(e){return e.filter((function(e){return e!==n}))})):a((function(e){return[].concat((0,m.Z)(e),[n])})));var n},value:r})}),(0,s.jsxs)(F.Z,{children:[(0,s.jsx)(c.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.orderDetails}),(0,s.jsx)(c.Z,{variant:"body2",color:"text.secondary",noWrap:!0,children:(0,Z.Z)(e.orderDate,"MMMM dd yyyy")})]}),(0,s.jsx)(F.Z,{children:(0,s.jsx)(c.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.orderID})}),(0,s.jsxs)(F.Z,{children:[(0,s.jsx)(c.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.sourceName}),(0,s.jsx)(c.Z,{variant:"body2",color:"text.secondary",noWrap:!0,children:e.sourceDesc})]}),(0,s.jsxs)(F.Z,{align:"right",children:[(0,s.jsxs)(c.Z,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:[e.amountCrypto,e.cryptoCurrency]}),(0,s.jsx)(c.Z,{variant:"body2",color:"text.secondary",noWrap:!0,children:j()(e.amount).format("".concat(e.currency,"0,0.00"))})]}),(0,s.jsx)(F.Z,{align:"right",children:V(e.status)}),(0,s.jsxs)(F.Z,{align:"right",children:[(0,s.jsx)(A.Z,{title:"Edit Order",arrow:!0,children:(0,s.jsx)(M.Z,{sx:{"&:hover":{background:ee.colors.primary.lighter},color:ee.palette.primary.main},color:"inherit",size:"small",children:(0,s.jsx)(z.Z,{fontSize:"small"})})}),(0,s.jsx)(A.Z,{title:"Delete Order",arrow:!0,children:(0,s.jsx)(M.Z,{sx:{"&:hover":{background:ee.colors.error.lighter},color:ee.palette.error.main},color:"inherit",size:"small",children:(0,s.jsx)(K.Z,{fontSize:"small"})})})]})]},e.id)}))})]})}),(0,s.jsx)(D.Z,{p:2,children:(0,s.jsx)(O.Z,{component:"div",count:Q.length,onPageChange:function(e,r){y(r)},onRowsPerPageChange:function(e){G(parseInt(e.target.value))},page:u,rowsPerPage:J,rowsPerPageOptions:[5,10,25,30]})})]})};Q.defaultProps={cryptoOrders:[]};var q=Q,X=n(5825);var _=function(){var e=[{id:"1",orderDetails:"Fiat Deposit",orderDate:(new Date).getTime(),status:"completed",orderID:"VUVX709ET7BY",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:34.4565,amount:56787,cryptoCurrency:"ETH",currency:"$"},{id:"2",orderDetails:"Fiat Deposit",orderDate:(0,X.Z)(new Date,1).getTime(),status:"completed",orderID:"23M3UOG65G8K",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:6.58454334,amount:8734587,cryptoCurrency:"BTC",currency:"$"},{id:"3",orderDetails:"Fiat Deposit",orderDate:(0,X.Z)(new Date,5).getTime(),status:"failed",orderID:"F6JHK65MS818",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:6.58454334,amount:8734587,cryptoCurrency:"BTC",currency:"$"},{id:"4",orderDetails:"Fiat Deposit",orderDate:(0,X.Z)(new Date,55).getTime(),status:"completed",orderID:"QJFAI7N84LGM",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:6.58454334,amount:8734587,cryptoCurrency:"BTC",currency:"$"},{id:"5",orderDetails:"Fiat Deposit",orderDate:(0,X.Z)(new Date,56).getTime(),status:"pending",orderID:"BO5KFSYGC0YW",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:6.58454334,amount:8734587,cryptoCurrency:"BTC",currency:"$"},{id:"6",orderDetails:"Fiat Deposit",orderDate:(0,X.Z)(new Date,33).getTime(),status:"completed",orderID:"6RS606CBMKVQ",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:6.58454334,amount:8734587,cryptoCurrency:"BTC",currency:"$"},{id:"7",orderDetails:"Fiat Deposit",orderDate:(new Date).getTime(),status:"pending",orderID:"479KUYHOBMJS",sourceName:"Bank Account",sourceDesc:"*** 1212",amountCrypto:2.346546,amount:234234,cryptoCurrency:"BTC",currency:"$"},{id:"8",orderDetails:"Paypal Withdraw",orderDate:(0,X.Z)(new Date,22).getTime(),status:"completed",orderID:"W67CFZNT71KR",sourceName:"Paypal Account",sourceDesc:"*** 1111",amountCrypto:3.345456,amount:34544,cryptoCurrency:"BTC",currency:"$"},{id:"9",orderDetails:"Fiat Deposit",orderDate:(0,X.Z)(new Date,11).getTime(),status:"completed",orderID:"63GJ5DJFKS4H",sourceName:"Bank Account",sourceDesc:"*** 2222",amountCrypto:1.4389567945,amount:123843,cryptoCurrency:"BTC",currency:"$"},{id:"10",orderDetails:"Wallet Transfer",orderDate:(0,X.Z)(new Date,123).getTime(),status:"failed",orderID:"17KRZHY8T05M",sourceName:"Wallet Transfer",sourceDesc:"John's Cardano Wallet",amountCrypto:765.5695,amount:7567,cryptoCurrency:"ADA",currency:"$"}];return(0,s.jsx)(h.Z,{children:(0,s.jsx)(q,{cryptoOrders:e})})};var ee=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.ql,{children:(0,s.jsx)("title",{children:"Transactions - Applications"})}),(0,s.jsx)(d.Z,{children:(0,s.jsx)(l,{})}),(0,s.jsx)(u.Z,{maxWidth:"lg",children:(0,s.jsx)(o.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:(0,s.jsx)(o.ZP,{item:!0,xs:12,children:(0,s.jsx)(_,{})})})})]})}}}]);