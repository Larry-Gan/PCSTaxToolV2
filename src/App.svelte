<script>
    import * as taxData from './lib/data.js';
    import * as helper from './lib/helper.js';
    import Chart from './lib/Chart.svelte';

    // Declare global variables to hold tax info
    let data = [0];
    let year = '2022';
    let marrStatus = 'Single';
    let grossIncome = 0;
    let prevGrossIncome = 0;
    let afterTaxIncome = 0;
    let totalTaxes = 0;
    let incomeTaxes = 0;
    let socialSecurityTaxes = 0;
    let medicareTaxes = 0;

    // May use this one later for updating text and pie chart
    function handleFormSubmission () {
        grossIncome = calcTaxes();
        updateChart();
    }

    function updateChart() {
        // Grab correct tax data for year
        let currYearTaxData = taxData.yearToTax[year];
        let govtSpendingPercents = currYearTaxData["budgetPercents"];

        // Calculate proportion of income taxes going towards each service
        let yourPayments = [medicareTaxes, socialSecurityTaxes];
        for (let i = 2; i < govtSpendingPercents.length; i++) {
            let taxAmount = govtSpendingPercents[i] * incomeTaxes;
            yourPayments.push(taxAmount);
        }

        // Return data to fill in chart.js chart
        return yourPayments;
    }

    function calcTaxes() {
        // Handle null cases and negative negative numbers by revereting them to the previous gross income
        if (grossIncome == null || grossIncome < 0) {
        grossIncome = prevGrossIncome;
        } else {
        prevGrossIncome = grossIncome;
        }

        // Grab correct tax data for year
        let currYearTaxData = taxData.yearToTax[year];

        // Calculate standard deduction and taxable income
        let standardDeduction = currYearTaxData["standardDeduction"][marrStatus];
        let taxableIncome = Math.max(grossIncome - standardDeduction, 0);

        // Calculate income tax
        incomeTaxes = helper.calcIncomeTaxes(taxableIncome, currYearTaxData, marrStatus);

        // Calculate fica
        let fica = helper.calcFicaTaxes(grossIncome, currYearTaxData, marrStatus);
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
      <input type="number" step=0.01 class = "income-entry" bind:value={grossIncome} on:input={calcTaxes}><br><br>
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
<p>Gross Income: {helper.turnToDollar(grossIncome)}</p>
<p>After Tax Income: {helper.turnToDollar(afterTaxIncome)}</p>
<p>Total Taxes Paid: {helper.turnToDollar(totalTaxes)}</p>
<p>Total Income Taxes Paid: {helper.turnToDollar(incomeTaxes)}</p>
<p>Total Medicare Taxes Paid: {helper.turnToDollar(medicareTaxes)}</p>
<p>Total Social Security Taxes Paid: {helper.turnToDollar(socialSecurityTaxes)}</p>

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
