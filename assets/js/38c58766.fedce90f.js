"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89383],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||s;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},55674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={title:"Rendering the Helm Template in an Air Gapped Environment"},l=void 0,i={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",id:"version-2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",title:"Rendering the Helm Template in an Air Gapped Environment",description:"These instructions assume you have already followed the instructions for a Kubernetes upgrade on this page, including the prerequisites, up until step 3. Upgrade Rancher.",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",permalink:"/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades.md",tags:[],version:"2.5",lastUpdatedAt:1685111429,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Rendering the Helm Template in an Air Gapped Environment"},sidebar:"tutorialSidebar",previous:{title:"Upgrades",permalink:"/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"},next:{title:"Installing Rancher on Amazon EKS",permalink:"/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"}},o={},p=[{value:"Rancher Helm Template Options",id:"rancher-helm-template-options",level:2},{value:"Option A: Default Self-signed Certificate",id:"option-a-default-self-signed-certificate",level:3},{value:"Option B: Certificates from Files using Kubernetes Secrets",id:"option-b-certificates-from-files-using-kubernetes-secrets",level:3},{value:"Apply the Rendered Templates",id:"apply-the-rendered-templates",level:2},{value:"Verify the Upgrade",id:"verify-the-upgrade",level:2},{value:"Known Upgrade Issues",id:"known-upgrade-issues",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=u("Tabs"),c=u("TabItem"),m={toc:p};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"These instructions assume you have already followed the instructions for a Kubernetes upgrade on ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"},"this page,")," including the prerequisites, up until step 3. Upgrade Rancher.")),(0,a.kt)("h2",{id:"rancher-helm-template-options"},"Rancher Helm Template Options"),(0,a.kt)("p",null,"Render the Rancher template using the same chosen options that were used when installing Rancher. Use the reference table below to replace each placeholder. Rancher needs to be configured to use the private registry in order to provision any Rancher launched Kubernetes clusters or Rancher tools."),(0,a.kt)("p",null,"Based on the choice you made during installation, complete one of the procedures below."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<VERSION>")),(0,a.kt)("td",{parentName:"tr",align:null},"The version number of the output tarball.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<RANCHER.YOURDOMAIN.COM>")),(0,a.kt)("td",{parentName:"tr",align:null},"The DNS name you pointed at your load balancer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,a.kt)("td",{parentName:"tr",align:null},"The DNS name for your private registry.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<CERTMANAGER_VERSION>")),(0,a.kt)("td",{parentName:"tr",align:null},"Cert-manager version running on k8s cluster.")))),(0,a.kt)("h3",{id:"option-a-default-self-signed-certificate"},"Option A: Default Self-signed Certificate"),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(c,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set certmanager.version=<CERTMANAGER_VERSION> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n"))),(0,a.kt)(c,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n--namespace cattle-system \\\n--set hostname=<RANCHER.YOURDOMAIN.COM> \\\n--set certmanager.version=<CERTMANAGER_VERSION> \\\n--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n--set useBundledSystemChart=true # Use the packaged Rancher system charts\n")))),(0,a.kt)("h3",{id:"option-b-certificates-from-files-using-kubernetes-secrets"},"Option B: Certificates from Files using Kubernetes Secrets"),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(c,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set ingress.tls.source=secret \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,a.kt)("p",null,"If you are using a Private CA signed cert, add ",(0,a.kt)("inlineCode",{parentName:"p"},"--set privateCA=true")," following ",(0,a.kt)("inlineCode",{parentName:"p"},"--set ingress.tls.source=secret"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set ingress.tls.source=secret \\\n    --set privateCA=true \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n"))),(0,a.kt)(c,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n--namespace cattle-system \\\n--set hostname=<RANCHER.YOURDOMAIN.COM> \\\n--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n--set ingress.tls.source=secret \\\n--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n--set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,a.kt)("p",null,"If you are using a Private CA signed cert, add ",(0,a.kt)("inlineCode",{parentName:"p"},"--set privateCA=true")," following ",(0,a.kt)("inlineCode",{parentName:"p"},"--set ingress.tls.source=secret"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n--namespace cattle-system \\\n--set hostname=<RANCHER.YOURDOMAIN.COM> \\\n--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n--set ingress.tls.source=secret \\\n--set privateCA=true \\\n--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n--set useBundledSystemChart=true # Use the packaged Rancher system charts\n")))),(0,a.kt)("h2",{id:"apply-the-rendered-templates"},"Apply the Rendered Templates"),(0,a.kt)("p",null,"Copy the rendered manifest directories to a system with access to the Rancher server cluster and apply the rendered templates."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," to apply the rendered manifests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl -n cattle-system apply -R -f ./rancher\n")),(0,a.kt)("h2",{id:"verify-the-upgrade"},"Verify the Upgrade"),(0,a.kt)("p",null,"Log into Rancher to confirm that the upgrade succeeded."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Having network issues following upgrade?")),(0,a.kt)("p",{parentName:"blockquote"},"See ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration"},"Restoring Cluster Networking"),".")),(0,a.kt)("h2",{id:"known-upgrade-issues"},"Known Upgrade Issues"),(0,a.kt)("p",null,"A list of known issues for each Rancher version can be found in the release notes on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"GitHub")," and on the ",(0,a.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements/12"},"Rancher forums.")))}g.isMDXComponent=!0}}]);