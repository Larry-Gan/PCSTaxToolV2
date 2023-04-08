<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
    import { budgetGroup } from './data.js';
    import { generateRandomColors } from './helper.js';
    export let data;
    let chart;

    $: if (chart){
			chart.data.datasets[0].data = data;
			chart.update()
		}

    onMount(() => {
      const ctx = document.getElementById('myChart');
      let colors = generateRandomColors(budgetGroup.length);
      let backgroundcolors = colors[0];
      let bordercolors = colors[1];
      // @ts-ignore
      chart = new Chart(ctx, {
        type: 'pie',
        data: {
          //labels: label,
          labels: budgetGroup,
          datasets: [{
            label: "Spending in USD",
            data: data,
            backgroundColor: backgroundcolors/*[
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ]*/,
            borderColor: bordercolors /*[
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ]*/,
            borderWidth: 1,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          // below currently doesn't do anything
          plugins : {
            tooltip : {
              boxWidth: 0,
              boxHeight: 0
            },
          }
        },
        
      });
    });
  </script>
  
  <canvas id="myChart" width = "700" height = "700"></canvas>

  