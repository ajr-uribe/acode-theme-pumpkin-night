(()=>{var s=(a,e)=>()=>(a&&(e=a(a=0)),e);var b=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);var c,p=s(()=>{c={id:"slabs.theme.halloween_pumpkin_night",name:"Halloween Pumpkin Night (Editor theme)",main:"dist/main.js",version:"1.0.1",readme:"README.md",icon:"icon.png",files:[],minVersionCode:292,price:0,license:"MIT",keywords:["AMOLED","OLED","Dark","Black","Theme","Halloween"],changelogs:"CHANGELOGS.md",author:{name:"ScriptLabs",email:"scriptlabsmc@gmail.com",url:"https://scriptlabsmc.vercel.app",github:"ScriptLabsMC"}}});var h,m=s(()=>{h=`@charset "UTF-8";
/***
 * .ace-halloween-pumpkin-night (Fixed Cursor Offset)
 * Tema Halloween optimizado para Acode / Ace Editor
 * Paleta: negro c\xE1lido, naranja calabaza, p\xFArpura bruma, verde ne\xF3n.
 */
.ace-halloween-pumpkin-night {
  color: #ffd8a8;
  background-color: #0b0606;
  background-image: radial-gradient(circle at 20% 10%, rgba(149, 82, 255, 0.04), transparent 8%), radial-gradient(circle at 80% 90%, rgba(255, 94, 0, 0.03), transparent 10%), linear-gradient(180deg, rgba(58, 0, 90, 0.03), rgba(0, 0, 0, 0.06));
  background-blend-mode: screen, screen, normal;
  background-size: cover;
  font-family: "Fira Code", "JetBrains Mono", monospace;
  font-size: 13.5px;
  line-height: 1.45;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Layers transparentes */
.ace-halloween-pumpkin-night .ace_scroller,
.ace-halloween-pumpkin-night .ace_content,
.ace-halloween-pumpkin-night .ace_layer {
  background: transparent;
}

/* Gutter */
.ace-halloween-pumpkin-night .ace_gutter {
  color: #6d4c41;
  background: #0b0606;
  border-right: 1px solid rgba(62, 39, 35, 0.25);
}

.ace-halloween-pumpkin-night .ace_gutter-cell {
  padding: 0 8px;
}

.ace-halloween-pumpkin-night .ace_gutter-active-line {
  color: #ff9100;
  text-shadow: 0 0 6px #ff6f00;
  background: #1a0d0d;
}

/* Margen de impresi\xF3n */
.ace-halloween-pumpkin-night .ace_print-margin {
  width: 1px;
  background: #2e1b1b;
}

/* Cursor */
.ace-halloween-pumpkin-night .ace_cursor {
  color: #ffcc00;
  background-color: transparent;
  width: 2px;
  /* Quitamos box-shadow por offset */
  box-shadow: none !important;
  transform: translateX(0);
  position: absolute;
}

/* L\xEDnea activa */
.ace-halloween-pumpkin-night .ace_marker-layer .ace_active-line {
  background: rgba(255, 102, 0, 0.06);
}

.ace-halloween-pumpkin-night .ace_active-line-marker {
  border-left: 3px solid rgba(255, 140, 0, 0.2);
  margin-left: -1px;
}

/* Selecci\xF3n */
.ace-halloween-pumpkin-night .ace_marker-layer .ace_selection {
  background: rgba(255, 94, 0, 0.22);
  border-radius: 2px;
}

/* Palabras seleccionadas */
.ace-halloween-pumpkin-night .ace_marker-layer .ace_selected-word {
  background-color: rgba(255, 128, 0, 0.2);
  border-radius: 2px;
}

/* Coincidencias */
.ace-halloween-pumpkin-night .ace_marker-layer .ace_occurrence {
  background: rgba(255, 183, 77, 0.1);
  border-radius: 2px;
}

/* Par\xE9ntesis / llaves */
.ace-halloween-pumpkin-night .ace_marker-layer .ace_bracket {
  border: 1px solid rgba(255, 143, 0, 0.65);
  background: rgba(11, 6, 6, 0.45);
  border-radius: 3px;
  margin: 0;
}

/* Invisibles */
.ace-halloween-pumpkin-night .ace_invisible {
  color: rgba(85, 68, 68, 0.5);
}

/* Palabras clave */
.ace-halloween-pumpkin-night .ace_keyword {
  color: #ff5722;
  font-weight: 600;
}

.ace-halloween-pumpkin-night .ace_keyword.ace_operator {
  color: #d1a18a;
}

/* Constantes y n\xFAmeros */
.ace-halloween-pumpkin-night .ace_constant.ace_language,
.ace-halloween-pumpkin-night .ace_constant.ace_numeric {
  color: #ff7043;
  font-weight: 600;
}

/* Strings */
.ace-halloween-pumpkin-night .ace_string {
  color: #ffb74d;
  text-shadow: none;
}

/* Comentarios */
.ace-halloween-pumpkin-night .ace_comment {
  color: #6d6875;
  font-style: italic;
}

/* Funciones */
.ace-halloween-pumpkin-night .ace_support.ace_function,
.ace-halloween-pumpkin-night .ace_entity.ace_name.ace_function {
  color: #ffee58;
}

/* Variables */
.ace-halloween-pumpkin-night .ace_variable {
  color: #f9e08a;
}

.ace-halloween-pumpkin-night .ace_variable.ace_language {
  color: #aed581;
}

.ace-halloween-pumpkin-night .ace_variable.ace_parameter {
  color: #00ffd9;
}

/* Clases y tipos */
.ace-halloween-pumpkin-night .ace_class {
  color: #ba68c8;
  font-weight: 600;
}

/* Tags y atributos */
.ace-halloween-pumpkin-night .ace_entity.ace_name.ace_tag {
  color: #00b2ff;
}

.ace-halloween-pumpkin-night .ace_entity.ace_other.ace_attribute-name {
  color: #ffcc80;
}

/* Indent guides */
.ace-halloween-pumpkin-night .ace_indent-guide {
  background: linear-gradient(90deg, rgba(255, 87, 34, 0.14), transparent);
}

.ace-halloween-pumpkin-night .ace_indent-guide-active {
  background: linear-gradient(90deg, rgba(255, 152, 0, 0.28), transparent);
}

/* Scrollbar */
.ace-halloween-pumpkin-night ::-webkit-scrollbar {
  width: 10px;
}

.ace-halloween-pumpkin-night ::-webkit-scrollbar-thumb {
  background: rgba(255, 140, 0, 0.16);
  border-radius: 6px;
}

/* Tooltip / Autocomplete */
.ace-halloween-pumpkin-night .ace_tooltip,
.ace-halloween-pumpkin-night .ace_autocomplete {
  color: #ffd8a8;
  background: rgba(11, 6, 6, 0.95);
  border: 1px solid rgba(255, 140, 0, 0.12);
  border-radius: 6px;
  box-shadow: 0 6px 24px rgba(11, 6, 6, 0.7);
}

/* Placeholder */
.ace-halloween-pumpkin-night .ace_placeholder {
  color: #a48c80;
  opacity: 0.9;
}

/* Sin offset por font */
.ace-halloween-pumpkin-night .ace_line {
  display: flex;
  align-items: baseline;
  height: 1.45em;
  position: relative;
}

/* Correcci\xF3n de transform visual */
.ace-halloween-pumpkin-night .ace_cursor-layer {
  transform: none !important;
}

/* Fin del tema */`});var f=b((d,r)=>{p();m();var t=acode.require("settings"),{editor:g}=editorManager,n="halloween-pumpkin-night";ace.define(`ace/theme/${n}.css`,["require","exports","module"],function(a,e,o){o.exports=h});ace.define(`ace/theme/${n}`,["require","exports","module",`ace/theme/${n}.css`,"ace/lib/dom"],function(a,e,o){e.isDark=!0,e.cssClass=`ace-${n}`,e.cssText=a(`./${n}.css`),a("ace/lib/dom").importCssString(e.cssText,e.cssClass,!1)});(function(){window.require([`ace/theme/${n}`],function(a){typeof r=="object"&&typeof d=="object"&&r&&(r.exports=a)})})();var l=class{constructor(){this.onThemeChange=this.onThemeChange.bind(this)}async init(){ace.require("ace/ext/themelist").themes.push({caption:n.split("-").map((o,i)=>i?o[0].toUpperCase()+o.slice(1):o.toUpperCase()).join(" "),theme:`ace/theme/${n}`,isDark:!0}),t.get("editorTheme")===n&&g.setTheme(`ace/theme/${n}`),t.on("update",this.onThemeChange)}async destroy(){t.off("update",this.onThemeChange)}onThemeChange(e){e===`ace/theme/${n}`&&(g.setTheme(`ace/theme/${n}`),t.update({editorTheme:n}))}};if(window.acode){let a=new l;acode.setPluginInit(c.id,(e,o,{cacheFileUrl:i,cacheFile:u})=>{e.endsWith("/")||(e+="/"),a.baseUrl=e,a.init(o,u,i)}),acode.setPluginUnmount(c.id,()=>{a.destroy()})}});f();})();
