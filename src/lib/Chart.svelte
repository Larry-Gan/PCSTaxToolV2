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
          labels: budgetGroup,
          datasets: [{
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
                boxWidth: 0,
                boxHeight: 0,
                callbacks: {
                  label: function (context) {
                      return "$" + context.formattedValue;
                  }
                }
              },
            },
        }
      });
    });
  </script>
  
  <canvas id="myChart" width = "700" height = "700"></canvas>

  