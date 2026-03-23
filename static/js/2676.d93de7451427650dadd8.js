"use strict";(globalThis.webpackChunkswap_front=globalThis.webpackChunkswap_front||[]).push([[2676],{64951(o,t,e){e.r(t),e.d(t,{W3mTransactionsView:()=>c});var r=e(12618),i=e(70148);e(60310),e(94009);const s=r.AH`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let c=class extends r.WF{render(){return r.qy`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};c.styles=s,c=function(o,t,e,r){var i,s=arguments.length,c=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(c=(s<3?i(c):s>3?i(t,e,c):i(t,e))||c);return s>3&&c&&Object.defineProperty(t,e,c),c}([(0,i.EM)("w3m-transactions-view")],c)},77616(o,t,e){e(12851)},45101(o,t,e){var r=e(12618),i=e(25707),s=e(60031),c=(e(18409),e(26109)),a=e(43494);const n=r.AH`
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
`;var l=function(o,t,e,r){var i,s=arguments.length,c=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(c=(s<3?i(c):s>3?i(t,e,c):i(t,e))||c);return s>3&&c&&Object.defineProperty(t,e,c),c};let d=class extends r.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return r.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,s.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};d.styles=[c.W5,c.fD,n],l([(0,i.MZ)()],d.prototype,"tabIdx",void 0),l([(0,i.MZ)({type:Boolean})],d.prototype,"disabled",void 0),l([(0,i.MZ)()],d.prototype,"color",void 0),d=l([(0,a.E)("wui-link")],d)},36887(o,t,e){var r=e(12618),i=e(25707),s=e(26109),c=e(43494);const a=r.AH`
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
`;var n=function(o,t,e,r){var i,s=arguments.length,c=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(c=(s<3?i(c):s>3?i(t,e,c):i(t,e))||c);return s>3&&c&&Object.defineProperty(t,e,c),c};let l=class extends r.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.objectFit="cover"}render(){return this.objectFit&&(this.dataset.objectFit=this.objectFit),this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,r.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[s.W5,s.ck,a],n([(0,i.MZ)()],l.prototype,"src",void 0),n([(0,i.MZ)()],l.prototype,"alt",void 0),n([(0,i.MZ)()],l.prototype,"size",void 0),n([(0,i.MZ)()],l.prototype,"objectFit",void 0),l=n([(0,c.E)("wui-image")],l)},12851(o,t,e){var r=e(12618),i=e(25707),s=(e(2132),e(26109)),c=e(43494);const a=r.AH`
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
`;var n=function(o,t,e,r){var i,s=arguments.length,c=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,t,e,r);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(c=(s<3?i(c):s>3?i(t,e,c):i(t,e))||c);return s>3&&c&&Object.defineProperty(t,e,c),c};let l=class extends r.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const o=this.iconSize||this.size,t="lg"===this.size,e="xl"===this.size,i=t?"12%":"16%",s=t?"xxs":e?"s":"3xl",c="gray"===this.background,a="opaque"===this.background,n="accent-100"===this.backgroundColor&&a||"success-100"===this.backgroundColor&&a||"error-100"===this.backgroundColor&&a||"inverse-100"===this.backgroundColor&&a;let l=`var(--wui-color-${this.backgroundColor})`;return n?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:c&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${n||c?"100%":i};\n       --local-border-radius: var(--wui-border-radius-${s});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,r.qy` <wui-icon color=${this.iconColor} size=${o} name=${this.icon}></wui-icon> `}};l.styles=[s.W5,s.fD,a],n([(0,i.MZ)()],l.prototype,"size",void 0),n([(0,i.MZ)()],l.prototype,"backgroundColor",void 0),n([(0,i.MZ)()],l.prototype,"iconColor",void 0),n([(0,i.MZ)()],l.prototype,"iconSize",void 0),n([(0,i.MZ)()],l.prototype,"background",void 0),n([(0,i.MZ)({type:Boolean})],l.prototype,"border",void 0),n([(0,i.MZ)()],l.prototype,"borderColor",void 0),n([(0,i.MZ)()],l.prototype,"icon",void 0),l=n([(0,c.E)("wui-icon-box")],l)}}]);