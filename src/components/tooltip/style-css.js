import {css} from 'lit-element';

export const style = css`:host{--bg: #4a4a4ef8;--text: #fff;--shadow: rgba(0, 0, 0, 0.35);--dink: 5px;position:relative;display:inline-block;overflow:visible}:host::before,:host::after{position:absolute;text-transform:none;visibility:hidden;opacity:0;-webkit-transition:opacity .2s ease-in-out,visibility .2s ease-in-out,-webkit-transform .2s cubic-bezier(0.71, 1.7, 0.77, 1.24);transition:opacity .2s ease-in-out,visibility .2s ease-in-out,-webkit-transform .2s cubic-bezier(0.71, 1.7, 0.77, 1.24);transition:opacity .2s ease-in-out,visibility .2s ease-in-out,transform .2s cubic-bezier(0.71, 1.7, 0.77, 1.24);transition:opacity .2s ease-in-out,visibility .2s ease-in-out,transform .2s cubic-bezier(0.71, 1.7, 0.77, 1.24),-webkit-transform .2s cubic-bezier(0.71, 1.7, 0.77, 1.24);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}:host::before{z-index:1001;width:0;height:0;border:var(--dink) solid transparent;content:""}:host::after{z-index:1000;width:-webkit-max-content;width:-moz-max-content;width:max-content;min-width:3em;max-width:20em;padding:6px 10px;color:var(--text);text-align:center;background:var(--bg);border-radius:.3em;-webkit-box-shadow:0 1em 2em -0.5em var(--shadow);box-shadow:0 1em 2em -0.5em var(--shadow);content:attr(text)}:host([text]:hover:not([show=false]))::before,:host([text]:hover:not([show=false]))::after,:host([text][show=true])::before,:host([text][show=true])::after,:host([text]:focus-within:not([show=false]))::before,:host([text]:focus-within:not([show=false]))::after{visibility:visible;opacity:1}:host(:not([flow]))::before,:host(:not([flow]))::after,:host([flow^=up])::before,:host([flow^=up])::after{bottom:100%;left:50%;-webkit-transform:translate(-50%, -1px);transform:translate(-50%, -1px)}:host(:not([flow]))::before,:host([flow^=up])::before{left:calc(var(--percent, 0.5) * 100%);margin-bottom:-9px;border-top-color:var(--bg)}:host([flow=up-left])::before{--percent: 0.2}:host([flow=up-right])::before{--percent: 0.8}:host([flow^=up]:hover:not([show=false]))::before,:host([flow^=up]:hover:not([show=false]))::after,:host([flow^=up][show=true])::before,:host([flow^=up][show=true])::after,:host([flow^=up]:focus-within:not([show=false]))::before,:host([flow^=up]:focus-within:not([show=false]))::after{-webkit-transform:translate(-50%, -0.5em);transform:translate(-50%, -0.5em)}:host(:not([flow]):hover:not([show=false]))::before,:host(:not([flow]):hover:not([show=false]))::after,:host(:not([flow])[show=true])::before,:host(:not([flow])[show=true])::after,:host(:not([flow]):focus-within:not([show=false]))::before,:host(:not([flow]):focus-within:not([show=false]))::after{-webkit-transform:translate(-50%, -0.5em);transform:translate(-50%, -0.5em)}:host([flow^=down])::before,:host([flow^=down])::after{top:100%;left:50%;-webkit-transform:translate(-50%, 1em);transform:translate(-50%, 1em)}:host([flow^=down])::before{left:calc(var(--percent, 0.5) * 100%);margin-top:-9px;border-bottom-color:var(--bg)}:host([flow=down-left])::before{--percent: 0.2}:host([flow=down-right])::before{--percent: 0.8}:host([flow^=down]:hover:not([show=false]))::before,:host([flow^=down]:hover:not([show=false]))::after,:host([flow^=down][show=true])::before,:host([flow^=down][show=true])::after,:host([flow^=down]:focus-within:not([show=false]))::before,:host([flow^=down]:focus-within:not([show=false]))::after{-webkit-transform:translate(-50%, 0.5em);transform:translate(-50%, 0.5em)}:host([flow^=left])::before,:host([flow^=left])::after{top:50%;right:100%;-webkit-transform:translate(-1em, -50%);transform:translate(-1em, -50%)}:host([flow^=left])::before{top:calc(var(--percent, 0.5) * 100%);margin-right:-9px;border-left-color:var(--bg)}:host([flow^=left]:hover:not([show=false]))::before,:host([flow^=left]:hover:not([show=false]))::after,:host([flow^=left][show=true])::before,:host([flow^=left][show=true])::after,:host([flow^=left]:focus-within:not([show=false]))::before,:host([flow^=left]:focus-within:not([show=false]))::after{-webkit-transform:translate(-0.5em, -50%);transform:translate(-0.5em, -50%)}:host([flow^=right])::before,:host([flow^=right])::after{top:50%;left:100%;-webkit-transform:translate(1em, -50%);transform:translate(1em, -50%)}:host([flow^=right])::before{top:calc(var(--percent, 0.5) * 100%);margin-left:-9px;border-right-color:var(--bg)}:host([flow^=right]:hover:not([show=false]))::before,:host([flow^=right]:hover:not([show=false]))::after,:host([flow^=right][show=true])::before,:host([flow^=right][show=true])::after,:host([flow^=right]:focus-within:not([show=false]))::before,:host([flow^=right]:focus-within:not([show=false]))::after{-webkit-transform:translate(0.5em, -50%);transform:translate(0.5em, -50%)}:host([text=""])::after,:host([text=""])::before{display:none !important}`;