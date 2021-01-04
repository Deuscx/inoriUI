import {css} from 'lit-element';

export const style = css`:host{display:grid;grid-template-columns:repeat(24, 1fr);-webkit-box-pack:var(--justify);-ms-flex-pack:var(--justify);justify-content:var(--justify);-webkit-column-gap:var(--colgap, 0);-moz-column-gap:var(--colgap, 0);column-gap:var(--colgap, 0);row-gap:var(--rowgap, 0)}`;
