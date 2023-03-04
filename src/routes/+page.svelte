<script>
    import * as tax_data from './data.js';
    /*import { Chart } from 'svelte-chartjs'
    import Chart from 'chart.js';
    import { onMount } from 'svelte';
    import {
        Chart as ChartJS,
        Tooltip,
        Legend,
        BarElement,
        PointElement,
        LineElement,
        CategoryScale,
        LinearScale,
        LineController,
        BarController,
    } from 'chart.js';

    ChartJS.register(
        LinearScale,
        CategoryScale,
        BarElement,
        PointElement,
        LineElement,
        Legend,
        Tooltip,
        LineController,
        BarController
    );
    let ctx;
	/**
     * @type {HTMLCanvasElement}
     */
	/*let chartCanvas;
    let chartData = tax_data.defaultSpend2022;
    onMount(async () => {
		  ctx = chartCanvas.getContext('2d');
			// @ts-ignore
			var chart = new Chart(ctx, tax_data.defaultSpend2022);

	});
    */
    let yearlyIncome = 0;
    let year = '2022';
    let marrStatus = 'single';
    let taxes = 0;
    let afterTax = 0;

    // @ts-ignore
    function calcTaxes() {
		let intIncome = yearlyIncome //parseInt(yearlyIncome);
        let curr_taxes = 0;

        // grab correct tax data for year
        // @ts-ignore
        let currMap = tax_data.yearToTax[year];
        let rates = currMap["percents"];
        let salaries = currMap[marrStatus];
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
        taxes = curr_taxes + socSec + medicare;
        afterTax = intIncome - taxes;

        // code that fills in chart data
        /*let yourPayments = [medicare, socSec]
        for (let i = 2; i < govtSpendingPercents.length; i++) {
            yourPayments.push(govtSpendingPercents[i] * taxes);
        }*/
        //return taxes;
	}
    
    

	let answer = '';
    

</script>

<div class="index">
    <form>
        <label for="fname">Yearly Income:</label>
        <input type="number" class = "income-entry" bind:value={yearlyIncome}><br><br>
        <label for="pin">Fiscal Year:</label>
        <select bind:value={year} on:change="{() => answer = ''}">
            {#each tax_data.supportedYears as supportedYear}
                <option value={supportedYear.value}>
                    {supportedYear.label}
                </option>
            {/each}
        </select>
        <label for="pin">Marital Status:</label>
        <select bind:value={marrStatus} on:change="{() => answer = ''}">
            {#each tax_data.personType as marry_status}
                <option value={marry_status.value}>
                    {marry_status.label}
                </option>
            {/each}
        </select>
        <br>
        <br>
        <input on:click={calcTaxes} type="submit" value="Calculate Taxes!">
      </form>
</div> 

<p>Year: {year}</p>
<p>Marital Status: {marrStatus}</p>
<p>Income: {yearlyIncome}</p>
<p>Total Taxes paid: {taxes}</p>
<p>After Tax Income: {afterTax}</p>

<!--<canvas bind:this={chartCanvas} id="myChart"></canvas>
<Chart bind:chart type="pie" {chartData}/>-->

<style>
    .index {
        text-align: center;
        margin: 20px auto;
    }
    .income-entry {
        width: 50%;
    }
</style>
