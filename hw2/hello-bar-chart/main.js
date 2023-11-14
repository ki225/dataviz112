let myGraph = document.getElementById('myGraph');
let trace1={};
let trace2={};
trace1.type = "bar";
trace1.x=[];
trace1.y=[];
trace2.type = "bar";
trace2.x=[];
trace2.y=[];

for(let i=0;i<animals.length;i++){
    trace1.x[i] = animals[i]['name'];
    trace1.y[i] = animals[i]['count'];
}
for(let i=0;i<taipei_zoo_animals.length;i++){
    trace2.x[i] = taipei_zoo_animals[i]['name'];
    trace2.y[i] = taipei_zoo_animals[i]['count'];
}

let data=[];
data.push(trace1);
data.push(trace2);

let layout= {
    margin:{
        t:0
    }
};

Plotly.newPlot(myGraph,data,layout);