(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{206:function(e,n,t){},207:function(e,n,t){"use strict";t.r(n);var o,r,i,c,a,s,l,d,u,j,p,b,x,O,g,f,m,h,v,y,w,S,C,I,E,T,V,_,k,R=t(5),A=t.n(R),M=t(84),D=t.n(M),F=t(12),P=t(9),z=t(10),B=t(13),L=t.n(B),G=t(16),U={ROS2_WEB_BRIDGE_SERVER_IP:"192.168.0.180",ROS2_WEB_BRIDGE_SERVER_PORT:9090,RECONNECTION_TIMEOUT:3e3,CMD_VEL_TOPIC:"/cmd_vel",POSE_TOPIC:"/amcl_pose",ODOM_TOPIC:"/odom"},K=t(8),N=z.a.div(o||(o=Object(P.a)(["\n  display: flex;\n  transition: background 0.4s ease-out;\n  background: ",";\n  padding: 12px 0;\n  margin: 8px 0;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n"])),(function(e){return e.connected?"var(--secondary-color-green)":"var(--secondary-color-red)"})),W=z.a.div(r||(r=Object(P.a)(["\n  color: var(--primary-color-darker);\n  font-size: 1.2rem;\n  font-weight: 500;\n"]))),J=function(e){var n=e.connected;return Object(K.jsx)(N,{connected:n,children:Object(K.jsx)(W,{children:n?"Robot Connected":"Robot Disconnected"})})},Q=t(88),q=t(21),H=t(94),X=t(35),Y=z.a.div(i||(i=Object(P.a)(["\n  width: 100%;\n  margin-bottom: 8px;\n"]))),Z=z.a.h3(c||(c=Object(P.a)(["\n  text-align: center;\n  margin-bottom: 4px;\n"]))),$=z.a.div(a||(a=Object(P.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 12px;\n"]))),ee=z.a.div(s||(s=Object(P.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 12px;\n"]))),ne=z.a.div(l||(l=Object(P.a)(["\n  margin-right: 8px;\n"]))),te=z.a.span(d||(d=Object(P.a)(["\n  font-size: 1.2rem;\n  padding: 4px;\n  width: 48px;\n  text-align: center;\n  margin-right: 4px;\n  border: 1px solid var(--primary-color-light);\n  border-radius: 4px;\n"]))),oe=z.a.div(u||(u=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n"]))),re=z.a.span(j||(j=Object(P.a)(["\n  display: grid;\n  place-items: center;\n  font-size: 1.2rem;\n  margin: 1px;\n  cursor: pointer;\n  border: 1px solid var(--primary-color-light);\n  opacity: 0.6;\n  transition: opacity 0.1s ease-out;\n\n  @media (hover: hover) and (pointer: fine) {\n    &:hover {\n      opacity: 1;\n    }\n  }\n"]))),ie=function(e){var n=e.moveVel,t=e.setMoveVel,o=e.turnVel,r=e.setTurnVel;return Object(K.jsxs)(Y,{children:[Object(K.jsx)(Z,{children:"Velocities"}),Object(K.jsxs)($,{children:[Object(K.jsxs)(ee,{children:[Object(K.jsx)(ne,{children:"Linear:"}),Object(K.jsx)(te,{children:n.toFixed(1)}),Object(K.jsxs)(oe,{children:[Object(K.jsx)(re,{onClick:function(){sessionStorage.setItem("moveVel",(n+.2).toFixed(1)),t(n+.2)},children:Object(K.jsx)(X.b,{})}),Object(K.jsx)(re,{onClick:function(){sessionStorage.setItem("moveVel",(n-.2).toFixed(1)),t(n-.2)},children:Object(K.jsx)(X.a,{})})]})]}),Object(K.jsxs)(ee,{children:[Object(K.jsx)(ne,{children:"Angular:"}),Object(K.jsx)(te,{children:o.toFixed(1)}),Object(K.jsxs)(oe,{children:[Object(K.jsx)(re,{onClick:function(){sessionStorage.setItem("turnVel",(o+.2).toFixed(1)),r(o+.2)},children:Object(K.jsx)(X.b,{})}),Object(K.jsx)(re,{onClick:function(){sessionStorage.setItem("turnVel",(o-.2).toFixed(1)),r(o-.2)},children:Object(K.jsx)(X.a,{})})]})]})]})]})},ce=t(34),ae=t(59),se=t(29),le=z.a.input(p||(p=Object(P.a)(["\n  width: 100%;\n  outline: none;\n  padding: 4px 6px;\n  border: 1px solid var(--primary-color-light);\n  background: var(--primary-color-dark);\n  color: var(--primary-color-light);\n  letter-spacing: 0.2px;\n  font-size: ",";\n  transition: border 0.2s;\n\n  &::placeholder {\n    color: var(--secondary-color);\n    transition: color 0.2s;\n    letter-spacing: 0.1px;\n    font-size: 0.8rem;\n  }\n\n  &:focus {\n    border: 1px solid var(--primary-color-lighter);\n  }\n\n  &:focus::placeholder {\n    color: transparent;\n  }\n\n  &:invalid {\n    border: 1px solid lightcoral;\n  }\n"])),(function(e){return e.bigFont?"1rem":"0.8rem"})),de=function(e){var n=Object.assign({},e),t=Object(ce.c)(n),o=Object(F.a)(t,1)[0];return Object(K.jsx)(le,Object(se.a)(Object(se.a)(Object(se.a)({},o),n),{},{type:"text"}))},ue=z.a.div(b||(b=Object(P.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 0;\n"]))),je=z.a.div(x||(x=Object(P.a)(["\n  font-size: 1rem;\n  margin-right: 24px;\n  color: var(--primary-color-light);\n  padding-top: 2px;\n  margin-bottom: 4px;\n  letter-spacing: 0.2px;\n"]))),pe=Object(z.a)(ce.a)(O||(O=Object(P.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n"]))),be=z.a.div(g||(g=Object(P.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]))),xe=function(e){var n=e.setTopic,t=Object(R.useState)(localStorage.getItem("topic")||""),o=Object(F.a)(t,2),r=o[0],i=o[1];return Object(K.jsx)("div",{children:Object(K.jsx)(ce.b,{initialValues:{topic:r},validationSchema:ae.a({topic:ae.b()}),onSubmit:function(){var e=Object(G.a)(L.a.mark((function e(t,o){var r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=o.setSubmitting,c=o.resetForm;try{n(t.topic),localStorage.setItem("topic",t.topic),i(t.topic),c({values:{topic:t.topic}})}catch(a){console.log(a.message)}finally{r(!1)}case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),children:function(e){e.isSubmitting;var n=e.handleSubmit,t=e.isValid;return Object(K.jsxs)(ue,{children:[Object(K.jsx)(je,{children:"Topic:"}),Object(K.jsx)(pe,{autoComplete:"none",onKeyPress:function(e){"Enter"===e.key&&e.shiftKey||"Enter"!==e.key||e.shiftKey||(e.preventDefault(),t&&n())},children:Object(K.jsx)(be,{children:Object(K.jsx)(de,{autoComplete:"off",bigFont:!0,name:"topic",type:"text",placeholder:"Topic"})})})]})}})})},Oe=Object(R.createContext)({}),ge=z.a.div(f||(f=Object(P.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 12px 0;\n"]))),fe=z.a.div(m||(m=Object(P.a)(["\n  width: max-content;\n  align-self: center;\n  display: grid;\n  grid-gap: 8px;\n  grid-template-columns: auto auto auto;\n  grid-template-rows: auto;\n\n  grid-template-areas:\n    'top-left up top-right'\n    'left joystick right'\n    'bottom-left down bottom-right';\n"]))),me=z.a.div(h||(h=Object(P.a)(["\n  grid-area: 'joystick';\n  display: grid;\n  place-items: center;\n  z-index: 1;\n  opacity: 0.6;\n  transition: opacity 0.2s ease-out;\n  touch-action: none;\n\n  @media (hover: hover) and (pointer: fine) {\n    &:hover {\n      opacity: 1;\n    }\n  }\n"]))),he=z.a.div(v||(v=Object(P.a)(["\n  display: grid;\n  place-items: center;\n  font-size: 6.6rem;\n  opacity: 0.6;\n  cursor: pointer;\n  transition: opacity 0.2s ease-out;\n\n  @media (hover: hover) and (pointer: fine) {\n    &:hover {\n      opacity: 1;\n    }\n  }\n"]))),ve=Object(z.b)(y||(y=Object(P.a)(["\n  from {\n    color: var(--secondary-color-green);\n  }\n  to {\n    color: var(--secondary-color-blue);\n  }\n"]))),ye=z.a.div(w||(w=Object(P.a)(["\n  margin-top: 6px;\n  font-size: 4rem;\n  text-align: center;\n  cursor: pointer;\n  color: ",";\n  animation: ","\n    0.6s ease-in-out infinite alternate;\n  transition: color 0.2s ease-out;\n"])),(function(e){return e.gamepadActivated?"var(--secondary-color-green)":"var(--secondary-color-red)"}),(function(e){var n=e.gamepadConnected,t=e.gamepadActivated;return n&&!t?ve:"none"})),we=z.a.div(S||(S=Object(P.a)(["\n  width: 100%;\n  text-align: center;\n  font-size: 0.8rem;\n  margin-top: 12px;\n"]))),Se=function(e){var n=e.ros,t=e.connected,o=Object(R.useState)(Number(sessionStorage.getItem("moveVel"))||1),r=Object(F.a)(o,2),i=r[0],c=r[1],a=Object(R.useState)(Number(sessionStorage.getItem("turnVel"))||1),s=Object(F.a)(a,2),l=s[0],d=s[1],u=null,j=Object(R.useState)(null),p=Object(F.a)(j,2),b=p[0],x=p[1],O=Object(R.useState)(localStorage.getItem("topic")||""),g=Object(F.a)(O,2),f=g[0],m=g[1],h=Object(R.useContext)(Oe),v=h.gamepadConnected,y=h.setGamepadConnected,w=h.gamepadActivated,S=h.setGamepadActivated,C=function(e,n){return new window.ROSLIB.Topic({ros:e,name:""!==n?n:U.CMD_VEL_TOPIC,messageType:"geometry_msgs/msg/Twist"})}(n,f),I={up:!1,down:!1,left:!1,right:!1},E=0,T=0,V=function(e,n){var o=new window.ROSLIB.Message({linear:{x:e,y:0,z:0},angular:{x:0,y:0,z:n}});t&&C.publish(o)};window.onkeydown=function(e){w||("ArrowLeft"===e.code&&e.shiftKey&&e.altKey&&(I.left=!0),"ArrowRight"===e.code&&e.shiftKey&&e.altKey&&(I.right=!0),"ArrowUp"===e.code&&e.shiftKey&&e.altKey&&(I.up=!0),"ArrowDown"===e.code&&e.shiftKey&&e.altKey&&(I.down=!0),E=I.up?i:I.down?-i:0,T=I.left?l:I.right?-l:0,V(E,T))},window.onkeyup=function(e){w||("ArrowLeft"===e.code&&(I.left=!1,T=0),"ArrowRight"===e.code&&(I.right=!1,T=0),"ArrowUp"===e.code&&(I.up=!1,E=0),"ArrowDown"===e.code&&(I.down=!1,E=0),V(E,T))};var _=function(){var e,n,t,o,r,c,a,s,d=navigator.getGamepads?navigator.getGamepads():navigator.webkitGetGamepads?navigator.webkitGetGamepads:[];d&&(d[0]&&(e=-d[0].axes[0].toFixed(2),n=-d[0].axes[1].toFixed(2),t=d[0].buttons[12],o=d[0].buttons[13],r=d[0].buttons[14],c=d[0].buttons[15],t.pressed||o.pressed||r.pressed||c.pressed?(a=t.pressed?i:o.pressed?-i:0,s=r.pressed?l:c.pressed?-l:0,V(a,s)):V(n*i,e*l)))};return window.addEventListener("gamepadconnected",(function(e){y(!0)})),window.addEventListener("gamepaddisconnected",(function(e){return y(!1),S(!1),void(u&&clearInterval(u))})),Object(K.jsxs)(ge,{children:[Object(K.jsx)(xe,{currentTopic:f,setTopic:m}),Object(K.jsx)(ie,{moveVel:i,setMoveVel:c,turnVel:l,setTurnVel:d}),Object(K.jsxs)(fe,{children:[Object(K.jsx)(me,{children:Object(K.jsx)(Q.Joystick,{size:100,baseColor:"var(--primary-color-light)",stickColor:"var(--primary-color-dark)",move:function(e){w||V(e.y/50*i,-e.x/50*l)},stop:function(){V(0,0)}})}),Object(K.jsx)(he,{style:{gridArea:"top-left"},onMouseDown:function(){return V(i,l)},onMouseUp:function(){return V(0,0)},children:Object(K.jsx)(q.f,{})}),Object(K.jsx)(he,{style:{gridArea:"up"},onMouseDown:function(){return V(i,0)},onMouseUp:function(){return V(0,0)},children:Object(K.jsx)(q.h,{})}),Object(K.jsx)(he,{style:{gridArea:"top-right"},onMouseDown:function(){return V(i,-l)},onMouseUp:function(){return V(0,0)},children:Object(K.jsx)(q.g,{})}),Object(K.jsx)(he,{style:{gridArea:"right"},onMouseDown:function(){return V(0,-l)},onMouseUp:function(){return V(0,0)},children:Object(K.jsx)(q.e,{})}),Object(K.jsx)(he,{style:{gridArea:"bottom-right"},onMouseDown:function(){return V(-i,l)},onMouseUp:function(){return V(0,0)},children:Object(K.jsx)(q.b,{})}),Object(K.jsx)(he,{style:{gridArea:"down"},onMouseDown:function(){return V(-i,0)},onMouseUp:function(){return V(0,0)},children:Object(K.jsx)(q.c,{})}),Object(K.jsx)(he,{style:{gridArea:"bottom-left"},onMouseDown:function(){return V(-i,-l)},onMouseUp:function(){return V(0,0)},children:Object(K.jsx)(q.a,{})}),Object(K.jsx)(he,{style:{gridArea:"left"},onMouseDown:function(){return V(0,l)},onMouseUp:function(){return V(0,0)},children:Object(K.jsx)(q.d,{})})]}),Object(K.jsx)(ye,{onClick:w?function(){v&&(S(!1),clearInterval(b),V(0,0))}:function(){v&&(S(!0),u=setInterval(_,10),x(u))},gamepadConnected:v,gamepadActivated:w,children:Object(K.jsx)(H.a,{})}),Object(K.jsx)(we,{children:"Use joystick, buttons, gamepad or press Shift + Alt + Arrow keys to control your robot"})]})},Ce=t(58),Ie=z.a.div(C||(C=Object(P.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  align-items: flex-start;\n  justify-content: space-between;\n"]))),Ee=z.a.div(I||(I=Object(P.a)(["\n  display: grid;\n  grid-template-columns: 180px 50px;\n  grid-template-rows: auto;\n"]))),Te=z.a.div(E||(E=Object(P.a)(["\n  font-size: 1.2rem;\n  font-weight: 600;\n  letter-spacing: 0.4px;\n  grid-area: 'caption';\n  grid-column: 1/2;\n  margin-top: 8px;\n  margin-bottom: 2px;\n"]))),Ve=z.a.div(T||(T=Object(P.a)(["\n  grid-column: 1/1;\n  justify-self: start;\n"]))),_e=z.a.div(V||(V=Object(P.a)(["\n  grid-column: 2/2;\n  justify-self: end;\n"]))),ke=function(e){var n=e.ros,t=e.connected,o=Object(R.useState)({x:0,y:0,orientation:0}),r=Object(F.a)(o,2),i=r[0],c=r[1],a=Object(R.useState)({linearVelocity:0,angularVelocity:0}),s=Object(F.a)(a,2),l=s[0],d=s[1];return Object(R.useEffect)((function(){var e=null,o=null,r=function(e){var n=new Ce.b(e.x,e.y,e.z,e.w);return(new Ce.a).setFromQuaternion(n)._z*(180/Math.PI)};if(t)return e=new window.ROSLIB.Topic({ros:n,name:U.POSE_TOPIC,messageType:"geometry_msgs/msg/PoseWithCovarianceStamped"}),o=new window.ROSLIB.Topic({ros:n,name:U.ODOM_TOPIC,messageType:"nav_msgs/msg/Odometry"}),e.subscribe((function(e){return c({x:e.pose.pose.position.x,y:e.pose.pose.position.y,orientation:r(e.pose.pose.orientation)})})),o.subscribe((function(e){return d({linearVelocity:e.twist.twist.linear.x,angularVelocity:e.twist.twist.angular.z})})),function(){e.unsubscribe(),o.unsubscribe()}}),[t,n]),Object(K.jsxs)(Ie,{children:[Object(K.jsxs)(Ee,{children:[Object(K.jsx)(Te,{children:"Position"}),Object(K.jsx)(Ve,{children:"x:"}),Object(K.jsx)(_e,{children:i.x.toFixed(2)}),Object(K.jsx)(Ve,{children:"y:"}),Object(K.jsx)(_e,{children:i.y.toFixed(2)}),Object(K.jsx)(Ve,{children:"orientation:"}),Object(K.jsx)(_e,{children:i.orientation.toFixed(2)})]}),Object(K.jsxs)(Ee,{children:[Object(K.jsx)(Te,{children:"Velocites"}),Object(K.jsx)(Ve,{children:"Linear Velocity:"}),Object(K.jsx)(_e,{children:l.linearVelocity.toFixed(2)}),Object(K.jsx)(Ve,{children:"Angular Velocity:"}),Object(K.jsx)(_e,{children:l.angularVelocity.toFixed(2)})]})]})},Re=z.a.h1(_||(_=Object(P.a)(["\n  align-self: center;\n  text-align: center;\n  width: 100%;\n  color: var(--primary-color-light);\n  font-size: 1.8rem;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  margin: 6px 0;\n"]))),Ae=z.a.div(k||(k=Object(P.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  max-width: 688px;\n  padding: 48px 24px;\n  margin: 0 auto;\n  background: var(--primary-color-dark-hover);\n  color: var(--primary-color-light);\n  height: calc(100% - 87px);\n"])));function Me(){var e=function(){var e=Object(R.useState)(!1),n=Object(F.a)(e,2),t=n[0],o=n[1],r=Object(R.useState)(new window.ROSLIB.Ros),i=Object(F.a)(r,1)[0],c=Object(R.useCallback)((function(){var e=function(){var e=Object(G.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Connecting..."),e.next=4,i.connect("ws://".concat(U.ROS2_WEB_BRIDGE_SERVER_IP,":").concat(U.ROS2_WEB_BRIDGE_SERVER_PORT));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Connection problem:"),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();i.on("connection",(function(){console.log("Connection established"),o(!0)})),i.on("close",(function(){console.log("Connection closed"),o(!1),setTimeout((function(){e()}),U.RECONNECTION_TIMEOUT)})),e()}),[i]);return Object(R.useEffect)((function(){return c(),function(){console.log("Connection closed")}}),[c]),[i,t]}(),n=Object(F.a)(e,2),t=n[0],o=n[1],r=Object(R.useState)(!1),i=Object(F.a)(r,2),c=i[0],a=i[1],s=Object(R.useState)(!1),l=Object(F.a)(s,2),d=l[0],u=l[1];return Object(K.jsx)(Ae,{children:Object(K.jsxs)(Oe.Provider,{value:{gamepadConnected:c,setGamepadConnected:a,gamepadActivated:d,setGamepadActivated:u},children:[Object(K.jsx)(Re,{pos:"c",children:"ROS2 Teleoperation Dashboard"}),Object(K.jsx)(J,{connected:o}),Object(K.jsx)(Se,{ros:t,connected:o}),Object(K.jsx)(ke,{ros:t,connected:o})]})})}t(206);var De=function(){return Object(K.jsx)("div",{children:Object(K.jsx)(Me,{})})},Fe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,208)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),o(e),r(e),i(e),c(e)}))};D.a.render(Object(K.jsx)(A.a.StrictMode,{children:Object(K.jsx)(De,{})}),document.getElementById("root")),Fe()}},[[207,1,2]]]);
//# sourceMappingURL=main.1b85978b.chunk.js.map