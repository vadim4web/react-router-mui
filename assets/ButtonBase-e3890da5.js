import{r as a,R as A,b as X,_ as oe,c as x,j as $,a as Ee,w as ie,s as se,u as Te,g as ze,d as Ae}from"./index-69f9a04e.js";import{a as Xe,u as de}from"./DummyComponent-6ae2a449.js";function H(e){const t=a.useRef(e);return Xe(()=>{t.current=e}),a.useRef((...r)=>(0,t.current)(...r)).current}let G=!0,te=!1,he;const Ye={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function We(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&Ye[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function He(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function Ge(){this.visibilityState==="hidden"&&te&&(G=!0)}function qe(e){e.addEventListener("keydown",He,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",Ge,!0)}function Je(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||We(t)}function Qe(){const e=a.useCallback(n=>{n!=null&&qe(n.ownerDocument)},[]),t=a.useRef(!1);function r(){return t.current?(te=!0,window.clearTimeout(he),he=window.setTimeout(()=>{te=!1},100),t.current=!1,!0):!1}function u(n){return Je(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:r,ref:e}}function ne(e,t){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,n){return u.__proto__=n,u},ne(e,t)}function Ze(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ne(e,t)}const me=A.createContext(null);function et(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ae(e,t){var r=function(o){return t&&a.isValidElement(o)?t(o):o},u=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){u[n.key]=r(n)}),u}function tt(e,t){e=e||{},t=t||{};function r(d){return d in t?t[d]:e[d]}var u=Object.create(null),n=[];for(var o in e)o in t?n.length&&(u[o]=n,n=[]):n.push(o);var i,c={};for(var l in t){if(u[l])for(i=0;i<u[l].length;i++){var p=u[l][i];c[u[l][i]]=r(p)}c[l]=r(l)}for(i=0;i<n.length;i++)c[n[i]]=r(n[i]);return c}function k(e,t,r){return r[t]!=null?r[t]:e.props[t]}function nt(e,t){return ae(e.children,function(r){return a.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:k(r,"appear",e),enter:k(r,"enter",e),exit:k(r,"exit",e)})})}function rt(e,t,r){var u=ae(e.children),n=tt(t,u);return Object.keys(n).forEach(function(o){var i=n[o];if(a.isValidElement(i)){var c=o in t,l=o in u,p=t[o],d=a.isValidElement(p)&&!p.props.in;l&&(!c||d)?n[o]=a.cloneElement(i,{onExited:r.bind(null,i),in:!0,exit:k(i,"exit",e),enter:k(i,"enter",e)}):!l&&c&&!d?n[o]=a.cloneElement(i,{in:!1}):l&&c&&a.isValidElement(p)&&(n[o]=a.cloneElement(i,{onExited:r.bind(null,i),in:p.props.in,exit:k(i,"exit",e),enter:k(i,"enter",e)}))}}),n}var ot=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},it={component:"div",childFactory:function(t){return t}},ue=function(e){Ze(t,e);function t(u,n){var o;o=e.call(this,u,n)||this;var i=o.handleExited.bind(et(o));return o.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},o}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,o){var i=o.children,c=o.handleExited,l=o.firstRender;return{children:l?nt(n,c):rt(n,i,c),firstRender:!1}},r.handleExited=function(n,o){var i=ae(this.props.children);n.key in i||(n.props.onExited&&n.props.onExited(o),this.mounted&&this.setState(function(c){var l=X({},c.children);return delete l[n.key],{children:l}}))},r.render=function(){var n=this.props,o=n.component,i=n.childFactory,c=oe(n,["component","childFactory"]),l=this.state.contextValue,p=ot(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,o===null?A.createElement(me.Provider,{value:l},p):A.createElement(me.Provider,{value:l},A.createElement(o,c,p))},t}(A.Component);ue.propTypes={};ue.defaultProps=it;const st=ue;function at(e){const{className:t,classes:r,pulsate:u=!1,rippleX:n,rippleY:o,rippleSize:i,in:c,onExited:l,timeout:p}=e,[d,g]=a.useState(!1),b=x(t,r.ripple,r.rippleVisible,u&&r.ripplePulsate),C={width:i,height:i,top:-(i/2)+o,left:-(i/2)+n},h=x(r.child,d&&r.childLeaving,u&&r.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&l!=null){const R=setTimeout(l,p);return()=>{clearTimeout(R)}}},[l,c,p]),$.jsx("span",{className:b,style:C,children:$.jsx("span",{className:h})})}const ut=Ee("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=ut,lt=["center","classes","className"];let q=e=>e,be,ge,Re,ye;const re=550,ct=80,pt=ie(be||(be=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ft=ie(ge||(ge=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),dt=ie(Re||(Re=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ht=se("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),mt=se(at,{name:"MuiTouchRipple",slot:"Ripple"})(ye||(ye=q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,pt,re,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,ft,re,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,dt,({theme:e})=>e.transitions.easing.easeInOut),bt=a.forwardRef(function(t,r){const u=Te({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:o={},className:i}=u,c=oe(u,lt),[l,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[l]);const b=a.useRef(!1),C=a.useRef(0),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{C.current&&clearTimeout(C.current)},[]);const O=a.useCallback(f=>{const{pulsate:y,rippleX:E,rippleY:D,rippleSize:_,cb:U}=f;p(T=>[...T,$.jsx(mt,{classes:{ripple:x(o.ripple,m.ripple),rippleVisible:x(o.rippleVisible,m.rippleVisible),ripplePulsate:x(o.ripplePulsate,m.ripplePulsate),child:x(o.child,m.child),childLeaving:x(o.childLeaving,m.childLeaving),childPulsate:x(o.childPulsate,m.childPulsate)},timeout:re,pulsate:y,rippleX:E,rippleY:D,rippleSize:_},d.current)]),d.current+=1,g.current=U},[o]),N=a.useCallback((f={},y={},E=()=>{})=>{const{pulsate:D=!1,center:_=n||y.pulsate,fakeElement:U=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const T=U?null:R.current,P=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,B,L;if(_||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(P.width/2),B=Math.round(P.height/2);else{const{clientX:F,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(F-P.left),B=Math.round(V-P.top)}if(_)L=Math.sqrt((2*P.width**2+P.height**2)/3),L%2===0&&(L+=1);else{const F=Math.max(Math.abs((T?T.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((T?T.clientHeight:0)-B),B)*2+2;L=Math.sqrt(F**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{O({pulsate:D,rippleX:v,rippleY:B,rippleSize:L,cb:E})},C.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},ct)):O({pulsate:D,rippleX:v,rippleY:B,rippleSize:L,cb:E})},[n,O]),I=a.useCallback(()=>{N({},{pulsate:!0})},[N]),j=a.useCallback((f,y)=>{if(clearTimeout(C.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,C.current=setTimeout(()=>{j(f,y)});return}h.current=null,p(E=>E.length>0?E.slice(1):E),g.current=y},[]);return a.useImperativeHandle(r,()=>({pulsate:I,start:N,stop:j}),[I,N,j]),$.jsx(ht,X({className:x(m.root,o.root,i),ref:R},c,{children:$.jsx(st,{component:null,exit:!0,children:l})}))}),gt=bt;function Rt(e){return ze("MuiButtonBase",e)}const yt=Ee("MuiButtonBase",["root","disabled","focusVisible"]),Et=yt,Tt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Mt=e=>{const{disabled:t,focusVisible:r,focusVisibleClassName:u,classes:n}=e,i=Ae({root:["root",t&&"disabled",r&&"focusVisible"]},Rt,n);return r&&u&&(i.root+=` ${u}`),i},xt=se("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Et.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Ct=a.forwardRef(function(t,r){const u=Te({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:o=!1,children:i,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:O,onDragLeave:N,onFocus:I,onFocusVisible:j,onKeyDown:f,onKeyUp:y,onMouseDown:E,onMouseLeave:D,onMouseUp:_,onTouchEnd:U,onTouchMove:T,onTouchStart:P,tabIndex:v=0,TouchRippleProps:B,touchRippleRef:L,type:F}=u,V=oe(u,Tt),K=a.useRef(null),M=a.useRef(null),Me=de(M,L),{isFocusVisibleRef:le,onFocus:xe,onBlur:Ce,ref:ve}=Qe(),[S,Y]=a.useState(!1);p&&S&&Y(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{Y(!0),K.current.focus()}}),[]);const[J,Ve]=a.useState(!1);a.useEffect(()=>{Ve(!0)},[]);const we=J&&!d&&!p;a.useEffect(()=>{S&&b&&!d&&J&&M.current.pulsate()},[d,b,S,J]);function w(s,pe,Ke=g){return H(fe=>(pe&&pe(fe),!Ke&&M.current&&M.current[s](fe),!0))}const Pe=w("start",E),Be=w("stop",O),Le=w("stop",N),De=w("stop",_),Fe=w("stop",s=>{S&&s.preventDefault(),D&&D(s)}),Se=w("start",P),ke=w("stop",U),$e=w("stop",T),Ne=w("stop",s=>{Ce(s),le.current===!1&&Y(!1),h&&h(s)},!1),je=H(s=>{K.current||(K.current=s.currentTarget),xe(s),le.current===!0&&(Y(!0),j&&j(s)),I&&I(s)}),Q=()=>{const s=K.current;return l&&l!=="button"&&!(s.tagName==="A"&&s.href)},Z=a.useRef(!1),_e=H(s=>{b&&!Z.current&&S&&M.current&&s.key===" "&&(Z.current=!0,M.current.stop(s,()=>{M.current.start(s)})),s.target===s.currentTarget&&Q()&&s.key===" "&&s.preventDefault(),f&&f(s),s.target===s.currentTarget&&Q()&&s.key==="Enter"&&!p&&(s.preventDefault(),R&&R(s))}),Oe=H(s=>{b&&s.key===" "&&M.current&&S&&!s.defaultPrevented&&(Z.current=!1,M.current.stop(s,()=>{M.current.pulsate(s)})),y&&y(s),R&&s.target===s.currentTarget&&Q()&&s.key===" "&&!s.defaultPrevented&&R(s)});let W=l;W==="button"&&(V.href||V.to)&&(W=C);const z={};W==="button"?(z.type=F===void 0?"button":F,z.disabled=p):(!V.href&&!V.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const Ie=de(r,ve,K),ce=X({},u,{centerRipple:o,component:l,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:S}),Ue=Mt(ce);return $.jsxs(xt,X({as:W,className:x(Ue.root,c),ownerState:ce,onBlur:Ne,onClick:R,onContextMenu:Be,onFocus:je,onKeyDown:_e,onKeyUp:Oe,onMouseDown:Pe,onMouseLeave:Fe,onMouseUp:De,onDragLeave:Le,onTouchEnd:ke,onTouchMove:$e,onTouchStart:Se,ref:Ie,tabIndex:p?-1:v,type:F},z,V,{children:[i,we?$.jsx(gt,X({ref:Me,center:o},B)):null]}))}),Pt=Ct;export{Pt as B,Qe as a,H as u};
