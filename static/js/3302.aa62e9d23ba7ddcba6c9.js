"use strict";(globalThis.webpackChunkswap_front=globalThis.webpackChunkswap_front||[]).push([[3302],{51454(e,t,o){o.d(t,{o:()=>s});var i=o(83215),r=o(31896);const a=(0,i.BX)({isLegalCheckboxChecked:!1}),s={state:a,subscribe:e=>(0,i.B1)(a,()=>e(a)),subscribeKey:(e,t)=>(0,r.u$)(a,e,t),setIsLegalCheckboxChecked(e){a.isLegalCheckboxChecked=e}}},71801(e,t,o){o.d(t,{Up:()=>h});var i=o(24376),r=o(63450),a=o(6056),s=o(36010),n=o(90184),c=o(78508),l=o(21871),u=o(26742),d=o(27508);async function h(e){r.U.setSocialProvider(e,a.W.state.activeChain),n.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),"farcaster"===e?await async function(){c.I.push("ConnectingFarcaster");const e=s.a.getAuthConnector();if(e&&!r.U.state.farcasterUrl)try{const{url:t}=await e.provider.getFarcasterUri();r.U.setFarcasterUrl(t,a.W.state.activeChain)}catch(e){c.I.goBack(),l.P.showError(e)}}():await async function(e){c.I.push("ConnectingSocial");const t=s.a.getAuthConnector();let o=null;try{const s=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(t&&e){if(u.w.isTelegram()||(o=function(){try{return u.w.returnOpenHref(`${i.o.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(e){throw new Error("Could not open social popup")}}()),o)r.U.setSocialWindow(o,a.W.state.activeChain);else if(!u.w.isTelegram())throw new Error("Could not create social popup");const{uri:n}=await t.provider.getSocialRedirectUri({provider:e});if(!n)throw o?.close(),new Error("Could not fetch the social redirect uri");if(o&&(o.location.href=n),u.w.isTelegram()){d.i.setTelegramSocialProvider(e);const t=u.w.formatTelegramSocialLoginUrl(n);u.w.openHref(t,"_top")}clearTimeout(s)}}catch(e){o?.close(),l.P.showError(e?.message)}}(e)}},83302(e,t,o){o.r(t),o.d(t,{W3mConnectSocialsView:()=>x,W3mConnectingFarcasterView:()=>q,W3mConnectingSocialView:()=>L});var i=o(12618),r=o(25707),a=o(60031),s=o(51454),n=o(42733),c=o(70148),l=(o(60310),o(98585),o(46524),o(36010)),u=o(78508),d=o(62944),h=o(71655),p=o(71801),w=o(26742),g=(o(77518),o(79835));const b=i.AH`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var f=function(e,t,o,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let v=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=l.a.state.connectors,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.remoteFeatures=n.H.state.remoteFeatures,this.isPwaLoading=!1,this.unsubscribe.push(l.a.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type)}),n.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.remoteFeatures?.socials||[];const t=Boolean(this.authConnector),o=e?.length,r="ConnectSocials"===u.I.state.view;return t&&o||r?(r&&!o&&(e=d.oU.DEFAULT_SOCIALS),i.qy` <wui-flex flexDirection="column" gap="xs">
      ${e.map(e=>i.qy`<wui-list-social
            @click=${()=>{this.onSocialClick(e)}}
            data-testid=${`social-selector-${e}`}
            name=${e}
            logo=${e}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`):null}async onSocialClick(e){e&&await(0,p.Up)(e)}async handlePwaFrameLoad(){if(w.w.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof g.Y&&await this.authConnector.provider.init()}catch(e){h.h.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}};v.styles=b,f([(0,r.MZ)()],v.prototype,"tabIdx",void 0),f([(0,r.wk)()],v.prototype,"connectors",void 0),f([(0,r.wk)()],v.prototype,"authConnector",void 0),f([(0,r.wk)()],v.prototype,"remoteFeatures",void 0),f([(0,r.wk)()],v.prototype,"isPwaLoading",void 0),v=f([(0,c.EM)("w3m-social-login-list")],v);const y=i.AH`
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
`;var m=function(e,t,o,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let x=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.checked=s.o.state.isLegalCheckboxChecked,this.unsubscribe.push(s.o.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=n.H.state,o=n.H.state.features?.legalCheckbox,r=Boolean(e||t)&&Boolean(o),s=r&&!this.checked,c=s?-1:void 0;return i.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${r?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,a.J)(s?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${(0,a.J)(c)}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};x.styles=y,m([(0,r.wk)()],x.prototype,"checked",void 0),x=m([(0,c.EM)("w3m-connect-socials-view")],x);var k=o(63450),C=o(31211),P=o(6056),E=o(90184),$=o(27508),R=o(21871),O=o(96396),T=o(68996),U=(o(77616),o(92983),o(70717),o(45090),o(21785)),W=o(41482);const I=i.AH`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
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
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
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
  .capitalize {
    text-transform: capitalize;
  }
`;var S=function(e,t,o,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let L=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.socialProvider=k.U.state.socialProvider,this.socialWindow=k.U.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.remoteFeatures=n.H.state.remoteFeatures,this.address=k.U.state.address,this.connectionsByNamespace=C.x.getConnections(P.W.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=l.a.getAuthConnector(),this.handleSocialConnection=async e=>{if(e.data?.resultUri)if(e.origin===W.o.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),k.U.setSocialWindow(void 0,P.W.state.activeChain)),this.connecting=!0,this.updateMessage();const t=e.data.resultUri;this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await C.x.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:t},this.authConnector.chain),this.socialProvider&&($.i.setConnectedSocialProvider(this.socialProvider),E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(e){this.error=!0,this.updateMessage(),this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else u.I.goBack(),R.P.showError("Untrusted Origin"),this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})},U.R.EmbeddedWalletAbortController.signal.addEventListener("abort",()=>{this.socialWindow&&(this.socialWindow.close(),k.U.setSocialWindow(void 0,P.W.state.activeChain))}),this.unsubscribe.push(k.U.subscribe(e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow)}),n.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}),k.U.subscribeKey("address",e=>{const t=this.remoteFeatures?.multiWallet;e&&e!==this.address&&(this.hasMultipleConnections&&t?(u.I.replace("ProfileWallets"),R.P.showSuccess("New Wallet Added")):(O.W.state.open||n.H.state.enableEmbedded)&&O.W.close())})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener("message",this.handleSocialConnection,!1),this.socialWindow?.close(),k.U.setSocialWindow(void 0,P.W.state.activeChain)}render(){return i.qy`
      <wui-flex
        data-error=${(0,a.J)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0,a.J)(this.socialProvider)}></wui-logo>
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
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=T.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return i.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}connectSocial(){const e=setInterval(()=>{this.socialWindow?.closed&&(this.connecting||"ConnectingSocial"!==u.I.state.view||(this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),u.I.goBack()),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};L.styles=I,S([(0,r.wk)()],L.prototype,"socialProvider",void 0),S([(0,r.wk)()],L.prototype,"socialWindow",void 0),S([(0,r.wk)()],L.prototype,"error",void 0),S([(0,r.wk)()],L.prototype,"connecting",void 0),S([(0,r.wk)()],L.prototype,"message",void 0),S([(0,r.wk)()],L.prototype,"remoteFeatures",void 0),L=S([(0,c.EM)("w3m-connecting-social-view")],L),o(58461),o(51636),o(45101),o(66283),o(35090);const j=i.AH`
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

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
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
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`;var F=function(e,t,o,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let q=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=k.U.state.socialProvider,this.uri=k.U.state.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=n.H.state.remoteFeatures,this.authConnector=l.a.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(k.U.subscribeKey("farcasterUrl",e=>{e&&(this.uri=e,this.connectFarcaster())}),k.U.subscribeKey("socialProvider",e=>{e&&(this.socialProvider=e)}),n.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),i.qy`${this.platformTemplate()}`}platformTemplate(){return w.w.isMobile()?i.qy`${this.mobileTemplate()}`:i.qy`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?i.qy`${this.loadingTemplate()}`:i.qy`${this.qrTemplate()}`}qrTemplate(){return i.qy` <wui-flex
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
    </wui-flex>`}loadingTemplate(){return i.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
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
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return i.qy` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl","xl","xl","xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
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
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const e=T.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return i.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await(this.authConnector?.provider.connectFarcaster()),this.socialProvider&&($.i.setConnectedSocialProvider(this.socialProvider),E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0;const e=C.x.getConnections(this.authConnector.chain).length>0;await C.x.connectExternal(this.authConnector,this.authConnector.chain);const t=this.remoteFeatures?.multiWallet;this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,e&&t?(u.I.replace("ProfileWallets"),R.P.showSuccess("New Wallet Added")):O.W.close()}catch(e){this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}}),u.I.goBack(),R.P.showError(e)}}mobileLinkTemplate(){return i.qy`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&w.w.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40;return i.qy` <wui-qr-code
      size=${e}
      theme=${T.W.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${(0,a.J)(T.W.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return i.qy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(w.w.copyToClopboard(this.uri),R.P.showSuccess("Link copied"))}catch{R.P.showError("Failed to copy")}}};q.styles=j,F([(0,r.wk)()],q.prototype,"socialProvider",void 0),F([(0,r.wk)()],q.prototype,"uri",void 0),F([(0,r.wk)()],q.prototype,"ready",void 0),F([(0,r.wk)()],q.prototype,"loading",void 0),F([(0,r.wk)()],q.prototype,"remoteFeatures",void 0),q=F([(0,c.EM)("w3m-connecting-farcaster-view")],q)},98585(e,t,o){var i=o(12618),r=o(25707),a=o(51454),s=o(42733),n=o(70148),c=o(60031),l=o(7610),u=(o(2132),o(26109)),d=o(43494);const h=i.AH`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;var p=function(e,t,o,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let w=class extends i.WF{constructor(){super(...arguments),this.inputElementRef=(0,l._)(),this.checked=void 0}render(){return i.qy`
      <label>
        <input
          ${(0,l.K)(this.inputElementRef)}
          ?checked=${(0,c.J)(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};w.styles=[u.W5,h],p([(0,r.MZ)({type:Boolean})],w.prototype,"checked",void 0),w=p([(0,d.E)("wui-checkbox")],w),o(45090);const g=i.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;var b=function(e,t,o,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let f=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.checked=a.o.state.isLegalCheckboxChecked,this.unsubscribe.push(a.o.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=s.H.state,o=s.H.state.features?.legalCheckbox;return(e||t)&&o?i.qy`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=s.H.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=s.H.state;return e?i.qy`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=s.H.state;return e?i.qy`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}onCheckboxChange(){a.o.setIsLegalCheckboxChecked(!this.checked)}};f.styles=[g],b([(0,r.wk)()],f.prototype,"checked",void 0),f=b([(0,n.EM)("w3m-legal-checkbox")],f)},46524(e,t,o){var i=o(12618),r=o(25707),a=o(42733),s=o(70148);o(60310),o(45090),o(17909);const n=i.AH`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: var(--wui-spacing-m);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var c=function(e,t,o,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let l=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=a.H.state.remoteFeatures,this.unsubscribe.push(a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state,o=a.H.state.features?.legalCheckbox;return!e&&!t||o?i.qy`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:i.qy`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=a.H.state;return e?i.qy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:e}=a.H.state;return e?i.qy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(e=!1){return this.remoteFeatures?.reownBranding?e?i.qy`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:i.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}};l.styles=[n],c([(0,r.wk)()],l.prototype,"remoteFeatures",void 0),l=c([(0,s.EM)("w3m-legal-footer")],l)},77616(e,t,o){o(12851)},51636(e,t,o){o(2132)},45101(e,t,o){var i=o(12618),r=o(25707),a=o(60031),s=(o(18409),o(26109)),n=o(43494);const c=i.AH`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var l=function(e,t,o,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let u=class extends i.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return i.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,a.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};u.styles=[s.W5,s.fD,c],l([(0,r.MZ)()],u.prototype,"tabIdx",void 0),l([(0,r.MZ)({type:Boolean})],u.prototype,"disabled",void 0),l([(0,r.MZ)()],u.prototype,"color",void 0),u=l([(0,n.E)("wui-link")],u)},77518(e,t,o){var i=o(12618),r=o(25707),a=o(60031),s=(o(18409),o(26109)),n=o(43494);o(70717);const c=i.AH`
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
`;var l=function(e,t,o,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let u=class extends i.WF{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return i.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,a.J)(this.tabIdx)}>
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
    `}templatePlacement(){return"center"===this.align?i.qy` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};u.styles=[s.W5,s.fD,c],l([(0,r.MZ)()],u.prototype,"logo",void 0),l([(0,r.MZ)()],u.prototype,"name",void 0),l([(0,r.MZ)()],u.prototype,"align",void 0),l([(0,r.MZ)()],u.prototype,"tabIdx",void 0),l([(0,r.MZ)({type:Boolean})],u.prototype,"disabled",void 0),u=l([(0,n.E)("wui-list-social")],u)},92983(e,t,o){var i=o(12618),r=o(25707),a=o(26109),s=o(43494);const n=i.AH`
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
`;var c=function(e,t,o,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let l=class extends i.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e,o=116+t,r=245+t,a=360+1.75*t;return i.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${r}"
          stroke-dashoffset=${a}
        />
      </svg>
    `}};l.styles=[a.W5,n],c([(0,r.MZ)({type:Number})],l.prototype,"radius",void 0),l=c([(0,s.E)("wui-loading-thumbnail")],l)},35090(e,t,o){o(41497)},17909(e,t,o){var i=o(12618),r=(o(2132),o(18409),o(69807),o(7565)),a=o(26109),s=o(43494);const n=i.AH`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`;let c=class extends i.WF{render(){return i.qy`
      <a
        data-testid="ux-branding-reown"
        href=${r.C5}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0","0","l","0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};c.styles=[a.W5,a.fD,n],c=function(e,t,o,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s}([(0,s.E)("wui-ux-by-reown")],c)},41497(e,t,o){var i=o(12618),r=o(25707),a=o(43494);const s=i.AH`
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
`;var n=function(e,t,o,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let c=class extends i.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,i.qy`<slot></slot>`}};c.styles=[s],n([(0,r.MZ)()],c.prototype,"width",void 0),n([(0,r.MZ)()],c.prototype,"height",void 0),n([(0,r.MZ)()],c.prototype,"borderRadius",void 0),n([(0,r.MZ)()],c.prototype,"variant",void 0),c=n([(0,a.E)("wui-shimmer")],c)},70717(e,t,o){var i=o(12618),r=o(25707),a=(o(2132),o(26109)),s=o(43494);const n=i.AH`
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
`;var c=function(e,t,o,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let l=class extends i.WF{constructor(){super(...arguments),this.logo="google"}render(){return i.qy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};l.styles=[a.W5,n],c([(0,r.MZ)()],l.prototype,"logo",void 0),l=c([(0,s.E)("wui-logo")],l)},7565(e,t,o){o.d(t,{C5:()=>a,Ky:()=>r,PG:()=>i});const i=/[.*+?^${}()|[\]\\]/gu,r=/[0-9,.]/u,a="https://reown.com"}}]);