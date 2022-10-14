
const ctx = document.getElementById('myChart').getContext('2d');


const graphData = {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['rgba(143, 198, 230, 0.1)',],
            tension: 0.4
        },{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['rgba(73, 18, 230, 0.2)',],
            tension: 0.4
        },{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['rgba(173, 98, 230, 0.5)',],
            tension: 0.4
        },{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['rgba(23, 198, 230, 0.7)',],
            tension: 0.4
        }]
    },
    options: {}
}
const myChart = new Chart(ctx, graphData);

var socket = new WebSocket('ws://localhost:8000/ws/graph/')

socket.onmessage = function(e){
    var djangoData = JSON.parse(e.data);
    console.log(djangoData);

    //For 1st graph
    var newGraphData = graphData.data.datasets[0].data;
    newGraphData.shift();
    newGraphData.push(djangoData.value);
    graphData.data.datasets[0].data = newGraphData;

    //For 2nd graph
    var newGraphData = graphData.data.datasets[1].data;
    newGraphData.shift();
    newGraphData.push(djangoData.value2);
    graphData.data.datasets[1].data = newGraphData;

    //For 3rd graph
    var newGraphData = graphData.data.datasets[2].data;
    newGraphData.shift();
    newGraphData.push(djangoData.value3);
    graphData.data.datasets[2].data = newGraphData;

    //For 4th graph
    var newGraphData = graphData.data.datasets[3].data;
    newGraphData.shift();
    newGraphData.push(djangoData.value4);
    graphData.data.datasets[3].data = newGraphData;

    myChart.update();
    
}