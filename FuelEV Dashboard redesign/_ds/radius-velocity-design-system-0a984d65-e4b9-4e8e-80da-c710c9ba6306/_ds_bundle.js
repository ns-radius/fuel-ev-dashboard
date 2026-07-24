/* @ds-bundle: {"format":3,"namespace":"RadiusVelocityDesignSystem_0a984d","components":[{"name":"IconCard","sourcePath":"components/content/IconCard.jsx"},{"name":"ProductTile","sourcePath":"components/content/ProductTile.jsx"},{"name":"UspList","sourcePath":"components/content/UspList.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"ICONS","sourcePath":"components/icons/icon-data.js"},{"name":"ICON_NAMES","sourcePath":"components/icons/icon-data.js"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/content/IconCard.jsx":"4a91b4682666","components/content/ProductTile.jsx":"0bcc328b2123","components/content/UspList.jsx":"3b2075418e26","components/core/Badge.jsx":"48b05111994a","components/core/Button.jsx":"f698a5d497be","components/core/Card.jsx":"ddb60e81d307","components/core/injectStyles.js":"2924b80c4c2a","components/data/Table.jsx":"925500fd944a","components/feedback/Accordion.jsx":"f16f9a58988d","components/feedback/Alert.jsx":"06a37ef599e5","components/forms/Checkbox.jsx":"a850614bb5b4","components/forms/Input.jsx":"3fc750f10390","components/icons/Icon.jsx":"1deb1ab3a228","components/icons/icon-data.js":"990396656bba","components/navigation/Tabs.jsx":"9320cb8acc30","ui_kits/landing-example/tweaks-panel.jsx":"6591467622ed","ui_kits/myradius/DashNav.jsx":"e79724834103","ui_kits/myradius/Dashboard.jsx":"6c19f2c16058","ui_kits/radius-com/Chrome.jsx":"dbccc9e94656","ui_kits/radius-com/HomePage.jsx":"1e14c41155e9"},"inlinedExternals":[],"unexposedExports":[{"name":"injectStyles","sourcePath":"components/core/injectStyles.js"}]} */

(() => {

const __ds_ns = (window.RadiusVelocityDesignSystem_0a984d = window.RadiusVelocityDesignSystem_0a984d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/injectStyles.js
try { (() => {
// Injects a component's CSS into the document <head> exactly once.
// Used by Radius components so :hover / :active / :disabled states work
// without a build step or external stylesheet.
const injected = typeof window !== "undefined" ? window.__rvStyles ||= new Set() : new Set();
function injectStyles(id, css) {
  if (typeof document === "undefined" || injected.has(id)) return;
  injected.add(id);
  const el = document.createElement("style");
  el.setAttribute("data-rv", id);
  el.textContent = css;
  document.head.appendChild(el);
}
Object.assign(__ds_scope, { injectStyles });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/injectStyles.js", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles("rv-badge", `
.rv-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--font-sans); font-weight: var(--fw-semibold);
  font-size: 12px; line-height: 1; letter-spacing: .3px;
  padding: 6px 12px; border-radius: var(--radius-xs); white-space: nowrap;
}
.rv-badge--pill { border-radius: var(--radius-pill); padding: 6px 14px; }
.rv-badge--red    { background: var(--radius-red); color: var(--white); }
.rv-badge--black  { background: var(--black); color: var(--white); }
.rv-badge--success{ background: var(--success-green); color: var(--midnight); }
.rv-badge--info   { background: var(--info-blue); color: var(--white); }
.rv-badge--neutral{ background: var(--accent-grey); color: var(--ink); box-shadow: var(--hairline); }
.rv-badge--outline{ background: transparent; color: var(--ink); box-shadow: var(--hairline); }
`);

/**
 * Badge / Pill — small status or category label.
 */
function Badge({
  children,
  tone = "red",
  pill = false,
  className = "",
  ...rest
}) {
  const cls = ["rv-badge", `rv-badge--${tone}`, pill ? "rv-badge--pill" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles("rv-card", `
.rv-card {
  background: var(--surface-card);
  border-radius: var(--radius-md);
  box-shadow: var(--hairline);
  overflow: hidden;
  display: flex; flex-direction: column;
}
.rv-card--pad { padding: 30px; }
.rv-card--interactive { transition: box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard); cursor: pointer; }
.rv-card--interactive:hover { box-shadow: var(--hairline), var(--shadow-sm); }
.rv-card__media { display: block; width: 100%; object-fit: cover; }
.rv-card__body { padding: 30px; display: flex; flex-direction: column; gap: 12px; }
`);

/**
 * Card — the flat, hairline-bordered surface used across Radius product UI.
 */
function Card({
  children,
  media,
  // optional image src or node, rendered full-bleed at top
  mediaHeight = 200,
  padded = false,
  // pad the card directly (no separate body)
  interactive = false,
  className = "",
  style,
  ...rest
}) {
  const cls = ["rv-card", padded && !media ? "rv-card--pad" : "", interactive ? "rv-card--interactive" : "", className].filter(Boolean).join(" ");
  const mediaNode = media ? typeof media === "string" ? /*#__PURE__*/React.createElement("img", {
    className: "rv-card__media",
    src: media,
    alt: "",
    style: {
      height: mediaHeight
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "rv-card__media",
    style: {
      height: mediaHeight
    }
  }, media) : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: style
  }, rest), mediaNode, media ? /*#__PURE__*/React.createElement("div", {
    className: "rv-card__body"
  }, children) : children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Radius Velocity — data table component.

__ds_scope.injectStyles("rv-table", `
.rv-table-wrap { border-radius: var(--radius-md); box-shadow: var(--hairline); overflow: hidden; background: var(--white); }
.rv-table { width: 100%; border-collapse: collapse; font-family: var(--font-sans); }
.rv-table th, .rv-table td { text-align: left; padding: 16px 20px; font-size: 14px; line-height: 22px; vertical-align: top; }
.rv-table thead th { background: var(--black); color: var(--white); font-weight: var(--fw-semibold); white-space: nowrap; }
.rv-table thead th.rv-th--highlight { background: var(--info-blue); }
.rv-table tbody td { color: var(--text-body); border-bottom: 1px solid var(--border-default); }
.rv-table tbody tr:last-child td { border-bottom: 0; }
.rv-table tbody td.rv-cell--strong { font-weight: var(--fw-semibold); color: var(--text-strong); }
.rv-table .rv-col--right { text-align: right; }
.rv-table .rv-col--center { text-align: center; }
.rv-table .rv-cell--highlight { background: color-mix(in srgb, var(--info-blue) 7%, white); }
.rv-table--zebra tbody tr:nth-child(even) td { background: var(--accent-grey); }
.rv-table tbody tr.rv-row--hover:hover td { background: var(--accent-grey); }

/* Mobile: collapse to stacked key/value cards */
@media (max-width: 720px) {
  .rv-table--responsive thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
  .rv-table--responsive tbody td { display: flex; justify-content: space-between; gap: 16px; border-bottom: 1px solid var(--border-soft); text-align: right; }
  .rv-table--responsive tbody td::before { content: attr(data-label); font-weight: var(--fw-semibold); color: var(--text-muted); text-align: left; }
  .rv-table--responsive tbody td:empty { display: none; }
  .rv-table--responsive tbody tr { display: block; padding: 8px 4px; border-bottom: 2px solid var(--border-default); }
  .rv-table--responsive tbody tr:last-child { border-bottom: 0; }
}
`);

/**
 * Table — Radius data table: black header, hairline rows, optional
 * info-blue highlighted column, optional zebra striping. Collapses to
 * stacked key/value cards on mobile.
 */
function Table({
  columns = [],
  rows = [],
  zebra = false,
  hover = false,
  responsive = true,
  caption,
  className = "",
  ...rest
}) {
  const cls = ["rv-table", zebra ? "rv-table--zebra" : "", responsive ? "rv-table--responsive" : "", className].filter(Boolean).join(" ");
  const colCls = c => [c.align === "right" ? "rv-col--right" : c.align === "center" ? "rv-col--center" : "", c.highlight ? "rv-cell--highlight" : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: "rv-table-wrap"
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: cls
  }, rest), caption && /*#__PURE__*/React.createElement("caption", {
    style: {
      captionSide: "top",
      textAlign: "left",
      padding: "16px 20px",
      font: "var(--fw-bold) 18px/28px var(--font-sans)",
      color: "var(--text-strong)"
    }
  }, caption), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    className: [colCls(c), c.highlight ? "rv-th--highlight" : ""].filter(Boolean).join(" ")
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    className: hover ? "rv-row--hover" : ""
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    "data-label": typeof c.header === "string" ? c.header : c.key,
    className: [colCls(c), c.strong ? "rv-cell--strong" : ""].filter(Boolean).join(" ")
  }, r[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles("rv-input", `
.rv-field { display: flex; flex-direction: column; gap: 8px; }
.rv-field__label { font: var(--fw-semibold) 14px/20px var(--font-sans); color: var(--text-strong); }
.rv-field__hint { font: var(--fw-regular) 13px/18px var(--font-sans); color: var(--text-muted); }
.rv-input {
  font: var(--fw-regular) 16px/26px var(--font-sans); color: var(--ink);
  background: var(--white); border: 0; box-shadow: var(--hairline);
  border-radius: var(--radius-md); padding: 13px 16px; width: 100%;
  transition: box-shadow var(--dur-base) var(--ease-standard);
}
.rv-input::placeholder { color: var(--text-muted); }
.rv-input:hover { box-shadow: inset 0 0 0 1px var(--ink); }
.rv-input:focus { outline: none; box-shadow: inset 0 0 0 2px var(--radius-red); }
.rv-input:disabled { background: var(--accent-grey); color: var(--text-muted); cursor: not-allowed; }
.rv-field--error .rv-input { box-shadow: inset 0 0 0 2px var(--radius-red); }
.rv-field__err { font: var(--fw-semibold) 13px/18px var(--font-sans); color: var(--radius-red); }
`);

/** Text input with brand focus ring. */
function Input({
  label,
  hint,
  error,
  id,
  className = "",
  ...rest
}) {
  const fid = id || (label ? "rv-" + label.replace(/\W+/g, "-").toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: ["rv-field", error ? "rv-field--error" : "", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "rv-field__label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: "rv-input"
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "rv-field__err"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "rv-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/icons/icon-data.js
try { (() => {
// Radius Velocity — bespoke icon data (inlined SVG, currentColor).
// Generated from assets/icons/*.svg. Monochrome icons follow currentColor;
// accent icons (e.g. map-marker) keep their baked brand colours.
const ICONS = {
  "account": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(10.04 6.24)\"><path d=\"M 5.96 11.92 C 2.68 11.92 0 9.24 0 5.96 C 0 2.68 2.68 0 5.96 0 C 9.24 0 11.92 2.68 11.92 5.96 C 11.92 9.24 9.24 11.92 5.96 11.92 Z M 5.96 1.24 C 3.36 1.24 1.2 3.36 1.2 6 C 1.2 8.64 3.32 10.76 5.96 10.76 C 8.6 10.76 10.72 8.64 10.72 6 C 10.72 3.36 8.6 1.24 5.96 1.24 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(5.68 16.96)\"><path d=\"M 20.64 10.32 L 19.44 10.32 C 19.44 5.28 15.36 1.2 10.32 1.2 C 5.28 1.2 1.2 5.28 1.2 10.32 L 0 10.32 C 0 4.64 4.64 0 10.32 0 C 16 0 20.64 4.64 20.64 10.32 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(0.72 0.72)\"><path d=\"M 15.28 30.56 C 6.88 30.56 0 23.68 0 15.28 C 0 6.88 6.88 0 15.28 0 C 23.68 0 30.56 6.84 30.56 15.28 C 30.56 23.72 23.72 30.56 15.28 30.56 Z M 15.28 1.2 C 7.52 1.2 1.2 7.52 1.2 15.28 C 1.2 23.04 7.52 29.36 15.28 29.36 C 23.04 29.36 29.36 23.04 29.36 15.28 C 29.36 7.52 23.04 1.2 15.28 1.2 Z\" fill=\"currentColor\"></path></g>"
  },
  "arrow-left": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(6.52 9.3)\"><path d=\"M 1.25 7.13 C 1.09 6.99 1 6.79 1 6.58 C 1 6.37 1.09 6.17 1.25 6.03 L 7.24 0.87 C 7.45 0.69 7.47 0.38 7.29 0.17 C 7.19 0.06 7.05 0 6.91 0 C 6.8 0 6.68 0.04 6.59 0.12 L 0.6 5.28 C 0.22 5.61 0 6.08 0 6.58 C 0 7.08 0.22 7.56 0.6 7.88 L 6.59 13.04 C 6.8 13.22 7.11 13.19 7.29 12.99 C 7.47 12.78 7.45 12.47 7.24 12.29 L 1.25 7.13 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(9.73 15.39)\"><path d=\"M 15.01 0 L 0.5 0 C 0.23 0 0 0.22 0 0.5 C 0 0.78 0.22 1 0.5 1 L 15.01 1 C 15.28 1 15.51 0.78 15.51 0.5 C 15.51 0.22 15.29 0 15.01 0 Z\" fill=\"currentColor\"></path></g>"
  },
  "arrow-right": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(17.828 9.301)\"><path d=\"M 6.812 5.279 L 0.822 0.119 C 0.612 -0.061 0.302 -0.031 0.122 0.169 C -0.058 0.379 -0.038 0.689 0.172 0.869 L 6.162 6.029 C 6.322 6.169 6.412 6.369 6.412 6.579 C 6.412 6.789 6.322 6.989 6.162 7.129 L 0.172 12.289 C -0.038 12.469 -0.058 12.779 0.122 12.989 C 0.222 13.099 0.362 13.159 0.502 13.159 C 0.612 13.159 0.732 13.119 0.822 13.039 L 6.812 7.879 C 7.192 7.549 7.412 7.079 7.412 6.579 C 7.412 6.079 7.192 5.599 6.812 5.279 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(6.52 15.38)\"><path d=\"M 15.51 0.5 C 15.51 0.23 15.29 0 15.01 0 L 0.5 0 C 0.23 0 0 0.22 0 0.5 C 0 0.78 0.22 1 0.5 1 L 15.01 1 C 15.28 1 15.51 0.78 15.51 0.5 Z\" fill=\"currentColor\"></path></g>"
  },
  "broadband": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(0.532 16.676)\"><path d=\"M 11.76 11.356 L 3.56 11.356 C 2.148 11.356 1 10.204 1 8.792 L 1 3.56 C 1 2.148 2.148 1 3.56 1 L 4.944 1 C 5.22 1 5.444 0.776 5.444 0.5 C 5.444 0.224 5.22 0 4.944 0 L 3.56 0 C 1.596 0 0 1.596 0 3.56 L 0 8.792 C 0 10.756 1.596 12.356 3.56 12.356 L 4.952 12.356 C 5.036 13.752 6.192 14.856 7.608 14.856 C 9.024 14.856 10.184 13.752 10.268 12.356 L 11.76 12.356 C 12.036 12.356 12.26 12.132 12.26 11.856 C 12.26 11.58 12.036 11.356 11.76 11.356 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(8.44 6.52)\"><path d=\"M 19.216 10.156 L 8.06 10.156 L 8.06 2.612 C 8.56 2.412 8.916 1.928 8.916 1.356 C 8.916 0.608 8.308 0 7.56 0 C 6.812 0 6.204 0.608 6.204 1.356 C 6.204 1.928 6.56 2.416 7.06 2.612 L 7.06 10.156 L 0.5 10.156 C 0.224 10.156 0 10.38 0 10.656 C 0 10.932 0.224 11.156 0.5 11.156 L 19.216 11.156 C 20.628 11.156 21.78 12.304 21.78 13.716 L 21.78 18.948 C 21.78 20.36 20.628 21.512 19.216 21.512 L 6.872 21.512 C 6.596 21.512 6.372 21.736 6.372 22.012 C 6.372 22.288 6.596 22.512 6.872 22.512 L 12.676 22.512 C 12.76 23.908 13.916 25.012 15.332 25.012 C 16.748 25.012 17.908 23.908 17.992 22.512 L 19.216 22.512 C 21.18 22.512 22.78 20.912 22.78 18.948 L 22.78 13.716 C 22.78 11.752 21.18 10.156 19.216 10.156 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(18.692 23.66)\"><path d=\"M 2.416 1.208 C 2.416 0.54 1.876 0 1.208 0 C 0.54 0 0 0.54 0 1.208 C 0 1.876 0.54 2.416 1.208 2.416 C 1.876 2.416 2.416 1.876 2.416 1.208 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(22.28 23.66)\"><path d=\"M 2.416 1.208 C 2.416 0.54 1.876 0 1.208 0 C 0.54 0 0 0.54 0 1.208 C 0 1.876 0.54 2.416 1.208 2.416 C 1.876 2.416 2.416 1.876 2.416 1.208 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(25.868 23.66)\"><path d=\"M 2.416 1.208 C 2.416 0.54 1.876 0 1.208 0 C 0.54 0 0 0.54 0 1.208 C 0 1.876 0.54 2.416 1.208 2.416 C 1.876 2.416 2.416 1.876 2.416 1.208 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(23.235 1.751)\"><path d=\"M 1.649 6.425 C 1.649 8.425 1.105 10.385 0.077 12.085 C -0.067 12.321 0.009 12.629 0.245 12.773 C 0.325 12.821 0.417 12.845 0.505 12.845 C 0.673 12.845 0.841 12.761 0.933 12.605 C 2.057 10.749 2.649 8.613 2.649 6.429 C 2.649 4.245 2.053 2.101 0.929 0.241 C 0.785 0.005 0.477 -0.071 0.241 0.073 C 0.005 0.217 -0.071 0.521 0.073 0.761 C 1.105 2.469 1.649 4.429 1.649 6.433 L 1.649 6.425 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(20.626 3.73)\"><path d=\"M 1.17 4.446 C 1.17 5.75 0.794 7.014 0.086 8.102 C -0.066 8.334 -0.002 8.642 0.23 8.794 C 0.314 8.85 0.41 8.874 0.502 8.874 C 0.666 8.874 0.826 8.794 0.922 8.646 C 1.738 7.398 2.17 5.942 2.17 4.442 C 2.17 2.942 1.738 1.482 0.918 0.226 C 0.766 -0.006 0.454 -0.07 0.226 0.082 C -0.006 0.234 -0.07 0.542 0.082 0.774 C 0.794 1.866 1.174 3.134 1.174 4.442 L 1.17 4.446 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(18.135 5.747)\"><path d=\"M 0.173 4.741 C 0.269 4.821 0.385 4.861 0.497 4.861 C 0.637 4.861 0.777 4.801 0.877 4.689 C 1.421 4.061 1.717 3.257 1.717 2.433 C 1.717 1.609 1.417 0.801 0.877 0.173 C 0.697 -0.035 0.381 -0.059 0.173 0.121 C -0.035 0.301 -0.059 0.617 0.121 0.825 C 0.513 1.281 0.721 1.837 0.721 2.433 C 0.721 3.029 0.509 3.589 0.121 4.037 C -0.059 4.245 -0.035 4.561 0.173 4.741 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(6.164 1.743)\"><path d=\"M 2.144 12.853 C 2.232 12.853 2.32 12.829 2.404 12.781 C 2.64 12.637 2.716 12.329 2.572 12.093 C 1.544 10.393 1 8.437 1 6.433 C 1 4.429 1.544 2.469 2.576 0.761 C 2.72 0.525 2.644 0.217 2.408 0.073 C 2.172 -0.071 1.864 0.005 1.72 0.241 C 0.592 2.105 0 4.245 0 6.429 C 0 8.613 0.592 10.749 1.716 12.605 C 1.808 12.761 1.976 12.845 2.144 12.845 L 2.144 12.853 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(9.256 3.734)\"><path d=\"M 1.664 8.87 C 1.756 8.87 1.852 8.842 1.936 8.79 C 2.168 8.638 2.232 8.33 2.08 8.098 C 1.368 7.01 0.996 5.746 0.996 4.442 C 0.996 3.138 1.372 1.866 2.088 0.774 C 2.24 0.542 2.176 0.234 1.944 0.082 C 1.716 -0.07 1.404 -0.006 1.252 0.226 C 0.432 1.478 0 2.938 0 4.442 C 0 5.946 0.432 7.394 1.248 8.646 C 1.344 8.794 1.504 8.874 1.668 8.874 L 1.664 8.87 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(12.192 5.747)\"><path d=\"M 1.22 4.861 C 1.336 4.861 1.452 4.821 1.544 4.741 C 1.752 4.561 1.776 4.245 1.596 4.037 C 1.208 3.589 0.996 3.021 0.996 2.433 C 0.996 1.845 1.204 1.281 1.596 0.825 C 1.776 0.617 1.752 0.301 1.544 0.121 C 1.336 -0.059 1.02 -0.035 0.84 0.173 C 0.296 0.801 0 1.605 0 2.433 C 0 3.261 0.3 4.061 0.84 4.689 C 0.94 4.805 1.08 4.861 1.22 4.861 Z\" fill=\"currentColor\"></path></g>"
  },
  "business-energy": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(0.35 0.63)\"><path d=\"M 24.22 25.16 C 24.5 25.16 24.73 24.93 24.73 24.65 L 24.73 13.47 C 24.73 13.47 24.8 13.47 24.83 13.47 C 28.55 13.47 31.57 10.45 31.57 6.73 C 31.57 3.01 28.54 0 24.83 0 C 21.42 0 18.6 2.55 18.16 5.84 L 11.41 5.84 C 11.13 5.84 10.9 6.07 10.9 6.35 L 10.9 14.81 L 1.71 19.65 C 1.54 19.74 1.44 19.91 1.44 20.1 L 1.44 29.85 L 0.51 29.85 C 0.23 29.85 0 30.08 0 30.36 C 0 30.64 0.23 30.87 0.51 30.87 L 25.69 30.87 C 25.97 30.87 26.2 30.64 26.2 30.36 C 26.2 30.08 25.97 29.85 25.69 29.85 L 24.72 29.85 L 24.72 27.27 C 24.72 26.99 24.49 26.76 24.21 26.76 C 23.93 26.76 23.7 26.99 23.7 27.27 L 23.7 29.85 L 20.48 29.85 L 20.48 26.25 L 20.84 26.25 C 21.12 26.25 21.35 26.02 21.35 25.74 C 21.35 25.46 21.12 25.23 20.84 25.23 L 14.89 25.23 C 14.61 25.23 14.38 25.46 14.38 25.74 C 14.38 26.02 14.61 26.25 14.89 26.25 L 15.25 26.25 L 15.25 29.85 L 11.89 29.85 L 11.89 8.98 L 18.46 8.98 C 19.27 11.26 21.26 12.98 23.7 13.38 L 23.7 24.65 C 23.7 24.93 23.93 25.16 24.21 25.16 L 24.22 25.16 Z M 2.45 20.39 L 10.9 15.94 L 10.9 29.83 L 2.45 29.83 L 2.45 20.39 Z M 16.28 26.23 L 19.49 26.23 L 19.49 29.83 L 16.28 29.83 L 16.28 26.23 Z M 11.91 7.96 L 11.91 6.84 L 18.09 6.84 C 18.09 7.22 18.13 7.59 18.2 7.96 L 11.91 7.96 Z M 19.1 6.73 C 19.1 3.57 21.67 1 24.83 1 C 27.99 1 30.56 3.57 30.56 6.73 C 30.56 9.89 27.99 12.46 24.83 12.46 C 21.67 12.46 19.1 9.89 19.1 6.73 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(17.02 11.47)\"><path d=\"M 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(13.69 11.47)\"><path d=\"M 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(20.35 14.36)\"><path d=\"M 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(17.02 14.36)\"><path d=\"M 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(13.69 14.36)\"><path d=\"M 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(20.35 17.25)\"><path d=\"M 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(17.02 17.25)\"><path d=\"M 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(13.69 17.25)\"><path d=\"M 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(20.35 20.14)\"><path d=\"M 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(17.02 20.14)\"><path d=\"M 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(13.69 20.14)\"><path d=\"M 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(20.35 22.99)\"><path d=\"M 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(17.02 22.99)\"><path d=\"M 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(13.69 22.99)\"><path d=\"M 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(7.43 22.86)\"><path d=\"M 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(4.1 22.87)\"><path d=\"M 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(7.43 25.43)\"><path d=\"M 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(4.1 25.43)\"><path d=\"M 1.92 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 L 1.92 1.02 C 2.2 1.02 2.43 0.79 2.43 0.51 C 2.43 0.23 2.2 0 1.92 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(22.73 3.328)\"><path d=\"M 4.71 4.572 C 4.99 4.182 4.89 3.662 4.5 3.382 C 4.36 3.272 4.18 3.242 4.01 3.242 L 2.75 3.242 C 2.64 3.242 2.54 3.132 2.54 3.032 C 2.54 3.032 2.58 2.992 2.58 2.962 L 3.6 0.682 C 3.71 0.432 3.6 0.152 3.35 0.052 C 3.17 -0.058 2.96 0.022 2.82 0.162 C 2.19 0.902 1.66 1.492 1.28 1.982 C 0.89 2.472 0.51 2.962 0.16 3.492 C -0.12 3.842 -0.02 4.372 0.37 4.652 C 0.51 4.722 0.69 4.792 0.86 4.792 L 2.12 4.792 C 2.23 4.792 2.33 4.902 2.33 5.002 C 2.33 5.002 2.29 5.042 2.29 5.072 L 1.27 7.422 C 1.16 7.672 1.27 7.952 1.52 8.052 C 1.73 8.162 1.94 8.082 2.08 7.942 C 2.71 7.242 3.2 6.612 3.59 6.122 C 3.98 5.632 4.36 5.102 4.71 4.582 L 4.71 4.572 Z\" fill=\"currentColor\"></path></g>"
  },
  "calculator": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(0.44 0.48)\"><path d=\"M 27.8 31.16 L 3.4 31.16 C 1.52 31.16 0 29.6 0 27.72 L 0 24.52 C 0 24.24 0.24 24 0.52 24 C 0.8 24 1.04 24.24 1.04 24.52 L 1.04 27.72 C 1.04 29.04 2.08 30.12 3.4 30.12 L 27.8 30.12 C 29.08 30.12 30.16 29.04 30.16 27.72 L 30.16 3.44 C 30.16 2.12 29.12 1.04 27.8 1.04 L 3.4 1.04 C 2.12 1.04 1.04 2.12 1.04 3.44 L 1.04 21.12 C 1.04 21.4 0.8 21.64 0.52 21.64 C 0.24 21.64 0 21.4 0 21.12 L 0 3.44 C 0 1.52 1.52 0 3.4 0 L 27.8 0 C 29.68 0 31.2 1.56 31.2 3.44 L 31.2 27.76 C 31.2 29.64 29.68 31.2 27.8 31.2 L 27.8 31.16 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(4.04 12.84)\"><path d=\"M 2.36 3.92 L 1.56 3.92 C 0.68 3.92 0 3.2 0 2.36 L 0 1.56 C 0 0.68 0.72 0 1.56 0 L 2.36 0 C 3.24 0 3.92 0.72 3.92 1.56 L 3.92 2.36 C 3.92 3.24 3.2 3.92 2.36 3.92 Z M 1.56 1 C 1.24 1 1 1.24 1 1.56 L 1 2.36 C 1 2.68 1.24 2.92 1.56 2.92 L 2.36 2.92 C 2.68 2.92 2.92 2.68 2.92 2.36 L 2.92 1.56 C 2.92 1.24 2.68 1 2.36 1 L 1.56 1 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(8.96 12.84)\"><path d=\"M 2.36 3.92 L 1.56 3.92 C 0.68 3.92 0 3.2 0 2.36 L 0 1.56 C 0 0.68 0.72 0 1.56 0 L 2.36 0 C 3.24 0 3.92 0.72 3.92 1.56 L 3.92 2.36 C 3.92 3.24 3.2 3.92 2.36 3.92 Z M 1.6 1 C 1.28 1 1.04 1.24 1.04 1.56 L 1.04 2.36 C 1.04 2.68 1.28 2.92 1.6 2.92 L 2.4 2.92 C 2.72 2.92 2.96 2.68 2.96 2.36 L 2.96 1.56 C 2.96 1.24 2.72 1 2.4 1 L 1.6 1 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(14 12.84)\"><path d=\"M 2.36 3.92 L 1.56 3.92 C 0.68 3.92 0 3.2 0 2.36 L 0 1.56 C 0 0.68 0.72 0 1.56 0 L 2.36 0 C 3.24 0 3.92 0.72 3.92 1.56 L 3.92 2.36 C 3.92 3.24 3.2 3.92 2.36 3.92 Z M 1.56 1 C 1.24 1 1 1.24 1 1.56 L 1 2.36 C 1 2.68 1.24 2.92 1.56 2.92 L 2.36 2.92 C 2.68 2.92 2.92 2.68 2.92 2.36 L 2.92 1.56 C 2.92 1.24 2.68 1 2.36 1 L 1.56 1 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(4.04 18)\"><path d=\"M 2.36 3.92 L 1.56 3.92 C 0.68 3.92 0 3.2 0 2.36 L 0 1.56 C 0 0.68 0.72 0 1.56 0 L 2.36 0 C 3.24 0 3.92 0.72 3.92 1.56 L 3.92 2.36 C 3.92 3.24 3.2 3.92 2.36 3.92 Z M 1.56 1 C 1.24 1 1 1.24 1 1.56 L 1 2.36 C 1 2.68 1.24 2.92 1.56 2.92 L 2.36 2.92 C 2.68 2.92 2.92 2.68 2.92 2.36 L 2.92 1.56 C 2.92 1.24 2.68 1 2.36 1 L 1.56 1 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(8.96 18)\"><path d=\"M 2.36 3.92 L 1.56 3.92 C 0.68 3.92 0 3.2 0 2.36 L 0 1.56 C 0 0.68 0.72 0 1.56 0 L 2.36 0 C 3.24 0 3.92 0.72 3.92 1.56 L 3.92 2.36 C 3.92 3.24 3.2 3.92 2.36 3.92 Z M 1.6 1 C 1.28 1 1.04 1.24 1.04 1.56 L 1.04 2.36 C 1.04 2.68 1.28 2.92 1.6 2.92 L 2.4 2.92 C 2.72 2.92 2.96 2.68 2.96 2.36 L 2.96 1.56 C 2.96 1.24 2.72 1 2.4 1 L 1.6 1 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(14 18)\"><path d=\"M 2.36 3.92 L 1.56 3.92 C 0.68 3.92 0 3.2 0 2.36 L 0 1.56 C 0 0.68 0.72 0 1.56 0 L 2.36 0 C 3.24 0 3.92 0.72 3.92 1.56 L 3.92 2.36 C 3.92 3.24 3.2 3.92 2.36 3.92 Z M 1.56 1 C 1.24 1 1 1.24 1 1.56 L 1 2.36 C 1 2.68 1.24 2.92 1.56 2.92 L 2.36 2.92 C 2.68 2.92 2.92 2.68 2.92 2.36 L 2.92 1.56 C 2.92 1.24 2.68 1 2.36 1 L 1.56 1 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(4.04 23.08)\"><path d=\"M 2.36 3.92 L 1.56 3.92 C 0.68 3.92 0 3.2 0 2.36 L 0 1.56 C 0 0.68 0.72 0 1.56 0 L 2.36 0 C 3.24 0 3.92 0.72 3.92 1.56 L 3.92 2.36 C 3.92 3.24 3.2 3.92 2.36 3.92 Z M 1.56 0.96 C 1.24 0.96 1 1.2 1 1.52 L 1 2.32 C 1 2.64 1.24 2.88 1.56 2.88 L 2.36 2.88 C 2.68 2.88 2.92 2.64 2.92 2.32 L 2.92 1.52 C 2.92 1.2 2.68 0.96 2.36 0.96 L 1.56 0.96 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(8.96 23.08)\"><path d=\"M 2.36 3.92 L 1.56 3.92 C 0.68 3.92 0 3.2 0 2.36 L 0 1.56 C 0 0.68 0.72 0 1.56 0 L 2.36 0 C 3.24 0 3.92 0.72 3.92 1.56 L 3.92 2.36 C 3.92 3.24 3.2 3.92 2.36 3.92 Z M 1.6 0.96 C 1.28 0.96 1.04 1.2 1.04 1.52 L 1.04 2.32 C 1.04 2.64 1.28 2.88 1.6 2.88 L 2.4 2.88 C 2.72 2.88 2.96 2.64 2.96 2.32 L 2.96 1.52 C 2.96 1.2 2.72 0.96 2.4 0.96 L 1.6 0.96 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(14 23.08)\"><path d=\"M 2.36 3.92 L 1.56 3.92 C 0.68 3.92 0 3.2 0 2.36 L 0 1.56 C 0 0.68 0.72 0 1.56 0 L 2.36 0 C 3.24 0 3.92 0.72 3.92 1.56 L 3.92 2.36 C 3.92 3.24 3.2 3.92 2.36 3.92 Z M 1.56 0.96 C 1.24 0.96 1 1.2 1 1.52 L 1 2.32 C 1 2.64 1.24 2.88 1.56 2.88 L 2.36 2.88 C 2.68 2.88 2.92 2.64 2.92 2.32 L 2.92 1.52 C 2.92 1.2 2.68 0.96 2.36 0.96 L 1.56 0.96 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(18.96 12.88)\"><path d=\"M 2.36 3.92 L 1.56 3.92 C 0.68 3.92 0 3.2 0 2.36 L 0 1.56 C 0 0.68 0.72 0 1.56 0 L 2.36 0 C 3.24 0 3.92 0.72 3.92 1.56 L 3.92 2.36 C 3.92 3.24 3.2 3.92 2.36 3.92 Z M 1.56 1 C 1.24 1 1 1.24 1 1.56 L 1 2.36 C 1 2.68 1.24 2.92 1.56 2.92 L 2.36 2.92 C 2.68 2.92 2.92 2.68 2.92 2.36 L 2.92 1.56 C 2.92 1.24 2.68 1 2.36 1 L 1.56 1 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(23.88 12.88)\"><path d=\"M 2.36 3.92 L 1.56 3.92 C 0.68 3.92 0 3.2 0 2.36 L 0 1.56 C 0 0.68 0.72 0 1.56 0 L 2.36 0 C 3.24 0 3.92 0.72 3.92 1.56 L 3.92 2.36 C 3.92 3.24 3.2 3.92 2.36 3.92 Z M 1.56 1 C 1.24 1 1 1.24 1 1.56 L 1 2.36 C 1 2.68 1.24 2.92 1.56 2.92 L 2.36 2.92 C 2.68 2.92 2.92 2.68 2.92 2.36 L 2.92 1.56 C 2.92 1.24 2.68 1 2.36 1 L 1.56 1 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(18.96 18.04)\"><path d=\"M 2.36 3.92 L 1.56 3.92 C 0.68 3.92 0 3.2 0 2.36 L 0 1.56 C 0 0.68 0.72 0 1.56 0 L 2.36 0 C 3.24 0 3.92 0.72 3.92 1.56 L 3.92 2.36 C 3.92 3.24 3.2 3.92 2.36 3.92 Z M 1.56 1 C 1.24 1 1 1.24 1 1.56 L 1 2.36 C 1 2.68 1.24 2.92 1.56 2.92 L 2.36 2.92 C 2.68 2.92 2.92 2.68 2.92 2.36 L 2.92 1.56 C 2.92 1.24 2.68 1 2.36 1 L 1.56 1 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(23.88 18.04)\"><path d=\"M 2.36 3.92 L 1.56 3.92 C 0.68 3.92 0 3.2 0 2.36 L 0 1.56 C 0 0.68 0.72 0 1.56 0 L 2.36 0 C 3.24 0 3.92 0.72 3.92 1.56 L 3.92 2.36 C 3.92 3.24 3.2 3.92 2.36 3.92 Z M 1.56 1 C 1.24 1 1 1.24 1 1.56 L 1 2.36 C 1 2.68 1.24 2.92 1.56 2.92 L 2.36 2.92 C 2.68 2.92 2.92 2.68 2.92 2.36 L 2.92 1.56 C 2.92 1.24 2.68 1 2.36 1 L 1.56 1 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(18.96 23.12)\"><path d=\"M 2.36 3.92 L 1.56 3.92 C 0.68 3.92 0 3.2 0 2.36 L 0 1.56 C 0 0.68 0.72 0 1.56 0 L 2.36 0 C 3.24 0 3.92 0.72 3.92 1.56 L 3.92 2.36 C 3.92 3.24 3.2 3.92 2.36 3.92 Z M 1.56 0.96 C 1.24 0.96 1 1.2 1 1.52 L 1 2.32 C 1 2.64 1.24 2.88 1.56 2.88 L 2.36 2.88 C 2.68 2.88 2.92 2.64 2.92 2.32 L 2.92 1.52 C 2.92 1.2 2.68 0.96 2.36 0.96 L 1.56 0.96 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(23.88 23.12)\"><path d=\"M 2.36 3.92 L 1.56 3.92 C 0.68 3.92 0 3.2 0 2.36 L 0 1.56 C 0 0.68 0.72 0 1.56 0 L 2.36 0 C 3.24 0 3.92 0.72 3.92 1.56 L 3.92 2.36 C 3.92 3.24 3.2 3.92 2.36 3.92 Z M 1.56 0.96 C 1.24 0.96 1 1.2 1 1.52 L 1 2.32 C 1 2.64 1.24 2.88 1.56 2.88 L 2.36 2.88 C 2.68 2.88 2.92 2.64 2.92 2.32 L 2.92 1.52 C 2.92 1.2 2.68 0.96 2.36 0.96 L 1.56 0.96 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(3.52 3.8)\"><path d=\"M 23.24 6.96 L 1.56 6.96 C 0.68 6.96 0 6.24 0 5.4 L 0 1.56 C 0 0.68 0.72 0 1.56 0 L 23.24 0 C 24.12 0 24.8 0.72 24.8 1.56 L 24.8 5.4 C 24.8 6.28 24.08 6.96 23.24 6.96 Z M 1.56 1.04 C 1.28 1.04 1.04 1.28 1.04 1.56 L 1.04 5.4 C 1.04 5.68 1.28 5.92 1.56 5.92 L 23.24 5.92 C 23.52 5.92 23.76 5.68 23.76 5.4 L 23.76 1.56 C 23.76 1.28 23.52 1.04 23.24 1.04 L 1.56 1.04 Z\" fill=\"currentColor\"></path></g>"
  },
  "cards": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(12.24 22.32)\"><path d=\"M 0.48 0.96 L 4.48 0.96 C 4.76 0.96 4.96 0.72 4.96 0.48 C 4.96 0.24 4.72 0 4.48 0 L 0.48 0 C 0.2 0 0 0.24 0 0.48 C 0 0.72 0.2 0.96 0.48 0.96 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(0.08 5.52)\"><path d=\"M 27.56 0 L 26.88 0 C 26.6 0 26.4 0.24 26.4 0.48 C 26.4 0.72 26.64 0.96 26.88 0.96 L 27.56 0.96 C 29.24 0.96 30.6 2.32 30.6 4 L 30.6 5.36 L 27.72 5.36 C 27.44 5.36 27.24 5.6 27.24 5.84 C 27.24 6.08 27.48 6.32 27.72 6.32 L 30.6 6.32 L 30.6 10.6 L 1 10.6 L 1 6.4 L 25.6 6.4 C 25.88 6.4 26.08 6.16 26.08 5.92 C 26.08 5.68 25.84 5.44 25.6 5.44 L 1 5.44 L 1 4.08 C 1 2.4 2.36 1.04 4.04 1.04 L 24.52 1.04 C 24.8 1.04 25 0.8 25 0.56 C 25 0.32 24.76 0.08 24.52 0.08 L 4.04 0.08 C 1.8 0.08 0 1.92 0 4.12 L 0 11.2 L 0 16.92 C 0 19.16 1.8 20.96 4.04 20.96 L 27.6 20.96 C 29.84 20.96 31.64 19.16 31.64 16.92 L 31.64 4.08 C 31.64 1.8 29.8 0 27.56 0 Z M 30.64 16.92 C 30.64 18.6 29.28 19.96 27.6 19.96 L 4.04 19.96 C 2.36 19.96 1 18.6 1 16.92 L 1 11.68 L 30.64 11.68 L 30.64 16.92 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(4 22.32)\"><path d=\"M 0.48 0.96 L 6.48 0.96 C 6.76 0.96 6.96 0.72 6.96 0.48 C 6.96 0.24 6.72 0 6.48 0 L 0.48 0 C 0.2 0 0 0.24 0 0.48 C 0 0.72 0.2 0.96 0.48 0.96 Z\" fill=\"currentColor\"></path></g>"
  },
  "chevron-down": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(9.208 15.348)\"><path d=\"M 12.402 0.162 L 7.202 6.202 C 7.062 6.362 6.862 6.462 6.642 6.462 C 6.422 6.462 6.222 6.372 6.082 6.202 L 0.882 0.172 C 0.782 0.062 0.642 0.002 0.502 0.002 C 0.382 0.002 0.272 0.042 0.172 0.122 C -0.038 0.302 -0.058 0.622 0.122 0.832 L 5.322 6.862 C 5.652 7.242 6.132 7.462 6.632 7.462 C 7.142 7.462 7.612 7.242 7.942 6.862 L 13.142 0.832 C 13.322 0.622 13.302 0.312 13.092 0.122 C 12.882 -0.058 12.562 -0.038 12.382 0.172 L 12.402 0.162 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(9.318 9.218)\"><path d=\"M 5.332 6.872 C 5.662 7.252 6.142 7.472 6.642 7.472 C 7.142 7.472 7.622 7.252 7.952 6.872 L 13.152 0.832 C 13.332 0.622 13.312 0.302 13.102 0.122 C 12.892 -0.058 12.572 -0.038 12.392 0.172 L 7.192 6.212 C 6.912 6.532 6.362 6.532 6.082 6.212 L 0.882 0.172 C 0.782 0.062 0.642 0.002 0.502 0.002 C 0.382 0.002 0.272 0.042 0.172 0.122 C -0.038 0.302 -0.058 0.622 0.122 0.832 L 5.322 6.872 L 5.332 6.872 Z\" fill=\"currentColor\"></path></g>"
  },
  "chevron-left": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(9.12 9.308)\"><path d=\"M 1.26 7.202 C 1.1 7.062 1 6.862 1 6.642 C 1 6.422 1.09 6.222 1.26 6.082 L 7.29 0.882 C 7.4 0.782 7.46 0.642 7.46 0.502 C 7.46 0.382 7.42 0.272 7.34 0.172 C 7.16 -0.038 6.84 -0.058 6.63 0.122 L 0.6 5.322 C 0.22 5.652 0 6.132 0 6.632 C 0 7.142 0.22 7.612 0.6 7.942 L 6.63 13.142 C 6.84 13.322 7.16 13.302 7.34 13.092 C 7.52 12.882 7.5 12.562 7.29 12.382 L 1.25 7.182 L 1.26 7.202 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(15.23 9.438)\"><path d=\"M 1.26 7.192 C 0.94 6.912 0.94 6.362 1.26 6.082 L 7.3 0.882 C 7.41 0.782 7.47 0.642 7.47 0.502 C 7.47 0.382 7.43 0.272 7.35 0.172 C 7.17 -0.038 6.85 -0.058 6.64 0.122 L 0.6 5.322 C 0.22 5.652 0 6.132 0 6.632 C 0 7.132 0.22 7.612 0.6 7.942 L 6.64 13.142 C 6.85 13.322 7.16 13.302 7.35 13.092 C 7.53 12.882 7.51 12.562 7.3 12.382 L 1.26 7.182 L 1.26 7.192 Z\" fill=\"currentColor\"></path></g>"
  },
  "chevron-right": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(15.228 9.438)\"><path d=\"M 6.862 5.322 L 0.832 0.122 C 0.622 -0.058 0.312 -0.038 0.122 0.172 C -0.058 0.382 -0.038 0.702 0.172 0.882 L 6.212 6.082 C 6.372 6.222 6.472 6.422 6.472 6.642 C 6.472 6.862 6.382 7.062 6.212 7.202 L 0.182 12.402 C 0.072 12.502 0.012 12.642 0.012 12.782 C 0.012 12.902 0.052 13.012 0.132 13.112 C 0.312 13.322 0.632 13.342 0.842 13.162 L 6.872 7.962 C 7.252 7.632 7.472 7.152 7.472 6.652 C 7.472 6.142 7.252 5.672 6.872 5.342 L 6.862 5.322 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(9.118 9.318)\"><path d=\"M 7.472 6.632 C 7.472 6.122 7.252 5.652 6.872 5.322 L 0.832 0.122 C 0.622 -0.058 0.312 -0.038 0.122 0.172 C -0.058 0.382 -0.038 0.702 0.172 0.882 L 6.212 6.082 C 6.532 6.362 6.532 6.912 6.212 7.192 L 0.172 12.392 C 0.062 12.492 0.002 12.632 0.002 12.772 C 0.002 12.892 0.042 13.002 0.122 13.102 C 0.302 13.312 0.622 13.332 0.832 13.152 L 6.872 7.952 C 7.252 7.622 7.472 7.142 7.472 6.642 L 7.472 6.632 Z\" fill=\"currentColor\"></path></g>"
  },
  "chevron-up": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(9.348 9.21)\"><path d=\"M 0.862 7.3 L 6.062 1.26 C 6.202 1.1 6.402 1 6.622 1 C 6.842 1 7.032 1.09 7.182 1.26 L 12.382 7.29 C 12.482 7.4 12.622 7.46 12.762 7.46 C 12.882 7.46 12.992 7.42 13.092 7.34 C 13.302 7.16 13.322 6.84 13.142 6.63 L 7.942 0.6 C 7.612 0.22 7.132 0 6.632 0 C 6.122 0 5.652 0.22 5.322 0.6 L 0.122 6.63 C -0.058 6.84 -0.038 7.16 0.172 7.34 C 0.382 7.52 0.702 7.5 0.882 7.29 L 0.862 7.3 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(9.218 15.34)\"><path d=\"M 7.942 0.6 C 7.612 0.22 7.132 0 6.632 0 C 6.132 0 5.652 0.22 5.322 0.6 L 0.122 6.64 C -0.058 6.85 -0.038 7.17 0.172 7.35 C 0.382 7.53 0.702 7.51 0.882 7.3 L 6.082 1.26 C 6.362 0.94 6.912 0.94 7.192 1.26 L 12.392 7.3 C 12.492 7.41 12.632 7.47 12.772 7.47 C 12.892 7.47 13.002 7.43 13.102 7.35 C 13.312 7.17 13.332 6.85 13.152 6.64 L 7.952 0.6 L 7.942 0.6 Z\" fill=\"currentColor\"></path></g>"
  },
  "close-solid": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(8.672 8.672)\"><path d=\"M 0.381 0.381 C 0.888 -0.127 1.711 -0.127 2.219 0.381 L 7.328 5.49 L 12.437 0.381 C 12.944 -0.126 13.767 -0.126 14.275 0.381 C 14.782 0.889 14.783 1.712 14.275 2.22 L 9.166 7.328 L 14.275 12.437 C 14.783 12.944 14.782 13.767 14.275 14.275 C 13.767 14.783 12.944 14.783 12.437 14.275 L 7.328 9.166 L 2.219 14.276 C 1.711 14.783 0.888 14.783 0.381 14.276 C -0.127 13.768 -0.127 12.945 0.381 12.437 L 5.49 7.328 L 0.381 2.219 C -0.127 1.711 -0.127 0.888 0.381 0.381 Z\" fill=\"currentColor\"></path></g>"
  },
  "close": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(0.467 0.423)\"><path d=\"M 15.533 31.077 C 12.433 31.077 9.533 30.177 6.933 28.477 C 6.733 28.277 6.633 27.977 6.833 27.777 C 7.033 27.577 7.333 27.477 7.533 27.677 C 10.733 29.877 14.633 30.577 18.433 29.877 C 22.233 29.177 25.533 26.977 27.733 23.677 C 32.233 16.977 30.433 7.977 23.733 3.477 C 17.033 -1.023 8.033 0.777 3.533 7.477 C 0.533 11.777 0.233 17.377 2.533 21.977 C 2.633 22.277 2.533 22.577 2.333 22.677 C 2.133 22.777 1.733 22.677 1.633 22.477 C -0.867 17.477 -0.467 11.477 2.633 6.877 C 7.433 -0.223 17.133 -2.123 24.233 2.577 C 31.333 7.377 33.233 17.077 28.533 24.177 C 26.233 27.677 22.733 29.977 18.633 30.777 C 17.533 30.977 16.533 31.077 15.533 31.077 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(0 0)\"><path d=\"M 12.55 13.05 C 12.45 13.05 12.25 12.95 12.15 12.85 L 0.15 0.85 C -0.05 0.65 -0.05 0.35 0.15 0.15 C 0.35 -0.05 0.65 -0.05 0.85 0.15 L 12.85 12.15 C 13.05 12.35 13.05 12.65 12.85 12.85 C 12.85 13.05 12.65 13.05 12.55 13.05 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(0 0)\"><path d=\"M 0.55 13.05 C 0.45 13.05 0.25 12.95 0.15 12.85 C -0.05 12.65 -0.05 12.35 0.15 12.15 L 12.15 0.15 C 12.35 -0.05 12.65 -0.05 12.85 0.15 C 13.05 0.35 13.05 0.65 12.85 0.85 L 0.85 12.85 C 0.85 13.05 0.65 13.05 0.55 13.05 Z\" fill=\"currentColor\"></path></g>"
  },
  "download": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(1.058 1.028)\"><path d=\"M 14.902 29.972 C 11.942 29.972 9.062 29.092 6.582 27.412 C 6.342 27.252 6.302 26.932 6.462 26.732 C 6.622 26.492 6.942 26.452 7.142 26.612 C 10.262 28.692 13.982 29.452 17.662 28.732 C 21.342 28.012 24.502 25.892 26.582 22.812 C 28.662 19.692 29.422 15.972 28.702 12.292 C 27.982 8.612 25.862 5.452 22.782 3.372 C 16.382 -0.908 7.662 0.772 3.382 7.212 C 0.582 11.372 0.222 16.732 2.462 21.212 C 2.582 21.452 2.502 21.772 2.222 21.892 C 1.982 22.012 1.662 21.892 1.542 21.652 C -0.818 16.852 -0.458 11.092 2.542 6.652 C 7.102 -0.228 16.422 -2.068 23.302 2.532 C 26.622 4.772 28.902 8.172 29.662 12.092 C 30.422 16.012 29.662 20.012 27.382 23.332 C 25.102 26.652 21.742 28.932 17.822 29.692 C 16.862 29.892 15.902 29.972 14.902 29.972 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(59.96 7.8)\"><path d=\"M 0 15.2 L 0 0.48 C 0 0.2 0.24 0 0.48 0 C 0.72 0 0.96 0.24 0.96 0.48 L 0.96 15.2 C 0.96 15.48 0.72 15.68 0.48 15.68 C 0.24 15.68 0 15.44 0 15.2 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(57 19.53)\"><path d=\"M 0 0.51 C 0 0.39 0.04 0.27 0.16 0.15 C 0.36 -0.05 0.68 -0.05 0.88 0.15 L 3.84 3.11 C 4.04 3.31 4.04 3.63 3.84 3.83 C 3.64 4.03 3.32 4.03 3.12 3.83 L 0.16 0.87 C 0.08 0.79 0 0.63 0 0.51 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(59.96 19.53)\"><path d=\"M 0 3.47 C 0 3.35 0.04 3.23 0.16 3.11 L 3.12 0.15 C 3.32 -0.05 3.64 -0.05 3.84 0.15 C 4.04 0.35 4.04 0.67 3.84 0.87 L 0.88 3.83 C 0.68 4.03 0.36 4.03 0.16 3.83 C 0.08 3.75 0 3.59 0 3.47 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(4.76 0)\"><path d=\"M 4.72 3.04 L 0 3.04 L 0 0 L 4.72 0 L 4.72 3.04 Z M 0.8 2.24 L 3.92 2.24 L 3.92 0.8 L 0.8 0.8 L 0.8 2.24 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(0 3.96)\"><path d=\"M 7.12 13.8 L 0 6.68 L 4.76 6.68 L 4.76 0 L 9.48 0 L 9.48 6.68 L 14.24 6.68 L 7.12 13.8 Z M 1.96 7.48 L 7.12 12.64 L 12.28 7.48 L 8.68 7.48 L 8.68 0.8 L 5.56 0.8 L 5.56 7.48 L 1.96 7.48 Z\" fill=\"currentColor\"></path></g>"
  },
  "edit": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(0 2.243)\"><path d=\"M 24.85 29.757 L 4.6 29.757 C 2.066 29.757 0 27.671 0 25.111 L 0 4.647 C 0 2.087 2.066 0 4.6 0 L 11.355 0 C 11.723 0 12.021 0.301 12.021 0.672 C 12.021 1.043 11.723 1.345 11.355 1.345 L 4.6 1.345 C 2.795 1.345 1.331 2.824 1.331 4.647 L 1.331 25.105 C 1.331 26.928 2.795 28.407 4.6 28.407 L 24.85 28.407 C 26.65 28.407 28.119 26.928 28.119 25.105 L 28.119 18.286 C 28.119 17.915 28.417 17.613 28.785 17.613 C 29.152 17.613 29.45 17.915 29.45 18.286 L 29.45 25.105 C 29.45 27.665 27.384 29.752 24.85 29.752 L 24.85 29.757 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(0 0)\"><path d=\"M 1.338 0 L 0 0 L 0 8.487 L 1.338 8.487 L 1.338 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(0 0)\"><path d=\"M 0.005 23.761 L 2.097 15.64 L 2.316 15.408 L 16.711 0.866 C 17.264 0.307 17.999 0 18.782 0 C 19.564 0 20.299 0.307 20.852 0.866 L 22.822 2.856 C 23.961 4.012 23.961 5.889 22.822 7.04 L 8.209 21.808 L 0 23.755 L 0.005 23.761 Z M 3.301 16.317 L 1.853 21.937 L 7.538 20.582 L 21.885 6.088 C 22.508 5.459 22.508 4.432 21.885 3.802 L 19.915 1.812 C 19.309 1.205 18.26 1.205 17.653 1.812 L 3.301 16.312 L 3.301 16.317 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(0 0)\"><path d=\"M 1.338 0 L 0 0 L 0 8.487 L 1.338 8.487 L 1.338 0 Z\" fill=\"currentColor\"></path></g>"
  },
  "email": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(2.28 7.44)\"><path d=\"M 24.32 17 L 2.88 17 C 1.32 17 0 15.72 0 14.12 L 0 2.88 C 0 1.32 1.28 0 2.88 0 L 20.88 0 C 21.16 0 21.36 0.24 21.36 0.48 C 21.36 0.72 21.12 0.96 20.88 0.96 L 2.88 0.96 C 1.84 0.96 1 1.8 1 2.84 L 1 14.16 C 1 15.2 1.84 16.04 2.88 16.04 L 24.28 16.04 C 25.12 16.04 25.84 15.48 26.08 14.68 C 26.12 14.52 26.16 14.36 26.16 14.16 L 26.16 2.88 C 26.16 1.84 25.32 1 24.28 1 L 23.16 1 C 22.88 1 22.68 0.76 22.68 0.52 C 22.68 0.28 22.92 0.04 23.16 0.04 L 24.28 0.04 C 25.84 0.04 27.16 1.32 27.16 2.92 L 27.16 14.16 C 27.16 14.44 27.12 14.68 27.04 14.92 C 26.72 16.16 25.6 17 24.32 17 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(3.917 9.117)\"><path d=\"M 23.843 0.243 C 23.683 0.003 23.403 -0.077 23.163 0.083 L 11.963 6.923 L 0.763 0.083 C 0.523 -0.077 0.203 0.003 0.083 0.243 C -0.077 0.483 0.003 0.803 0.243 0.923 L 11.683 7.883 C 11.763 7.923 11.883 7.963 11.963 7.963 C 12.083 7.963 12.163 7.963 12.243 7.883 L 23.683 0.923 C 23.923 0.763 24.003 0.443 23.843 0.243 Z\" fill=\"currentColor\"></path></g>"
  },
  "ev-charging": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(0.092 0.108)\"><path d=\"M 26.828 4.282 C 23.558 1.232 19.288 -0.278 14.808 0.042 C 6.918 0.592 0.568 6.952 0.038 14.832 C -0.562 23.632 6.088 31.272 14.858 31.872 C 14.888 31.872 14.928 31.872 14.958 31.872 C 15.338 31.872 15.708 31.722 15.988 31.462 C 16.298 31.172 16.468 30.772 16.468 30.352 L 16.468 25.682 C 16.748 25.662 17.018 25.622 17.278 25.562 C 17.768 25.442 18.138 25.032 18.198 24.532 C 18.268 23.912 18.708 22.182 21.278 19.522 C 22.238 18.532 22.918 17.372 23.308 16.102 C 23.548 15.332 23.408 14.512 22.928 13.862 C 22.448 13.212 21.708 12.842 20.908 12.842 L 20.678 12.842 L 20.678 7.962 C 20.678 7.112 19.988 6.432 19.148 6.432 C 18.308 6.432 17.618 7.122 17.618 7.962 L 17.618 12.842 L 14.308 12.842 L 14.308 7.962 C 14.308 7.112 13.618 6.432 12.778 6.432 C 11.938 6.432 11.248 7.122 11.248 7.962 L 11.248 12.842 L 11.018 12.842 C 10.208 12.842 9.478 13.212 8.998 13.862 C 8.518 14.512 8.378 15.332 8.618 16.102 C 9.008 17.382 9.698 18.532 10.648 19.532 C 13.208 22.192 13.658 23.922 13.728 24.542 C 13.788 25.042 14.158 25.462 14.648 25.572 C 14.908 25.632 15.178 25.662 15.458 25.692 L 15.458 30.362 C 15.458 30.502 15.398 30.632 15.298 30.732 C 15.198 30.822 15.068 30.872 14.938 30.862 C 6.708 30.292 0.488 23.142 1.048 14.902 C 1.558 7.522 7.498 1.572 14.878 1.052 C 19.068 0.752 23.078 2.172 26.138 5.022 C 29.158 7.842 30.888 11.822 30.888 15.952 C 30.888 22.082 27.218 27.522 21.528 29.812 C 21.268 29.922 21.138 30.212 21.248 30.472 C 21.358 30.732 21.648 30.862 21.908 30.752 C 27.978 28.312 31.908 22.492 31.908 15.942 C 31.908 11.532 30.058 7.282 26.828 4.272 L 26.828 4.282 Z M 18.628 7.962 C 18.628 7.682 18.858 7.452 19.138 7.452 C 19.418 7.452 19.648 7.682 19.648 7.962 L 19.648 12.842 L 18.618 12.842 L 18.618 7.962 L 18.628 7.962 Z M 12.248 7.962 C 12.248 7.682 12.478 7.452 12.758 7.452 C 13.038 7.452 13.268 7.682 13.268 7.962 L 13.268 12.842 L 12.238 12.842 L 12.238 7.962 L 12.248 7.962 Z M 14.728 24.422 C 14.628 23.522 14.048 21.602 11.368 18.822 C 10.518 17.942 9.918 16.932 9.578 15.802 C 9.438 15.342 9.518 14.852 9.808 14.472 C 10.088 14.092 10.528 13.872 11.008 13.872 L 20.908 13.872 C 21.388 13.872 21.828 14.092 22.108 14.482 C 22.398 14.872 22.478 15.352 22.338 15.812 C 21.998 16.932 21.388 17.952 20.548 18.832 C 17.868 21.612 17.298 23.542 17.188 24.432 C 17.188 24.512 17.128 24.572 17.048 24.582 C 16.818 24.632 16.448 24.702 15.958 24.702 C 15.568 24.702 15.198 24.662 14.868 24.582 C 14.788 24.562 14.738 24.502 14.728 24.432 L 14.728 24.422 Z\" fill=\"currentColor\"></path></g>"
  },
  "eye-closed": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(0.84 7.579)\"><path d=\"M 26.59 5.751 C 26.113 5.343 26.786 4.498 27.311 5.03 L 30.17 7.891 C 30.26 7.981 30.32 8.111 30.32 8.251 C 30.32 8.391 30.27 8.51 30.17 8.61 L 27.311 11.461 C 23.991 14.781 19.57 16.471 15.13 16.471 L 15.13 16.48 C 11.728 16.48 8.317 15.486 5.392 13.455 C 4.865 13.089 5.392 12.22 5.951 12.609 C 12.3 17.026 21.071 16.27 26.59 10.751 L 29.09 8.251 L 26.59 5.751 Z M 19.82 7.827 C 19.789 7.474 20.473 7.077 20.796 7.474 C 20.83 7.728 20.851 7.988 20.851 8.251 C 20.85 11.451 18.24 14.061 15.04 14.061 C 12.973 14.061 11.153 12.971 10.123 11.337 C 9.811 10.842 10.726 10.45 11.097 10.984 C 11.964 12.232 13.406 13.051 15.04 13.051 C 17.69 13.051 19.84 10.901 19.84 8.251 C 19.84 8.108 19.833 7.967 19.82 7.827 Z M 28.065 2.716 C 28.325 2.622 28.611 2.756 28.705 3.016 C 28.799 3.275 28.665 3.562 28.405 3.656 L 1.721 13.315 C 1.461 13.409 1.175 13.275 1.081 13.016 C 0.987 12.756 1.121 12.469 1.381 12.375 L 28.065 2.716 Z M 3.01 5.03 C 8.618 -0.588 17.37 -1.599 24.084 2.496 C 24.834 2.954 24.084 3.678 23.564 3.362 C 17.246 -0.492 9.01 0.462 3.73 5.751 L 1.23 8.251 L 3.021 10.032 C 3.395 10.595 2.551 10.983 2.143 10.595 L 0.15 8.61 C 0.05 8.52 0 8.391 0 8.251 C 0 8.111 0.05 7.991 0.15 7.891 L 3.01 5.03 Z M 15.04 2.44 C 16.906 2.44 18.571 3.329 19.635 4.703 C 19.82 5.233 18.942 5.417 18.631 5.067 C 17.751 4.076 16.469 3.451 15.04 3.451 C 12.449 3.451 10.321 5.522 10.243 8.104 C 10.243 8.639 9.473 8.764 9.235 8.468 C 9.233 8.396 9.23 8.323 9.23 8.251 C 9.23 5.051 11.84 2.44 15.04 2.44 Z\" fill=\"currentColor\"></path></g>"
  },
  "eye-open": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(0.84 7.58)\"><path d=\"M 26.16 4.66 C 26.34 4.45 26.64 4.42 26.86 4.59 C 26.89 4.61 26.901 4.621 27.311 5.031 L 30.17 7.891 C 30.26 7.981 30.32 8.11 30.32 8.25 C 30.32 8.39 30.27 8.511 30.17 8.611 L 27.311 11.46 C 23.991 14.78 19.57 16.47 15.13 16.47 L 15.13 16.481 C 11.52 16.481 7.9 15.36 4.86 13.071 C 4.64 12.901 4.59 12.581 4.76 12.361 C 4.93 12.141 5.25 12.09 5.47 12.26 C 11.85 17.06 20.93 16.41 26.59 10.75 L 29.09 8.25 L 26.2 5.361 C 26 5.171 25.98 4.86 26.16 4.66 Z M 15.04 2.441 C 18.24 2.441 20.85 5.05 20.851 8.25 C 20.851 11.45 18.24 14.061 15.04 14.061 C 11.84 14.061 9.23 11.45 9.23 8.25 C 9.231 5.05 11.84 2.441 15.04 2.441 Z M 15.04 3.45 C 12.4 3.45 10.24 5.6 10.24 8.25 C 10.24 10.9 12.39 13.05 15.04 13.05 C 17.69 13.05 19.84 10.9 19.84 8.25 C 19.84 5.6 17.69 3.45 15.04 3.45 Z M 18.01 7.721 C 18.29 7.721 18.521 7.951 18.521 8.231 C 18.52 10.141 16.96 11.7 15.05 11.7 L 15.04 11.71 C 14.76 11.71 14.53 11.48 14.53 11.2 C 14.53 10.92 14.76 10.691 15.04 10.691 C 16.39 10.691 17.5 9.591 17.5 8.231 C 17.5 7.951 17.73 7.721 18.01 7.721 Z M 3.01 5.031 C 8.8 -0.769 17.94 -1.66 24.73 2.91 C 24.96 3.07 25.02 3.381 24.87 3.611 C 24.71 3.841 24.4 3.9 24.17 3.75 C 17.78 -0.55 9.18 0.291 3.73 5.75 L 1.23 8.25 L 3.38 10.391 C 3.58 10.591 3.58 10.911 3.38 11.111 C 3.28 11.21 3.15 11.26 3.021 11.26 C 2.891 11.26 2.76 11.211 2.66 11.111 L 0.15 8.611 C 0.05 8.521 0 8.39 0 8.25 C 0 8.11 0.05 7.991 0.15 7.891 L 3.01 5.031 Z\" fill=\"currentColor\"></path></g>"
  },
  "facebook": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(8.856 15.392)\"><path d=\"M 1 1.656 L 0 1.656 L 0 0 L 1.66 0 L 1.66 1 L 1 1 L 1 1.656 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(1.004 1.003)\"><path d=\"M 14.996 29.997 C 14.56 29.997 14.124 29.977 13.704 29.941 C 11.604 29.765 9.596 29.157 7.74 28.133 C 6.912 27.673 6.136 27.141 5.432 26.549 C 4.74 25.977 4.084 25.325 3.484 24.613 C 2.884 23.897 2.352 23.121 1.9 22.313 C 1.416 21.449 1.02 20.541 0.72 19.605 C 0.392 18.589 0.176 17.549 0.072 16.509 C 0.024 16.017 0 15.509 0 15.005 C 0 14.093 0.08 13.185 0.24 12.305 C 1.352 6.193 6.2 1.345 12.308 0.237 C 13.72 -0.015 15.208 -0.063 16.504 0.077 C 17.536 0.177 18.58 0.393 19.6 0.721 C 20.532 1.021 21.444 1.417 22.308 1.901 C 23.136 2.369 23.912 2.901 24.608 3.489 C 25.304 4.073 25.96 4.729 26.544 5.437 C 27.132 6.145 27.664 6.921 28.12 7.745 C 28.604 8.625 29 9.541 29.292 10.465 C 29.624 11.521 29.84 12.613 29.932 13.709 C 29.972 14.133 29.988 14.569 29.988 15.001 C 29.988 15.929 29.9 16.869 29.728 17.801 C 28.592 23.805 23.796 28.601 17.792 29.737 C 16.86 29.909 15.92 29.997 14.992 29.997 L 14.996 29.997 Z M 13.856 28.853 C 14.028 28.861 14.192 28.865 14.356 28.865 C 14.972 28.865 15.604 28.817 16.244 28.725 L 16.244 18.441 L 19.504 18.441 L 20 15.385 L 16.248 15.385 L 16.248 12.053 C 16.248 11.749 16.276 11.469 16.336 11.221 L 16.38 11.069 C 16.468 10.773 16.604 10.517 16.788 10.305 C 17.056 9.997 17.424 9.781 17.892 9.661 C 18.188 9.577 18.528 9.537 18.924 9.537 L 20.304 9.537 L 20.304 6.781 C 19.688 6.697 18.972 6.613 18.296 6.573 C 18.072 6.565 17.84 6.557 17.62 6.557 C 14.4 6.557 12.476 8.481 12.476 11.701 L 12.476 15.385 L 8.856 15.385 L 8.856 18.441 L 12.476 18.441 L 12.476 28.721 C 12.94 28.789 13.396 28.829 13.832 28.849 L 13.86 28.849 L 13.856 28.853 Z M 17.248 19.445 L 17.248 28.817 C 17.372 28.797 17.492 28.777 17.616 28.753 C 23.216 27.693 27.692 23.217 28.752 17.617 C 28.912 16.749 28.996 15.869 28.996 15.001 C 28.996 14.597 28.976 14.193 28.94 13.797 C 28.856 12.769 28.656 11.749 28.344 10.765 C 28.072 9.901 27.704 9.049 27.252 8.229 C 26.828 7.465 26.332 6.741 25.78 6.077 C 25.232 5.413 24.62 4.801 23.968 4.257 C 23.316 3.709 22.596 3.209 21.824 2.777 C 21.02 2.325 20.168 1.957 19.296 1.677 C 18.344 1.369 17.372 1.169 16.404 1.077 C 15.184 0.945 13.8 0.993 12.484 1.225 C 6.788 2.261 2.26 6.785 1.228 12.485 C 1.08 13.305 1.004 14.153 1.004 15.005 C 1.004 15.477 1.028 15.953 1.072 16.409 C 1.168 17.377 1.372 18.349 1.676 19.297 C 1.956 20.169 2.328 21.021 2.776 21.825 C 3.196 22.577 3.692 23.301 4.252 23.969 C 4.808 24.637 5.42 25.245 6.072 25.781 C 6.732 26.333 7.456 26.829 8.228 27.261 C 9.264 27.833 10.348 28.265 11.472 28.557 L 11.472 19.449 L 7.852 19.449 L 7.852 14.393 L 11.472 14.393 L 11.472 11.709 C 11.472 7.977 13.884 5.565 17.616 5.565 C 17.852 5.565 18.096 5.573 18.34 5.585 C 19.224 5.637 20.156 5.757 20.868 5.861 L 21.296 5.921 L 21.296 10.545 L 18.916 10.545 C 18.616 10.545 18.356 10.577 18.144 10.633 C 18.144 10.633 18.144 10.633 18.14 10.633 C 17.924 10.689 17.756 10.769 17.628 10.881 C 17.472 11.017 17.372 11.201 17.312 11.449 L 17.288 11.549 C 17.26 11.705 17.248 11.877 17.248 12.065 L 17.248 14.389 L 21.172 14.389 L 21.044 15.205 L 20.36 19.445 L 17.252 19.445 L 17.248 19.445 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(17.249 14.249)\"><path d=\"M 0.499 13.695 C 0.371 13.695 0.243 13.647 0.147 13.547 C -0.049 13.351 -0.049 13.035 0.147 12.839 L 12.839 0.147 C 13.035 -0.049 13.351 -0.049 13.547 0.147 C 13.743 0.343 13.743 0.659 13.547 0.855 L 0.855 13.547 C 0.759 13.643 0.631 13.695 0.503 13.695 L 0.499 13.695 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(14.253 29.853)\"><path d=\"M 0.499 1.091 C 0.371 1.091 0.243 1.043 0.147 0.943 C -0.049 0.747 -0.049 0.431 0.147 0.235 L 0.235 0.147 C 0.431 -0.049 0.747 -0.049 0.943 0.147 C 1.139 0.343 1.139 0.659 0.943 0.855 L 0.855 0.943 C 0.759 1.043 0.631 1.091 0.503 1.091 L 0.499 1.091 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(17.249 11.113)\"><path d=\"M 0.499 13.071 C 0.371 13.071 0.243 13.023 0.147 12.923 C -0.049 12.727 -0.049 12.411 0.147 12.215 L 12.223 0.147 C 12.419 -0.049 12.735 -0.049 12.931 0.147 C 13.127 0.343 13.127 0.659 12.931 0.855 L 0.855 12.923 C 0.759 13.019 0.631 13.071 0.503 13.071 L 0.499 13.071 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(11.253 27.957)\"><path d=\"M 0.499 2.223 C 0.371 2.223 0.243 2.175 0.147 2.075 C -0.049 1.879 -0.049 1.563 0.147 1.367 L 1.367 0.147 C 1.563 -0.049 1.879 -0.049 2.075 0.147 C 2.271 0.343 2.271 0.659 2.075 0.855 L 0.855 2.075 C 0.759 2.171 0.631 2.223 0.503 2.223 L 0.499 2.223 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(21.053 8.485)\"><path d=\"M 0.499 8.143 C 0.371 8.143 0.243 8.095 0.147 7.995 C -0.049 7.799 -0.049 7.483 0.147 7.287 L 7.287 0.147 C 7.483 -0.049 7.799 -0.049 7.995 0.147 C 8.191 0.343 8.191 0.659 7.995 0.855 L 0.855 7.995 C 0.759 8.091 0.631 8.143 0.503 8.143 L 0.499 8.143 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(8.446 24.205)\"><path d=\"M 0.502 5.027 C 0.374 5.027 0.246 4.979 0.146 4.879 C -0.05 4.683 -0.046 4.367 0.146 4.171 L 4.17 0.147 C 4.366 -0.049 4.682 -0.049 4.878 0.147 C 5.074 0.343 5.074 0.659 4.878 0.855 L 0.85 4.883 C 0.754 4.979 0.626 5.027 0.498 5.027 L 0.502 5.027 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(17.529 6.257)\"><path d=\"M 0.499 10.135 C 0.371 10.135 0.243 10.087 0.147 9.987 C -0.049 9.791 -0.049 9.475 0.147 9.279 L 9.283 0.147 C 9.479 -0.049 9.795 -0.049 9.991 0.147 C 10.187 0.343 10.187 0.659 9.991 0.855 L 0.855 9.987 C 0.759 10.083 0.631 10.135 0.503 10.135 L 0.499 10.135 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(6.257 20.441)\"><path d=\"M 0.499 7.223 C 0.371 7.223 0.243 7.175 0.147 7.075 C -0.049 6.879 -0.049 6.563 0.147 6.367 L 6.367 0.147 C 6.563 -0.049 6.879 -0.049 7.075 0.147 C 7.271 0.343 7.271 0.659 7.075 0.855 L 0.855 7.075 C 0.759 7.171 0.631 7.223 0.503 7.223 L 0.499 7.223 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(21.305 4.369)\"><path d=\"M 0.499 4.491 C 0.371 4.491 0.243 4.443 0.147 4.343 C -0.049 4.147 -0.049 3.831 0.147 3.635 L 3.635 0.147 C 3.831 -0.049 4.147 -0.049 4.343 0.147 C 4.539 0.343 4.539 0.659 4.343 0.855 L 0.855 4.343 C 0.759 4.439 0.631 4.491 0.503 4.491 L 0.499 4.491 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(4.373 19.441)\"><path d=\"M 0.499 6.347 C 0.371 6.347 0.243 6.299 0.147 6.199 C -0.049 6.003 -0.049 5.687 0.147 5.491 L 5.491 0.147 C 5.687 -0.049 6.003 -0.049 6.199 0.147 C 6.395 0.343 6.395 0.659 6.199 0.855 L 0.855 6.199 C 0.759 6.295 0.631 6.347 0.503 6.347 L 0.499 6.347 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(17.325 10.649)\"><path d=\"M 0.499 2.183 C 0.371 2.183 0.243 2.135 0.147 2.039 C -0.049 1.843 -0.049 1.531 0.147 1.335 L 1.339 0.147 C 1.535 -0.049 1.851 -0.049 2.047 0.147 C 2.243 0.343 2.243 0.659 2.047 0.855 L 0.859 2.039 C 0.759 2.135 0.631 2.187 0.503 2.187 L 0.499 2.183 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(18.209 18.209)\"><path d=\"M 0.499 12.539 C 0.371 12.539 0.243 12.491 0.147 12.391 C -0.049 12.195 -0.049 11.879 0.147 11.683 L 11.683 0.147 C 11.879 -0.049 12.195 -0.049 12.391 0.147 C 12.587 0.343 12.587 0.659 12.391 0.855 L 0.855 12.391 C 0.759 12.487 0.631 12.539 0.503 12.539 L 0.499 12.539 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(2.841 16.545)\"><path d=\"M 0.499 7.023 C 0.371 7.023 0.243 6.975 0.147 6.875 C -0.049 6.679 -0.049 6.363 0.147 6.167 L 6.159 0.147 C 6.355 -0.049 6.671 -0.049 6.867 0.147 C 7.063 0.343 7.063 0.659 6.867 0.855 L 0.855 6.875 C 0.759 6.971 0.631 7.023 0.503 7.023 L 0.499 7.023 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(10.017 12.929)\"><path d=\"M 0.499 3.463 C 0.371 3.463 0.243 3.415 0.147 3.315 C -0.049 3.119 -0.049 2.803 0.147 2.607 L 2.607 0.147 C 2.803 -0.049 3.119 -0.049 3.315 0.147 C 3.511 0.343 3.511 0.659 3.315 0.855 L 0.855 3.315 C 0.759 3.411 0.631 3.463 0.503 3.463 L 0.499 3.463 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(18.825 2.837)\"><path d=\"M 0.499 4.743 C 0.371 4.743 0.243 4.695 0.147 4.595 C -0.049 4.399 -0.049 4.083 0.147 3.887 L 3.891 0.147 C 4.087 -0.049 4.403 -0.049 4.599 0.147 C 4.795 0.343 4.795 0.659 4.599 0.855 L 0.855 4.595 C 0.759 4.691 0.631 4.743 0.503 4.743 L 0.499 4.743 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(1.073 1.077)\"><path d=\"M 0.499 16.879 C 0.371 16.879 0.243 16.831 0.147 16.731 C -0.049 16.535 -0.049 16.219 0.147 16.023 L 16.027 0.147 C 16.223 -0.049 16.539 -0.049 16.735 0.147 C 16.931 0.343 16.931 0.659 16.735 0.855 L 0.855 16.731 C 0.759 16.827 0.631 16.879 0.503 16.879 L 0.499 16.879 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(1.701 1.697)\"><path d=\"M 0.499 19.251 C 0.371 19.251 0.243 19.203 0.147 19.103 C -0.049 18.907 -0.049 18.591 0.147 18.395 L 18.399 0.147 C 18.595 -0.049 18.911 -0.049 19.107 0.147 C 19.303 0.343 19.303 0.659 19.107 0.855 L 0.851 19.107 C 0.755 19.203 0.627 19.255 0.499 19.255 L 0.499 19.251 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(1.237 1.229)\"><path d=\"M 0.499 12.663 C 0.371 12.663 0.243 12.615 0.147 12.515 C -0.049 12.319 -0.049 12.003 0.147 11.807 L 11.811 0.147 C 12.007 -0.049 12.323 -0.049 12.519 0.147 C 12.715 0.343 12.715 0.659 12.519 0.855 L 0.855 12.519 C 0.759 12.615 0.631 12.667 0.503 12.667 L 0.499 12.663 Z\" fill=\"currentColor\"></path></g>"
  },
  "filters": {
    vb: "0 0 33.45 32",
    p: "<g transform=\"translate(19.062 4.008)\"><path d=\"M 13.825 1.126 L 0.563 1.126 C 0.252 1.126 0 0.874 0 0.563 C 0 0.252 0.252 0 0.563 0 L 13.825 0 C 14.136 0 14.388 0.252 14.388 0.563 C 14.388 0.874 14.136 1.126 13.825 1.126 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(0 4.008)\"><path d=\"M 8.462 1.126 L 0.563 1.126 C 0.252 1.126 0 0.874 0 0.563 C 0 0.252 0.252 0 0.563 0 L 8.462 0 C 8.772 0 9.024 0.252 9.024 0.563 C 9.024 0.874 8.772 1.126 8.462 1.126 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(29.091 15.437)\"><path d=\"M 3.796 1.126 L 0.563 1.126 C 0.252 1.126 0 0.874 0 0.563 C 0 0.252 0.252 0 0.563 0 L 3.796 0 C 4.107 0 4.359 0.252 4.359 0.563 C 4.359 0.874 4.107 1.126 3.796 1.126 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(0 15.437)\"><path d=\"M 18.495 1.126 L 0.563 1.126 C 0.252 1.126 0 0.874 0 0.563 C 0 0.252 0.252 0 0.563 0 L 18.495 0 C 18.806 0 19.058 0.252 19.058 0.563 C 19.058 0.874 18.806 1.126 18.495 1.126 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(15.054 26.871)\"><path d=\"M 17.833 1.126 L 0.563 1.126 C 0.252 1.126 0 0.874 0 0.563 C 0 0.252 0.252 0 0.563 0 L 17.833 0 C 18.144 0 18.396 0.252 18.396 0.563 C 18.396 0.874 18.144 1.126 17.833 1.126 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(0 26.871)\"><path d=\"M 4.458 1.126 L 0.563 1.126 C 0.252 1.126 0 0.874 0 0.563 C 0 0.252 0.252 0 0.563 0 L 4.458 0 C 4.769 0 5.021 0.252 5.021 0.563 C 5.021 0.874 4.769 1.126 4.458 1.126 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(7.899 0)\"><path d=\"M 4.566 9.133 C 2.049 9.133 0 7.084 0 4.566 C 0 2.049 2.049 0 4.566 0 C 7.084 0 9.133 2.049 9.133 4.566 C 9.133 7.084 7.084 9.133 4.566 9.133 Z M 4.566 1.126 C 2.67 1.126 1.126 2.67 1.126 4.566 C 1.126 6.462 2.67 8.007 4.566 8.007 C 6.462 8.007 8.007 6.462 8.007 4.566 C 8.007 2.67 6.462 1.126 4.566 1.126 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(21.084 11.434)\"><path d=\"M 4.566 9.133 C 2.049 9.133 0 7.084 0 4.566 C 0 2.049 2.049 0 4.566 0 C 7.084 0 9.133 2.049 9.133 4.566 C 9.133 7.084 7.084 9.133 4.566 9.133 Z M 4.566 1.126 C 2.67 1.126 1.126 2.67 1.126 4.566 C 1.126 6.462 2.67 8.007 4.566 8.007 C 6.462 8.007 8.007 6.462 8.007 4.566 C 8.007 2.67 6.462 1.126 4.566 1.126 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(3.895 22.867)\"><path d=\"M 4.566 9.133 C 2.049 9.133 0 7.084 0 4.566 C 0 2.049 2.049 0 4.566 0 C 7.084 0 9.133 2.049 9.133 4.566 C 9.133 7.084 7.084 9.133 4.566 9.133 Z M 4.566 1.126 C 2.67 1.126 1.126 2.67 1.126 4.566 C 1.126 6.462 2.67 8.007 4.566 8.007 C 6.462 8.007 8.007 6.462 8.007 4.566 C 8.007 2.67 6.462 1.126 4.566 1.126 Z\" fill=\"currentColor\"></path></g>"
  },
  "fuel-cards": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(0.16 5.22)\"><path d=\"M 27.76 0 L 27.07 0 C 26.79 0 26.57 0.23 26.57 0.5 C 26.57 0.77 26.8 1 27.07 1 L 27.76 1 C 29.46 1 30.83 2.38 30.83 4.08 L 30.83 5.45 L 27.92 5.45 C 27.64 5.45 27.42 5.68 27.42 5.95 C 27.42 6.22 27.65 6.45 27.92 6.45 L 30.83 6.45 L 30.83 10.75 L 1.01 10.75 L 1.01 6.45 L 17.31 6.45 C 17.59 6.45 17.81 6.22 17.81 5.95 C 17.81 5.68 17.58 5.45 17.31 5.45 L 1.01 5.45 L 1.01 4.08 C 1.01 2.38 2.39 1 4.08 1 L 18.26 1 C 18.54 1 18.76 0.77 18.76 0.5 C 18.76 0.23 18.53 0 18.26 0 L 4.08 0 C 1.83 0 0 1.83 0 4.08 L 0 17.03 C 0 19.28 1.83 21.11 4.08 21.11 L 27.76 21.11 C 30.01 21.11 31.84 19.28 31.84 17.03 L 31.84 4.08 C 31.84 1.83 30.01 0 27.76 0 Z M 27.76 20.11 L 4.08 20.11 C 2.38 20.11 1.01 18.73 1.01 17.04 L 1.01 11.78 L 30.84 11.78 L 30.84 17.04 C 30.84 18.73 29.46 20.11 27.77 20.11 L 27.76 20.11 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(4.09 22.1)\"><path d=\"M 6.53 0 L 0.5 0 C 0.22 0 0 0.23 0 0.5 C 0 0.77 0.23 1 0.5 1 L 6.53 1 C 6.81 1 7.03 0.77 7.03 0.5 C 7.03 0.23 6.8 0 6.53 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(12.37 22.1)\"><path d=\"M 4.51 0 L 0.5 0 C 0.22 0 0 0.23 0 0.5 C 0 0.77 0.23 1 0.5 1 L 4.51 1 C 4.79 1 5.01 0.77 5.01 0.5 C 5.01 0.23 4.78 0 4.51 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(18.64 2.202)\"><path d=\"M 4.21 12.537 C 6.53 12.537 8.41 10.647 8.41 8.337 C 8.41 3.607 4.7 0.267 4.54 0.127 C 4.35 -0.043 4.06 -0.043 3.87 0.127 C 3.71 0.267 0 3.597 0 8.337 C 0 10.657 1.89 12.537 4.2 12.537 L 4.21 12.537 Z M 4.21 1.208 C 5.09 2.118 7.41 4.857 7.41 8.337 C 7.41 10.097 5.98 11.537 4.21 11.537 C 2.44 11.537 1.01 10.108 1.01 8.337 C 1.01 4.857 3.33 2.128 4.21 1.208 Z\" fill=\"currentColor\"></path></g>"
  },
  "hamburger": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(3.948 9.692)\"><path d=\"M 23.604 1 L 0.5 1 C 0.224 1 0 0.776 0 0.5 C 0 0.224 0.224 0 0.5 0 L 23.604 0 C 23.88 0 24.104 0.224 24.104 0.5 C 24.104 0.776 23.88 1 23.604 1 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(3.948 15.5)\"><path d=\"M 23.604 1 L 0.5 1 C 0.224 1 0 0.776 0 0.5 C 0 0.224 0.224 0 0.5 0 L 23.604 0 C 23.88 0 24.104 0.224 24.104 0.5 C 24.104 0.776 23.88 1 23.604 1 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(3.948 21.308)\"><path d=\"M 23.604 1 L 0.5 1 C 0.224 1 0 0.776 0 0.5 C 0 0.224 0.224 0 0.5 0 L 23.604 0 C 23.88 0 24.104 0.224 24.104 0.5 C 24.104 0.776 23.88 1 23.604 1 Z\" fill=\"currentColor\"></path></g>"
  },
  "home": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(0.94 2.52)\"><path d=\"M 0.62 16.08 C 0.46 16.08 0.3 16.04 0.18 15.92 C -0.06 15.68 -0.06 15.32 0.18 15.08 L 15.34 0 L 29.9 14.08 C 30.14 14.32 30.14 14.68 29.9 14.92 C 29.66 15.16 29.3 15.16 29.06 14.92 L 15.34 1.68 L 1.06 15.92 C 0.94 16.04 0.78 16.08 0.62 16.08 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(4.24 13.88)\"><path d=\"M 23.52 15.36 L 0 15.36 L 0 1 L 1.2 1 L 1.2 14.16 L 22.32 14.16 L 22.32 0 L 23.52 0 L 23.52 15.36 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(11.36 17.88)\"><path d=\"M 9.28 10.76 L 8.08 10.76 L 8.08 1.2 L 1.2 1.2 L 1.2 10.76 L 0 10.76 L 0 0 L 9.28 0 L 9.28 10.76 Z\" fill=\"currentColor\"></path></g>"
  },
  "insurance": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(0.001 0.32)\"><path d=\"M 29.829 4.65 C 27.499 2.92 22.569 0 15.659 0 C 8.749 0 3.819 2.92 1.499 4.65 C 0.329 5.53 -0.231 7.01 0.089 8.42 C 0.839 11.81 2.459 18.12 4.919 22.34 C 8.329 28.18 15.169 31.21 15.459 31.34 C 15.519 31.37 15.589 31.38 15.659 31.38 C 15.729 31.38 15.799 31.37 15.859 31.34 C 16.149 31.21 22.999 28.18 26.409 22.34 C 26.969 21.38 27.509 20.27 28.049 18.97 C 28.159 18.71 28.029 18.41 27.779 18.31 C 27.519 18.2 27.229 18.33 27.119 18.58 C 26.589 19.84 26.079 20.91 25.539 21.83 C 22.619 26.84 16.819 29.77 15.669 30.32 C 14.509 29.77 8.719 26.84 5.799 21.83 C 3.399 17.73 1.809 11.53 1.079 8.2 C 0.849 7.17 1.259 6.1 2.109 5.46 C 4.339 3.8 9.059 1.01 15.669 1.01 C 22.279 1.01 26.999 3.8 29.229 5.46 C 30.079 6.09 30.489 7.17 30.259 8.2 C 29.939 9.66 28.809 13.91 28.029 16.39 C 27.949 16.66 28.089 16.94 28.359 17.03 C 28.629 17.11 28.909 16.97 28.999 16.7 C 29.789 14.2 30.919 9.9 31.249 8.42 C 31.559 7 31.009 5.53 29.829 4.65 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(2.392 2.7)\"><path d=\"M 25.878 4.14 C 23.808 2.6 19.418 0 13.268 0 C 7.118 0 2.738 2.6 0.668 4.14 C 0.148 4.53 -0.102 5.19 0.038 5.81 C 0.608 8.38 2.178 14.78 4.518 18.79 C 6.858 22.81 11.258 25.4 13.048 26.33 C 13.118 26.37 13.198 26.39 13.278 26.39 C 13.358 26.39 13.438 26.37 13.508 26.33 C 15.288 25.4 19.688 22.81 22.038 18.79 C 24.378 14.78 25.948 8.38 26.518 5.81 C 26.658 5.18 26.408 4.53 25.888 4.14 L 25.878 4.14 Z M 21.158 18.28 C 19.048 21.9 15.108 24.33 13.278 25.31 C 11.448 24.33 7.508 21.91 5.398 18.28 C 3.128 14.39 1.588 8.11 1.028 5.59 C 0.978 5.35 1.078 5.1 1.278 4.95 C 3.248 3.48 7.428 1.02 13.278 1.02 C 19.128 1.02 23.308 3.49 25.278 4.95 C 25.478 5.1 25.578 5.36 25.528 5.59 C 24.968 8.11 23.428 14.39 21.158 18.28 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(8.087 6.55)\"><path d=\"M 14.733 5.15 L 10.103 4.48 L 8.033 0.28 C 7.943 0.11 7.773 0 7.583 0 C 7.393 0 7.213 0.11 7.133 0.28 L 5.063 4.48 L 0.433 5.15 C 0.243 5.18 0.083 5.31 0.023 5.49 C -0.037 5.67 0.023 5.87 0.153 6.01 L 3.503 9.28 L 2.713 13.89 C 2.683 14.08 2.763 14.27 2.913 14.39 C 3.073 14.5 3.273 14.52 3.443 14.43 L 7.583 12.25 L 11.723 14.43 C 11.793 14.47 11.883 14.49 11.963 14.49 C 12.063 14.49 12.173 14.46 12.263 14.39 C 12.423 14.28 12.493 14.08 12.463 13.89 L 11.673 9.28 L 15.023 6.01 C 15.163 5.88 15.213 5.67 15.153 5.49 C 15.093 5.31 14.933 5.17 14.743 5.15 L 14.733 5.15 Z M 10.763 8.74 C 10.643 8.86 10.593 9.02 10.613 9.19 L 11.273 13.06 L 7.803 11.23 C 7.653 11.15 7.483 11.15 7.333 11.23 L 3.863 13.06 L 4.523 9.19 C 4.553 9.03 4.493 8.86 4.373 8.74 L 1.563 6 L 5.443 5.44 C 5.613 5.42 5.753 5.31 5.823 5.16 L 7.563 1.64 L 9.303 5.16 C 9.373 5.31 9.523 5.41 9.683 5.44 L 13.563 6 L 10.753 8.74 L 10.763 8.74 Z\" fill=\"currentColor\"></path></g>"
  },
  "linkedin": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(9.212 9.208)\"><path d=\"M 13.576 13.58 L 10.788 13.58 L 10.788 8.828 C 10.788 7.524 10.292 6.796 9.264 6.796 C 8.144 6.796 7.556 7.552 7.556 8.828 L 7.556 13.58 L 4.868 13.58 L 4.868 4.528 L 7.556 4.528 L 7.556 5.748 C 7.556 5.748 8.364 4.252 10.284 4.252 C 12.204 4.252 13.58 5.424 13.58 7.848 L 13.58 13.58 L 13.576 13.58 Z M 1.656 3.344 C 0.74 3.344 0 2.596 0 1.672 C 0 0.748 0.74 0 1.656 0 C 2.572 0 3.312 0.748 3.312 1.672 C 3.312 2.596 2.572 3.344 1.656 3.344 Z M 0.268 13.58 L 3.072 13.58 L 3.072 4.528 L 0.268 4.528 L 0.268 13.58 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(1.004 1.004)\"><path d=\"M 14.996 29.992 C 6.728 29.992 0 23.264 0 14.996 C 0 6.728 6.728 0 14.996 0 C 23.264 0 29.992 6.728 29.992 14.996 C 29.992 23.264 23.264 29.992 14.996 29.992 Z M 14.996 1 C 7.28 1 1 7.28 1 14.996 C 1 22.712 7.28 28.992 14.996 28.992 C 22.712 28.992 28.992 22.712 28.992 14.996 C 28.992 7.28 22.712 1 14.996 1 Z\" fill=\"currentColor\"></path></g>"
  },
  "log-out": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(3 2.625)\"><path d=\"M 10.781 0 C 11.016 0 11.25 0.234 11.25 0.469 C 11.25 0.762 11.016 0.938 10.781 0.938 L 5.156 0.938 C 2.813 0.938 0.938 2.871 0.938 5.156 L 0.938 21.094 C 0.938 23.438 2.813 25.313 5.156 25.313 L 10.781 25.313 C 11.016 25.313 11.25 25.547 11.25 25.781 C 11.25 26.074 11.016 26.25 10.781 26.25 L 5.156 26.25 C 2.285 26.25 0 23.965 0 21.094 L 0 5.156 C 0 2.344 2.285 0 5.156 0 L 10.781 0 Z M 19.104 7.278 C 19.271 7.091 19.558 7.063 19.753 7.231 L 25.3 12.058 C 25.651 12.357 25.855 12.806 25.855 13.273 C 25.855 13.741 25.652 14.181 25.3 14.489 L 19.753 19.315 C 19.67 19.39 19.558 19.428 19.456 19.428 C 19.327 19.428 19.197 19.371 19.104 19.269 C 18.938 19.072 18.956 18.783 19.15 18.614 L 24.697 13.788 C 24.845 13.657 24.929 13.47 24.929 13.273 C 24.929 13.077 24.845 12.89 24.697 12.759 L 19.15 7.933 C 18.956 7.764 18.938 7.475 19.104 7.278 Z M 22.42 12.806 C 22.679 12.806 22.883 13.021 22.883 13.273 C 22.883 13.535 22.67 13.741 22.42 13.741 L 8.983 13.741 C 8.724 13.741 8.521 13.535 8.521 13.273 C 8.521 13.012 8.733 12.806 8.983 12.806 L 22.42 12.806 Z\" fill=\"currentColor\"></path></g>"
  },
  "map-marker": {
    vb: "0 0 25.578 32",
    p: "<g transform=\"translate(9.98 10.079)\"><path d=\"M 4.965 0.793 C 4.425 0.265 3.692 -0.024 2.935 0.002 C 1.281 0.068 -0.017 1.442 0 3.099 L 0 10.145 C 0.913 10.517 1.892 10.706 2.88 10.697 L 2.826 2.886 L 5.731 2.078 C 5.593 1.592 5.329 1.149 4.965 0.797 L 4.965 0.793 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(5.169 5.149)\"><path d=\"M 7.599 0 C 3.333 0.067 -0.066 3.588 0.001 7.866 C 0.009 10.026 0.905 12.086 2.479 13.564 L 2.479 8.05 C 2.479 7.908 2.479 7.77 2.496 7.632 C 2.693 4.869 4.932 2.7 7.691 2.6 C 9.081 2.554 10.425 3.081 11.421 4.052 C 12.083 4.693 12.564 5.501 12.811 6.388 L 15.03 5.777 C 14.159 2.382 11.103 0.004 7.603 0.004 L 7.599 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(0 0)\"><path d=\"M 12.789 0 C 5.727 0 0 5.727 0 12.789 C 0 25.059 12.789 32 12.789 32 C 12.789 32 25.578 24.373 25.578 12.789 C 25.578 5.727 19.851 0 12.789 0 Z M 12.789 22.652 C 7.439 22.652 3.098 18.315 3.098 12.961 C 3.098 7.606 7.435 3.269 12.789 3.269 C 18.143 3.269 22.48 7.606 22.48 12.961 C 22.48 18.315 18.143 22.652 12.789 22.652 Z\" fill=\"currentColor\"></path></g>"
  },
  "minus": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(7.78 15.33)\"><path d=\"M 0.53 1.06 L 15.91 1.06 C 16.2 1.06 16.44 0.82 16.44 0.53 C 16.44 0.24 16.2 0 15.91 0 L 0.53 0 C 0.24 0 0 0.24 0 0.53 C 0 0.82 0.24 1.06 0.53 1.06 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(0.227 0.093)\"><path d=\"M 24.563 2.667 C 17.343 -2.173 7.513 -0.243 2.673 6.987 C -0.477 11.667 -0.867 17.717 1.633 22.787 C 1.763 23.047 2.073 23.157 2.333 23.027 C 2.593 22.897 2.703 22.587 2.573 22.327 C 0.243 17.597 0.613 11.937 3.543 7.567 C 8.063 0.827 17.233 -0.983 23.973 3.547 C 30.713 8.067 32.523 17.237 27.993 23.977 C 25.803 27.247 22.473 29.457 18.613 30.217 C 14.753 30.977 10.833 30.187 7.563 27.997 C 7.323 27.837 6.993 27.897 6.833 28.137 C 6.673 28.377 6.733 28.707 6.973 28.867 C 9.603 30.627 12.633 31.547 15.733 31.547 C 16.753 31.547 17.793 31.447 18.813 31.247 C 22.953 30.437 26.523 28.057 28.863 24.557 C 33.713 17.337 31.773 7.507 24.553 2.667 L 24.563 2.667 Z\" fill=\"currentColor\"></path></g>"
  },
  "mobile": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(6.73 0.52)\"><path d=\"M 14.84 30.96 L 3.7 30.96 C 1.66 30.96 0 29.3 0 27.26 L 0 25.32 C 0 25.05 0.22 24.83 0.49 24.83 C 0.76 24.83 0.98 25.05 0.98 25.32 L 0.98 27.26 C 0.98 28.76 2.2 29.97 3.69 29.97 L 14.83 29.97 C 16.33 29.97 17.54 28.75 17.54 27.26 L 17.54 3.7 C 17.54 2.2 16.32 0.99 14.83 0.99 L 3.69 0.99 C 2.19 0.99 0.98 2.21 0.98 3.7 L 0.98 22.99 C 0.98 23.26 0.76 23.48 0.49 23.48 C 0.22 23.48 0 23.26 0 22.99 L 0 3.7 C 0 1.66 1.66 0 3.7 0 L 14.84 0 C 16.88 0 18.54 1.66 18.54 3.7 L 18.54 27.27 C 18.54 29.31 16.88 30.97 14.84 30.97 L 14.84 30.96 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(10.414 0.654)\"><path d=\"M 8.276 4.246 L 2.896 4.246 C 1.796 4.246 0.826 3.536 0.486 2.486 L 0.016 0.616 C -0.054 0.356 0.106 0.086 0.376 0.016 C 0.636 -0.054 0.906 0.106 0.976 0.376 L 1.436 2.216 C 1.636 2.826 2.216 3.256 2.896 3.256 L 8.276 3.256 C 8.946 3.256 9.536 2.826 9.746 2.186 L 10.196 0.376 C 10.266 0.116 10.526 -0.054 10.796 0.016 C 11.056 0.086 11.216 0.346 11.156 0.616 L 10.696 2.456 C 10.356 3.536 9.386 4.246 8.286 4.246 L 8.276 4.246 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(11.54 28.61)\"><path d=\"M 8.43 0.98 L 0.49 0.98 C 0.22 0.98 0 0.76 0 0.49 C 0 0.22 0.22 0 0.49 0 L 8.43 0 C 8.7 0 8.92 0.22 8.92 0.49 C 8.92 0.76 8.7 0.98 8.43 0.98 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(9.4 8.09)\"><path d=\"M 2.22 3.76 L 1.54 3.76 C 0.69 3.76 0 3.07 0 2.22 L 0 1.54 C 0 0.69 0.69 0 1.54 0 L 2.22 0 C 3.07 0 3.76 0.69 3.76 1.54 L 3.76 2.22 C 3.76 3.07 3.07 3.76 2.22 3.76 Z M 1.54 0.98 C 1.23 0.98 0.98 1.23 0.98 1.54 L 0.98 2.22 C 0.98 2.53 1.23 2.78 1.54 2.78 L 2.22 2.78 C 2.53 2.78 2.78 2.53 2.78 2.22 L 2.78 1.54 C 2.78 1.23 2.53 0.98 2.22 0.98 L 1.54 0.98 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(14.08 8.09)\"><path d=\"M 2.22 3.76 L 1.54 3.76 C 0.69 3.76 0 3.07 0 2.22 L 0 1.54 C 0 0.69 0.69 0 1.54 0 L 2.22 0 C 3.07 0 3.76 0.69 3.76 1.54 L 3.76 2.22 C 3.76 3.07 3.07 3.76 2.22 3.76 Z M 1.54 0.98 C 1.23 0.98 0.98 1.23 0.98 1.54 L 0.98 2.22 C 0.98 2.53 1.23 2.78 1.54 2.78 L 2.22 2.78 C 2.53 2.78 2.78 2.53 2.78 2.22 L 2.78 1.54 C 2.78 1.23 2.53 0.98 2.22 0.98 L 1.54 0.98 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(18.84 8.09)\"><path d=\"M 2.22 3.76 L 1.54 3.76 C 0.69 3.76 0 3.07 0 2.22 L 0 1.54 C 0 0.69 0.69 0 1.54 0 L 2.22 0 C 3.07 0 3.76 0.69 3.76 1.54 L 3.76 2.22 C 3.76 3.07 3.07 3.76 2.22 3.76 Z M 1.54 0.98 C 1.23 0.98 0.98 1.23 0.98 1.54 L 0.98 2.22 C 0.98 2.53 1.23 2.78 1.54 2.78 L 2.22 2.78 C 2.53 2.78 2.78 2.53 2.78 2.22 L 2.78 1.54 C 2.78 1.23 2.53 0.98 2.22 0.98 L 1.54 0.98 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(9.4 12.97)\"><path d=\"M 2.22 3.76 L 1.54 3.76 C 0.69 3.76 0 3.07 0 2.22 L 0 1.54 C 0 0.69 0.69 0 1.54 0 L 2.22 0 C 3.07 0 3.76 0.69 3.76 1.54 L 3.76 2.22 C 3.76 3.07 3.07 3.76 2.22 3.76 Z M 1.54 0.98 C 1.23 0.98 0.98 1.23 0.98 1.54 L 0.98 2.22 C 0.98 2.53 1.23 2.78 1.54 2.78 L 2.22 2.78 C 2.53 2.78 2.78 2.53 2.78 2.22 L 2.78 1.54 C 2.78 1.23 2.53 0.98 2.22 0.98 L 1.54 0.98 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(14.08 12.97)\"><path d=\"M 2.22 3.76 L 1.54 3.76 C 0.69 3.76 0 3.07 0 2.22 L 0 1.54 C 0 0.69 0.69 0 1.54 0 L 2.22 0 C 3.07 0 3.76 0.69 3.76 1.54 L 3.76 2.22 C 3.76 3.07 3.07 3.76 2.22 3.76 Z M 1.54 0.98 C 1.23 0.98 0.98 1.23 0.98 1.54 L 0.98 2.22 C 0.98 2.53 1.23 2.78 1.54 2.78 L 2.22 2.78 C 2.53 2.78 2.78 2.53 2.78 2.22 L 2.78 1.54 C 2.78 1.23 2.53 0.98 2.22 0.98 L 1.54 0.98 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(18.84 12.97)\"><path d=\"M 2.22 3.76 L 1.54 3.76 C 0.69 3.76 0 3.07 0 2.22 L 0 1.54 C 0 0.69 0.69 0 1.54 0 L 2.22 0 C 3.07 0 3.76 0.69 3.76 1.54 L 3.76 2.22 C 3.76 3.07 3.07 3.76 2.22 3.76 Z M 1.54 0.98 C 1.23 0.98 0.98 1.23 0.98 1.54 L 0.98 2.22 C 0.98 2.53 1.23 2.78 1.54 2.78 L 2.22 2.78 C 2.53 2.78 2.78 2.53 2.78 2.22 L 2.78 1.54 C 2.78 1.23 2.53 0.98 2.22 0.98 L 1.54 0.98 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(9.4 17.78)\"><path d=\"M 2.22 3.76 L 1.54 3.76 C 0.69 3.76 0 3.07 0 2.22 L 0 1.54 C 0 0.69 0.69 0 1.54 0 L 2.22 0 C 3.07 0 3.76 0.69 3.76 1.54 L 3.76 2.22 C 3.76 3.07 3.07 3.76 2.22 3.76 Z M 1.54 0.98 C 1.23 0.98 0.98 1.23 0.98 1.54 L 0.98 2.22 C 0.98 2.53 1.23 2.78 1.54 2.78 L 2.22 2.78 C 2.53 2.78 2.78 2.53 2.78 2.22 L 2.78 1.54 C 2.78 1.23 2.53 0.98 2.22 0.98 L 1.54 0.98 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(14.08 17.78)\"><path d=\"M 2.22 3.76 L 1.54 3.76 C 0.69 3.76 0 3.07 0 2.22 L 0 1.54 C 0 0.69 0.69 0 1.54 0 L 2.22 0 C 3.07 0 3.76 0.69 3.76 1.54 L 3.76 2.22 C 3.76 3.07 3.07 3.76 2.22 3.76 Z M 1.54 0.98 C 1.23 0.98 0.98 1.23 0.98 1.54 L 0.98 2.22 C 0.98 2.53 1.23 2.78 1.54 2.78 L 2.22 2.78 C 2.53 2.78 2.78 2.53 2.78 2.22 L 2.78 1.54 C 2.78 1.23 2.53 0.98 2.22 0.98 L 1.54 0.98 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(18.84 17.78)\"><path d=\"M 2.22 3.76 L 1.54 3.76 C 0.69 3.76 0 3.07 0 2.22 L 0 1.54 C 0 0.69 0.69 0 1.54 0 L 2.22 0 C 3.07 0 3.76 0.69 3.76 1.54 L 3.76 2.22 C 3.76 3.07 3.07 3.76 2.22 3.76 Z M 1.54 0.98 C 1.23 0.98 0.98 1.23 0.98 1.54 L 0.98 2.22 C 0.98 2.53 1.23 2.78 1.54 2.78 L 2.22 2.78 C 2.53 2.78 2.78 2.53 2.78 2.22 L 2.78 1.54 C 2.78 1.23 2.53 0.98 2.22 0.98 L 1.54 0.98 Z\" fill=\"currentColor\"></path></g>"
  },
  "notifications": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(7.68 26.28)\"><path d=\"M 5.24 5.24 C 2.36 5.24 0 2.88 0 0 L 1.04 0 C 1.04 2.32 2.92 4.2 5.24 4.2 C 7.56 4.2 9.44 2.32 9.44 0 L 10.48 0 C 10.48 2.88 8.12 5.24 5.24 5.24 Z\" fill=\"rgb(0,0,0)\"></path></g><g transform=\"translate(0.28 3.93)\"><path d=\"M 12.56 22.87 L 0.56 22.87 C 0.32 22.87 0.12 22.75 0.04 22.51 C -0.04 22.31 0 22.07 0.16 21.91 L 4.08 17.99 L 4.08 8.83 C 4.08 6.31 5.12 3.91 6.96 2.23 C 8.72 0.63 11 -0.17 13.36 0.03 C 17.76 0.39 21.2 4.15 21.2 8.55 L 21.2 17.99 L 25.04 21.83 C 25.2 21.99 25.24 22.23 25.16 22.43 C 25.08 22.63 24.88 22.79 24.64 22.79 L 12.6 22.87 L 12.56 22.87 Z M 1.68 21.83 L 12.56 21.83 L 23.48 21.75 L 20.16 18.43 L 20.16 18.19 L 20.16 8.55 C 20.16 4.67 17.16 1.39 13.28 1.07 C 11.2 0.91 9.2 1.59 7.64 2.99 C 6.04 4.47 5.12 6.59 5.12 8.83 L 5.12 18.39 L 4.96 18.59 L 1.72 21.83 L 1.68 21.83 Z\" fill=\"rgb(0,0,0)\"></path></g><g transform=\"translate(18.48 0.88)\"><path d=\"M 6.48 12.96 C 10.059 12.96 12.96 10.059 12.96 6.48 C 12.96 2.901 10.059 0 6.48 0 C 2.901 0 0 2.901 0 6.48 C 0 10.059 2.901 12.96 6.48 12.96 Z\" fill=\"rgb(237,39,38)\"></path></g><g transform=\"translate(23.44 5.08)\"><path d=\"M 3 0.56 L 1.08 0.56 L 0.88 1.84 C 1 1.84 1.12 1.84 1.28 1.84 C 1.68 1.84 2.04 1.92 2.36 2.12 C 2.76 2.36 3.08 2.76 3.08 3.4 C 3.08 4.36 2.32 5.12 1.24 5.12 C 0.16 5.12 0.24 4.96 0 4.8 L 0.16 4.28 C 0.36 4.4 0.76 4.56 1.24 4.56 C 1.72 4.56 2.44 4.16 2.44 3.48 C 2.44 2.84 2 2.36 1 2.36 C 0 2.36 0.48 2.36 0.32 2.4 L 0.64 0 L 3.04 0 L 3.04 0.56 L 3 0.56 Z\" fill=\"rgb(255,255,255)\"></path></g><g transform=\"translate(10.84 0.4)\"><path d=\"M 2.08 4.16 C 0.92 4.16 0 3.2 0 2.08 C 0 0.96 0.96 0 2.08 0 C 3.2 0 4.16 0.96 4.16 2.08 C 4.16 3.2 3.2 4.16 2.08 4.16 Z M 2.08 1 C 1.48 1 1.04 1.48 1.04 2.04 C 1.04 2.6 1.52 3.08 2.08 3.08 C 2.64 3.08 3.12 2.6 3.12 2.04 C 3.12 1.48 2.64 1 2.08 1 Z\" fill=\"rgb(0,0,0)\"></path></g>"
  },
  "phone-systems": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(17.76 14.336)\"><path d=\"M 0.984 1.968 C 1.527 1.968 1.968 1.527 1.968 0.984 C 1.968 0.441 1.527 0 0.984 0 C 0.441 0 0 0.441 0 0.984 C 0 1.527 0.441 1.968 0.984 1.968 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(20.384 14.336)\"><path d=\"M 0.984 0 C 0.44 0 0 0.44 0 0.984 C 0 1.528 0.44 1.968 0.984 1.968 C 1.528 1.968 1.968 1.528 1.968 0.984 C 1.968 0.44 1.528 0 0.984 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(17.76 17.04)\"><path d=\"M 0.984 1.968 C 1.527 1.968 1.968 1.527 1.968 0.984 C 1.968 0.441 1.527 0 0.984 0 C 0.441 0 0 0.441 0 0.984 C 0 1.527 0.441 1.968 0.984 1.968 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(20.384 17.04)\"><path d=\"M 0.984 0 C 0.44 0 0 0.44 0 0.984 C 0 1.528 0.44 1.968 0.984 1.968 C 1.528 1.968 1.968 1.528 1.968 0.984 C 1.968 0.44 1.528 0 0.984 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(17.76 19.744)\"><path d=\"M 0.984 1.968 C 1.527 1.968 1.968 1.527 1.968 0.984 C 1.968 0.441 1.527 0 0.984 0 C 0.441 0 0 0.441 0 0.984 C 0 1.527 0.441 1.968 0.984 1.968 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(20.384 19.744)\"><path d=\"M 0.984 0 C 0.44 0 0 0.44 0 0.984 C 0 1.528 0.44 1.968 0.984 1.968 C 1.528 1.968 1.968 1.528 1.968 0.984 C 1.968 0.44 1.528 0 0.984 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(0.876 2.008)\"><path d=\"M 26.788 14.76 C 26.82 14.76 26.848 14.748 26.876 14.744 C 27.076 15.548 27.8 16.152 28.668 16.152 C 29.688 16.152 30.52 15.32 30.52 14.3 C 30.52 13.28 29.688 12.448 28.668 12.448 C 27.828 12.448 27.124 13.016 26.896 13.784 C 26.86 13.776 26.824 13.764 26.788 13.764 L 23.772 13.764 L 23.772 10.76 L 25.356 10.76 C 26.952 10.76 28.252 9.46 28.252 7.864 L 28.252 3.628 C 29.028 3.408 29.604 2.7 29.604 1.852 C 29.604 0.832 28.772 0 27.752 0 C 26.732 0 25.9 0.832 25.9 1.852 C 25.9 2.7 26.476 3.408 27.252 3.628 L 27.252 7.864 C 27.252 8.908 26.4 9.76 25.356 9.76 L 23.772 9.76 L 23.772 7.3 C 23.772 5.956 22.68 4.864 21.336 4.864 L 14.712 4.864 C 14.312 4.192 13.58 3.744 12.74 3.744 L 11.388 3.744 C 10.552 3.744 9.82 4.196 9.416 4.864 L 9.184 4.864 C 7.84 4.864 6.748 5.956 6.748 7.3 L 6.748 9.776 L 5.164 9.776 C 4.12 9.776 3.268 8.924 3.268 7.88 L 3.268 3.644 C 4.044 3.424 4.62 2.716 4.62 1.868 C 4.62 0.848 3.788 0.016 2.768 0.016 C 1.748 0.016 0.916 0.848 0.916 1.868 C 0.916 2.716 1.492 3.424 2.268 3.644 L 2.268 7.88 C 2.268 9.476 3.568 10.776 5.164 10.776 L 6.748 10.776 L 6.748 13.748 L 3.732 13.748 C 3.696 13.748 3.668 13.76 3.632 13.768 C 3.42 12.98 2.704 12.396 1.852 12.396 C 0.832 12.396 0 13.228 0 14.248 C 0 15.268 0.832 16.1 1.852 16.1 C 2.708 16.1 3.42 15.516 3.632 14.728 C 3.664 14.736 3.696 14.748 3.732 14.748 L 6.748 14.748 L 6.748 17.752 L 5.164 17.752 C 3.568 17.752 2.268 19.052 2.268 20.648 L 2.268 24.884 C 1.492 25.104 0.916 25.812 0.916 26.66 C 0.916 27.68 1.748 28.512 2.768 28.512 C 3.788 28.512 4.62 27.68 4.62 26.66 C 4.62 25.812 4.044 25.104 3.268 24.884 L 3.268 20.648 C 3.268 19.604 4.12 18.752 5.164 18.752 L 6.748 18.752 L 6.748 21.192 C 6.748 22.536 7.84 23.628 9.184 23.628 L 21.336 23.628 C 22.68 23.628 23.772 22.536 23.772 21.192 L 23.772 18.732 L 25.356 18.732 C 26.4 18.732 27.252 19.584 27.252 20.628 L 27.252 24.864 C 26.476 25.084 25.9 25.792 25.9 26.64 C 25.9 27.66 26.732 28.492 27.752 28.492 C 28.772 28.492 29.604 27.66 29.604 26.64 C 29.604 25.792 29.028 25.084 28.252 24.864 L 28.252 20.628 C 28.252 19.032 26.952 17.732 25.356 17.732 L 23.772 17.732 L 23.772 14.76 L 26.788 14.76 Z M 28.668 13.444 C 29.136 13.444 29.52 13.828 29.52 14.296 C 29.52 14.764 29.136 15.148 28.668 15.148 C 28.2 15.148 27.816 14.764 27.816 14.296 C 27.816 13.828 28.2 13.444 28.668 13.444 Z M 26.9 1.848 C 26.9 1.38 27.284 0.996 27.752 0.996 C 28.22 0.996 28.604 1.38 28.604 1.848 C 28.604 2.316 28.22 2.7 27.752 2.7 C 27.284 2.7 26.9 2.316 26.9 1.848 Z M 1.916 1.864 C 1.916 1.396 2.3 1.012 2.768 1.012 C 3.236 1.012 3.62 1.396 3.62 1.864 C 3.62 2.332 3.236 2.716 2.768 2.716 C 2.3 2.716 1.916 2.332 1.916 1.864 Z M 1.852 15.092 C 1.384 15.092 1 14.708 1 14.24 C 1 13.772 1.384 13.388 1.852 13.388 C 2.32 13.388 2.704 13.772 2.704 14.24 C 2.704 14.708 2.32 15.092 1.852 15.092 Z M 3.62 26.652 C 3.62 27.124 3.236 27.504 2.768 27.504 C 2.3 27.504 1.916 27.12 1.916 26.652 C 1.916 26.184 2.3 25.8 2.768 25.8 C 3.236 25.8 3.62 26.184 3.62 26.652 Z M 28.604 26.636 C 28.604 27.108 28.22 27.488 27.752 27.488 C 27.284 27.488 26.9 27.104 26.9 26.636 C 26.9 26.168 27.284 25.784 27.752 25.784 C 28.22 25.784 28.604 26.168 28.604 26.636 Z M 11.388 4.74 L 12.74 4.74 C 13.456 4.74 14.04 5.324 14.04 6.04 L 14.04 17.912 C 14.04 18.628 13.456 19.212 12.74 19.212 L 11.388 19.212 C 10.672 19.212 10.088 18.628 10.088 17.912 L 10.088 6.04 C 10.088 5.324 10.672 4.74 11.388 4.74 Z M 21.336 22.624 L 9.184 22.624 C 8.392 22.624 7.748 21.98 7.748 21.188 L 7.748 7.296 C 7.748 6.532 8.348 5.916 9.096 5.868 C 9.092 5.924 9.088 5.98 9.088 6.036 L 9.088 17.908 C 9.088 19.176 10.12 20.208 11.388 20.208 L 12.74 20.208 C 14.008 20.208 15.04 19.176 15.04 17.908 L 15.04 6.036 C 15.04 5.976 15.036 5.916 15.032 5.86 L 21.336 5.86 C 22.128 5.86 22.772 6.504 22.772 7.296 L 22.772 10.252 L 22.772 14.252 L 22.772 18.22 L 22.772 21.176 C 22.772 21.968 22.128 22.612 21.336 22.612 L 21.336 22.624 Z\" fill=\"currentColor\"></path></g>"
  },
  "plus": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(7.77 7.65)\"><path d=\"M 8.23 0 C 7.94 0 7.7 0.24 7.7 0.53 L 7.7 7.7 L 0.53 7.7 C 0.24 7.7 0 7.94 0 8.23 C 0 8.52 0.24 8.76 0.53 8.76 L 7.7 8.76 L 7.7 15.93 C 7.7 16.22 7.94 16.46 8.23 16.46 C 8.52 16.46 8.76 16.22 8.76 15.93 L 8.76 8.76 L 15.93 8.76 C 16.22 8.76 16.46 8.52 16.46 8.23 C 16.46 7.94 16.22 7.7 15.93 7.7 L 8.76 7.7 L 8.76 0.53 C 8.76 0.24 8.52 0 8.23 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(0.227 0.093)\"><path d=\"M 24.563 2.667 C 17.343 -2.173 7.513 -0.243 2.673 6.987 C -0.477 11.667 -0.867 17.717 1.633 22.787 C 1.763 23.047 2.073 23.157 2.343 23.027 C 2.603 22.897 2.713 22.587 2.583 22.327 C 0.243 17.597 0.613 11.937 3.543 7.567 C 8.063 0.827 17.233 -0.983 23.973 3.547 C 30.713 8.067 32.523 17.237 27.993 23.977 C 25.803 27.247 22.473 29.457 18.613 30.217 C 14.753 30.977 10.833 30.187 7.563 27.997 C 7.323 27.837 6.993 27.897 6.833 28.137 C 6.673 28.377 6.733 28.707 6.973 28.867 C 9.603 30.627 12.633 31.547 15.733 31.547 C 16.753 31.547 17.793 31.447 18.813 31.247 C 22.953 30.437 26.523 28.057 28.863 24.557 C 33.713 17.337 31.773 7.507 24.553 2.667 L 24.563 2.667 Z\" fill=\"currentColor\"></path></g>"
  },
  "search": {
    vb: "0 0 32.002 32",
    p: "<g transform=\"translate(0 0)\"><path d=\"M 11.959 23.919 C 8.765 23.919 5.759 22.678 3.5 20.419 C 1.24 18.16 0 15.154 0 11.959 C 0 8.765 1.24 5.759 3.5 3.5 C 8.166 -1.167 15.753 -1.167 20.419 3.5 C 22.678 5.759 23.919 8.765 23.919 11.959 C 23.919 15.154 22.678 18.16 20.419 20.419 C 18.16 22.678 15.154 23.919 11.959 23.919 Z M 11.959 1.051 C 9.164 1.051 6.368 2.112 4.246 4.246 C 2.123 6.379 1.051 9.048 1.051 11.959 C 1.051 14.87 2.186 17.613 4.246 19.673 C 6.305 21.733 9.048 22.868 11.959 22.868 C 14.87 22.868 17.613 21.733 19.673 19.673 C 21.733 17.613 22.868 14.87 22.868 11.959 C 22.868 9.048 21.733 6.305 19.673 4.246 C 17.613 2.186 14.755 1.051 11.959 1.051 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(1.839 1.847)\"><path d=\"M 10.121 20.233 C 8.124 20.233 6.117 19.644 4.372 18.435 C 4.13 18.267 4.078 17.942 4.235 17.7 C 4.404 17.458 4.729 17.406 4.971 17.563 C 8.565 20.054 13.431 19.612 16.531 16.512 C 20.062 12.981 20.062 7.233 16.531 3.702 C 13 0.171 7.252 0.171 3.721 3.702 C 0.894 6.529 0.253 10.795 2.113 14.326 C 2.249 14.579 2.155 14.904 1.892 15.041 C 1.629 15.178 1.314 15.083 1.177 14.82 C -0.903 10.879 -0.178 6.108 2.974 2.956 C 6.915 -0.985 13.326 -0.985 17.267 2.956 C 21.208 6.897 21.208 13.307 17.267 17.248 C 15.312 19.203 12.716 20.211 10.11 20.211 L 10.121 20.233 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(19.892 19.892)\"><path d=\"M 8.766 12.108 C 8.346 12.108 7.957 11.95 7.673 11.667 L 0.443 4.436 C -0.03 3.963 -0.135 3.217 0.18 2.576 L 0.968 0.968 L 2.576 0.18 C 3.217 -0.135 3.963 -0.03 4.436 0.443 L 11.667 7.673 C 11.971 7.978 12.129 8.409 12.108 8.861 C 12.087 9.292 11.898 9.712 11.583 10.027 L 10.038 11.572 C 9.722 11.887 9.302 12.076 8.871 12.097 C 8.84 12.097 8.808 12.097 8.777 12.097 L 8.766 12.108 Z M 1.746 1.746 L 1.116 3.028 C 1 3.259 1.031 3.522 1.179 3.68 L 8.409 10.91 C 8.503 11.005 8.64 11.047 8.798 11.047 C 8.976 11.047 9.144 10.962 9.281 10.826 L 10.826 9.281 C 10.962 9.144 11.036 8.976 11.047 8.808 C 11.047 8.65 11.005 8.514 10.91 8.419 L 3.68 1.189 C 3.522 1.031 3.259 1.01 3.028 1.126 L 1.746 1.757 L 1.746 1.746 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(0 0)\"><path d=\"M 1.051 0 L 0 0 L 0 1.702 L 1.051 1.702 L 1.051 0 Z\" fill=\"currentColor\"></path></g>"
  },
  "single-chevron-down": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(9.363 12.271)\"><path d=\"M 6.637 7.461 C 6.133 7.461 5.653 7.241 5.321 6.861 L 0.121 0.825 C -0.059 0.617 -0.035 0.301 0.173 0.121 C 0.381 -0.059 0.697 -0.035 0.877 0.173 L 6.077 6.209 C 6.357 6.533 6.913 6.533 7.189 6.209 L 12.389 0.173 C 12.569 -0.035 12.885 -0.059 13.093 0.121 C 13.301 0.301 13.325 0.617 13.145 0.825 L 7.945 6.861 C 7.617 7.245 7.137 7.465 6.629 7.465 L 6.637 7.461 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(9.363 12.271)\"><path d=\"M 6.637 7.461 C 6.133 7.461 5.653 7.241 5.321 6.861 L 0.121 0.825 C -0.059 0.617 -0.035 0.301 0.173 0.121 C 0.381 -0.059 0.697 -0.035 0.877 0.173 L 6.077 6.209 C 6.357 6.533 6.913 6.533 7.189 6.209 L 12.389 0.173 C 12.569 -0.035 12.885 -0.059 13.093 0.121 C 13.301 0.301 13.325 0.617 13.145 0.825 L 7.945 6.861 C 7.617 7.245 7.137 7.465 6.629 7.465 L 6.637 7.461 Z\" fill=\"currentColor\"></path></g>"
  },
  "telematics": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(0.74 0.48)\"><path d=\"M 30.02 15.95 C 30.3 15.95 30.52 15.73 30.52 15.45 L 30.52 14.45 C 30.52 12.02 28.54 10.05 26.12 10.05 L 18.68 10.05 L 18.68 5.67 C 21.39 4.91 22.55 3.31 23.03 2.06 C 23.23 1.54 23.17 0.89 22.87 0.46 C 22.67 0.17 22.37 0 22.06 0 L 8.44 0 C 8.12 0 7.83 0.17 7.63 0.46 C 7.33 0.89 7.27 1.53 7.47 2.06 C 7.95 3.32 9.11 4.93 11.83 5.68 L 11.83 10.05 L 4.4 10.05 C 1.97 10.05 0 12.03 0 14.45 L 0 23.75 C 0 26.18 1.98 28.15 4.4 28.15 L 8.49 28.15 L 9.2 29.69 C 9.6 30.56 10.48 31.12 11.44 31.12 L 19.08 31.12 C 20.04 31.12 20.92 30.56 21.32 29.69 L 22.03 28.15 L 26.12 28.15 C 28.55 28.15 30.52 26.17 30.52 23.75 L 30.52 17.75 C 30.52 17.47 30.3 17.25 30.02 17.25 C 29.74 17.25 29.52 17.47 29.52 17.75 L 29.52 23.75 C 29.52 25.63 27.99 27.15 26.12 27.15 L 19.34 27.15 C 22.2 25.67 24.15 22.69 24.15 19.25 C 24.15 15.57 21.9 12.4 18.71 11.05 L 26.11 11.05 C 27.99 11.05 29.51 12.58 29.51 14.45 L 29.51 15.45 C 29.51 15.73 29.73 15.95 30.01 15.95 L 30.02 15.95 Z M 8.41 1.7 C 8.3 1.4 8.41 1.08 8.48 1 L 22.04 1 C 22.12 1.08 22.22 1.41 22.11 1.7 C 21.73 2.69 20.81 3.95 18.69 4.63 L 18.69 4.56 C 18.69 3.96 18.2 3.46 17.59 3.46 L 12.93 3.46 C 12.33 3.46 11.83 3.95 11.83 4.56 L 11.83 4.65 C 9.7 3.98 8.79 2.71 8.41 1.71 L 8.41 1.7 Z M 12.83 4.55 C 12.83 4.5 12.87 4.45 12.93 4.45 L 17.59 4.45 C 17.64 4.45 17.69 4.49 17.69 4.55 L 17.69 10.04 L 12.84 10.04 L 12.84 4.55 L 12.83 4.55 Z M 20.93 28.15 L 20.41 29.26 C 20.17 29.78 19.65 30.11 19.08 30.11 L 11.44 30.11 C 10.87 30.11 10.35 29.78 10.11 29.26 L 9.59 28.15 L 15.25 28.15 C 15.25 28.15 15.25 28.15 15.26 28.15 C 15.27 28.15 15.26 28.15 15.27 28.15 L 20.93 28.15 Z M 23.16 19.25 C 23.16 23.6 19.62 27.14 15.27 27.15 L 15.25 27.15 C 10.9 27.15 7.36 23.6 7.36 19.25 C 7.36 14.9 10.9 11.35 15.26 11.35 C 19.62 11.35 23.16 14.89 23.16 19.25 Z M 6.36 19.25 C 6.36 22.68 8.32 25.66 11.17 27.15 L 4.4 27.15 C 2.52 27.15 1 25.62 1 23.75 L 1 14.45 C 1 12.57 2.53 11.05 4.4 11.05 L 11.8 11.05 C 8.6 12.4 6.36 15.57 6.36 19.25 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(9.37 13.1)\"><path d=\"M 0 6.63 C 0 10.28 2.97 13.26 6.63 13.26 C 10.29 13.26 13.26 10.29 13.26 6.63 C 13.26 2.97 10.29 0 6.63 0 C 2.97 0 0 2.97 0 6.63 Z M 12.25 6.63 C 12.25 9.73 9.73 12.26 6.62 12.26 C 3.51 12.26 0.99 9.74 0.99 6.63 C 0.99 3.52 3.51 1 6.62 1 C 9.73 1 12.25 3.52 12.25 6.63 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(11.588 15.569)\"><path d=\"M 2.412 0.041 C 1.272 0.591 0.402 1.601 0.022 2.811 C -0.058 3.071 0.092 3.351 0.352 3.441 C 0.402 3.461 0.452 3.461 0.502 3.461 C 0.712 3.461 0.912 3.321 0.982 3.111 C 1.272 2.161 1.952 1.381 2.842 0.951 C 3.092 0.831 3.192 0.531 3.072 0.281 C 2.952 0.031 2.652 -0.069 2.402 0.051 L 2.412 0.041 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(3.81 13.83)\"><path d=\"M 0 0.5 C 0 0.78 0.22 1 0.5 1 L 2.62 1 C 2.9 1 3.12 0.78 3.12 0.5 C 3.12 0.22 2.9 0 2.62 0 L 0.5 0 C 0.22 0 0 0.22 0 0.5 Z\" fill=\"currentColor\"></path></g>"
  },
  "tick-solid": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(6.336 9.422)\"><path d=\"M 17.041 0.375 C 17.541 -0.125 18.351 -0.125 18.851 0.375 C 19.351 0.875 19.351 1.685 18.851 2.185 L 7.28 13.756 L 0.375 6.851 C -0.125 6.351 -0.125 5.541 0.375 5.041 C 0.875 4.541 1.685 4.541 2.185 5.041 L 7.28 10.136 L 17.041 0.375 Z\" fill=\"currentColor\"></path></g>"
  },
  "tick": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(0.467 0.423)\"><path d=\"M 15.533 31.077 C 12.433 31.077 9.533 30.177 6.933 28.477 C 6.733 28.277 6.633 27.977 6.833 27.777 C 7.033 27.577 7.333 27.477 7.533 27.677 C 10.733 29.877 14.633 30.577 18.433 29.877 C 22.233 29.177 25.533 26.977 27.733 23.677 C 32.233 16.977 30.433 7.977 23.733 3.477 C 17.033 -1.023 8.033 0.777 3.533 7.477 C 0.533 11.777 0.233 17.377 2.533 21.977 C 2.633 22.277 2.533 22.577 2.333 22.677 C 2.133 22.777 1.733 22.677 1.633 22.477 C -0.867 17.477 -0.467 11.477 2.633 6.877 C 7.433 -0.223 17.133 -2.123 24.233 2.577 C 31.333 7.377 33.233 17.077 28.533 24.177 C 26.233 27.677 22.733 29.977 18.633 30.777 C 17.533 30.977 16.533 31.077 15.533 31.077 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(7.95 10.65)\"><path d=\"M 5.75 10.75 C 5.65 10.75 5.45 10.75 5.35 10.65 L 0.15 5.35 C -0.05 5.15 -0.05 4.85 0.15 4.65 C 0.35 4.45 0.65 4.45 0.85 4.65 L 5.75 9.55 L 15.15 0.15 C 15.35 -0.05 15.65 -0.05 15.85 0.15 C 16.05 0.35 16.05 0.65 15.85 0.85 L 6.05 10.65 C 6.05 10.65 5.95 10.75 5.75 10.75 Z\" fill=\"currentColor\"></path></g>"
  },
  "twitter": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(16.875 4.119)\"><path d=\"M 0.581 10.649 C 0.445 10.649 0.309 10.601 0.197 10.505 C -0.043 10.293 -0.067 9.929 0.145 9.685 L 8.473 0.197 C 8.685 -0.043 9.049 -0.067 9.293 0.145 C 9.533 0.357 9.557 0.721 9.345 0.965 L 1.017 10.453 C 0.901 10.585 0.741 10.649 0.581 10.649 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(5.363 17.059)\"><path d=\"M 0.581 10.821 C 0.445 10.821 0.309 10.773 0.197 10.677 C -0.043 10.465 -0.067 10.101 0.145 9.857 L 8.625 0.197 C 8.837 -0.043 9.201 -0.067 9.445 0.145 C 9.685 0.357 9.709 0.721 9.497 0.965 L 1.017 10.625 C 0.901 10.757 0.741 10.821 0.581 10.821 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(4.97 4.12)\"><path d=\"M 21.478 23.76 L 16.074 23.76 C 15.882 23.76 15.702 23.664 15.594 23.508 L 0.102 0.908 C -0.018 0.732 -0.034 0.5 0.066 0.308 C 0.166 0.116 0.362 0 0.578 0 L 5.982 0 C 6.174 0 6.354 0.096 6.462 0.252 L 21.958 22.852 C 22.078 23.028 22.094 23.26 21.994 23.452 C 21.894 23.644 21.698 23.76 21.482 23.76 L 21.478 23.76 Z M 16.382 22.6 L 20.378 22.6 L 5.678 1.16 L 1.682 1.16 L 16.382 22.6 Z\" fill=\"currentColor\"></path></g>"
  },
  "vehicle-leasing": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(4.188 20.183)\"><path d=\"M 1.964 0.009 C 1.7 -0.015 1.436 0.009 1.176 0.073 C 0.484 0.253 0 0.873 0 1.589 C 0 2.065 0.224 2.529 0.6 2.825 C 1.788 3.769 2.904 4.005 3.632 4.037 C 3.652 4.037 3.672 4.037 3.692 4.037 C 4.036 4.037 4.364 3.905 4.612 3.665 C 4.876 3.413 5.028 3.061 5.028 2.697 L 5.028 1.605 C 5.028 0.853 4.46 0.233 3.712 0.165 L 1.956 0.005 L 1.964 0.009 Z M 4.036 1.609 L 4.036 2.701 C 4.036 2.797 4 2.885 3.932 2.949 C 3.864 3.013 3.776 3.049 3.684 3.041 C 3.104 3.013 2.204 2.821 1.228 2.045 C 1.088 1.933 1.004 1.765 1.004 1.589 C 1.004 1.329 1.18 1.105 1.428 1.041 C 1.536 1.013 1.644 1.001 1.756 1.001 C 1.796 1.001 1.836 1.001 1.872 1.005 L 3.628 1.165 C 3.86 1.185 4.036 1.377 4.036 1.609 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(0.171 9.902)\"><path d=\"M 28.713 15.746 C 28.469 15.746 28.265 15.918 28.221 16.15 C 28.221 16.15 28.221 16.15 28.221 16.154 C 28.097 16.662 27.809 17.118 27.409 17.438 C 26.993 17.766 26.497 17.938 25.957 17.938 L 22.897 18.026 C 18.153 18.166 13.365 18.166 8.665 18.022 L 5.753 17.938 C 4.673 17.938 3.745 17.202 3.497 16.154 C 3.209 14.902 3.061 13.758 3.061 12.758 C 3.061 11.382 3.337 10.678 3.457 10.442 C 3.761 9.83 5.005 7.522 5.013 7.51 L 6.881 4.246 C 7.877 2.506 9.665 1.382 11.669 1.242 L 14.069 1.062 C 15.141 0.982 16.157 0.982 17.369 1.062 C 17.657 1.086 17.885 0.874 17.901 0.598 C 17.921 0.322 17.713 0.082 17.437 0.066 C 16.177 -0.022 15.117 -0.022 13.993 0.066 L 11.597 0.246 C 9.265 0.41 7.177 1.722 6.013 3.754 L 4.797 5.882 L 4.569 5.882 C 4.457 5.882 4.369 5.79 4.369 5.682 C 4.369 4.97 3.809 4.386 3.097 4.354 C 2.213 4.31 1.013 4.43 0.301 5.254 C -0.031 5.634 -0.095 6.17 0.141 6.586 C 0.461 7.146 1.217 7.546 2.389 7.77 C 2.421 7.778 2.453 7.778 2.485 7.778 C 2.721 7.778 2.929 7.61 2.977 7.37 C 3.029 7.098 2.849 6.838 2.581 6.786 C 1.365 6.554 1.073 6.194 1.013 6.09 C 0.989 6.046 1.009 5.97 1.061 5.91 C 1.537 5.362 2.513 5.326 3.053 5.354 C 3.233 5.362 3.373 5.51 3.373 5.686 C 3.373 6.238 3.749 6.698 4.257 6.842 L 4.145 7.038 C 4.093 7.134 2.881 9.382 2.569 10.006 C 2.381 10.382 2.069 11.238 2.069 12.77 C 2.069 13.846 2.225 15.062 2.529 16.394 C 2.669 16.99 2.965 17.51 3.361 17.93 L 3.361 20.202 C 3.361 21.206 4.181 22.022 5.185 22.022 L 6.609 22.022 C 7.617 22.022 8.433 21.206 8.433 20.202 L 8.433 19.03 L 8.641 19.038 C 11.025 19.11 13.429 19.146 15.841 19.146 C 18.253 19.146 20.573 19.11 22.929 19.042 L 23.473 19.026 L 23.473 20.202 C 23.473 21.206 24.289 22.022 25.293 22.022 L 26.721 22.022 C 27.725 22.022 28.541 21.206 28.541 20.202 L 28.541 17.802 C 28.541 17.778 28.529 17.758 28.529 17.734 C 28.845 17.346 29.085 16.89 29.201 16.394 C 29.201 16.39 29.201 16.382 29.201 16.378 C 29.209 16.338 29.217 16.298 29.217 16.258 C 29.217 15.982 28.993 15.758 28.717 15.758 L 28.713 15.746 Z M 7.429 20.186 C 7.429 20.638 7.061 21.006 6.605 21.006 L 5.181 21.006 C 4.725 21.006 4.357 20.638 4.357 20.186 L 4.357 18.63 C 4.781 18.826 5.249 18.934 5.741 18.934 L 7.429 18.982 L 7.429 20.182 L 7.429 20.186 Z M 26.717 21.006 L 25.289 21.006 C 24.837 21.006 24.469 20.638 24.469 20.186 L 24.469 18.982 L 25.969 18.938 C 26.525 18.938 27.057 18.802 27.537 18.542 L 27.537 20.186 C 27.537 20.638 27.169 21.006 26.717 21.006 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(25.226 13.91)\"><path d=\"M 3.51 0.338 C 2.798 0.374 2.238 0.958 2.238 1.666 C 2.238 1.778 2.146 1.866 2.038 1.866 L 1.854 1.866 L 0.934 0.25 C 0.798 0.01 0.49 -0.07 0.25 0.066 C 0.01 0.202 -0.07 0.51 0.066 0.75 L 1.638 3.486 L 1.93 4.03 C 2.326 4.766 2.986 6.002 3.202 6.43 C 3.322 6.67 3.706 7.61 3.566 9.558 C 3.546 9.834 3.754 10.074 4.03 10.094 C 4.042 10.094 4.054 10.094 4.066 10.094 C 4.326 10.094 4.546 9.894 4.566 9.63 C 4.718 7.486 4.29 6.366 4.098 5.982 C 3.878 5.542 3.214 4.298 2.814 3.558 L 2.39 2.81 C 2.882 2.658 3.242 2.206 3.242 1.666 C 3.242 1.49 3.382 1.342 3.562 1.334 C 4.102 1.31 5.078 1.346 5.554 1.894 C 5.606 1.954 5.626 2.03 5.598 2.074 C 5.538 2.178 5.25 2.538 4.03 2.77 C 3.758 2.822 3.582 3.082 3.634 3.354 C 3.678 3.594 3.89 3.762 4.126 3.762 C 4.158 3.762 4.19 3.762 4.222 3.754 C 5.394 3.53 6.15 3.134 6.47 2.57 C 6.706 2.154 6.642 1.622 6.31 1.242 C 5.594 0.418 4.398 0.298 3.514 0.342 L 3.51 0.338 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(10.456 20.763)\"><path d=\"M 11.192 1.597 C 11.192 1.161 11.02 0.753 10.704 0.449 C 10.388 0.145 9.972 -0.015 9.54 0.001 L 5.664 0.137 L 1.652 0.001 C 1.212 -0.015 0.804 0.145 0.488 0.449 C 0.172 0.753 0 1.161 0 1.597 C 0 2.449 0.668 3.149 1.516 3.189 L 5.528 3.385 L 9.676 3.189 C 10.524 3.149 11.192 2.449 11.192 1.597 Z M 9.628 2.189 L 5.668 2.385 L 5.556 2.385 L 1.572 2.189 C 1.256 2.173 1.008 1.913 1.008 1.597 C 1.008 1.433 1.072 1.281 1.188 1.169 C 1.3 1.061 1.444 1.001 1.6 1.001 C 1.608 1.001 1.616 1.001 1.62 1.001 L 5.512 1.141 C 5.512 1.141 5.524 1.141 5.528 1.141 L 9.576 1.001 C 9.732 1.001 9.892 1.053 10.008 1.169 C 10.124 1.281 10.188 1.433 10.188 1.597 C 10.188 1.913 9.94 2.177 9.624 2.189 L 9.628 2.189 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(22.836 20.186)\"><path d=\"M 0 1.606 L 0 2.698 C 0 3.062 0.152 3.418 0.416 3.666 C 0.668 3.906 0.992 4.038 1.336 4.038 C 1.356 4.038 1.376 4.038 1.4 4.038 C 2.128 4.006 3.244 3.77 4.432 2.826 C 4.808 2.526 5.036 2.066 5.036 1.59 C 5.036 0.874 4.552 0.254 3.86 0.074 C 3.6 0.006 3.336 -0.014 3.072 0.01 L 1.316 0.17 C 0.564 0.238 0 0.858 0 1.61 L 0 1.606 Z M 3.16 1.002 C 3.2 1.002 3.24 0.998 3.28 0.998 C 3.392 0.998 3.5 1.014 3.608 1.038 C 3.856 1.102 4.032 1.326 4.032 1.586 C 4.032 1.758 3.948 1.93 3.808 2.042 C 2.832 2.818 1.932 3.014 1.352 3.038 C 1.252 3.046 1.172 3.01 1.104 2.946 C 1.036 2.882 1 2.794 1 2.698 L 1 1.606 C 1 1.374 1.176 1.182 1.408 1.162 L 3.164 1.002 L 3.16 1.002 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(11.268 26.036)\"><path d=\"M 0.5 0 C 0.224 0 0 0.224 0 0.5 C 0 0.776 0.224 1 0.5 1 L 9.072 1 C 9.348 1 9.572 0.776 9.572 0.5 C 9.572 0.224 9.348 0 9.072 0 L 0.5 0 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(6.902 11.856)\"><path d=\"M 17.002 3.004 C 16.858 2.768 16.55 2.696 16.314 2.84 C 16.078 2.984 16.006 3.292 16.15 3.528 L 17.166 5.18 C 17.222 5.284 17.194 5.376 17.17 5.42 C 17.15 5.464 17.094 5.544 16.978 5.564 C 15.762 5.768 13.418 6.016 9.146 6.036 L 9.05 6.036 C 4.774 6.012 2.43 5.768 1.214 5.564 C 1.098 5.544 1.042 5.468 1.022 5.42 C 1.002 5.376 0.97 5.284 1.026 5.18 L 2.342 2.728 C 2.342 2.728 2.362 2.688 2.366 2.676 C 2.374 2.66 3.074 1.14 7.238 1 C 7.514 0.992 7.73 0.76 7.722 0.484 C 7.714 0.208 7.478 -0.012 7.206 0 C 2.582 0.156 1.602 1.924 1.45 2.28 L 0.15 4.708 C -0.042 5.068 -0.05 5.496 0.13 5.86 C 0.31 6.224 0.654 6.48 1.054 6.548 C 2.306 6.76 4.706 7.012 9.05 7.036 L 9.15 7.036 C 13.49 7.012 15.894 6.76 17.146 6.548 C 17.546 6.48 17.89 6.224 18.07 5.86 C 18.25 5.496 18.242 5.064 18.034 4.68 L 17.002 3.004 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(15.603 0.295)\"><path d=\"M 1.129 12.913 C 1.081 12.877 0.933 12.765 1.041 12.425 C 1.129 12.161 0.985 11.881 0.721 11.793 C 0.461 11.705 0.177 11.849 0.089 12.113 C -0.119 12.753 0.041 13.349 0.525 13.713 C 0.809 13.929 1.169 14.033 1.553 14.033 C 2.045 14.033 2.577 13.861 3.069 13.529 C 3.257 13.401 3.569 13.145 3.933 12.829 C 4.113 12.933 4.313 13.009 4.529 13.041 L 8.473 13.601 C 8.549 13.613 8.625 13.617 8.697 13.617 C 9.129 13.617 9.549 13.445 9.853 13.137 L 15.865 7.125 C 16.173 6.817 16.345 6.405 16.345 5.969 C 16.345 5.533 16.177 5.121 15.865 4.813 L 11.529 0.477 C 10.893 -0.159 9.857 -0.159 9.221 0.477 L 3.193 6.505 C 2.841 6.857 2.669 7.341 2.725 7.837 L 3.133 11.597 C 3.153 11.769 3.197 11.929 3.265 12.081 C 2.933 12.369 2.661 12.593 2.501 12.701 C 1.937 13.085 1.369 13.097 1.121 12.913 L 1.129 12.913 Z M 3.725 7.733 C 3.705 7.541 3.769 7.353 3.909 7.217 L 9.937 1.189 C 10.061 1.065 10.221 1.005 10.385 1.005 C 10.549 1.005 10.709 1.065 10.833 1.189 L 15.169 5.525 C 15.289 5.645 15.353 5.805 15.353 5.973 C 15.353 6.141 15.285 6.301 15.169 6.421 L 9.157 12.433 C 9.017 12.573 8.813 12.637 8.621 12.613 L 4.801 12.073 C 5.241 11.677 5.693 11.257 6.105 10.877 C 6.417 11.073 6.773 11.181 7.149 11.181 C 7.677 11.181 8.169 10.977 8.541 10.605 C 9.309 9.837 9.309 8.589 8.541 7.817 C 7.773 7.045 6.525 7.049 5.757 7.817 C 5.129 8.445 5.021 9.397 5.425 10.141 C 5.001 10.537 4.545 10.953 4.121 11.337 L 3.729 7.733 L 3.725 7.733 Z M 6.461 8.521 C 6.649 8.333 6.897 8.237 7.145 8.237 C 7.393 8.237 7.641 8.333 7.829 8.521 C 8.209 8.901 8.209 9.513 7.829 9.893 C 7.585 10.137 7.217 10.217 6.889 10.133 C 7.221 9.821 7.449 9.605 7.485 9.569 C 7.685 9.377 7.693 9.061 7.505 8.861 C 7.313 8.661 6.997 8.653 6.797 8.841 C 6.637 8.993 6.429 9.189 6.197 9.409 C 6.129 9.097 6.217 8.761 6.457 8.517 L 6.461 8.521 Z\" fill=\"currentColor\"></path></g>"
  },
  "vehicle-tracking": {
    vb: "0 0 32 32",
    p: "<g transform=\"translate(0 7.27)\"><path d=\"M 29.82 0 L 28.99 0 C 28.71 0 28.48 0.23 28.48 0.51 C 28.48 0.79 28.71 1.02 28.99 1.02 L 29.82 1.02 C 30.46 1.02 30.98 1.54 30.98 2.18 L 30.98 16.12 L 16.9 16.12 C 16.62 16.12 16.39 16.35 16.39 16.63 C 16.39 16.91 16.62 17.14 16.9 17.14 L 30.98 17.14 L 30.98 20.02 C 30.98 20.43 30.64 20.77 30.23 20.77 L 29.24 20.77 C 29 19.39 27.8 18.34 26.35 18.34 C 24.9 18.34 23.7 19.39 23.46 20.77 L 11.23 20.77 L 11.23 17.14 L 14.45 17.14 C 14.73 17.14 14.96 16.91 14.96 16.63 C 14.96 16.35 14.73 16.12 14.45 16.12 L 11.23 16.12 L 11.23 2.18 C 11.23 1.54 11.75 1.02 12.39 1.02 L 13.39 1.02 C 13.67 1.02 13.9 0.79 13.9 0.51 C 13.9 0.23 13.67 0 13.39 0 L 12.39 0 C 11.19 0 10.21 0.98 10.21 2.18 L 10.21 7.46 L 7.68 7.46 C 5.16 7.46 2.82 8.93 1.72 11.2 L 0.66 13.39 C 0.5 13.72 0.38 14.06 0.28 14.41 C 0.27 14.44 0.26 14.47 0.25 14.51 C 0.09 15.08 0 15.67 0 16.27 L 0 19.56 C 0 20.79 1 21.79 2.23 21.79 L 3.02 21.79 C 3.26 23.17 4.46 24.23 5.91 24.23 C 7.36 24.23 8.56 23.18 8.8 21.79 L 23.45 21.79 C 23.69 23.17 24.89 24.23 26.34 24.23 C 27.79 24.23 28.99 23.18 29.23 21.79 L 30.22 21.79 C 31.2 21.79 31.99 21 31.99 20.02 L 31.99 2.18 C 31.99 0.98 31.01 0 29.81 0 L 29.82 0 Z M 2.64 11.64 C 2.77 11.37 2.93 11.11 3.11 10.86 L 6.86 10.86 C 7.16 10.86 7.4 11.1 7.4 11.4 L 7.4 12.69 C 7.4 13.47 6.77 14.1 5.99 14.1 L 1.46 14.1 C 1.5 14 1.53 13.91 1.58 13.81 L 2.64 11.62 L 2.64 11.64 Z M 1.03 19.55 L 1.03 16.26 C 1.03 15.88 1.07 15.5 1.15 15.13 L 5.99 15.13 C 7.33 15.13 8.42 14.04 8.42 12.7 L 8.42 11.41 C 8.42 10.55 7.72 9.85 6.86 9.85 L 4.04 9.85 C 5.04 8.99 6.33 8.49 7.69 8.49 L 10.22 8.49 L 10.22 16.63 L 10.22 20.77 L 8.82 20.77 C 8.58 19.39 7.38 18.34 5.93 18.34 C 4.48 18.34 3.28 19.39 3.04 20.77 L 2.25 20.77 C 1.58 20.77 1.04 20.23 1.04 19.56 L 1.03 19.55 Z M 5.92 23.2 C 4.86 23.2 4 22.34 4 21.28 C 4 20.22 4.86 19.36 5.92 19.36 C 6.98 19.36 7.84 20.22 7.84 21.28 C 7.84 22.34 6.98 23.2 5.92 23.2 Z M 26.36 23.2 C 25.3 23.2 24.44 22.34 24.44 21.28 C 24.44 20.22 25.3 19.36 26.36 19.36 C 27.42 19.36 28.28 20.22 28.28 21.28 C 28.28 22.34 27.42 23.2 26.36 23.2 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(4.39 27.04)\"><path d=\"M 1.52 0 C 0.68 0 0 0.68 0 1.52 C 0 2.36 0.68 3.04 1.52 3.04 C 2.36 3.04 3.04 2.36 3.04 1.52 C 3.04 0.68 2.36 0 1.52 0 Z M 1.52 2.01 C 1.25 2.01 1.02 1.79 1.02 1.51 C 1.02 1.23 1.24 1.01 1.52 1.01 C 1.8 1.01 2.02 1.23 2.02 1.51 C 2.02 1.79 1.8 2.01 1.52 2.01 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(24.83 27.04)\"><path d=\"M 1.52 0 C 0.68 0 0 0.68 0 1.52 C 0 2.36 0.68 3.04 1.52 3.04 C 2.36 3.04 3.04 2.36 3.04 1.52 C 3.04 0.68 2.36 0 1.52 0 Z M 1.52 2.01 C 1.25 2.01 1.02 1.79 1.02 1.51 C 1.02 1.23 1.24 1.01 1.52 1.01 C 1.8 1.01 2.02 1.23 2.02 1.51 C 2.02 1.79 1.8 2.01 1.52 2.01 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(14.675 1.231)\"><path d=\"M 0.855 9.769 L 6.115 17.379 C 6.205 17.519 6.365 17.599 6.535 17.599 C 6.695 17.599 6.855 17.519 6.945 17.389 L 12.245 9.979 C 12.245 9.979 12.265 9.959 12.265 9.939 C 13.165 8.429 13.415 6.659 12.965 4.949 C 12.525 3.249 11.445 1.819 9.935 0.919 C 8.425 0.019 6.655 -0.231 4.945 0.219 C 3.245 0.659 1.815 1.739 0.915 3.249 C -0.265 5.279 -0.305 7.699 0.805 9.719 C 0.805 9.729 0.825 9.749 0.835 9.759 L 0.855 9.769 Z M 1.815 3.769 C 2.575 2.489 3.785 1.579 5.225 1.209 C 6.665 0.839 8.155 1.049 9.435 1.799 C 12.075 3.369 12.955 6.769 11.415 9.399 L 6.555 16.199 L 1.715 9.209 C 0.785 7.509 0.825 5.479 1.815 3.769 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(17.53 4.02)\"><path d=\"M 3.75 7.5 C 5.82 7.5 7.5 5.82 7.5 3.75 C 7.5 1.68 5.82 0 3.75 0 C 1.68 0 0 1.68 0 3.75 C 0 5.82 1.68 7.5 3.75 7.5 Z M 3.75 1.03 C 5.25 1.03 6.48 2.25 6.48 3.76 C 6.48 5.27 5.26 6.49 3.75 6.49 C 2.24 6.49 1.02 5.27 1.02 3.76 C 1.02 2.25 2.24 1.03 3.75 1.03 Z\" fill=\"currentColor\"></path></g><g transform=\"translate(5.1 23.39)\"><path d=\"M 0.51 1.02 L 1.81 1.02 C 2.09 1.02 2.32 0.79 2.32 0.51 C 2.32 0.23 2.09 0 1.81 0 L 0.51 0 C 0.23 0 0 0.23 0 0.51 C 0 0.79 0.23 1.02 0.51 1.02 Z\" fill=\"currentColor\"></path></g>"
  }
};
const ICON_NAMES = Object.keys(ICONS);
Object.assign(__ds_scope, { ICONS, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/icon-data.js", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — renders a glyph from the bespoke Radius line-icon set.
 * Monochrome icons inherit `currentColor`; size defaults to 24px.
 */
function Icon({
  name,
  size = 24,
  color,
  title,
  className,
  style,
  ...rest
}) {
  const def = __ds_scope.ICONS[name];
  if (!def) {
    if (typeof console !== "undefined") console.warn(`<Icon> unknown name: "${name}"`);
    return null;
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: className,
    viewBox: def.vb,
    width: size,
    height: size,
    role: title ? "img" : "presentation",
    "aria-label": title || undefined,
    "aria-hidden": title ? undefined : true,
    focusable: "false",
    style: {
      display: "inline-block",
      flex: "none",
      color,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: (title ? `<title>${title}</title>` : "") + def.p
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/IconCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles("rv-iconcard", `
.rv-iconcard {
  background: var(--surface-card); border-radius: var(--radius-md);
  box-shadow: var(--hairline); color: var(--ink); text-decoration: none;
  font-family: var(--font-sans); cursor: pointer;
  transition: box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard);
}
.rv-iconcard__icon { color: var(--ink); display: flex; }

/* Tile — centred icon over label, square-ish */
.rv-iconcard--tile {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 14px; text-align: center; padding: 22px 14px; min-height: 140px;
}
.rv-iconcard--tile:hover { box-shadow: var(--hairline), var(--shadow-sm); transform: translateY(-2px); color: var(--ink); }
.rv-iconcard--tile .rv-iconcard__label { font: var(--fw-semibold) 15px/20px var(--font-sans); }

/* Row — icon + label left, arrow right, red left accent */
.rv-iconcard--row {
  position: relative; display: flex; align-items: center; gap: 12px;
  padding: 11px 20px; overflow: hidden; min-height: 54px;
}
.rv-iconcard--row::before {
  content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 10px;
  background: var(--border-default); border-radius: var(--radius-md) 0 0 var(--radius-md);
  transition: background var(--dur-base) var(--ease-standard);
}
.rv-iconcard--row:hover { box-shadow: var(--hairline), var(--shadow-sm); color: var(--ink); }
.rv-iconcard--row:hover::before { background: var(--radius-red); }
.rv-iconcard--row .rv-iconcard__label { flex: 1; font: var(--fw-bold) 16px/18px var(--font-sans); padding-left: 2px; }
.rv-iconcard--row .rv-iconcard__arrow { color: var(--ink); display: flex; transition: transform var(--dur-base) var(--ease-standard); }
.rv-iconcard--row:hover .rv-iconcard__arrow { transform: translateX(3px); color: var(--radius-red); }
`);

/**
 * IconCard — a bespoke icon + label, as a centred tile or a horizontal row.
 * Renders an <a> when `href` is set. Used in "How can we help your business?" grids.
 */
function IconCard({
  icon,
  label,
  layout = "tile",
  iconSize,
  href,
  className = "",
  ...rest
}) {
  const Tag = href ? "a" : "div";
  const size = iconSize || (layout === "row" ? 32 : 40);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ["rv-iconcard", `rv-iconcard--${layout}`, className].filter(Boolean).join(" "),
    href: href
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "rv-iconcard__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size
  })), /*#__PURE__*/React.createElement("span", {
    className: "rv-iconcard__label"
  }, label), layout === "row" && /*#__PURE__*/React.createElement("span", {
    className: "rv-iconcard__arrow"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 24
  })));
}
Object.assign(__ds_scope, { IconCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/IconCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ProductTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles("rv-ptile", `
.rv-ptile {
  display: flex; flex-direction: column; gap: 14px;
  background: var(--surface-card); border-radius: var(--radius-md);
  box-shadow: var(--hairline); padding: 30px; text-decoration: none;
  transition: box-shadow var(--dur-base) var(--ease-standard);
}
a.rv-ptile:hover { box-shadow: var(--hairline), var(--shadow-sm); }
.rv-ptile__icon { color: var(--radius-red); display: flex; }
.rv-ptile__title { font: var(--fw-bold) 24px/34px var(--font-sans); color: var(--text-strong); margin: 0; }
.rv-ptile__desc { font: var(--fw-regular) 16px/26px var(--font-sans); color: var(--text-muted); margin: 0; }
.rv-ptile__link {
  margin-top: auto; display: inline-flex; align-items: center; gap: 8px;
  font: var(--fw-semibold) 16px/26px var(--font-sans); color: var(--radius-red);
  padding-top: 6px;
}
a.rv-ptile:hover .rv-ptile__link { color: var(--radius-red-hover); }
`);

/**
 * ProductTile / IconCard — icon, title, blurb and a "more details" link.
 * Renders as an <a> when `href` is set.
 */
function ProductTile({
  icon,
  title,
  description,
  linkLabel = "More details",
  href,
  className = "",
  ...rest
}) {
  const Tag = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ["rv-ptile", className].filter(Boolean).join(" "),
    href: href
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "rv-ptile__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 44
  })), /*#__PURE__*/React.createElement("h3", {
    className: "rv-ptile__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "rv-ptile__desc"
  }, description), linkLabel && /*#__PURE__*/React.createElement("span", {
    className: "rv-ptile__link"
  }, linkLabel, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 20
  })));
}
Object.assign(__ds_scope, { ProductTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProductTile.jsx", error: String((e && e.message) || e) }); }

// components/content/UspList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles("rv-usp", `
.rv-usp { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 16px; }
.rv-usp__item { display: flex; align-items: flex-start; gap: 12px; font-family: var(--font-sans); }
.rv-usp__tick { flex: none; display: flex; }
.rv-usp__text { font-size: 16px; line-height: 26px; color: var(--text-body); }
.rv-usp--underlined .rv-usp__item { border-bottom: 1px solid var(--border-default); padding-bottom: 16px; }
.rv-usp--underlined .rv-usp__item:last-child { border-bottom: 0; padding-bottom: 0; }
.rv-usp--dark .rv-usp__text { color: var(--white); }
`);

/**
 * USP list — Radius's recurring "solid tick + short benefit" pattern.
 */
function UspList({
  items = [],
  tone = "success",
  underlined = false,
  dark = false,
  className = "",
  ...rest
}) {
  const tickColor = tone === "red" ? "var(--radius-red)" : "var(--success-green)";
  const cls = ["rv-usp", underlined ? "rv-usp--underlined" : "", dark ? "rv-usp--dark" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: cls
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    className: "rv-usp__item",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "rv-usp__tick",
    style: {
      color: tickColor
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "tick-solid",
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    className: "rv-usp__text"
  }, it))));
}
Object.assign(__ds_scope, { UspList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/UspList.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles("rv-button", `
.rv-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 9px;
  font-family: var(--font-sans); font-weight: var(--fw-semibold);
  font-size: 16px; line-height: 26px;
  padding: 15px 30px; border-radius: var(--radius-md);
  border: 2px solid transparent; cursor: pointer; text-decoration: none;
  transition: background-color var(--dur-base) var(--ease-standard),
              color var(--dur-base) var(--ease-standard),
              border-color var(--dur-base) var(--ease-standard);
  -webkit-appearance: none; appearance: none; user-select: none; white-space: nowrap;
}
.rv-btn--sm { font-size: 14px; line-height: 24px; padding: 11px 22px; gap: 7px; }
.rv-btn--block { display: flex; width: 100%; }
.rv-btn svg { flex: none; }

/* primary (red) */
.rv-btn--primary { background: var(--action-primary); color: var(--white); }
.rv-btn--primary:hover { background: var(--action-primary-hover); }

/* solid black */
.rv-btn--solid-black { background: var(--black); color: var(--white); }
.rv-btn--solid-black:hover { background: var(--black-hover); }

/* solid white */
.rv-btn--solid-white { background: var(--white); color: var(--ink); box-shadow: var(--hairline); }
.rv-btn--solid-white:hover { background: var(--accent-grey); }

/* ghosted black (outline) */
.rv-btn--ghosted-black { background: transparent; color: var(--ink); border-color: var(--ink); }
.rv-btn--ghosted-black:hover { background: var(--ink); color: var(--white); }

/* ghosted white (outline on dark) */
.rv-btn--ghosted-white { background: transparent; color: var(--white); border-color: var(--white); }
.rv-btn--ghosted-white:hover { background: var(--white); color: var(--ink); }

.rv-btn:disabled, .rv-btn[aria-disabled="true"] {
  opacity: .4; cursor: not-allowed; pointer-events: none;
}
`);

/**
 * Button — Radius's signature action. Five variants, two sizes, optional
 * leading/trailing arrow. Renders <a> when `href` is provided.
 */
function Button({
  children,
  variant = "primary",
  size = "lg",
  arrow = "none",
  // "right" | "left" | "none"
  href,
  disabled = false,
  block = false,
  className = "",
  ...rest
}) {
  const cls = ["rv-btn", `rv-btn--${variant}`, size === "sm" ? "rv-btn--sm" : "", block ? "rv-btn--block" : "", className].filter(Boolean).join(" ");
  const iconSize = size === "sm" ? 18 : 20;
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, arrow === "left" && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-left",
    size: iconSize
  }), children && /*#__PURE__*/React.createElement("span", null, children), arrow === "right" && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: iconSize
  }));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled,
    "aria-disabled": disabled || undefined
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles("rv-acc", `
.rv-acc { display: flex; flex-direction: column; }
.rv-acc__item { border-bottom: 1px solid var(--border-default); }
.rv-acc__btn {
  width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px;
  background: none; border: 0; cursor: pointer; text-align: left;
  font: var(--fw-semibold) 18px/28px var(--font-sans); color: var(--text-strong);
  padding: 22px 4px;
}
.rv-acc__btn:hover { color: var(--radius-red); }
.rv-acc__btn:focus-visible { outline: 2px solid var(--radius-red); outline-offset: 2px; }
.rv-acc__icon { flex: none; color: var(--radius-red); transition: transform var(--dur-base) var(--ease-standard); }
.rv-acc__item[data-open="true"] .rv-acc__icon { transform: rotate(45deg); }
.rv-acc__panel { overflow: hidden; max-height: 0; transition: max-height var(--dur-slow) var(--ease-standard); }
.rv-acc__panel-inner { padding: 0 4px 24px; font: var(--fw-regular) 16px/26px var(--font-sans); color: var(--text-muted); }
`);

/** FAQ-style accordion. Single-open by default; set `multi` to allow many. */
function Accordion({
  items = [],
  multi = false,
  className = "",
  ...rest
}) {
  const [open, setOpen] = React.useState(() => new Set());
  const toggle = i => setOpen(prev => {
    const next = new Set(multi ? prev : []);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["rv-acc", className].filter(Boolean).join(" ")
  }, rest), items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      className: "rv-acc__item",
      "data-open": isOpen,
      key: i
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "rv-acc__btn",
      "aria-expanded": isOpen,
      onClick: () => toggle(i)
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      className: "rv-acc__icon"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "plus",
      size: 24
    }))), /*#__PURE__*/React.createElement("div", {
      className: "rv-acc__panel",
      style: {
        maxHeight: isOpen ? 600 : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rv-acc__panel-inner"
    }, it.a)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles("rv-alert", `
.rv-alert {
  position: relative; display: flex; align-items: flex-start; gap: 15px;
  border-radius: var(--radius-sm); padding: 15px 20px;
  font-family: var(--font-sans); border: 1px solid;
}
.rv-alert__icon { flex: none; width: 24px; height: 24px; margin-top: 1px; }
.rv-alert__body { flex: 1; display: flex; flex-direction: column; gap: 5px; padding-right: 8px; }
.rv-alert__heading { font: var(--fw-bold) 16px/1.25 var(--font-sans); color: var(--ink); }
.rv-alert__text { font: var(--fw-regular) 15px/1.45 var(--font-sans); color: var(--ink); }
.rv-alert__text > :last-child { margin-bottom: 0; }
.rv-alert__close {
  flex: none; background: none; border: 0; cursor: pointer; padding: 2px;
  color: var(--ink); opacity: .55; display: flex; transition: opacity var(--dur-fast) var(--ease-standard);
  margin: -2px -6px 0 0;
}
.rv-alert__close:hover { opacity: 1; }

.rv-alert--information { background: #E5F5FF; border-color: #0591E5; }
.rv-alert--information .rv-alert__icon { color: #0591E5; }
.rv-alert--error { background: #FFE9EB; border-color: #F44054; }
.rv-alert--error .rv-alert__icon { color: #F44054; }
.rv-alert--warning { background: #FFF9ED; border-color: #F1A605; }
.rv-alert--warning .rv-alert__icon { color: #F1A605; }
.rv-alert--success { background: #F0FFED; border-color: #3DAE2B; }
.rv-alert--success .rv-alert__icon { color: #3DAE2B; }
`);
const GLYPH = {
  information: /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 4.4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm1.6 11.1h-3.2v-1.3h.9v-3.4h-.9v-1.3h2.3v4.7h.9v1.3Z"
  }),
  error: /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1.2 15.6h-2.4v-2.3h2.4v2.3Zm0-3.7h-2.4l-.3-7.6h3l-.3 7.6Z"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M12.87 3.5a1 1 0 0 0-1.74 0L1.6 20a1 1 0 0 0 .87 1.5h19.06A1 1 0 0 0 22.4 20L12.87 3.5ZM13.2 18.3h-2.4V16h2.4v2.3Zm0-3.8h-2.4l-.3-6.2h3l-.3 6.2Z"
  }),
  success: /*#__PURE__*/React.createElement("path", {
    d: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.4 14.6-4.2-4.2 1.7-1.7 2.5 2.5 5.5-5.5 1.7 1.7-7.2 7.2Z"
  })
};

/**
 * Alert — an inline status message (information / error / warning / success).
 */
function Alert({
  type = "information",
  heading,
  children,
  dismissible = true,
  onClose,
  className = "",
  ...rest
}) {
  const [open, setOpen] = React.useState(true);
  if (!open) return null;
  const close = () => {
    setOpen(false);
    onClose && onClose();
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    className: ["rv-alert", `rv-alert--${type}`, className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("svg", {
    className: "rv-alert__icon",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, GLYPH[type]), /*#__PURE__*/React.createElement("div", {
    className: "rv-alert__body"
  }, heading && /*#__PURE__*/React.createElement("span", {
    className: "rv-alert__heading"
  }, heading), children && /*#__PURE__*/React.createElement("div", {
    className: "rv-alert__text"
  }, children)), dismissible && /*#__PURE__*/React.createElement("button", {
    className: "rv-alert__close",
    "aria-label": "Dismiss",
    onClick: close
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close-solid",
    size: 18
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles("rv-choice", `
.rv-choice { display: inline-flex; align-items: flex-start; gap: 11px; cursor: pointer; font-family: var(--font-sans); }
.rv-choice input { position: absolute; opacity: 0; width: 0; height: 0; }
.rv-choice__box {
  flex: none; width: 22px; height: 22px; margin-top: 1px;
  background: var(--white); box-shadow: var(--hairline);
  display: flex; align-items: center; justify-content: center; color: var(--white);
  transition: background-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard);
}
.rv-choice--checkbox .rv-choice__box { border-radius: 5px; }
.rv-choice--radio .rv-choice__box { border-radius: var(--radius-pill); }
.rv-choice__box svg { opacity: 0; transition: opacity var(--dur-fast); }
.rv-choice__dot { width: 10px; height: 10px; border-radius: var(--radius-pill); background: var(--white); opacity: 0; transition: opacity var(--dur-fast); }
.rv-choice input:focus-visible + .rv-choice__box { outline: 2px solid var(--radius-red); outline-offset: 2px; }
.rv-choice input:checked + .rv-choice__box { background: var(--radius-red); box-shadow: none; }
.rv-choice input:checked + .rv-choice__box svg,
.rv-choice input:checked + .rv-choice__box .rv-choice__dot { opacity: 1; }
.rv-choice__label { font-size: 16px; line-height: 24px; color: var(--text-body); }
.rv-choice input:disabled ~ .rv-choice__label { color: var(--text-muted); }
.rv-choice:has(input:disabled) { cursor: not-allowed; }
`);

/** Checkbox or radio with the brand red selected fill. */
function Checkbox({
  label,
  type = "checkbox",
  className = "",
  ...rest
}) {
  const isRadio = type === "radio";
  return /*#__PURE__*/React.createElement("label", {
    className: ["rv-choice", isRadio ? "rv-choice--radio" : "rv-choice--checkbox", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "rv-choice__box"
  }, isRadio ? /*#__PURE__*/React.createElement("span", {
    className: "rv-choice__dot"
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "tick-solid",
    size: 14,
    color: "#fff"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "rv-choice__label"
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectStyles("rv-tabs", `
.rv-tabs { display: inline-flex; gap: 8px; }
.rv-tab {
  font: var(--fw-semibold) 16px/1 var(--font-sans); color: var(--ink);
  background: var(--white); box-shadow: var(--hairline);
  border: 0; border-radius: var(--radius-md); padding: 13px 22px; cursor: pointer;
  transition: background-color var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard);
}
.rv-tab:hover { background: var(--accent-grey); }
.rv-tab[aria-selected="true"] { background: var(--black); color: var(--white); box-shadow: none; }
.rv-tab:focus-visible { outline: 2px solid var(--radius-red); outline-offset: 2px; }
`);

/** Segmented tabs. Controlled (value + onChange) or uncontrolled (defaultValue). */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  className = "",
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["rv-tabs", className].filter(Boolean).join(" "),
    role: "tablist"
  }, rest), tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    role: "tab",
    type: "button",
    "aria-selected": active === t.id,
    className: "rv-tab",
    onClick: () => select(t.id)
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing-example/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing-example/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/myradius/DashNav.jsx
try { (() => {
/* MyRadius / Radius Velocity — logged-in dashboard navigation. */
const {
  Icon
} = window.RadiusVelocityDesignSystem_0a984d;
const DASH_NAV = [{
  id: "home",
  label: "Home",
  icon: "home"
}, {
  id: "fuel",
  label: "Fuel Cards",
  icon: "fuel-cards"
}, {
  id: "telematics",
  label: "Telematics",
  icon: "telematics"
}, {
  id: "compare",
  label: "Radius Compare",
  icon: "filters"
}, {
  id: "dashboard",
  label: "Dashboard",
  icon: "cards"
}, {
  id: "invoices",
  label: "Invoices",
  icon: "download"
}, {
  id: "help",
  label: "Contact and help",
  icon: "email"
}];
function DashNav({
  active = "dashboard",
  onNavigate
}) {
  const [acct, setAcct] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    className: "mr-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mr-nav__inner"
  }, /*#__PURE__*/React.createElement("img", {
    className: "mr-nav__logo",
    src: "../../assets/logos/radius-velocity-logo.svg",
    alt: "radius velocity"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "mr-nav__links"
  }, DASH_NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: "#",
    className: "mr-nav__link" + (active === n.id ? " is-active" : ""),
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(n.id);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n.icon,
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, n.label)))), /*#__PURE__*/React.createElement("div", {
    className: "mr-nav__acct"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mr-acctbtn",
    onClick: () => setAcct(v => !v)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "account",
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, "Account"), /*#__PURE__*/React.createElement(Icon, {
    name: "single-chevron-down",
    size: 16
  })), acct && /*#__PURE__*/React.createElement("div", {
    className: "mr-acctmenu",
    onMouseLeave: () => setAcct(false)
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "account",
    size: 18
  }), "My profile"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cards",
    size: 18
  }), "Manage cards"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 18
  }), "Invoices"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "edit",
    size: 18
  }), "Settings"), /*#__PURE__*/React.createElement("div", {
    className: "mr-acctmenu__sep"
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 18
  }), "Log out")))));
}
Object.assign(window, {
  DashNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/myradius/DashNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/myradius/Dashboard.jsx
try { (() => {
/* MyRadius — dashboard body: account products, offers carousel, services, footer. */
const {
  Icon,
  Button,
  Badge
} = window.RadiusVelocityDesignSystem_0a984d;
function AccountCard({
  icon,
  title,
  stats,
  actions,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mr-acard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mr-acard__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mr-acard__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    className: "mr-acard__title"
  }, title), /*#__PURE__*/React.createElement("button", {
    className: "mr-acard__more",
    "aria-label": "More"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "single-chevron-down",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mr-acard__body"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("p", {
    className: "mr-acard__stat",
    key: i
  }, /*#__PURE__*/React.createElement("strong", null, s.n), " ", s.l))), /*#__PURE__*/React.createElement("div", {
    className: "mr-acard__actions"
  }, actions.map((a, i) => /*#__PURE__*/React.createElement("button", {
    className: "mr-acard__btn",
    key: i,
    onClick: a.onClick
  }, a.label))));
}
function ManageProducts() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mr-sec"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-h2 mr-center"
  }, "Manage your products"), /*#__PURE__*/React.createElement("div", {
    className: "mr-grid3"
  }, /*#__PURE__*/React.createElement(AccountCard, {
    icon: "fuel-cards",
    title: "Fuel Card / EV account",
    stats: [{
      n: "12",
      l: "active cards"
    }, {
      n: "1,934",
      l: "litres drawn in last 30 days"
    }],
    actions: [{
      label: "Manage my cards"
    }, {
      label: "View invoices"
    }]
  }), /*#__PURE__*/React.createElement(AccountCard, {
    icon: "telematics",
    title: "Telematics account",
    stats: [{
      n: "12",
      l: "active devices"
    }],
    actions: [{
      label: "Live Map"
    }, {
      label: "Trip History"
    }]
  }), /*#__PURE__*/React.createElement(AccountCard, {
    icon: "cards",
    title: "Velos account",
    stats: [{
      n: "4",
      l: "active cards"
    }],
    actions: [{
      label: "Enter security code"
    }, {
      label: "Log in"
    }]
  }), /*#__PURE__*/React.createElement(AccountCard, {
    icon: "vehicle-tracking",
    title: "Manage My Fleet",
    stats: [{
      n: "10",
      l: "active vehicles"
    }],
    actions: [{
      label: "Update my fleet"
    }]
  }), /*#__PURE__*/React.createElement(AccountCard, {
    icon: "insurance",
    title: "Vehicle check",
    stats: [{
      n: "Daily",
      l: "safety & maintenance checks via the app"
    }],
    actions: [{
      label: "Manage my fleet"
    }, {
      label: "View dashboard"
    }]
  }), /*#__PURE__*/React.createElement("button", {
    className: "mr-add"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mr-add__plus"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 30
  })), /*#__PURE__*/React.createElement("span", {
    className: "mr-add__label"
  }, "Add product"))));
}
const OFFERS = [{
  price: "£10.00",
  title: "Six months of half-priced Gemini tracking",
  img: "../../assets/images/photo-a.png"
}, {
  price: "£10.00",
  title: "Get in control with one smart SIM card",
  icon: "mobile"
}, {
  price: "£10.00",
  title: "Stay moving with vehicle hire & leasing",
  img: "../../assets/images/photo-c.png"
}, {
  price: "£10.00",
  title: "Adding electric vehicles to your fleet?",
  img: "../../assets/images/photo-b.png"
}];
function Offers() {
  const [i, setI] = React.useState(0);
  const per = 3;
  const max = Math.max(0, OFFERS.length - per);
  const go = d => setI(v => Math.min(max, Math.max(0, v + d)));
  return /*#__PURE__*/React.createElement("section", {
    className: "mr-sec mr-sec--subtle"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-h2 mr-center"
  }, "Your offers"), /*#__PURE__*/React.createElement("div", {
    className: "mr-carousel"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mr-arrow",
    disabled: i === 0,
    onClick: () => go(-1),
    "aria-label": "Previous"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mr-carousel__view"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mr-carousel__track",
    style: {
      transform: `translateX(calc(${-i} * (100% / ${per} )))`
    }
  }, OFFERS.map((o, idx) => /*#__PURE__*/React.createElement("div", {
    className: "mr-offer",
    key: idx
  }, /*#__PURE__*/React.createElement("div", {
    className: "mr-offer__badge"
  }, /*#__PURE__*/React.createElement("small", null, "from"), /*#__PURE__*/React.createElement("strong", null, o.price), /*#__PURE__*/React.createElement("small", null, "per month")), /*#__PURE__*/React.createElement("h3", {
    className: "mr-offer__title"
  }, o.title), /*#__PURE__*/React.createElement("div", {
    className: "mr-offer__media"
  }, o.img ? /*#__PURE__*/React.createElement("img", {
    src: o.img,
    alt: ""
  }) : /*#__PURE__*/React.createElement("span", {
    className: "mr-offer__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: o.icon,
    size: 64
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mr-offer__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    block: true
  }, "Get offer"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "ghosted-black"
  }, "Find out more")))))), /*#__PURE__*/React.createElement("button", {
    className: "mr-arrow",
    disabled: i === max,
    onClick: () => go(1),
    "aria-label": "Next"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 20,
    color: "#fff"
  }))));
}
const SERVICES = [{
  icon: "insurance",
  label: "Vehicle check"
}, {
  icon: "cards",
  label: "Payment & expenses"
}, {
  icon: "broadband",
  label: "HR software"
}, {
  icon: "ev-charging",
  label: "EV charging"
}, {
  icon: "phone-systems",
  label: "Telecoms"
}, {
  icon: "business-energy",
  label: "Business energy"
}, {
  icon: "vehicle-leasing",
  label: "Vehicle hire & leasing"
}, {
  icon: "insurance",
  label: "Insurance"
}];
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mr-sec"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-h2 mr-center"
  }, "Our products and services"), /*#__PURE__*/React.createElement("div", {
    className: "mr-grid4"
  }, SERVICES.map((s, i) => /*#__PURE__*/React.createElement("a", {
    className: "mr-stile",
    href: "#",
    key: i,
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("span", {
    className: "mr-stile__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 34
  })), /*#__PURE__*/React.createElement("span", {
    className: "mr-stile__label"
  }, s.label)))));
}
function DashFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "mr-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mr-foot__links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Radius terms and conditions"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Privacy policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Cookie policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Spam policy")), /*#__PURE__*/React.createElement("p", {
    className: "mr-foot__copy"
  }, "\xA9 2026 Radius Limited \xB7 08260702 \xB7 Eurocard Centre, Herald Park, Herald Drive, Crewe, CW1 6EG"));
}
function Dashboard() {
  return /*#__PURE__*/React.createElement("main", {
    className: "mr-main"
  }, /*#__PURE__*/React.createElement(ManageProducts, null), /*#__PURE__*/React.createElement(Offers, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(DashFooter, null));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/myradius/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/radius-com/Chrome.jsx
try { (() => {
/* radius.com — site chrome: top navigation + footer.
   Consumes DS components from window namespace (set in index.html). */
const {
  Button,
  Icon
} = window.RadiusVelocityDesignSystem_0a984d;
const NAV = ["Fuel cards", "Telematics", "EV & energy", "Insurance", "Vehicle solutions", "Telecoms"];
function SiteNav({
  onNavigate
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    className: "rc-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "rc-nav__logo",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("home");
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/radius-logo.svg",
    alt: "radius"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "rc-nav__links"
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: e => e.preventDefault()
  }, n))), /*#__PURE__*/React.createElement("div", {
    className: "rc-nav__actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "rc-nav__login",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("login");
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "account",
    size: 20
  }), " Login"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    arrow: "right",
    onClick: () => onNavigate("quote")
  }, "Get a quote"), /*#__PURE__*/React.createElement("button", {
    className: "rc-nav__burger",
    "aria-label": "Menu",
    onClick: () => setMenuOpen(v => !v)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: menuOpen ? "close-solid" : "hamburger",
    size: 24
  })))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "rc-nav__drawer"
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: e => e.preventDefault()
  }, n))));
}
const FOOTER_COLS = [{
  h: "Products",
  links: ["Fuel cards", "EV charging", "Telematics", "Insurance", "Vehicle leasing", "Business energy"]
}, {
  h: "Company",
  links: ["About Radius", "Our mission", "Careers", "News", "Investors", "Partnerships"]
}, {
  h: "Support",
  links: ["Contact us", "Help centre", "Manage account", "Order a card", "Accessibility"]
}];
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "rc-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-foot__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-foot__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/radius-logo-white.svg",
    alt: "radius"
  }), /*#__PURE__*/React.createElement("p", null, "Driving business forward \u2014 fuel, EV, telematics, insurance and more, all from one account."), /*#__PURE__*/React.createElement("div", {
    className: "rc-foot__social"
  }, ["facebook", "linkedin", "twitter"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s,
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s,
    size: 18
  }))))), FOOTER_COLS.map(c => /*#__PURE__*/React.createElement("div", {
    className: "rc-foot__col",
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", null, c.h), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault()
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "rc-foot__bar"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Radius Limited \xB7 Eurocard Centre, Herald Park, Crewe, CW1 6EG"), /*#__PURE__*/React.createElement("span", {
    className: "rc-foot__legal"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Cookies"))));
}
Object.assign(window, {
  SiteNav,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/radius-com/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/radius-com/HomePage.jsx
try { (() => {
/* radius.com — marketing homepage sections. */
const {
  Button,
  Icon,
  ProductTile,
  UspList,
  Card,
  Accordion
} = window.RadiusVelocityDesignSystem_0a984d;
const PRODUCTS = [{
  icon: "fuel-cards",
  title: "Fuel & EV cards"
}, {
  icon: "telematics",
  title: "Telematics"
}, {
  icon: "insurance",
  title: "Insurance"
}, {
  icon: "vehicle-leasing",
  title: "Vehicle solutions"
}, {
  icon: "ev-charging",
  title: "EV charging"
}, {
  icon: "business-energy",
  title: "Business energy"
}, {
  icon: "broadband",
  title: "Telecoms & IT"
}, {
  icon: "cards",
  title: "Expense management"
}];
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "rc-hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "rc-hero__img",
    src: "../../assets/images/hero.jpg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "rc-hero__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rc-hero__content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rc-eyebrow rc-eyebrow--light"
  }, "One account. Every solution."), /*#__PURE__*/React.createElement("h1", {
    className: "t-d2 rc-hero__title"
  }, "Driving business forward"), /*#__PURE__*/React.createElement("p", {
    className: "rc-hero__sub"
  }, "Fuel, EV charging, telematics, insurance and vehicle solutions \u2014 managed simply, all in one place."), /*#__PURE__*/React.createElement("div", {
    className: "rc-hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    arrow: "right",
    onClick: () => onNavigate("quote")
  }, "Get a quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghosted-white",
    arrow: "right"
  }, "Explore products"))));
}
function ProductGrid() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rc-sec rc-sec--subtle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-h2 rc-center"
  }, "Our products and services"), /*#__PURE__*/React.createElement("div", {
    className: "rc-prodrow"
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement("a", {
    className: "rc-prodtile",
    href: "#",
    key: p.title,
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("span", {
    className: "rc-prodtile__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 40
  })), /*#__PURE__*/React.createElement("span", {
    className: "rc-prodtile__label"
  }, p.title))))));
}
function MediaSection({
  flip,
  eyebrow,
  title,
  body,
  usps,
  cta,
  image
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "rc-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-wrap rc-media" + (flip ? " rc-media--flip" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-media__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rc-eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "t-h2"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "t-intro rc-muted"
  }, body), /*#__PURE__*/React.createElement(UspList, {
    items: usps
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    arrow: "right"
  }, cta))), /*#__PURE__*/React.createElement("div", {
    className: "rc-media__media"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-media__frame"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: ""
  })))));
}
function MyRadiusBand() {
  const feats = [{
    icon: "account",
    h: "Manage your products",
    d: "One portal for fuel, telematics, insurance and more."
  }, {
    icon: "fuel-cards",
    h: "Monitor fuel usage",
    d: "See spend and spot where you can save."
  }, {
    icon: "download",
    h: "HMRC-ready invoices",
    d: "Download tax-ready statements in a click."
  }, {
    icon: "notifications",
    h: "Exclusive offers",
    d: "Member pricing on products across the group."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rc-sec rc-sec--subtle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-h2 rc-center"
  }, "Unlock efficiency with ", /*#__PURE__*/React.createElement("span", {
    className: "rc-myradius"
  }, "my", /*#__PURE__*/React.createElement("strong", null, "radius"))), /*#__PURE__*/React.createElement("p", {
    className: "t-intro rc-muted rc-center",
    style: {
      maxWidth: 640,
      margin: "0 auto 48px"
    }
  }, "Your free online portal to run everything Radius in one login."), /*#__PURE__*/React.createElement("div", {
    className: "rc-feats"
  }, feats.map(f => /*#__PURE__*/React.createElement("div", {
    className: "rc-feat",
    key: f.h
  }, /*#__PURE__*/React.createElement("span", {
    className: "rc-feat__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: 32
  })), /*#__PURE__*/React.createElement("h4", {
    className: "t-h4"
  }, f.h), /*#__PURE__*/React.createElement("p", {
    className: "rc-muted",
    style: {
      margin: 0
    }
  }, f.d)))), /*#__PURE__*/React.createElement("div", {
    className: "rc-center",
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    arrow: "right"
  }, "Find out more"))));
}
function StatsBand() {
  const stats = [["470,000+", "Customers worldwide"], ["55", "Offices globally"], ["2,950", "Team members"]];
  return /*#__PURE__*/React.createElement("section", {
    className: "rc-stats"
  }, /*#__PURE__*/React.createElement("img", {
    className: "rc-stats__img",
    src: "../../assets/images/photo-a.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "rc-wrap rc-stats__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-stats__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rc-eyebrow rc-eyebrow--light"
  }, "On a global scale"), /*#__PURE__*/React.createElement("h2", {
    className: "t-h2",
    style: {
      color: "#fff"
    }
  }, "Built to grow with your business"), /*#__PURE__*/React.createElement("p", {
    className: "rc-muted-dark"
  }, "Since 1990 we've helped businesses like yours go further \u2014 with a dedicated team and a network that spans five continents."), /*#__PURE__*/React.createElement("div", {
    className: "rc-statgrid"
  }, stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-stat__n"
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "rc-stat__l"
  }, l)))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghosted-white",
    arrow: "right"
  }, "About Radius"))));
}
function WhyChoose() {
  const items = [{
    icon: "insurance",
    h: "Expertise",
    d: "35 years helping businesses run their fleets."
  }, {
    icon: "tick",
    h: "Trust",
    d: "470,000 customers trust us to help them grow."
  }, {
    icon: "filters",
    h: "Choice",
    d: "Solutions across fuel, fleet, energy and more."
  }, {
    icon: "phone-systems",
    h: "Service",
    d: "Global scale with local UK support teams."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rc-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-h2 rc-center"
  }, "Why businesses choose Radius"), /*#__PURE__*/React.createElement("div", {
    className: "rc-why"
  }, items.map(c => /*#__PURE__*/React.createElement(Card, {
    padded: true,
    key: c.h,
    className: "rc-whycard"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rc-feat__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 30
  })), /*#__PURE__*/React.createElement("h3", {
    className: "t-h3"
  }, c.h), /*#__PURE__*/React.createElement("p", {
    className: "rc-muted",
    style: {
      margin: 0
    }
  }, c.d))))));
}
function Faqs() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rc-sec rc-sec--subtle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rc-wrap",
    style: {
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "t-h2 rc-center"
  }, "Frequently asked questions"), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      q: "What is a Radius fuel card?",
      a: "One card for fuel and EV charging, accepted at thousands of sites across the UK and Europe, with HMRC-ready invoicing."
    }, {
      q: "Can I manage everything in one place?",
      a: "Yes — MyRadius brings fuel, telematics, insurance and more into a single online account."
    }, {
      q: "Are there setup fees?",
      a: "No setup or annual card fees on standard accounts. Speak to us for tailored fleet pricing."
    }, {
      q: "Do you support electric vehicles?",
      a: "Absolutely. Our cards and charging solutions cover both fuel and EV, so mixed fleets are simple."
    }]
  })));
}
function HomePage({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(ProductGrid, null), /*#__PURE__*/React.createElement(MediaSection, {
    eyebrow: "Fuel & EV cards",
    title: "Fuel and EV cards, made simple",
    body: "One card for fuel and charging \u2014 cut admin, control spend and save across thousands of sites.",
    usps: ["Accepted at thousands of UK & EU sites", "One card for fuel and EV charging", "HMRC-ready paperless invoices"],
    cta: "Choose your fuel card",
    image: "../../assets/images/photo-b.png"
  }), /*#__PURE__*/React.createElement(MediaSection, {
    flip: true,
    eyebrow: "Telematics",
    title: "See your whole fleet, live",
    body: "Track vehicles, cut costs and improve driver safety with Radius Velocity telematics and dashcams.",
    usps: ["Live vehicle and asset tracking", "Integrated dashcams & HD footage", "Driver performance & safety scores"],
    cta: "View solutions",
    image: "../../assets/images/photo-a.png"
  }), /*#__PURE__*/React.createElement(MyRadiusBand, null), /*#__PURE__*/React.createElement(StatsBand, null), /*#__PURE__*/React.createElement(WhyChoose, null), /*#__PURE__*/React.createElement(Faqs, null));
}
Object.assign(window, {
  HomePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/radius-com/HomePage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.IconCard = __ds_scope.IconCard;

__ds_ns.ProductTile = __ds_scope.ProductTile;

__ds_ns.UspList = __ds_scope.UspList;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
