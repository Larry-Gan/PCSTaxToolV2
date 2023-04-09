<script>
//   import * as taxData from './lib/data.js';
  import taxData from './lib/data.json';
  import * as helper from './lib/helper.js';

  let grossIncome = 0;
  let year = "2022";
  let marrStatus = "single";
  let totalTaxes = 0;
  let afterTax = 0;

  function calcTaxes() {
      // calculate standard deduction and taxable income
      const mapping = "mappings"+year;
      let standardDeduction = taxData.yearToTax[year][mapping]["standardDeduction"][marrStatus];

      let taxableIncome = Math.max(grossIncome - standardDeduction, 0);
     
      // grab correct tax data for year
      let currMap = taxData.yearToTax[year][mapping];
      
    //   console.log(currMap2[mapping]["percents"])
      let govtSpendingPercents = currMap["budgetPercents"];

      // calculate income tax
      let incomeTaxes = helper.calcIncomeTaxes(taxableIncome, currMap, marrStatus);

      // calculate fica
      let fica = helper.calcFicaTaxes(grossIncome, currMap, marrStatus);
      let socSec = fica[0];
      let medicare = fica[1];

      // update tax info
      totalTaxes = incomeTaxes + socSec + medicare;
      afterTax = grossIncome - totalTaxes;

      // return grossIncome 
      return grossIncome;
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
  <form on:submit|preventDefault={() => grossIncome = calcTaxes()}>
      <label for="fname">Yearly Income:</label>
      <input type="number" class = "income-entry" bind:value={grossIncome} on:input={calcTaxes}><br><br>
      <label for="pin">Fiscal Year:</label>
      <select bind:value={year} on:change={calcTaxes}>
          {#each taxData.supportedYears as supportedYear}
              <option value={supportedYear.value}>
                  {supportedYear.label}
              </option>
          {/each}
      </select>
      <label for="pin">Marital Status:</label>
      <select bind:value={marrStatus} on:change={calcTaxes}>
          {#each taxData.personType as marryStatus}
              <option value={marryStatus.value}>
                  {marryStatus.label}
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
<p>Income: {grossIncome}</p>
<p>Total taxes paid: {totalTaxes}</p>
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
