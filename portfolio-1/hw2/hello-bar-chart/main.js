let myGraph_20 = document.getElementById('myGraph_20');
let trace1_20={};
let trace2_20={};
trace1_20.type = "bar";
trace1_20.x=[];
trace1_20.y=[];
trace2_20.type = "bar";
trace2_20.x=[];
trace2_20.y=[];

for(let i=0;i<animals.length;i++){
    trace1_20.x[i] = animals[i]['name'];
    trace1_20.y[i] = animals[i]['count'];
}
for(let i=0;i<taipei_zoo_animals.length;i++){
    trace2_20.x[i] = taipei_zoo_animals[i]['name'];
    trace2_20.y[i] = taipei_zoo_animals[i]['count'];
}

let data_20=[];
data_20.push(trace1_20);
data_20.push(trace2_20);

let layout_20 = {
    margin:{
        t:0
    }
};

Plotly.newPlot(myGraph_20,data_20,layout_20);