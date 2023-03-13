<script>
  import * as tax_data from './lib/data.js';

  let yearlyIncome = 0;
  let year = '2022';
  let marrStatus = 'single';
  let capGainsMarrStatus = 'LT_capital_gains_' + marrStatus;
  let taxes = 0;
  let afterTax = 0;
  let capitalGainsShortTerm = 0;
  let capitalGainsLongTerm = 0;
  //let hasCapital = false;

  // @ts-ignore
  function calcTaxes() {
      let shortTermCapGains = capitalGainsShortTerm;
      let longTermGapGains = capitalGainsLongTerm;
      let intIncome = yearlyIncome + capitalGainsShortTerm; //short-term cap gains tax is considered as part of your yearly income
      
      let curr_taxes = 0;

      // grab correct tax data for year
      // @ts-ignore
      let currMap = tax_data.yearToTax[year];
      let rates = currMap["percents"];
      let capGainsRates = currMap["LT_capital_gains_percents"]
      let salaries = currMap[marrStatus];
      let capGains = currMap[capGainsMarrStatus];
      let govtSpendingPercents = currMap["budget_percents"];

      // calculate income tax
      for (let i = 1; i < salaries.length; i++) {
          if (intIncome >= salaries[i]) {
              curr_taxes += (salaries[i] - salaries[i-1])*rates[i-1];
          } else {
              curr_taxes += (intIncome - salaries[i - 1])*rates[i-1];
          break;
          }
      }
      if (intIncome > salaries[salaries.length-1]) {
          curr_taxes += (intIncome - salaries[salaries.length-1])*rates[rates.length-1];
      }
      
      // calculate long-term capital gains tax
      let capitalGainsLongTermTax = 0;

      for (let i = 1; i < capGains.length; i++) {
          if (capitalGainsLongTerm >= capGains[i]) {
            capitalGainsLongTermTax += (capGains[i] - capGains[i-1])*capGainsRates[i-1];
          } else {
              capitalGainsLongTermTax += (capitalGainsLongTerm - capGains[i - 1])*capGainsRates[i-1];
          break;
          }
      }
      if (capitalGainsLongTerm > capGains[capGains.length-1]) {
        capitalGainsLongTermTax += (capitalGainsLongTerm - capGains[capGains.length-1])*capGainsRates[capGainsRates.length-1];
      }



      // calculate fica
      let socSec = 0;
      if (intIncome > currMap["ss"]) {
          socSec = currMap["ss"] * .062;
      } else {
          socSec = intIncome * .062;
      }
      let medicare = 0;
      if (marrStatus == "single" || marrStatus == "head") {
          if (intIncome > 200000) {
          medicare = intIncome * .0145
          medicare += (intIncome - 200000) * .0235;
          } else {
          medicare = intIncome * .0145;
          }
      } else if (marrStatus == "seperate") {
          if (intIncome > 125000) {
          medicare = intIncome * .0145
          medicare += (intIncome - 125000) * .0235;
          } else {
          medicare = intIncome * .0145;
          }
      } else if (marrStatus == "together") {
          if (intIncome > 250000) {
          medicare = intIncome * .0145
          medicare += (intIncome - 250000) * .0235;
          } else {
          medicare = intIncome * .0145;
          }
      }

      // update tax info
      taxes = curr_taxes + socSec + medicare + capitalGainsLongTermTax;

      // according to ChatGPT (very reputable source ikik),
      // LT capital gains is reported as part of your income, even though they're taxed differently
      afterTax = (capitalGainsLongTerm - capitalGainsLongTermTax) + intIncome - taxes;
      return yearlyIncome;
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
  <form on:submit|preventDefault={() => yearlyIncome = calcTaxes()}>
      <label for="fname">Yearly Income:</label>
      <input type="number" class = "income-entry" bind:value={yearlyIncome} on:input={calcTaxes}><br><br>
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
      <label for="fname">Short-Term Capital Gains:</label>
      <input type="number" class = "income-entry" bind:value={capitalGainsShortTerm} on:input={calcTaxes}><br><br>
      <label for="fname">Long-Term Capital Gains:</label>
      <input type="number" class = "income-entry" bind:value={capitalGainsLongTerm} on:input={calcTaxes}><br><br>
      <br>
      <br>
      <input type="submit" value="Calculate Taxes!">
    </form>
</div> 

<p>Year: {year}</p>
<p>Marital Status: {marrStatus}</p>
<p>Income: {yearlyIncome}</p>
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
