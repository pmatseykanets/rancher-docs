"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[31016],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=a,m=h["".concat(i,".").concat(d)]||h[d]||p[d]||s;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},96724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const s={title:"Installing Rancher on Azure Kubernetes Service"},o=void 0,l={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks",id:"version-2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks",title:"Installing Rancher on Azure Kubernetes Service",description:"This page covers how to install Rancher on Microsoft's Azure Kubernetes Service (AKS).",source:"@site/versioned_docs/version-2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks",permalink:"/v2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks.md",tags:[],version:"2.6",lastUpdatedAt:1685111429,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Installing Rancher on Azure Kubernetes Service"},sidebar:"tutorialSidebar",previous:{title:"Installing Rancher on Amazon EKS",permalink:"/v2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks"},next:{title:"Installing Rancher on a Google Kubernetes Engine Cluster",permalink:"/v2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke"}},i={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Prepare your Workstation",id:"1-prepare-your-workstation",level:2},{value:"2. Create a Resource Group",id:"2-create-a-resource-group",level:2},{value:"3. Create the AKS Cluster",id:"3-create-the-aks-cluster",level:2},{value:"4. Get Access Credentials",id:"4-get-access-credentials",level:2},{value:"5. Install an Ingress",id:"5-install-an-ingress",level:2},{value:"6. Get Load Balancer IP",id:"6-get-load-balancer-ip",level:2},{value:"7. Set up DNS",id:"7-set-up-dns",level:2},{value:"8. Install the Rancher Helm Chart",id:"8-install-the-rancher-helm-chart",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks"})),(0,a.kt)("p",null,"This page covers how to install Rancher on Microsoft's Azure Kubernetes Service (AKS)."),(0,a.kt)("p",null,"The guide uses command line tools to provision an AKS cluster with an ingress. If you prefer to provision your cluster using the Azure portal, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough-portal"},"official documentation"),"."),(0,a.kt)("p",null,"If you already have an AKS Kubernetes cluster, skip to the step about ",(0,a.kt)("a",{parentName:"p",href:"#5-install-an-ingress"},"installing an ingress.")," Then install the Rancher Helm chart following the instructions on ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#install-the-rancher-helm-chart"},"this page.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Deploying to Microsoft Azure will incur charges.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/free/"},"Microsoft Azure Account"),": A Microsoft Azure Account is required to create resources for deploying Rancher and Kubernetes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/create-subscription#create-a-subscription-in-the-azure-portal"},"Microsoft Azure Subscription"),": Use this link to follow a tutorial to create a Microsoft Azure subscription if you don't have one yet."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant"},"Micsoroft Azure Tenant"),": Use this link and follow instructions to create a Microsoft Azure tenant."),(0,a.kt)("li",{parentName:"ul"},"Your subscription has sufficient quota for at least 2 vCPUs. For details on Rancher server resource requirements, refer to ",(0,a.kt)("a",{parentName:"li",href:"/v2.6/pages-for-subheaders/installation-requirements#rke-and-hosted-kubernetes"},"this section")),(0,a.kt)("li",{parentName:"ul"},"When installing Rancher with Helm in Azure, use the L7 load balancer to avoid networking issues. For more information, refer to the documentation on ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/load-balancer/components#limitations"},"Azure load balancer limitations"),".")),(0,a.kt)("h2",{id:"1-prepare-your-workstation"},"1. Prepare your Workstation"),(0,a.kt)("p",null,"Install the following command line tools on your workstation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Azure CLI, ",(0,a.kt)("strong",{parentName:"li"},"az:")," For help, refer to these ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/cli/azure/"},"installation steps.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"kubectl:")," For help, refer to these ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"installation steps.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"helm:")," For help, refer to these ",(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"installation steps."))),(0,a.kt)("h2",{id:"2-create-a-resource-group"},"2. Create a Resource Group"),(0,a.kt)("p",null,"After installing the CLI, you will need to log in with your Azure account."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"az login\n")),(0,a.kt)("p",null,"Create a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal"},"resource group")," to hold all relevant resources for your cluster. Use a location that applies to your use case."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"az group create --name rancher-rg --location eastus\n")),(0,a.kt)("h2",{id:"3-create-the-aks-cluster"},"3. Create the AKS Cluster"),(0,a.kt)("p",null,"To create an AKS cluster, run the following command. Use a VM size that applies to your use case. Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/sizes"},"this article")," for available sizes and options. When choosing a Kubernetes version, be sure to first consult the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/support-matrix/"},"support matrix")," to find the highest version of Kubernetes that has been validated for your Rancher version."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you're updating from an older version of Kubernetes, to Kubernetes v1.22 or above, you also need to ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/k8s-122-migration/"},"update")," ingress-nginx.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"az aks create \\\n  --resource-group rancher-rg \\\n  --name rancher-server \\\n  --kubernetes-version <VERSION> \\\n  --node-count 3 \\\n  --node-vm-size Standard_D2_v3\n")),(0,a.kt)("p",null,"The cluster will take some time to be deployed."),(0,a.kt)("h2",{id:"4-get-access-credentials"},"4. Get Access Credentials"),(0,a.kt)("p",null,"After the cluster is deployed, get the access credentials."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"az aks get-credentials --resource-group rancher-rg --name rancher-server\n")),(0,a.kt)("p",null,"This command merges your cluster's credentials into the existing kubeconfig and allows ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," to interact with the cluster."),(0,a.kt)("h2",{id:"5-install-an-ingress"},"5. Install an Ingress"),(0,a.kt)("p",null,"The cluster needs an Ingress so that Rancher can be accessed from outside the cluster. Installing an Ingress requires allocating a public IP address. Ensure you have sufficient quota, otherwise it will fail to assign the IP address. Limits for public IP addresses are applicable at a regional level per subscription."),(0,a.kt)("p",null,"To make sure that you choose the correct Ingress-NGINX Helm chart, first find an ",(0,a.kt)("inlineCode",{parentName:"p"},"Ingress-NGINX version")," that's compatible with your Kubernetes version in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/ingress-nginx#supported-versions-table"},"Kubernetes/ingress-nginx support table"),". "),(0,a.kt)("p",null,"Then, list the Helm charts available to you by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\nhelm repo update\nhelm search repo ingress-nginx -l\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"helm search")," command's output contains an ",(0,a.kt)("inlineCode",{parentName:"p"},"APP VERSION")," column. The versions under this column are equivalent to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ingress-NGINX version")," you chose earlier. Using the app version, select a chart version that bundles an app compatible with your Kubernetes install. For example, if you have Kubernetes v1.23, you can select the v4.5.2 Helm chart, since Ingress-NGINX v1.6.4 comes bundled with that chart, and v1.6.4 is compatible with Kubernetes v1.23. When in doubt, select the most recent compatible version."),(0,a.kt)("p",null,"Now that you know which Helm chart ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," you need, run the following command. It installs an ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx-ingress-controller")," with a Kubernetes load balancer service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm upgrade --install \\\n  ingress-nginx ingress-nginx/ingress-nginx \\\n  --namespace ingress-nginx \\\n  --set controller.service.type=LoadBalancer \\\n  --version 4.5.2 \\\n  --create-namespace\n")),(0,a.kt)("h2",{id:"6-get-load-balancer-ip"},"6. Get Load Balancer IP"),(0,a.kt)("p",null,"To get the address of the load balancer, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get service ingress-nginx-controller --namespace=ingress-nginx\n")),(0,a.kt)("p",null,"The result should look similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                       TYPE           CLUSTER-IP     EXTERNAL-IP    PORT(S)\n AGE\ningress-nginx-controller   LoadBalancer   10.0.116.18    40.31.180.83   80:31229/TCP,443:31050/TCP\n 67s\n")),(0,a.kt)("p",null,"Save the ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP"),"."),(0,a.kt)("h2",{id:"7-set-up-dns"},"7. Set up DNS"),(0,a.kt)("p",null,"External traffic to the Rancher server will need to be directed at the load balancer you created."),(0,a.kt)("p",null,"Set up a DNS to point at the ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," that you saved. This DNS will be used as the Rancher server URL."),(0,a.kt)("p",null,"There are many valid ways to set up the DNS. For help, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/dns/"},"Azure DNS documentation")),(0,a.kt)("h2",{id:"8-install-the-rancher-helm-chart"},"8. Install the Rancher Helm Chart"),(0,a.kt)("p",null,"Next, install the Rancher Helm chart by following the instructions on ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#install-the-rancher-helm-chart"},"this page.")," The Helm instructions are the same for installing Rancher on any Kubernetes distribution."),(0,a.kt)("p",null,"Use that DNS name from the previous step as the Rancher server URL when you install Rancher. It can be passed in as a Helm option. For example, if the DNS name is ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher.my.org"),", you could run the Helm installation command with the option ",(0,a.kt)("inlineCode",{parentName:"p"},"--set hostname=rancher.my.org"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"New in v2.6.7"))),(0,a.kt)("p",null,"When installing Rancher on top of this setup, you will also need to pass the value below into the Rancher Helm install command in order to set the name of the ingress controller to be used with Rancher's ingress resource:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--set ingress.ingressClassName=nginx\n")),(0,a.kt)("p",null,"Refer ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#5-install-rancher-with-helm-and-your-chosen-certificate-option"},"here for the Helm install command")," for your chosen certificate option."))}p.isMDXComponent=!0}}]);