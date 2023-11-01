let myGraph_22 = document.getElementById('myGraph_22');
let trace1_22={};
let trace2_22={};
trace1_22.type = "bar";
trace1_22.name = "taipei zoo";
trace1_22.x=[];
trace1_22.y=[];
trace2_22.type = "bar";
trace2_22.name = "taipei zoo";
trace2_22.x=[];
trace2_22.y=[];

for(let i=0;i<Touyuan_zoo.length;i++){
    trace1_22.x[i] = touyuan_zoo[i]['name'];
    trace1_22.y[i] = touyuan_zoo[i]['count'];
}
for(let i=0;i<Taipei_zoo.length;i++){
    trace2_22.x[i] = taipei_zoo[i]['name'];
    trace2_22.y[i] = taipei_zoo[i]['count'];
}

let data_22=[];
data_22.push(trace1_22);
data_22.push(trace2_22);

let layout_22 = {
    margin:{
        t:0
    }
};

Plotly.newPlot(myGraph_22,data_22,layout_22);
