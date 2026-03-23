"use strict";(globalThis.webpackChunkswap_front=globalThis.webpackChunkswap_front||[]).push([[218],{60218(e,t,i){i.r(t),i.d(t,{W3mBuyInProgressView:()=>B,W3mFundWalletView:()=>H,W3mOnRampProvidersView:()=>j,W3mOnrampFiatSelectView:()=>w,W3mOnrampTokensView:()=>W,W3mOnrampWidget:()=>J,W3mWhatIsABuyView:()=>D});var r=i(12618),o=i(25707),s=i(60031),a=i(95884),n=i(73337),c=i(51454),l=i(42733),u=i(96396),p=i(70148);i(60310),i(26509),i(45090),i(98585),i(46524);const d=r.AH`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var h=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let w=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=a.aG.state.paymentCurrency,this.currencies=a.aG.state.paymentCurrencies,this.currencyImages=n.j.state.currencyImages,this.checked=c.o.state.isLegalCheckboxChecked,this.unsubscribe.push(a.aG.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),n.j.subscribeKey("currencyImages",e=>this.currencyImages=e),c.o.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=l.H.state,i=l.H.state.features?.legalCheckbox,o=Boolean(e||t)&&Boolean(i)&&!this.checked;return r.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${(0,s.J)(o?"disabled":void 0)}
      >
        ${this.currenciesTemplate(o)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.currencies.map(t=>r.qy`
        <wui-list-item
          imageSrc=${(0,s.J)(this.currencyImages?.[t.id])}
          @click=${()=>this.selectCurrency(t)}
          variant="image"
          tabIdx=${(0,s.J)(e?-1:void 0)}
        >
          <wui-text variant="paragraph-500" color="fg-100">${t.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(e){e&&(a.aG.setPaymentCurrency(e),u.W.close())}};w.styles=d,h([(0,o.wk)()],w.prototype,"selectedCurrency",void 0),h([(0,o.wk)()],w.prototype,"currencies",void 0),h([(0,o.wk)()],w.prototype,"currencyImages",void 0),h([(0,o.wk)()],w.prototype,"checked",void 0),w=h([(0,p.EM)("w3m-onramp-fiat-select-view")],w);var m=i(6056),y=i(78508),g=i(26742),f=i(90184),b=i(74496),v=i(10152),x=i(27601);i(51636),i(93516),i(93373),i(89285);const k=r.AH`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var C=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let $=class extends r.WF{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return r.qy`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${(0,s.J)(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?r.qy`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:r.qy`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){const e=m.W.getAllRequestedCaipNetworks(),t=e?.filter(e=>e?.assets?.imageId)?.slice(0,5);return r.qy`
      <wui-flex class="networks">
        ${t?.map(e=>r.qy`
            <wui-flex class="network-icon">
              <wui-image src=${(0,s.J)(x.$.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};$.styles=[k],C([(0,o.MZ)({type:Boolean})],$.prototype,"disabled",void 0),C([(0,o.MZ)()],$.prototype,"color",void 0),C([(0,o.MZ)()],$.prototype,"name",void 0),C([(0,o.MZ)()],$.prototype,"label",void 0),C([(0,o.MZ)()],$.prototype,"feeRange",void 0),C([(0,o.MZ)({type:Boolean})],$.prototype,"loading",void 0),C([(0,o.MZ)()],$.prototype,"onClick",void 0),$=C([(0,p.EM)("w3m-onramp-provider-item")],$),i(45101);const P=r.AH`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;let R=class extends r.WF{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=l.H.state;return e||t?r.qy`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return r.qy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){f.E.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,b.lj)(m.W.state.activeChain)===v.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),y.I.push("WhatIsABuy")}};R.styles=[P],R=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.EM)("w3m-onramp-providers-footer")],R);var I=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let j=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.providers=a.aG.state.providers,this.unsubscribe.push(a.aG.subscribeKey("providers",e=>{this.providers=e}))}render(){return r.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.filter(e=>e.supportedChains.includes(m.W.state.activeChain??"eip155")).map(e=>r.qy`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
            data-testid=${`onramp-provider-${e.name}`}
          ></w3m-onramp-provider-item>
        `)}onClickProvider(e){a.aG.setSelectedProvider(e),y.I.push("BuyInProgress"),g.w.openHref(a.aG.state.selectedProvider?.url||e.url,"popupWindow","width=600,height=800,scrollbars=yes"),f.E.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:(0,b.lj)(m.W.state.activeChain)===v.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}};I([(0,o.wk)()],j.prototype,"providers",void 0),j=I([(0,p.EM)("w3m-onramp-providers-view")],j);const O=r.AH`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var A=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let W=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=a.aG.state.purchaseCurrencies,this.tokens=a.aG.state.purchaseCurrencies,this.tokenImages=n.j.state.tokenImages,this.checked=c.o.state.isLegalCheckboxChecked,this.unsubscribe.push(a.aG.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),n.j.subscribeKey("tokenImages",e=>this.tokenImages=e),c.o.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=l.H.state,i=l.H.state.features?.legalCheckbox,o=Boolean(e||t)&&Boolean(i)&&!this.checked;return r.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${(0,s.J)(o?"disabled":void 0)}
      >
        ${this.currenciesTemplate(o)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.tokens.map(t=>r.qy`
        <wui-list-item
          imageSrc=${(0,s.J)(this.tokenImages?.[t.symbol])}
          @click=${()=>this.selectToken(t)}
          variant="image"
          tabIdx=${(0,s.J)(e?-1:void 0)}
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${t.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${t.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(e){e&&(a.aG.setPurchaseCurrency(e),u.W.close())}};W.styles=O,A([(0,o.wk)()],W.prototype,"selectedCurrency",void 0),A([(0,o.wk)()],W.prototype,"tokens",void 0),A([(0,o.wk)()],W.prototype,"tokenImages",void 0),A([(0,o.wk)()],W.prototype,"checked",void 0),W=A([(0,p.EM)("w3m-onramp-token-select-view")],W);var T=i(31211),E=i(68996),q=i(21871);i(58461),i(77616),i(92983);const F=r.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var M=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let B=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=a.aG.state.selectedProvider,this.uri=T.x.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(a.aG.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}))}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);const t=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return r.qy`
      <wui-flex
        data-error=${(0,s.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0,s.J)(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,g.w.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?r.qy`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=E.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return r.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url)return q.P.showError("No link found"),void y.I.goBack();try{g.w.copyToClopboard(this.selectedOnRampProvider.url),q.P.showSuccess("Link copied")}catch{q.P.showError("Failed to copy")}}};B.styles=F,M([(0,o.wk)()],B.prototype,"intervalId",void 0),M([(0,o.wk)()],B.prototype,"selectedOnRampProvider",void 0),M([(0,o.wk)()],B.prototype,"uri",void 0),M([(0,o.wk)()],B.prototype,"ready",void 0),M([(0,o.wk)()],B.prototype,"showRetry",void 0),M([(0,o.wk)()],B.prototype,"buffering",void 0),M([(0,o.wk)()],B.prototype,"error",void 0),M([(0,o.MZ)({type:Boolean})],B.prototype,"isMobile",void 0),M([(0,o.MZ)()],B.prototype,"onRetry",void 0),B=M([(0,p.EM)("w3m-buy-in-progress-view")],B);let D=class extends r.WF{render(){return r.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${y.I.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};D=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.EM)("w3m-what-is-a-buy-view")],D);var G=i(62944),z=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let H=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.namespace=m.W.state.activeChain,this.features=l.H.state.features,this.remoteFeatures=l.H.state.remoteFeatures,this.unsubscribe.push(l.H.subscribeKey("features",e=>this.features=e),l.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),m.W.subscribeKey("activeChain",e=>this.namespace=e),m.W.subscribeKey("activeCaipNetwork",e=>{e?.chainNamespace&&(this.namespace=e?.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return r.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","xl","s"]} gap="xs">
        ${this.onrampTemplate()} ${this.receiveTemplate()} ${this.depositFromExchangeTemplate()}
      </wui-flex>
    `}onrampTemplate(){if(!this.namespace)return null;const e=this.remoteFeatures?.onramp,t=G.oU.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);return e&&t?r.qy`
      <wui-list-description
        @click=${this.onBuyCrypto.bind(this)}
        text="Buy crypto"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        data-testid="wallet-features-onramp-button"
      ></wui-list-description>
    `:null}depositFromExchangeTemplate(){const e=this.remoteFeatures?.payWithExchange;return e?r.qy`
      <wui-list-description
        @click=${this.onDepositFromExchange.bind(this)}
        text="Deposit from exchange"
        icon="download"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="wallet-features-deposit-from-exchange-button"
      ></wui-list-description>
    `:null}receiveTemplate(){return Boolean(this.features?.receive)?r.qy`
      <wui-list-description
        @click=${this.onReceive.bind(this)}
        text="Receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="wallet-features-receive-button"
      ></wui-list-description>
    `:null}onBuyCrypto(){y.I.push("OnRampProviders")}onReceive(){y.I.push("WalletReceive")}onDepositFromExchange(){y.I.push("PayWithExchange")}};z([(0,o.wk)()],H.prototype,"namespace",void 0),z([(0,o.wk)()],H.prototype,"features",void 0),z([(0,o.wk)()],H.prototype,"remoteFeatures",void 0),H=z([(0,p.EM)("w3m-fund-wallet-view")],H),i(12965);const S=r.AH`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var U=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let L=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=n.j.state.currencyImages,this.tokenImages=n.j.state.tokenImages,this.unsubscribe.push(a.aG.subscribeKey("purchaseCurrency",e=>{e&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(e))}),a.aG.subscribeKey("paymentCurrency",e=>{e&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(e))}),a.aG.subscribe(e=>{"Fiat"===this.type?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)}),n.j.subscribe(e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}}))}firstUpdated(){a.aG.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.selectedCurrency?.symbol||"",t=this.currencyImages[e]||this.tokenImages[e];return r.qy`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?r.qy` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>u.W.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${(0,s.J)(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:r.qy`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};L.styles=S,U([(0,o.MZ)({type:String})],L.prototype,"type",void 0),U([(0,o.MZ)({type:Number})],L.prototype,"value",void 0),U([(0,o.wk)()],L.prototype,"currencies",void 0),U([(0,o.wk)()],L.prototype,"selectedCurrency",void 0),U([(0,o.wk)()],L.prototype,"currencyImages",void 0),U([(0,o.wk)()],L.prototype,"tokenImages",void 0),L=U([(0,p.EM)("w3m-onramp-input")],L);const Z=r.AH`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var N=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};const _={USD:"$",EUR:"€",GBP:"£"},K=[100,250,500,1e3];let J=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=m.W.state.activeCaipAddress,this.loading=u.W.state.loading,this.paymentCurrency=a.aG.state.paymentCurrency,this.paymentAmount=a.aG.state.paymentAmount,this.purchaseAmount=a.aG.state.purchaseAmount,this.quoteLoading=a.aG.state.quotesLoading,this.unsubscribe.push(m.W.subscribeKey("activeCaipAddress",e=>this.caipAddress=e),u.W.subscribeKey("loading",e=>{this.loading=e}),a.aG.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return r.qy`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${K.map(e=>r.qy`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${_[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?r.qy`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:r.qy`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||u.W.open({view:"OnRampProviders"})}openModal(){u.W.open({view:"Connect"})}async onPaymentAmountChange(e){a.aG.setPaymentAmount(Number(e.detail)),await a.aG.getQuote()}async selectPresetAmount(e){a.aG.setPaymentAmount(e),await a.aG.getQuote()}};J.styles=Z,N([(0,o.MZ)({type:Boolean})],J.prototype,"disabled",void 0),N([(0,o.wk)()],J.prototype,"caipAddress",void 0),N([(0,o.wk)()],J.prototype,"loading",void 0),N([(0,o.wk)()],J.prototype,"paymentCurrency",void 0),N([(0,o.wk)()],J.prototype,"paymentAmount",void 0),N([(0,o.wk)()],J.prototype,"purchaseAmount",void 0),N([(0,o.wk)()],J.prototype,"quoteLoading",void 0),J=N([(0,p.EM)("w3m-onramp-widget")],J)},93516(e,t,i){i(36887)},36887(e,t,i){var r=i(12618),o=i(25707),s=i(26109),a=i(43494);const n=r.AH`
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
`;var c=function(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let l=class extends r.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.objectFit="cover"}render(){return this.objectFit&&(this.dataset.objectFit=this.objectFit),this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,r.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[s.W5,s.ck,n],c([(0,o.MZ)()],l.prototype,"src",void 0),c([(0,o.MZ)()],l.prototype,"alt",void 0),c([(0,o.MZ)()],l.prototype,"size",void 0),c([(0,o.MZ)()],l.prototype,"objectFit",void 0),l=c([(0,a.E)("wui-image")],l)}}]);