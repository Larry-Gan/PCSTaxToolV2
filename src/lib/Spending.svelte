<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  import taxData from './data.json';
  import { generateRandomColors, formatting_options, legendMargin } from './helper.js';
  export let data;
  let chart;
	Chart.register(legendMargin);

  // Handle updates to the chart
  $: if (chart){
    chart.data.datasets[0].data = data;
    chart.update()
  }

  onMount(() => {
    const ctx = document.getElementById('myChart');
    // Generate chart colors on load
    let colors = generateRandomColors(taxData["budgetgroup"].length);
    let backgroundcolors = colors[0];
    let bordercolors = colors[1];
    
    // Generate chart
    // @ts-ignore
    chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: taxData["budgetgroup"],
        datasets: [{
          label: "Amount spent",
          data: data,
          backgroundColor: backgroundcolors,
          borderColor: bordercolors,
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins : {
          legend: {
            labels: {
              color: "rgba(255, 255, 255, 0.6)",
              }
          },
          tooltip : {
            // Remove label box
            boxWidth: 0,
            boxHeight: 0,
            // Format label into dollars
            callbacks: {
              label: function (context) {
                // Convert number into dollar format, taken directly from the chart.js website
                let label = context.dataset.label || '';

                if (label) {
                    label += ': ';
                }
                if (context.parsed !== null) {
                    label += new Intl.NumberFormat('en-US', formatting_options).format(context.parsed);
                }
                return label;
              }
            }
          },
        },
      }
    });
  });
</script>
  
<h2>
  Tax Spending Visualization:
</h2>
<div>
  <canvas id="myChart" width = "700" height = "700"></canvas>
</div>


  