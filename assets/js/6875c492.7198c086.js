"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4813],{61728:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(18215),s=n(88060),r=n(39274),l=n(74848);function i(e){const{sidebar:t,toc:n,children:i,...o}=e,c=t&&t.items.length>0;return(0,l.jsx)(s.A,{...o,children:(0,l.jsx)("div",{className:"container margin-vert--lg",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)(r.A,{sidebar:t}),(0,l.jsx)("main",{className:(0,a.A)("col",{"col--7":c,"col--9 col--offset-1":!c}),children:i}),n&&(0,l.jsx)("div",{className:"col col--2",children:n})]})})})}},47713:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var a=n(21312),s=n(39022),r=n(74848);function l(e){const{metadata:t}=e,{previousPage:n,nextPage:l}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(s.A,{permalink:n,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,r.jsx)(s.A,{permalink:l,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},32819:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(74848);function s(e){let{children:t,className:n}=e;return(0,a.jsx)("article",{className:n,children:t})}},23125:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var a=n(18215),s=n(70440),r=n(44096),l=n(88509),i=n(74848);function o(e){let{children:t,className:n}=e;const{isBlogPostPage:o}=(0,r.e7)();return(0,i.jsx)("div",{id:o?s.LU:void 0,className:(0,a.A)("markdown",n),children:(0,i.jsx)(l.A,{children:t})})}},78746:(e,t,n)=>{n.d(t,{A:()=>m});n(96540);var a=n(18215),s=n(44096),r=n(17559),l=n(4336),i=n(62053),o=n(21312),c=n(28774),d=n(74848);function u(){return(0,d.jsx)("b",{children:(0,d.jsx)(o.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function g(e){const{blogPostTitle:t,...n}=e;return(0,d.jsx)(c.A,{"aria-label":(0,o.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,d.jsx)(u,{})})}function m(){const{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{tags:n,title:o,editUrl:c,hasTruncateMarker:u,lastUpdatedBy:m,lastUpdatedAt:h}=e,p=!t&&u,x=n.length>0;if(!(x||p||c))return null;if(t){const e=!!(c||h||m);return(0,d.jsxs)("footer",{className:"docusaurus-mt-lg",children:[x&&(0,d.jsx)("div",{className:(0,a.A)("row","margin-top--sm",r.G.blog.blogFooterEditMetaRow),children:(0,d.jsx)("div",{className:"col",children:(0,d.jsx)(i.A,{tags:n})})}),e&&(0,d.jsx)(l.A,{className:(0,a.A)("margin-top--sm",r.G.blog.blogFooterEditMetaRow),editUrl:c,lastUpdatedAt:h,lastUpdatedBy:m})]})}return(0,d.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[x&&(0,d.jsx)("div",{className:(0,a.A)("col",{"col--9":p}),children:(0,d.jsx)(i.A,{tags:n})}),p&&(0,d.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":x}),children:(0,d.jsx)(g,{blogPostTitle:o,to:e.permalink})})]})}},43563:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var a=n(18215),s=n(44096),r=n(56913);const l={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};var i=n(74848);function o(e){let{className:t}=e;const{metadata:{authors:n},assets:o}=(0,s.e7)();if(0===n.length)return null;const c=n.every((e=>{let{name:t}=e;return!t})),d=1===n.length;return(0,i.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",c?l.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,i.jsx)("div",{className:(0,a.A)(!c&&(d?"col col--12":"col col--6"),c?l.imageOnlyAuthorCol:l.authorCol),children:(0,i.jsx)(r.A,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})},t)))})}},11160:(e,t,n)=>{n.d(t,{A:()=>T});n(96540);var a=n(18215),s=n(44096),r=n(32819),l=n(28774);const i={title:"title_f1Hy"};var o=n(74848);function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:r}=(0,s.e7)(),{permalink:c,title:d}=n,u=r?"h1":"h2";return(0,o.jsx)(u,{className:(0,a.A)(i.title,t),children:r?d:(0,o.jsx)(l.A,{to:c,children:d})})}var d=n(21312),u=n(53465),g=n(36266);const m={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,o.jsx)(o.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,o.jsx)("time",{dateTime:t,children:n})}function x(){return(0,o.jsx)(o.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:n}=(0,s.e7)(),{date:r,readingTime:l}=n,i=(0,g.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,o.jsxs)("div",{className:(0,a.A)(m.container,"margin-vert--md",t),children:[(0,o.jsx)(p,{date:r,formattedDate:(c=r,i.format(new Date(c)))}),void 0!==l&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{}),(0,o.jsx)(h,{readingTime:l})]})]});var c}var f=n(43563);function A(){return(0,o.jsxs)("header",{children:[(0,o.jsx)(c,{}),(0,o.jsx)(j,{}),(0,o.jsx)(f.A,{})]})}var b=n(23125),v=n(78746);function T(e){let{children:t,className:n}=e;const l=function(){const{isBlogPostPage:e}=(0,s.e7)();return e?void 0:"margin-bottom--xl"}();return(0,o.jsxs)(r.A,{className:(0,a.A)(l,n),children:[(0,o.jsx)(A,{}),(0,o.jsx)(b.A,{children:t}),(0,o.jsx)(v.A,{})]})}},33892:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var a=n(44096),s=n(11160),r=n(74848);function l(e){let{items:t,component:n=s.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.in,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},33069:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(96540);var a=n(18215),s=n(21312),r=n(45500),l=n(17559),i=n(96461),o=n(28774),c=n(61728),d=n(47713),u=n(41463),g=n(33892),m=n(32234),h=n(51107),p=n(74848);function x(e){let{tag:t}=e;const n=(0,i.ZD)(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.be,{title:n,description:t.description}),(0,p.jsx)(u.A,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:a,listMetadata:r}=e;const l=(0,i.ZD)(t);return(0,p.jsxs)(c.A,{sidebar:a,children:[t.unlisted&&(0,p.jsx)(m.A,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(h.A,{as:"h1",children:l}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(o.A,{href:t.allTagsPath,children:(0,p.jsx)(s.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(g.A,{items:n}),(0,p.jsx)(d.A,{metadata:r})]})}function f(e){return(0,p.jsxs)(r.e3,{className:(0,a.A)(l.G.wrapper.blogPages,l.G.page.blogTagPostListPage),children:[(0,p.jsx)(x,{...e}),(0,p.jsx)(j,{...e})]})}},32234:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var a=n(18215),s=n(44084),r=n(17559),l=n(27293),i=n(74848);function o(e){let{className:t}=e;return(0,i.jsx)(l.A,{type:"caution",title:(0,i.jsx)(s.Rc,{}),className:(0,a.A)(t,r.G.common.unlistedBanner),children:(0,i.jsx)(s.Uh,{})})}function c(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.AE,{}),(0,i.jsx)(o,{...e})]})}},39022:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var a=n(18215),s=n(28774),r=n(74848);function l(e){const{permalink:t,title:n,subLabel:l,isNext:i}=e;return(0,r.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},56133:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(18215),s=n(28774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=n(74848);function i(e){let{permalink:t,label:n,count:i,description:o}=e;return(0,l.jsxs)(s.A,{href:t,title:o,className:(0,a.A)(r.tag,i?r.tagWithCount:r.tagRegular),children:[n,i&&(0,l.jsx)("span",{children:i})]})}},62053:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var a=n(18215),s=n(21312),r=n(56133);const l={tags:"tags_jXut",tag:"tag_QGVx"};var i=n(74848);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,a.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(r.A,{...e})},e.permalink)))})]})}},96461:(e,t,n)=>{n.d(t,{ZD:()=>l,uz:()=>i});n(96540);var a=n(21312),s=n(53465);n(74848);function r(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function l(e){const t=r();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}const i=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})},44084:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>l,TT:()=>d,Uh:()=>i,Yh:()=>c});n(96540);var a=n(21312),s=n(5260),r=n(74848);function l(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function i(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(s.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},53465:(e,t,n)=>{n.d(t,{W:()=>c});var a=n(96540),s=n(44586);const r=["zero","one","two","few","many","other"];function l(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const s=n.select(t),r=n.pluralForms.indexOf(s);return a[Math.min(r,a.length-1)]}(n,t,e)}}}}]);