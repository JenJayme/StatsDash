import React from 'react';
import Chart from 'chart.js';
// import firebase from 'firebase';
// import API from '../../utils/API';
// import performance from "../../utils/performanceSeeds.json";

export default class RadarChart extends React.Component {

    constructor(props) {
        super(props);

    this.state = {
        performance: props.performance
    }};

    componentDidMount() {
       
        const canvas = document.getElementById('myChart');
        const ctx = canvas.getContext('2d');

        
        const color = [
            'rgba(184,60,19,.5)',
            'rgba(88,52,33,.5)',
            'rgba(224,207,148,.5)',
            'rgba(56,145,145,.5)',
            'rgba(69,75,84,.5)',
            'rgba(88,98,86,.5)' 
        ];

        var fillerArr = []
        this.state.performance.map((match, i) => {
            fillerArr.push( {
                label: match.gamerTag,
                data: [match.clutchKills, match.revives, match.gulagKills, match.gulagDeaths, match.placement],
                // fill: false,
                borderColor: color[i],
                radius: 1,
                pointRadius: 2,
                pointBorderColor: color[i],
                pointBackgroundColor: color[i],
                pointBorderWidth: 2,
                backgroundColor: color[i],
                borderWidth: 1
            })
        })

        const myChart = new Chart(ctx, {
            type: "radar",
            data: {
                labels: ["Last Standing Kills", "Revives", "Gulag Kills", "Gulag Deaths", "Wins"],
                datasets: fillerArr
            },

            options: {
                legend: {
                    display: true,
                    position: 'top'
                },
                scale: {
                    angleLines: {
                        display: false
                    },
                    ticks: {
                        // suggestedMin: 50,
                        // suggestedMax: 100,
                        beginAtZero: true
                    }
                },
                responsive: true,
            }
    
        });
    }

    render() {
        return (
            
            <div  >
                <canvas id="myChart" />
            </div>
        );
    }
}