import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../chunks/index.js";
const supportedYears = [
  {
    value: "2018",
    label: "2018"
  },
  {
    value: "2019",
    label: "2019"
  },
  {
    value: "2020",
    label: "2020"
  },
  {
    value: "2021",
    label: "2021"
  },
  {
    value: "2022",
    label: "2022"
  }
];
const personType = [{
  value: "single",
  label: "Single"
}, {
  value: "seperate",
  label: "Seperate"
}, {
  value: "together",
  label: "Together"
}, {
  value: "head",
  label: "Head"
}];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".index.svelte-109025x{text-align:center;margin:20px auto}.income-entry.svelte-109025x{width:50%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let yearlyIncome = 0;
  let year = "2022";
  let marrStatus = "single";
  let taxes = 0;
  let afterTax = 0;
  $$result.css.add(css);
  return `<div class="${"index svelte-109025x"}"><form><label for="${"fname"}">Yearly Income:</label>
        <input type="${"number"}" class="${"income-entry svelte-109025x"}"${add_attribute("value", yearlyIncome, 0)}><br><br>
        <label for="${"pin"}">Fiscal Year:</label>
        <select>${each(supportedYears, (supportedYear) => {
    return `<option${add_attribute("value", supportedYear.value, 0)}>${escape(supportedYear.label)}
                </option>`;
  })}</select>
        <label for="${"pin"}">Marital Status:</label>
        <select>${each(personType, (marry_status) => {
    return `<option${add_attribute("value", marry_status.value, 0)}>${escape(marry_status.label)}
                </option>`;
  })}</select>
        <br>
        <br>
        <input type="${"submit"}" value="${"Calculate Taxes!"}"></form></div> 

<p>Year: ${escape(year)}</p>
<p>Marital Status: ${escape(marrStatus)}</p>
<p>Income: ${escape(yearlyIncome)}</p>
<p>Total Taxes paid: ${escape(taxes)}</p>
<p>After Tax Income: ${escape(afterTax)}</p>

`;
});
export {
  Page as default
};
