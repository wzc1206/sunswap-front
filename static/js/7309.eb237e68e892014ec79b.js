"use strict";(globalThis.webpackChunkswap_front=globalThis.webpackChunkswap_front||[]).push([[7309],{67309(e,t,i){i.r(t),i.d(t,{W3mEmailLoginView:()=>_,W3mEmailOtpWidget:()=>d.H,W3mEmailVerifyDeviceView:()=>E,W3mEmailVerifyOtpView:()=>h,W3mUpdateEmailPrimaryOtpView:()=>O,W3mUpdateEmailSecondaryOtpView:()=>C,W3mUpdateEmailWalletView:()=>I});var a=i(6056),n=i(31211),r=i(42733),o=i(90184),l=i(96396),s=i(78508),c=i(21871),p=i(26742),u=i(70148),d=i(45180);let h=class extends d.H{constructor(){super(...arguments),this.onOtpSubmit=async e=>{try{if(this.authConnector){const t=a.W.state.activeChain,i=n.x.getConnections(t),p=r.H.state.remoteFeatures?.multiWallet,u=i.length>0;if(await this.authConnector.provider.connectOtp({otp:e}),o.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),!t)throw new Error("Active chain is not set on ChainControll");if(await n.x.connectExternal(this.authConnector,t),o.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown"}}),r.H.state.remoteFeatures?.emailCapture)return;if(r.H.state.siwx)return void l.W.close();if(u&&p)return s.I.replace("ProfileWallets"),void c.P.showSuccess("New Wallet Added");l.W.close()}}catch(e){throw o.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:p.w.parseError(e)}}),e}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),o.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};h=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o}([(0,u.EM)("w3m-email-verify-otp-view")],h);var w=i(12618),g=i(25707),m=i(36010);i(60310),i(77616),i(45101),i(45090);const v=w.AH`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var f=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let E=class extends w.WF{constructor(){super(),this.email=s.I.state.data?.email,this.authConnector=m.a.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return w.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),o.E.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),o.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),s.I.replace("EmailVerifyOtp",{email:this.email})}catch(e){s.I.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),c.P.showSuccess("Code email resent")}}catch(e){c.P.showError(e)}finally{this.loading=!1}}};E.styles=v,f([(0,g.wk)()],E.prototype,"loading",void 0),E=f([(0,u.EM)("w3m-email-verify-device-view")],E);var b=i(7610);i(58461),i(38913);const y=w.AH`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var x=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let I=class extends w.WF{constructor(){super(...arguments),this.formRef=(0,b._)(),this.initialEmail=s.I.state.data?.email??"",this.redirectView=s.I.state.data?.redirectView,this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){return w.qy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,b.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=m.a.getAuthConnector();if(!t)throw new Error("w3m-update-email-wallet: Auth connector not found");const i=await t.provider.updateEmail({email:this.email});o.E.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===i.action?s.I.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):s.I.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(e){c.P.showError(e),this.loading=!1}}buttonsTemplate(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?w.qy`
      <wui-flex gap="s">
        <wui-button size="md" variant="neutral" fullWidth @click=${s.I.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="main"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `:w.qy`
        <wui-button
          size="md"
          variant="main"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `}};I.styles=y,x([(0,g.wk)()],I.prototype,"email",void 0),x([(0,g.wk)()],I.prototype,"loading",void 0),I=x([(0,u.EM)("w3m-update-email-wallet-view")],I);let O=class extends d.H{constructor(){super(),this.email=s.I.state.data?.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),o.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),s.I.replace("UpdateEmailSecondaryOtp",s.I.state.data))}catch(e){throw o.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:p.w.parseError(e)}}),e}},this.onStartOver=()=>{s.I.replace("UpdateEmailWallet",s.I.state.data)}}};O=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o}([(0,u.EM)("w3m-update-email-primary-otp-view")],O);let C=class extends d.H{constructor(){super(),this.email=s.I.state.data?.newEmail,this.redirectView=s.I.state.data?.redirectView,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),o.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),this.redirectView&&s.I.reset(this.redirectView))}catch(e){throw o.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:p.w.parseError(e)}}),e}},this.onStartOver=()=>{s.I.replace("UpdateEmailWallet",s.I.state.data)}}};C=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o}([(0,u.EM)("w3m-update-email-secondary-otp-view")],C);var R=i(24376),k=i(69510),A=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let _=class extends w.WF{constructor(){super(),this.authConnector=m.a.getAuthConnector(),this.isEmailEnabled=r.H.state.remoteFeatures?.email,this.isAuthEnabled=this.checkIfAuthEnabled(m.a.state.connectors),this.connectors=m.a.state.connectors,m.a.subscribeKey("connectors",e=>{this.connectors=e,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw new Error("w3m-email-login-view: Email is not enabled");if(!this.isAuthEnabled)throw new Error("w3m-email-login-view: No auth connector provided");return w.qy`<wui-flex
      flexDirection="column"
      .padding=${["3xs","m","m","m"]}
      gap="l"
    >
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(e){const t=e.filter(e=>e.type===k.o.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return R.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}};A([(0,g.wk)()],_.prototype,"connectors",void 0),_=A([(0,u.EM)("w3m-email-login-view")],_)},38913(e,t,i){var a=i(12618),n=i(25707),r=i(60031),o=(i(18409),i(26109)),l=i(43494);i(98848);const s=a.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var c=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let p=class extends a.WF{constructor(){super(...arguments),this.disabled=!1}render(){return a.qy`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,r.J)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?a.qy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};p.styles=[o.W5,s],c([(0,n.MZ)()],p.prototype,"errorMessage",void 0),c([(0,n.MZ)({type:Boolean})],p.prototype,"disabled",void 0),c([(0,n.MZ)()],p.prototype,"value",void 0),c([(0,n.MZ)()],p.prototype,"tabIdx",void 0),p=c([(0,l.E)("wui-email-input")],p)},77616(e,t,i){i(12851)},98848(e,t,i){var a=i(12618),n=i(25707),r=i(53720),o=i(60031),l=i(7610),s=(i(2132),i(26109)),c=i(43494);const p=a.AH`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var u=function(e,t,i,a){var n,r=arguments.length,o=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,a);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let d=class extends a.WF{constructor(){super(...arguments),this.inputElementRef=(0,l._)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-padding-right-${this.inputRightPadding}`,t=`wui-size-${this.size}`,i={[t]:!0,[e]:Boolean(this.inputRightPadding)};return a.qy`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${(0,l.K)(this.inputElementRef)}
        class=${(0,r.H)(i)}
        type=${this.type}
        enterkeyhint=${(0,o.J)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        @keydown=${this.onKeyDown}
        .value=${this.value||""}
        tabindex=${(0,o.J)(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?a.qy`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};d.styles=[s.W5,s.fD,p],u([(0,n.MZ)()],d.prototype,"size",void 0),u([(0,n.MZ)()],d.prototype,"icon",void 0),u([(0,n.MZ)({type:Boolean})],d.prototype,"disabled",void 0),u([(0,n.MZ)()],d.prototype,"placeholder",void 0),u([(0,n.MZ)()],d.prototype,"type",void 0),u([(0,n.MZ)()],d.prototype,"keyHint",void 0),u([(0,n.MZ)()],d.prototype,"value",void 0),u([(0,n.MZ)()],d.prototype,"inputRightPadding",void 0),u([(0,n.MZ)()],d.prototype,"tabIdx",void 0),u([(0,n.MZ)({attribute:!1})],d.prototype,"onKeyDown",void 0),d=u([(0,c.E)("wui-input-text")],d)}}]);