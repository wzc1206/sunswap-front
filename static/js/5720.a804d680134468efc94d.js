/*! For license information please see 5720.a804d680134468efc94d.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkswap_front=globalThis.webpackChunkswap_front||[]).push([[5720],{75694(t,e,i){i.d(e,{M:()=>r});var a=i(50842);const n={attribute:!0,type:String,converter:a.W3,reflect:!1,hasChanged:a.Ec},o=(t=n,e,i)=>{const{kind:a,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===a&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===a){const{name:a}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(a,n,t,!0,i)},init(e){return void 0!==e&&this.C(a,void 0,t,e),e}}}if("setter"===a){const{name:a}=i;return function(i){const n=this[a];e.call(this,i),this.requestUpdate(a,n,t,!0,i)}}throw Error("Unsupported decorator location: "+a)};function r(t){return(e,i)=>"object"==typeof i?o(t,e,i):((t,e,i)=>{const a=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),a?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}},44290(t,e,i){i.d(e,{w:()=>n});var a=i(75694);function n(t){return(0,a.M)({...t,state:!0,attribute:!1})}},37669(t,e,i){i.d(e,{u:()=>h});var a=i(46036),n=i(24376),o=i(63450),r=i(88249),s=i(75595),l=i(6056),c=i(74496),u=i(73495);class d{constructor(t){this.getNonce=t.getNonce}async createMessage(t){const e={accountAddress:t.accountAddress,chainId:t.chainId,version:"1",domain:"undefined"==typeof document?"Unknown Domain":document.location.host,uri:"undefined"==typeof document?"Unknown URI":document.location.href,resources:this.resources,nonce:await this.getNonce(t),issuedAt:this.stringifyDate(new Date),statement:void 0,expirationTime:void 0,notBefore:void 0},i={toString:()=>this.stringify(e)};return Object.assign(e,i)}stringify(t){const e=this.getNetworkName(t.chainId);return[`${t.domain} wants you to sign in with your ${e} account:`,t.accountAddress,t.statement?`\n${t.statement}\n`:"",`URI: ${t.uri}`,`Version: ${t.version}`,`Chain ID: ${t.chainId}`,`Nonce: ${t.nonce}`,t.issuedAt&&`Issued At: ${t.issuedAt}`,t.expirationTime&&`Expiration Time: ${t.expirationTime}`,t.notBefore&&`Not Before: ${t.notBefore}`,t.requestId&&`Request ID: ${t.requestId}`,t.resources?.length&&t.resources.reduce((t,e)=>`${t}\n- ${e}`,"Resources:")].filter(t=>"string"==typeof t).join("\n").trim()}getNetworkName(t){const e=l.W.getAllRequestedCaipNetworks();return u.L.getNetworkNameByCaipNetworkId(e,t)}stringifyDate(t){return t.toISOString()}}class h{constructor(t={}){this.otpUuid=null,this.listeners={sessionChanged:[]},this.localAuthStorageKey=t.localAuthStorageKey||a.Ws.SIWX_AUTH_TOKEN,this.localNonceStorageKey=t.localNonceStorageKey||a.Ws.SIWX_NONCE_TOKEN,this.required=t.required??!0,this.messenger=new d({getNonce:this.getNonce.bind(this)})}async createMessage(t){return this.messenger.createMessage(t)}async addSession(t){const e=await this.request({method:"POST",key:"authenticate",body:{data:t.data,message:t.message,signature:t.signature,clientId:this.getClientId(),walletInfo:this.getWalletInfo()},headers:["nonce","otp"]});this.setStorageToken(e.token,this.localAuthStorageKey),this.emit("sessionChanged",t),this.setAppKitAccountUser(function(t){const e=t.split(".");if(3!==e.length)throw new Error("Invalid token");const i=e[1];if("string"!=typeof i)throw new Error("Invalid token");const a=i.replace(/-/gu,"+").replace(/_/gu,"/"),n=a.padEnd(a.length+(4-a.length%4)%4,"=");return JSON.parse(atob(n))}(e.token)),this.otpUuid=null}async getSessions(t,e){try{if(!this.getStorageToken(this.localAuthStorageKey))return[];const i=await this.request({method:"GET",key:"me",query:{},headers:["auth"]});if(!i)return[];const a=i.address.toLowerCase()===e.toLowerCase(),n=i.caip2Network===t;if(!a||!n)return[];const o={data:{accountAddress:i.address,chainId:i.caip2Network},message:"",signature:""};return this.emit("sessionChanged",o),this.setAppKitAccountUser(i),[o]}catch{return[]}}async revokeSession(t,e){return Promise.resolve(this.clearStorageTokens())}async setSessions(t){if(0===t.length)this.clearStorageTokens();else{const e=t.find(t=>t.data.chainId===(0,c.kg)()?.caipNetworkId)||t[0];await this.addSession(e)}}getRequired(){return this.required}async getSessionAccount(){if(!this.getStorageToken(this.localAuthStorageKey))throw new Error("Not authenticated");return this.request({method:"GET",key:"me",body:void 0,query:{includeAppKitAccount:!0},headers:["auth"]})}async setSessionAccountMetadata(t=null){if(!this.getStorageToken(this.localAuthStorageKey))throw new Error("Not authenticated");return this.request({method:"PUT",key:"account-metadata",body:{metadata:t},headers:["auth"]})}on(t,e){return this.listeners[t].push(e),()=>{this.listeners[t]=this.listeners[t].filter(t=>t!==e)}}removeAllListeners(){Object.keys(this.listeners).forEach(t=>{this.listeners[t]=[]})}async requestEmailOtp({email:t,account:e}){const i=await this.request({method:"POST",key:"otp",body:{email:t,account:e}});return this.otpUuid=i.uuid,this.messenger.resources=[`email:${t}`],i}confirmEmailOtp({code:t}){return this.request({method:"PUT",key:"otp",body:{code:t},headers:["otp"]})}async request({method:t,key:e,query:i,body:a,headers:o}){const{projectId:r,st:s,sv:l}=this.getSDKProperties(),c=new URL(`${n.o.W3M_API_URL}/auth/v1/${String(e)}`);c.searchParams.set("projectId",r),c.searchParams.set("st",s),c.searchParams.set("sv",l),i&&Object.entries(i).forEach(([t,e])=>c.searchParams.set(t,String(e)));const u=await fetch(c,{method:t,body:a?JSON.stringify(a):void 0,headers:Array.isArray(o)?o.reduce((t,e)=>{switch(e){case"nonce":t["x-nonce-jwt"]=`Bearer ${this.getStorageToken(this.localNonceStorageKey)}`;break;case"auth":t.Authorization=`Bearer ${this.getStorageToken(this.localAuthStorageKey)}`;break;case"otp":this.otpUuid&&(t["x-otp"]=this.otpUuid)}return t},{}):void 0});if(!u.ok)throw new Error(await u.text());return u.headers.get("content-type")?.includes("application/json")?u.json():null}getStorageToken(t){return a.Ud.getItem(t)}setStorageToken(t,e){a.Ud.setItem(e,t)}clearStorageTokens(){this.otpUuid=null,a.Ud.removeItem(this.localAuthStorageKey),a.Ud.removeItem(this.localNonceStorageKey),this.emit("sessionChanged",void 0)}async getNonce(){const{nonce:t,token:e}=await this.request({method:"GET",key:"nonce"});return this.setStorageToken(e,this.localNonceStorageKey),t}getClientId(){return s.T.state.clientId}getWalletInfo(){const{connectedWalletInfo:t}=o.U.state;if(!t)return;if("social"in t)return{type:"social",social:t.social,identifier:t.identifier};const{name:e,icon:i}=t;let a="unknown";switch(t.type){case"EXTERNAL":case"INJECTED":case"ANNOUNCED":a="extension";break;case"WALLET_CONNECT":a="walletconnect";break;default:a="unknown"}return{type:a,name:e,icon:i}}getSDKProperties(){return r.N._getSdkProperties()}emit(t,e){this.listeners[t].forEach(t=>t(e))}setAppKitAccountUser(t){const{email:e}=t;e&&Object.values(n.o.CHAIN).forEach(t=>{l.W.setAccountProp("user",{email:e},t)})}}},42715(t,e,i){i.r(e),i.d(e,{W3mDataCaptureOtpConfirmView:()=>x,W3mDataCaptureView:()=>S,W3mEmailSuffixesWidget:()=>c,W3mRecentEmailsWidget:()=>h});var a=i(12618),n=i(25707),o=i(70148);const r=a.AH`
  .email-sufixes {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-3xs);
    overflow-x: auto;
    max-width: 100%;
    margin-top: var(--wui-spacing-s);
    margin-bottom: calc(-1 * var(--wui-spacing-m));
    padding-bottom: var(--wui-spacing-m);
    margin-left: calc(-1 * var(--wui-spacing-m));
    margin-right: calc(-1 * var(--wui-spacing-m));
    padding-left: var(--wui-spacing-m);
    padding-right: var(--wui-spacing-m);

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;var s=function(t,e,i,a){var n,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};const l=["@gmail.com","@outlook.com","@yahoo.com","@hotmail.com","@aol.com","@icloud.com","@zoho.com"];let c=class extends a.WF{constructor(){super(...arguments),this.email=""}render(){const t=l.filter(this.filter.bind(this)).map(this.item.bind(this));return 0===t.length?null:a.qy`<div class="email-sufixes">${t}</div>`}filter(t){if(!this.email)return!1;const e=this.email.split("@");if(e.length<2)return!0;const i=e.pop();return t.includes(i)&&t!==`@${i}`}item(t){return a.qy`<wui-button variant="neutral" size="sm" @click=${()=>{const e=this.email.split("@");e.length>1&&e.pop();const i=e[0]+t;this.dispatchEvent(new CustomEvent("change",{detail:i,bubbles:!0,composed:!0}))}}
      >${t}</wui-button
    >`}};c.styles=[r],s([(0,n.MZ)()],c.prototype,"email",void 0),c=s([(0,o.EM)("w3m-email-suffixes-widget")],c);const u=a.AH`
  .recent-emails {
    display: flex;
    flex-direction: column;
    padding: var(--wui-spacing-s) 0;
    border-top: 1px solid var(--wui-color-gray-glass-005);
    border-bottom: 1px solid var(--wui-color-gray-glass-005);
  }

  .recent-emails-heading {
    margin-bottom: var(--wui-spacing-s);
  }

  .recent-emails-list-item {
    --wui-color-gray-glass-002: transparent;
  }
`;var d=function(t,e,i,a){var n,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let h=class extends a.WF{constructor(){super(...arguments),this.emails=[]}render(){return 0===this.emails.length?null:a.qy`<div class="recent-emails">
      <wui-text variant="micro-600" color="fg-200" class="recent-emails-heading"
        >Recently used emails</wui-text
      >
      ${this.emails.map(this.item.bind(this))}
    </div>`}item(t){return a.qy`<wui-list-item
      @click=${()=>{this.dispatchEvent(new CustomEvent("select",{detail:t,bubbles:!0,composed:!0}))}}
      ?chevron=${!0}
      icon="mail"
      iconVariant="overlay"
      class="recent-emails-list-item"
    >
      <wui-text variant="paragraph-500" color="fg-100">${t}</wui-text>
    </wui-list-item>`}};h.styles=[u],d([(0,n.MZ)()],h.prototype,"emails",void 0),h=d([(0,o.EM)("w3m-recent-emails-widget")],h);var p=i(42733),g=i(78508),m=i(6056),f=i(21871),w=i(37669),y=i(45180),v=function(t,e,i,a){var n,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let x=class extends y.H{constructor(){super(...arguments),this.siwx=p.H.state.siwx,this.onOtpSubmit=async t=>{await this.siwx.confirmEmailOtp({code:t}),g.I.replace("SIWXSignMessage")},this.onOtpResend=async t=>{const e=m.W.getAccountData();if(!e?.caipAddress)throw new Error("No account data found");await this.siwx.requestEmailOtp({email:t,account:e.caipAddress})}}connectedCallback(){this.siwx&&this.siwx instanceof w.u||f.P.showError("ReownAuthentication is not initialized."),super.connectedCallback()}shouldSubmitOnOtpChange(){return this.otp.length===y.H.OTP_LENGTH}};v([(0,n.wk)()],x.prototype,"siwx",void 0),x=v([(0,o.EM)("w3m-data-capture-otp-confirm-view")],x);var b=i(46036);const k=a.AH`
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);

    transition-property: margin, height;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);
    margin-top: -100px;

    &[data-state='loading'] {
      margin-top: 0px;
    }

    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 252px;
      width: 360px;
      background: radial-gradient(
        96.11% 53.95% at 50% 51.28%,
        transparent 0%,
        color-mix(in srgb, var(--wui-color-bg-100) 5%, transparent) 49%,
        color-mix(in srgb, var(--wui-color-bg-100) 65%, transparent) 99.43%
      );
    }
  }

  .hero-main-icon {
    width: 176px;
    transition-property: background-color;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-1);

    &[data-state='loading'] {
      width: 56px;
    }
  }

  .hero-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
    flex-wrap: nowrap;
    min-width: fit-content;

    &:nth-child(1) {
      transform: translateX(-30px);
    }

    &:nth-child(2) {
      transform: translateX(30px);
    }

    &:nth-child(4) {
      transform: translateX(40px);
    }

    transition-property: height;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);
    height: 68px;

    &[data-state='loading'] {
      height: 0px;
    }
  }

  .hero-row-icon {
    opacity: 0.1;
    transition-property: opacity;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);

    &[data-state='loading'] {
      opacity: 0;
    }
  }
`;var $=function(t,e,i,a){var n,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let S=class extends a.WF{constructor(){super(...arguments),this.email=g.I.state.data?.email??m.W.getAccountData()?.user?.email??"",this.address=m.W.getAccountData()?.address??"",this.loading=!1,this.appName=p.H.state.metadata?.name??"AppKit",this.siwx=p.H.state.siwx,this.isRequired=Array.isArray(p.H.state.remoteFeatures?.emailCapture)&&p.H.state.remoteFeatures?.emailCapture.includes("required"),this.recentEmails=this.getRecentEmails()}connectedCallback(){this.siwx&&this.siwx instanceof w.u||f.P.showError("ReownAuthentication is not initialized. Please contact support."),super.connectedCallback()}firstUpdated(){this.loading=!1,this.recentEmails=this.getRecentEmails(),this.email&&this.onSubmit()}render(){return a.qy`
      <wui-flex flexDirection="column" .padding=${["3xs","m","m","m"]} gap="l">
        ${this.hero()} ${this.paragraph()} ${this.emailInput()} ${this.recentEmailsWidget()}
        ${this.footerActions()}
      </wui-flex>
    `}hero(){return a.qy`
      <div class="hero" data-state=${this.loading?"loading":"default"}>
        ${this.heroRow(["id","mail","wallet","x","solana","qrCode"])}
        ${this.heroRow(["mail","farcaster","wallet","discord","mobile","qrCode"])}
        <div class="hero-row">
          ${this.heroIcon("github")} ${this.heroIcon("bank")}
          <wui-icon-box
            size="xl"
            iconSize="xxl"
            iconColor=${this.loading?"fg-100":"accent-100"}
            backgroundColor=${this.loading?"fg-100":"accent-100"}
            icon=${this.loading?"id":"user"}
            isOpaque
            class="hero-main-icon"
            data-state=${this.loading?"loading":"default"}
          >
          </wui-icon-box>
          ${this.heroIcon("id")} ${this.heroIcon("card")}
        </div>
        ${this.heroRow(["google","id","github","verify","apple","mobile"])}
      </div>
    `}heroRow(t){return a.qy`
      <div class="hero-row" data-state=${this.loading?"loading":"default"}>
        ${t.map(this.heroIcon.bind(this))}
      </div>
    `}heroIcon(t){return a.qy`
      <wui-icon-box
        size="xl"
        iconSize="xxl"
        iconColor="fg-100"
        backgroundColor="fg-100"
        icon=${t}
        data-state=${this.loading?"loading":"default"}
        isOpaque
        class="hero-row-icon"
      >
      </wui-icon-box>
    `}paragraph(){return this.loading?a.qy`
        <wui-text variant="paragraph-400" color="fg-200" align="center"
          >We are verifying your account with email
          <wui-text variant="paragraph-600" color="accent-100">${this.email}</wui-text> and address
          <wui-text variant="paragraph-600" color="fg-100">
            ${o.Zv.getTruncateString({string:this.address,charsEnd:4,charsStart:4,truncate:"middle"})} </wui-text
          >, please wait a moment.</wui-text
        >
      `:this.isRequired?a.qy`
        <wui-text variant="paragraph-600" color="fg-100" align="center">
          ${this.appName} requires your email for authentication.
        </wui-text>
      `:a.qy`
      <wui-flex flexDirection="column" gap="xs" alignItems="center">
        <wui-text variant="paragraph-600" color="fg-100" align="center" size>
          ${this.appName} would like to collect your email.
        </wui-text>

        <wui-text variant="small-400" color="fg-200" align="center">
          Don't worry, it's optional&mdash;you can skip this step.
        </wui-text>
      </wui-flex>
    `}emailInput(){if(this.loading)return null;const t=t=>{this.email=t.detail};return a.qy`
      <wui-flex flexDirection="column">
        <wui-email-input
          .value=${this.email}
          .disabled=${this.loading}
          @inputChange=${t}
          @keydown=${t=>{"Enter"===t.key&&this.onSubmit()}}
        ></wui-email-input>

        <w3m-email-suffixes-widget
          .email=${this.email}
          @change=${t}
        ></w3m-email-suffixes-widget>
      </wui-flex>
    `}recentEmailsWidget(){return 0===this.recentEmails.length||this.loading?null:a.qy`
      <w3m-recent-emails-widget
        .emails=${this.recentEmails}
        @select=${t=>{this.email=t.detail,this.onSubmit()}}
      ></w3m-recent-emails-widget>
    `}footerActions(){return a.qy`
      <wui-flex flexDirection="row" fullWidth gap="s">
        ${this.isRequired?null:a.qy`<wui-button
              size="lg"
              variant="neutral"
              fullWidth
              .disabled=${this.loading}
              @click=${this.onSkip.bind(this)}
              >Skip this step</wui-button
            >`}

        <wui-button
          size="lg"
          variant="main"
          type="submit"
          fullWidth
          .disabled=${!this.email||!this.isValidEmail(this.email)}
          .loading=${this.loading}
          @click=${this.onSubmit.bind(this)}
        >
          Continue
        </wui-button>
      </wui-flex>
    `}async onSubmit(){if(!(this.siwx instanceof w.u))return void f.P.showError("ReownAuthentication is not initialized. Please contact support.");const t=m.W.getActiveCaipAddress();if(!t)throw new Error("Account is not connected.");if(this.isValidEmail(this.email))try{this.loading=!0;const e=await this.siwx.requestEmailOtp({email:this.email,account:t});this.pushRecentEmail(this.email),null===e.uuid?g.I.replace("SIWXSignMessage"):g.I.replace("DataCaptureOtpConfirm",{email:this.email})}catch(t){f.P.showError("Failed to send email OTP"),this.loading=!1}else f.P.showError("Please provide a valid email.")}onSkip(){g.I.replace("SIWXSignMessage")}getRecentEmails(){const t=b.Ud.getItem(b.Ws.RECENT_EMAILS);return(t?t.split(","):[]).filter(this.isValidEmail.bind(this)).slice(0,3)}pushRecentEmail(t){const e=this.getRecentEmails(),i=Array.from(new Set([t,...e])).slice(0,3);b.Ud.setItem(b.Ws.RECENT_EMAILS,i.join(","))}isValidEmail(t){return/^\S+@\S+\.\S+$/u.test(t)}};S.styles=[k],$([(0,n.wk)()],S.prototype,"email",void 0),$([(0,n.wk)()],S.prototype,"address",void 0),$([(0,n.wk)()],S.prototype,"loading",void 0),$([(0,n.wk)()],S.prototype,"appName",void 0),$([(0,n.wk)()],S.prototype,"siwx",void 0),$([(0,n.wk)()],S.prototype,"isRequired",void 0),$([(0,n.wk)()],S.prototype,"recentEmails",void 0),S=$([(0,o.EM)("w3m-data-capture-view")],S)},60310(t,e,i){i(69807)},45090(t,e,i){i(18409)},20880(t,e,i){var a=i(12618),n=i(25707),o=i(26109),r=i(43494);const s=a.AH`
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
`;var l=function(t,e,i,a){var n,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let c=class extends a.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,a.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};c.styles=[o.W5,s],l([(0,n.MZ)()],c.prototype,"color",void 0),l([(0,n.MZ)()],c.prototype,"size",void 0),c=l([(0,r.E)("wui-loading-spinner")],c)},18409(t,e,i){var a=i(12618),n=i(25707),o=i(53720),r=i(26109),s=i(43494);const l=a.AH`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600,
  .wui-font-micro-500 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var c=function(t,e,i,a){var n,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let u=class extends a.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,a.qy`<slot class=${(0,o.H)(t)}></slot>`}};u.styles=[r.W5,l],c([(0,n.MZ)()],u.prototype,"variant",void 0),c([(0,n.MZ)()],u.prototype,"color",void 0),c([(0,n.MZ)()],u.prototype,"align",void 0),c([(0,n.MZ)()],u.prototype,"lineClamp",void 0),u=c([(0,s.E)("wui-text")],u)},69807(t,e,i){var a=i(12618),n=i(25707),o=i(26109),r=i(63612),s=i(43494);const l=a.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var c=function(t,e,i,a){var n,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let u=class extends a.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&r.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&r.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&r.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&r.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&r.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&r.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&r.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&r.Z.getSpacingStyles(this.margin,3)};\n    `,a.qy`<slot></slot>`}};u.styles=[o.W5,l],c([(0,n.MZ)()],u.prototype,"flexDirection",void 0),c([(0,n.MZ)()],u.prototype,"flexWrap",void 0),c([(0,n.MZ)()],u.prototype,"flexBasis",void 0),c([(0,n.MZ)()],u.prototype,"flexGrow",void 0),c([(0,n.MZ)()],u.prototype,"flexShrink",void 0),c([(0,n.MZ)()],u.prototype,"alignItems",void 0),c([(0,n.MZ)()],u.prototype,"justifyContent",void 0),c([(0,n.MZ)()],u.prototype,"columnGap",void 0),c([(0,n.MZ)()],u.prototype,"rowGap",void 0),c([(0,n.MZ)()],u.prototype,"gap",void 0),c([(0,n.MZ)()],u.prototype,"padding",void 0),c([(0,n.MZ)()],u.prototype,"margin",void 0),u=c([(0,s.E)("wui-flex")],u)},7804(t,e,i){i.d(e,{OA:()=>a,WL:()=>o,u$:()=>n});const a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=t=>(...e)=>({_$litDirective$:t,values:e});class o{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},25707(t,e,i){i.d(e,{MZ:()=>a.M,wk:()=>n.w});var a=i(75694),n=i(44290)},53720(t,e,i){i.d(e,{H:()=>o});var a=i(36752),n=i(7804);const o=(0,n.u$)(class extends n.WL{constructor(t){if(super(t),t.type!==n.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const a=!!e[t];a===this.st.has(t)||this.nt?.has(t)||(a?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return a.c0}})},60031(t,e,i){i.d(e,{J:()=>n});var a=i(36752);const n=t=>t??a.s6}}]);