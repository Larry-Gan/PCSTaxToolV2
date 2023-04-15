<script>
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';
  import {formatting_options } from './helper.js';
  /* TODO: 
      Add filtering for inputs so they all look okay
      Add options for stocks, bonds, cash
      Color match with the rest of the text
      Clean up code
  */
	let savingsChart;

  export let netIncome;

  let initBalance = 0;
  let expenses = 0;
  let interestRate = 7;
  let startYear = 2022;
  let endYear = 2065;

  function generateLabels(start, end) {
    let holder1 = []
    for (let i = start; i <= end; i++) {
      holder1.push(i);
    }
    return holder1
  }

  function generateData(start, end) {
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
    return [holder1, holder2]
  }

  function updateChart() {
    // Handle updates to the chart
    if (savingsChart){
        let temp = generateData(startYear, endYear)
        savingsChart.data.datasets[0].data = temp[0];
        savingsChart.data.datasets[1].data = temp[1];
        savingsChart.data.labels = generateLabels(startYear, endYear);
        savingsChart.update()
      }
  }

  function compoundInterest(initBalance, interest) {
    return initBalance * (1 + (interest/100));
  }

  let temp = generateData(0, endYear - startYear)
	let interestSavings = temp[0];
	let nonInterestSavings = temp[1];
	let chartLabels = generateLabels(startYear, endYear);
	let ctx;
	let chartCanvas;

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
          plugins: {
            legend: {
              labels: {
                    color: "white",
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
          scales: {
            x: {
              border: {
                display: false
              },
              ticks: {
                color: 'white',
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
                color: 'white',
              },
              grid: {
                display: true,
                color: "white"
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
<form on:submit|preventDefault={updateChart}>
  <label for="fname">Start Year:</label>
  <input type="number" bind:value={startYear}>
  <label for="fname">End Year:</label>
  <input type="number"  bind:value={endYear}><br><br>
  <label for="fname">Net Income:</label>
  <input type="number" step=0.01 bind:value={netIncome}>
  <label for="fname">Initial Balance:</label>
  <input type="number" step=0.01 bind:value={initBalance}>
  <label for="fname">Annual Expenses:</label>
  <input type="number" step=0.01 bind:value={expenses}><br><br>
  <label for="fname">Interest Rate:</label>
  <input type="number" bind:value={interestRate}><br><br>
  <button type="submit" on:click={updateChart}>Simulate Savings!</button>
</form>
<br>
<canvas bind:this={chartCanvas} id="Income Simulator"></canvas>
