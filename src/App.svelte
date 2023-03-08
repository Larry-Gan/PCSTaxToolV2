<script>
  import * as tax_data from './lib/data.js';

  let gross_income = 0;
  let year = '2022';
  let marrStatus = 'single';
  let taxes = 0;
  let afterTax = 0;

  // @ts-ignore
  function calcTaxes() {
      let standard_deduction = tax_data.yearToTax[year]["standard_deduction"][marrStatus];
      console.log(standard_deduction)
      let taxable_income = Math.max(gross_income - standard_deduction, 0);
      console.log(taxable_income);
      let income_taxes = 0;

      // grab correct tax data for year
      // @ts-ignore
      let currMap = tax_data.yearToTax[year];
      let rates = currMap["percents"];
      let salaries = currMap[marrStatus];
      let govtSpendingPercents = currMap["budget_percents"];

      // calculate income tax
      for (let i = 1; i < salaries.length; i++) {
          if (taxable_income >= salaries[i]) {
              income_taxes += (salaries[i] - salaries[i-1])*rates[i-1];
          } else {
              income_taxes += (taxable_income - salaries[i - 1])*rates[i-1];
          break;
          }
      }
      if (taxable_income > salaries[salaries.length-1]) {
          income_taxes += (taxable_income - salaries[salaries.length-1])*rates[rates.length-1];
      }

      // calculate fica
      let socSec = 0;
      if (taxable_income > currMap["ss"]) {
          socSec = currMap["ss"] * .062;
      } else {
          socSec = gross_income * .062;
      }
      let medicare = 0;
      if (marrStatus == "single" || marrStatus == "head") {
          if (taxable_income > 200000) {
          medicare = gross_income * .0145
          medicare += (gross_income - 200000) * .0235;
          } else {
          medicare = gross_income * .0145;
          }
      } else if (marrStatus == "seperate") {
          if (gross_income > 125000) {
          medicare = gross_income * .0145
          medicare += (gross_income - 125000) * .0235;
          } else {
          medicare = gross_income * .0145;
          }
      } else if (marrStatus == "together") {
          if (gross_income > 250000) {
          medicare = gross_income * .0145
          medicare += (gross_income - 250000) * .0235;
          } else {
          medicare = gross_income * .0145;
          }
      }

      // update tax info
      taxes = income_taxes + socSec + medicare;
      afterTax = gross_income - taxes;
      return gross_income;
      // TODO: code that fills in chart.js data
      /*let yourPayments = [medicare, socSec]
      for (let i = 2; i < govtSpendingPercents.length; i++) {
          yourPayments.push(govtSpendingPercents[i] * taxes);
      }*/
      //return taxes;
}
  
  

let answer = '';
  

</script>

<div class="index">
  <form on:submit|preventDefault={() => gross_income = calcTaxes()}>
      <label for="fname">Yearly Income:</label>
      <input type="number" class = "income-entry" bind:value={gross_income} on:input={calcTaxes}><br><br>
      <label for="pin">Fiscal Year:</label>
      <select bind:value={year} on:change={calcTaxes}>
          {#each tax_data.supportedYears as supportedYear}
              <option value={supportedYear.value}>
                  {supportedYear.label}
              </option>
          {/each}
      </select>
      <label for="pin">Marital Status:</label>
      <select bind:value={marrStatus} on:change={calcTaxes}>
          {#each tax_data.personType as marry_status}
              <option value={marry_status.value}>
                  {marry_status.label}
              </option>
          {/each}
      </select>
      <br>
      <br>
      <input type="submit" value="Calculate Taxes!">
    </form>
</div> 

<p>Year: {year}</p>
<p>Marital Status: {marrStatus}</p>
<p>Income: {gross_income}</p>
<p>Total Taxes paid: {taxes}</p>
<p>After Tax Income: {afterTax}</p>

<style>
  .index {
      text-align: center;
      margin: 20px auto;
  }
  .income-entry {
      width: 50%;
  }
</style>
