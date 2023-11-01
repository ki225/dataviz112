var ultimateColors = [
    ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)'],
    ['rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)'],
    ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)'],
    ['rgb(146, 123, 21)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)', 'rgb(175, 51, 21)', 'rgb(35, 36, 21)']
];

let myGraph_30 = document.getElementById("myGraph_30");

let trace1_30 ={};
trace1_30.type = "pie";
trace1_30.title = "國文";
trace1_30.labels = [];
trace1_30.values = [];
trace1_30.domain = {
    row:0,
    column:0
};
trace1_30.marker={
    colors:ultimateColors[0]
};
for(let x=0; x<evaluation_ratio_chi.length;x++){
    trace1_30.labels[x] = evaluation_ratio_chi[x]["name"];
    trace1_30.values[x] = evaluation_ratio_chi[x]["count"];
}

let trace2_30 ={};
trace2_30.type = "pie";
trace2_30.title = "英文";
trace2_30.labels = [];
trace2_30.values = [];
trace2_30.marker={
    colors:ultimateColors[1]
};
trace2_30.domain = {
    row:1,
    column:0
};
for(let x=0; x<evaluation_ratio_eng.length;x++){
    trace2_30.labels[x] = evaluation_ratio_eng[x]["name"];
    trace2_30.values[x] = evaluation_ratio_eng[x]["count"];
}

let trace3_30 ={};
trace3_30.type = "pie";
trace3_30.title = "數學";
trace3_30.labels = [];
trace3_30.values = [];
trace3_30.marker={
    colors:ultimateColors[2],
};
trace3_30.domain = {
    row: 0,
    column: 1
};
for(let x=0; x<evaluation_ratio_math.length;x++){
    trace3_30.labels[x] = evaluation_ratio_math[x]["name"];
    trace3_30.values[x] = evaluation_ratio_math[x]["count"];
}



let data_30 = [];
data_30.push(trace1_30);
data_30.push(trace2_30);
data_30.push(trace3_30);

let layout_30 = {
    margin:{
        t:20,
        l:10,
    },
    grid:{
        rows:2,
        columns:2
    }
};

Plotly.newPlot(myGraph_30,data_30,layout_30);
