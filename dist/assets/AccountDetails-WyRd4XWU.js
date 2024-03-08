import{r as u,j as e,g as me,o as $,u as P,d as O,L as $e}from"./index-kG6OA0Lj.js";import{r as w,i as T}from"./createSvgIcon-1l7Qou-N.js";import{u as J,T as N}from"./index.esm-YALLmXRt.js";import{E as W}from"./EmptyState-R1ImE06m.js";import{l as Ne,e as ke,a as Le,d as we,c as Te,f as Me}from"./auth-f6KA6lip.js";import{u as F}from"./useMutation-rvPvknYD.js";import{B as b}from"./Button-Oro4haYr.js";import{M as Ie,S as ue,O as H}from"./Select-t3SlGVAR.js";import{C as Ee}from"./CircularProgress-5_IFDHuH.js";import{u as q}from"./useDispatch-CQXfthR1.js";import{L as X,I as K,d as Q,a as U}from"./Loading-oZSkqkm9.js";import{G as m}from"./Grid-9HnAf3d4.js";import{u as _e,f as Fe,a as qe,P as Se,L as Pe,m as R}from"./motion-2ormWv1o.js";import{M as k}from"./MenuItem-7CZzXGS_.js";import{F as Oe}from"./FormControlLabel-Szg5Ek2V.js";import{C as Re}from"./Checkbox-bbhnfrQX.js";import{L as pe}from"./LoadingState-JuiAPiPX.js";import{g as ze,d as Ve}from"./order-Sao_PAsM.js";import{u as De}from"./useQuery-dWs5bJIz.js";import{d as We}from"./Add-vjQxlo68.js";import{I as A}from"./IconButton-J2GK4gW8.js";import{B as Be}from"./Breadcrumbs-2mmZjkxV.js";import"./createSvgIcon-YEOVVOch.js";import"./useId-q3vM3uvD.js";import"./useControlled-wiAP_r8o.js";import"./FormControl-HjXt7Vmi.js";import"./EmptyState.module-2GihuqGv.js";import"./api--0IjzKCk.js";import"./ButtonBase-BwOv2JR7.js";import"./Paper-uuAsmGUK.js";import"./useSlotProps-emH9y0qt.js";import"./extendSxProp-WqtJkzWi.js";function xe(){const t=u.useRef(!1);return _e(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function He(){const t=xe(),[s,r]=u.useState(0),o=u.useCallback(()=>{t.current&&r(s+1)},[s]);return[u.useCallback(()=>Fe.postRender(o),[o]),s]}class Ke extends u.Component{getSnapshotBeforeUpdate(s){const r=this.props.childRef.current;if(r&&s.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=r.offsetHeight||0,o.width=r.offsetWidth||0,o.top=r.offsetTop,o.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Qe({children:t,isPresent:s}){const r=u.useId(),o=u.useRef(null),_=u.useRef({width:0,height:0,top:0,left:0});return u.useInsertionEffect(()=>{const{width:a,height:p,top:x,left:n}=_.current;if(s||!o.current||!a||!p)return;o.current.dataset.motionPopId=r;const i=document.createElement("style");return document.head.appendChild(i),i.sheet&&i.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${p}px !important;
            top: ${x}px !important;
            left: ${n}px !important;
          }
        `),()=>{document.head.removeChild(i)}},[s]),u.createElement(Ke,{isPresent:s,childRef:o,sizeRef:_},u.cloneElement(t,{ref:o}))}const G=({children:t,initial:s,isPresent:r,onExitComplete:o,custom:_,presenceAffectsLayout:a,mode:p})=>{const x=qe(Ue),n=u.useId(),i=u.useMemo(()=>({id:n,initial:s,isPresent:r,custom:_,onExitComplete:d=>{x.set(d,!0);for(const c of x.values())if(!c)return;o&&o()},register:d=>(x.set(d,!1),()=>x.delete(d))}),a?void 0:[r]);return u.useMemo(()=>{x.forEach((d,c)=>x.set(c,!1))},[r]),u.useEffect(()=>{!r&&!x.size&&o&&o()},[r]),p==="popLayout"&&(t=u.createElement(Qe,{isPresent:r},t)),u.createElement(Se.Provider,{value:i},t)};function Ue(){return new Map}function Ae(t){return u.useEffect(()=>()=>t(),[])}const M=t=>t.key||"";function Ge(t,s){t.forEach(r=>{const o=M(r);s.set(o,r)})}function Ze(t){const s=[];return u.Children.forEach(t,r=>{u.isValidElement(r)&&s.push(r)}),s}const z=({children:t,custom:s,initial:r=!0,onExitComplete:o,exitBeforeEnter:_,presenceAffectsLayout:a=!0,mode:p="sync"})=>{const x=u.useContext(Pe).forceRender||He()[0],n=xe(),i=Ze(t);let d=i;const c=u.useRef(new Map).current,C=u.useRef(d),j=u.useRef(new Map).current,v=u.useRef(!0);if(_e(()=>{v.current=!1,Ge(i,j),C.current=d}),Ae(()=>{v.current=!0,j.clear(),c.clear()}),v.current)return u.createElement(u.Fragment,null,d.map(l=>u.createElement(G,{key:M(l),isPresent:!0,initial:r?void 0:!1,presenceAffectsLayout:a,mode:p},l)));d=[...d];const h=C.current.map(M),y=i.map(M),f=h.length;for(let l=0;l<f;l++){const g=h[l];y.indexOf(g)===-1&&!c.has(g)&&c.set(g,void 0)}return p==="wait"&&c.size&&(d=[]),c.forEach((l,g)=>{if(y.indexOf(g)!==-1)return;const I=j.get(g);if(!I)return;const ve=h.indexOf(g);let V=l;if(!V){const be=()=>{c.delete(g);const ce=Array.from(j.keys()).filter(S=>!y.includes(S));if(ce.forEach(S=>j.delete(S)),C.current=i.filter(S=>{const le=M(S);return le===g||ce.includes(le)}),!c.size){if(n.current===!1)return;x(),o&&o()}};V=u.createElement(G,{key:M(I),isPresent:!1,onExitComplete:be,custom:s,presenceAffectsLayout:a,mode:p},I),c.set(g,V)}d.splice(ve,0,V)}),d=d.map(l=>{const g=l.key;return c.has(g)?l:u.createElement(G,{key:M(l),isPresent:!0,presenceAffectsLayout:a,mode:p},l)}),u.createElement(u.Fragment,null,c.size?d:d.map(l=>u.cloneElement(l)))},Je="_breadCrumLink_1cymv_43",Xe="_breadCrumText_1cymv_48",Ye="_container_1cymv_53",et="_goldLine_1cymv_59",tt="_title_1cymv_66",nt="_leftTitle_1cymv_74",st="_error_1cymv_81",at="_modalContainer_1cymv_87",rt="_modalContent_1cymv_95",ot="_titleModal_1cymv_105",it="_btnModal_1cymv_108",ct="_btn_1cymv_108",lt="_active_1cymv_135",ut="_paginationContainer_1cymv_140",dt="_btnContainer_1cymv_147",mt="_counterContainer_1cymv_153",_t="_counter_1cymv_153",pt="_number_1cymv_171",xt="_inputLabel_1cymv_179",ht="_link_1cymv_185",ft="_categoryContainer_1cymv_215",gt="_category_1cymv_215",yt="_categoryImgContainer_1cymv_225",jt="_notFoundText_1cymv_229",Ct="_center_1cymv_234",vt="_offer_1cymv_240",bt="_stepCounter_1cymv_255",$t="_signupContainer_1cymv_261",Nt="_containerTitles_1cymv_278",kt="_ulTitles_1cymv_281",L={breadCrumLink:Je,breadCrumText:Xe,container:Ye,goldLine:et,title:tt,leftTitle:nt,error:st,modalContainer:at,modalContent:rt,titleModal:ot,btnModal:it,btn:ct,active:lt,paginationContainer:ut,btnContainer:dt,counterContainer:mt,counter:_t,number:pt,inputLabel:xt,link:ht,"progress-container":"_progress-container_1cymv_198",categoryContainer:ft,category:gt,categoryImgContainer:yt,notFoundText:jt,center:Ct,offer:vt,"offer-header":"_offer-header_1cymv_249",stepCounter:bt,signupContainer:$t,containerTitles:Nt,ulTitles:kt};var Y={},Lt=T;Object.defineProperty(Y,"__esModule",{value:!0});var B=Y.default=void 0,wt=Lt(w()),Tt=e;B=Y.default=(0,wt.default)((0,Tt.jsx)("path",{d:"M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2m0 15-5-2.18L7 18V5h10z"}),"BookmarkBorderOutlined");var ee={},Mt=T;Object.defineProperty(ee,"__esModule",{value:!0});var te=ee.default=void 0,It=Mt(w()),Et=e;te=ee.default=(0,It.default)((0,Et.jsx)("path",{d:"m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5z"}),"LogoutOutlined");const Ft=()=>{const t=q(),[s,r]=u.useState(!1),o=()=>r(!0),_=()=>r(!1),{mutateAsync:a,isLoading:p}=F({queryKey:["logout-user"],mutationFn:async()=>Ne(),onSuccess:n=>{debugger;t(me()),console.log(n)},onError:n=>{var i,d;debugger;console.log(n),t($({message:(d=(i=n==null?void 0:n.response)==null?void 0:i.data)==null?void 0:d.message,type:"error"}))}}),x=async()=>{await a(),_()};return e.jsxs(e.Fragment,{children:[e.jsx(b,{variant:"contained",color:"error",startIcon:e.jsx(te,{}),onClick:()=>o(),children:"Log out"}),e.jsx(Ie,{open:s,onClose:_,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsx("div",{className:"modalContainer",onClick:()=>_(),children:p?e.jsx(Ee,{color:"inherit"}):e.jsxs("div",{className:"modalContent",onClick:n=>n.stopPropagation(),children:[e.jsx("p",{className:"titleModal",children:"Are you sure? "}),e.jsxs("div",{className:"btnModal",children:[e.jsx(b,{variant:"contained",onClick:()=>_(),children:"no"}),e.jsx(b,{variant:"contained",color:"error",sx:{marginLeft:"16px"},onClick:()=>x(),children:"yes"})]})]})})})]})},qt=u.memo(Ft),St=()=>{var i,d,c,C,j,v;const{user:t}=P(h=>h.user),s=q(),r=O();console.log(t);const{register:o,handleSubmit:_,formState:{errors:a}}=J(),p=async h=>{console.log(h),await x(h)},{mutateAsync:x,isLoading:n}=F({mutationFn:async h=>ke(h),onError:h=>{var y,f;console.log(h),s($({message:(f=(y=h==null?void 0:h.response)==null?void 0:y.data)==null?void 0:f.message,type:"error"}))},onSuccess:h=>{var y;console.log(h),s($({message:(y=h==null?void 0:h.data)==null?void 0:y.message,type:"success"})),r.invalidateQueries({queryKey:["verify-user"]})}});return e.jsxs(e.Fragment,{children:[e.jsx(X,{isLoading:n}),t?e.jsx(m,{item:!0,xs:12,md:8,marginTop:"8px",children:e.jsx(z,{children:e.jsx(R.div,{initial:{y:-100},animate:{y:1},exit:{opacity:0},children:e.jsx("form",{className:"form",onSubmit:_(p),children:e.jsxs(m,{container:!0,columnSpacing:2,children:[e.jsxs(m,{item:!0,xs:12,sm:6,children:[e.jsx("label",{htmlFor:"first-name",className:"inputLabel",children:"First Name"}),e.jsx(N,{id:"first-name",placeholder:"Enter your first name",fullWidth:!0,...o("firstName",{required:"this field is required",maxLength:{value:15,message:"the maximum first name can be 15 characters"}}),error:a==null?void 0:a.firstName,defaultValue:t.firstName}),e.jsx("p",{className:"error",children:(i=a==null?void 0:a.firstName)==null?void 0:i.message})]}),e.jsxs(m,{item:!0,xs:12,sm:6,children:[e.jsx("label",{htmlFor:"last-name",className:"inputLabel",children:"Last Name"}),e.jsx(N,{id:"last-name",placeholder:"Enter your last name",fullWidth:!0,...o("lastName",{required:"this field is required",maxLength:{value:15,message:"the maximum last name can be 15 characters"}}),error:a==null?void 0:a.lastName,defaultValue:t.lastName}),e.jsx("p",{className:"error",children:(d=a==null?void 0:a.lastName)==null?void 0:d.message})]}),e.jsxs(m,{item:!0,xs:12,sm:6,children:[e.jsx("label",{htmlFor:"email",className:"inputLabel",children:"Email"}),e.jsx(N,{id:"email",placeholder:"Enter your email",fullWidth:!0,...o("email",{required:"this field is required",pattern:{value:/\S+@\S+\.\S+/,message:"Entered value does not match email format"}}),error:a==null?void 0:a.email,defaultValue:t.email}),e.jsx("p",{className:"error",children:(c=a==null?void 0:a.email)==null?void 0:c.message})]}),e.jsxs(m,{item:!0,xs:12,sm:6,children:[e.jsx("label",{htmlFor:"phone-number",className:"inputLabel",children:"Phone Number"}),e.jsx(N,{id:"phone-number",placeholder:"Enter your phone number",fullWidth:!0,...o("phoneNumber",{required:"this field is required",maxLength:{value:15,message:"the maximum last name can be 15 characters"},pattern:{value:/^\d+$/,message:"phone number must contain numbers"}}),error:a==null?void 0:a.phoneNumber,defaultValue:t.phoneNumber}),e.jsx("p",{className:"error",children:(C=a==null?void 0:a.phoneNumber)==null?void 0:C.message})]}),e.jsxs(m,{item:!0,xs:12,sm:6,children:[e.jsx("label",{htmlFor:"country",className:"inputLabel",children:"Country"}),e.jsxs(ue,{labelId:"country",id:"country",...o("country",{required:"this field is required",maxLength:{value:15,message:"the maximum last name can be 15 characters"}}),displayEmpty:!0,fullWidth:!0,inputProps:{"aria-label":"Without label"},error:a==null?void 0:a.country,defaultValue:t==null?void 0:t.country,children:[e.jsx(k,{value:t.country,children:e.jsx("em",{children:t.country?t.country:"select"})}),e.jsx(k,{value:"iran",children:"iran"}),e.jsx(k,{value:"usa",children:"usa"}),e.jsx(k,{value:"canada",children:"canada"})]}),e.jsx("p",{className:"error",children:(j=a==null?void 0:a.country)==null?void 0:j.message})]}),e.jsxs(m,{item:!0,xs:12,sm:6,children:[e.jsx("label",{htmlFor:"city",className:"inputLabel",children:"City"}),e.jsxs(ue,{...o("city",{required:"this field is required",maxLength:{value:15,message:"the maximum last name can be 15 characters"}}),displayEmpty:!0,fullWidth:!0,inputProps:{"aria-label":"Without label"},error:a==null?void 0:a.city,defaultValue:t.city,children:[e.jsx(k,{value:t.city,children:e.jsx("em",{children:t.city?t.city:"select"})}),e.jsx(k,{value:"theran",children:"tehran"}),e.jsx(k,{value:"new york",children:"new york"}),e.jsx(k,{value:"torento",children:"torento"})]}),e.jsx("p",{className:"error",children:(v=a==null?void 0:a.city)==null?void 0:v.message})]}),e.jsx(m,{item:!0,xs:12,children:e.jsx(Oe,{control:e.jsx(Re,{}),label:"I would like to receive a newsletter",...o("newsletter")})}),e.jsx(m,{item:!0,xs:12,children:e.jsxs("div",{className:"btnContainer",children:[e.jsx(qt,{}),e.jsx(b,{variant:"contained",type:"submit",sx:{marginLeft:"12px"},startIcon:e.jsx(B,{}),children:"save data"})]})})]})})})})}):e.jsx(W,{data:"user"})]})},Pt="_breadCrumLink_u1m82_43",Ot="_breadCrumText_u1m82_48",Rt="_container_u1m82_53",zt="_goldLine_u1m82_59",Vt="_title_u1m82_66",Dt="_leftTitle_u1m82_74",Wt="_error_u1m82_81",Bt="_modalContainer_u1m82_87",Ht="_modalContent_u1m82_95",Kt="_titleModal_u1m82_105",Qt="_btnModal_u1m82_108",Ut="_btn_u1m82_108",At="_active_u1m82_135",Gt="_paginationContainer_u1m82_140",Zt="_btnContainer_u1m82_147",Jt="_counterContainer_u1m82_153",Xt="_counter_u1m82_153",Yt="_number_u1m82_171",en="_inputLabel_u1m82_179",tn="_link_u1m82_185",nn="_categoryContainer_u1m82_215",sn="_category_u1m82_215",an="_categoryImgContainer_u1m82_225",rn="_notFoundText_u1m82_229",on="_center_u1m82_234",cn="_offer_u1m82_240",ln="_stepCounter_u1m82_255",un="_signupContainer_u1m82_261",dn="_order_u1m82_278",mn="_orderTextContainer_u1m82_284",_n="_imgsContainer_u1m82_291",pn="_imgContainer_u1m82_295",D={breadCrumLink:Pt,breadCrumText:Ot,container:Rt,goldLine:zt,title:Vt,leftTitle:Dt,error:Wt,modalContainer:Bt,modalContent:Ht,titleModal:Kt,btnModal:Qt,btn:Ut,active:At,paginationContainer:Gt,btnContainer:Zt,counterContainer:Jt,counter:Xt,number:Yt,inputLabel:en,link:tn,"progress-container":"_progress-container_u1m82_198",categoryContainer:nn,category:sn,categoryImgContainer:an,notFoundText:rn,center:on,offer:cn,"offer-header":"_offer-header_u1m82_249",stepCounter:ln,signupContainer:un,order:dn,orderTextContainer:mn,imgsContainer:_n,imgContainer:pn},xn=({order:t})=>{var s,r;return console.log(t),e.jsx(m,{item:!0,xs:12,children:e.jsxs("div",{className:D.order,children:[e.jsxs("div",{className:D.orderTextContainer,children:[e.jsxs("span",{children:[e.jsx("strong",{children:"order code:"})," ",t.orderCode]}),e.jsxs("span",{children:[e.jsx("strong",{children:"order date:"})," ",t.createdAt.split("T")[0]]}),e.jsxs("span",{children:[e.jsx("strong",{children:"total price:"})," $",t.cart.totalPrice]}),e.jsxs("span",{children:[e.jsx("strong",{children:"total orders:"})," ",t.cart.totalOrders]})]}),e.jsx("div",{className:D.imgsContainer,children:(r=(s=t==null?void 0:t.cart)==null?void 0:s.items)==null?void 0:r.map(o=>e.jsx("div",{className:D.imgContainer,children:e.jsx("img",{src:o.product.image,alt:"product"})},o._id))})]})})},hn=()=>{const{isLoading:t,isError:s,data:r}=De({queryKey:["orders"],queryFn:async()=>ze()});return console.log(r),t?e.jsx(m,{item:!0,xs:12,md:8,marginTop:"18px",children:e.jsx(pe,{})}):s||(r==null?void 0:r.length)===0?e.jsx(m,{item:!0,xs:12,md:8,marginTop:"18px",children:e.jsx(W,{data:"order"})}):e.jsx(m,{item:!0,xs:12,md:8,marginTop:"18px",children:e.jsx(z,{children:e.jsx(R.div,{initial:{y:-100},animate:{y:1},exit:{opacity:0},children:r==null?void 0:r.map(o=>e.jsx(xn,{order:o},o._id))})})})},fn="_breadCrumLink_k7yo6_43",gn="_breadCrumText_k7yo6_48",yn="_container_k7yo6_53",jn="_goldLine_k7yo6_59",Cn="_title_k7yo6_66",vn="_leftTitle_k7yo6_74",bn="_error_k7yo6_81",$n="_modalContainer_k7yo6_87",Nn="_modalContent_k7yo6_95",kn="_titleModal_k7yo6_105",Ln="_btnModal_k7yo6_108",wn="_btn_k7yo6_108",Tn="_active_k7yo6_135",Mn="_paginationContainer_k7yo6_140",In="_btnContainer_k7yo6_147",En="_counterContainer_k7yo6_153",Fn="_counter_k7yo6_153",qn="_number_k7yo6_171",Sn="_inputLabel_k7yo6_179",Pn="_link_k7yo6_185",On="_categoryContainer_k7yo6_215",Rn="_category_k7yo6_215",zn="_categoryImgContainer_k7yo6_225",Vn="_notFoundText_k7yo6_229",Dn="_center_k7yo6_234",Wn="_offer_k7yo6_240",Bn="_stepCounter_k7yo6_255",Hn="_signupContainer_k7yo6_261",Kn="_favoriteItem_k7yo6_278",Qn="_imageContainer_k7yo6_284",Un="_text_k7yo6_327",An="_trash_k7yo6_338",Gn="_price_k7yo6_343",Z={breadCrumLink:fn,breadCrumText:gn,container:yn,goldLine:jn,title:Cn,leftTitle:vn,error:bn,modalContainer:$n,modalContent:Nn,titleModal:kn,btnModal:Ln,btn:wn,active:Tn,paginationContainer:Mn,btnContainer:In,counterContainer:En,counter:Fn,number:qn,inputLabel:Sn,link:Pn,"progress-container":"_progress-container_k7yo6_198",categoryContainer:On,category:Rn,categoryImgContainer:zn,notFoundText:Vn,center:Dn,offer:Wn,"offer-header":"_offer-header_k7yo6_249",stepCounter:Bn,signupContainer:Hn,favoriteItem:Kn,imageContainer:Qn,text:Un,trash:An,price:Gn};var ne={},Zn=T;Object.defineProperty(ne,"__esModule",{value:!0});var he=ne.default=void 0,Jn=Zn(w()),Xn=e;he=ne.default=(0,Jn.default)((0,Xn.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutlineOutlined");const Yn=({data:t})=>{const s=q(),{user:r,isLoggedIn:o}=P(n=>n.user),_=O(),{mutateAsync:a,isLoading:p}=F({mutationFn:async n=>Le(n),onError:n=>{var i,d;console.log(n),s($({message:(d=(i=n==null?void 0:n.response)==null?void 0:i.data)==null?void 0:d.message,type:"error"}))},onSuccess:n=>{console.log(n),_.invalidateQueries({queryKey:["verify-user"]}),s($({message:"the product removed from favorite",type:"success"})),console.log(r)}}),x=async n=>{console.log(n),o&&await a({product:n})};return p?e.jsx(m,{item:!0,xs:12,md:8,marginTop:"18px",children:e.jsx(pe,{})}):e.jsx("div",{className:Z.favoriteItem,children:e.jsxs(m,{container:!0,children:[e.jsx(m,{item:!0,xs:12,sm:2,children:e.jsx("div",{className:Z.imageContainer,children:e.jsx("img",{src:t.image,alt:""})})}),e.jsx(m,{item:!0,xs:12,sm:5,display:{sm:"flex",alignItems:"center",xs:"flex",justifyContent:"center"},children:e.jsxs("div",{className:Z.text,children:[e.jsx("strong",{children:"NAME:"})," ",e.jsx("span",{children:t.name}),e.jsxs("p",{children:[e.jsx("strong",{children:"code: "})," ",e.jsx("span",{children:t.code})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"color:"})," ",t.colors.map(n=>e.jsx("span",{children:n},n))]}),e.jsxs("p",{children:[e.jsx("strong",{children:"size: "}),t.size.map(n=>e.jsx("span",{children:n},n))]})]})}),e.jsx(m,{item:!0,xs:3,display:{sm:"none"}}),e.jsx(m,{item:!0,xs:12,sm:2,display:{sm:"flex",alignItems:"center",xs:"flex",justifyContent:"center"},paddingTop:1,children:e.jsxs("strong",{children:["$",t.price]})}),e.jsx(m,{item:!0,xs:12,sm:2,display:{sm:"flex",alignItems:"center",xs:"flex",justifyContent:"center"},paddingTop:1,children:e.jsx("button",{onClick:()=>x(t),children:e.jsx(he,{})})})]})})},es=()=>{var s,r,o,_;const{user:t}=P(a=>a.user);return e.jsx(m,{item:!0,xs:12,md:8,children:e.jsx(z,{children:e.jsx(R.div,{initial:{y:-100},animate:{y:1},exit:{opacity:0},children:((r=(s=t==null?void 0:t.favoriteProducts)==null?void 0:s.items)==null?void 0:r.length)===0?e.jsx(W,{data:"product"}):(_=(o=t==null?void 0:t.favoriteProducts)==null?void 0:o.items)==null?void 0:_.map(a=>e.jsx(Yn,{data:a},a._id))})})})},ts="_breadCrumLink_6plmu_43",ns="_breadCrumText_6plmu_48",ss="_container_6plmu_53",as="_goldLine_6plmu_59",rs="_title_6plmu_66",os="_leftTitle_6plmu_74",is="_error_6plmu_81",cs="_modalContainer_6plmu_87",ls="_modalContent_6plmu_95",us="_titleModal_6plmu_105",ds="_btnModal_6plmu_108",ms="_btn_6plmu_108",_s="_active_6plmu_135",ps="_paginationContainer_6plmu_140",xs="_btnContainer_6plmu_147",hs="_counterContainer_6plmu_153",fs="_counter_6plmu_153",gs="_number_6plmu_171",ys="_inputLabel_6plmu_179",js="_link_6plmu_185",Cs="_categoryContainer_6plmu_215",vs="_category_6plmu_215",bs="_categoryImgContainer_6plmu_225",$s="_notFoundText_6plmu_229",Ns="_center_6plmu_234",ks="_offer_6plmu_240",Ls="_stepCounter_6plmu_255",ws="_signupContainer_6plmu_261",Ts="_userInformationContainer_6plmu_278",Ms="_buttonContainer_6plmu_295",Is="_addressText_6plmu_299",E={breadCrumLink:ts,breadCrumText:ns,container:ss,goldLine:as,title:rs,leftTitle:os,error:is,modalContainer:cs,modalContent:ls,titleModal:us,btnModal:ds,btn:ms,active:_s,paginationContainer:ps,btnContainer:xs,counterContainer:hs,counter:fs,number:gs,inputLabel:ys,link:js,"progress-container":"_progress-container_6plmu_198",categoryContainer:Cs,category:vs,categoryImgContainer:bs,notFoundText:$s,center:Ns,offer:ks,"offer-header":"_offer-header_6plmu_249",stepCounter:Ls,signupContainer:ws,userInformationContainer:Ts,buttonContainer:Ms,addressText:Is};var se={},Es=T;Object.defineProperty(se,"__esModule",{value:!0});var fe=se.default=void 0,Fs=Es(w()),qs=e;fe=se.default=(0,Fs.default)((0,qs.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");var ae={},Ss=T;Object.defineProperty(ae,"__esModule",{value:!0});var ge=ae.default=void 0,Ps=Ss(w()),de=e;ge=ae.default=(0,Ps.default)([(0,de.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"},"0"),(0,de.jsx)("circle",{cx:"12",cy:"9",r:"2.5"},"1")],"LocationOnOutlined");var re={},Os=T;Object.defineProperty(re,"__esModule",{value:!0});var ye=re.default=void 0,Rs=Os(w()),zs=e;ye=re.default=(0,Rs.default)((0,zs.jsx)("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0-8 5-8-5zm0 12H4V8l8 5 8-5z"}),"EmailOutlined");var oe={},Vs=T;Object.defineProperty(oe,"__esModule",{value:!0});var je=oe.default=void 0,Ds=Vs(w()),Ws=e;je=oe.default=(0,Ds.default)((0,Ws.jsx)("path",{d:"M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1"}),"PhoneOutlined");var ie={},Bs=T;Object.defineProperty(ie,"__esModule",{value:!0});var Ce=ie.default=void 0,Hs=Bs(w()),Ks=e;Ce=ie.default=(0,Hs.default)((0,Ks.jsx)("path",{d:"m16.81 8.94-3.75-3.75L4 14.25V18h3.75zM6 16v-.92l7.06-7.06.92.92L6.92 16zm13.71-9.96c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75zM2 20h20v4H2z"}),"BorderColorOutlined");function Qs({address:t,setActive:s,setEditedAddress:r}){console.log(t);const o=O(),_=q(),{mutateAsync:a,isLoading:p}=F({mutationFn:async i=>we(i),onError:i=>{var d,c;console.log(i),_($({message:(c=(d=i==null?void 0:i.response)==null?void 0:d.data)==null?void 0:c.message,type:"error"}))},onSuccess:i=>{var d;console.log(i),o.invalidateQueries({queryKey:["verify-user"]}),_($({message:(d=i==null?void 0:i.data)==null?void 0:d.message,type:"success"}))}}),x=()=>{r(t),s("add address")},n=async()=>{await a(t)};return e.jsxs("div",{className:E.userInformationContainer,children:[e.jsx("strong",{children:t.name}),e.jsxs("div",{children:[e.jsx(Ve,{}),e.jsx("span",{className:E.addressText,children:t.address})]}),e.jsxs("div",{children:[e.jsx(ge,{}),e.jsx("span",{className:E.addressText,children:t.cityName})]}),e.jsxs("div",{children:[e.jsx(ye,{}),e.jsx("span",{className:E.addressText,children:t.countryName})]}),e.jsxs("div",{children:[e.jsx(je,{}),e.jsx("span",{className:E.addressText,children:t.phoneNumber})]}),e.jsxs("div",{className:E.buttonContainer,children:[e.jsx(b,{onClick:()=>x(),variant:"contained",startIcon:e.jsx(Ce,{}),children:"edit"}),e.jsx(b,{variant:"contained",color:"error",startIcon:e.jsx(fe,{}),onClick:()=>n(),children:"Delete"})]})]})}const Us=({setActive:t,editedAddress:s,setEditedAddress:r})=>{var C,j,v,h,y;const{user:o}=P(f=>f.user),_=q(),a=O(),{register:p,handleSubmit:x,formState:{errors:n}}=J(),{mutateAsync:i,isLoading:d}=F({mutationFn:async f=>Te(f),onError:f=>{var l,g;_($({message:(g=(l=f==null?void 0:f.response)==null?void 0:l.data)==null?void 0:g.message,type:"error"}))},onSuccess:f=>{var l;a.invalidateQueries({queryKey:["verify-user"]}),_($({message:(l=f==null?void 0:f.data)==null?void 0:l.message,type:"success"})),r({}),t("address")}}),c=async f=>{console.log({...f,firstName:o.firstName,lastName:o.lastName}),await i(f)};return e.jsxs(e.Fragment,{children:[e.jsx(X,{isLoading:d}),e.jsx(m,{item:!0,xs:12,md:8,children:e.jsx("form",{className:"form",onSubmit:x(c),children:e.jsxs(m,{container:!0,spacing:2,columnSpacing:2,children:[e.jsxs(m,{item:!0,xs:12,sm:6,children:[e.jsx("label",{htmlFor:"name",className:"inputLabel",children:"name"}),e.jsx(N,{id:"name",placeholder:"Enter your first name",...p("name",{required:"this field is required",maxLength:{value:15,message:"the maximum first name can be 15 characters"}}),fullWidth:!0,defaultValue:s==null?void 0:s.name,error:n==null?void 0:n.name}),e.jsx("p",{className:"error",children:(C=n==null?void 0:n.name)==null?void 0:C.message})]}),e.jsxs(m,{item:!0,xs:12,sm:6,children:[e.jsx("label",{htmlFor:"city-name",className:"inputLabel",children:"city name"}),e.jsx(N,{id:"city-name",placeholder:"Enter your city name",...p("cityName",{required:"this field is required"}),fullWidth:!0,defaultValue:s==null?void 0:s.cityName,error:n==null?void 0:n.cityName}),e.jsx("p",{className:"error",children:(j=n==null?void 0:n.cityName)==null?void 0:j.message})]}),e.jsxs(m,{item:!0,xs:12,sm:6,children:[e.jsx("label",{htmlFor:"country-name",className:"inputLabel",children:"country name"}),e.jsx(N,{id:"country-name",placeholder:"Enter your country name",...p("countryName",{required:"this field is required"}),fullWidth:!0,defaultValue:s==null?void 0:s.countryName,error:n==null?void 0:n.countryName}),e.jsx("p",{className:"error",children:(v=n==null?void 0:n.countryName)==null?void 0:v.message})]}),e.jsxs(m,{item:!0,xs:12,sm:6,children:[e.jsx("label",{htmlFor:"phone-number",className:"inputLabel",children:"phone number"}),e.jsx(N,{id:"phone-number",placeholder:"Enter your phone number",...p("phoneNumber",{required:"this field is required",pattern:{value:/^\d+$/,message:"phone number must contain numbers"}}),fullWidth:!0,defaultValue:s==null?void 0:s.phoneNumber,error:n==null?void 0:n.phoneNumber}),e.jsx("p",{className:"error",children:(h=n==null?void 0:n.phoneNumber)==null?void 0:h.message})]}),e.jsxs(m,{item:!0,xs:12,children:[e.jsx("label",{htmlFor:"address",className:"inputLabel",children:"address"}),e.jsx(N,{id:"address",placeholder:"Enter your last name",...p("address",{required:"this field is required"}),fullWidth:!0,defaultValue:s==null?void 0:s.address,error:n==null?void 0:n.address}),e.jsx("p",{className:"error",children:(y=n==null?void 0:n.address)==null?void 0:y.message})]}),e.jsx("input",{type:"hidden",...p("_id"),value:s._id}),e.jsxs(m,{item:!0,xs:12,sx:{display:"flex",justifyContent:"space-between"},children:[e.jsx(b,{variant:"contained",color:"error",startIcon:e.jsx(te,{}),onClick:()=>t("address"),children:"cancel"}),e.jsx(b,{variant:"contained",type:"submit",sx:{marginLeft:"12px"},startIcon:e.jsx(B,{}),children:"save data"})]})]})})})]})},As=()=>{var a,p,x,n;const{user:t}=P(i=>i.user),[s,r]=u.useState("address"),[o,_]=u.useState({});return e.jsxs(e.Fragment,{children:[s==="address"&&e.jsx(m,{item:!0,xs:12,md:8,children:e.jsx(z,{children:e.jsxs(R.div,{initial:{y:-100},animate:{y:1},exit:{opacity:0},children:[e.jsx(b,{sx:{margin:"16px 0"},onClick:()=>r("add address"),variant:"contained",startIcon:e.jsx(We,{}),children:"add address"}),e.jsx(m,{container:!0,spacing:2,children:((p=(a=t==null?void 0:t.address)==null?void 0:a.items)==null?void 0:p.length)===0?e.jsx(W,{data:"address"}):(n=(x=t==null?void 0:t.address)==null?void 0:x.items)==null?void 0:n.map(i=>e.jsx(m,{item:!0,xs:12,sm:6,children:e.jsx(Qs,{setActive:r,address:i,setEditedAddress:_},i._id)},i._id))})]})})}),s==="add address"&&e.jsx(Us,{setActive:r,editedAddress:o,setEditedAddress:_})]})},Gs=()=>{var h,y,f;const t=q(),[s,r]=u.useState(!1),[o,_]=u.useState(!1),[a,p]=u.useState(!1),x=O(),{register:n,handleSubmit:i,watch:d,formState:{errors:c}}=J(),{mutateAsync:C,isLoading:j}=F({mutationFn:async l=>Me(l),onError:l=>{var g,I;console.log(l),t($({message:(I=(g=l==null?void 0:l.response)==null?void 0:g.data)==null?void 0:I.message,type:"error"}))},onSuccess:l=>{console.log(l),x.invalidateQueries({queryKey:["logout-user"]}),t(me())}}),v=async l=>{console.log(l),await C(l)};return e.jsxs(e.Fragment,{children:[e.jsx(X,{isLoading:j}),e.jsx(m,{item:!0,xs:12,md:4,marginTop:"16px",children:e.jsx(z,{children:e.jsx(R.div,{initial:{y:-100},animate:{y:1},exit:{opacity:0},children:e.jsxs("form",{onSubmit:i(v),className:"form",children:[e.jsxs(m,{item:!0,xs:12,marginTop:{xs:"0",md:""},children:[e.jsx("label",{htmlFor:"password",className:"inputLabel",children:"Current Password"}),e.jsx(H,{marginTop:{xs:"10px",md:"4px"},type:s?"text":"password",endAdornment:e.jsx(K,{position:"end",children:e.jsx(A,{"aria-label":"toggle password visibility",onClick:()=>r(l=>!l),edge:"end",children:s?e.jsx(Q,{}):e.jsx(U,{})})}),error:c==null?void 0:c.password,placeholder:"Enter your current password",fullWidth:!0,...n("password",{required:"this field is required",pattern:{value:/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,message:"password is invalid"}})})]}),e.jsx("p",{className:"error",children:(h=c==null?void 0:c.password)==null?void 0:h.message}),e.jsxs(m,{item:!0,xs:12,marginTop:{xs:"0",md:""},children:[e.jsx("label",{htmlFor:"password",className:"inputLabel",children:"New Password"}),e.jsx(H,{marginTop:{xs:"10px",md:"4px"},type:o?"text":"password",endAdornment:e.jsx(K,{position:"end",children:e.jsx(A,{"aria-label":"toggle password visibility",onClick:()=>_(l=>!l),edge:"end",children:o?e.jsx(Q,{}):e.jsx(U,{})})}),error:c==null?void 0:c.newPassword,placeholder:"Enter your new password",fullWidth:!0,...n("newPassword",{required:"this field is required",pattern:{value:/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,message:"password is invalid"},validate:()=>{if(d("newPassword")===d("password"))return"fuck"}})})]}),e.jsx("p",{className:"error",children:(y=c==null?void 0:c.newPassword)==null?void 0:y.message}),e.jsxs(m,{item:!0,xs:12,marginTop:{xs:"0",md:""},children:[e.jsx("label",{htmlFor:"password",className:"inputLabel",children:"Confirm New Password"}),e.jsx(H,{marginTop:{xs:"10px",md:"4px"},type:a?"text":"password",endAdornment:e.jsx(K,{position:"end",children:e.jsx(A,{"aria-label":"toggle password visibility",onClick:()=>p(l=>!l),edge:"end",children:a?e.jsx(Q,{}):e.jsx(U,{})})}),error:c==null?void 0:c.confirmPassword,placeholder:"Enter your confirm password",fullWidth:!0,...n("confirmPassword",{required:"this field is required",pattern:{value:/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,message:"password is invalid"},validate:l=>{if(d("newPassword")!==l)return"password and confirm password does not match";if(d("confirmPassword")===d("password"))return"fuck"}})})]}),e.jsx("p",{className:"error",children:(f=c==null?void 0:c.confirmPassword)==null?void 0:f.message}),e.jsx("p",{children:"By changing your password, you will be logged out of your current account and must log in again"}),e.jsx(m,{item:!0,xs:12,margin:"16px 0",display:"flex",justifyContent:"center",children:e.jsx(b,{sx:{width:"100%"},startIcon:e.jsx(B,{}),variant:"contained",type:"submit",children:"save"})})]})})})})]})},wa=()=>{const[t,s]=u.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(Be,{"aria-label":"breadcrumb",children:[e.jsx($e,{to:"/",className:"breadCrumLink",children:"home"}),e.jsx("span",{className:"breadCrumText",children:"account details"})]}),e.jsx("h1",{className:L.title,children:"my account"}),e.jsxs(m,{container:!0,children:[e.jsx(m,{item:!0,xs:12,md:3,children:e.jsx("div",{className:L.containerTitles,children:e.jsxs("ul",{className:L.ulTitles,children:[e.jsx("li",{onClick:()=>s(0),className:t===0&&L.active,children:"account details"}),e.jsx("li",{onClick:()=>s(1),className:t===1&&L.active,children:"orders list"}),e.jsx("li",{onClick:()=>s(2),className:t===2&&L.active,children:"favorite products"}),e.jsx("li",{onClick:()=>s(3),className:t===3&&L.active,children:"addresses"}),e.jsx("li",{onClick:()=>s(4),className:t===4&&L.active,children:"change password"})]})})}),t===0&&e.jsx(St,{}),t===1&&e.jsx(hn,{}),t===2&&e.jsx(es,{}),t===3&&e.jsx(As,{}),t===4&&e.jsx(Gs,{})]})]})};export{wa as default};