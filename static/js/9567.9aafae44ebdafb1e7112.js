"use strict";(globalThis.webpackChunkswap_front=globalThis.webpackChunkswap_front||[]).push([[9567],{29567(t,e,a){a.r(e),a.d(e,{W3mWalletReceiveView:()=>$});var i=a(12618),r=a(25707),o=a(60031),s=a(63450),n=a(6056),c=a(21871),l=a(27601),d=a(68996),u=a(74496),w=a(78508),p=a(26742),h=a(70148),g=(a(85999),a(2132),a(36887),a(18409),a(69807),a(26109)),b=a(43494);const v=i.AH`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var m=function(t,e,a,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,i);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(s=(o<3?r(s):o>3?r(e,a,s):r(e,a))||s);return o>3&&s&&Object.defineProperty(e,a,s),s};let f=class extends i.WF{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return i.qy`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const t=this.networkImages.slice(0,5);return i.qy` <wui-flex class="networks">
      ${t?.map(t=>i.qy` <wui-flex class="network-icon"> <wui-image src=${t}></wui-image> </wui-flex>`)}
    </wui-flex>`}};f.styles=[g.W5,g.fD,v],m([(0,r.MZ)({type:Array})],f.prototype,"networkImages",void 0),m([(0,r.MZ)()],f.prototype,"text",void 0),f=m([(0,b.E)("wui-compatible-network")],f),a(60310),a(66283),a(45090);var y=a(10152);const x=i.AH`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var k=function(t,e,a,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,i);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(s=(o<3?r(s):o>3?r(e,a,s):r(e,a))||s);return o>3&&s&&Object.defineProperty(e,a,s),s};let $=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.address=s.U.state.address,this.profileName=s.U.state.profileName,this.network=n.W.state.activeCaipNetwork,this.unsubscribe.push(s.U.subscribe(t=>{t.address?(this.address=t.address,this.profileName=t.profileName):c.P.showError("Account not found")}),n.W.subscribeKey("activeCaipNetwork",t=>{t?.id&&(this.network=t)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const t=l.$.getNetworkImage(this.network);return i.qy` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${h.Zv.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${t||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${d.W.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${(0,o.J)(d.W.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const t=n.W.getAllRequestedCaipNetworks(),e=n.W.checkIfSmartAccountEnabled(),a=n.W.state.activeCaipNetwork,r=t.filter(t=>t?.chainNamespace===a?.chainNamespace);if((0,u.lj)(a?.chainNamespace)===y.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&e)return a?i.qy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[l.$.getNetworkImage(a)??""]}
      ></wui-compatible-network>`:null;const o=r?.filter(t=>t?.assets?.imageId)?.slice(0,5),s=o.map(l.$.getNetworkImage).filter(Boolean);return i.qy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${s}
    ></wui-compatible-network>`}onReceiveClick(){w.I.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(p.w.copyToClopboard(this.address),c.P.showSuccess("Address copied"))}catch{c.P.showError("Failed to copy")}}};$.styles=x,k([(0,r.wk)()],$.prototype,"address",void 0),k([(0,r.wk)()],$.prototype,"profileName",void 0),k([(0,r.wk)()],$.prototype,"network",void 0),$=k([(0,h.EM)("w3m-wallet-receive-view")],$)},85999(t,e,a){var i=a(12618),r=a(25707),o=(a(2132),a(36887),a(18409),a(26109)),s=a(43494);const n=i.AH`
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
`;var c=function(t,e,a,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,i);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(s=(o<3?r(s):o>3?r(e,a,s):r(e,a))||s);return o>3&&s&&Object.defineProperty(e,a,s),s};let l=class extends i.WF{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t="sm"===this.size?"small-600":"paragraph-600";return i.qy`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.imageSrc?i.qy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        ${this.icon?i.qy`<wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>`:null}
      </button>
    `}};l.styles=[o.W5,o.fD,n],c([(0,r.MZ)()],l.prototype,"variant",void 0),c([(0,r.MZ)()],l.prototype,"imageSrc",void 0),c([(0,r.MZ)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,r.MZ)()],l.prototype,"icon",void 0),c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)()],l.prototype,"text",void 0),l=c([(0,s.E)("wui-chip-button")],l)}}]);