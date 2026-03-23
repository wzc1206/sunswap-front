"use strict";(globalThis.webpackChunkswap_front=globalThis.webpackChunkswap_front||[]).push([[9631],{89631(t,e,o){o.r(e),o.d(e,{W3mDepositFromExchangeView:()=>j});var a=o(12618),r=o(25707),i=o(6056),n=o(83215),s=o(31896),c=o(74496),l=o(26742),u=o(75910),d=o(42733);const p={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};class g extends Error{}async function h(t,e){const o=`https://rpc.walletconnect.org/v1/json-rpc?projectId=${d.H.getSnapshot().projectId}&source=fund-wallet`,{sdkType:a,sdkVersion:r,projectId:i}=d.H.getSnapshot(),n={jsonrpc:"2.0",id:1,method:t,params:{...e||{},st:a,sv:r,projectId:i}},s=await fetch(o,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}),c=await s.json();if(c.error)throw new g(c.error.message);return c}function v(t,e){const{chainNamespace:o,chainId:a}=u.C.parseCaipNetworkId(t),r=p[o];if(!r)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${o}`);let i=r.native.assetNamespace,n=r.native.assetReference;return"native"!==e&&(i=r.defaultTokenNamespace,n=e),`${o}:${a}/${i}:${n}`}var w=o(63450),b=o(75595),y=o(90184),m=o(21871);const x={paymentAsset:{network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:0}},amount:0,tokenAmount:0,tokenPrice:null,priceLoading:!1,error:null,exchanges:[],isLoading:!1,currentPayment:void 0,isPaymentInProgress:!1,paymentId:""},f=(0,n.BX)(x),k={state:f,subscribe:t=>(0,n.B1)(f,()=>t(f)),subscribeKey:(t,e)=>(0,s.u$)(f,t,e),resetState(){Object.assign(f,{...x})},async fetchTokenPrice(){f.priceLoading=!0;const t=(0,c.K1)(),e=await b.T.fetchTokenPrice({addresses:[t]});f.tokenPrice=e.fungibles?.[0]?.price||null,f.priceLoading=!1},getTokenAmount(){if(!f.tokenPrice)throw new Error("Cannot get token price");const t=new Intl.NumberFormat("en-US",{minimumFractionDigits:0,maximumFractionDigits:4}).format(f.amount/f.tokenPrice);return Number(t)},setAmount(t){f.amount=t,f.tokenPrice&&(f.tokenAmount=this.getTokenAmount())},setPaymentAsset(t){f.paymentAsset=t},async fetchExchanges(){try{f.isLoading=!0;const t=await async function(t){return(await h("reown_getExchanges",t)).result}({page:0,asset:v(f.paymentAsset.network,f.paymentAsset.asset),amount:f.amount.toString()});f.exchanges=t.exchanges.slice(0,2)}catch(t){throw m.P.showError("Unable to get exchanges"),new Error("Unable to get exchanges")}finally{f.isLoading=!1}},async getPayUrl(t,e){try{const o=Number(e.amount),a=await async function(t){return(await h("reown_getExchangePayUrl",t)).result}({exchangeId:t,asset:v(e.network,e.asset),amount:o.toString(),recipient:`${e.network}:${e.recipient}`});return y.E.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:t},configuration:{network:e.network,asset:e.asset,recipient:e.recipient,amount:o},currentPayment:{type:"exchange",exchangeId:t},source:"fund-from-exchange",headless:!1}}),a}catch(t){if(t instanceof Error&&t.message.includes("is not supported"))throw new Error("Asset not supported");throw new Error(t.message)}},async handlePayWithExchange(t){try{if(!w.U.state.address)throw new Error("No account connected");f.isPaymentInProgress=!0,f.paymentId=crypto.randomUUID(),f.currentPayment={type:"exchange",exchangeId:t};const{network:e,asset:o}=f.paymentAsset,a={network:e,asset:o,amount:f.tokenAmount,recipient:w.U.state.address},r=await this.getPayUrl(t,a);if(!r)throw new Error("Unable to initiate payment");f.currentPayment.sessionId=r.sessionId,f.currentPayment.status="IN_PROGRESS",f.currentPayment.exchangeId=t,l.w.openHref(r.url,"_blank","popup=yes,width=480,height=720,noopener,noreferrer")}catch(t){f.error="Unable to initiate payment",m.P.showError(f.error)}},async waitUntilComplete({exchangeId:t,sessionId:e,paymentId:o,retries:a=20}){const r=await this.getBuyStatus(t,e,o);if("SUCCESS"===r.status||"FAILED"===r.status)return r;if(0===a)throw new Error("Unable to get deposit status");return await new Promise(t=>{setTimeout(t,5e3)}),this.waitUntilComplete({exchangeId:t,sessionId:e,paymentId:o,retries:a-1})},async getBuyStatus(t,e,o){try{if(!f.currentPayment)throw new Error("No current payment");const a=await async function(t){return(await h("reown_getExchangeBuyStatus",t)).result}({sessionId:e,exchangeId:t});return f.currentPayment.status=a.status,"SUCCESS"!==a.status&&"FAILED"!==a.status||(f.currentPayment.result=a.txHash,f.isPaymentInProgress=!1,y.E.sendEvent({type:"track",event:"SUCCESS"===a.status?"PAY_SUCCESS":"PAY_ERROR",properties:{source:"fund-from-exchange",paymentId:o,configuration:{network:f.paymentAsset.network,asset:f.paymentAsset.asset,recipient:w.U.state.address||"",amount:f.amount},currentPayment:{type:"exchange",exchangeId:f.currentPayment?.exchangeId,sessionId:f.currentPayment?.sessionId,result:a.txHash}}})),a}catch(t){return{status:"UNKNOWN",txHash:""}}},reset(){f.currentPayment=void 0,f.isPaymentInProgress=!1,f.paymentId="",f.paymentAsset={network:"eip155:1",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:0}},f.amount=0,f.tokenAmount=0,f.tokenPrice=null,f.priceLoading=!1,f.error=null,f.exchanges=[],f.isLoading=!1}};var P=o(27601),$=o(78508),I=o(70148);o(58461),o(60310),o(64865),o(93516),o(26509),o(35090),o(45090);const z=a.AH`
  .amount-input-container {
    border-radius: var(--wui-border-radius-m);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-bg-100);
  }

  .container {
    background-color: var(--wui-color-bg-125);
  }
`;var E=function(t,e,o,a){var r,i=arguments.length,n=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(i<3?r(n):i>3?r(e,o,n):r(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n};const C=[10,50,100];let j=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.network=i.W.state.activeCaipNetwork,this.exchanges=k.state.exchanges,this.isLoading=k.state.isLoading,this.amount=k.state.amount,this.tokenAmount=k.state.tokenAmount,this.priceLoading=k.state.priceLoading,this.isPaymentInProgress=k.state.isPaymentInProgress,this.currentPayment=k.state.currentPayment,this.paymentId=k.state.paymentId,this.unsubscribe.push(k.subscribe(t=>{this.exchanges=t.exchanges,this.isLoading=t.isLoading,this.amount=t.amount,this.tokenAmount=t.tokenAmount,this.priceLoading=t.priceLoading,this.paymentId=t.paymentId,this.isPaymentInProgress=t.isPaymentInProgress,this.currentPayment=t.currentPayment,t.isPaymentInProgress&&t.currentPayment?.exchangeId&&t.currentPayment?.sessionId&&t.paymentId&&this.handlePaymentInProgress()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),k.reset()}firstUpdated(){k.fetchExchanges(),k.fetchTokenPrice()}render(){return a.qy`
      <wui-flex flexDirection="column" gap="xs" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesTemplate(){return a.qy`
      <wui-flex
        flexDirection="column"
        gap="xs"
        .padding=${["xs","s","s","s"]}
        class="exchanges-container"
      >
        ${this.exchanges.map(t=>a.qy`<wui-list-item
              @click=${()=>this.onExchangeClick(t)}
              chevron
              variant="image"
              imageSrc=${t.imageUrl}
              ?loading=${this.isLoading}
              ?disabled=${!this.amount}
            >
              <wui-text variant="paragraph-500" color="fg-200">
                Deposit from ${t.name}
              </wui-text>
            </wui-list-item>`)}
      </wui-flex>
    `}amountInputTemplate(){return a.qy`
      <wui-flex flexDirection="column" gap="s" .padding=${["0","s","s","s"]} class="amount-input-container">
        <wui-flex justifyContent="space-between">
          <wui-text variant="paragraph-500" color="fg-200">Asset</wui-text>
          <wui-chip-button
            data-testid="deposit-from-exchange-asset-button"
            text=${this.network?.nativeCurrency.symbol||""}
            imageSrc=${P.$.getNetworkImage(this.network)}
            size="sm"
            variant="gray"
            icon=${null}
          ></wui-chip-button>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" justifyContent="center">
          <wui-flex alignItems="center" gap="4xs">
            <wui-text variant="2xl-500" color="fg-200">${this.amount}</wui-text>
            <wui-text variant="paragraph-500" color="fg-200">USD</wui-text>
          </wui-flex>
          ${this.tokenAmountTemplate()}
          </wui-flex>
          <wui-flex justifyContent="space-between" gap="xs">
            ${C.map(t=>a.qy`<wui-button @click=${()=>this.onPresetAmountClick(t)} variant=${this.amount===t?"accent":"shade"} size="sm" fullWidth>$${t}</wui-button>`)}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){return this.priceLoading?a.qy`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:a.qy`
      <wui-text variant="paragraph-500" color="fg-200">
        ${this.tokenAmount} ${this.network?.nativeCurrency.symbol}
      </wui-text>
    `}async onExchangeClick(t){this.amount&&await k.handlePayWithExchange(t.id)}handlePaymentInProgress(){this.isPaymentInProgress&&this.currentPayment?.exchangeId&&this.currentPayment?.sessionId&&this.paymentId&&(m.P.showLoading("Deposit in progress..."),$.I.replace("Account"),k.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then(t=>{"SUCCESS"===t.status?m.P.showSuccess("Deposit completed"):"FAILED"===t.status&&m.P.showError("Deposit failed")}))}onPresetAmountClick(t){k.setAmount(t)}};j.styles=z,E([(0,r.wk)()],j.prototype,"network",void 0),E([(0,r.wk)()],j.prototype,"exchanges",void 0),E([(0,r.wk)()],j.prototype,"isLoading",void 0),E([(0,r.wk)()],j.prototype,"amount",void 0),E([(0,r.wk)()],j.prototype,"tokenAmount",void 0),E([(0,r.wk)()],j.prototype,"priceLoading",void 0),E([(0,r.wk)()],j.prototype,"isPaymentInProgress",void 0),E([(0,r.wk)()],j.prototype,"currentPayment",void 0),E([(0,r.wk)()],j.prototype,"paymentId",void 0),j=E([(0,I.EM)("w3m-deposit-from-exchange-view")],j)},58461(t,e,o){o(19384)},64865(t,e,o){o(7068)},93516(t,e,o){o(36887)},26509(t,e,o){var a=o(12618),r=o(25707),i=o(60031),n=(o(2132),o(36887),o(20880),o(18409),o(69807),o(26109)),s=o(43494);o(12851);const c=a.AH`
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
`;var l=function(t,e,o,a){var r,i=arguments.length,n=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(i<3?r(n):i>3?r(e,o,n):r(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n};let u=class extends a.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return a.qy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${(0,i.J)(this.iconVariant)}
        tabindex=${(0,i.J)(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return a.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return a.qy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e="square-blue"===this.iconVariant?"mdl":"md",o=this.iconSize?this.iconSize:e;return a.qy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${o}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?a.qy`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:a.qy``}chevronTemplate(){return this.chevron?a.qy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};u.styles=[n.W5,n.fD,c],l([(0,r.MZ)()],u.prototype,"icon",void 0),l([(0,r.MZ)()],u.prototype,"iconSize",void 0),l([(0,r.MZ)()],u.prototype,"tabIdx",void 0),l([(0,r.MZ)()],u.prototype,"variant",void 0),l([(0,r.MZ)()],u.prototype,"iconVariant",void 0),l([(0,r.MZ)({type:Boolean})],u.prototype,"disabled",void 0),l([(0,r.MZ)()],u.prototype,"imageSrc",void 0),l([(0,r.MZ)()],u.prototype,"alt",void 0),l([(0,r.MZ)({type:Boolean})],u.prototype,"chevron",void 0),l([(0,r.MZ)({type:Boolean})],u.prototype,"loading",void 0),u=l([(0,s.E)("wui-list-item")],u)},35090(t,e,o){o(41497)},36887(t,e,o){var a=o(12618),r=o(25707),i=o(26109),n=o(43494);const s=a.AH`
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
`;var c=function(t,e,o,a){var r,i=arguments.length,n=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(i<3?r(n):i>3?r(e,o,n):r(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n};let l=class extends a.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.objectFit="cover"}render(){return this.objectFit&&(this.dataset.objectFit=this.objectFit),this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,a.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[i.W5,i.ck,s],c([(0,r.MZ)()],l.prototype,"src",void 0),c([(0,r.MZ)()],l.prototype,"alt",void 0),c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)()],l.prototype,"objectFit",void 0),l=c([(0,n.E)("wui-image")],l)},20880(t,e,o){var a=o(12618),r=o(25707),i=o(26109),n=o(43494);const s=a.AH`
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
`;var c=function(t,e,o,a){var r,i=arguments.length,n=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(i<3?r(n):i>3?r(e,o,n):r(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n};let l=class extends a.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,a.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};l.styles=[i.W5,s],c([(0,r.MZ)()],l.prototype,"color",void 0),c([(0,r.MZ)()],l.prototype,"size",void 0),l=c([(0,n.E)("wui-loading-spinner")],l)},41497(t,e,o){var a=o(12618),r=o(25707),i=o(43494);const n=a.AH`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var s=function(t,e,o,a){var r,i=arguments.length,n=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(i<3?r(n):i>3?r(e,o,n):r(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n};let c=class extends a.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,a.qy`<slot></slot>`}};c.styles=[n],s([(0,r.MZ)()],c.prototype,"width",void 0),s([(0,r.MZ)()],c.prototype,"height",void 0),s([(0,r.MZ)()],c.prototype,"borderRadius",void 0),s([(0,r.MZ)()],c.prototype,"variant",void 0),c=s([(0,i.E)("wui-shimmer")],c)},19384(t,e,o){var a=o(12618),r=o(25707),i=(o(20880),o(18409),o(26109)),n=o(43494);const s=a.AH`
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
`;var c=function(t,e,o,a){var r,i=arguments.length,n=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(i<3?r(n):i>3?r(e,o,n):r(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n};const l={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020",shade:"fg-100"},u={lg:"paragraph-600",md:"small-600",sm:"small-600",xs:"tiny-600"},d={lg:"md",md:"md",sm:"sm",xs:"sm"};let p=class extends a.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const t=this.textVariant??u[this.size];return a.qy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=d[this.size],e=this.disabled?l.disabled:l[this.variant];return a.qy`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return a.qy``}};p.styles=[i.W5,i.fD,s],c([(0,r.MZ)()],p.prototype,"size",void 0),c([(0,r.MZ)({type:Boolean})],p.prototype,"disabled",void 0),c([(0,r.MZ)({type:Boolean})],p.prototype,"fullWidth",void 0),c([(0,r.MZ)({type:Boolean})],p.prototype,"loading",void 0),c([(0,r.MZ)()],p.prototype,"variant",void 0),c([(0,r.MZ)({type:Boolean})],p.prototype,"hasIconLeft",void 0),c([(0,r.MZ)({type:Boolean})],p.prototype,"hasIconRight",void 0),c([(0,r.MZ)()],p.prototype,"borderRadius",void 0),c([(0,r.MZ)()],p.prototype,"textVariant",void 0),p=c([(0,n.E)("wui-button")],p)},12851(t,e,o){var a=o(12618),r=o(25707),i=(o(2132),o(26109)),n=o(43494);const s=a.AH`
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
`;var c=function(t,e,o,a){var r,i=arguments.length,n=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(i<3?r(n):i>3?r(e,o,n):r(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n};let l=class extends a.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e="lg"===this.size,o="xl"===this.size,r=e?"12%":"16%",i=e?"xxs":o?"s":"3xl",n="gray"===this.background,s="opaque"===this.background,c="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:n&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||n?"100%":r};\n       --local-border-radius: var(--wui-border-radius-${i});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,a.qy` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};l.styles=[i.W5,i.fD,s],c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)()],l.prototype,"backgroundColor",void 0),c([(0,r.MZ)()],l.prototype,"iconColor",void 0),c([(0,r.MZ)()],l.prototype,"iconSize",void 0),c([(0,r.MZ)()],l.prototype,"background",void 0),c([(0,r.MZ)({type:Boolean})],l.prototype,"border",void 0),c([(0,r.MZ)()],l.prototype,"borderColor",void 0),c([(0,r.MZ)()],l.prototype,"icon",void 0),l=c([(0,n.E)("wui-icon-box")],l)},7068(t,e,o){var a=o(12618),r=o(25707),i=(o(2132),o(26109)),n=o(43494);const s=a.AH`
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
`;var c=function(t,e,o,a){var r,i=arguments.length,n=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(i<3?r(n):i>3?r(e,o,n):r(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n};let l=class extends a.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){this.dataset.size=this.size;let t="",e="";switch(this.size){case"lg":t="--wui-border-radius-xs",e="--wui-spacing-1xs";break;case"sm":t="--wui-border-radius-3xs",e="--wui-spacing-xxs";break;default:t="--wui-border-radius-xxs",e="--wui-spacing-2xs"}return this.style.cssText=`\n    --local-border-radius: var(${t});\n    --local-padding: var(${e});\n    `,a.qy`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};l.styles=[i.W5,i.fD,i.ck,s],c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,r.MZ)()],l.prototype,"icon",void 0),c([(0,r.MZ)()],l.prototype,"iconColor",void 0),l=c([(0,n.E)("wui-icon-link")],l)}}]);