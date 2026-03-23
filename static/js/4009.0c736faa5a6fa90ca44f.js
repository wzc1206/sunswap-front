"use strict";(globalThis.webpackChunkswap_front=globalThis.webpackChunkswap_front||[]).push([[4009],{94009(t,e,i){var r,o=i(12618),a=i(25707),s=i(48169),n=i(6056),c=i(86360),l=i(26742),p=i(78508),u=i(42733),d=i(90184),h=i(74496),g=i(70148),w=(i(60310),i(77616),i(45101),i(45090),i(60031)),y=(i(2132),i(18409),i(69807),i(26109));!function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"}(r||(r={}));var x=i(43494);i(36887),i(12851);const m=o.AH`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var f=function(t,e,i,r){var o,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,i,s):o(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let v=class extends o.WF{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,e]=this.images,i="NFT"===t?.type,r=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",a=(e?.url?"NFT"===e.type:i)?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`\n    --local-left-border-radius: ${r};\n    --local-right-border-radius: ${a};\n    `,o.qy`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,e]=this.images,i=t?.type;return 2===this.images.length&&(t?.url||e?.url)?o.qy`<div class="swap-images-container">
        ${t?.url?o.qy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${e?.url?o.qy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t?.url?o.qy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:"NFT"===i?o.qy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:o.qy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t,e="accent-100";return t=this.getIcon(),this.status&&(e=this.getStatusColor()),t?o.qy`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};v.styles=[m],f([(0,a.MZ)()],v.prototype,"type",void 0),f([(0,a.MZ)()],v.prototype,"status",void 0),f([(0,a.MZ)()],v.prototype,"direction",void 0),f([(0,a.MZ)({type:Boolean})],v.prototype,"onlyDirectionIcon",void 0),f([(0,a.MZ)({type:Array})],v.prototype,"images",void 0),f([(0,a.MZ)({type:Object})],v.prototype,"secondImage",void 0),v=f([(0,x.E)("wui-transaction-visual")],v);const b=o.AH`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var $=function(t,e,i,r){var o,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,i,s):o(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let T=class extends o.WF{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return o.qy`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,w.J)(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${(0,w.J)(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${r[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const t=this.descriptions?.[0];return t?o.qy`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){const t=this.descriptions?.[1];return t?o.qy`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};T.styles=[y.W5,b],$([(0,a.MZ)()],T.prototype,"type",void 0),$([(0,a.MZ)({type:Array})],T.prototype,"descriptions",void 0),$([(0,a.MZ)()],T.prototype,"date",void 0),$([(0,a.MZ)({type:Boolean})],T.prototype,"onlyDirectionIcon",void 0),$([(0,a.MZ)()],T.prototype,"status",void 0),$([(0,a.MZ)()],T.prototype,"direction",void 0),$([(0,a.MZ)({type:Array})],T.prototype,"images",void 0),$([(0,a.MZ)({type:Array})],T.prototype,"price",void 0),$([(0,a.MZ)({type:Array})],T.prototype,"amount",void 0),$([(0,a.MZ)({type:Array})],T.prototype,"symbol",void 0),T=$([(0,x.E)("wui-transaction-list-item")],T),i(41497);const k=o.AH`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let A=class extends o.WF{render(){return o.qy`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};A.styles=[y.W5,k],A=function(t,e,i,r){var o,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,i,s):o(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s}([(0,x.E)("wui-transaction-list-item-loader")],A);var C=i(10152);const D=o.AH`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
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

  .emptyContainer {
    height: 100%;
  }
`;var O=function(t,e,i,r){var o,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,i,s):o(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};const I="last-transaction";let R=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=n.W.state.activeCaipAddress,this.transactionsByYear=c.W.state.transactionsByYear,this.loading=c.W.state.loading,this.empty=c.W.state.empty,this.next=c.W.state.next,c.W.clearCursor(),this.unsubscribe.push(n.W.subscribeKey("activeCaipAddress",t=>{t&&this.caipAddress!==t&&(c.W.resetTransactions(),c.W.fetchTransactions(t)),this.caipAddress=t}),n.W.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),c.W.subscribe(t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return o.qy` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){c.W.resetTransactions(),this.caipAddress&&c.W.fetchTransactions(l.w.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(t=>{const e=parseInt(t,10),i=new Array(12).fill(null).map((t,i)=>{const r=g.tt.getTransactionGroupTitle(e,i),o=this.transactionsByYear[e]?.[i];return{groupTitle:r,transactions:o}}).filter(({transactions:t})=>t).reverse();return i.map(({groupTitle:t,transactions:e},r)=>{const a=r===i.length-1;return e?o.qy`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${a?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200" data-testid="group-title"
                >${t}</wui-text
              >
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(e,a)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(t,e){const{date:i,descriptions:r,direction:a,isAllNFT:s,images:n,status:c,transfers:l,type:p}=this.getTransactionListItemProps(t),u=l?.length>1;return 2!==l?.length||s?u?l.map((t,r)=>{const a=g.tt.getTransferDescription(t),s=e&&r===l.length-1;return o.qy` <wui-transaction-list-item
          date=${i}
          direction=${t.direction}
          id=${s&&this.next?I:""}
          status=${c}
          type=${p}
          .onlyDirectionIcon=${!0}
          .images=${[n[r]]}
          .descriptions=${[a]}
        ></wui-transaction-list-item>`}):o.qy`
      <wui-transaction-list-item
        date=${i}
        .direction=${a}
        id=${e&&this.next?I:""}
        status=${c}
        type=${p}
        .images=${n}
        .descriptions=${r}
      ></wui-transaction-list-item>
    `:o.qy`
        <wui-transaction-list-item
          date=${i}
          .direction=${a}
          id=${e&&this.next?I:""}
          status=${c}
          type=${p}
          .images=${n}
          .descriptions=${r}
        ></wui-transaction-list-item>
      `}templateTransactions(t,e){return t.map((i,r)=>{const a=e&&r===t.length-1;return o.qy`${this.templateRenderTransaction(i,a)}`})}emptyStateActivity(){return o.qy`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
      data-testid="empty-activity-state"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return o.qy`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
      data-testid="empty-account-state"
    >
      <wui-icon-box
        icon="swapHorizontal"
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
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?o.qy`${this.emptyStateAccount()}`:o.qy`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(o.qy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t):null}onReceiveClick(){p.I.push("WalletReceive")}createPaginationObserver(){const{projectId:t}=u.H.state;this.paginationObserver=new IntersectionObserver(([e])=>{e?.isIntersecting&&!this.loading&&(c.W.fetchTransactions(l.w.getPlainAddress(this.caipAddress)),d.E.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:l.w.getPlainAddress(this.caipAddress),projectId:t,cursor:this.next,isSmartAccount:(0,h.lj)(n.W.state.activeChain)===C.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const t=this.shadowRoot?.querySelector(`#${I}`);t&&this.paginationObserver?.observe(t)}getTransactionListItemProps(t){const e=s.r.formatDate(t?.metadata?.minedAt),i=g.tt.getTransactionDescriptions(t),r=t?.transfers,o=t?.transfers?.[0],a=Boolean(o)&&t?.transfers?.every(t=>Boolean(t.nft_info)),n=g.tt.getTransactionImages(r);return{date:e,direction:o?.direction,descriptions:i,isAllNFT:a,images:n,status:t.metadata?.status,transfers:r,type:t.metadata?.operationType}}};R.styles=D,O([(0,a.MZ)()],R.prototype,"page",void 0),O([(0,a.wk)()],R.prototype,"caipAddress",void 0),O([(0,a.wk)()],R.prototype,"transactionsByYear",void 0),O([(0,a.wk)()],R.prototype,"loading",void 0),O([(0,a.wk)()],R.prototype,"empty",void 0),O([(0,a.wk)()],R.prototype,"next",void 0),R=O([(0,g.EM)("w3m-activity-list")],R)},41497(t,e,i){var r=i(12618),o=i(25707),a=i(43494);const s=r.AH`
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
`;var n=function(t,e,i,r){var o,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,i,s):o(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let c=class extends r.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,r.qy`<slot></slot>`}};c.styles=[s],n([(0,o.MZ)()],c.prototype,"width",void 0),n([(0,o.MZ)()],c.prototype,"height",void 0),n([(0,o.MZ)()],c.prototype,"borderRadius",void 0),n([(0,o.MZ)()],c.prototype,"variant",void 0),c=n([(0,a.E)("wui-shimmer")],c)}}]);