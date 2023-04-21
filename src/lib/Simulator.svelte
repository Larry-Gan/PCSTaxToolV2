<script>
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';
  import { formatting_options, legendMargin } from './helper.js';

  /* Possible future updates: 
      Add options for stocks, bonds, cash
      Add 401k/IRA stuff once that's done
      Add option for debt/manually add asset classes
  */

  export let netIncome;
	Chart.register(legendMargin);
  const siteColor = "rgba(255, 255, 255, 0.87)";
	let savingsChart;
	let ctx;
	let chartCanvas;

  // helper function to generate year labels from start ear to end year
  function generateYearLabels(start, end) {
    let holder1 = []
    for (let i = start; i <= end; i++) {
      holder1.push(i);
    }
    // return list of years to display
    return holder1
  }

  // helper function to create simulation of future interest returns from start year to end year
  function simulateSavings(start, end) {
    let currAmt1 = initBalance;
    let currAmt2 = initBalance;
    let increases = netIncome - expenses;
    let holder1 = []
    let holder2 = []
    for (let i = start; i <= end; i++) {
      currAmt1 = compoundInterest(currAmt1, interestRate) + increases;
      holder1.push(currAmt1);
      currAmt2 += increases;
      holder2.push(currAmt2);
    }
    // return list of all deposits and total investments
    return [holder1, holder2]
  }

  function updateSimulation() {
    // Recalculates investments and updates chart with that data
    if (savingsChart){
        let simulationResults = simulateSavings(startYear, endYear)
        savingsChart.data.datasets[0].data = simulationResults[0];
        savingsChart.data.datasets[1].data = simulationResults[1];
        savingsChart.data.labels = generateYearLabels(startYear, endYear);
        savingsChart.update()
      }
  }

  // helper function to calculate interest after one year
  function compoundInterest(initBalance, interest) {
    return initBalance * (1 + (interest/100));
  }

  // Declare variables to hold simulator info
  let initBalance = 0;
  let expenses = 0;
  let interestRate = 7;
  let startYear = 2022;
  let endYear = 2065;

  // Do initial simulation 
  let simulationResults = simulateSavings(startYear, endYear)
	let interestSavings = simulationResults[0];
	let nonInterestSavings = simulationResults[1];
	let chartLabels = generateYearLabels(startYear, endYear);

	onMount(() => {
		  ctx = chartCanvas.getContext('2d');
			savingsChart = new Chart(ctx, {
				type: 'line',
				data: {
          labels: chartLabels,
          datasets: [
          {
            label: 'Total Portfolio',
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgb(54, 162, 235)',
            data: interestSavings
          },
          {
            label: 'Cumulative Contributions',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: nonInterestSavings
          },]
      },
      options: {
        responsive: true,
        elements: {
            point:{
                radius: 0,
                hoverRadius: 0
            }
        },
        plugins: {
          legend: {
            labels: {
                color: siteColor,
              }
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            // Format label into dollars
            callbacks: {
              label: function (context) {
                // Convert number into dollar format, taken directly from the chart.js website
                let label = context.dataset.label || '';

                if (label) {
                    label += ': ';
                }
                if (context.parsed !== null) {
                    label += new Intl.NumberFormat('en-US', formatting_options).format(context.parsed.y);
                }
                return label;
              }
            }
          }
        },
        hover: {
          mode: 'nearest',
          intersect: false
        },
        // delete background grids and set color of remaining grids
        scales: {
          x: {
            border: {
              display: false
            },
            ticks: {
              color: siteColor,
            },
            grid: {
              display:false
            },
          },
          y: {
            border: {
              display: false
            },
            ticks: {
              color: siteColor,
            },
            grid: {
              display: true,
              color: siteColor
            },
          }
        } 
      }
		});

	});

</script>
<h2>
  Savings and Investment Simulator:
</h2>
<form on:submit|preventDefault={updateSimulation}>
  <label for="fname">Start Year:</label>
  <input type="number" bind:value={startYear}>
  <label for="fname">End Year:</label>
  <input type="number"  bind:value={endYear}><br><br>
  <label for="fname">Initial Balance:</label>
  <input type="number" step=0.01 bind:value={initBalance}>
  <label for="fname">Net Income:</label>
  <input type="number" step=0.01 bind:value={netIncome}>
  <label for="fname">Annual Expenses:</label>
  <input type="number" step=0.01 bind:value={expenses}><br><br>
  <label for="fname">Interest Rate:</label>
  <input type="number" bind:value={interestRate}><br><br>
  <button type="submit" on:click={updateSimulation}>Simulate Savings!</button>
</form>
<br>
<canvas bind:this={chartCanvas} id="Income Simulator"></canvas>
