(this["webpackJsonpteam-project"]=this["webpackJsonpteam-project"]||[]).push([[0],{105:function(e,r,t){e.exports={newPassOverlay:"NewPassword_newPassOverlay__1SDdp",spanText:"NewPassword_spanText__3l6cJ"}},107:function(e,r,t){e.exports={registrationOverlay:"Registration_registrationOverlay__3EAxe",serverError:"Registration_serverError__1DKFD"}},108:function(e,r,t){e.exports={profileOverlay:"Profile_profileOverlay__2Mdwa",profile:"Profile_profile__3pHxS"}},132:function(e,r,t){e.exports={errorOverlay:"Error404_errorOverlay__2XWN1"}},166:function(e,r,t){},167:function(e,r,t){},264:function(e,r,t){"use strict";t.r(r);var a,n=t(0),s=t(14),c=t.n(s),i=(t(166),t(167),t(36)),o=t(24),l=t(132),d=t.n(l),u=t(3),j=function(){return Object(u.jsx)("div",{className:d.a.errorOverlay,children:"page 404 page 404 page 404 page 404 page 404 page 404 page 404 page 404 page 404 page 404 page 404 page 404"})},b=t(13),m=t(19),O=t(150),p=t(295),h=t(306),f=t(299),_=t(302),v=t(307),x=t(304),E=t(300),g=t(137),w=t.n(g).a.create({baseURL:"http://localhost:7542/2.0/",withCredentials:!0,headers:{}}),P=function(e,r){return w.post("/auth/register",{email:e,password:r}).then((function(e){return e.data}))},R=function(){return w.get("auth/me").then((function(e){return e.data}))},S=function(e,r){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return w.post("auth/login",{email:e,password:r,rememberMe:t}).then((function(e){return e.data}))},y=function(){return w.delete("auth/me")},T=function(e,r,t){return w.post("auth/forgot",{email:e,from:r,message:t}).then((function(e){return e.data}))},N=function(e,r){return w.post("/auth/set-new-password",{password:e,myToken:r}).then((function(e){return e.data}))},I=function(){return w.get("/cards/pack").then((function(e){return e.data.cardPacks}))};!function(e){e.SET_PROFILE="loginReducer/SET_PROFILE"}(a||(a={}));var k,L={profile:null};!function(e){e.SET_IS_LOGIN="authReducer/SET_IS_LOGIN",e.SET_IS_REGISTERED="authReducer/SET_IS_REGISTERED",e.SET_ERROR="authReducer/SET_ERROR"}(k||(k={}));var A,C={isLogin:!1,isRegistered:!1,error:""},F=function(e){return{type:k.SET_ERROR,error:e}},G=function(e){return function(r){P(e.email,e.password).then((function(e){var t;r((t=!0,{type:k.SET_IS_REGISTERED,value:t}))})).catch((function(e){r(F("Email already exists"))}))}};!function(e){e.SET_IS_LOGIN="loginReducer/SET-IS-LOGGED-IN",e.SET_IS_ERROR="loginReducer/SET-IS-ERROR"}(A||(A={}));var D,W={isLoggedIn:!1,error:""},H=function(e){return{type:A.SET_IS_LOGIN,value:e}},K=function(e){return{type:A.SET_IS_ERROR,error:e}},M=function(e){return function(r){S(e.email,e.password,e.rememberMe).then((function(e){var t,n;r(H(!0)),r((t=!0,{type:k.SET_IS_LOGIN,value:t})),r((n=e,{type:a.SET_PROFILE,profile:n}))})).catch((function(e){r(K(e.error))}))}};!function(e){e.SET_INITIALIZED_APP="appReducer/SET_INITIALIZED_APP",e.CHANGE_STATUS="appReducer/CHANGE_STATUS"}(D||(D={}));var V,q={isInitialized:!1,status:"idle"},z=function(){return function(e){R().then((function(r){var t;e((t=!0,{type:D.SET_INITIALIZED_APP,value:t}))}))}},B=function(){var e=Object(m.b)(),r=Object(m.c)((function(e){return e.login.isLoggedIn})),t=Object(O.a)({initialValues:{email:"nya-admin@nya.nya",password:"1qazxcvBG",rememberMe:!0},validate:function(e){var r={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(r.email="\u041d\u0435\u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 email"):r.email="\u041f\u043e\u043b\u0435 email \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e",e.password?e.password.length<3&&(r.password="\u0414\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):r.password="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e",r},onSubmit:function(r){e(M({email:r.email,password:r.password,rememberMe:r.rememberMe})),e(z()),t.resetForm()}});return r?Object(u.jsx)(o.a,{to:"/profile"}):Object(u.jsx)(p.a,{container:!0,justify:"center",children:Object(u.jsx)(p.a,{item:!0,xs:4,children:Object(u.jsx)("form",{onSubmit:t.handleSubmit,children:Object(u.jsx)(h.a,{children:Object(u.jsxs)(f.a,{children:[Object(u.jsx)("p",{children:"To log in use common test account credentials:"}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"Email: "})," nya-admin@nya.nya"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"Password: "})," 1qazxcvBG"]}),Object(u.jsx)(_.a,Object(b.a)({label:"Email",margin:"normal"},t.getFieldProps("email"))),t.touched.email&&t.errors.email?Object(u.jsx)("div",{style:{color:"red"},children:t.errors.email}):null,Object(u.jsx)(_.a,Object(b.a)({type:"password",label:"Password",margin:"normal"},t.getFieldProps("password"))),t.touched.password&&t.errors.password?Object(u.jsx)("div",{style:{color:"red"},children:t.errors.password}):null,Object(u.jsx)(v.a,{label:"Remember me",control:Object(u.jsx)(x.a,Object(b.a)({checked:t.values.rememberMe},t.getFieldProps("rememberMe")))}),t.touched.rememberMe&&t.errors.rememberMe?Object(u.jsx)("div",{style:{color:"red"},children:t.errors.rememberMe}):null,Object(u.jsx)(E.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})})})})})},Z=t(105),U=t.n(Z),Y=t(301),J=t(303),X=t(152);!function(e){e.SET_OK="forgotReducer/SET_OK",e.SET_ERROR="forgotReducer/SET_ERROR",e.SET_OK_NEW_PASS="forgotReducer/SET_OK_NEW_PASS",e.SET_ERROR_NEW_PASS="forgotReducer/SET_ERROR_NEW_PASS"}(V||(V={}));var $,Q={info:"To recover your password, enter your registration email:",infoNewPass:"Enter you new password: ",error:"",errorNewPass:""},ee=function(e){return{type:V.SET_ERROR,error:e}},re=function(e){return function(r){T(e.email,e.from,e.message).then((function(e){var t;r((t=e.info,{type:V.SET_OK,info:t}))})).catch((function(e){r(ee("Such email is not registered"))}))}},te=function(e,r){return function(t){N(e,r).then((function(e){var r;t((r="password change",{type:V.SET_OK_NEW_PASS,infoNewPass:r}))})).catch((function(e){var r;t((r="error new password",{type:V.SET_ERROR_NEW_PASS,errorNewPass:r}))}))}},ae=function(){var e=Object(m.b)(),r=Object(m.c)((function(e){return e.passRec.errorNewPass})),t=Object(m.c)((function(e){return e.passRec.infoNewPass})),a=Object(o.g)(),n=a.location.pathname.slice(10,a.location.pathname.length);return Object(u.jsxs)("div",{className:U.a.newPassOverlay,children:[Object(u.jsx)("span",{className:U.a.spanText,children:t}),Object(u.jsxs)(Y.a,Object(b.a)(Object(b.a)({},{labelCol:{span:8},wrapperCol:{span:16}}),{},{name:"basic",initialValues:{remember:!0},onFinish:function(r){e(te(r.newPassword1,n))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(u.jsx)(Y.a.Item,{label:"new password: ",name:"newPassword1",hasFeedback:!0,rules:[{required:!0,message:"Please input your password!"},function(e){var r=e.getFieldValue;return{validator:function(e,t){return t.length<8?Promise.reject(new Error("8 and more symbols...")):t.length>8||!t||r("password1")===t?Promise.resolve():Promise.reject(new Error("Two passwords do not match!"))}}}],children:Object(u.jsx)(J.a.Password,{})}),Object(u.jsx)(Y.a.Item,{label:"repeat password: ",name:"newPassword2",hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var r=e.getFieldValue;return{validator:function(e,t){return t.length<8?Promise.reject(new Error("8 and more symbols...")):t.length>8||!t||r("password1")===t?Promise.resolve():Promise.reject(new Error("Two passwords do not match!"))}}}],children:Object(u.jsx)(J.a.Password,{})}),Object(u.jsx)(X.a,{type:"primary",htmlType:"submit",children:"change password"})]})),Object(u.jsx)("div",{children:r})]})},ne=t(70),se=t.n(ne),ce=function(){var e=Object(m.b)(),r=Object(m.c)((function(e){return e.passRec.error})),t=Object(m.c)((function(e){return e.passRec.info}));return Object(u.jsxs)("div",{className:se.a.passRecOverlay,children:[Object(u.jsx)("span",{className:se.a.nameRecPass,children:t}),Object(u.jsxs)(Y.a,{className:se.a.formRecPass,name:"recoveryPass",initialValues:{remember:!0},onFinish:function(r){e(re({email:r.emailRecPass,message:"<div>\n\t\t\t\t\t\t\t\t\t\t\t\u0432\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u043e\u043b\u044f, \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435:\n\t\t\t\t\t\t\t\t\t\t\t<a href='https://baranovaleksei.github.io/teamProject/#/new-pass/$token$'>link</a>\n\t\t\t\t\t\t\t\t\t\t\t\u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u0431\u044b\u043b\u0438 \u043d\u0430 \u0412\u044b - \u0442\u043e \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u0435\u043b\u0430\u0439\u0442\u0435\n\t\t\t\t\t\t\t\t\t</div>",from:"THE BEST MY TEAM baranov.sys@gmail.com"})),setTimeout((function(){e(ee(""))}),5e3)},children:[Object(u.jsx)(Y.a.Item,{label:"Email",name:"emailRecPass",rules:[{type:"email",required:!0,message:"Please input your email"}],children:Object(u.jsx)(J.a,{})}),Object(u.jsxs)("span",{className:se.a.nameRecPass,children:[" ",r," "]}),Object(u.jsx)(Y.a.Item,{children:Object(u.jsx)(X.a,{type:"primary",htmlType:"submit",children:"send message"})})]})]})},ie=t(107),oe=t.n(ie),le=function(){var e=Object(m.b)(),r=Object(m.c)((function(e){return e.auth.isRegistered})),t=Object(m.c)((function(e){return e.auth.error}));return r?Object(u.jsx)(o.a,{to:"/login"}):Object(u.jsx)("div",{className:oe.a.registrationOverlay,children:Object(u.jsxs)(Y.a,Object(b.a)(Object(b.a)({},{labelCol:{span:8},wrapperCol:{span:16}}),{},{name:"basic",initialValues:{remember:!0},onFinish:function(r){e(G({email:r.email,password:r.password1})),setTimeout((function(){e(F(""))}),1e4)},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(u.jsx)(Y.a.Item,{label:"email",name:"email",rules:[{required:!0,message:"Please input your email!"},{type:"email",message:"The input is not valid E-mail!"}],children:Object(u.jsx)(J.a,{style:{width:"100%"}})}),Object(u.jsx)(Y.a.Item,{label:"Password1",name:"password1",hasFeedback:!0,rules:[{required:!0,message:"Please input your password!"},function(e){var r=e.getFieldValue;return{validator:function(e,t){return t.length<8?Promise.reject(new Error("8 and more symbols...")):t.length>8||!t||r("password1")===t?Promise.resolve():Promise.reject(new Error("Two passwords do not match!"))}}}],children:Object(u.jsx)(J.a.Password,{})}),Object(u.jsx)(Y.a.Item,{label:"Password2",name:"password2",hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var r=e.getFieldValue;return{validator:function(e,t){return t.length<8?Promise.reject(new Error("8 and more symbols...")):t.length>8||!t||r("password1")===t?Promise.resolve():Promise.reject(new Error("Two passwords do not match!"))}}}],children:Object(u.jsx)(J.a.Password,{})}),Object(u.jsx)(X.a,{type:"primary",htmlType:"submit",children:"Button"}),Object(u.jsx)("div",{className:oe.a.serverError,children:t})]}))})},de=t(108),ue=t.n(de),je=function(){var e=Object(m.b)(),r=Object(m.c)((function(e){return e.login.isLoggedIn})),t=Object(m.c)((function(e){return e.profile.profile})),a=Object(m.c)((function(e){return e.auth.isLogin}));if(console.log("isLogin",a),!r)return Object(u.jsx)(o.a,{to:"/login"});return Object(u.jsx)("div",{className:ue.a.profileOverlay,children:t&&Object(u.jsxs)("div",{className:ue.a.profile,children:[Object(u.jsx)("img",{src:t.avatar,alt:""}),Object(u.jsxs)("div",{children:["name: ",t.name," ",Object(u.jsx)("br",{}),"token: ",t.token," ",Object(u.jsx)("br",{}),"_id: ",t._id,Object(u.jsx)("br",{}),"email: ",t.email,Object(u.jsx)("br",{}),"created: ",t.created,Object(u.jsx)("br",{}),"admin: ",t.isAdmin?"yes":"no",Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:"/packs",children:" Packs"})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){e((function(e){y().then((function(r){e(H(!1))})).catch((function(r){e(K(r.error))}))}))},children:"Log out"})})]})})},be=t(60),me=t.n(be),Oe=t(109);!function(e){e.SET_CARD_PACKS="packsReducer/SET_CARD_PACKS"}($||($={}));var pe={cardPacks:[],cardPacksTotalCount:0,maxCardsCount:1e3,minCardsCount:0,page:1,pageCount:10},he=function(){return function(e){I().then((function(r){var t;e((t=r,{type:$.SET_CARD_PACKS,cards:t}))}))}},fe=function(){var e=Object(m.b)(),r=Object(m.c)((function(e){return e.pack.cardPacks}));return Object(n.useEffect)((function(){e(he())}),[]),Object(u.jsxs)("div",{className:me.a.container,children:[Object(u.jsxs)("div",{className:me.a.header,children:[Object(u.jsx)("p",{children:"Name"}),Object(u.jsx)("p",{style:{marginRight:"120px"},children:"cardsCount"}),Object(u.jsx)("p",{children:"updated"}),Object(u.jsx)("p",{children:"Add"})]}),r.map((function(e,r){return Object(u.jsxs)("ul",{className:me.a.cardPacksWrapper,children:[Object(u.jsx)("li",{className:me.a.card,children:e.name}),Object(u.jsx)("li",{className:me.a.card,children:e.cardsCount}),Object(u.jsx)("li",{className:me.a.card,children:e.updated}),Object(u.jsx)(X.a,{type:"primary",children:"delete"}),Object(u.jsx)(X.a,{style:{marginLeft:"10px"},type:"primary",children:"update"})]},r)}))]})},_e="/login",ve="/registration",xe="/pass-recovery",Ee="/new-pass",ge="/profile",we="/packs";var Pe=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"/",exact:!0,render:function(){return Object(u.jsx)(o.a,{to:_e})}}),Object(u.jsx)(o.b,{path:"/teamProject",exact:!0,render:function(){return Object(u.jsx)(je,{})}}),Object(u.jsx)(o.b,{path:_e,render:function(){return Object(u.jsx)(B,{})}}),Object(u.jsx)(o.b,{path:ve,render:function(){return Object(u.jsx)(le,{})}}),Object(u.jsx)(o.b,{path:xe,render:function(){return Object(u.jsx)(ce,{})}}),Object(u.jsx)(o.b,{path:Ee,render:function(){return Object(u.jsx)(ae,{})}}),Object(u.jsx)(o.b,{path:ge,render:function(){return Object(u.jsx)(je,{})}}),Object(u.jsx)(o.b,{path:we,render:function(){return Object(u.jsx)(fe,{})}}),Object(u.jsx)(o.b,{path:"/404",render:function(){return Object(u.jsx)(j,{})}}),Object(u.jsx)(o.a,{from:"*",to:"/404"})]})})},Re=t(39),Se=t.n(Re);var ye=function(){return Object(u.jsxs)("div",{className:Se.a.nav,children:[Object(u.jsx)("button",{className:Se.a.menuHover,children:" \u041c\u0435\u043d\u044e "}),Object(u.jsxs)("div",{className:Se.a.items,children:[Object(u.jsx)("div",{className:Se.a.item,children:Object(u.jsx)(i.c,{to:ge,activeClassName:Se.a.activeLink,children:"Profile"})}),Object(u.jsx)("div",{className:Se.a.item,children:Object(u.jsx)(i.c,{to:_e,activeClassName:Se.a.activeLink,children:"Login"})}),Object(u.jsx)("div",{className:Se.a.item,children:Object(u.jsx)(i.c,{to:ve,activeClassName:Se.a.activeLink,children:"Registration"})}),Object(u.jsx)("div",{className:Se.a.item,children:Object(u.jsx)(i.c,{to:xe,activeClassName:Se.a.activeLink,children:"Password recovery"})}),Object(u.jsx)("div",{className:Se.a.item,children:Object(u.jsx)(i.c,{to:we,activeClassName:Se.a.activeLink,children:"Packs"})})]})]})};var Te=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(i.b,{children:[Object(u.jsx)(ye,{}),Object(u.jsx)(Pe,{})]})})},Ne=t(64),Ie=t(149),ke=Object(Ne.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case k.SET_IS_LOGIN:return Object(b.a)(Object(b.a)({},e),{},{isLogin:r.value});case k.SET_IS_REGISTERED:return Object(b.a)(Object(b.a)({},e),{},{isRegistered:r.value});case k.SET_ERROR:return Object(b.a)(Object(b.a)({},e),{},{error:r.error});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case D.CHANGE_STATUS:return Object(b.a)(Object(b.a)({},e),{},{isInitialized:r.value});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case A.SET_IS_LOGIN:return Object(b.a)(Object(b.a)({},e),{},{isLoggedIn:r.value});case A.SET_IS_ERROR:return Object(b.a)(Object(b.a)({},e),{},{error:r.error});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case a.SET_PROFILE:return Object(b.a)(Object(b.a)({},e),{},{profile:r.profile});default:return e}},passRec:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case V.SET_OK:return Object(b.a)(Object(b.a)({},e),{},{info:r.info});case V.SET_ERROR:return Object(b.a)(Object(b.a)({},e),{},{error:r.error});case V.SET_OK_NEW_PASS:return Object(b.a)(Object(b.a)({},e),{},{infoNewPass:r.infoNewPass});case V.SET_ERROR_NEW_PASS:return Object(b.a)(Object(b.a)({},e),{},{errorNewPass:r.errorNewPass});default:return e}},pack:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case $.SET_CARD_PACKS:return Object(b.a)(Object(b.a)({},e),{},{cardPacks:[].concat(Object(Oe.a)(e.cardPacks),Object(Oe.a)(r.cards))});default:return e}}}),Le=Object(Ne.d)(ke,Object(Ne.a)(Ie.a));window.store=Le,c.a.render(Object(u.jsx)(i.a,{children:Object(u.jsx)(m.a,{store:Le,children:Object(u.jsx)(Te,{})})}),document.getElementById("root"))},39:function(e,r,t){e.exports={nav:"Header_nav__3rYIR",menuHover:"Header_menuHover__2eDeL",items:"Header_items__3t3lP",item:"Header_item__11opL",activeLink:"Header_activeLink__3WAn0"}},60:function(e,r,t){e.exports={container:"Packs_container__8PjF6",header:"Packs_header__3nazv",cardPacksWrapper:"Packs_cardPacksWrapper__3wp-X",card:"Packs_card__3YlLU",buttonsWrapper:"Packs_buttonsWrapper__1BcVC",packs:"Packs_packs__H4xo7"}},70:function(e,r,t){e.exports={passRecOverlay:"PasswordRecovery_passRecOverlay__dDdKX",nameRecPass:"PasswordRecovery_nameRecPass__2C3uT",formRecPass:"PasswordRecovery_formRecPass__l0PYz"}}},[[264,1,2]]]);
//# sourceMappingURL=main.82af03f9.chunk.js.map