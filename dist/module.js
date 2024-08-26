/* [create-plugin] version: 5.3.2 */
define(["@grafana/data","@grafana/runtime","@grafana/ui","module","react"],((e,r,t,n,o)=>(()=>{"use strict";var a={781:r=>{r.exports=e},531:e=>{e.exports=r},7:e=>{e.exports=t},308:e=>{e.exports=n},959:e=>{e.exports=o}},i={};function l(e){var r=i[e];if(void 0!==r)return r.exports;var t=i[e]={exports:{}};return a[e](t,t.exports,l),t.exports}l.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return l.d(r,{a:r}),r},l.d=(e,r)=>{for(var t in r)l.o(r,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="public/plugins/aliyuncms-datasource/";var u={};l.r(u),l.d(u,{plugin:()=>J});var c=l(308),s=l.n(c);l.p=s()&&s().uri?s().uri.slice(0,s().uri.lastIndexOf("/")+1):"public/plugins/aliyuncms-datasource/";var p=l(781),d=l(531);const b={XColumn:"timestamp"};function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function y(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}class g extends d.DataSourceWithBackend{getAvailableNamespaces(){return this.getResource("namespaces")}getAvailableGroups(){return console.log(this),this.getResource("groups")}getAvailableMetrics(e){return this.getResource(`metrics?namespace=${e}`)}getAvailablePeriods(e,r){return this.getResource(`periods?namespace=${e}&metric=${r}`)}getAvailableStatistics(e,r){return this.getResource(`statistics?namespace=${e}&metric=${r}`)}getDefaultQuery(e){return b}applyTemplateVariables(e,r){return y(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){f(e,r,t[r])}))}return e}({},e),{Namespace:(0,d.getTemplateSrv)().replace(e.Namespace,r),Metric:(0,d.getTemplateSrv)().replace(e.Metric,r)})}filterQuery(e){return!!e.Namespace}constructor(e){super(e)}}var v=l(959),m=l.n(v),O=l(7);function j(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){j(e,r,t[r])}))}return e}function P(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}var w=function(){return w=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},w.apply(this,arguments)};Object.create;Object.create;function S(e,r,t){void 0===r&&(r=[]),void 0===t&&(t={loading:!1});var n,o,a=(0,v.useRef)(0),i=(n=(0,v.useRef)(!1),o=(0,v.useCallback)((function(){return n.current}),[]),(0,v.useEffect)((function(){return n.current=!0,function(){n.current=!1}}),[]),o),l=(0,v.useState)(t),u=l[0],c=l[1],s=(0,v.useCallback)((function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var n=++a.current;return u.loading||c((function(e){return w(w({},e),{loading:!0})})),e.apply(void 0,r).then((function(e){return i()&&n===a.current&&c({value:e,loading:!1}),e}),(function(e){return i()&&n===a.current&&c({error:e,loading:!1}),e}))}),r);return[u,s]}function E(e,r){void 0===r&&(r=[]);var t=S(e,r,{loading:!0}),n=t[0],o=t[1];return(0,v.useEffect)((function(){o()}),[o]),n}function I(e,r,t,n,o,a,i){try{var l=e[a](i),u=l.value}catch(e){return void t(e)}l.done?r(u):Promise.resolve(u).then(n,o)}function D(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function i(e){I(a,n,o,i,l,"next",e)}function l(e){I(a,n,o,i,l,"throw",e)}i(void 0)}))}}function k(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function C(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){k(e,r,t[r])}))}return e}function N(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function F(e,r){return(0,v.useMemo)((()=>{if(e)return{label:null!=r?r:e,value:e}}),[r,e])}function A(e,r){const{onChange:t,onRunQuery:n,query:o}=e,{propertyName:a,runQuery:i}=r;return(0,v.useCallback)((e=>{(null==e?void 0:e.value)&&(t(N(C({},o),{[a]:e.value})),i&&n())}),[t,n,o,a,i])}const J=new p.DataSourcePlugin(g).setConfigEditor((function(e){const{onOptionsChange:r,options:t}=e,{jsonData:n,secureJsonFields:o,secureJsonData:a}=t;return m().createElement(m().Fragment,null,m().createElement(O.InlineField,{label:"Aliyun UserId",labelWidth:14,interactive:!0},m().createElement(O.Input,{id:"config-editor-aliyun-userid",onChange:e=>{r(P(h({},t),{jsonData:P(h({},n),{userId:e.target.value})}))},value:n.userId,placeholder:"",width:40})),m().createElement(O.InlineField,{label:"AccessKeyId",labelWidth:14,interactive:!0,tooltip:"Secure json field (backend only)"},m().createElement(O.SecretInput,{required:!0,id:"config-editor-aliyun-keyid",isConfigured:o.keyId,value:null==a?void 0:a.keyId,placeholder:"Enter your AccessKeyId",width:40,onReset:()=>{r(P(h({},t),{secureJsonFields:P(h({},t.secureJsonFields),{keyId:!1}),secureJsonData:P(h({},t.secureJsonData),{keyId:""})}))},onChange:e=>{r(P(h({},t),{secureJsonData:P(h({},t.secureJsonData),{keyId:e.target.value})}))}})),m().createElement(O.InlineField,{label:"AccessKey",labelWidth:14,interactive:!0,tooltip:"Secure json field (backend only)"},m().createElement(O.SecretInput,{required:!0,id:"config-editor-aliyun-key",isConfigured:o.key,value:null==a?void 0:a.key,placeholder:"Enter your AccessKey",width:40,onReset:()=>{r(P(h({},t),{secureJsonFields:P(h({},t.secureJsonFields),{key:!1}),secureJsonData:P(h({},t.secureJsonData),{key:""})}))},onChange:e=>{r(P(h({},t),{secureJsonData:P(h({},t.secureJsonData),{key:e.target.value})}))}})))})).setQueryEditor((function(e){var r,t;const{datasource:n,query:o}=e,{Namespace:a,Metric:i,Period:l,Statistic:u,Group:c,Filter:s}=o,p=A(e,{propertyName:"Namespace",runQuery:!1}),d=A(e,{propertyName:"Group",runQuery:!1}),b=A(e,{propertyName:"Metric",runQuery:!1}),f=A(e,{propertyName:"Period",runQuery:!1}),y=A(e,{propertyName:"Statistic",runQuery:!1}),g=function(e,r){const{onChange:t,onRunQuery:n,query:o}=e,{propertyName:a,runQuery:i}=r;return(0,v.useCallback)((e=>{t(N(C({},o),{[a]:parseInt(e.target.value)})),i&&n()}),[t,n,o,a,i])}(e,{propertyName:"Filter",runQuery:!1}),j=function(e){const r=E(D((function*(){return(yield e.getAvailableNamespaces()).map((e=>({label:e,value:e})))})),[e]);var t;return{loading:r.loading,namespaces:null!==(t=r.value)&&void 0!==t?t:[],error:r.error}}(n),h=F(a),P=function(e){const r=E(D((function*(){const r=yield e.getAvailableGroups();return Object.entries(r).map((e=>({value:e[0],label:e[1]})))})),[e]);var t;return{loading:r.loading,groups:null!==(t=r.value)&&void 0!==t?t:[],error:r.error}}(n),w=F(c,null===(t=P.groups)||void 0===t||null===(r=t.find((e=>e.value===c)))||void 0===r?void 0:r.label);var S;let I=function(e,r){const t=E(D((function*(){return(yield e.getAvailableMetrics(r)).map((e=>({label:e,value:e})))})),[e,r]);var n;return{loading:t.loading,metrics:null!==(n=t.value)&&void 0!==n?n:[],error:t.error}}(n,null!==(S=o.Namespace)&&void 0!==S?S:""),k=F(i);var J,M;let Q=function(e,r,t){const n=E(D((function*(){return(yield e.getAvailablePeriods(r,t)).map((e=>({label:e,value:e})))})),[e,r,t]);var o;return{loading:n.loading,periods:null!==(o=n.value)&&void 0!==o?o:[],error:n.error}}(n,null!==(J=o.Namespace)&&void 0!==J?J:"",null!==(M=o.Metric)&&void 0!==M?M:""),x=F(l);var R,W;let T=function(e,r,t){const n=E(D((function*(){return(yield e.getAvailableStatistics(r,t)).map((e=>({label:e,value:e})))})),[e,r,t]);var o;return{loading:n.loading,statistics:null!==(o=n.value)&&void 0!==o?o:[],error:n.error}}(n,null!==(R=o.Namespace)&&void 0!==R?R:"",null!==(W=o.Metric)&&void 0!==W?W:""),q=F(u);var G,K,$,_;return m().createElement(O.Stack,{gap:1,wrap:"wrap"},m().createElement(O.InlineField,{label:"Namespace",labelWidth:16,tooltip:""},m().createElement(O.Select,{inputId:"editor-namespace",options:j.namespaces,loading:j.loading,onChange:p,value:h})),m().createElement(O.InlineField,{label:"Metric",labelWidth:8},m().createElement(O.Select,{inputId:"editor-metric",options:null!==(G=I.metrics)&&void 0!==G?G:[],loading:I.loading,onChange:b,value:k})),m().createElement(O.InlineField,{label:"Period",labelWidth:8},m().createElement(O.Select,{inputId:"editor-period",options:null!==(K=Q.periods)&&void 0!==K?K:[],loading:Q.loading,onChange:f,value:x})),m().createElement(O.InlineField,{label:"Group",labelWidth:8},m().createElement(O.Select,{inputId:"editor-group",options:null!==($=P.groups)&&void 0!==$?$:[],loading:P.loading,onChange:d,value:w})),m().createElement(O.InlineField,{label:"Y-column",labelWidth:12},m().createElement(O.Select,{inputId:"editor-statistic",options:null!==(_=T.statistics)&&void 0!==_?_:[],loading:T.loading,onChange:y,value:q})),m().createElement(O.InlineField,{label:"Top-K",labelWidth:8},m().createElement(O.Input,{id:"editor-filter",onChange:g,value:s,width:8})))}));return u})()));
//# sourceMappingURL=module.js.map