class EvolutionChart{
    constructor(can){
        this.configInfo = {
          type: "line",
          data: {
            labels: [],
            datasets: [
              {
                label: "Fitness Avg",
                data: [],
                backgroundColor: ["rgba(255,0,0,0.2)"],
                borderColor: ["rgba(255,0,0,0.75)"],
                borderWidth: 1
              }
            ]
          },
          options: {
            responsive: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }
        };
        this.can = can;
        this.chart = new Chart(this.can, this.configInfo);

    }
}
