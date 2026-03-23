"use strict";(globalThis.webpackChunkswap_front=globalThis.webpackChunkswap_front||[]).push([[2799],{45180(t,e,i){i.d(e,{H:()=>T});var o=i(12618),r=i(25707),n=i(78508),s=i(36010),a=i(26742),l=i(21871),u=i(70148),c=(i(60310),i(45101),i(93373),i(69807),i(26109)),p=i(63612),d=i(43494);const h=o.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var g=function(t,e,i,o){var r,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};let w=class extends o.WF{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return o.qy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};w.styles=[c.W5,c.fD,h],g([(0,r.MZ)({type:Boolean})],w.prototype,"disabled",void 0),g([(0,r.MZ)({type:String})],w.prototype,"value",void 0),w=g([(0,d.E)("wui-input-numeric")],w);const f=o.AH`
  :host {
    position: relative;
    display: block;
  }
`;var m=function(t,e,i,o){var r,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};let b=class extends o.WF{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=t=>this.values.slice(0,t).every(t=>""!==t),this.handleKeyDown=(t,e)=>{const i=t.target,o=this.getInputElement(i);if(!o)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(t.key)&&t.preventDefault();const r=o.selectionStart;switch(t.key){case"ArrowLeft":r&&o.setSelectionRange(r+1,r+1),this.focusInputField("prev",e);break;case"ArrowRight":case"Shift":this.focusInputField("next",e);break;case"Delete":case"Backspace":""===o.value?this.focusInputField("prev",e):this.updateInput(o,e,"")}},this.focusInputField=(t,e)=>{if("next"===t){const t=e+1;if(!this.shouldInputBeEnabled(t))return;const i=this.numerics[t<this.length?t:e],o=i?this.getInputElement(i):void 0;o&&(o.disabled=!1,o.focus())}if("prev"===t){const t=e-1,i=this.numerics[t>-1?t:e],o=i?this.getInputElement(i):void 0;o&&o.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));const t=this.shadowRoot?.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t)),this.numerics[0]?.focus()}render(){return o.qy`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((t,e)=>o.qy`
            <wui-input-numeric
              @input=${t=>this.handleInput(t,e)}
              @click=${t=>this.selectInput(t)}
              @keydown=${t=>this.handleKeyDown(t,e)}
              .disabled=${!this.shouldInputBeEnabled(e)}
              .value=${this.values[e]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(t,e,i){const o=this.numerics[e],r=t||(o?this.getInputElement(o):void 0);r&&(r.value=i,this.values=this.values.map((t,o)=>o===e?i:t))}selectInput(t){const e=t.target;if(e){const t=this.getInputElement(e);t?.select()}}handleInput(t,e){const i=t.target,o=this.getInputElement(i);if(o){const i=o.value;"insertFromPaste"===t.inputType?this.handlePaste(o,i,e):p.Z.isNumber(i)&&t.data?(this.updateInput(o,e,t.data),this.focusInputField("next",e)):this.updateInput(o,e,"")}this.dispatchInputChangeEvent()}handlePaste(t,e,i){const o=e[0];if(o&&p.Z.isNumber(o)){this.updateInput(t,i,o);const r=e.substring(1);if(i+1<this.length&&r.length){const t=this.numerics[i+1],e=t?this.getInputElement(t):void 0;e&&this.handlePaste(e,r,i+1)}else this.focusInputField("next",i)}else this.updateInput(t,i,"")}getInputElement(t){return t.shadowRoot?.querySelector("input")?t.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const t=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:t,bubbles:!0,composed:!0}))}};b.styles=[c.W5,f],m([(0,r.MZ)({type:Number})],b.prototype,"length",void 0),m([(0,r.MZ)({type:String})],b.prototype,"otp",void 0),m([(0,r.wk)()],b.prototype,"values",void 0),b=m([(0,d.E)("wui-otp")],b),i(45090);var v=i(66409);const x=o.AH`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var y,I=function(t,e,i,o){var r,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};let T=y=class extends o.WF{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=v.Q.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=n.I.state.data?.email,this.authConnector=s.a.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const t=Boolean(this.timeoutTimeLeft),e=this.getFooterLabels(t);return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","xl","0","xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?o.qy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:o.qy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?o.qy`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${e.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${t}>
            ${e.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=v.Q.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=v.Q.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(t){try{this.loading||(this.otp=t.detail,this.shouldSubmitOnOtpChange()&&(this.loading=!0,await(this.onOtpSubmit?.(this.otp))))}catch(t){this.error=a.w.parseError(t),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!s.a.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),l.P.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(t){l.P.showError(t)}finally{this.loading=!1}}getFooterLabels(t){return this.onStartOver?{title:"Something wrong?",action:"Try again "+(t?`in ${this.timeoutTimeLeft}s`:"")}:{title:"Didn't receive it?",action:"Resend "+(t?`in ${this.timeoutTimeLeft}s`:"Code")}}shouldSubmitOnOtpChange(){return this.authConnector&&this.otp.length===y.OTP_LENGTH}};T.OTP_LENGTH=6,T.styles=x,I([(0,r.wk)()],T.prototype,"loading",void 0),I([(0,r.wk)()],T.prototype,"timeoutTimeLeft",void 0),I([(0,r.wk)()],T.prototype,"error",void 0),T=y=I([(0,u.EM)("w3m-email-otp-widget")],T)},45101(t,e,i){var o=i(12618),r=i(25707),n=i(60031),s=(i(18409),i(26109)),a=i(43494);const l=o.AH`
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
`;var u=function(t,e,i,o){var r,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s};let c=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,n.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};c.styles=[s.W5,s.fD,l],u([(0,r.MZ)()],c.prototype,"tabIdx",void 0),u([(0,r.MZ)({type:Boolean})],c.prototype,"disabled",void 0),u([(0,r.MZ)()],c.prototype,"color",void 0),c=u([(0,a.E)("wui-link")],c)},93373(t,e,i){i(20880)}}]);