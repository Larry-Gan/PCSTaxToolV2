<script>
  import * as taxData from './lib/data.js';
  import * as helper from './lib/helper.js';
  import Chart from './lib/Chart.svelte';

  let data = [0];
  let year = '2022';
  let marrStatus = 'Single';
  let grossIncome = 0;
  let afterTaxIncome = 0;
  let totalTaxes = 0;
  let incomeTaxes = 0;
  let socialSecurityTaxes = 0;
  let medicareTaxes = 0;

  function updateChart() {
      // Grab correct tax data for year
      let currMap = taxData.yearToTax[year];
      let govtSpendingPercents = currMap["budgetPercents"];

      // Calculate proportion of income taxes going towards each service
      let yourPayments = [medicareTaxes, socialSecurityTaxes]
      for (let i = 2; i < govtSpendingPercents.length; i++) {
          yourPayments.push(govtSpendingPercents[i] * incomeTaxes);
      }

      // Return data to fill in chart.js chart
      return yourPayments;
  }

  function calcTaxes() {
      // Calculate standard deduction and taxable income
      let standardDeduction = taxData.yearToTax[year]["standardDeduction"][marrStatus];
      let taxableIncome = Math.max(grossIncome - standardDeduction, 0);
      
      // Grab correct tax data for year
      let currMap = taxData.yearToTax[year];

      // Calculate income tax
      incomeTaxes = helper.calcIncomeTaxes(taxableIncome, currMap, marrStatus);

      // Calculate fica
      let fica = helper.calcFicaTaxes(grossIncome, currMap, marrStatus);
      socialSecurityTaxes = fica[0];
      medicareTaxes = fica[1];

      // Update tax info
      totalTaxes = incomeTaxes + socialSecurityTaxes + medicareTaxes;
      afterTaxIncome = grossIncome - totalTaxes;

      // Return grossIncome, which prevents variable from being changed on form submission
      return grossIncome;
}

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
      <button type="submit" on:click={() => data = updateChart()}>Visualize Taxes!</button>
    </form>
</div> 

<p>Year: {year}</p>
<p>Marital Status: {marrStatus}</p>
<p>Gross Income: {grossIncome}</p>
<p>After Tax Income: {afterTaxIncome}</p>
<p>Total Taxes Paid: {totalTaxes}</p>
<p>Total Income Taxes Paid: {incomeTaxes}</p>
<p>Total Medicare Taxes Paid: {medicareTaxes}</p>
<p>Total Social Security Taxes Paid: {socialSecurityTaxes}</p>

<div>
    <Chart {data}/>
</div>
<style>
  .index {
      text-align: center;
      margin: 20px auto;
  }
  .income-entry {
      width: 50%;
  }
</style>
