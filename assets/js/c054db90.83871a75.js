"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9014:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={},o="Scalable AI@Edge computing in X-ray beamline experiments",s={type:"mdx",permalink:"/science/scalable-ci-in-aps",source:"@site/src/pages/science/scalable-ci-in-aps.md",title:"Scalable AI@Edge computing in X-ray beamline experiments",description:"Can Edge Computing Be Used in X-Ray Beamline Experiments to Process a High-Volume and Fast Data Stream and Help Scientists Make Real-Time Decisions for Experiments?",frontMatter:{}},c=[{value:"Configuring Edge Computing in The Beamline",id:"configuring-edge-computing-in-the-beamline",level:2},{value:"Performance of The Pipeline",id:"performance-of-the-pipeline",level:2},{value:"Discussion",id:"discussion",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"References",id:"references",level:2}],l={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scalable-aiedge-computing-in-x-ray-beamline-experiments"},"Scalable AI@Edge computing in X-ray beamline experiments"),(0,i.kt)("p",null,"Can Edge Computing Be Used in X-Ray Beamline Experiments to Process a High-Volume and Fast Data Stream and Help Scientists Make Real-Time Decisions for Experiments?"),(0,i.kt)("p",null,"Edge computing offers computation close to sensors for real-time data processing. Various X-ray sensor beamlines at Argonne's Advanced Photon Source (APS) stream enormous data at a fast frame rate to the cloud for data analysis, and science discovery happens in a high performance computing (HPC) facility. The scientists and engineers in the beamlines have recently added the data streaming and processing feature to their PvaPy",(0,i.kt)("sup",null,(0,i.kt)("a",{parentName:"p",href:"#references"},"[1]"))," software package. This feature enables users to process data in real-time, allowing them to see experiment results immediately, as data is streamed to HPC, and make decisions as experiments take place. Edge computing can provide the same real-time data processing capability by deploying computation next to the sensors and can host AI@Edge applications that process data directly from the sensor. The Sage team questioned whether edge computing could scale its AI computation and match the requirement to provide the same real-time data processing capability while reducing the latency by not moving data to the cloud."),(0,i.kt)("h2",{id:"configuring-edge-computing-in-the-beamline"},"Configuring Edge Computing in The Beamline"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dataflow",src:n(722).Z,width:"1024",height:"768"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Figure 1: Dataflow of the pipeline: from X-ray detector to a visualization computer. Note that the control program in the diagram was designed for automatic scaling, but not implemented in this work.")),(0,i.kt)("p",null,"To understand how edge computing plays in this domain, the Sage team established a workflow pipeline connecting an X-ray detector with a visualization computer placed at the end of the pipeline. We used multiple of a 1U server rack, equipped with a Nvidia T4 GPU accelerator, as an edge computing node and configured them in the middle of the pipeline to offer AI computation. The edge nodes were connected to the detector via a high-speed 10 Gbps network, however each node\u2019s network supported up to 1 Gbps network. The nodes hosted computing resources for running the scientist-developed machine learning (ML) model",(0,i.kt)("sup",null,(0,i.kt)("a",{parentName:"p",href:"#references"},"[2]"))," after we quantized it to make the inference faster, though the process  sacrifices up to ~10% of accuracy. This allowed the nodes to run more instances of the model using the same computing resource. The X-ray detector was configured to stream 0.5 Mega-pixel frames at the frame rate of 1 - 2 kHz. To understand computation and network loads required in the workflow pipeline, we varied the number of edge nodes and instances of the AI@Edge application."),(0,i.kt)("h2",{id:"performance-of-the-pipeline"},"Performance of The Pipeline"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tracking traffic",src:n(3804).Z,width:"1280",height:"640"})),(0,i.kt)("p",null,"Interestingly, yet expectedly, we have found throughout the experiments that putting more edge computing nodes and model instances at the edge can satisfy the required frame rate by processing the streaming data (See Figure 2 and 3). We needed the number of edge nodes to be high enough to accommodate the network bandwidth required by the desired frame rate. Having more instances of the ML model enabled faster frame rate processing. What\u2019s more, adding more edge nodes and model instances at the edge can visualize the processed frames to the scientist. However, we also found that using an excessive number of instances does not - significantly improve the ability to process the frames, but the edge nodes\u2019 resources were underutilized as  more network burden was created. Controlling of such resource allocation will be the key to optimizing both computing and network resources per experiment and satisfying requirements unique per experiment, towards the scientific goal, i.e. rate and resolution of frames. This pipeline with the power of edge computing can help use the beamtime more efficiently, thus reducing the time and resources used in the beamline. This pipeline can also reduce radiological exposure to the sample, minimizing damage."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"performance-1khz",src:n(5361).Z,width:"1275",height:"1210"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Figure 2: Performance of the pipeline at receiving 1 kHz data streaming. Among the cases, 5 edge nodes - each running 2 instances of the ML model, 10 instances in total - performed mostly efficiently to keep up with the frame rate.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"performance-2khz",src:n(3978).Z,width:"1275",height:"1210"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Figure 3: Performance of the pipeline at receiving 2 kHz data streaming. Among the 3 cases, the total of 27 instances distributed in 9 edge nodes handled the data without losing any frame.")),(0,i.kt)("h2",{id:"discussion"},"Discussion"),(0,i.kt)("p",null,"We believe that the capabilities of edge computing demonstrated in this experiment will be the key driving force to make successful beamline experiments. Advanced X-ray sensors with higher resolution and faster frame rate will demand faster edge computation and better control algorithms to distribute and manage the computation loads. As we demonstrated, the workflow can scale horizontally by allocating more edge nodes to an experiment, as computation and realtimeness of data processing needs increase. This workflow will also need to use given computing resources efficiently to run ML models with different resource allocation, driven by a control algorithm, and to host multiple experiments on the same edge computing node, when it cannot scale horizontally."),(0,i.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,i.kt)("p",null,"We thank the Argonne's Advanced Photon Source for the opportunity to use the beamtime to perform the experiment. We also thank ",(0,i.kt)("a",{parentName:"p",href:"https://www.anl.gov/profile/mathew-joseph-cherukara"},"Dr. Cherukara"),", his group members, and ",(0,i.kt)("a",{parentName:"p",href:"https://www.anl.gov/profile/tao-zhou"},"Dr. Zhou")," for the help and support on the beamline configuration, as well as the machine learning model. We also thank Sini\u0161a Veseli for all the immediate support in the Pvapy library,  fixes, and improvements."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"PvaPy: Python Binding for EPICS pvAccess, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/epics-base/pvaPy"},"https://github.com/epics-base/pvaPy")),(0,i.kt)("li",{parentName:"ol"},"Cherukara, M. J., Zhou, T., Nashed, Y., Enfedaque, P., Hexemer, A., Harder, R. J., & Holt, M. V. (2020). AI-enabled high-resolution scanning coherent diffraction imaging. Applied Physics Letters, 117(4), 044103.")))}d.isMDXComponent=!0},722:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scalable-ci-in-aps-1-592c5d23531ecbfbea9d513bb2cf8c06.jpg"},5361:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scalable-ci-in-aps-2-e2aded9372ecf503cd379e3f9f31c895.png"},3978:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scalable-ci-in-aps-3-28e434f2fc3729396e873bac9573980e.png"},3804:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scalable-ci-in-aps-4-d0b0e3fe856b3b8ae01942f5758114af.gif"}}]);