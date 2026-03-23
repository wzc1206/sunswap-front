"use strict";(globalThis.webpackChunkswap_front=globalThis.webpackChunkswap_front||[]).push([[9153],{59153(e,t,a){a.r(t),a.d(t,{W3mPayLoadingView:()=>we,W3mPayView:()=>le,arbitrumUSDC:()=>Ae,arbitrumUSDT:()=>Re,baseETH:()=>Pe,baseSepoliaETH:()=>Ee,baseUSDC:()=>Ie,ethereumUSDC:()=>Se,ethereumUSDT:()=>Ne,getExchanges:()=>ve,getIsPaymentInProgress:()=>xe,getPayError:()=>fe,getPayResult:()=>be,openPay:()=>ye,optimismUSDC:()=>Ce,optimismUSDT:()=>Te,pay:()=>me,polygonUSDC:()=>ze,polygonUSDT:()=>Me,solanaSOL:()=>Ue,solanaUSDC:()=>$e,solanaUSDT:()=>De});var i=a(12618),o=a(25707),r=a(60031),n=a(63450),s=a(6056),c=a(96396),l=a(26742),d=a(21871),u=a(31211),p=a(70148);a(58461),a(60310),a(51636),a(84293),a(64865),a(93516),a(26509),a(93373),a(52619),a(55618),a(45090),a(41684),Symbol();const h=Symbol(),g=Object.getPrototypeOf,w=new WeakMap,y=e=>"object"==typeof e&&null!==e,m=new WeakMap,v=new WeakSet,b=new WeakMap,f=[1,1],x=new WeakMap;let k=Object.is,P=(e,t,a,i)=>({deleteProperty(e,t){const o=Reflect.get(e,t);a(t);const r=Reflect.deleteProperty(e,t);return r&&i(["delete",[t],o]),r},set(o,r,n,s){const c=!e()&&Reflect.has(o,r),l=Reflect.get(o,r,s);if(c&&(k(l,n)||x.has(n)&&k(l,x.get(n))))return!0;var d;a(r),y(n)&&(n=(e=>e&&(w.has(e)?w.get(e):g(e)===Object.prototype||g(e)===Array.prototype))(d=n)&&d[h]||n);const u=m.has(n)||(!y(p=n)||v.has(p)||!Array.isArray(p)&&Symbol.iterator in p||p instanceof WeakMap||p instanceof WeakSet||p instanceof Error||p instanceof Number||p instanceof Date||p instanceof String||p instanceof RegExp||p instanceof ArrayBuffer||p instanceof Promise)?n:I(n);var p;return t(r,u),Reflect.set(o,r,u,s),i(["set",[r],n,l]),!0}});function I(e={}){if(!y(e))throw new Error("object required");const t=x.get(e);if(t)return t;let a=f[0];const i=new Set,o=(e,t=++f[0])=>{a!==t&&(a=t,i.forEach(a=>a(e,t)))};let r=f[1];const n=e=>(t,a)=>{const i=[...t];i[1]=[e,...i[1]],o(i,a)},s=new Map;let c=!0;const l=P(()=>c,(e,t)=>{const a=!v.has(t)&&m.get(t);if(a){if(s.has(e))throw new Error("prop listener already exists");if(i.size){const t=a[2](n(e));s.set(e,[a,t])}else s.set(e,[a])}},e=>{var t;const a=s.get(e);a&&(s.delete(e),null==(t=a[1])||t.call(a))},o),d=((e,t)=>new Proxy(e,t))(e,l);x.set(e,d);const u=[e,(e=++f[1])=>(r===e||i.size||(r=e,s.forEach(([t])=>{const i=t[1](e);i>a&&(a=i)})),a),e=>(i.add(e),1===i.size&&s.forEach(([e,t],a)=>{if(t)throw new Error("remove already exists");const i=e[2](n(a));s.set(a,[e,i])}),()=>{i.delete(e),0===i.size&&s.forEach(([e,t],a)=>{t&&(t(),s.set(a,[e]))})})];return m.set(d,u),Reflect.ownKeys(e).forEach(t=>{const a=Object.getOwnPropertyDescriptor(e,t);"value"in a&&a.writable&&(d[t]=e[t])}),c=!1,d}function E(e,t,a){const i=m.get(e);let o;i||console.warn("Please use proxy object");const r=[],n=i[2];let s=!1;const c=n(e=>{r.push(e),a?t(r.splice(0)):o||(o=Promise.resolve().then(()=>{o=void 0,s&&t(r.splice(0))}))});return s=!0,()=>{s=!1,c()}}function S(){return{proxyStateMap:m,refSet:v,snapCache:b,versionHolder:f,proxyCache:x}}Symbol();const{proxyStateMap:C,snapCache:A}=S(),{proxyStateMap:z,snapCache:$}=S();var N=a(24376),T=a(75910),R=a(90184),M=a(78508),D=a(86807);const U="INVALID_PAYMENT_CONFIG",W="INVALID_RECIPIENT",O="INVALID_ASSET",j="INVALID_AMOUNT",q="UNKNOWN_ERROR",Z="UNABLE_TO_INITIATE_PAYMENT",_="INVALID_CHAIN_NAMESPACE",L="GENERIC_PAYMENT_ERROR",F="UNABLE_TO_GET_EXCHANGES",B="ASSET_NOT_SUPPORTED",H="UNABLE_TO_GET_PAY_URL",V="UNABLE_TO_GET_BUY_STATUS",Y={[U]:"Invalid payment configuration",[W]:"Invalid recipient address",[O]:"Invalid asset specified",[j]:"Invalid payment amount",[q]:"Unknown payment error occurred",[Z]:"Unable to initiate payment",[_]:"Invalid chain namespace",[L]:"Unable to process payment",[F]:"Unable to get exchanges",[B]:"Asset not supported by the selected exchange",[H]:"Unable to get payment URL",[V]:"Unable to get buy status"};class K extends Error{get message(){return Y[this.code]}constructor(e,t){super(Y[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,K)}}var G=a(42733);class J extends Error{}async function X(e,t){const a=`https://rpc.walletconnect.org/v1/json-rpc?projectId=${G.H.getSnapshot().projectId}`,{sdkType:i,sdkVersion:o,projectId:r}=G.H.getSnapshot(),n={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:i,sv:o,projectId:r}},s=await fetch(a,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}),c=await s.json();if(c.error)throw new J(c.error.message);return c}async function Q(e){return(await X("reown_getExchanges",e)).result}const ee=["eip155","solana"],te={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function ae(e,t){const{chainNamespace:a,chainId:i}=T.C.parseCaipNetworkId(e),o=te[a];if(!o)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${a}`);let r=o.native.assetNamespace,n=o.native.assetReference;return"native"!==t&&(r=o.defaultTokenNamespace,n=t),`${a}:${i}/${r}:${n}`}var ie=a(36210);const oe="unknown",re=I({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0}),ne={state:re,subscribe:e=>E(re,()=>e(re)),subscribeKey:(e,t)=>function(e,t,a){let i=e[t];return E(e,()=>{const o=e[t];Object.is(i,o)||a(i=o)},void 0)}(re,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.subscribeEvents(),this.initializeAnalytics(),re.isConfigured=!0,R.E.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:re.exchanges,configuration:{network:re.paymentAsset.network,asset:re.paymentAsset.asset,recipient:re.recipient,amount:re.amount}}}),await c.W.open({view:"Pay"})},resetState(){re.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},re.recipient="0x0",re.amount=0,re.isConfigured=!1,re.error=null,re.isPaymentInProgress=!1,re.isLoading=!1,re.currentPayment=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new K(U);try{re.paymentAsset=e.paymentAsset,re.recipient=e.recipient,re.amount=e.amount,re.openInNewTab=e.openInNewTab??!0,re.redirectUrl=e.redirectUrl,re.payWithExchange=e.payWithExchange,re.error=null}catch(e){throw new K(U,e.message)}},getPaymentAsset:()=>re.paymentAsset,getExchanges:()=>re.exchanges,async fetchExchanges(){try{re.isLoading=!0;const e=await Q({page:0,asset:ae(re.paymentAsset.network,re.paymentAsset.asset),amount:re.amount.toString()});re.exchanges=e.exchanges.slice(0,2)}catch(e){throw d.P.showError(Y.UNABLE_TO_GET_EXCHANGES),new K(F)}finally{re.isLoading=!1}},async getAvailableExchanges(e){try{const t=e?.asset&&e?.network?ae(e.network,e.asset):void 0;return await Q({page:e?.page??0,asset:t,amount:e?.amount?.toString()})}catch(e){throw new K(F)}},async getPayUrl(e,t,a=!1){try{const i=Number(t.amount),o=await async function(e){return(await X("reown_getExchangePayUrl",e)).result}({exchangeId:e,asset:ae(t.network,t.asset),amount:i.toString(),recipient:`${t.network}:${t.recipient}`});return R.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:i},currentPayment:{type:"exchange",exchangeId:e},headless:a}}),a&&(this.initiatePayment(),R.E.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:re.paymentId||oe,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:i},currentPayment:{type:"exchange",exchangeId:e}}})),o}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw new K(B);throw new Error(e.message)}},async openPayUrl(e,t,a=!1){try{const i=await this.getPayUrl(e.exchangeId,t,a);if(!i)throw new K(H);const o=e.openInNewTab??1?"_blank":"_self";return l.w.openHref(i.url,o),i}catch(e){throw re.error=e instanceof K?e.message:Y.GENERIC_PAYMENT_ERROR,new K(H)}},subscribeEvents(){re.isConfigured||(u.x.subscribeKey("connections",e=>{e.size>0&&this.handlePayment()}),n.U.subscribeKey("caipAddress",e=>{const t=u.x.hasAnyConnection(N.o.CONNECTOR_ID.WALLET_CONNECT);e&&(t?setTimeout(()=>{this.handlePayment()},100):this.handlePayment())}))},async handlePayment(){re.currentPayment={type:"wallet",status:"IN_PROGRESS"};const e=n.U.state.caipAddress;if(!e)return;const{chainId:t,address:a}=T.C.parseCaipAddress(e),i=s.W.state.activeChain;if(!a||!t||!i)return;if(!D.A.getProvider(i))return;const o=s.W.state.activeCaipNetwork;if(o&&!re.isPaymentInProgress)try{this.initiatePayment();const e=s.W.getAllRequestedCaipNetworks(),t=s.W.getAllApprovedCaipNetworkIds();switch(await async function(e){const{paymentAssetNetwork:t,activeCaipNetwork:a,approvedCaipNetworkIds:i,requestedCaipNetworks:o}=e,r=l.w.sortRequestedNetworks(i,o).find(e=>e.caipNetworkId===t);if(!r)throw new K(U);if(r.caipNetworkId===a.caipNetworkId)return;const n=s.W.getNetworkProp("supportsAllNetworks",r.chainNamespace);if(!i?.includes(r.caipNetworkId)&&!n)throw new K(U);try{await s.W.switchActiveNetwork(r)}catch(e){throw new K(L,e)}}({paymentAssetNetwork:re.paymentAsset.network,activeCaipNetwork:o,approvedCaipNetworkIds:t,requestedCaipNetworks:e}),await c.W.open({view:"PayLoading"}),i){case N.o.CHAIN.EVM:"native"===re.paymentAsset.asset&&(re.currentPayment.result=await async function(e,t,a){if(t!==N.o.CHAIN.EVM)throw new K(_);if(!a.fromAddress)throw new K(U,"fromAddress is required for native EVM payments.");const i="string"==typeof a.amount?parseFloat(a.amount):a.amount;if(isNaN(i))throw new K(U);const o=e.metadata?.decimals??18,r=u.x.parseUnits(i.toString(),o);if("bigint"!=typeof r)throw new K(L);return await u.x.sendTransaction({chainNamespace:t,to:a.recipient,address:a.fromAddress,value:r,data:"0x"})??void 0}(re.paymentAsset,i,{recipient:re.recipient,amount:re.amount,fromAddress:a})),re.paymentAsset.asset.startsWith("0x")&&(re.currentPayment.result=await async function(e,t){if(!t.fromAddress)throw new K(U,"fromAddress is required for ERC20 EVM payments.");const a=e.asset,i=t.recipient,o=Number(e.metadata.decimals),r=u.x.parseUnits(t.amount.toString(),o);if(void 0===r)throw new K(L);return await u.x.writeContract({fromAddress:t.fromAddress,tokenAddress:a,args:[i,r],method:"transfer",abi:ie.v.getERC20Abi(a),chainNamespace:N.o.CHAIN.EVM})??void 0}(re.paymentAsset,{recipient:re.recipient,amount:re.amount,fromAddress:a})),re.currentPayment.status="SUCCESS";break;case N.o.CHAIN.SOLANA:re.currentPayment.result=await async function(e,t){if(e!==N.o.CHAIN.SOLANA)throw new K(_);if(!t.fromAddress)throw new K(U,"fromAddress is required for Solana payments.");const a="string"==typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(a)||a<=0)throw new K(U,"Invalid payment amount.");try{if(!D.A.getProvider(e))throw new K(L,"No Solana provider available.");const i=await u.x.sendTransaction({chainNamespace:N.o.CHAIN.SOLANA,to:t.recipient,value:a,tokenMint:t.tokenMint});if(!i)throw new K(L,"Transaction failed.");return i}catch(e){if(e instanceof K)throw e;throw new K(L,`Solana payment failed: ${e}`)}}(i,{recipient:re.recipient,amount:re.amount,fromAddress:a,tokenMint:"native"===re.paymentAsset.asset?void 0:re.paymentAsset.asset}),re.currentPayment.status="SUCCESS";break;default:throw new K(_)}}catch(e){re.error=e instanceof K?e.message:Y.GENERIC_PAYMENT_ERROR,re.currentPayment.status="FAILED",d.P.showError(re.error)}finally{re.isPaymentInProgress=!1}},getExchangeById:e=>re.exchanges.find(t=>t.id===e),validatePayConfig(e){const{paymentAsset:t,recipient:a,amount:i}=e;if(!t)throw new K(U);if(!a)throw new K(W);if(!t.asset)throw new K(O);if(null==i||i<=0)throw new K(j)},handlePayWithWallet(){const e=n.U.state.caipAddress;if(!e)return void M.I.push("Connect");const{chainId:t,address:a}=T.C.parseCaipAddress(e),i=s.W.state.activeChain;a&&t&&i?this.handlePayment():M.I.push("Connect")},async handlePayWithExchange(e){try{re.currentPayment={type:"exchange",exchangeId:e};const{network:t,asset:a}=re.paymentAsset,i={network:t,asset:a,amount:re.amount,recipient:re.recipient},o=await this.getPayUrl(e,i);if(!o)throw new K(Z);return re.currentPayment.sessionId=o.sessionId,re.currentPayment.status="IN_PROGRESS",re.currentPayment.exchangeId=e,this.initiatePayment(),{url:o.url,openInNewTab:re.openInNewTab}}catch(e){return re.error=e instanceof K?e.message:Y.GENERIC_PAYMENT_ERROR,re.isPaymentInProgress=!1,d.P.showError(re.error),null}},async getBuyStatus(e,t){try{const a=await async function(e){return(await X("reown_getExchangeBuyStatus",e)).result}({sessionId:t,exchangeId:e});return"SUCCESS"!==a.status&&"FAILED"!==a.status||R.E.sendEvent({type:"track",event:"SUCCESS"===a.status?"PAY_SUCCESS":"PAY_ERROR",properties:{source:"pay",paymentId:re.paymentId||oe,configuration:{network:re.paymentAsset.network,asset:re.paymentAsset.asset,recipient:re.recipient,amount:re.amount},currentPayment:{type:"exchange",exchangeId:re.currentPayment?.exchangeId,sessionId:re.currentPayment?.sessionId,result:a.txHash}}}),a}catch(e){throw new K(V)}},async updateBuyStatus(e,t){try{const a=await this.getBuyStatus(e,t);re.currentPayment&&(re.currentPayment.status=a.status,re.currentPayment.result=a.txHash),"SUCCESS"!==a.status&&"FAILED"!==a.status||(re.isPaymentInProgress=!1)}catch(e){throw new K(V)}},initiatePayment(){re.isPaymentInProgress=!0,re.paymentId=crypto.randomUUID()},initializeAnalytics(){re.analyticsSet||(re.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",e=>{if(re.currentPayment?.status&&"UNKNOWN"!==re.currentPayment.status){const e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[re.currentPayment.status];R.E.sendEvent({type:"track",event:e,properties:{source:"pay",paymentId:re.paymentId||oe,configuration:{network:re.paymentAsset.network,asset:re.paymentAsset.asset,recipient:re.recipient,amount:re.amount},currentPayment:{type:re.currentPayment.type,exchangeId:re.currentPayment.exchangeId,sessionId:re.currentPayment.sessionId,result:re.currentPayment.result}}})}}))}},se=i.AH`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  .token-display {
    padding: var(--wui-spacing-s) var(--wui-spacing-m);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-bg-125);
    margin-top: var(--wui-spacing-s);
    margin-bottom: var(--wui-spacing-s);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--wui-spacing-xs);
  }
`;var ce=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let le=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.amount="",this.tokenSymbol="",this.networkName="",this.exchanges=ne.state.exchanges,this.isLoading=ne.state.isLoading,this.loadingExchangeId=null,this.connectedWalletInfo=n.U.state.connectedWalletInfo,this.initializePaymentDetails(),this.unsubscribe.push(ne.subscribeKey("exchanges",e=>this.exchanges=e)),this.unsubscribe.push(ne.subscribeKey("isLoading",e=>this.isLoading=e)),this.unsubscribe.push(n.U.subscribe(e=>this.connectedWalletInfo=e.connectedWalletInfo)),ne.fetchExchanges()}get isWalletConnected(){return"connected"===n.U.state.status}render(){return i.qy`
      <wui-flex flexDirection="column">
        <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
          ${this.renderPaymentHeader()}

          <wui-flex flexDirection="column" gap="s">
            ${this.renderPayWithWallet()} ${this.renderExchangeOptions()}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}initializePaymentDetails(){const e=ne.getPaymentAsset();this.networkName=e.network,this.tokenSymbol=e.metadata.symbol,this.amount=ne.state.amount.toString()}renderPayWithWallet(){return function(e){const{chainNamespace:t}=T.C.parseCaipNetworkId(e);return ee.includes(t)}(this.networkName)?i.qy`<wui-flex flexDirection="column" gap="s">
        ${this.isWalletConnected?this.renderConnectedView():this.renderDisconnectedView()}
      </wui-flex>
      <wui-separator text="or"></wui-separator>`:i.qy``}renderPaymentHeader(){let e=this.networkName;if(this.networkName){const t=s.W.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.networkName);t&&(e=t.name)}return i.qy`
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="large-700" color="fg-100">${this.amount||"0.0000"}</wui-text>
          <wui-flex class="token-display" alignItems="center" gap="xxs">
            <wui-text variant="paragraph-600" color="fg-100">
              ${this.tokenSymbol||"Unknown Asset"}
            </wui-text>
            ${e?i.qy`
                  <wui-text variant="small-500" color="fg-200"> on ${e} </wui-text>
                `:""}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderConnectedView(){const e=this.connectedWalletInfo?.name||"connected wallet";return i.qy`
      <wui-list-item
        @click=${this.onWalletPayment}
        ?chevron=${!0}
        data-testid="wallet-payment-option"
      >
        <wui-flex alignItems="center" gap="s">
          <wui-wallet-image
            size="sm"
            imageSrc=${(0,r.J)(this.connectedWalletInfo?.icon)}
            name=${(0,r.J)(this.connectedWalletInfo?.name)}
          ></wui-wallet-image>
          <wui-text variant="paragraph-500" color="inherit">Pay with ${e}</wui-text>
        </wui-flex>
      </wui-list-item>

      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="disconnect"
        @click=${this.onDisconnect}
        data-testid="disconnect-button"
        ?chevron=${!1}
      >
        <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
      </wui-list-item>
    `}renderDisconnectedView(){return i.qy`<wui-list-item
      variant="icon"
      iconVariant="overlay"
      icon="walletPlaceholder"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="paragraph-500" color="inherit">Pay from wallet</wui-text>
    </wui-list-item>`}renderExchangeOptions(){return this.isLoading?i.qy`<wui-flex justifyContent="center" alignItems="center">
        <wui-spinner size="md"></wui-spinner>
      </wui-flex>`:0===this.exchanges.length?i.qy`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-100">No exchanges available</wui-text>
      </wui-flex>`:this.exchanges.map(e=>i.qy`
        <wui-list-item
          @click=${()=>this.onExchangePayment(e.id)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          ?disabled=${null!==this.loadingExchangeId}
        >
          <wui-flex alignItems="center" gap="s">
            ${this.loadingExchangeId===e.id?i.qy`<wui-loading-spinner color="accent-100" size="md"></wui-loading-spinner>`:i.qy`<wui-wallet-image
                  size="sm"
                  imageSrc=${(0,r.J)(e.imageUrl)}
                  name=${e.name}
                ></wui-wallet-image>`}
            <wui-text flexGrow="1" variant="paragraph-500" color="inherit"
              >Pay with ${e.name} <wui-spinner size="sm" color="fg-200"></wui-spinner
            ></wui-text>
          </wui-flex>
        </wui-list-item>
      `)}onWalletPayment(){ne.handlePayWithWallet()}async onExchangePayment(e){try{this.loadingExchangeId=e;const t=await ne.handlePayWithExchange(e);t&&(await c.W.open({view:"PayLoading"}),l.w.openHref(t.url,t.openInNewTab?"_blank":"_self"))}catch(e){console.error("Failed to pay with exchange",e),d.P.showError("Failed to pay with exchange")}finally{this.loadingExchangeId=null}}async onDisconnect(e){e.stopPropagation();try{await u.x.disconnect()}catch{console.error("Failed to disconnect"),d.P.showError("Failed to disconnect")}}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}};le.styles=se,ce([(0,o.wk)()],le.prototype,"amount",void 0),ce([(0,o.wk)()],le.prototype,"tokenSymbol",void 0),ce([(0,o.wk)()],le.prototype,"networkName",void 0),ce([(0,o.wk)()],le.prototype,"exchanges",void 0),ce([(0,o.wk)()],le.prototype,"isLoading",void 0),ce([(0,o.wk)()],le.prototype,"loadingExchangeId",void 0),ce([(0,o.wk)()],le.prototype,"connectedWalletInfo",void 0),le=ce([(0,p.EM)("w3m-pay-view")],le);var de=a(68996),ue=a(36010),pe=a(27601);a(92983);const he=i.AH`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }
`;var ge=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let we=class extends i.WF{constructor(){super(),this.loadingMessage="",this.subMessage="",this.paymentState="in-progress",this.paymentState=ne.state.isPaymentInProgress?"in-progress":"completed",this.updateMessages(),this.setupSubscription(),this.setupExchangeSubscription()}disconnectedCallback(){clearInterval(this.exchangeSubscription)}render(){return i.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center"> ${this.getStateIcon()} </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            ${this.loadingMessage}
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            ${this.subMessage}
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}updateMessages(){switch(this.paymentState){case"completed":this.loadingMessage="Payment completed",this.subMessage="Your transaction has been successfully processed";break;case"error":this.loadingMessage="Payment failed",this.subMessage="There was an error processing your transaction";break;default:"exchange"===ne.state.currentPayment?.type?(this.loadingMessage="Payment initiated",this.subMessage="Please complete the payment on the exchange"):(this.loadingMessage="Awaiting payment confirmation",this.subMessage="Please confirm the payment transaction in your wallet")}}getStateIcon(){switch(this.paymentState){case"completed":return this.successTemplate();case"error":return this.errorTemplate();default:return this.loaderTemplate()}}setupExchangeSubscription(){"exchange"===ne.state.currentPayment?.type&&(this.exchangeSubscription=setInterval(async()=>{const e=ne.state.currentPayment?.exchangeId,t=ne.state.currentPayment?.sessionId;e&&t&&(await ne.updateBuyStatus(e,t),"SUCCESS"===ne.state.currentPayment?.status&&clearInterval(this.exchangeSubscription))},4e3))}setupSubscription(){ne.subscribeKey("isPaymentInProgress",e=>{e||"in-progress"!==this.paymentState||(ne.state.error||!ne.state.currentPayment?.result?this.paymentState="error":this.paymentState="completed",this.updateMessages(),setTimeout(()=>{"disconnected"!==u.x.state.status&&c.W.close()},3e3))}),ne.subscribeKey("error",e=>{e&&"in-progress"===this.paymentState&&(this.paymentState="error",this.updateMessages())})}loaderTemplate(){const e=de.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4,a=this.getPaymentIcon();return i.qy`
      <wui-flex justifyContent="center" alignItems="center" style="position: relative;">
        ${a?i.qy`<wui-wallet-image size="lg" imageSrc=${a}></wui-wallet-image>`:null}
        <wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>
      </wui-flex>
    `}getPaymentIcon(){const e=ne.state.currentPayment;if(e){if("exchange"===e.type){const t=e.exchangeId;if(t){const e=ne.getExchangeById(t);return e?.imageUrl}}if("wallet"===e.type){const e=n.U.state.connectedWalletInfo?.icon;if(e)return e;const t=s.W.state.activeChain;if(!t)return;const a=ue.a.getConnectorId(t);if(!a)return;const i=ue.a.getConnectorById(a);if(!i)return;return pe.$.getConnectorImage(i)}}}successTemplate(){return i.qy`<wui-icon size="xl" color="success-100" name="checkmark"></wui-icon>`}errorTemplate(){return i.qy`<wui-icon size="xl" color="error-100" name="close"></wui-icon>`}};async function ye(e){return ne.handleOpenPay(e)}async function me(e,t=3e5){if(t<=0)throw new K(U,"Timeout must be greater than 0");try{await ye(e)}catch(e){if(e instanceof K)throw e;throw new K(Z,e.message)}return new Promise((e,a)=>{let i=!1;const o=setTimeout(()=>{i||(i=!0,l(),a(new K(L,"Payment timeout")))},t);function r(){if(i)return;const t=ne.state.currentPayment,a=ne.state.error,r=ne.state.isPaymentInProgress;return"SUCCESS"===t?.status?(i=!0,l(),clearTimeout(o),void e({success:!0,result:t.result})):"FAILED"===t?.status?(i=!0,l(),clearTimeout(o),void e({success:!1,error:a||"Payment failed"})):void(!a||r||t||(i=!0,l(),clearTimeout(o),e({success:!1,error:a})))}const n=ke("currentPayment",r),s=ke("error",r),c=ke("isPaymentInProgress",r),l=(d=[n,s,c],()=>{d.forEach(e=>{try{e()}catch{}})});var d;r()})}function ve(){return ne.getExchanges()}function be(){return ne.state.currentPayment?.result}function fe(){return ne.state.error}function xe(){return ne.state.isPaymentInProgress}function ke(e,t){return ne.subscribeKey(e,t)}we.styles=he,ge([(0,o.wk)()],we.prototype,"loadingMessage",void 0),ge([(0,o.wk)()],we.prototype,"subMessage",void 0),ge([(0,o.wk)()],we.prototype,"paymentState",void 0),we=ge([(0,p.EM)("w3m-pay-loading-view")],we);const Pe={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},Ie={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Ee={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},Se={network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Ce={network:"eip155:10",asset:"0x0b2c639c533813f4aa9d7837caf62653d097ff85",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Ae={network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ze={network:"eip155:137",asset:"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},$e={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Ne={network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Te={network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Re={network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Me={network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},De={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Ue={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}},58461(e,t,a){a(19384)},84293(e,t,a){var i=a(12618),o=a(25707),r=(a(2132),a(26109)),n=a(43494);const s=i.AH`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return i.qy`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};l.styles=[r.W5,r.fD,s],c([(0,o.MZ)()],l.prototype,"text",void 0),c([(0,o.MZ)()],l.prototype,"icon",void 0),l=c([(0,n.E)("wui-icon-button")],l)},64865(e,t,a){a(7068)},51636(e,t,a){a(2132)},93516(e,t,a){a(36887)},26509(e,t,a){var i=a(12618),o=a(25707),r=a(60031),n=(a(2132),a(36887),a(20880),a(18409),a(69807),a(26109)),s=a(43494);a(12851);const c=i.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var l=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let d=class extends i.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return i.qy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${(0,r.J)(this.iconVariant)}
        tabindex=${(0,r.J)(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return i.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return i.qy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",a=this.iconSize?this.iconSize:t;return i.qy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${a}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?i.qy`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:i.qy``}chevronTemplate(){return this.chevron?i.qy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};d.styles=[n.W5,n.fD,c],l([(0,o.MZ)()],d.prototype,"icon",void 0),l([(0,o.MZ)()],d.prototype,"iconSize",void 0),l([(0,o.MZ)()],d.prototype,"tabIdx",void 0),l([(0,o.MZ)()],d.prototype,"variant",void 0),l([(0,o.MZ)()],d.prototype,"iconVariant",void 0),l([(0,o.MZ)({type:Boolean})],d.prototype,"disabled",void 0),l([(0,o.MZ)()],d.prototype,"imageSrc",void 0),l([(0,o.MZ)()],d.prototype,"alt",void 0),l([(0,o.MZ)({type:Boolean})],d.prototype,"chevron",void 0),l([(0,o.MZ)({type:Boolean})],d.prototype,"loading",void 0),d=l([(0,s.E)("wui-list-item")],d)},93373(e,t,a){a(20880)},92983(e,t,a){var i=a(12618),o=a(25707),r=a(26109),n=a(43494);const s=i.AH`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e,a=116+t,o=245+t,r=360+1.75*t;return i.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${a} ${o}"
          stroke-dashoffset=${r}
        />
      </svg>
    `}};l.styles=[r.W5,s],c([(0,o.MZ)({type:Number})],l.prototype,"radius",void 0),l=c([(0,n.E)("wui-loading-thumbnail")],l)},52619(e,t,a){a(25981)},55618(e,t,a){var i=a(12618),o=a(25707),r=(a(18409),a(26109)),n=a(43494);const s=i.AH`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`;var c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.text=""}render(){return i.qy`${this.template()}`}template(){return this.text?i.qy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};l.styles=[r.W5,s],c([(0,o.MZ)()],l.prototype,"text",void 0),l=c([(0,n.E)("wui-separator")],l)},41684(e,t,a){a(91383)},27512(e,t,a){a.d(t,{a:()=>i});const i=a(12618).JW`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`},36887(e,t,a){var i=a(12618),o=a(25707),r=a(26109),n=a(43494);const s=i.AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-object-fit='cover']) img {
    object-fit: cover;
    object-position: center center;
  }

  :host([data-object-fit='contain']) img {
    object-fit: contain;
    object-position: center center;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;var c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.objectFit="cover"}render(){return this.objectFit&&(this.dataset.objectFit=this.objectFit),this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,i.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[r.W5,r.ck,s],c([(0,o.MZ)()],l.prototype,"src",void 0),c([(0,o.MZ)()],l.prototype,"alt",void 0),c([(0,o.MZ)()],l.prototype,"size",void 0),c([(0,o.MZ)()],l.prototype,"objectFit",void 0),l=c([(0,n.E)("wui-image")],l)},20880(e,t,a){var i=a(12618),o=a(25707),r=a(26109),n=a(43494);const s=i.AH`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,i.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};l.styles=[r.W5,s],c([(0,o.MZ)()],l.prototype,"color",void 0),c([(0,o.MZ)()],l.prototype,"size",void 0),l=c([(0,n.E)("wui-loading-spinner")],l)},19384(e,t,a){var i=a(12618),o=a(25707),r=(a(20880),a(18409),a(26109)),n=a(43494);const s=i.AH`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-s) var(--wui-spacing-3xs) var(--wui-spacing-s);
    height: 24px;
  }

  button[data-size='xs'][data-icon-left='true'][data-icon-right='false'] {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-s) var(--wui-spacing-3xs) var(--wui-spacing-s);
  }

  button[data-size='xs'][data-icon-right='true'][data-icon-left='false'] {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-s) var(--wui-spacing-3xs) var(--wui-spacing-s);
  }

  button[data-size='sm'] {
    padding: 7.2px var(--wui-spacing-s) 7.2px var(--wui-spacing-s);
    height: 32px;
  }

  button[data-size='sm'][data-icon-left='true'][data-icon-right='false'] {
    padding: 7.2px var(--wui-spacing-s) 7.2px var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-right='true'][data-icon-left='false'] {
    padding: 7.2px var(--wui-spacing-s) 7.2px var(--wui-spacing-s);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};const l={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020",shade:"fg-100"},d={lg:"paragraph-600",md:"small-600",sm:"small-600",xs:"tiny-600"},u={lg:"md",md:"md",sm:"sm",xs:"sm"};let p=class extends i.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const e=this.textVariant??d[this.size];return i.qy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const e=u[this.size],t=this.disabled?l.disabled:l[this.variant];return i.qy`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return i.qy``}};p.styles=[r.W5,r.fD,s],c([(0,o.MZ)()],p.prototype,"size",void 0),c([(0,o.MZ)({type:Boolean})],p.prototype,"disabled",void 0),c([(0,o.MZ)({type:Boolean})],p.prototype,"fullWidth",void 0),c([(0,o.MZ)({type:Boolean})],p.prototype,"loading",void 0),c([(0,o.MZ)()],p.prototype,"variant",void 0),c([(0,o.MZ)({type:Boolean})],p.prototype,"hasIconLeft",void 0),c([(0,o.MZ)({type:Boolean})],p.prototype,"hasIconRight",void 0),c([(0,o.MZ)()],p.prototype,"borderRadius",void 0),c([(0,o.MZ)()],p.prototype,"textVariant",void 0),p=c([(0,n.E)("wui-button")],p)},12851(e,t,a){var i=a(12618),o=a(25707),r=(a(2132),a(26109)),n=a(43494);const s=i.AH`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t="lg"===this.size,a="xl"===this.size,o=t?"12%":"16%",r=t?"xxs":a?"s":"3xl",n="gray"===this.background,s="opaque"===this.background,c="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:n&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||n?"100%":o};\n       --local-border-radius: var(--wui-border-radius-${r});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,i.qy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};l.styles=[r.W5,r.fD,s],c([(0,o.MZ)()],l.prototype,"size",void 0),c([(0,o.MZ)()],l.prototype,"backgroundColor",void 0),c([(0,o.MZ)()],l.prototype,"iconColor",void 0),c([(0,o.MZ)()],l.prototype,"iconSize",void 0),c([(0,o.MZ)()],l.prototype,"background",void 0),c([(0,o.MZ)({type:Boolean})],l.prototype,"border",void 0),c([(0,o.MZ)()],l.prototype,"borderColor",void 0),c([(0,o.MZ)()],l.prototype,"icon",void 0),l=c([(0,n.E)("wui-icon-box")],l)},7068(e,t,a){var i=a(12618),o=a(25707),r=(a(2132),a(26109)),n=a(43494);const s=i.AH`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    :host(:not([size='sm'])) button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){this.dataset.size=this.size;let e="",t="";switch(this.size){case"lg":e="--wui-border-radius-xs",t="--wui-spacing-1xs";break;case"sm":e="--wui-border-radius-3xs",t="--wui-spacing-xxs";break;default:e="--wui-border-radius-xxs",t="--wui-spacing-2xs"}return this.style.cssText=`\n    --local-border-radius: var(${e});\n    --local-padding: var(${t});\n    `,i.qy`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};l.styles=[r.W5,r.fD,r.ck,s],c([(0,o.MZ)()],l.prototype,"size",void 0),c([(0,o.MZ)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,o.MZ)()],l.prototype,"icon",void 0),c([(0,o.MZ)()],l.prototype,"iconColor",void 0),l=c([(0,n.E)("wui-icon-link")],l)},25981(e,t,a){var i=a(12618),o=a(25707);const r=i.JW`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var n=a(27512);const s=i.JW`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;a(2132),a(36887);var c=a(26109),l=a(43494);const d=i.AH`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var u=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let p=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:s,md:n.a,lg:r},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--wui-spacing-3xl);\n      --local-height: var(--wui-spacing-3xl);\n      --local-icon-size: var(--wui-spacing-l);\n    "):this.style.cssText=`\n\n      --local-path: var(--wui-path-network-${this.size});\n      --local-width:  var(--wui-width-network-${this.size});\n      --local-height:  var(--wui-height-network-${this.size});\n      --local-icon-size:  var(--wui-icon-size-network-${this.size});\n    `,i.qy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:i.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};p.styles=[c.W5,d],u([(0,o.MZ)()],p.prototype,"size",void 0),u([(0,o.MZ)()],p.prototype,"name",void 0),u([(0,o.MZ)({type:Object})],p.prototype,"networkImagesBySize",void 0),u([(0,o.MZ)()],p.prototype,"imageSrc",void 0),u([(0,o.MZ)({type:Boolean})],p.prototype,"selected",void 0),u([(0,o.MZ)({type:Boolean})],p.prototype,"round",void 0),p=u([(0,l.E)("wui-network-image")],p)},91383(e,t,a){var i=a(12618),o=a(25707),r=(a(2132),a(36887),a(69807),a(26109)),n=a(43494);a(12851);const s=i.AH`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var c=function(e,t,a,i){var o,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(r<3?o(n):r>3?o(t,a,n):o(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),i.qy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?i.qy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:i.qy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};l.styles=[r.fD,r.W5,s],c([(0,o.MZ)()],l.prototype,"size",void 0),c([(0,o.MZ)()],l.prototype,"name",void 0),c([(0,o.MZ)()],l.prototype,"imageSrc",void 0),c([(0,o.MZ)()],l.prototype,"walletIcon",void 0),c([(0,o.MZ)({type:Boolean})],l.prototype,"installed",void 0),c([(0,o.MZ)()],l.prototype,"badgeSize",void 0),l=c([(0,n.E)("wui-wallet-image")],l)}}]);