(this["webpackJsonpteam-project"]=this["webpackJsonpteam-project"]||[]).push([[0],{103:function(e,r,t){e.exports={newPassOverlay:"NewPassword_newPassOverlay__1SDdp",spanText:"NewPassword_spanText__3l6cJ"}},105:function(e,r,t){e.exports={registrationOverlay:"Registration_registrationOverlay__3EAxe",serverError:"Registration_serverError__1DKFD"}},106:function(e,r,t){e.exports={profileOverlay:"Profile_profileOverlay__2Mdwa",profile:"Profile_profile__3pHxS"}},130:function(e,r,t){e.exports={errorOverlay:"Error404_errorOverlay__2XWN1"}},164:function(e,r,t){},165:function(e,r,t){},262:function(e,r,t){"use strict";t.r(r);t(0);var a,n=t(14),s=t.n(n),c=(t(164),t(165),t(23)),i=t(130),o=t.n(i),l=t(3),u=function(){return Object(l.jsx)("div",{className:o.a.errorOverlay,children:"page 404 page 404 page 404 page 404 page 404 page 404 page 404 page 404 page 404 page 404 page 404 page 404"})},d=t(13),j=t(25),b=t(148),m=t(293),O=t(304),p=t(297),h=t(300),f=t(305),v=t(302),_=t(298),x=t(135),g=t.n(x).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0,headers:{}}),E={registration:function(e,r){return g.post("/auth/register",{email:e,password:r}).then((function(e){return e.data}))},authMe:function(){return g.get("auth/me").then((function(e){return e.data}))},login:function(e,r){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return g.post("auth/login",{email:e,password:r,rememberMe:t}).then((function(e){return e.data}))},logOut:function(){return g.delete("auth/me")},passRec:function(e,r,t){return g.post("auth/forgot",{email:e,from:r,message:t}).then((function(e){return e.data}))},newPass:function(e,r){return g.post("/auth/set-new-password",{password:e,token:r}).then((function(e){return e.data}))}};!function(e){e.SET_PROFILE="loginReducer/SET_PROFILE"}(a||(a={}));var w,R={profile:null};!function(e){e.SET_IS_LOGIN="loginReducer/SET-IS-LOGGED-IN",e.SET_IS_ERROR="loginReducer/SET-IS-ERROR"}(w||(w={}));var S,P={isLoggedIn:!1,error:""},y=function(e){return{type:w.SET_IS_LOGIN,value:e}},T=function(e){return{type:w.SET_IS_ERROR,error:e}},I=function(e){return function(r){E.login(e.email,e.password,e.rememberMe).then((function(e){var t;r(y(!0)),r((t=e,{type:a.SET_PROFILE,profile:t}))})).catch((function(e){r(T(e.error))}))}};!function(e){e.SET_INITIALIZED_APP="appReducer/SET_INITIALIZED_APP",e.CHANGE_STATUS="appReducer/CHANGE_STATUS"}(S||(S={}));var N,L={isInitialized:!1,status:"idle"},A=function(){return function(e){E.authMe().then((function(r){var t;e((t=!0,{type:S.SET_INITIALIZED_APP,value:t}))}))}},F=function(){var e=Object(j.b)(),r=Object(j.c)((function(e){return e.login.isLoggedIn})),t=Object(b.a)({initialValues:{email:"nya-admin@nya.nya",password:"1qazxcvBG",rememberMe:!0},validate:function(e){var r={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(r.email="\u041d\u0435\u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 email"):r.email="\u041f\u043e\u043b\u0435 email \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e",e.password?e.password.length<3&&(r.password="\u0414\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):r.password="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e",r},onSubmit:function(r){e(I({email:r.email,password:r.password,rememberMe:r.rememberMe})),e(A()),t.resetForm()}});return r?Object(l.jsx)(c.a,{to:"/profile"}):Object(l.jsx)(m.a,{container:!0,justify:"center",children:Object(l.jsx)(m.a,{item:!0,xs:4,children:Object(l.jsx)("form",{onSubmit:t.handleSubmit,children:Object(l.jsx)(O.a,{children:Object(l.jsxs)(p.a,{children:[Object(l.jsx)("p",{children:"To log in use common test account credentials:"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Email: "})," nya-admin@nya.nya"]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Password: "})," 1qazxcvBG"]}),Object(l.jsx)(h.a,Object(d.a)({label:"Email",margin:"normal"},t.getFieldProps("email"))),t.touched.email&&t.errors.email?Object(l.jsx)("div",{style:{color:"red"},children:t.errors.email}):null,Object(l.jsx)(h.a,Object(d.a)({type:"password",label:"Password",margin:"normal"},t.getFieldProps("password"))),t.touched.password&&t.errors.password?Object(l.jsx)("div",{style:{color:"red"},children:t.errors.password}):null,Object(l.jsx)(f.a,{label:"Remember me",control:Object(l.jsx)(v.a,Object(d.a)({checked:t.values.rememberMe},t.getFieldProps("rememberMe")))}),t.touched.rememberMe&&t.errors.rememberMe?Object(l.jsx)("div",{style:{color:"red"},children:t.errors.rememberMe}):null,Object(l.jsx)(_.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})})})})})},k=t(103),G=t.n(k),M=t(299),C=t(301),D=t(150);!function(e){e.SET_OK="forgotReducer/SET_OK",e.SET_ERROR="forgotReducer/SET_ERROR",e.SET_OK_NEW_PASS="forgotReducer/SET_OK_NEW_PASS",e.SET_ERROR_NEW_PASS="forgotReducer/SET_ERROR_NEW_PASS"}(N||(N={}));var H,K={info:"To recover your password, enter your registration email:",infoNewPass:"Enter you new password: ",error:"",errorNewPass:""},W=function(e){return{type:N.SET_ERROR,error:e}},q=function(e){return function(r){E.passRec(e.email,e.from,e.message).then((function(e){var t;r((t=e.info,{type:N.SET_OK,info:t}))})).catch((function(e){r(W("Such email is not registered"))}))}},V=function(e,r){return function(t){E.newPass(e,r).then((function(e){var r;t((r="password change",{type:N.SET_OK_NEW_PASS,infoNewPass:r}))})).catch((function(e){var r;t((r="error new password",{type:N.SET_ERROR_NEW_PASS,errorNewPass:r}))}))}},Z=function(){var e=Object(j.b)(),r=Object(j.c)((function(e){return e.passRec.errorNewPass})),t=Object(j.c)((function(e){return e.passRec.infoNewPass})),a=Object(c.g)(),n=a.location.pathname.slice(10,a.location.pathname.length);return Object(l.jsxs)("div",{className:G.a.newPassOverlay,children:[Object(l.jsx)("span",{className:G.a.spanText,children:t}),Object(l.jsxs)(M.a,Object(d.a)(Object(d.a)({},{labelCol:{span:8},wrapperCol:{span:16}}),{},{name:"basic",initialValues:{remember:!0},onFinish:function(r){e(V(r.newPassword1,n))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(l.jsx)(M.a.Item,{label:"new password: ",name:"newPassword1",hasFeedback:!0,rules:[{required:!0,message:"Please input your password!"},function(e){var r=e.getFieldValue;return{validator:function(e,t){return t.length<8?Promise.reject(new Error("8 and more symbols...")):t.length>8||!t||r("password1")===t?Promise.resolve():Promise.reject(new Error("Two passwords do not match!"))}}}],children:Object(l.jsx)(C.a.Password,{})}),Object(l.jsx)(M.a.Item,{label:"repeat password: ",name:"newPassword2",hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var r=e.getFieldValue;return{validator:function(e,t){return t.length<8?Promise.reject(new Error("8 and more symbols...")):t.length>8||!t||r("password1")===t?Promise.resolve():Promise.reject(new Error("Two passwords do not match!"))}}}],children:Object(l.jsx)(C.a.Password,{})}),Object(l.jsx)(D.a,{type:"primary",htmlType:"submit",children:"change password"})]})),Object(l.jsx)("div",{children:r})]})},z=t(69),B=t.n(z),U=function(){var e=Object(j.b)(),r=Object(j.c)((function(e){return e.passRec.error})),t=Object(j.c)((function(e){return e.passRec.info}));return Object(l.jsxs)("div",{className:B.a.passRecOverlay,children:[Object(l.jsx)("span",{className:B.a.nameRecPass,children:t}),Object(l.jsxs)(M.a,{className:B.a.formRecPass,name:"recoveryPass",initialValues:{remember:!0},onFinish:function(r){e(q({email:r.emailRecPass,message:'<div>\n\t\t\t\t\t\t\t\t\t\t\t\u0432\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u043e\u043b\u044f, \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435:\n\t\t\t\t\t\t\t\t\t\t\t<a href="https://baranovaleksei.github.io/new-pass/$token$">link</a>\n\t\t\t\t\t\t\t\t\t\t\t\u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u0431\u044b\u043b\u0438 \u043d\u0430 \u0412\u044b - \u0442\u043e \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u0435\u043b\u0430\u0439\u0442\u0435\n\t\t\t\t\t\t\t\t\t</div>',from:"THE BEST MY TEAM baranov.sys@gmail.com"})),setTimeout((function(){e(W(""))}),5e3)},children:[Object(l.jsx)(M.a.Item,{label:"Email",name:"emailRecPass",rules:[{type:"email",required:!0,message:"Please input your email"}],children:Object(l.jsx)(C.a,{})}),Object(l.jsxs)("span",{className:B.a.nameRecPass,children:[" ",r," "]}),Object(l.jsx)(M.a.Item,{children:Object(l.jsx)(D.a,{type:"primary",htmlType:"submit",children:"send message"})})]})]})},J=t(105),Y=t.n(J);!function(e){e.SET_IS_LOGIN="authReducer/SET_IS_LOGIN",e.SET_IS_REGISTERED="authReducer/SET_IS_REGISTERED",e.SET_ERROR="authReducer/SET_ERROR"}(H||(H={}));var $={isLogin:!1,isRegistered:!1,error:""},X=function(e){return{type:H.SET_ERROR,error:e}},Q=function(e){return function(r){E.registration(e.email,e.password).then((function(e){var t;r((t=!0,{type:H.SET_IS_REGISTERED,value:t}))})).catch((function(e){r(X("Email already exists"))}))}},ee=function(){var e=Object(j.b)(),r=Object(j.c)((function(e){return e.auth.isRegistered})),t=Object(j.c)((function(e){return e.auth.error}));return r?Object(l.jsx)(c.a,{to:"/login"}):Object(l.jsx)("div",{className:Y.a.registrationOverlay,children:Object(l.jsxs)(M.a,Object(d.a)(Object(d.a)({},{labelCol:{span:8},wrapperCol:{span:16}}),{},{name:"basic",initialValues:{remember:!0},onFinish:function(r){e(Q({email:r.email,password:r.password1})),setTimeout((function(){e(X(""))}),1e4)},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(l.jsx)(M.a.Item,{label:"email",name:"email",rules:[{required:!0,message:"Please input your email!"},{type:"email",message:"The input is not valid E-mail!"}],children:Object(l.jsx)(C.a,{style:{width:"100%"}})}),Object(l.jsx)(M.a.Item,{label:"Password1",name:"password1",hasFeedback:!0,rules:[{required:!0,message:"Please input your password!"},function(e){var r=e.getFieldValue;return{validator:function(e,t){return t.length<8?Promise.reject(new Error("8 and more symbols...")):t.length>8||!t||r("password1")===t?Promise.resolve():Promise.reject(new Error("Two passwords do not match!"))}}}],children:Object(l.jsx)(C.a.Password,{})}),Object(l.jsx)(M.a.Item,{label:"Password2",name:"password2",hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var r=e.getFieldValue;return{validator:function(e,t){return t.length<8?Promise.reject(new Error("8 and more symbols...")):t.length>8||!t||r("password1")===t?Promise.resolve():Promise.reject(new Error("Two passwords do not match!"))}}}],children:Object(l.jsx)(C.a.Password,{})}),Object(l.jsx)(D.a,{type:"primary",htmlType:"submit",children:"Button"}),Object(l.jsx)("div",{className:Y.a.serverError,children:t})]}))})},re=t(106),te=t.n(re),ae=function(){var e=Object(j.c)((function(e){return e.login.isLoggedIn})),r=Object(j.c)((function(e){return e.profile.profile})),t=Object(j.b)();if(!e)return Object(l.jsx)(c.a,{to:"/login"});return Object(l.jsx)("div",{className:te.a.profileOverlay,children:r&&Object(l.jsxs)("div",{className:te.a.profile,children:[Object(l.jsx)("img",{src:r.avatar,alt:""}),Object(l.jsxs)("div",{children:["name: ",r.name," ",Object(l.jsx)("br",{}),"token: ",r.token," ",Object(l.jsx)("br",{}),"_id: ",r._id,Object(l.jsx)("br",{}),"email: ",r.email,Object(l.jsx)("br",{}),"created: ",r.created,Object(l.jsx)("br",{}),"admin: ",r.isAdmin?"yes":"no",Object(l.jsx)("br",{})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){t((function(e){E.logOut().then((function(r){e(y(!1))})).catch((function(r){e(T(r.error))}))}))},children:"Log out"})})]})})},ne="/login",se="/registration",ce="/pass-recovery",ie="/new-pass",oe="/profile";var le=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(c.d,{children:[Object(l.jsx)(c.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(c.a,{to:ne})}}),Object(l.jsx)(c.b,{path:"/teamProject",exact:!0,render:function(){return Object(l.jsx)(ae,{})}}),Object(l.jsx)(c.b,{path:ne,render:function(){return Object(l.jsx)(F,{})}}),Object(l.jsx)(c.b,{path:se,render:function(){return Object(l.jsx)(ee,{})}}),Object(l.jsx)(c.b,{path:ce,render:function(){return Object(l.jsx)(U,{})}}),Object(l.jsx)(c.b,{path:ie,render:function(){return Object(l.jsx)(Z,{})}}),Object(l.jsx)(c.b,{path:oe,render:function(){return Object(l.jsx)(ae,{})}}),Object(l.jsx)(c.b,{path:"/404",render:function(){return Object(l.jsx)(u,{})}}),Object(l.jsx)(c.a,{from:"*",to:"/404"})]})})},ue=t(45),de=t.n(ue),je=t(41);var be=function(){return Object(l.jsxs)("div",{className:de.a.nav,children:[Object(l.jsx)("button",{className:de.a.menuHover,children:" \u041c\u0435\u043d\u044e "}),Object(l.jsxs)("div",{className:de.a.items,children:[Object(l.jsx)("div",{className:de.a.item,children:Object(l.jsx)(je.b,{to:oe,activeClassName:de.a.activeLink,children:"Profile"})}),Object(l.jsx)("div",{className:de.a.item,children:Object(l.jsx)(je.b,{to:ne,activeClassName:de.a.activeLink,children:"Login"})}),Object(l.jsx)("div",{className:de.a.item,children:Object(l.jsx)(je.b,{to:se,activeClassName:de.a.activeLink,children:"Registration"})}),Object(l.jsx)("div",{className:de.a.item,children:Object(l.jsx)(je.b,{to:ce,activeClassName:de.a.activeLink,children:"Password recovery"})})]})]})};var me=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(be,{}),Object(l.jsx)(le,{})]})},Oe=t(63),pe=t(147),he=Object(Oe.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case H.SET_IS_LOGIN:return Object(d.a)(Object(d.a)({},e),{},{isLogin:r.value});case H.SET_IS_REGISTERED:return Object(d.a)(Object(d.a)({},e),{},{isRegistered:r.value});case H.SET_ERROR:return Object(d.a)(Object(d.a)({},e),{},{error:r.error});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case S.CHANGE_STATUS:return Object(d.a)(Object(d.a)({},e),{},{isInitialized:r.value});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case w.SET_IS_LOGIN:return Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:r.value});case w.SET_IS_ERROR:return Object(d.a)(Object(d.a)({},e),{},{error:r.error});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case a.SET_PROFILE:return Object(d.a)(Object(d.a)({},e),{},{profile:r.profile});default:return e}},passRec:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case N.SET_OK:return Object(d.a)(Object(d.a)({},e),{},{info:r.info});case N.SET_ERROR:return Object(d.a)(Object(d.a)({},e),{},{error:r.error});case N.SET_OK_NEW_PASS:return Object(d.a)(Object(d.a)({},e),{},{infoNewPass:r.infoNewPass});case N.SET_ERROR_NEW_PASS:return Object(d.a)(Object(d.a)({},e),{},{errorNewPass:r.errorNewPass});default:return e}}}),fe=Object(Oe.d)(he,Object(Oe.a)(pe.a));window.store=fe,s.a.render(Object(l.jsx)(je.a,{children:Object(l.jsx)(j.a,{store:fe,children:Object(l.jsx)(me,{})})}),document.getElementById("root"))},45:function(e,r,t){e.exports={nav:"Header_nav__3rYIR",menuHover:"Header_menuHover__2eDeL",items:"Header_items__3t3lP",item:"Header_item__11opL",activeLink:"Header_activeLink__3WAn0"}},69:function(e,r,t){e.exports={passRecOverlay:"PasswordRecovery_passRecOverlay__dDdKX",nameRecPass:"PasswordRecovery_nameRecPass__2C3uT",formRecPass:"PasswordRecovery_formRecPass__l0PYz"}}},[[262,1,2]]]);
//# sourceMappingURL=main.b09dc548.chunk.js.map