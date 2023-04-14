<script>
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';
	let chart;

  export let savings;
  export let startYear;
  export let endYear;

  function generateLabels(start, end) {
    let holder1 = []
    for (let i = start; i <= end; i++) {
      holder1.push(i);
    }
    return holder1
  }

  function generateData(start, end, offset) {
    let holder1 = []
    let holder2 = []
    for (let i = start; i <= end; i++) {
      holder1.push(i);
      holder2.push(i + offset)
    }
    return [holder1, holder2]
  }

  function compoundInterest(initBalance, interest) {
    return initBalance * (1 + interest);
  }

  let temp = generateData(0, endYear - startYear, 3)
	let chartValues = temp[0];
	let chartValues2 = temp[1];
	let chartLabels = generateLabels(startYear, endYear);
	let ctx;
	let chartCanvas;

  // Handle updates to the chart
  $: if (chart){
    let temp = generateData(0, endYear - startYear, 3)
    chart.data.datasets[0].data = temp[0];
    chart.data.datasets[1].data = temp[1];
    chart.data.labels = generateLabels(startYear, endYear);
    chart.update()
  }

	onMount(async (promise) => {
		  ctx = chartCanvas.getContext('2d');
			chart = new Chart(ctx, {
				type: 'line',
				data: {
						labels: chartLabels,
						datasets: [{
								label: 'Revenue',
								backgroundColor: 'rgb(255, 99, 132)',
								borderColor: 'rgb(255, 99, 132)',
								data: chartValues
						},
            {
								label: 'Revenue',
								backgroundColor: 'rgb(255, 205, 86)',
								borderColor: 'rgb(255, 205, 86)',
								data: chartValues2
						}]
				},
        options: {
          responsive: true,
        } 
		});

	});

</script>


<canvas bind:this={chartCanvas} id="myChart" style="background-color: #fff;"></canvas>
