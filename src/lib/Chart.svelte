<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  import { budgetGroup } from './data.js';
  import { generateRandomColors, formatting_options } from './helper.js';
  export let data;
  let chart;

  // Handle updates to the chart
  $: if (chart){
    chart.data.datasets[0].data = data;
    chart.update()
  }

  onMount(() => {
    const ctx = document.getElementById('myChart');
    // Generate chart colors on load
    let colors = generateRandomColors(budgetGroup.length);
    let backgroundcolors = colors[0];
    let bordercolors = colors[1];
    
    // Generate chart
    // @ts-ignore
    chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: budgetGroup,
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
  
<canvas id="myChart" width = "700" height = "700"></canvas>

  