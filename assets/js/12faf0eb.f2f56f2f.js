"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3829],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>p});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),f=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=f(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=f(a),u=i,p=h["".concat(s,".").concat(u)]||h[u]||d[u]||n;return a?r.createElement(p,o(o({ref:t},l),{},{components:a})):r.createElement(p,o({ref:t},l))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[h]="string"==typeof e?e:i,o[1]=c;for(var f=2;f<n;f++)o[f]=a[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4199:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var r=a(7462),i=(a(7294),a(3905));const n={},o="Traffic State Estimation",c={type:"mdx",permalink:"/sage-website/science/traffic-state-estimation",source:"@site/src/pages/science/traffic-state-estimation.md",title:"Traffic State Estimation",description:"A real-time vehicle tracking application based on deep neural networks was utilized to calculate traffic state. The deep neural networks that were utilized for the estimation were introduced in the \u2018Vehicle Tracking\u2019 post. The traffic state has been calculated by \u2018traffic flow = traffic speed x traffic density\u2019 (traffic_char1996, edie1963). With the equation, we need to measure two of the parameters using instruments for each parameters to estimate the third state. However, on the other hand, the application introduced in this study based on deep neural networks can calculate traffic state independently using a video source.",frontMatter:{}},s=[{value:"Traffic Flow",id:"traffic-flow",level:2},{value:"Traffic Speed",id:"traffic-speed",level:2},{value:"Traffic Density",id:"traffic-density",level:2}],f={toc:s},l="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"traffic-state-estimation"},"Traffic State Estimation"),(0,i.kt)("p",null,"A real-time vehicle tracking application based on deep neural networks was utilized to calculate traffic state. The deep neural networks that were utilized for the estimation were introduced in the \u2018Vehicle Tracking\u2019 post. The traffic state has been calculated by \u2018traffic flow = traffic speed x traffic density\u2019 (traffic_char1996, edie1963). With the equation, we need to measure two of the parameters using instruments for each parameters to estimate the third state. However, on the other hand, the application introduced in this study based on deep neural networks can calculate traffic state independently using a video source."),(0,i.kt)("p",null,"We tried to estimate traffic states directly from the information that can be extracted from videos. The traffic state, that are traffic volume, space occupancy, travel speed, travel time and travel delays can be categorized into three types of information: traffic speed, flow and density (traffic_char1996). We calculated the three traffic state, flow, speed and density, which can be represented as traffic volume, travel speed or time and space occupancy respectively. The image processing algorithm required videos that were recorded with frame rate higher than 12 fps. The calculation result reporting frequency can be determined based on the demand of user. The default reporting frequency is every 30 second."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"traffic static space occupancy box",src:a(622).Z,width:"978",height:"514"})),(0,i.kt)("h2",{id:"traffic-flow"},"Traffic Flow"),(0,i.kt)("p",null,"Traffic flow was defined as the number of vehicles that passed a certain line on a road per unit time. Traffic flow was estimated by counting how many vehicles passes the bottom line or top line of the orange box in the figure above for outgoing and incoming traffic respectively for the total length of the videos.  The number of vehicles that passed through the lines of the orange box were counted for the total length of the video, and that was averaged into the number of passed vehicles per second. The raw counting number also can be reported along with the averaged traffic flow. Because the vehicle tracking algorithm was able to identify each vehicles with identification number, we only counted each vehicle once while we processing the videos."),(0,i.kt)("h2",{id:"traffic-speed"},"Traffic Speed"),(0,i.kt)("p",null,"Traffic speed was defined as averaged travel distance per unit time. Traffic speed was estimated by calculating how long each vehicle took time to travel from bottom to top line or top to bottom line of the region of interest, the orange box in the figure above, for outgoing and incoming traffic respectively. In the vehicle tracking algorithm, we calculated travel time of each vehicle from the one end to the other end of the box by counting the number of frames each vehicle took to travel. We calculated average speed of vehicles using the traffic speeds for each vehicle. The calculated value was $m/s$ because the maximum road length that can be recognized in the video did not long enough to a km. The m/s value can be converted into averaged speed in km/h."),(0,i.kt)("h2",{id:"traffic-density"},"Traffic Density"),(0,i.kt)("p",null,"Traffic density was defined as the number of vehicles in the unit area with the above equation. With the vehicle tracking algorithm, we can count the number of vehicles in the region of interest, and we can calculate occupied region additionally. The traffic density was estimated by counting the number of vehicles that were in the region of interest in each frame. In addition to the traffic density, road occupancy was calculated using the number of vehicles in the region of interest and vehicle identification that was identifying what type the vehicles they were in the region of interest. We assumed that there will be three types of vehicles in this research, those were car, truck and bus. Based on the vehicle type, we assume that car, truck and bus occupies road area of 4.5 x 1.7 m\xb2, 5.5 x 2 m\xb2 and 12 x 2.55 m\xb2 respectively. The calculated value was converted into a value of road occupancy in 1 km."))}h.isMDXComponent=!0},622:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/traffic-state-estimation-1-e1b261ffa3d4258436913e982237378b.png"}}]);