<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  import taxData from './data.json';
  import { formatting_options } from './helper.js';
  export let data;
  let chart;

  // Handle updates to the chart
  $: if (chart){
    chart.data.datasets[0].data = data;
    chart.update()
  }

  onMount(() => {
    const ctx = document.getElementById('mySim');
    
    // Generate chart
    // @ts-ignore
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: taxData["budgetgroup"],
        datasets: [{
          label: "Amount spent",
          data: data,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins : {
          tooltip : {
            // Remove label box
            mode: 'index'
          },
        },
      }
    });
  });
</script>
  
<canvas id="mySim" width = "700" height = "700"></canvas>

  