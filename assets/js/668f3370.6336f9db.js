"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7874],{96055:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=a(74848),i=a(28453);const s={sidebar_label:"Finding Events in Real Time",sidebar_position:1},o="Creating a System to Find Events in Real Time",r={id:"recent/finding-events",title:"Creating a System to Find Events in Real Time",description:"Across the United States and the world, the distributed network of Sage nodes captures over 2500 images per day. These nodes have the potential of capturing photos with important features such as smoke, wildlife, and emergencies. Each image contains unique characteristics which, until now, were hard to look for without manually searching through the Sage database. With both the images and users in mind, this project has two goals: harness the power of machine learning to describe photos as they are taken, and build a user-friendly system to allow others to find what they are looking for within our database.",source:"@site/science/recent/finding-events.md",sourceDirName:"recent",slug:"/recent/finding-events",permalink:"/science/recent/finding-events",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Finding Events in Real Time",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Code Generation and Documentation Search",permalink:"/science/recent/llm-generation"},next:{title:"Resource Management at the Edge",permalink:"/science/recent/resource-management"}},h={},d=[{value:"Using machine learning to describe an image",id:"using-machine-learning-to-describe-an-image",level:2},{value:"Building a user-friendly system",id:"building-a-user-friendly-system",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"creating-a-system-to-find-events-in-real-time",children:"Creating a System to Find Events in Real Time"})}),"\n",(0,n.jsx)(t.p,{children:"Across the United States and the world, the distributed network of Sage nodes captures over 2500 images per day. These nodes have the potential of capturing photos with important features such as smoke, wildlife, and emergencies. Each image contains unique characteristics which, until now, were hard to look for without manually searching through the Sage database. With both the images and users in mind, this project has two goals: harness the power of machine learning to describe photos as they are taken, and build a user-friendly system to allow others to find what they are looking for within our database."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"System Design",src:a(7536).A+"",width:"4498",height:"2018"})}),"\n",(0,n.jsx)(t.h2,{id:"using-machine-learning-to-describe-an-image",children:"Using machine learning to describe an image"}),"\n",(0,n.jsx)(t.p,{children:"Models that can take in one input and generate a different type of output are called multimodal models. For the purpose of this project, we were looking for a model that could take in an image as an input and generate text as an output. It had to be able to run with as little processing power as possible so that, if someone was gathering other data on the same device, other programs could run simultaneously. In addition, and most importantly, the model had to be accurate in its descriptions."}),"\n",(0,n.jsx)(t.p,{children:"After some searching, two models, LLava, and Florence-2-base, matched the criteria that was looked for. LLaVA has under five gigabytes worth of data and Florence-2-base has under half of a gigabyte of data. These sizes make it easy to load on any device we have. Also, both displayed medium to high accuracy in describing the images that were given to them."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Model Comparison",src:a(72939).A+"",width:"1400",height:"800"})}),"\n",(0,n.jsx)(t.p,{children:"This figure shows a test conducted with over 200 images. LLaVA was tested on one node and Florence-2-base was tested on another. Both models were given the same amount of images and were left to generate descriptions. While LLaVA took over 24 hours to generate 200 descriptions, it took Florence-2-base 9 hours. In addition, the total CPU usage for the node was 20% less while Florence-2-base than while LLaVA was running. Also, Florence-2-base generated descriptions 300% faster with the same relative accuracy."}),"\n",(0,n.jsx)(t.p,{children:"Currently, Florence-2-base has been selected for the development stages of the project. As multimodal models become more accurate and smaller, this decision will be reevaluated to stay on the cutting edge of machine learning."}),"\n",(0,n.jsx)(t.h2,{id:"building-a-user-friendly-system",children:"Building a user-friendly system"}),"\n",(0,n.jsx)(t.p,{children:"The Sage/Waggle team communicates to each other through the Slack messaging application. Slack has a robust API that makes it easy to develop programs that can run directly through their system. It was selected as the optimal choice to allow users to talk directly with the Sage systems."}),"\n",(0,n.jsx)(t.p,{children:'A bot was created called "Sage Search" which runs on one of the servers in the Sage network. Sage Search contains the large language model Gemma-2 which understands user queries. Sage Search also tells the image capturing devices when to start generating descriptions based on what the user requests. Then, it sends back images that the user might want to see.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Slack Bot",src:a(9282).A+"",width:"1355",height:"522"})}),"\n",(0,n.jsx)(t.p,{children:'This photo shows a user requesting to find an image with a "white car" on a specific device. Although the generated description may have inaccuracies, the key features of the image are noted in detail. This highlights the system working as it should. The user received an image they were looking for just by sending a slack message.'}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"Florence-2 emerged as the best multimodal model due to its efficient use of resources and processing abilities. By integrating Gemma-2 within the Slack framework as the intermediary between the user and the images, the system enables user-friendly retrieval based on search queries. As this project moves from being a small prototype and into a developed application, there will be much more to consider. As more users enjoy this system, data handling will become an important topic. Considerations will also have to be made for handling images and user requests in a manner that adheres to our privacy and safety guidelines. The search system continues to develop, and, as it develops, this integration will further enhance the Sage network's capability to retrieve images effectively."})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},7536:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/capture-describe-deliver-1-ac6e8ff4998316fe69265cac6fd21059.png"},72939:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/capture-describe-deliver-2-8a55e69b1dc3d67d0ac0ec6da69e158d.png"},9282:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/capture-describe-deliver-3-5d4fe7aeaf004bc8e3980f3115a6bd34.png"},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var n=a(96540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);