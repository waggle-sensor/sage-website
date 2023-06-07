"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={},l="Developer quick reference",r={unversionedId:"reference-guides/dev-quick-reference",id:"reference-guides/dev-quick-reference",title:"Developer quick reference",description:"Disclaimer",source:"@site/docs/reference-guides/dev-quick-reference.md",sourceDirName:"reference-guides",slug:"/reference-guides/dev-quick-reference",permalink:"/docs/reference-guides/dev-quick-reference",draft:!1,editUrl:"https://github.com/waggle-sensor/sage-website/edit/main/docs/reference-guides/dev-quick-reference.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sesctl",permalink:"/docs/reference-guides/sesctl"},next:{title:"Installation manuals",permalink:"/docs/category/installation-manuals"}},s={},p=[{value:"Disclaimer",id:"disclaimer",level:2},{value:"Tips",id:"tips",level:2},{value:"Components of a plugin",id:"components-of-a-plugin",level:2},{value:"1. An application",id:"1-an-application",level:3},{value:"2. Dockerizing the app",id:"2-dockerizing-the-app",level:3},{value:"3. ECR configs and docs",id:"3-ecr-configs-and-docs",level:3},{value:"Getting access to the node",id:"getting-access-to-the-node",level:2},{value:"Testing plugins on the nodes",id:"testing-plugins-on-the-nodes",level:2},{value:"1. Download and run it",id:"1-download-and-run-it",level:3},{value:"Download",id:"download",level:4},{value:"Testing with Pluginctl",id:"testing-with-pluginctl",level:4},{value:"Testing USBSerial devices",id:"testing-usbserial-devices",level:3},{value:"2. Check if it worked",id:"2-check-if-it-worked",level:3},{value:"3. Troubleshooting failed plugin",id:"3-troubleshooting-failed-plugin",level:3},{value:"Edge Code Repository",id:"edge-code-repository",level:2},{value:"How to get your plugin on ECR",id:"how-to-get-your-plugin-on-ecr",level:3},{value:"Versioning your code",id:"versioning-your-code",level:4},{value:"After ECR registry test (generally not required)",id:"after-ecr-registry-test-generally-not-required",level:3},{value:"Scheduling the job",id:"scheduling-the-job",level:2},{value:"Scheduling scripts",id:"scheduling-scripts",level:3},{value:"<code>job.yaml</code> example for USB device",id:"jobyaml-example-for-usb-device",level:3},{value:"Multiple jobs example",id:"multiple-jobs-example",level:3},{value:"Debugging failed jobs",id:"debugging-failed-jobs",level:3},{value:"Downloading the data",id:"downloading-the-data",level:2},{value:"See Your Data on Sage Portal",id:"see-your-data-on-sage-portal",level:3},{value:"Download all images with wget",id:"download-all-images-with-wget",level:3},{value:"Sage data client for text data",id:"sage-data-client-for-text-data",level:3},{value:"Querying data example",id:"querying-data-example",level:3},{value:"More data analysis resources",id:"more-data-analysis-resources",level:3},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Find PT Mobotix thermal camera ip on the node",id:"find-pt-mobotix-thermal-camera-ip-on-the-node",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"developer-quick-reference"},"Developer quick reference"),(0,i.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,i.kt)("p",null,"\u26a0\ufe0f This is a quick-reference guide, not a complete guide to making a plugin.\nUse this to copy-paste commands while working on plugins and to troubleshoot them in the testing and scheduling stages.\nPlease consult the official \ud83d\udcd7",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/edge-apps/intro-to-edge-apps"},"Plugin Tutorials")," for detailed guidance."),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("p",null,"\u2139\ufe0f  Plugin=App"),(0,i.kt)("p",null,"\ud83d\udcd7 = recommended code docs and tutorials from Sage."),(0,i.kt)("p",null,"\ud83d\udc49 First make ",(0,i.kt)("strong",{parentName:"p"},"a minimalistic")," app with a ",(0,i.kt)("strong",{parentName:"p"},"core functionality")," to test on the node. Later you may add all the options you want."),(0,i.kt)("p",null,"\u261d\ufe0f Avoid making a plugin from scratch. Use another plugin or this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/edge-app-template"},"template")," for your first plugin or use \ud83c\udd95 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/cookiecutter-sage-app"},"Cookiecutter Template"),"."),(0,i.kt)("p",null,"\u26a0\ufe0f Repository names should be all in small alphanumeric letters and ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),"."),(0,i.kt)("p",null,"Requirements\n: Install Docker, git, and Python"),(0,i.kt)("h2",{id:"components-of-a-plugin"},"Components of a plugin"),(0,i.kt)("p",null,"Typical components of a Sage plugin are described below:"),(0,i.kt)("h3",{id:"1-an-application"},"1. An application"),(0,i.kt)("p",null,"This is just your usual Python program, either a single .py script or a set of directories with many components (e.g. ML models, unit tests, test data, etc)."),(0,i.kt)("p",null,"\ud83d\udc49 First do this step on your machine and perfect it until you are happy with the core functionality."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"app/app.py*"),"\n: the main Python file (sometimes also named ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"main.py")),") contains the code that defines the functionality of the plugin or calls other scripts to do tasks. It usually has ",(0,i.kt)("inlineCode",{parentName:"p"},"from waggle.plugin import Plugin")," call to get the data from in-built sensors and publishes the output."),(0,i.kt)("p",null,"Note: Variable names in ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin.publish")," should be descriptive and specific."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Install ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/pywaggle"},"pywaggle")," ",(0,i.kt)("inlineCode",{parentName:"p"},"pip3 install -U 'pywaggle[all]'"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"app/test.py"),"\n: optional but recommended file, contains the unit tests for the plugin."),(0,i.kt)("h3",{id:"2-dockerizing-the-app"},"2. Dockerizing the app"),(0,i.kt)("p",null,"\ud83d\udc49 Put everything in a Docker container using a waggle base image and make it work. This may require some work if libraries are not compatible. Always use the latest base images from ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/waggle/plugin-base/tags"},"Dockerhub")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile*"),"\n: contains instructions for building a Docker image for the plugin. It specifies the waggle base image from ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/waggle/plugin-base/tags"},"dockerhub"),", sets up the environment, installs dependencies, and sets the ",(0,i.kt)("strong",{parentName:"p"},"entrypoint")," for the container."),(0,i.kt)("p",null,"\u26a0\ufe0f Keep it simple ",(0,i.kt)("inlineCode",{parentName:"p"},'ENTRYPOINT ["python3", "/app/app.py"]')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"requirements.txt*"),"\n: lists the Python dependencies for the plugin. It is used by the Dockerfile to install the required packages using ",(0,i.kt)("inlineCode",{parentName:"p"},"pip"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"build.sh"),"\n: is an optional shell script to automate building the complicated Docker image with tags etc."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Makefile"),"\n: optional but the recommended file includes commands for building the Docker image, running tests, and deploying the plugin."),(0,i.kt)("h3",{id:"3-ecr-configs-and-docs"},"3. ECR configs and docs"),(0,i.kt)("p",null,"You can do this step (",(0,i.kt)("em",{parentName:"p"},"except ",(0,i.kt)("strong",{parentName:"em"},"sage.yaml")),") after testing on the node but before the ",(0,i.kt)("a",{parentName:"p",href:"#Edge-code-repository"},"ERC submission"),". \ud83d\ude04"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sage.yaml*"),"\n: is the configuration file useful for ECR and job submission? Most importantly it specifies the version and input arguments."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"README.md")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ecr-meta/ecr-science-description.md*"),"\n: a Markdown file describing the scientific rationale of the plugin as an extended abstract. This includes a description of the plugin, installation instructions, usage examples, data downloading code snippets, and other relevant information."),(0,i.kt)("p",null,"\ud83d\udca1 Keep the same text in both files and follow the template of ",(0,i.kt)("strong",{parentName:"p"},"ecr-science-description.md"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ecr-meta/ecr-icon.jpg"),"\n: is an icon for the plugin in the Sage portal."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ecr-meta/ecr-science-image.jpg"),"\n: is a key image or figure plot that best represents the scientific output of the plugin."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\ud83d\udcd7 Check Sage Tuorial ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/edge-apps/intro-to-edge-apps"},"Part1")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/edge-apps/creating-an-edge-app"},"Part2"))),(0,i.kt)("h2",{id:"getting-access-to-the-node"},"Getting access to the node"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Follow this page: ",(0,i.kt)("a",{parentName:"li",href:"https://portal.sagecontinuum.org/account/access"},"https://portal.sagecontinuum.org/account/access")," to access the nodes."),(0,i.kt)("li",{parentName:"ol"},"To test your connection the first time, execute ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh waggle-dev-sshd")," and enter ",(0,i.kt)("em",{parentName:"li"},"your ssh key passphrase"),". You should get the following output,")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Enter passphrase for key ",(0,i.kt)("strong",{parentName:"p"},"/Users/bhupendra/.ssh/id_rsa"),":\nno command provided\nConnection to 192.5.86.5 closed."),(0,i.kt)("p",{parentName:"blockquote"},"Enter the passphrase to continue.")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"To connect to the node, execute ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh waggle-dev-node-V032")," and enter your ",(0,i.kt)("em",{parentName:"li"},"passphrase")," (required twice).")),(0,i.kt)("p",null,"You should see the following message,"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We are connecting you to node V032")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\ud83d\udcd7 See ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/edge-apps/testing-an-edge-app"},"Sage Tuorial: Part 3")," for details on this topic.")),(0,i.kt)("h2",{id:"testing-plugins-on-the-nodes"},"Testing plugins on the nodes"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"\u26a0\ufe0f Do not run any app or install packages directly on the node. Use Docker container or ",(0,i.kt)("inlineCode",{parentName:"p"},"pluginctl")," commands.")),(0,i.kt)("h3",{id:"1-download-and-run-it"},"1. Download and run it"),(0,i.kt)("h4",{id:"download"},"Download"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you have not already done it, you need your plugin in a public GitHub repository at this stage."),(0,i.kt)("li",{parentName:"ul"},"To test the app on a node, go to nodes W0xx (e.g. W023) and clone your repo there using the command ",(0,i.kt)("inlineCode",{parentName:"li"},"git clone"),"."),(0,i.kt)("li",{parentName:"ul"},"At this stage, you can play with your plugin in the docker container until you are happy. Then if there are changes made to the plugin, I reccomend replicating the same in your local repository and pushing it to the github and node."),(0,i.kt)("li",{parentName:"ul"},"or do ",(0,i.kt)("inlineCode",{parentName:"li"},"git commit -am 'changes from node'")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"git push -u origin main"),"."),(0,i.kt)("li",{parentName:"ul"},"However, before commiting from node, you must run following commands at least once in your git repository on the node.\n",(0,i.kt)("inlineCode",{parentName:"li"},'git config [--locale] user.name "Full Name"'),(0,i.kt)("inlineCode",{parentName:"li"},'git config [--locale] user.email "email@address.com"'))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"\u26a0\ufe0f Make sure your ",(0,i.kt)("strong",{parentName:"p"},"Dockerfile")," has a proper ",(0,i.kt)("strong",{parentName:"p"},"entrypoint")," or the ",(0,i.kt)("inlineCode",{parentName:"p"},"pluginctl")," run will fail.")),(0,i.kt)("h4",{id:"testing-with-pluginctl"},"Testing with Pluginctl"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\ud83d\udcd7 For more details on this topic check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/edge-scheduler/tree/main/docs/pluginctl"},"pluginctl docs"),".")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Then to test execute the command ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo pluginctl build ."),". This will output the plugin-image registry address at the end of the build. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"10.31.81.1:5000/local/my-plugin-name")),(0,i.kt)("li",{parentName:"ol"},"To run the plugin without input argument, use ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo pluginctl run -n <some-unique-name> <1x.xx.xx.x:5000/local/my-plugin-name>")),(0,i.kt)("li",{parentName:"ol"},"Execute the command with input arguments. ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo pluginctl run -n <some-unique-name> <1x.xx.xx.x:5000/local/my-plugin-name> -- -i top_camera"),"."),(0,i.kt)("li",{parentName:"ol"},"IF you need GPU, use the selector ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo pluginctl run -n <some-unique-name> <1x.xx.xx.x:5000/local/my-plugin-name> -- -i top_camera"),"."),(0,i.kt)("li",{parentName:"ol"},"\u2757 ",(0,i.kt)("inlineCode",{parentName:"li"},"--")," is a separator. After the ",(0,i.kt)("inlineCode",{parentName:"li"},"--")," all arguments are for your entrypoint i.e. app.py."),(0,i.kt)("li",{parentName:"ol"},"To check running plugins, execute ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo pluginctl ps"),". To stop the plugin, execute ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo pluginctl rm")," cloud-motion.\n\u26a0\ufe0fDo not forget to stop the plugins after testing or it will run forever.")),(0,i.kt)("h3",{id:"testing-usbserial-devices"},"Testing USBSerial devices"),(0,i.kt)("p",null,"\ud83d\udc49The USBserial device template is in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/cookiecutter-sage-app"},"Cookiecutter Template"),". Also check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jrobrien91/waggle-wxt536"},"wxt536")," plugin."),(0,i.kt)("p",null,"Steps for working with a USB serial device"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First, you need to confirm which computing unit the USB device is connected to, RPi or nxcore."),(0,i.kt)("li",{parentName:"ol"},"Then, you add the ",(0,i.kt)("inlineCode",{parentName:"li"},"--selector")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"--privileged")," options to the ",(0,i.kt)("inlineCode",{parentName:"li"},"pluginctl"),"  command during testing and specifying the same in the ",(0,i.kt)("strong",{parentName:"li"},"job.yaml")," for scheduling."),(0,i.kt)("li",{parentName:"ol"},"To test the plugin on ",(0,i.kt)("em",{parentName:"li"},"nxcore"),", which has the USB device, use the command ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo pluginctl run -n testname --selector zone=core --privileged 10.31.81.1:5000/local/plugin-name"),"."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"--selector")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"--privileged")," attributes should be added to the ",(0,i.kt)("em",{parentName:"li"},"pluginSpec")," in the job submission script as shown in the example YAML code."),(0,i.kt)("li",{parentName:"ol"},"You can check which computing unit is being used by the edge scheduler by running the ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl describe pod")," command and checking the output.")),(0,i.kt)("p",null,"\u26a0\ufe0f Re/Check that you are using the correct USB port for the device if getting empty output or ",(0,i.kt)("em",{parentName:"p"},"folder not found")," error."),(0,i.kt)("h3",{id:"2-check-if-it-worked"},"2. Check if it worked"),(0,i.kt)("p",null,"Login to the Sage portal and follow the instructions from the section ",(0,i.kt)("a",{parentName:"p",href:"https://hackmd.io/iKUbbfZ7RYGbXT_tnBd1vg?both#See-Your-Data-on-Sage-Portal"},"See Your Data on Sage Portal")),(0,i.kt)("h3",{id:"3-troubleshooting-failed-plugin"},"3. Troubleshooting failed plugin"),(0,i.kt)("p",null,"When you encounter a failing/long pending job with an error, you can use the following steps to help you diagnose the issue:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First check the Dockerfile ",(0,i.kt)("strong",{parentName:"li"},"entrypoint"),"."),(0,i.kt)("li",{parentName:"ol"},"Use the command ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo kubectl get pod")," to get the name of the pod associated with the failing job."),(0,i.kt)("li",{parentName:"ol"},"Use the command ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo kubectl logs <<POD_NAME>>")," to display the logs for the pod associated with the failing job. These logs will provide you with information on why the job failed."),(0,i.kt)("li",{parentName:"ol"},"Use the command ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo kubectl describe pod POD_NAME")," to display detailed information about the pod associated with the failing job."),(0,i.kt)("li",{parentName:"ol"},"This information can help you identify any issues with the pod itself, such as issues with its configuration or resources.")),(0,i.kt)("p",null,"By following these steps, you can better understand why the job is failing and take steps to resolve the issue."),(0,i.kt)("h2",{id:"edge-code-repository"},"Edge Code Repository"),(0,i.kt)("h3",{id:"how-to-get-your-plugin-on-ecr"},"How to get your plugin on ECR"),(0,i.kt)("p",null,"To publish your Plugin on ECR, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://portal.sagecontinuum.org/apps/"},"https://portal.sagecontinuum.org/apps/"),"."),(0,i.kt)("li",{parentName:"ol"},'Click on "Explore the Apps Portal".'),(0,i.kt)("li",{parentName:"ol"},'Click on "My Apps". You must be logged in to continue.'),(0,i.kt)("li",{parentName:"ol"},'Click "Create App" and enter your Github Repo URL.'),(0,i.kt)("li",{parentName:"ol"},'\'Click "Register and Build App".'),(0,i.kt)("li",{parentName:"ol"},'On Your app page click on the "Tags" tab to get the registry link when you need to run the job on the node either using ',(0,i.kt)("inlineCode",{parentName:"li"},"pluginctl")," or job script. This will look like:",(0,i.kt)("inlineCode",{parentName:"li"},"docker pull registry.sagecontinuum.org/bhupendraraut/mobotix-move:1.23.3.2")),(0,i.kt)("li",{parentName:"ol"},"Repeat the above process for updating the plugin.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"After the build process is complete, you need to ",(0,i.kt)("strong",{parentName:"p"},"make the plugin public")," to schedule it.")),(0,i.kt)("p",null,"\ud83d\udc49 If you have skipped step ",(0,i.kt)("a",{parentName:"p",href:"#3-ECR-Configs-and-Docs"},"3. ECR Configs and Docs"),", do it before submitting it to the ECR. Ensure that your ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ecr-meta/ecr-science-description.md"))," and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"sage.yaml"))," files are properly configured for this process."),(0,i.kt)("h4",{id:"versioning-your-code"},"Versioning your code"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"You can not resubmit the plugin to ECR with the same version number again.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"So think about how you change it every time you resubmit to ERC and make your style of versioning. \ud83e\udd14"),(0,i.kt)("li",{parentName:"ul"},"I use ",(0,i.kt)("em",{parentName:"li"},"'vx.y.m.d'")," e.g. ",(0,i.kt)("em",{parentName:"li"},"'v0.23.3.4'")," but then I can only have 1 version a day, so now I am thinking of adding an incremental integer to it.")),(0,i.kt)("h3",{id:"after-ecr-registry-test-generally-not-required"},"After ECR registry test (generally not required)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Generally successfully tested plugins just work. However, in case they are failing in the scheduled jobs after running for a while or after successfully running in the above tests, do the following."),(0,i.kt)("li",{parentName:"ol"},"To test a plugin on a node after it has been built on the ECR, follow these steps:\n",(0,i.kt)("inlineCode",{parentName:"li"},"sudo pluginctl run --name test-run registry.sagecontinuum.org/bhupendraraut/cloud-motion:1.23.01.24 -- -input top")),(0,i.kt)("li",{parentName:"ol"},'This command will execute the plugin with the specified ECR image (version 1.23.01.24), passing the "-input top" argument to the plugin (Note ',(0,i.kt)("inlineCode",{parentName:"li"},"--")," after the image telling ",(0,i.kt)("inlineCode",{parentName:"li"},"pluginctl")," that these arguments are for the plugin).")),(0,i.kt)("p",null,"\ud83d\udc49 Note the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo")," in all ",(0,i.kt)("inlineCode",{parentName:"p"},"pluginctl")," and  ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," commands on the node."),(0,i.kt)("p",null,'Assuming that the plugin has been installed correctly and the ECR image is available, running this command should test the "test-motion" plugin on the node.'),(0,i.kt)("p",null,"You may also have to call the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl <POD>")," commands as in the testing section if this fails."),(0,i.kt)("h2",{id:"scheduling-the-job"},"Scheduling the job"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"\u2757 If you get an error like ",(0,i.kt)("inlineCode",{parentName:"p"},"registry does not exist in ECR"),", then check that your plugin is made public.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Follow this ",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/schedule-jobs"},"link")," to get an understanding of how to submit a job"),(0,i.kt)("li",{parentName:"ul"},"Here are the parameters we set for the Mobotix sampler plugin,")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-less="},"-name thermalimaging registry.sagecontinuum.org/bhupendraraut/mobotix-sampler:1.22.4.13 \\\n   --ip 10.31.81.14 \\\n   -u userid \\\n   -p password \\\n   --frames 1 \\\n   --timeout 5 \\\n   --loopsleep 60\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your science rule can be a cronjob (More information can be found ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/waggle-sensor/sciencerule-checker/blob/master/docs/supported_functions.md#cronjobprogram_name-cronjob_time"},"here")),(0,i.kt)("li",{parentName:"ul"},"This runs every 15 minutes\n",(0,i.kt)("inlineCode",{parentName:"li"},'"thermalimaging": cronjob("thermalimaging", "*/15 * * * *")'),"."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"https://crontab.guru/"},"Crontab Guru"),"."),(0,i.kt)("li",{parentName:"ul"},"You can also make it triggered by a value. Please ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/waggle-sensor/sciencerule-checker/blob/master/docs/supported_functions.md"},"read this")," for supported functions.")),(0,i.kt)("h3",{id:"scheduling-scripts"},"Scheduling scripts"),(0,i.kt)("p",null,"\u2728 Check user friendly ",(0,i.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org/jobs/all-jobs"},"job submission UI"),"."),(0,i.kt)("p",null,"\ud83d\udcd7 Check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/edge-scheduler/tree/main/docs/sesctl"},"sesctl docs")," for command line tool."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u261d\ufe0f Do not use capital letters/dots in the job name."),(0,i.kt)("li",{parentName:"ol"},"\u261d\ufe0f make the plugin ",(0,i.kt)("inlineCode",{parentName:"li"},"public")," in the Sage app portal.")),(0,i.kt)("h3",{id:"jobyaml-example-for-usb-device"},(0,i.kt)("inlineCode",{parentName:"h3"},"job.yaml")," example for USB device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml="},'name: atmoswxt\nplugins:\n- name: waggle-wxt536\n  pluginSpec:\n    image: registry.sagecontinuum.org/jrobrien/waggle-wxt536:0.23.4.13\n    privileged: true\n    selector:\n      zone: core\nnodeTags: []\nnodes:\n  W057: true\n  W039: true\nscienceRules:\n- \'schedule("waggle-wxt536"): cronjob("waggle-wxt536", "1/10 * * * *")\'\nsuccessCriteria:\n- WallClock(\'1day\')\n')),(0,i.kt)("h3",{id:"multiple-jobs-example"},"Multiple jobs example"),(0,i.kt)("p",null,"If you want to run your plugins not all at the same time. Use this example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml="},'name: w030-k3s-upgrade-test\nplugins:\n- name: object-counter-bottom\n  pluginSpec:\n    image: registry.sagecontinuum.org/yonghokim/object-counter:0.5.1\n    args:\n    - -stream\n    - bottom_camera\n    - -all-objects\n    selector:\n      resource.gpu: "true"\n- name: cloud-cover-bottom\n  pluginSpec:\n    image: registry.sagecontinuum.org/seonghapark/cloud-cover:0.1.3\n    args:\n    - -stream\n    - bottom_camera\n    selector:\n      resource.gpu: "true"\n- name: surfacewater-classifier\n  pluginSpec:\n    image: registry.sagecontinuum.org/seonghapark/surface_water_classifier:0.0.1\n    args:\n    - -stream\n    - bottom_camera\n    - -model\n    - /app/model.pth\n- name: avian-diversity-monitoring\n  pluginSpec:\n    image: registry.sagecontinuum.org/dariodematties/avian-diversity-monitoring:0.2.5\n    args:\n    - --num_rec\n    - "1"\n    - --silence_int\n    - "1"\n    - --sound_int\n    - "20"\n- name: cloud-motion-v1\n  pluginSpec:\n    image: registry.sagecontinuum.org/bhupendraraut/cloud-motion:1.23.02.20\n    args:\n    - --input\n    - bottom_camera\n- name: imagesampler-bottom\n  pluginSpec:\n    image: registry.sagecontinuum.org/theone/imagesampler:0.3.1\n    args:\n    - -stream\n    - bottom_camera\n- name: audio-sampler\n  pluginSpec:\n    image: registry.sagecontinuum.org/seanshahkarami/audio-sampler:0.4.1\nnodeTags: []\nnodes:\n  W030: true\nscienceRules:\n- \'schedule(object-counter-bottom): cronjob("object-counter-bottom", "*/5 * * * *")\'\n- \'schedule(cloud-cover-bottom): cronjob("cloud-cover-bottom", "01-59/5 * * * *")\'\n- \'schedule(surfacewater-classifier): cronjob("surfacewater-classifier", "02-59/5\n  * * * *")\'\n- \'schedule("avian-diversity-monitoring"): cronjob("avian-diversity-monitoring", "*\n  * * * *")\'\n- \'schedule("cloud-motion-v1"): cronjob("cloud-motion-v1", "03-59/5 * * * *")\'\n- \'schedule(imagesampler-bottom): cronjob("imagesampler-bottom", "04-59/5 * * * *")\'\n- \'schedule(audio-sampler): cronjob("audio-sampler", "*/5 * * * *")\'\nsuccessCriteria:\n- Walltime(1day)\n\n')),(0,i.kt)("p",null,"here\nobjecct-counter runs at 0, 5, 10, etc\ncloud-cover: 1, 6, 11, etc.\nsurface water: 2, 7, 12, etc.\ncloud-motion: 3, 8, 13, etc.\nimage-sampl: 4, 9, 14, etc."),(0,i.kt)("h3",{id:"debugging-failed-jobs"},"Debugging failed jobs"),(0,i.kt)("p",null,"Do you know how to identify why a job is failing"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u2728 When the job failures are seen as ",(0,i.kt)("inlineCode",{parentName:"li"},"red")," markers on your ",(0,i.kt)("a",{parentName:"li",href:"https://portal.sagecontinuum.org/jobs/my-jobs"},"job page"),", you can click them to see the error.\n",(0,i.kt)("img",{parentName:"li",src:"https://i.imgur.com/xPXERPX.png",alt:"click on red markers"}))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/GmStINF.png",alt:null})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Or detail errors can be found using using ",(0,i.kt)("inlineCode",{parentName:"li"},"sage_data_client"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Requirements: ",(0,i.kt)("inlineCode",{parentName:"li"},"sage_data_client")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/waggle-sensor/edge-scheduler/blob/main/scripts/analysis/utils.py"},"utils.py")),(0,i.kt)("li",{parentName:"ul"},"By specifying the plugin name and node, the following code will print out the reasons for job failure within the last 60 minutes.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python="},'from utils import *\n\nmynode = "w030"\n\nmyplugin = "water"\ndf = fill_completion_failure(parse_events(get_data(mynode, start="-60m")))\nfor _, p in df[df["plugin_name"].str.contains(myplugin)].iterrows():\n    print(p["error_log"])\n')),(0,i.kt)("h2",{id:"downloading-the-data"},"Downloading the data"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/accessing-data"},"Sage docs for accessing-data")),(0,i.kt)("h3",{id:"see-your-data-on-sage-portal"},"See Your Data on Sage Portal"),(0,i.kt)("p",null,"To check your data on Sage Portal, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on the Data tab at the top of the portal page."),(0,i.kt)("li",{parentName:"ol"},"Select Data Query Browser from the dropdown menu."),(0,i.kt)("li",{parentName:"ol"},"Then, select your app in the filter.\nThis will show all the data that is uploaded by your app using the ",(0,i.kt)("inlineCode",{parentName:"li"},"plugin.publish()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"plugin.upload()")," methods.")),(0,i.kt)("p",null,"In addition, you can data visualize as a time series and select multiple variables to visualize together in a chart, which can be useful for identifying trends or patterns."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/5W9jAfw.png",alt:null})),(0,i.kt)("h3",{id:"download-all-images-with-wget"},"Download all images with wget"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Visit ",(0,i.kt)("a",{parentName:"li",href:"https://training-data.sagecontinuum.org/"},"https://training-data.sagecontinuum.org/")),(0,i.kt)("li",{parentName:"ol"},"select the node and period for data."),(0,i.kt)("li",{parentName:"ol"},"Select the required data and download the text file ",(0,i.kt)("em",{parentName:"li"},"urls-xxxxxxx.txt")," with urls"),(0,i.kt)("li",{parentName:"ol"},"To select only the top camera images, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"vim")," command: ",(0,i.kt)("inlineCode",{parentName:"li"},"g/^\\(.*top\\)\\@!.*$/d"),". This will delete URLs that do not contain the word 'top'"),(0,i.kt)("li",{parentName:"ol"},"Copy the following command from the website and run it in your terminal. ",(0,i.kt)("inlineCode",{parentName:"li"},"wget -r -N -i urls-xxxxxxx.txt"))),(0,i.kt)("h3",{id:"sage-data-client-for-text-data"},"Sage data client for text data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sage data client ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/sagecontinuum/sage-data-client/blob/main/examples/plotting_example.ipynb"},"python Notebook Example")),(0,i.kt)("li",{parentName:"ul"},"pypi ",(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/sage-data-client/"},"link"),(0,i.kt)("inlineCode",{parentName:"li"},"pip install sage-data-client"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\ud83d\udcd7 Documentation for ",(0,i.kt)("a",{parentName:"p",href:"https://docs.sagecontinuum.org/docs/tutorials/accessing-data"},"accessing the data."))),(0,i.kt)("h3",{id:"querying-data-example"},"Querying data example"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sage_data_client")," provides ",(0,i.kt)("inlineCode",{parentName:"p"},"query()")," function which takes the parameters:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"start"),": The start time of the query as a string.\n",(0,i.kt)("inlineCode",{parentName:"p"},"end"),": The end time of the query as a string.\n",(0,i.kt)("inlineCode",{parentName:"p"},"filter"),": A dictionary with key-value pairs to apply filter. The function returns a Pandas DataFrame object. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/RBhupi/sage-data-client/tree/main/examples"},"Check more examples"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python="},'import sage_data_client\nimport urllib\nimport tempfile\nfrom IPython.display import Image\nimport imageio as io\nimport os\n\nfrom PIL import Image\nfrom PIL import ImageFont\nfrom PIL import ImageDraw\n\ndf = sage_data_client.query(\n    start="2023-02-10T12:00:00Z",\n    end="2023-02-22T23:00:00.000Z",\n    filter={\n        "plugin": "registry.sagecontinuum.org/theone/imagesampler.*",\n        "vsn": "W084",\n        "job": "imagesampler-top"\n    }\n).sort_values(\'timestamp\')\n\nwith io.get_writer(\'taft.mp4\', fps=5) as writer:\n    for i in df.index:\n        uurl = df.value[i]\n        timestamp = df.timestamp[i]\n        try:\n            tempf = tempfile.NamedTemporaryFile()\n            urllib.request.urlretrieve(uurl, tempf.name)\n\n            img = Image.open(tempf.name)\n            draw = ImageDraw.Draw(img)\n            font = ImageFont.truetype("SFNS.ttf", 64)\n            draw.text((800, 1800),timestamp.strftime(\'TAFT Waggle Node 84 %y-%m-%d %H:%M Z\'),(255,255,255),font=font)\n            img.save(tempf.name + \'.jpg\')\n\n            image = io.imread(tempf.name + \'.jpg\')\n            writer.append_data(image)\n        except urllib.error.HTTPError:\n            print(\'Image skipped \' + uurl)\n\nwriter.close()\n')),(0,i.kt)("h3",{id:"more-data-analysis-resources"},"More data analysis resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sagecontinuum/sage-data-client/tree/main/examples"},"SAGE Examples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://crocus-urban.github.io/instrument-cookbooks/README.html"},"CROCUS Cookbooks"))),(0,i.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,i.kt)("h3",{id:"find-pt-mobotix-thermal-camera-ip-on-the-node"},"Find PT Mobotix thermal camera ip on the node"),(0,i.kt)("p",null,"Login to the node where the PTmobotix camera is connected."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"run ",(0,i.kt)("inlineCode",{parentName:"li"},"nmap -sP 10.31.81.1/24"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Nmap scan report for ws-nxcore-000048B02D3AF49F (10.31.81.1)\nHost is up (0.0012s latency).\nNmap scan report for switch (10.31.81.2)\nHost is up (0.0058s latency).\nNmap scan report for ws-rpi (10.31.81.4)\nHost is up (0.00081s latency).\nNmap scan report for 10.31.81.10\nHost is up (0.0010s latency).\nNmap scan report for 10.31.81.15\nHost is up (0.00092s latency).\nNmap scan report for 10.31.81.17\nHost is up (0.0014s latency).\nNmap done: 256 IP addresses (6 hosts up) scanned in 2.42 seconds\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"From the output run following command for each ",(0,i.kt)("inlineCode",{parentName:"li"},"cam_IP"),(0,i.kt)("inlineCode",{parentName:"li"},"curl -u admin:wagglesage  -X POST  http://cam_IP/control/rcontrol?action=putrs232&rs232outtext=%FF%01%00%0F%00%00%10"))),(0,i.kt)("p",null,"e.g.\n",(0,i.kt)("inlineCode",{parentName:"p"},"curl -u admin:wagglesage  -X POST  http://10.31.81.15/control/rcontrol?action=putrs232&rs232outtext=%FF%01%00%0F%00%00%10")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"The ip for which output is ",(0,i.kt)("inlineCode",{parentName:"li"},"OK")," is the Mobotix.")))}c.isMDXComponent=!0}}]);