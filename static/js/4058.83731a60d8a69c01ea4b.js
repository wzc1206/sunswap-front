"use strict";(globalThis.webpackChunkswap_front=globalThis.webpackChunkswap_front||[]).push([[4058],{45839(e,t,i){i.d(t,{T:()=>o});const o={URLS:{FAQ:"https://walletconnect.com/faq"}}},71801(e,t,i){i.d(t,{Up:()=>p});var o=i(24376),a=i(63450),n=i(6056),r=i(36010),s=i(90184),l=i(78508),c=i(21871),d=i(26742),u=i(27508);async function p(e){a.U.setSocialProvider(e,n.W.state.activeChain),s.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),"farcaster"===e?await async function(){l.I.push("ConnectingFarcaster");const e=r.a.getAuthConnector();if(e&&!a.U.state.farcasterUrl)try{const{url:t}=await e.provider.getFarcasterUri();a.U.setFarcasterUrl(t,n.W.state.activeChain)}catch(e){l.I.goBack(),c.P.showError(e)}}():await async function(e){l.I.push("ConnectingSocial");const t=r.a.getAuthConnector();let i=null;try{const r=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(t&&e){if(d.w.isTelegram()||(i=function(){try{return d.w.returnOpenHref(`${o.o.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(e){throw new Error("Could not open social popup")}}()),i)a.U.setSocialWindow(i,n.W.state.activeChain);else if(!d.w.isTelegram())throw new Error("Could not create social popup");const{uri:s}=await t.provider.getSocialRedirectUri({provider:e});if(!s)throw i?.close(),new Error("Could not fetch the social redirect uri");if(i&&(i.location.href=s),d.w.isTelegram()){u.i.setTelegramSocialProvider(e);const t=d.w.formatTelegramSocialLoginUrl(s);d.w.openHref(t,"_top")}clearTimeout(r)}}catch(e){i?.close(),c.P.showError(e?.message)}}(e)}},54058(e,t,i){i.r(t),i.d(t,{AppKitAccountButton:()=>C,AppKitButton:()=>W,AppKitConnectButton:()=>P,AppKitNetworkButton:()=>B,W3mAccountButton:()=>k,W3mAccountSettingsView:()=>le,W3mAccountView:()=>Ue,W3mAllWalletsView:()=>zt,W3mButton:()=>S,W3mChooseAccountNameView:()=>Co,W3mConnectButton:()=>M,W3mConnectView:()=>Fi,W3mConnectWalletsView:()=>Oo,W3mConnectingExternalView:()=>Qi,W3mConnectingMultiChainView:()=>io,W3mConnectingWcBasicView:()=>vo,W3mConnectingWcView:()=>fo,W3mDownloadsView:()=>$o,W3mGetWalletView:()=>Io,W3mNetworkButton:()=>Z,W3mNetworkSwitchView:()=>qo,W3mNetworksView:()=>Bo,W3mProfileWalletsView:()=>lt,W3mRouter:()=>_.J,W3mSIWXSignMessageView:()=>pa,W3mSwitchActiveChainView:()=>Ko,W3mUnsupportedChainView:()=>Qo,W3mWalletCompatibleNetworksView:()=>aa,W3mWhatIsANetworkView:()=>Go,W3mWhatIsAWalletView:()=>Ao});var o=i(12618),a=i(25707),n=i(60031),r=i(42733),s=i(6056),l=i(73337),c=i(27601),d=i(63450),u=i(26742),p=i(96396),h=i(70148),w=(i(36887),i(20880),i(18409),i(69807),i(26109)),g=i(63612),b=i(43494);i(76867),i(12851);const f=o.AH`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var m=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let v=class extends o.WF{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return o.qy`
      <button
        ?disabled=${this.disabled}
        class=${(0,n.J)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?g.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return o.qy` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
          data-testid="wui-account-button-unsupported-chain"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?o.qy`<wui-image src=${this.networkSrc}></wui-image>`:o.qy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `,t=this.loading?o.qy`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`:o.qy`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;return o.qy`${e} ${t}`}return null}};v.styles=[w.W5,w.fD,f],m([(0,a.MZ)()],v.prototype,"networkSrc",void 0),m([(0,a.MZ)()],v.prototype,"avatarSrc",void 0),m([(0,a.MZ)()],v.prototype,"balance",void 0),m([(0,a.MZ)({type:Boolean})],v.prototype,"isUnsupportedChain",void 0),m([(0,a.MZ)({type:Boolean})],v.prototype,"disabled",void 0),m([(0,a.MZ)({type:Boolean})],v.prototype,"loading",void 0),m([(0,a.MZ)()],v.prototype,"address",void 0),m([(0,a.MZ)()],v.prototype,"profileName",void 0),m([(0,a.MZ)()],v.prototype,"charsStart",void 0),m([(0,a.MZ)()],v.prototype,"charsEnd",void 0),v=m([(0,b.E)("wui-account-button")],v);var y=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};class x extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=!!r.H.state.allowUnsupportedChain||!s.W.state.activeChain||s.W.checkIfSupportedNetwork(s.W.state.activeChain)}connectedCallback(){super.connectedCallback(),this.setAccountData(s.W.getAccountData(this.namespace)),this.setNetworkData(s.W.getNetworkData(this.namespace))}firstUpdated(){const e=this.namespace;e?this.unsubscribe.push(s.W.subscribeChainProp("accountState",e=>{this.setAccountData(e)},e),s.W.subscribeChainProp("networkState",t=>{this.setNetworkData(t),this.isSupported=s.W.checkIfSupportedNetwork(e,t?.caipNetwork?.caipNetworkId)},e)):this.unsubscribe.push(l.j.subscribeNetworkImages(()=>{this.networkImage=c.$.getNetworkImage(this.network)}),s.W.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),d.U.subscribeKey("balance",e=>this.balanceVal=e),d.U.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),d.U.subscribeKey("profileName",e=>this.profileName=e),d.U.subscribeKey("profileImage",e=>this.profileImage=e),s.W.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=c.$.getNetworkImage(e),this.isSupported=!e?.chainNamespace||s.W.checkIfSupportedNetwork(e?.chainNamespace),this.fetchNetworkImage(e)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!s.W.state.activeChain)return null;const e="show"===this.balance,t="string"!=typeof this.balanceVal;return o.qy`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${!r.H.state.allowUnsupportedChain&&!this.isSupported}
        address=${(0,n.J)(u.w.getPlainAddress(this.caipAddress))}
        profileName=${(0,n.J)(this.profileName)}
        networkSrc=${(0,n.J)(this.networkImage)}
        avatarSrc=${(0,n.J)(this.profileImage)}
        balance=${e?u.w.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid=${"account-button"+(this.namespace?`-${this.namespace}`:"")}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||r.H.state.allowUnsupportedChain?p.W.open({namespace:this.namespace}):p.W.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){e?.assets?.imageId&&(this.networkImage=await c.$.fetchNetworkImage(e?.assets?.imageId))}setAccountData(e){e&&(this.caipAddress=e.caipAddress,this.balanceVal=e.balance,this.balanceSymbol=e.balanceSymbol,this.profileName=e.profileName,this.profileImage=e.profileImage)}setNetworkData(e){e&&(this.network=e.caipNetwork,this.networkImage=c.$.getNetworkImage(e.caipNetwork))}}y([(0,a.MZ)({type:Boolean})],x.prototype,"disabled",void 0),y([(0,a.MZ)()],x.prototype,"balance",void 0),y([(0,a.MZ)()],x.prototype,"charsStart",void 0),y([(0,a.MZ)()],x.prototype,"charsEnd",void 0),y([(0,a.MZ)()],x.prototype,"namespace",void 0),y([(0,a.wk)()],x.prototype,"caipAddress",void 0),y([(0,a.wk)()],x.prototype,"balanceVal",void 0),y([(0,a.wk)()],x.prototype,"balanceSymbol",void 0),y([(0,a.wk)()],x.prototype,"profileName",void 0),y([(0,a.wk)()],x.prototype,"profileImage",void 0),y([(0,a.wk)()],x.prototype,"network",void 0),y([(0,a.wk)()],x.prototype,"networkImage",void 0),y([(0,a.wk)()],x.prototype,"isSupported",void 0);let k=class extends x{};k=y([(0,h.EM)("w3m-account-button")],k);let C=class extends x{};C=y([(0,h.EM)("appkit-account-button")],C);const $=o.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var I=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};class E extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){this.caipAddress=this.namespace?s.W.state.chains.get(this.namespace)?.accountState?.caipAddress:s.W.state.activeCaipAddress,this.namespace?this.unsubscribe.push(s.W.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},this.namespace)):this.unsubscribe.push(s.W.subscribeKey("activeCaipAddress",e=>this.caipAddress=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?o.qy`
          <appkit-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${(0,n.J)(this.balance)}
            .charsStart=${(0,n.J)(this.charsStart)}
            .charsEnd=${(0,n.J)(this.charsEnd)}
            namespace=${(0,n.J)(this.namespace)}
          >
          </appkit-account-button>
        `:o.qy`
          <appkit-connect-button
            size=${(0,n.J)(this.size)}
            label=${(0,n.J)(this.label)}
            loadingLabel=${(0,n.J)(this.loadingLabel)}
            namespace=${(0,n.J)(this.namespace)}
          ></appkit-connect-button>
        `}}E.styles=$,I([(0,a.MZ)({type:Boolean})],E.prototype,"disabled",void 0),I([(0,a.MZ)()],E.prototype,"balance",void 0),I([(0,a.MZ)()],E.prototype,"size",void 0),I([(0,a.MZ)()],E.prototype,"label",void 0),I([(0,a.MZ)()],E.prototype,"loadingLabel",void 0),I([(0,a.MZ)()],E.prototype,"charsStart",void 0),I([(0,a.MZ)()],E.prototype,"charsEnd",void 0),I([(0,a.MZ)()],E.prototype,"namespace",void 0),I([(0,a.wk)()],E.prototype,"caipAddress",void 0);let S=class extends E{};S=I([(0,h.EM)("w3m-button")],S);let W=class extends E{};W=I([(0,h.EM)("appkit-button")],W);const A=o.AH`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var T=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let R=class extends o.WF{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e="md"===this.size?"paragraph-600":"small-600";return o.qy`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?o.qy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};R.styles=[w.W5,w.fD,A],T([(0,a.MZ)()],R.prototype,"size",void 0),T([(0,a.MZ)({type:Boolean})],R.prototype,"loading",void 0),R=T([(0,b.E)("wui-connect-button")],R);var O=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};class N extends o.WF{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=p.W.state.open,this.loading=this.namespace?p.W.state.loadingNamespaceMap.get(this.namespace):p.W.state.loading,this.unsubscribe.push(p.W.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-connect-button
        size=${(0,n.J)(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${"connect-button"+(this.namespace?`-${this.namespace}`:"")}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?p.W.close():this.loading||p.W.open({view:"Connect",namespace:this.namespace})}}O([(0,a.MZ)()],N.prototype,"size",void 0),O([(0,a.MZ)()],N.prototype,"label",void 0),O([(0,a.MZ)()],N.prototype,"loadingLabel",void 0),O([(0,a.MZ)()],N.prototype,"namespace",void 0),O([(0,a.wk)()],N.prototype,"open",void 0),O([(0,a.wk)()],N.prototype,"loading",void 0);let M=class extends N{};M=O([(0,h.EM)("w3m-connect-button")],M);let P=class extends N{};P=O([(0,h.EM)("appkit-connect-button")],P);var j=i(90184);const q=o.AH`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var D=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let L=class extends o.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return o.qy`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?o.qy`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?o.qy`<wui-image src=${this.imageSrc}></wui-image>`:o.qy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};L.styles=[w.W5,w.fD,q],D([(0,a.MZ)()],L.prototype,"imageSrc",void 0),D([(0,a.MZ)({type:Boolean})],L.prototype,"isUnsupportedChain",void 0),D([(0,a.MZ)({type:Boolean})],L.prototype,"disabled",void 0),L=D([(0,b.E)("wui-network-button")],L);const U=o.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var z=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};class F extends o.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=s.W.state.activeCaipNetwork,this.networkImage=c.$.getNetworkImage(this.network),this.caipAddress=s.W.state.activeCaipAddress,this.loading=p.W.state.loading,this.isSupported=!!r.H.state.allowUnsupportedChain||!s.W.state.activeChain||s.W.checkIfSupportedNetwork(s.W.state.activeChain),this.unsubscribe.push(l.j.subscribeNetworkImages(()=>{this.networkImage=c.$.getNetworkImage(this.network)}),s.W.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),s.W.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=c.$.getNetworkImage(e),this.isSupported=!e?.chainNamespace||s.W.checkIfSupportedNetwork(e.chainNamespace),c.$.fetchNetworkImage(e?.assets?.imageId)}),p.W.subscribeKey("loading",e=>this.loading=e))}firstUpdated(){c.$.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=!this.network||s.W.checkIfSupportedNetwork(this.network.chainNamespace);return o.qy`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${!r.H.state.allowUnsupportedChain&&!e}
        imageSrc=${(0,n.J)(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported||r.H.state.allowUnsupportedChain?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(j.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),p.W.open({view:"Networks"}))}}F.styles=U,z([(0,a.MZ)({type:Boolean})],F.prototype,"disabled",void 0),z([(0,a.MZ)({type:String})],F.prototype,"label",void 0),z([(0,a.wk)()],F.prototype,"network",void 0),z([(0,a.wk)()],F.prototype,"networkImage",void 0),z([(0,a.wk)()],F.prototype,"caipAddress",void 0),z([(0,a.wk)()],F.prototype,"loading",void 0),z([(0,a.wk)()],F.prototype,"isSupported",void 0);let Z=class extends F{};Z=z([(0,h.EM)("w3m-network-button")],Z);let B=class extends F{};B=z([(0,h.EM)("appkit-network-button")],B);var _=i(5105),H=i(24376),V=i(36010),K=i(62944),J=i(21871),G=i(74496),Y=i(78508),X=i(31211),Q=i(8351);i(60310),i(64865),i(26509),i(2132),i(19384);const ee=o.AH`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var te=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ie=class extends o.WF{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return o.qy`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};ie.styles=[w.W5,w.fD,ee],te([(0,a.MZ)()],ie.prototype,"label",void 0),te([(0,a.MZ)()],ie.prototype,"description",void 0),te([(0,a.MZ)()],ie.prototype,"icon",void 0),ie=te([(0,b.E)("wui-notice-card")],ie),i(45090);var oe=i(10152),ae=i(27508),ne=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let re=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.socialProvider=ae.i.getConnectedSocialProvider(),this.socialUsername=ae.i.getConnectedSocialUsername(),this.namespace=s.W.state.activeChain,this.unsubscribe.push(s.W.subscribeKey("activeChain",e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=V.a.getConnectorId(this.namespace),t=V.a.getAuthConnector();if(!t||e!==H.o.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const i=t.provider.getEmail()??"";return i||this.socialUsername?o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(i,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(i)}</wui-text>
      </wui-list-item>
    `:(this.style.cssText="display: none",null)}onGoToUpdateEmail(e,t){t||Y.I.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};ne([(0,a.wk)()],re.prototype,"namespace",void 0),re=ne([(0,h.EM)("w3m-account-auth-button")],re);var se=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let le=class extends o.WF{constructor(){super(),this.usubscribe=[],this.networkImages=l.j.state.networkImages,this.address=d.U.state.address,this.profileImage=d.U.state.profileImage,this.profileName=d.U.state.profileName,this.network=s.W.state.activeCaipNetwork,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.remoteFeatures=r.H.state.remoteFeatures,this.usubscribe.push(d.U.subscribe(e=>{e.address&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName)}),s.W.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}),r.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[this.network?.assets?.imageId??""];return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,n.J)(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${h.Zv.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${(0,n.J)(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const e=this.network?.chainNamespace,t=V.a.getConnectorId(e),i=V.a.getAuthConnector();return s.W.checkIfNamesSupported()&&i&&t===H.o.CONNECTOR_ID.AUTH&&!this.profileName?o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=V.a.getConnectorId(this.network?.chainNamespace),t=V.a.getAuthConnector(),{origin:i}=location;return!t||e!==H.o.CONNECTOR_ID.AUTH||i.includes(K.oU.SECURE_SITE)?null:o.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=s.W.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find(({id:e})=>e===this.network?.id);return t||!i}onCopyAddress(){try{this.address&&(u.w.copyToClopboard(this.address),J.P.showSuccess("Address copied"))}catch{J.P.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const e=this.network?.chainNamespace,t=s.W.checkIfSmartAccountEnabled(),i=V.a.getConnectorId(e);return V.a.getAuthConnector()&&i===H.o.CONNECTOR_ID.AUTH&&t?(this.switched||(this.text=(0,G.lj)(e)===oe.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account"),o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){Y.I.push("ChooseAccountName")}async changePreferredAccountType(){const e=this.network?.chainNamespace,t=s.W.checkIfSmartAccountEnabled(),i=(0,G.lj)(e)!==oe.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&t?oe.Vl.ACCOUNT_TYPES.SMART_ACCOUNT:oe.Vl.ACCOUNT_TYPES.EOA;V.a.getAuthConnector()&&(this.loading=!0,await X.x.setPreferredAccountType(i,e),this.text=i===oe.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account",this.switched=!0,Q.R.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&Y.I.push("Networks")}async onDisconnect(){try{this.disconnecting=!0;const e=this.network?.chainNamespace,t=X.x.getConnections(e).length>0,i=e&&V.a.state.activeConnectorIds[e],o=this.remoteFeatures?.multiWallet;await X.x.disconnect(o?{id:i,namespace:e}:{}),t&&o&&(Y.I.push("ProfileWallets"),J.P.showSuccess("Wallet deleted"))}catch{j.E.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),J.P.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){j.E.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),Y.I.push("UpgradeEmailWallet")}};se([(0,a.wk)()],le.prototype,"address",void 0),se([(0,a.wk)()],le.prototype,"profileImage",void 0),se([(0,a.wk)()],le.prototype,"profileName",void 0),se([(0,a.wk)()],le.prototype,"network",void 0),se([(0,a.wk)()],le.prototype,"disconnecting",void 0),se([(0,a.wk)()],le.prototype,"loading",void 0),se([(0,a.wk)()],le.prototype,"switched",void 0),se([(0,a.wk)()],le.prototype,"text",void 0),se([(0,a.wk)()],le.prototype,"remoteFeatures",void 0),le=se([(0,h.EM)("w3m-account-settings-view")],le),i(58461),i(51636);const ce=o.AH`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var de=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ue=class extends o.WF{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{const i=t===this.activeTab;return o.qy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${i}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?o.qy`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const i=this.buttons[this.activeTab],o=this.buttons[e],a=i?.querySelector("wui-text"),n=o?.querySelector("wui-text"),r=o?.getBoundingClientRect(),s=n?.getBoundingClientRect();i&&a&&!t&&e!==this.activeTab&&(a.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&r&&s&&n&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(r.width+s.width)+6}px`,o.animate([{width:`${r.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),n.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};ue.styles=[w.W5,w.fD,ce],de([(0,a.MZ)({type:Array})],ue.prototype,"tabs",void 0),de([(0,a.MZ)()],ue.prototype,"onTabChange",void 0),de([(0,a.MZ)({type:Array})],ue.prototype,"buttons",void 0),de([(0,a.MZ)({type:Boolean})],ue.prototype,"disabled",void 0),de([(0,a.MZ)()],ue.prototype,"localTabWidth",void 0),de([(0,a.wk)()],ue.prototype,"activeTab",void 0),de([(0,a.wk)()],ue.prototype,"isDense",void 0),ue=de([(0,b.E)("wui-tabs")],ue),i(38253);const pe=o.AH`
  button {
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-xxs);
    column-gap: var(--wui-spacing-xs);
  }

  wui-image,
  .icon-box {
    width: var(--wui-spacing-xxl);
    height: var(--wui-spacing-xxl);
    border-radius: var(--wui-border-radius-3xs);
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: var(--wui-color-gray-glass-005);
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: var(--wui-spacing-1xs);
    height: var(--wui-spacing-1xs);
    background-color: var(--wui-color-success-100);
    border: 2px solid var(--wui-color-modal-bg);
    border-radius: 50%;
  }
`;var he=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let we=class extends o.WF{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return o.qy`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const e=this.icon?o.qy`<wui-icon
          size=${this.iconSize}
          color="fg-200"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:o.qy`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return o.qy`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${Boolean(this.icon)}
      >
        ${e}
        <wui-flex class="circle"></wui-flex>
      </wui-flex>
    `}textTemplate(){return o.qy`
      <wui-text variant="paragraph-500" color="fg-100">
        ${g.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return o.qy`<wui-icon name="chevronBottom" size="xs" color="fg-200"></wui-icon>`}};we.styles=[w.W5,w.fD,pe],he([(0,a.MZ)()],we.prototype,"address",void 0),he([(0,a.MZ)()],we.prototype,"profileName",void 0),he([(0,a.MZ)()],we.prototype,"alt",void 0),he([(0,a.MZ)()],we.prototype,"imageSrc",void 0),he([(0,a.MZ)()],we.prototype,"icon",void 0),he([(0,a.MZ)()],we.prototype,"iconSize",void 0),he([(0,a.MZ)({type:Boolean})],we.prototype,"loading",void 0),he([(0,a.MZ)({type:Number})],we.prototype,"charsStart",void 0),he([(0,a.MZ)({type:Number})],we.prototype,"charsEnd",void 0),we=he([(0,b.E)("wui-wallet-switch")],we);const ge=o.AH`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-wallet-switch {
    margin-top: var(--wui-spacing-xs);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var be=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let fe=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.caipAddress=d.U.state.caipAddress,this.address=u.w.getPlainAddress(d.U.state.caipAddress),this.profileImage=d.U.state.profileImage,this.profileName=d.U.state.profileName,this.disconnecting=!1,this.balance=d.U.state.balance,this.balanceSymbol=d.U.state.balanceSymbol,this.features=r.H.state.features,this.remoteFeatures=r.H.state.remoteFeatures,this.namespace=s.W.state.activeChain,this.activeConnectorIds=V.a.state.activeConnectorIds,this.unsubscribe.push(d.U.subscribeKey("caipAddress",e=>{this.address=u.w.getPlainAddress(e),this.caipAddress=e}),d.U.subscribeKey("balance",e=>this.balance=e),d.U.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),d.U.subscribeKey("profileName",e=>this.profileName=e),d.U.subscribeKey("profileImage",e=>this.profileImage=e),r.H.subscribeKey("features",e=>this.features=e),r.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),V.a.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),s.W.subscribeKey("activeChain",e=>this.namespace=e),s.W.subscribeKey("activeCaipNetwork",e=>{e?.chainNamespace&&(this.namespace=e?.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress||!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],t=e?V.a.getConnectorById(e):void 0,i=c.$.getConnectorImage(t);return o.qy`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="s"
      >
        <wui-avatar
          alt=${(0,n.J)(this.caipAddress)}
          address=${(0,n.J)(u.w.getPlainAddress(this.caipAddress))}
          imageSrc=${(0,n.J)(null===this.profileImage?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${i}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${u.w.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;const e=K.oU.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),t=this.remoteFeatures?.onramp&&e,i=Boolean(this.features?.receive);return t||i?o.qy`
      <wui-list-item
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Fund wallet</wui-text>
      </wui-list-item>
    `:null}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||K.oU.DEFAULT_FEATURES.walletFeaturesOrder).map(e=>{switch(e){case"onramp":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){return this.namespace&&this.remoteFeatures?.activity&&K.oU.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?o.qy` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){const e=this.remoteFeatures?.swaps,t=s.W.state.activeChain===H.o.CHAIN.EVM;return e&&t?o.qy`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `:null}sendTemplate(){const e=this.features?.send,t=s.W.state.activeChain;if(!t)throw new Error("SendController:sendTemplate - namespace is required");const i=K.oU.SEND_SUPPORTED_NAMESPACES.includes(t);return e&&i?o.qy`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=s.W.state.activeChain;if(!e)throw new Error("AuthCardTemplate:authCardTemplate - namespace is required");const t=V.a.getConnectorId(e),i=V.a.getAuthConnector(),{origin:a}=location;return!i||t!==H.o.CONNECTOR_ID.AUTH||a.includes(K.oU.SECURE_SITE)?null:o.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){Y.I.push("FundWallet")}handleClickSwap(){Y.I.push("Swap")}handleClickSend(){Y.I.push("WalletSend")}explorerBtnTemplate(){return d.U.state.addressExplorerUrl?o.qy`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){j.E.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:(0,G.lj)(s.W.state.activeChain)===oe.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),Y.I.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0;const e=X.x.getConnections(this.namespace).length>0,t=this.namespace&&V.a.state.activeConnectorIds[this.namespace],i=this.remoteFeatures?.multiWallet;await X.x.disconnect(i?{id:t,namespace:this.namespace}:{}),e&&i&&(Y.I.push("ProfileWallets"),J.P.showSuccess("Wallet deleted"))}catch{j.E.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),J.P.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=d.U.state.addressExplorerUrl;e&&u.w.openHref(e,"_blank")}onGoToUpgradeView(){j.E.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),Y.I.push("UpgradeEmailWallet")}onGoToProfileWalletsView(){Y.I.push("ProfileWallets")}};fe.styles=ge,be([(0,a.wk)()],fe.prototype,"caipAddress",void 0),be([(0,a.wk)()],fe.prototype,"address",void 0),be([(0,a.wk)()],fe.prototype,"profileImage",void 0),be([(0,a.wk)()],fe.prototype,"profileName",void 0),be([(0,a.wk)()],fe.prototype,"disconnecting",void 0),be([(0,a.wk)()],fe.prototype,"balance",void 0),be([(0,a.wk)()],fe.prototype,"balanceSymbol",void 0),be([(0,a.wk)()],fe.prototype,"features",void 0),be([(0,a.wk)()],fe.prototype,"remoteFeatures",void 0),be([(0,a.wk)()],fe.prototype,"namespace",void 0),be([(0,a.wk)()],fe.prototype,"activeConnectorIds",void 0),fe=be([(0,h.EM)("w3m-account-default-widget")],fe);const me=o.AH`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var ve=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ye=class extends o.WF{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return o.qy`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};ye.styles=[w.W5,me],ve([(0,a.MZ)()],ye.prototype,"dollars",void 0),ve([(0,a.MZ)()],ye.prototype,"pennies",void 0),ye=ve([(0,b.E)("wui-balance")],ye),i(84293);const xe=o.AH`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var ke=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Ce=class extends o.WF{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,o.qy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Ce.styles=[w.W5,w.fD,xe],ke([(0,a.MZ)()],Ce.prototype,"placement",void 0),ke([(0,a.MZ)()],Ce.prototype,"variant",void 0),ke([(0,a.MZ)()],Ce.prototype,"message",void 0),Ce=ke([(0,b.E)("wui-tooltip")],Ce);var $e=i(56092),Ie=i(34558);i(94009);const Ee=o.AH`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;let Se=class extends o.WF{render(){return o.qy`<w3m-activity-list page="account"></w3m-activity-list>`}};Se.styles=Ee,Se=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}([(0,h.EM)("w3m-account-activity-widget")],Se),i(77616),i(45101);const We=o.AH`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;let Ae=class extends o.WF{render(){return o.qy`${this.nftTemplate()}`}nftTemplate(){return o.qy` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`}onReceiveClick(){Y.I.push("WalletReceive")}};Ae.styles=We,Ae=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}([(0,h.EM)("w3m-account-nfts-widget")],Ae),i(5752);const Te=o.AH`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var Re=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Oe=class extends o.WF{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return o.qy`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          ${this.description?o.qy`<wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text>`:null}</wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?o.qy` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:o.qy`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};Oe.styles=[w.W5,w.fD,Te],Re([(0,a.MZ)()],Oe.prototype,"icon",void 0),Re([(0,a.MZ)()],Oe.prototype,"text",void 0),Re([(0,a.MZ)()],Oe.prototype,"description",void 0),Re([(0,a.MZ)()],Oe.prototype,"tag",void 0),Re([(0,a.MZ)()],Oe.prototype,"iconBackgroundColor",void 0),Re([(0,a.MZ)()],Oe.prototype,"iconColor",void 0),Re([(0,a.MZ)({type:Boolean})],Oe.prototype,"disabled",void 0),Oe=Re([(0,b.E)("wui-list-description")],Oe),i(55710);const Ne=o.AH`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var Me=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Pe=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tokenBalance=d.U.state.tokenBalance,this.remoteFeatures=r.H.state.remoteFeatures,this.unsubscribe.push(d.U.subscribe(e=>{this.tokenBalance=e.tokenBalance}),r.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?o.qy`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:o.qy` <wui-flex flexDirection="column" gap="xs"
      >${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){return this.remoteFeatures?.onramp?o.qy`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:o.qy``}tokenItemTemplate(){return this.tokenBalance?.map(e=>o.qy`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){Y.I.push("WalletReceive")}onBuyClick(){j.E.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:(0,G.lj)(s.W.state.activeChain)===oe.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),Y.I.push("OnRampProviders")}};Pe.styles=Ne,Me([(0,a.wk)()],Pe.prototype,"tokenBalance",void 0),Me([(0,a.wk)()],Pe.prototype,"remoteFeatures",void 0),Pe=Me([(0,h.EM)("w3m-account-tokens-widget")],Pe),i(78509),i(56090);const je=o.AH`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var qe=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let De=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.address=d.U.state.address,this.profileName=d.U.state.profileName,this.network=s.W.state.activeCaipNetwork,this.currentTab=d.U.state.currentTab,this.tokenBalance=d.U.state.tokenBalance,this.features=r.H.state.features,this.namespace=s.W.state.activeChain,this.activeConnectorIds=V.a.state.activeConnectorIds,this.remoteFeatures=r.H.state.remoteFeatures,this.unsubscribe.push(d.U.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):p.W.close()}),V.a.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),s.W.subscribeKey("activeChain",e=>this.namespace=e),s.W.subscribeKey("activeCaipNetwork",e=>this.network=e),r.H.subscribeKey("features",e=>this.features=e),r.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){d.U.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");if(!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],t=e?V.a.getConnectorById(e):void 0,{icon:i,iconSize:a}=this.getAuthData();return o.qy`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="xs">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${i}
          iconSize=${a}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){const e=this.features?.walletFeaturesOrder||K.oU.DEFAULT_FEATURES.walletFeaturesOrder;if(e.every(e=>"send"===e||"receive"===e?!this.features?.[e]:"swaps"!==e&&"onramp"!==e||!this.remoteFeatures?.[e]))return null;const t=e.map(e=>"receive"===e||"onramp"===e?"fund":e),i=[...new Set(t)];return o.qy`<wui-flex gap="s">
      ${i.map(e=>{switch(e){case"fund":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}fundWalletTemplate(){const e=this.remoteFeatures?.onramp,t=this.features?.receive;return e||t?o.qy`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-icon-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          icon="dollar"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){const e=this.remoteFeatures?.swaps,t=s.W.state.activeChain===H.o.CHAIN.EVM;return e&&t?o.qy`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){const e=this.features?.send,t=s.W.state.activeChain,i=K.oU.SEND_SUPPORTED_NAMESPACES.includes(t);return e&&i?o.qy`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval(()=>d.U.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===H.o.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return 0===this.currentTab?o.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?o.qy`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?o.qy`<w3m-account-activity-widget></w3m-account-activity-widget>`:o.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){const e=u.w.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:i="00"}=u.w.formatTokenBalance(e);return o.qy`<wui-balance dollars=${t} pennies=${i}></wui-balance>`}return o.qy`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const e=Ie.y.getTabsByNamespace(s.W.state.activeChain);if(0===e.length)return null;let t="104px";return t=u.w.isMobile()&&window.innerWidth<430?(window.innerWidth-48)/e.length+"px":2===e.length?"156px":"104px",o.qy`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      localTabWidth=${t}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){d.U.setCurrentTab(e)}onFundWalletClick(){Y.I.push("FundWallet")}onSwapClick(){this.network?.caipNetworkId&&!K.oU.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?Y.I.push("UnsupportedChain",{swapUnsupportedChain:!0}):(j.E.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:(0,G.lj)(s.W.state.activeChain)===oe.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),Y.I.push("Swap"))}getAuthData(){const e=ae.i.getConnectedSocialProvider(),t=ae.i.getConnectedSocialUsername(),i=V.a.getAuthConnector(),o=i?.provider.getEmail()??"";return{name:$e.g.getAuthName({email:o,socialUsername:t,socialProvider:e}),icon:e??"mail",iconSize:e?"xl":"md"}}onGoToProfileWalletsView(){Y.I.push("ProfileWallets")}onSendClick(){j.E.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:(0,G.lj)(s.W.state.activeChain)===oe.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),Y.I.push("WalletSend")}};De.styles=je,qe([(0,a.wk)()],De.prototype,"watchTokenBalance",void 0),qe([(0,a.wk)()],De.prototype,"address",void 0),qe([(0,a.wk)()],De.prototype,"profileName",void 0),qe([(0,a.wk)()],De.prototype,"network",void 0),qe([(0,a.wk)()],De.prototype,"currentTab",void 0),qe([(0,a.wk)()],De.prototype,"tokenBalance",void 0),qe([(0,a.wk)()],De.prototype,"features",void 0),qe([(0,a.wk)()],De.prototype,"namespace",void 0),qe([(0,a.wk)()],De.prototype,"activeConnectorIds",void 0),qe([(0,a.wk)()],De.prototype,"remoteFeatures",void 0),De=qe([(0,h.EM)("w3m-account-wallet-features-widget")],De);var Le=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Ue=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.namespace=s.W.state.activeChain,this.unsubscribe.push(s.W.subscribeKey("activeChain",e=>{this.namespace=e}))}render(){if(!this.namespace)return null;const e=V.a.getConnectorId(this.namespace),t=V.a.getAuthConnector();return o.qy`
      ${t&&e===H.o.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return o.qy`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return o.qy`<w3m-account-default-widget></w3m-account-default-widget>`}};Le([(0,a.wk)()],Ue.prototype,"namespace",void 0),Ue=Le([(0,h.EM)("w3m-account-view")],Ue);var ze=i(53720),Fe=i(75910),Ze=i(8577);i(7068),i(91383);const Be=o.AH`
  wui-image {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
    border-radius: var(--wui-border-radius-3xs);
  }

  wui-image,
  .icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
    border-radius: var(--wui-border-radius-3xs);
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: var(--wui-color-gray-glass-005);
    border: 2px solid var(--wui-color-modal-bg);
    border-radius: 50%;
    padding: var(--wui-spacing-4xs);
  }
`;var _e=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let He=class extends o.WF{constructor(){super(...arguments),this.address="",this.profileName="",this.content=[],this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadge=void 0,this.iconBadgeSize="md",this.buttonVariant="neutral",this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return o.qy`
      <wui-flex flexDirection="column" rowGap="xs">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return o.qy`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          iconColor="fg-200"
          size="sm"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          iconColor="fg-200"
          size="sm"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?o.qy`<wui-icon-link
              iconColor="fg-200"
              size="sm"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return o.qy` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?o.qy`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon
              size=${this.iconSize}
              color="fg-200"
              name=${this.icon}
              class="custom-icon"
            ></wui-icon>

            ${this.iconBadge?o.qy`<wui-icon
                  color="fg-175"
                  size=${this.iconBadgeSize}
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:o.qy`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return 0===this.content.length?null:o.qy`
      <wui-flex flexDirection="column" rowGap="s">
        ${this.content.map(e=>this.labelAndTagTemplate(e))}
      </wui-flex>
    `}labelAndTagTemplate({address:e,profileName:t,label:i,description:a,enableButton:n,buttonType:r,buttonLabel:s,buttonVariant:l,tagVariant:c,tagLabel:d,alignItems:u="flex-end"}){return o.qy`
      <wui-flex justifyContent="space-between" alignItems=${u} columnGap="3xs">
        <wui-flex flexDirection="column" rowGap="4xs">
          ${i?o.qy`<wui-text variant="micro-600" color="fg-200">${i}</wui-text>`:null}

          <wui-flex alignItems="center" columnGap="3xs">
            <wui-text variant="small-500" color="fg-100">
              ${g.Z.getTruncateString({string:t||e,charsStart:t?16:this.charsStart,charsEnd:t?0:this.charsEnd,truncate:t?"end":"middle"})}
            </wui-text>

            ${c&&d?o.qy`<wui-tag variant=${c} size="xs">${d}</wui-tag>`:null}
          </wui-flex>

          ${a?o.qy`<wui-text variant="tiny-500" color="fg-200">${a}</wui-text>`:null}
        </wui-flex>

        ${n?this.buttonTemplate({buttonType:r,buttonLabel:s,buttonVariant:l}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:e,buttonLabel:t,buttonVariant:i}){return o.qy`
      <wui-button
        size="xs"
        variant=${i}
        @click=${"disconnect"===e?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${"disconnect"===e?"wui-active-profile-wallet-item-disconnect-button":"wui-active-profile-wallet-item-switch-button"}
      >
        ${t}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("switch",{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent("externalLink",{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent("more",{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent("copy",{bubbles:!0,composed:!0}))}};He.styles=[w.W5,w.fD,Be],_e([(0,a.MZ)()],He.prototype,"address",void 0),_e([(0,a.MZ)()],He.prototype,"profileName",void 0),_e([(0,a.MZ)({type:Array})],He.prototype,"content",void 0),_e([(0,a.MZ)()],He.prototype,"alt",void 0),_e([(0,a.MZ)()],He.prototype,"imageSrc",void 0),_e([(0,a.MZ)()],He.prototype,"icon",void 0),_e([(0,a.MZ)()],He.prototype,"iconSize",void 0),_e([(0,a.MZ)()],He.prototype,"iconBadge",void 0),_e([(0,a.MZ)()],He.prototype,"iconBadgeSize",void 0),_e([(0,a.MZ)()],He.prototype,"buttonVariant",void 0),_e([(0,a.MZ)({type:Boolean})],He.prototype,"enableMoreButton",void 0),_e([(0,a.MZ)({type:Number})],He.prototype,"charsStart",void 0),_e([(0,a.MZ)({type:Number})],He.prototype,"charsEnd",void 0),He=_e([(0,b.E)("wui-active-profile-wallet-item")],He);const Ve=o.AH`
  wui-image,
  .icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
    border-radius: var(--wui-border-radius-3xs);
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: var(--wui-color-gray-glass-005);
    border: 2px solid var(--wui-color-modal-bg);
    border-radius: 50%;
    padding: var(--wui-spacing-4xs);
  }
`;var Ke=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Je=class extends o.WF{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.buttonLabel="",this.buttonVariant="accent",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadgeSize="md",this.rightIcon="off",this.rightIconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return o.qy`
      <wui-flex alignItems="center" columnGap="xs">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?o.qy`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon
              size=${this.iconSize}
              color="fg-200"
              name=${this.icon}
              class="custom-icon"
            ></wui-icon>
            ${this.iconBadge?o.qy`<wui-icon
                  color="fg-175"
                  size=${this.iconBadgeSize}
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:o.qy`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return o.qy`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="small-500" color="fg-100">
          ${g.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return o.qy`
      <wui-flex columnGap="3xs" alignItems="center" justifyContent="center">
        <wui-button
          size="xs"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          iconColor="fg-200"
          size=${this.rightIconSize}
          icon=${this.rightIcon}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent("iconClick",{bubbles:!0,composed:!0}))}};Je.styles=[w.W5,w.fD,Ve],Ke([(0,a.MZ)()],Je.prototype,"address",void 0),Ke([(0,a.MZ)()],Je.prototype,"profileName",void 0),Ke([(0,a.MZ)()],Je.prototype,"alt",void 0),Ke([(0,a.MZ)()],Je.prototype,"buttonLabel",void 0),Ke([(0,a.MZ)()],Je.prototype,"buttonVariant",void 0),Ke([(0,a.MZ)()],Je.prototype,"imageSrc",void 0),Ke([(0,a.MZ)()],Je.prototype,"icon",void 0),Ke([(0,a.MZ)()],Je.prototype,"iconSize",void 0),Ke([(0,a.MZ)()],Je.prototype,"iconBadge",void 0),Ke([(0,a.MZ)()],Je.prototype,"iconBadgeSize",void 0),Ke([(0,a.MZ)()],Je.prototype,"rightIcon",void 0),Ke([(0,a.MZ)()],Je.prototype,"rightIconSize",void 0),Ke([(0,a.MZ)({type:Boolean})],Je.prototype,"loading",void 0),Ke([(0,a.MZ)({type:Number})],Je.prototype,"charsStart",void 0),Ke([(0,a.MZ)({type:Number})],Je.prototype,"charsEnd",void 0),Je=Ke([(0,b.E)("wui-inactive-profile-wallet-item")],Je),i(55618);var Ge=i(35306);const Ye={getAuthData(e){const t=e.connectorId===H.o.CONNECTOR_ID.AUTH;if(!t)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};const i=e?.auth?.name??ae.i.getConnectedSocialProvider(),o=e?.auth?.username??ae.i.getConnectedSocialUsername(),a=V.a.getAuthConnector(),n=a?.provider.getEmail()??"";return{isAuth:!0,icon:i??"mail",iconSize:i?"xl":"md",name:t?$e.g.getAuthName({email:n,socialUsername:o,socialProvider:i}):void 0}}},Xe=o.AH`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: var(--wui-spacing-l);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-separator {
    margin: var(--wui-spacing-xs) 0 var(--wui-spacing-xs) 0;
  }

  .active-connection {
    padding: var(--wui-spacing-xs);
  }

  .recent-connection {
    padding: var(--wui-spacing-xs) 0 var(--wui-spacing-xs) 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;var Qe=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const et=4,tt=6,it="md",ot="lightbulb",at=[0,1],nt={eip155:"ethereum",solana:"solana",bip122:"bitcoin"},rt=[{namespace:"eip155",icon:nt.eip155,label:"EVM"},{namespace:"solana",icon:nt.solana,label:"Solana"},{namespace:"bip122",icon:nt.bip122,label:"Bitcoin"}],st={eip155:{title:"Add EVM Wallet",description:"Add your first EVM wallet"},solana:{title:"Add Solana Wallet",description:"Add your first Solana wallet"},bip122:{title:"Add Bitcoin Wallet",description:"Add your first Bitcoin wallet"}};let lt=class extends o.WF{constructor(){super(),this.unsubscribers=[],this.currentTab=0,this.namespace=s.W.state.activeChain,this.namespaces=Array.from(s.W.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=V.a.state.activeConnectorIds,this.lastSelectedAddress="",this.lastSelectedConnectorId="",this.isSwitching=!1,this.caipNetwork=s.W.state.activeCaipNetwork,this.user=d.U.state.user,this.remoteFeatures=r.H.state.remoteFeatures,this.tabWidth="",this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=s.W.getAccountData(this.namespace)?.caipAddress,this.profileName=s.W.getAccountData(this.namespace)?.profileName,this.unsubscribers.push(X.x.subscribeKey("connections",()=>this.onConnectionsChange()),X.x.subscribeKey("recentConnections",()=>this.requestUpdate()),V.a.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),s.W.subscribeKey("activeCaipNetwork",e=>this.caipNetwork=e),d.U.subscribeKey("user",e=>this.user=e),r.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.chainListener=s.W.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName},this.namespace)}disconnectedCallback(){this.unsubscribers.forEach(e=>e()),this.resizeObserver?.disconnect(),this.tabsResizeObserver?.disconnect(),this.removeScrollListener(),this.chainListener?.()}firstUpdated(){const e=this.shadowRoot?.querySelector(".wallet-list"),t=this.shadowRoot?.querySelector("wui-tabs");if(!e)return;const i=()=>this.updateScrollOpacity(e);if(requestAnimationFrame(i),e.addEventListener("scroll",i),this.resizeObserver=new ResizeObserver(i),this.resizeObserver.observe(e),i(),t){const e=()=>{const e=rt.filter(e=>this.namespaces.includes(e.namespace)).length;if(e>1){const t=this.getBoundingClientRect()?.width,i=(t-32-8)/e;this.tabWidth=`${i}px`,this.requestUpdate()}};this.tabsResizeObserver=new ResizeObserver(e),this.tabsResizeObserver.observe(this),e()}}render(){const e=this.namespace;if(!e)throw new Error("Namespace is not set");return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="l">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(e)}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `}renderTabs(){const e=rt.filter(e=>this.namespaces.includes(e.namespace));return e.length>1?o.qy`
        <wui-tabs
          .onTabChange=${e=>this.handleTabChange(e)}
          .activeTab=${this.currentTab}
          localTabWidth=${this.tabWidth}
          .tabs=${e}
        ></wui-tabs>
      `:null}renderHeader(e){const t=this.getActiveConnections(e).flatMap(({accounts:e})=>e).length+(this.caipAddress?1:0);return o.qy`
      <wui-flex alignItems="center" columnGap="3xs">
        <wui-icon
          name=${nt[e]??nt.eip155}
          size="lg"
        ></wui-icon>
        <wui-text color="fg-200" variant="small-400"
          >${t>1?"Wallets":"Wallet"}</wui-text
        >
        <wui-text
          color="fg-100"
          variant="small-400"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${t}
        </wui-text>
        <wui-link
          color="fg-200"
          @click=${()=>X.x.disconnect({namespace:e})}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(e){const t=this.hasAnyConnections(e),i={"wallet-list":!0,"active-wallets-box":t,"empty-wallet-list-box":!t};return o.qy`
      <wui-flex flexDirection="column" class=${(0,ze.H)(i)} rowGap="s">
        ${t?this.renderActiveConnections(e):this.renderEmptyState(e)}
      </wui-flex>
    `}renderActiveConnections(e){const t=this.getActiveConnections(e),i=this.activeConnectorIds[e],a=this.getPlainAddress();return o.qy`
      ${a||i||t.length>0?o.qy`<wui-flex
            flexDirection="column"
            .padding=${["l","0","xs","0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(e)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(e)}
    `}renderActiveProfile(e){const t=this.activeConnectorIds[e];if(!t)return null;const{connections:i}=Ze.b.getConnectionsData(e),a=V.a.getConnectorById(t),n=c.$.getConnectorImage(a),r=this.getPlainAddress();if(!r)return null;const s=e===H.o.CHAIN.BITCOIN,l=Ye.getAuthData({connectorId:t,accounts:[]}),d=this.getActiveConnections(e).flatMap(e=>e.accounts).length>0,u=i.find(e=>e.connectorId===t),p=u?.accounts.filter(e=>!Ge.y.isLowerCaseMatch(e.address,r));return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","l","0","l"]}>
        <wui-active-profile-wallet-item
          address=${r}
          alt=${a?.name}
          .content=${this.getProfileContent({address:r,connections:i,connectorId:t,namespace:e})}
          .charsStart=${et}
          .charsEnd=${tt}
          .icon=${l.icon}
          .iconSize=${l.iconSize}
          .iconBadge=${this.isSmartAccount(r)?ot:void 0}
          .iconBadgeSize=${this.isSmartAccount(r)?it:void 0}
          imageSrc=${n}
          ?enableMoreButton=${l.isAuth}
          @copy=${()=>this.handleCopyAddress(r)}
          @disconnect=${()=>this.handleDisconnect(e,{id:t})}
          @switch=${()=>{s&&u&&p?.[0]&&this.handleSwitchWallet(u,p[0].address,e)}}
          @externalLink=${()=>this.handleExternalLink(r)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${d?o.qy`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(e){const t=this.getActiveConnections(e);return 0===t.length?null:o.qy`
      <wui-flex flexDirection="column" .padding=${["0","xs","0","xs"]}>
        ${this.renderConnectionList(t,!1,e)}
      </wui-flex>
    `}renderRecentConnections(e){const{recentConnections:t}=Ze.b.getConnectionsData(e);return 0===t.flatMap(e=>e.accounts).length?null:o.qy`
      <wui-flex flexDirection="column" .padding=${["0","xs","0","xs"]} rowGap="xs">
        <wui-text color="fg-200" variant="micro-500" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0","xs","0","xs"]}>
          ${this.renderConnectionList(t,!0,e)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(e,t,i){return e.filter(e=>e.accounts.length>0).map((e,a)=>{const n=V.a.getConnectorById(e.connectorId),r=c.$.getConnectorImage(n)??"",s=Ye.getAuthData(e);return e.accounts.map((n,l)=>{const c=0!==a||0!==l,d=this.isAccountLoading(e.connectorId,n.address);return o.qy`
            <wui-flex flexDirection="column">
              ${c?o.qy`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${n.address}
                alt=${e.connectorId}
                buttonLabel=${t?"Connect":"Switch"}
                buttonVariant=${t?"neutral":"accent"}
                rightIcon=${t?"bin":"off"}
                rightIconSize="sm"
                class=${t?"recent-connection":"active-connection"}
                data-testid=${t?"recent-connection":"active-connection"}
                imageSrc=${r}
                .iconBadge=${this.isSmartAccount(n.address)?ot:void 0}
                .iconBadgeSize=${this.isSmartAccount(n.address)?it:void 0}
                .icon=${s.icon}
                .iconSize=${s.iconSize}
                .loading=${d}
                .showBalance=${!1}
                .charsStart=${et}
                .charsEnd=${tt}
                @buttonClick=${()=>this.handleSwitchWallet(e,n.address,i)}
                @iconClick=${()=>this.handleWalletAction({connection:e,address:n.address,isRecentConnection:t,namespace:i})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(e){if(!this.isMultiWalletEnabled()&&this.caipAddress)return null;if(!this.hasAnyConnections(e))return null;const{title:t}=this.getChainLabelInfo(e);return o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="paragraph-500" color="fg-200">${t}</wui-text>
      </wui-list-item>
    `}renderEmptyState(e){const{title:t,description:i}=this.getChainLabelInfo(e);return o.qy`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="s"
          class="empty-box"
        >
          <wui-icon-box
            size="lg"
            icon="wallet"
            background="gray"
            iconColor="fg-200"
            backgroundColor="glass-002"
          ></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="3xs">
            <wui-text color="fg-100" variant="paragraph-500" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="fg-200" variant="tiny-500" data-testid="empty-state-description"
              >${i}</wui-text
            >
          </wui-flex>

          <wui-button
            variant="neutral"
            size="md"
            @click=${()=>this.handleAddConnection(e)}
            data-testid="empty-state-button"
          >
            <wui-icon color="inherit" slot="iconLeft" name="plus"></wui-icon>
            ${t}
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(e){const t=this.namespaces[e];t&&(this.chainListener?.(),this.currentTab=this.namespaces.indexOf(t),this.namespace=t,this.caipAddress=s.W.getAccountData(t)?.caipAddress,this.profileName=s.W.getAccountData(t)?.profileName,this.chainListener=s.W.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},t))}async handleSwitchWallet(e,t,i){try{this.isSwitching=!0,this.lastSelectedConnectorId=e.connectorId,this.lastSelectedAddress=t,await X.x.switchConnection({connection:e,address:t,namespace:i,closeModalOnConnect:!1,onChange({hasSwitchedAccount:e,hasSwitchedWallet:t}){t?J.P.showSuccess("Wallet switched"):e&&J.P.showSuccess("Account switched")}})}catch(e){J.P.showError("Failed to switch wallet")}finally{this.isSwitching=!1}}handleWalletAction(e){const{connection:t,address:i,isRecentConnection:o,namespace:a}=e;o?(ae.i.deleteAddressFromConnection({connectorId:t.connectorId,address:i,namespace:a}),X.x.syncStorageConnections(),J.P.showSuccess("Wallet deleted")):this.handleDisconnect(a,{id:t.connectorId})}async handleDisconnect(e,{id:t}){try{await X.x.disconnect({id:t,namespace:e}),J.P.showSuccess("Wallet disconnected")}catch{J.P.showError("Failed to disconnect wallet")}}handleCopyAddress(e){u.w.copyToClopboard(e),J.P.showSuccess("Address copied")}handleMore(){Y.I.push("AccountSettings")}handleExternalLink(e){const t=this.caipNetwork?.blockExplorers?.default.url;t&&u.w.openHref(`${t}/address/${e}`,"_blank")}handleAddConnection(e){V.a.setFilterByNamespace(e),Y.I.push("Connect")}getChainLabelInfo(e){return st[e]??{title:"Add Wallet",description:"Add your first wallet"}}isSmartAccount(e){if(!this.namespace)return!1;const t=this.user?.accounts?.find(e=>"smartAccount"===e.type);return!(!t||!e)&&Ge.y.isLowerCaseMatch(t.address,e)}getPlainAddress(){return this.caipAddress?u.w.getPlainAddress(this.caipAddress):void 0}getActiveConnections(e){const t=this.activeConnectorIds[e],{connections:i}=Ze.b.getConnectionsData(e),[o]=i.filter(e=>Ge.y.isLowerCaseMatch(e.connectorId,t));if(!t)return i;const a=e===H.o.CHAIN.BITCOIN,{address:n}=this.caipAddress?Fe.C.parseCaipAddress(this.caipAddress):{};let r=[...n?[n]:[]];return a&&o&&(r=o.accounts.map(e=>e.address)||[]),Ze.b.excludeConnectorAddressFromConnections({connectorId:t,addresses:r,connections:i})}hasAnyConnections(e){const t=this.getActiveConnections(e),{recentConnections:i}=Ze.b.getConnectionsData(e);return Boolean(this.caipAddress)||t.length>0||i.length>0}isAccountLoading(e,t){return Ge.y.isLowerCaseMatch(this.lastSelectedConnectorId,e)&&Ge.y.isLowerCaseMatch(this.lastSelectedAddress,t)&&this.isSwitching}getProfileContent(e){const{address:t,connections:i,connectorId:o,namespace:a}=e,[n]=i.filter(e=>Ge.y.isLowerCaseMatch(e.connectorId,o));if(a===H.o.CHAIN.BITCOIN&&n?.accounts.every(e=>"string"==typeof e.type))return this.getBitcoinProfileContent(n.accounts,t);const r=Ye.getAuthData({connectorId:o,accounts:[]});return[{address:t,tagLabel:"Active",tagVariant:"success",enableButton:!0,profileName:this.profileName,buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral",...r.isAuth?{description:this.isSmartAccount(t)?"Smart Account":"EOA Account"}:{}}]}getBitcoinProfileContent(e,t){const i=e.length>1,o=this.getPlainAddress();return e.map(e=>{const a=Ge.y.isLowerCaseMatch(e.address,o);let n="PAYMENT";return"ordinal"===e.type&&(n="ORDINALS"),{address:e.address,tagLabel:Ge.y.isLowerCaseMatch(e.address,t)?"Active":void 0,tagVariant:Ge.y.isLowerCaseMatch(e.address,t)?"success":void 0,enableButton:!0,...i?{label:n,alignItems:"flex-end",buttonType:a?"disconnect":"switch",buttonLabel:a?"Disconnect":"Switch",buttonVariant:a?"neutral":"accent"}:{alignItems:"center",buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral"}}})}removeScrollListener(){const e=this.shadowRoot?.querySelector(".wallet-list");e&&e.removeEventListener("scroll",()=>this.handleConnectListScroll())}handleConnectListScroll(){const e=this.shadowRoot?.querySelector(".wallet-list");e&&this.updateScrollOpacity(e)}isMultiWalletEnabled(){return Boolean(this.remoteFeatures?.multiWallet)}updateScrollOpacity(e){e.style.setProperty("--connect-scroll--top-opacity",h.z8.interpolate([0,50],at,e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",h.z8.interpolate([0,50],at,e.scrollHeight-e.scrollTop-e.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){const{connections:e}=Ze.b.getConnectionsData(this.namespace);0===e.length&&Y.I.reset("ProfileWallets")}this.requestUpdate()}};lt.styles=Xe,Qe([(0,a.wk)()],lt.prototype,"currentTab",void 0),Qe([(0,a.wk)()],lt.prototype,"namespace",void 0),Qe([(0,a.wk)()],lt.prototype,"namespaces",void 0),Qe([(0,a.wk)()],lt.prototype,"caipAddress",void 0),Qe([(0,a.wk)()],lt.prototype,"profileName",void 0),Qe([(0,a.wk)()],lt.prototype,"activeConnectorIds",void 0),Qe([(0,a.wk)()],lt.prototype,"lastSelectedAddress",void 0),Qe([(0,a.wk)()],lt.prototype,"lastSelectedConnectorId",void 0),Qe([(0,a.wk)()],lt.prototype,"isSwitching",void 0),Qe([(0,a.wk)()],lt.prototype,"caipNetwork",void 0),Qe([(0,a.wk)()],lt.prototype,"user",void 0),Qe([(0,a.wk)()],lt.prototype,"remoteFeatures",void 0),Qe([(0,a.wk)()],lt.prototype,"tabWidth",void 0),lt=Qe([(0,h.EM)("w3m-profile-wallets-view")],lt);var ct=i(7610);const dt=o.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var ut=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let pt=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,ct._)(),this.checked=void 0}render(){return o.qy`
      <label>
        <input
          ${(0,ct.K)(this.inputElementRef)}
          type="checkbox"
          ?checked=${(0,n.J)(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};pt.styles=[w.W5,w.fD,w.ck,dt],ut([(0,a.MZ)({type:Boolean})],pt.prototype,"checked",void 0),pt=ut([(0,b.E)("wui-switch")],pt);const ht=o.AH`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var wt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let gt=class extends o.WF{constructor(){super(...arguments),this.checked=void 0}render(){return o.qy`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${(0,n.J)(this.checked)}></wui-switch>
      </button>
    `}};gt.styles=[w.W5,w.fD,ht],wt([(0,a.MZ)({type:Boolean})],gt.prototype,"checked",void 0),gt=wt([(0,b.E)("wui-certified-switch")],gt);const bt=o.AH`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var ft=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let mt=class extends o.WF{constructor(){super(...arguments),this.icon="copy"}render(){return o.qy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};mt.styles=[w.W5,w.fD,bt],ft([(0,a.MZ)()],mt.prototype,"icon",void 0),mt=ft([(0,b.E)("wui-input-element")],mt),i(98848);const vt=o.AH`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let yt=class extends o.WF{constructor(){super(...arguments),this.inputComponentRef=(0,ct._)()}render(){return o.qy`
      <wui-input-text
        ${(0,ct.K)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};yt.styles=[w.W5,vt],yt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}([(0,b.E)("wui-search-bar")],yt);var xt=i(88249),kt=i(27512);i(41497);const Ct=o.AH`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var $t=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let It=class extends o.WF{constructor(){super(...arguments),this.type="wallet"}render(){return o.qy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?o.qy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${kt.a}`:o.qy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};It.styles=[w.W5,w.fD,Ct],$t([(0,a.MZ)()],It.prototype,"type",void 0),It=$t([(0,b.E)("wui-card-select-loader")],It);const Et=o.AH`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var St=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Wt=class extends o.WF{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&g.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&g.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&g.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&g.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&g.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&g.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&g.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&g.Z.getSpacingStyles(this.margin,3)};\n    `,o.qy`<slot></slot>`}};Wt.styles=[w.W5,Et],St([(0,a.MZ)()],Wt.prototype,"gridTemplateRows",void 0),St([(0,a.MZ)()],Wt.prototype,"gridTemplateColumns",void 0),St([(0,a.MZ)()],Wt.prototype,"justifyItems",void 0),St([(0,a.MZ)()],Wt.prototype,"alignItems",void 0),St([(0,a.MZ)()],Wt.prototype,"justifyContent",void 0),St([(0,a.MZ)()],Wt.prototype,"alignContent",void 0),St([(0,a.MZ)()],Wt.prototype,"columnGap",void 0),St([(0,a.MZ)()],Wt.prototype,"rowGap",void 0),St([(0,a.MZ)()],Wt.prototype,"gap",void 0),St([(0,a.MZ)()],Wt.prototype,"padding",void 0),St([(0,a.MZ)()],Wt.prototype,"margin",void 0),Wt=St([(0,b.E)("wui-grid")],Wt);var At=i(65042);i(35090),i(41684);const Tt=o.AH`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Rt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Ot=class extends o.WF{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const e="certified"===this.wallet?.badge_type;return o.qy`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${(0,n.J)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?o.qy`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():o.qy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,n.J)(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return o.qy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=c.$.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await c.$.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Ot.styles=Tt,Rt([(0,a.wk)()],Ot.prototype,"visible",void 0),Rt([(0,a.wk)()],Ot.prototype,"imageSrc",void 0),Rt([(0,a.wk)()],Ot.prototype,"imageLoading",void 0),Rt([(0,a.MZ)()],Ot.prototype,"wallet",void 0),Ot=Rt([(0,h.EM)("w3m-all-wallets-list-item")],Ot);const Nt=o.AH`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Mt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const Pt="local-paginator";let jt=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!xt.N.state.wallets.length,this.wallets=xt.N.state.wallets,this.recommended=xt.N.state.recommended,this.featured=xt.N.state.featured,this.filteredWallets=xt.N.state.filteredWallets,this.unsubscribe.push(xt.N.subscribeKey("wallets",e=>this.wallets=e),xt.N.subscribeKey("recommended",e=>this.recommended=e),xt.N.subscribeKey("featured",e=>this.featured=e),xt.N.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return o.qy`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const e=this.shadowRoot?.querySelector("wui-grid");e&&(await xt.N.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>o.qy`
        <wui-card-select-loader type="wallet" id=${(0,n.J)(t)}></wui-card-select-loader>
      `)}getWallets(){const e=[...this.featured,...this.recommended];this.filteredWallets?.length>0?e.push(...this.filteredWallets):e.push(...this.wallets);const t=u.w.uniqueBy(e,"id"),i=At.A.markWalletsAsInstalled(t);return At.A.markWalletsWithDisplayIndex(i)}walletsTemplate(){return this.getWallets().map(e=>o.qy`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:i,count:o}=xt.N.state,a=window.innerWidth<352?3:4,n=e.length+t.length;let r=Math.ceil(n/a)*a-n+a;return r-=e.length?i.length%a:0,0===o&&i.length>0?null:0===o||[...i,...e,...t].length<o?this.shimmerTemplate(r,Pt):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${Pt}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){const{page:e,count:t,wallets:i}=xt.N.state;i.length<t&&xt.N.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){V.a.selectWalletConnector(e)}};jt.styles=Nt,Mt([(0,a.wk)()],jt.prototype,"loading",void 0),Mt([(0,a.wk)()],jt.prototype,"wallets",void 0),Mt([(0,a.wk)()],jt.prototype,"recommended",void 0),Mt([(0,a.wk)()],jt.prototype,"featured",void 0),Mt([(0,a.wk)()],jt.prototype,"filteredWallets",void 0),jt=Mt([(0,h.EM)("w3m-all-wallets-list")],jt),i(93373);const qt=o.AH`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Dt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Lt=class extends o.WF{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?o.qy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await xt.N.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=xt.N.state,t=At.A.markWalletsAsInstalled(e);return e.length?o.qy`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${t.map(e=>o.qy`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:o.qy`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){V.a.selectWalletConnector(e)}};Lt.styles=qt,Dt([(0,a.wk)()],Lt.prototype,"loading",void 0),Dt([(0,a.MZ)()],Lt.prototype,"query",void 0),Dt([(0,a.MZ)()],Lt.prototype,"badge",void 0),Lt=Dt([(0,h.EM)("w3m-all-wallets-search")],Lt);var Ut=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let zt=class extends o.WF{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=u.w.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return o.qy`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?o.qy`<w3m-all-wallets-search
            query=${this.search}
            badge=${(0,n.J)(this.badge)}
          ></w3m-all-wallets-search>`:o.qy`<w3m-all-wallets-list badge=${(0,n.J)(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onClick(){"certified"!==this.badge?(this.badge="certified",J.P.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return u.w.isMobile()?o.qy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){Y.I.push("ConnectingWalletConnect")}};Ut([(0,a.wk)()],zt.prototype,"search",void 0),Ut([(0,a.wk)()],zt.prototype,"badge",void 0),zt=Ut([(0,h.EM)("w3m-all-wallets-view")],zt);var Ft=i(44290),Zt=i(51454);const Bt=o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var _t=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Ht=class extends o.WF{constructor(){super(...arguments),this.text="",this.disabled=!1,this.tabIdx=void 0}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,n.J)(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};Ht.styles=[w.W5,w.fD,Bt],_t([(0,a.MZ)()],Ht.prototype,"text",void 0),_t([(0,a.MZ)({type:Boolean})],Ht.prototype,"disabled",void 0),_t([(0,a.MZ)()],Ht.prototype,"tabIdx",void 0),Ht=_t([(0,b.E)("wui-list-button")],Ht);var Vt=i(69510);i(38913);const Kt=o.AH`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Jt=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Gt=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.formRef=(0,ct._)(),this.email="",this.loading=!1,this.error="",this.remoteFeatures=r.H.state.remoteFeatures,this.unsubscribe.push(r.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){const e=X.x.hasAnyConnection(H.o.CONNECTOR_ID.AUTH);return o.qy`
      <form ${(0,ct.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${(0,n.J)(this.tabIdx)}
          ?disabled=${e}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?o.qy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?o.qy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}templateError(){return this.error?o.qy`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(!H.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===s.W.state.activeChain)){const e=s.W.getFirstCaipNetworkSupportsAuthConnector();if(e)return void Y.I.push("SwitchNetwork",{network:e})}try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=V.a.getAuthConnector();if(!t)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:i}=await t.provider.connectEmail({email:this.email});if(j.E.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===i)j.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),Y.I.push("EmailVerifyOtp",{email:this.email});else if("VERIFY_DEVICE"===i)Y.I.push("EmailVerifyDevice",{email:this.email});else if("CONNECT"===i){const e=this.remoteFeatures?.multiWallet;await X.x.connectExternal(t,s.W.state.activeChain),e?(Y.I.replace("ProfileWallets"),J.P.showSuccess("New Wallet Added")):Y.I.replace("Account")}}catch(e){const t=u.w.parseError(e);t?.includes("Invalid email")?this.error="Invalid email. Try again.":J.P.showError(e)}finally{this.loading=!1}}onFocusEvent(){j.E.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};Gt.styles=Kt,Jt([(0,a.MZ)()],Gt.prototype,"tabIdx",void 0),Jt([(0,a.wk)()],Gt.prototype,"email",void 0),Jt([(0,a.wk)()],Gt.prototype,"loading",void 0),Jt([(0,a.wk)()],Gt.prototype,"error",void 0),Jt([(0,a.wk)()],Gt.prototype,"remoteFeatures",void 0),Gt=Jt([(0,h.EM)("w3m-email-login-widget")],Gt),i(98585),i(46524);var Yt=i(71655),Xt=i(71801);i(77518),i(70717);const Qt=o.AH`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var ei=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ti=class extends o.WF{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,n.J)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};ti.styles=[w.W5,w.fD,Qt],ei([(0,a.MZ)()],ti.prototype,"logo",void 0),ei([(0,a.MZ)({type:Boolean})],ti.prototype,"disabled",void 0),ei([(0,a.MZ)()],ti.prototype,"tabIdx",void 0),ti=ei([(0,b.E)("wui-logo-select")],ti);var ii=i(79835);const oi=o.AH`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var ai=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ni=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.remoteFeatures=r.H.state.remoteFeatures,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.isPwaLoading=!1,this.unsubscribe.push(V.a.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type)}),r.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){const e="explore"===this.walletGuide;let t=this.remoteFeatures?.socials;return!t&&e?(t=K.oU.DEFAULT_SOCIALS,this.renderTopViewContent(t)):t?this.renderTopViewContent(t):null}renderTopViewContent(e){return 2===e.length?o.qy` <wui-flex gap="xs">
        ${e.slice(0,2).map(e=>o.qy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,n.J)(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:o.qy` <wui-list-social
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      logo=${(0,n.J)(e[0])}
      align="center"
      name=${`Continue with ${e[0]}`}
      tabIdx=${(0,n.J)(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-social>`}bottomViewTemplate(){let e=this.remoteFeatures?.socials;const t="explore"===this.walletGuide;return(!this.authConnector||!e||0===e.length)&&t&&(e=K.oU.DEFAULT_SOCIALS),e?e.length<=2?null:e&&e.length>6?o.qy`<wui-flex gap="xs">
        ${e.slice(1,5).map(e=>o.qy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,n.J)(this.tabIdx)}
              ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${(0,n.J)(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:e?o.qy`<wui-flex gap="xs">
      ${e.slice(1,e.length).map(e=>o.qy`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${(0,n.J)(this.tabIdx)}
            ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null:null}onMoreSocialsClick(){Y.I.push("ConnectSocials")}async onSocialClick(e){if(!H.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===s.W.state.activeChain)){const e=s.W.getFirstCaipNetworkSupportsAuthConnector();if(e)return void Y.I.push("SwitchNetwork",{network:e})}e&&await(0,Xt.Up)(e)}async handlePwaFrameLoad(){if(u.w.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof ii.Y&&await this.authConnector.provider.init()}catch(e){Yt.h.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}hasConnection(){return X.x.hasAnyConnection(H.o.CONNECTOR_ID.AUTH)}};ni.styles=oi,ai([(0,a.MZ)()],ni.prototype,"walletGuide",void 0),ai([(0,a.MZ)()],ni.prototype,"tabIdx",void 0),ai([(0,a.wk)()],ni.prototype,"connectors",void 0),ai([(0,a.wk)()],ni.prototype,"remoteFeatures",void 0),ai([(0,a.wk)()],ni.prototype,"authConnector",void 0),ai([(0,a.wk)()],ni.prototype,"isPwaLoading",void 0),ni=ai([(0,h.EM)("w3m-social-login-widget")],ni),i(43083);const ri=o.AH`
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var si=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let li=class extends o.WF{constructor(){super(...arguments),this.walletGuide="get-started"}render(){return"explore"===this.walletGuide?o.qy`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`:o.qy`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${["s","0","s","0"]}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${(0,n.J)(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`}onGetStarted(){Y.I.push("Create")}};li.styles=ri,si([(0,a.MZ)()],li.prototype,"tabIdx",void 0),si([(0,a.MZ)()],li.prototype,"walletGuide",void 0),li=si([(0,h.EM)("w3m-wallet-guide")],li);const ci=o.AH`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
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

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var di=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ui=class extends o.WF{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<4;return o.qy`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>o.qy`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${(0,n.J)(t)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(4-this.walletImages.length)].map(()=>o.qy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};ui.styles=[w.W5,ci],di([(0,a.MZ)({type:Array})],ui.prototype,"walletImages",void 0),ui=di([(0,b.E)("wui-all-wallets-image")],ui);const pi=o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var hi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let wi=class extends o.WF{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,n.J)(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?o.qy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?o.qy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?o.qy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:o.qy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?o.qy`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?o.qy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?o.qy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};wi.styles=[w.W5,w.fD,pi],hi([(0,a.MZ)({type:Array})],wi.prototype,"walletImages",void 0),hi([(0,a.MZ)()],wi.prototype,"imageSrc",void 0),hi([(0,a.MZ)()],wi.prototype,"name",void 0),hi([(0,a.MZ)()],wi.prototype,"tagLabel",void 0),hi([(0,a.MZ)()],wi.prototype,"tagVariant",void 0),hi([(0,a.MZ)()],wi.prototype,"icon",void 0),hi([(0,a.MZ)()],wi.prototype,"walletIcon",void 0),hi([(0,a.MZ)()],wi.prototype,"tabIdx",void 0),hi([(0,a.MZ)({type:Boolean})],wi.prototype,"installed",void 0),hi([(0,a.MZ)({type:Boolean})],wi.prototype,"disabled",void 0),hi([(0,a.MZ)({type:Boolean})],wi.prototype,"showAllWallets",void 0),hi([(0,a.MZ)({type:Boolean})],wi.prototype,"loading",void 0),hi([(0,a.MZ)({type:String})],wi.prototype,"loadingSpinnerColor",void 0),wi=hi([(0,b.E)("wui-list-wallet")],wi);var gi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let bi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.count=xt.N.state.count,this.filteredCount=xt.N.state.filteredWallets.length,this.isFetchingRecommendedWallets=xt.N.state.isFetchingRecommendedWallets,this.unsubscribe.push(V.a.subscribeKey("connectors",e=>this.connectors=e),xt.N.subscribeKey("count",e=>this.count=e),xt.N.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),xt.N.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(e=>"walletConnect"===e.id),{allWallets:t}=r.H.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!u.w.isMobile())return null;const i=xt.N.state.featured.length,a=this.count+i,s=a<10?a:10*Math.floor(a/10),l=this.filteredCount>0?this.filteredCount:s;let c=`${l}`;this.filteredCount>0?c=`${this.filteredCount}`:l<a&&(c=`${l}+`);const d=X.x.hasAnyConnection(H.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${c}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${(0,n.J)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
        ?disabled=${d}
      ></wui-list-wallet>
    `}onAllWallets(){j.E.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),Y.I.push("AllWallets")}};gi([(0,a.MZ)()],bi.prototype,"tabIdx",void 0),gi([(0,a.wk)()],bi.prototype,"connectors",void 0),gi([(0,a.wk)()],bi.prototype,"count",void 0),gi([(0,a.wk)()],bi.prototype,"filteredCount",void 0),gi([(0,a.wk)()],bi.prototype,"isFetchingRecommendedWallets",void 0),bi=gi([(0,h.EM)("w3m-all-wallets-widget")],bi);var fi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let mi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.connections=X.x.state.connections,this.unsubscribe.push(V.a.subscribeKey("connectors",e=>this.connectors=e),X.x.subscribeKey("connections",e=>this.connections=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(e=>"ANNOUNCED"===e.type);return e?.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter($e.g.showConnector).map(e=>{const t=(this.connections.get(e.chain)??[]).some(t=>Ge.y.isLowerCaseMatch(t.connectorId,e.id));return o.qy`
            <wui-list-wallet
              imageSrc=${(0,n.J)(c.$.getConnectorImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnector(e)}
              tagVariant=${t?"shade":"success"}
              tagLabel=${t?"connected":"installed"}
              data-testid=${`wallet-selector-${e.id}`}
              .installed=${!0}
              tabIdx=${(0,n.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){"walletConnect"===e.id?u.w.isMobile()?Y.I.push("AllWallets"):Y.I.push("ConnectingWalletConnect"):Y.I.push("ConnectingExternal",{connector:e})}};fi([(0,a.MZ)()],mi.prototype,"tabIdx",void 0),fi([(0,a.wk)()],mi.prototype,"connectors",void 0),fi([(0,a.wk)()],mi.prototype,"connections",void 0),mi=fi([(0,h.EM)("w3m-connect-announced-widget")],mi);var vi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let yi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.loading=!1,this.unsubscribe.push(V.a.subscribeKey("connectors",e=>this.connectors=e)),u.w.isTelegram()&&u.w.isIos()&&(this.loading=!X.x.state.wcUri,this.unsubscribe.push(X.x.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=r.H.state;if(!e?.length)return this.style.cssText="display: none",null;const t=this.filterOutDuplicateWallets(e),i=X.x.hasAnyConnection(H.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`<wui-flex flexDirection="column" gap="xs">
      ${t.map(e=>o.qy`
          <wui-list-wallet
            imageSrc=${(0,n.J)(c.$.getWalletImage(e))}
            name=${e.name??"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            data-testid=${`wallet-selector-${e.id}`}
            tabIdx=${(0,n.J)(this.tabIdx)}
            ?loading=${this.loading}
            ?disabled=${i}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const t=ae.i.getRecentWallets(),i=this.connectors.map(e=>e.info?.rdns).filter(Boolean),o=t.map(e=>e.rdns).filter(Boolean),a=i.concat(o);if(a.includes("io.metamask.mobile")&&u.w.isMobile()){const e=a.indexOf("io.metamask.mobile");a[e]="io.metamask"}return e.filter(e=>!a.includes(String(e?.rdns)))}onConnectWallet(e){this.loading||Y.I.push("ConnectingWalletConnect",{wallet:e})}};vi([(0,a.MZ)()],yi.prototype,"tabIdx",void 0),vi([(0,a.wk)()],yi.prototype,"connectors",void 0),vi([(0,a.wk)()],yi.prototype,"loading",void 0),yi=vi([(0,h.EM)("w3m-connect-custom-widget")],yi);var xi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ki=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.unsubscribe.push(V.a.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(e=>"EXTERNAL"===e.type).filter($e.g.showConnector).filter(e=>e.id!==H.o.CONNECTOR_ID.COINBASE_SDK);if(!e?.length)return this.style.cssText="display: none",null;const t=X.x.hasAnyConnection(H.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,n.J)(c.$.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,n.J)(this.tabIdx)}
              ?disabled=${t}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(e){Y.I.push("ConnectingExternal",{connector:e})}};xi([(0,a.MZ)()],ki.prototype,"tabIdx",void 0),xi([(0,a.wk)()],ki.prototype,"connectors",void 0),ki=xi([(0,h.EM)("w3m-connect-external-widget")],ki);var Ci=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let $i=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){if(!this.wallets.length)return this.style.cssText="display: none",null;const e=X.x.hasAnyConnection(H.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(t=>o.qy`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${(0,n.J)(c.$.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${(0,n.J)(this.tabIdx)}
              ?disabled=${e}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){V.a.selectWalletConnector(e)}};Ci([(0,a.MZ)()],$i.prototype,"tabIdx",void 0),Ci([(0,a.MZ)()],$i.prototype,"wallets",void 0),$i=Ci([(0,h.EM)("w3m-connect-featured-widget")],$i);var Ii=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Ei=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=[],this.connections=X.x.state.connections,this.unsubscribe.push(X.x.subscribeKey("connections",e=>this.connections=e))}render(){const e=this.connectors.filter($e.g.showConnector);return 0===e.length?(this.style.cssText="display: none",null):o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>{const t=(this.connections.get(e.chain)??[]).some(t=>Ge.y.isLowerCaseMatch(t.connectorId,e.id));return o.qy`
            <wui-list-wallet
              imageSrc=${(0,n.J)(c.$.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant=${t?"shade":"success"}
              tagLabel=${t?"connected":"installed"}
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,n.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(e){V.a.setActiveConnector(e),Y.I.push("ConnectingExternal",{connector:e})}};Ii([(0,a.MZ)()],Ei.prototype,"tabIdx",void 0),Ii([(0,a.MZ)()],Ei.prototype,"connectors",void 0),Ii([(0,a.wk)()],Ei.prototype,"connections",void 0),Ei=Ii([(0,h.EM)("w3m-connect-injected-widget")],Ei);var Si=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Wi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.unsubscribe.push(V.a.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(e=>"MULTI_CHAIN"===e.type&&"WalletConnect"!==e.name);return e?.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,n.J)(c.$.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,n.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){V.a.setActiveConnector(e),Y.I.push("ConnectingMultiChain")}};Si([(0,a.MZ)()],Wi.prototype,"tabIdx",void 0),Si([(0,a.wk)()],Wi.prototype,"connectors",void 0),Wi=Si([(0,h.EM)("w3m-connect-multi-chain-widget")],Wi);var Ai=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Ti=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.loading=!1,this.unsubscribe.push(V.a.subscribeKey("connectors",e=>this.connectors=e)),u.w.isTelegram()&&u.w.isIos()&&(this.loading=!X.x.state.wcUri,this.unsubscribe.push(X.x.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const e=ae.i.getRecentWallets().filter(e=>!At.A.isExcluded(e)).filter(e=>!this.hasWalletConnector(e)).filter(e=>this.isWalletCompatibleWithCurrentChain(e));if(!e.length)return this.style.cssText="display: none",null;const t=X.x.hasAnyConnection(H.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,n.J)(c.$.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${(0,n.J)(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${t}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){this.loading||V.a.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some(t=>t.id===e.id||t.name===e.name)}isWalletCompatibleWithCurrentChain(e){const t=s.W.state.activeChain;return!t||!e.chains||e.chains.some(e=>{const i=e.split(":")[0];return t===i})}};Ai([(0,a.MZ)()],Ti.prototype,"tabIdx",void 0),Ai([(0,a.wk)()],Ti.prototype,"connectors",void 0),Ai([(0,a.wk)()],Ti.prototype,"loading",void 0),Ti=Ai([(0,h.EM)("w3m-connect-recent-widget")],Ti);var Ri=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Oi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,u.w.isTelegram()&&u.w.isIos()&&(this.loading=!X.x.state.wcUri,this.unsubscribe.push(X.x.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const{connectors:e}=V.a.state,{customWallets:t,featuredWalletIds:i}=r.H.state,a=ae.i.getRecentWallets(),s=e.find(e=>"walletConnect"===e.id),l=e.filter(e=>"INJECTED"===e.type||"ANNOUNCED"===e.type||"MULTI_CHAIN"===e.type).filter(e=>"Browser Wallet"!==e.name);if(!s)return null;if(i||t||!this.wallets.length)return this.style.cssText="display: none",null;const d=l.length+a.length,u=Math.max(0,2-d),p=At.A.filterOutDuplicateWallets(this.wallets).slice(0,u);if(!p.length)return this.style.cssText="display: none",null;const h=X.x.hasAnyConnection(H.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${p.map(e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,n.J)(c.$.getWalletImage(e))}
              name=${e?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${(0,n.J)(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${h}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){if(this.loading)return;const t=V.a.getConnector({id:e.id,rdns:e.rdns});t?Y.I.push("ConnectingExternal",{connector:t}):Y.I.push("ConnectingWalletConnect",{wallet:e})}};Ri([(0,a.MZ)()],Oi.prototype,"tabIdx",void 0),Ri([(0,a.MZ)()],Oi.prototype,"wallets",void 0),Ri([(0,a.wk)()],Oi.prototype,"loading",void 0),Oi=Ri([(0,h.EM)("w3m-connect-recommended-widget")],Oi);var Ni=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Mi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.connectorImages=l.j.state.connectorImages,this.unsubscribe.push(V.a.subscribeKey("connectors",e=>this.connectors=e),l.j.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(u.w.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(e=>"walletConnect"===e.id);if(!e)return this.style.cssText="display: none",null;const t=e.imageUrl||this.connectorImages[e?.imageId??""],i=X.x.hasAnyConnection(H.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-list-wallet
        imageSrc=${(0,n.J)(t)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${(0,n.J)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
        ?disabled=${i}
      >
      </wui-list-wallet>
    `}onConnector(e){V.a.setActiveConnector(e),Y.I.push("ConnectingWalletConnect")}};Ni([(0,a.MZ)()],Mi.prototype,"tabIdx",void 0),Ni([(0,a.wk)()],Mi.prototype,"connectors",void 0),Ni([(0,a.wk)()],Mi.prototype,"connectorImages",void 0),Mi=Ni([(0,h.EM)("w3m-connect-walletconnect-widget")],Mi);const Pi=o.AH`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var ji=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let qi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.recommended=xt.N.state.recommended,this.featured=xt.N.state.featured,this.unsubscribe.push(V.a.subscribeKey("connectors",e=>this.connectors=e),xt.N.subscribeKey("recommended",e=>this.recommended=e),xt.N.subscribeKey("featured",e=>this.featured=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:e,recent:t,announced:i,injected:a,multiChain:r,recommended:s,featured:l,external:c}=$e.g.getConnectorsByType(this.connectors,this.recommended,this.featured);return $e.g.getConnectorTypeOrder({custom:e,recent:t,announced:i,injected:a,multiChain:r,recommended:s,featured:l,external:c}).map(e=>{switch(e){case"injected":return o.qy`
            ${r.length?o.qy`<w3m-connect-multi-chain-widget
                  tabIdx=${(0,n.J)(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${i.length?o.qy`<w3m-connect-announced-widget
                  tabIdx=${(0,n.J)(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${a.length?o.qy`<w3m-connect-injected-widget
                  .connectors=${a}
                  tabIdx=${(0,n.J)(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return o.qy`<w3m-connect-walletconnect-widget
            tabIdx=${(0,n.J)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return o.qy`<w3m-connect-recent-widget
            tabIdx=${(0,n.J)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return o.qy`<w3m-connect-featured-widget
            .wallets=${l}
            tabIdx=${(0,n.J)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return o.qy`<w3m-connect-custom-widget
            tabIdx=${(0,n.J)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return o.qy`<w3m-connect-external-widget
            tabIdx=${(0,n.J)(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return o.qy`<w3m-connect-recommended-widget
            .wallets=${s}
            tabIdx=${(0,n.J)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${e}`),null}})}};qi.styles=Pi,ji([(0,a.MZ)()],qi.prototype,"tabIdx",void 0),ji([(0,a.wk)()],qi.prototype,"connectors",void 0),ji([(0,a.wk)()],qi.prototype,"recommended",void 0),ji([(0,a.wk)()],qi.prototype,"featured",void 0),qi=ji([(0,h.EM)("w3m-connector-list")],qi);var Di=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Li=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0}render(){return o.qy`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${(0,n.J)(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${(0,n.J)(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};Di([(0,a.MZ)()],Li.prototype,"tabIdx",void 0),Li=Di([(0,h.EM)("w3m-wallet-login-list")],Li);const Ui=o.AH`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var zi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Fi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.connectors=V.a.state.connectors,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.features=r.H.state.features,this.remoteFeatures=r.H.state.remoteFeatures,this.enableWallets=r.H.state.enableWallets,this.noAdapters=s.W.state.noAdapters,this.walletGuide="get-started",this.checked=Zt.o.state.isLegalCheckboxChecked,this.isEmailEnabled=this.remoteFeatures?.email&&!s.W.state.noAdapters,this.isSocialEnabled=this.remoteFeatures?.socials&&this.remoteFeatures.socials.length>0&&!s.W.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(V.a.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),r.H.subscribeKey("features",e=>{this.features=e}),r.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),r.H.subscribeKey("enableWallets",e=>this.enableWallets=e),s.W.subscribeKey("noAdapters",e=>this.setEmailAndSocialEnableCheck(e,this.remoteFeatures)),Zt.o.subscribeKey("isLegalCheckboxChecked",e=>this.checked=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect();const e=this.shadowRoot?.querySelector(".connect");e?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){const e=this.shadowRoot?.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),this.resizeObserver?.observe(e),this.handleConnectListScroll())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=r.H.state,i=r.H.state.features?.legalCheckbox,a=Boolean(e||t)&&Boolean(i)&&"get-started"===this.walletGuide&&!this.checked,n={connect:!0,disabled:a},s=r.H.state.enableWalletGuide,l=this.enableWallets,c=this.isSocialEnabled||this.authConnector,d=a?-1:void 0;return o.qy`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${(0,ze.H)(n)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${c&&l&&s&&"get-started"===this.walletGuide?["3xs","s","0","s"]:["3xs","s","s","s"]}
          >
            ${this.renderConnectMethod(d)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(a)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=t?.email&&!e,this.isSocialEnabled=t?.socials&&t.socials.length>0&&!e,this.remoteFeatures=t,this.noAdapters=e}checkIfAuthEnabled(e){const t=e.filter(e=>e.type===Vt.o.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return H.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}renderConnectMethod(e){const t=At.A.getConnectOrderMethod(this.features,this.connectors);return o.qy`${t.map((t,i)=>{switch(t){case"email":return o.qy`${this.emailTemplate(e)} ${this.separatorTemplate(i,"email")}`;case"social":return o.qy`${this.socialListTemplate(e)}
          ${this.separatorTemplate(i,"social")}`;case"wallet":return o.qy`${this.walletListTemplate(e)}
          ${this.separatorTemplate(i,"wallet")}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){const t=At.A.getConnectOrderMethod(this.features,this.connectors)[e+1];if(t)return this.checkMethodEnabled(t)?t:this.checkIsThereNextMethod(e+1)}separatorTemplate(e,t){const i=this.checkIsThereNextMethod(e),a="explore"===this.walletGuide;switch(t){case"wallet":return this.enableWallets&&i&&!a?o.qy`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const e="social"===i;return this.isAuthEnabled&&this.isEmailEnabled&&!e&&i?o.qy`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const e="email"===i;return this.isAuthEnabled&&this.isSocialEnabled&&!e&&i?o.qy`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return this.isEmailEnabled&&this.isAuthEnabled?o.qy`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,n.J)(e)}
    ></w3m-email-login-widget>`:null}socialListTemplate(e){return this.isSocialEnabled&&this.isAuthEnabled?o.qy`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,n.J)(e)}
    ></w3m-social-login-widget>`:null}walletListTemplate(e){const t=this.enableWallets,i=!1===this.features?.emailShowWallets,a=this.features?.collapseWallets,r=i||a;return t?(u.w.isTelegram()&&(u.w.isSafari()||u.w.isIos())&&X.x.connectWalletConnect().catch(e=>({})),"explore"===this.walletGuide?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&r?o.qy`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${(0,n.J)(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:o.qy`<w3m-wallet-login-list tabIdx=${(0,n.J)(e)}></w3m-wallet-login-list>`):null}guideTemplate(e=!1){if(!r.H.state.enableWalletGuide)return null;const t={guide:!0,disabled:e},i=e?-1:void 0;return this.authConnector||this.isSocialEnabled?o.qy`
      ${"explore"!==this.walletGuide||s.W.state.noAdapters?null:o.qy`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>`}
      <w3m-wallet-guide
        class=${(0,ze.H)(t)}
        tabIdx=${(0,n.J)(i)}
        walletGuide=${this.walletGuide}
      ></w3m-wallet-guide>
    `:null}legalCheckboxTemplate(){return"explore"===this.walletGuide?null:o.qy`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){const e=this.shadowRoot?.querySelector(".connect");e&&(e.scrollHeight>470?(e.style.setProperty("--connect-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,\n          black 40px,\n          black calc(100% - 40px),\n          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%\n        )"),e.style.setProperty("--connect-scroll--top-opacity",h.z8.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",h.z8.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0")))}onContinueWalletClick(){Y.I.push("ConnectWallets")}};Fi.styles=Ui,zi([(0,Ft.w)()],Fi.prototype,"connectors",void 0),zi([(0,Ft.w)()],Fi.prototype,"authConnector",void 0),zi([(0,Ft.w)()],Fi.prototype,"features",void 0),zi([(0,Ft.w)()],Fi.prototype,"remoteFeatures",void 0),zi([(0,Ft.w)()],Fi.prototype,"enableWallets",void 0),zi([(0,Ft.w)()],Fi.prototype,"noAdapters",void 0),zi([(0,a.MZ)()],Fi.prototype,"walletGuide",void 0),zi([(0,Ft.w)()],Fi.prototype,"checked",void 0),zi([(0,Ft.w)()],Fi.prototype,"isEmailEnabled",void 0),zi([(0,Ft.w)()],Fi.prototype,"isSocialEnabled",void 0),zi([(0,Ft.w)()],Fi.prototype,"isAuthEnabled",void 0),Fi=zi([(0,h.EM)("w3m-connect-view")],Fi);var Zi=i(68996);i(92983),i(85999);const Bi=o.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var _i=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Hi=class extends o.WF{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return o.qy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Hi.styles=[w.W5,w.fD,Bi],_i([(0,a.MZ)({type:Boolean})],Hi.prototype,"disabled",void 0),_i([(0,a.MZ)()],Hi.prototype,"label",void 0),_i([(0,a.MZ)()],Hi.prototype,"buttonLabel",void 0),Hi=_i([(0,b.E)("wui-cta-button")],Hi);const Vi=o.AH`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Ki=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Ji=class extends o.WF{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:i,chrome_store:a,homepage:n}=this.wallet,r=u.w.isMobile(),s=u.w.isIos(),l=u.w.isAndroid(),c=[t,i,n,a].filter(Boolean).length>1,d=h.Zv.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!r?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>Y.I.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&n?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&l?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&u.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&u.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&u.w.openHref(this.wallet.homepage,"_blank")}};Ji.styles=[Vi],Ki([(0,a.MZ)({type:Object})],Ji.prototype,"wallet",void 0),Ji=Ki([(0,h.EM)("w3m-mobile-download-links")],Ji);const Gi=o.AH`
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

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
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
`;var Yi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};class Xi extends o.WF{constructor(){super(),this.wallet=Y.I.state.data?.wallet,this.connector=Y.I.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=c.$.getWalletImage(this.wallet)??c.$.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=X.x.state.wcUri,this.error=X.x.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(X.x.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),X.x.subscribeKey("wcError",e=>this.error=e)),(u.w.isTelegram()||u.w.isSafari())&&u.w.isIos()&&X.x.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),X.x.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t="";return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t="Connection declined")),o.qy`
      <wui-flex
        data-error=${(0,n.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,n.J)(this.imageSrc)}></wui-wallet-image>

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
          <wui-text
            align="center"
            variant="paragraph-500"
            color=${this.error?"error-100":"fg-100"}
          >
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?o.qy`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?o.qy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){X.x.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){const e=Zi.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(u.w.copyToClopboard(this.uri),J.P.showSuccess("Link copied"))}catch{J.P.showError("Failed to copy")}}}Xi.styles=Gi,Yi([(0,a.wk)()],Xi.prototype,"isRetrying",void 0),Yi([(0,a.wk)()],Xi.prototype,"uri",void 0),Yi([(0,a.wk)()],Xi.prototype,"error",void 0),Yi([(0,a.wk)()],Xi.prototype,"ready",void 0),Yi([(0,a.wk)()],Xi.prototype,"showRetry",void 0),Yi([(0,a.wk)()],Xi.prototype,"label",void 0),Yi([(0,a.wk)()],Xi.prototype,"secondaryBtnLabel",void 0),Yi([(0,a.wk)()],Xi.prototype,"secondaryLabel",void 0),Yi([(0,a.wk)()],Xi.prototype,"isLoading",void 0),Yi([(0,a.MZ)({type:Boolean})],Xi.prototype,"isMobile",void 0),Yi([(0,a.MZ)()],Xi.prototype,"onRetry",void 0);let Qi=class extends Xi{constructor(){if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=X.x.getConnections(this.connector?.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=r.H.state.remoteFeatures,this.currentActiveConnectorId=V.a.state.activeConnectorIds[this.connector?.chain],!this.connector)throw new Error("w3m-connecting-view: No connector provided");const e=this.connector?.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),j.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser",displayIndex:this.wallet?.display_index}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(V.a.subscribeKey("activeConnectorIds",t=>{const i=t[e],o=this.remoteFeatures?.multiWallet;i!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&o?(Y.I.replace("ProfileWallets"),J.P.showSuccess("New Wallet Added")):p.W.close())}),X.x.subscribeKey("connections",this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;this.connector.id===H.o.CONNECTOR_ID.COINBASE_SDK&&this.error||(await X.x.connectExternal(this.connector,this.connector.chain),j.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}}catch(e){j.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}onConnectionsChange(e){if(this.connector?.chain&&e.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){const t=e.get(this.connector.chain)??[],i=this.remoteFeatures?.multiWallet;if(0===t.length)Y.I.replace("Connect");else{const e=Ze.b.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(e=>e.accounts),o=Ze.b.getConnectionsByConnectorId(t,this.connector.id).flatMap(e=>e.accounts);0===o.length?this.hasMultipleConnections&&i?(Y.I.replace("ProfileWallets"),J.P.showSuccess("Wallet deleted")):p.W.close():!e.every(e=>o.some(t=>Ge.y.isLowerCaseMatch(e.address,t.address)))&&i&&Y.I.replace("ProfileWallets")}}}isAlreadyConnected(e){return Boolean(e)&&this.connectionsByNamespace.some(t=>Ge.y.isLowerCaseMatch(t.connectorId,e.id))}};Qi=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}([(0,h.EM)("w3m-connecting-external-view")],Qi);const eo=o.AH`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var to=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let io=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.activeConnector=V.a.state.activeConnector,this.unsubscribe.push(V.a.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0,n.J)(c.$.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map(e=>e.name?o.qy`
            <wui-list-wallet
              imageSrc=${(0,n.J)(c.$.getChainImage(e.chain))}
              name=${H.o.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              data-testid="wui-list-chain-${e.chain}"
            ></wui-list-wallet>
          `:null)}onConnector(e){const t=this.activeConnector?.connectors?.find(t=>t.chain===e.chain);t?"walletConnect"===t.id?u.w.isMobile()?Y.I.push("AllWallets"):Y.I.push("ConnectingWalletConnect"):Y.I.push("ConnectingExternal",{connector:t}):J.P.showError("Failed to find connector")}};io.styles=eo,to([(0,a.wk)()],io.prototype,"activeConnector",void 0),io=to([(0,h.EM)("w3m-connecting-multi-chain-view")],io);var oo=i(95839),ao=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let no=class extends o.WF{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return o.qy`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};ao([(0,a.MZ)({type:Array})],no.prototype,"platforms",void 0),ao([(0,a.MZ)()],no.prototype,"onSelectPlatfrom",void 0),no=ao([(0,h.EM)("w3m-connecting-header")],no);let ro=class extends Xi{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),j.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=V.a.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name);if(!t)throw new Error("w3m-connecting-wc-browser: No connector found");await X.x.connectExternal(t,t.chain),p.W.close(),j.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){j.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};ro=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}([(0,h.EM)("w3m-connecting-wc-browser")],ro);let so=class extends Xi{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),j.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:i,href:o}=u.w.formatNativeUrl(e,this.uri);X.x.setWcLinking({name:t,href:o}),X.x.setRecentWallet(this.wallet),u.w.openHref(i,"_blank")}catch{this.error=!0}}};so=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}([(0,h.EM)("w3m-connecting-wc-desktop")],so);var lo=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let co=class extends Xi{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=r.H.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,link_mode:t,name:i}=this.wallet,{redirect:o,redirectUniversalLink:a,href:n}=u.w.formatNativeUrl(e,this.uri,t);this.redirectDeeplink=o,this.redirectUniversalLink=a,this.target=u.w.isIframe()?"_top":"_self",X.x.setWcLinking({name:i,href:n}),X.x.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?u.w.openHref(this.redirectUniversalLink,this.target):u.w.openHref(this.redirectDeeplink,this.target)}catch(e){j.E.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=K.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(X.x.subscribeKey("wcUri",()=>{this.onHandleURI()})),j.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){X.x.setWcError(!1),this.onConnect?.()}};lo([(0,a.wk)()],co.prototype,"redirectDeeplink",void 0),lo([(0,a.wk)()],co.prototype,"redirectUniversalLink",void 0),lo([(0,a.wk)()],co.prototype,"target",void 0),lo([(0,a.wk)()],co.prototype,"preferUniversalLinks",void 0),lo([(0,a.wk)()],co.prototype,"isLoading",void 0),co=lo([(0,h.EM)("w3m-connecting-wc-mobile")],co),i(66283),i(17909);const uo=o.AH`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let po=class extends Xi{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),j.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return X.x.setWcLinking(void 0),X.x.setRecentWallet(this.wallet),o.qy` <wui-qr-code
      size=${e}
      theme=${Zi.W.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,n.J)(c.$.getWalletImage(this.wallet))}
      color=${(0,n.J)(Zi.W.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,n.J)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return o.qy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};po.styles=uo,po=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}([(0,h.EM)("w3m-connecting-wc-qrcode")],po);let ho=class extends o.WF{constructor(){if(super(),this.wallet=Y.I.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");j.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index}})}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,n.J)(c.$.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};ho=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}([(0,h.EM)("w3m-connecting-wc-unsupported")],ho);var wo=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let go=class extends Xi{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=K.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(X.x.subscribeKey("wcUri",()=>{this.updateLoadingState()})),j.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:i,href:o}=u.w.formatUniversalUrl(e,this.uri);X.x.setWcLinking({name:t,href:o}),X.x.setRecentWallet(this.wallet),u.w.openHref(i,"_blank")}catch{this.error=!0}}};wo([(0,a.wk)()],go.prototype,"isLoading",void 0),go=wo([(0,h.EM)("w3m-connecting-wc-web")],go);var bo=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let fo=class extends o.WF{constructor(){super(),this.wallet=Y.I.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(r.H.state.siwx),this.remoteFeatures=r.H.state.remoteFeatures,this.displayBranding=!0,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(r.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding&&this.displayBranding?o.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if("browser"!==this.platform&&(!r.H.state.manualWCControl||e))try{const{wcPairingExpiry:t,status:i}=X.x.state;if(e||r.H.state.enableEmbedded||u.w.isPairingExpired(t)||"connecting"===i){const e=X.x.getConnections(s.W.state.activeChain),t=this.remoteFeatures?.multiWallet,i=e.length>0;await X.x.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(i&&t?(Y.I.replace("ProfileWallets"),J.P.showSuccess("New Wallet Added")):p.W.close())}}catch(e){if(e instanceof Error&&e.message.includes("An error occurred when attempting to switch chain")&&!r.H.state.enableNetworkSwitch&&s.W.state.activeChain)return s.W.setActiveCaipNetwork(oo.R.getUnsupportedNetwork(`${s.W.state.activeChain}:${s.W.state.activeCaipNetwork?.id}`)),void s.W.showUnsupportedChainUI();j.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),X.x.setWcError(!0),J.P.showError(e.message??"Connection error"),X.x.resetWcConnection(),Y.I.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:i,injected:o,rdns:a}=this.wallet,n=o?.map(({injected_id:e})=>e).filter(Boolean),l=[...a?[a]:n??[]],c=!r.H.state.isUniversalProvider&&l.length,d=e,p=i,h=X.x.checkInstalled(l),w=c&&h,g=t&&!u.w.isMobile();w&&!s.W.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(u.w.isMobile()?"mobile":"qrcode"),p&&this.platforms.push("web"),g&&this.platforms.push("desktop"),w||!c||s.W.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return o.qy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return o.qy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return o.qy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return o.qy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return o.qy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return o.qy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?o.qy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};bo([(0,a.wk)()],fo.prototype,"platform",void 0),bo([(0,a.wk)()],fo.prototype,"platforms",void 0),bo([(0,a.wk)()],fo.prototype,"isSiwxEnabled",void 0),bo([(0,a.wk)()],fo.prototype,"remoteFeatures",void 0),bo([(0,a.MZ)({type:Boolean})],fo.prototype,"displayBranding",void 0),fo=bo([(0,h.EM)("w3m-connecting-wc-view")],fo);var mo=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let vo=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.isMobile=u.w.isMobile(),this.remoteFeatures=r.H.state.remoteFeatures,this.unsubscribe.push(r.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){const{featured:e,recommended:t}=xt.N.state,{customWallets:i}=r.H.state,a=ae.i.getRecentWallets(),n=e.length||t.length||i?.length||a.length;return o.qy`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${n?o.qy`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return o.qy`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
        <w3m-connecting-wc-view .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?o.qy` <wui-flex flexDirection="column" .padding=${["3xs","0","3xs","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};mo([(0,a.wk)()],vo.prototype,"isMobile",void 0),mo([(0,a.wk)()],vo.prototype,"remoteFeatures",void 0),vo=mo([(0,h.EM)("w3m-connecting-wc-basic-view")],vo);var yo=i(45839);const xo=o.AH`
  .continue-button-container {
    width: 100%;
  }
`;var ko=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Co=class extends o.WF{constructor(){super(...arguments),this.loading=!1}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{u.w.openHref(yo.T.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return o.qy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return o.qy`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){Y.I.push("RegisterAccountName"),j.E.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:(0,G.lj)(s.W.state.activeChain)===oe.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}};Co.styles=xo,ko([(0,a.wk)()],Co.prototype,"loading",void 0),Co=ko([(0,h.EM)("w3m-choose-account-name-view")],Co);let $o=class extends o.WF{constructor(){super(...arguments),this.wallet=Y.I.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return o.qy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?o.qy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?o.qy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?o.qy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?o.qy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&u.w.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&u.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&u.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&u.w.openHref(this.wallet.homepage,"_blank")}};$o=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}([(0,h.EM)("w3m-downloads-view")],$o);let Io=class extends o.WF{render(){return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{u.w.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=xt.N.state,{customWallets:i}=r.H.state;return[...t,...i??[],...e].slice(0,4).map(e=>o.qy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,n.J)(c.$.getWalletImage(e))}
          @click=${()=>{u.w.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};Io=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}([(0,h.EM)("w3m-get-wallet-view")],Io),i(89285);var Eo=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let So=class extends o.WF{constructor(){super(...arguments),this.data=[]}render(){return o.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>o.qy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>o.qy`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};Eo([(0,a.MZ)({type:Array})],So.prototype,"data",void 0),So=Eo([(0,h.EM)("w3m-help-widget")],So);const Wo=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Ao=class extends o.WF{render(){return o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Wo}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){j.E.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),Y.I.push("GetWallet")}};Ao=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}([(0,h.EM)("w3m-what-is-a-wallet-view")],Ao);const To=o.AH`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var Ro=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Oo=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.checked=Zt.o.state.isLegalCheckboxChecked,this.unsubscribe.push(Zt.o.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=r.H.state,i=r.H.state.features?.legalCheckbox,a=Boolean(e||t)&&Boolean(i),s=a&&!this.checked,l=s?-1:void 0;return o.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${a?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,n.J)(s?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${(0,n.J)(l)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};Oo.styles=To,Ro([(0,a.wk)()],Oo.prototype,"checked",void 0),Oo=Ro([(0,h.EM)("w3m-connect-wallets-view")],Oo);const No=o.AH`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let Mo=class extends o.WF{render(){return o.qy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Mo.styles=[w.W5,No],Mo=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}([(0,b.E)("wui-loading-hexagon")],Mo),i(52619);const Po=o.AH`
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

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var jo=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let qo=class extends o.WF{constructor(){super(),this.network=Y.I.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),t=this.getSubLabel();return o.qy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,n.J)(c.$.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:o.qy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=V.a.getConnectorId(s.W.state.activeChain);return V.a.getAuthConnector()&&e===H.o.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){const e=V.a.getConnectorId(s.W.state.activeChain);return V.a.getAuthConnector()&&e===H.o.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,s.W.state.activeChain!==this.network?.chainNamespace&&s.W.setIsSwitchingNamespace(!0),this.network&&await s.W.switchActiveNetwork(this.network)}catch(e){this.error=!0}}};qo.styles=Po,jo([(0,a.wk)()],qo.prototype,"showRetry",void 0),jo([(0,a.wk)()],qo.prototype,"error",void 0),qo=jo([(0,h.EM)("w3m-network-switch-view")],qo);var Do=i(58751);i(12965),i(25981);const Lo=o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Uo=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let zo=class extends o.WF{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return o.qy`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?o.qy`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?o.qy`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:o.qy`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};zo.styles=[w.W5,w.fD,Lo],Uo([(0,a.MZ)()],zo.prototype,"imageSrc",void 0),Uo([(0,a.MZ)()],zo.prototype,"name",void 0),Uo([(0,a.MZ)({type:Boolean})],zo.prototype,"disabled",void 0),Uo([(0,a.MZ)({type:Boolean})],zo.prototype,"selected",void 0),Uo([(0,a.MZ)({type:Boolean})],zo.prototype,"transparent",void 0),zo=Uo([(0,b.E)("wui-list-network")],zo);const Fo=o.AH`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var Zo=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Bo=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.network=s.W.state.activeCaipNetwork,this.requestedCaipNetworks=s.W.getCaipNetworks(),this.search="",this.onDebouncedSearch=u.w.debounce(e=>{this.search=e},100),this.unsubscribe.push(l.j.subscribeNetworkImages(()=>this.requestUpdate()),s.W.subscribeKey("activeCaipNetwork",e=>this.network=e),s.W.subscribe(()=>{this.requestedCaipNetworks=s.W.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return o.qy`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){j.E.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),Y.I.push("WhatIsANetwork")}networksTemplate(){const e=s.W.getAllApprovedCaipNetworkIds(),t=u.w.sortRequestedNetworks(e,this.requestedCaipNetworks);return this.search?this.filteredNetworks=t?.filter(e=>e?.name?.toLowerCase().includes(this.search.toLowerCase())):this.filteredNetworks=t,this.filteredNetworks?.map(e=>o.qy`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${(0,n.J)(c.$.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${this.getNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `)}getNetworkDisabled(e){const t=e.chainNamespace,i=d.U.getCaipAddress(t),o=s.W.getAllApprovedCaipNetworkIds(),a=!1!==s.W.getNetworkProp("supportsAllNetworks",t),n=V.a.getConnectorId(t),r=V.a.getAuthConnector(),l=n===H.o.CONNECTOR_ID.AUTH&&r;return!(!i||a||l||o?.includes(e.caipNetworkId))}onSwitchNetwork(e){Do.L.onSwitchNetwork({network:e})}};Bo.styles=Fo,Zo([(0,a.wk)()],Bo.prototype,"network",void 0),Zo([(0,a.wk)()],Bo.prototype,"requestedCaipNetworks",void 0),Zo([(0,a.wk)()],Bo.prototype,"filteredNetworks",void 0),Zo([(0,a.wk)()],Bo.prototype,"search",void 0),Bo=Zo([(0,h.EM)("w3m-networks-view")],Bo);const _o=o.AH`
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

  .capitalize {
    text-transform: capitalize;
  }
`;var Ho=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const Vo={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let Ko=class extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=Y.I.state.data?.switchToChain,this.caipNetwork=Y.I.state.data?.network,this.activeChain=s.W.state.activeChain}firstUpdated(){this.unsubscribe.push(s.W.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.switchToChain?H.o.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const t=H.o.CHAIN_NAME_MAP[this.switchToChain];return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name=${(0,n.J)(Vo[this.switchToChain])}></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${t}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${t}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${e} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(s.W.setIsSwitchingNamespace(!0),V.a.setFilterByNamespace(this.switchToChain),this.caipNetwork?await s.W.switchActiveNetwork(this.caipNetwork):s.W.setActiveNamespace(this.switchToChain),Y.I.reset("Connect"))}};Ko.styles=_o,Ho([(0,a.MZ)()],Ko.prototype,"activeChain",void 0),Ko=Ho([(0,h.EM)("w3m-switch-active-chain-view")],Ko);const Jo=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let Go=class extends o.WF{render(){return o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Jo}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{u.w.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Go=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}([(0,h.EM)("w3m-what-is-a-network-view")],Go);const Yo=o.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Xo=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Qo=class extends o.WF{constructor(){super(),this.swapUnsupportedChain=Y.I.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=r.H.state.remoteFeatures,this.unsubscribe.push(l.j.subscribeNetworkImages(()=>this.requestUpdate()),r.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?o.qy`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:o.qy`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=s.W.getAllRequestedCaipNetworks(),t=s.W.getAllApprovedCaipNetworkIds(),i=u.w.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?i.filter(e=>K.oU.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId)):i).map(e=>o.qy`
        <wui-list-network
          imageSrc=${(0,n.J)(c.$.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconnecting=!0;const e=s.W.state.activeChain,t=X.x.getConnections(e).length>0,i=e&&V.a.state.activeConnectorIds[e],o=this.remoteFeatures?.multiWallet;await X.x.disconnect(o?{id:i,namespace:e}:{}),t&&o&&(Y.I.push("ProfileWallets"),J.P.showSuccess("Wallet deleted"))}catch{j.E.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),J.P.showError("Failed to disconnect")}finally{this.disconnecting=!1}}async onSwitchNetwork(e){const t=d.U.state.caipAddress,i=s.W.getAllApprovedCaipNetworkIds(),o=(s.W.getNetworkProp("supportsAllNetworks",e.chainNamespace),Y.I.state.data);t?i?.includes(e.caipNetworkId)?await s.W.switchActiveNetwork(e):Y.I.push("SwitchNetwork",{...o,network:e}):t||(s.W.setActiveCaipNetwork(e),Y.I.push("Connect"))}};Qo.styles=Yo,Xo([(0,a.wk)()],Qo.prototype,"disconnecting",void 0),Xo([(0,a.wk)()],Qo.prototype,"remoteFeatures",void 0),Qo=Xo([(0,h.EM)("w3m-unsupported-chain-view")],Qo);const ea=o.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var ta=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let ia=class extends o.WF{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return o.qy`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};ia.styles=[w.W5,w.fD,ea],ta([(0,a.MZ)()],ia.prototype,"icon",void 0),ta([(0,a.MZ)()],ia.prototype,"text",void 0),ia=ta([(0,b.E)("wui-banner")],ia);const oa=o.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;let aa=class extends o.WF{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=s.W.getAllRequestedCaipNetworks(),t=s.W.getAllApprovedCaipNetworkIds(),i=s.W.state.activeCaipNetwork,a=s.W.checkIfSmartAccountEnabled();let r=u.w.sortRequestedNetworks(t,e);if(a&&(0,G.lj)(i?.chainNamespace)===oe.Vl.ACCOUNT_TYPES.SMART_ACCOUNT){if(!i)return null;r=[i]}return r.filter(e=>e.chainNamespace===i?.chainNamespace).map(e=>o.qy`
        <wui-list-network
          imageSrc=${(0,n.J)(c.$.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};aa.styles=oa,aa=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}([(0,h.EM)("w3m-wallet-compatible-networks-view")],aa);var na=i(1122);const ra=o.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var sa=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let la=class extends o.WF{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,o.qy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:o.qy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};la.styles=[w.W5,ra],sa([(0,a.MZ)()],la.prototype,"imageSrc",void 0),sa([(0,a.MZ)()],la.prototype,"alt",void 0),sa([(0,a.MZ)({type:Boolean})],la.prototype,"borderRadiusFull",void 0),la=sa([(0,b.E)("wui-visual-thumbnail")],la);const ca=o.AH`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let da=class extends o.WF{constructor(){super(...arguments),this.dappImageUrl=r.H.state.metadata?.icons,this.walletImageUrl=d.U.state.connectedWalletInfo?.icon}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return o.qy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};da.styles=ca,da=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}([(0,h.EM)("w3m-siwx-sign-message-thumbnails")],da);var ua=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let pa=class extends o.WF{constructor(){super(...arguments),this.dappName=r.H.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return o.qy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await na.U.requestSignMessage()}catch(e){if(e instanceof Error&&e.message.includes("OTP is required"))return J.P.showError({message:"Something went wrong. We need to verify your account again."}),void Y.I.replace("DataCapture");throw e}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await na.U.cancelSignMessage().finally(()=>this.isCancelling=!1)}};ua([(0,a.wk)()],pa.prototype,"isCancelling",void 0),ua([(0,a.wk)()],pa.prototype,"isSigning",void 0),pa=ua([(0,h.EM)("w3m-siwx-sign-message-view")],pa)},78509(e,t,i){var o=i(12618),a=i(25707),n=i(99598),r=i(78508),s=i(96396),l=i(70148);const c=o.AH`
  :host {
    width: 100%;
    display: block;
  }
`;var d=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let u=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.text="",this.open=n.I.state.open,this.unsubscribe.push(r.I.subscribeKey("view",()=>{n.I.hide()}),s.W.subscribeKey("open",e=>{e||n.I.hide()}),n.I.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),n.I.hide()}render(){return o.qy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return o.qy`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();this.open||n.I.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||n.I.hide()}};u.styles=[c],d([(0,a.MZ)()],u.prototype,"text",void 0),d([(0,a.wk)()],u.prototype,"open",void 0),u=d([(0,l.EM)("w3m-tooltip-trigger")],u)},34558(e,t,i){i.d(t,{y:()=>r});var o=i(24376),a=i(42733),n=i(41482);const r={getTabsByNamespace:e=>Boolean(e)&&e===o.o.CHAIN.EVM?!1===a.H.state.remoteFeatures?.activity?n.o.ACCOUNT_TABS.filter(e=>"Activity"!==e.label):n.o.ACCOUNT_TABS:[],isValidReownName:e=>/^[a-zA-Z0-9]+$/gu.test(e),validateReownName:e=>e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,"")}},43083(e,t,i){var o=i(12618),a=i(25707),n=(i(2132),i(36887),i(18409),i(26109)),r=i(63612),s=i(43494);const l=o.AH`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon:not(.image-icon),
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon:not(.image-icon),
  a[data-variant='shade'] > wui-icon:not(.image-icon) {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon:not(.image-icon),
  a[data-variant='success'] > wui-icon:not(.image-icon),
  a[data-variant='shadeSmall'] > wui-icon:not(.image-icon),
  a[data-variant='error'] > wui-icon:not(.image-icon) {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`;var c=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let d=class extends o.WF{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.imageIcon=void 0,this.imageIconSize="md",this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant?"small-600":"paragraph-600";return o.qy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${this.title?this.title:r.Z.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc}></wui-image>`:this.imageIcon?o.qy`<wui-icon
        name=${this.imageIcon}
        color="inherit"
        size=${this.imageIconSize}
        class="image-icon"
      ></wui-icon>`:null}};d.styles=[n.W5,n.fD,l],c([(0,a.MZ)()],d.prototype,"variant",void 0),c([(0,a.MZ)()],d.prototype,"imageSrc",void 0),c([(0,a.MZ)()],d.prototype,"imageIcon",void 0),c([(0,a.MZ)()],d.prototype,"imageIconSize",void 0),c([(0,a.MZ)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,a.MZ)()],d.prototype,"icon",void 0),c([(0,a.MZ)()],d.prototype,"href",void 0),c([(0,a.MZ)()],d.prototype,"text",void 0),d=c([(0,s.E)("wui-chip")],d)},38913(e,t,i){var o=i(12618),a=i(25707),n=i(60031),r=(i(18409),i(26109)),s=i(43494);i(98848);const l=o.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var c=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let d=class extends o.WF{constructor(){super(...arguments),this.disabled=!1}render(){return o.qy`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,n.J)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?o.qy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};d.styles=[r.W5,l],c([(0,a.MZ)()],d.prototype,"errorMessage",void 0),c([(0,a.MZ)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,a.MZ)()],d.prototype,"value",void 0),c([(0,a.MZ)()],d.prototype,"tabIdx",void 0),d=c([(0,s.E)("wui-email-input")],d)},84293(e,t,i){var o=i(12618),a=i(25707),n=(i(2132),i(26109)),r=i(43494);const s=o.AH`
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
`;var l=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let c=class extends o.WF{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return o.qy`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};c.styles=[n.W5,n.fD,s],l([(0,a.MZ)()],c.prototype,"text",void 0),l([(0,a.MZ)()],c.prototype,"icon",void 0),c=l([(0,r.E)("wui-icon-button")],c)},77518(e,t,i){var o=i(12618),a=i(25707),n=i(60031),r=(i(18409),i(26109)),s=i(43494);i(70717);const l=o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var c=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let d=class extends o.WF{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,n.J)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return"center"===this.align?o.qy` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};d.styles=[r.W5,r.fD,l],c([(0,a.MZ)()],d.prototype,"logo",void 0),c([(0,a.MZ)()],d.prototype,"name",void 0),c([(0,a.MZ)()],d.prototype,"align",void 0),c([(0,a.MZ)()],d.prototype,"tabIdx",void 0),c([(0,a.MZ)({type:Boolean})],d.prototype,"disabled",void 0),d=c([(0,s.E)("wui-list-social")],d)},55710(e,t,i){var o=i(12618),a=i(25707),n=i(23768),r=(i(2132),i(36887),i(18409),i(69807),i(26109)),s=i(43494);const l=o.AH`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var c=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let d=class extends o.WF{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return o.qy`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${n.S.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?o.qy`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:o.qy`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};d.styles=[r.W5,r.fD,l],c([(0,a.MZ)()],d.prototype,"tokenName",void 0),c([(0,a.MZ)()],d.prototype,"tokenImageUrl",void 0),c([(0,a.MZ)({type:Number})],d.prototype,"tokenValue",void 0),c([(0,a.MZ)()],d.prototype,"tokenAmount",void 0),c([(0,a.MZ)()],d.prototype,"tokenCurrency",void 0),c([(0,a.MZ)({type:Boolean})],d.prototype,"clickable",void 0),d=c([(0,s.E)("wui-list-token")],d)},52619(e,t,i){i(25981)},55618(e,t,i){var o=i(12618),a=i(25707),n=(i(18409),i(26109)),r=i(43494);const s=o.AH`
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
`;var l=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let c=class extends o.WF{constructor(){super(...arguments),this.text=""}render(){return o.qy`${this.template()}`}template(){return this.text?o.qy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};c.styles=[n.W5,s],l([(0,a.MZ)()],c.prototype,"text",void 0),c=l([(0,r.E)("wui-separator")],c)},35090(e,t,i){i(41497)},41684(e,t,i){i(91383)},27512(e,t,i){i.d(t,{a:()=>o});const o=i(12618).JW`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`},76867(e,t,i){var o=i(12618),a=i(25707),n=(i(36887),i(26109)),r=i(63612),s=i(43494);const l=o.AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var c=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let d=class extends o.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`\n    --local-width: var(--wui-icon-box-size-${this.size});\n    --local-height: var(--wui-icon-box-size-${this.size});\n    `,o.qy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=r.Z.generateAvatarColors(this.address);return this.style.cssText+=`\n ${e}`,null}return this.dataset.variant="default",null}};d.styles=[n.W5,l],c([(0,a.MZ)()],d.prototype,"imageSrc",void 0),c([(0,a.MZ)()],d.prototype,"alt",void 0),c([(0,a.MZ)()],d.prototype,"address",void 0),c([(0,a.MZ)()],d.prototype,"size",void 0),d=c([(0,s.E)("wui-avatar")],d)},85999(e,t,i){var o=i(12618),a=i(25707),n=(i(2132),i(36887),i(18409),i(26109)),r=i(43494);const s=o.AH`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

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

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var l=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let c=class extends o.WF{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const e="sm"===this.size?"small-600":"paragraph-600";return o.qy`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.imageSrc?o.qy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        ${this.icon?o.qy`<wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>`:null}
      </button>
    `}};c.styles=[n.W5,n.fD,s],l([(0,a.MZ)()],c.prototype,"variant",void 0),l([(0,a.MZ)()],c.prototype,"imageSrc",void 0),l([(0,a.MZ)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,a.MZ)()],c.prototype,"icon",void 0),l([(0,a.MZ)()],c.prototype,"size",void 0),l([(0,a.MZ)()],c.prototype,"text",void 0),c=l([(0,r.E)("wui-chip-button")],c)},70717(e,t,i){var o=i(12618),a=i(25707),n=(i(2132),i(26109)),r=i(43494);const s=o.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var l=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let c=class extends o.WF{constructor(){super(...arguments),this.logo="google"}render(){return o.qy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};c.styles=[n.W5,s],l([(0,a.MZ)()],c.prototype,"logo",void 0),c=l([(0,r.E)("wui-logo")],c)},25981(e,t,i){var o=i(12618),a=i(25707);const n=o.JW`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var r=i(27512);const s=o.JW`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;i(2132),i(36887);var l=i(26109),c=i(43494);const d=o.AH`
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
`;var u=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let p=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:s,md:r.a,lg:n},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--wui-spacing-3xl);\n      --local-height: var(--wui-spacing-3xl);\n      --local-icon-size: var(--wui-spacing-l);\n    "):this.style.cssText=`\n\n      --local-path: var(--wui-path-network-${this.size});\n      --local-width:  var(--wui-width-network-${this.size});\n      --local-height:  var(--wui-height-network-${this.size});\n      --local-icon-size:  var(--wui-icon-size-network-${this.size});\n    `,o.qy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:o.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};p.styles=[l.W5,d],u([(0,a.MZ)()],p.prototype,"size",void 0),u([(0,a.MZ)()],p.prototype,"name",void 0),u([(0,a.MZ)({type:Object})],p.prototype,"networkImagesBySize",void 0),u([(0,a.MZ)()],p.prototype,"imageSrc",void 0),u([(0,a.MZ)({type:Boolean})],p.prototype,"selected",void 0),u([(0,a.MZ)({type:Boolean})],p.prototype,"round",void 0),p=u([(0,c.E)("wui-network-image")],p)},91383(e,t,i){var o=i(12618),a=i(25707),n=(i(2132),i(36887),i(69807),i(26109)),r=i(43494);i(12851);const s=o.AH`
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
`;var l=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let c=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),o.qy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?o.qy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:o.qy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};c.styles=[n.fD,n.W5,s],l([(0,a.MZ)()],c.prototype,"size",void 0),l([(0,a.MZ)()],c.prototype,"name",void 0),l([(0,a.MZ)()],c.prototype,"imageSrc",void 0),l([(0,a.MZ)()],c.prototype,"walletIcon",void 0),l([(0,a.MZ)({type:Boolean})],c.prototype,"installed",void 0),l([(0,a.MZ)()],c.prototype,"badgeSize",void 0),c=l([(0,r.E)("wui-wallet-image")],c)}}]);