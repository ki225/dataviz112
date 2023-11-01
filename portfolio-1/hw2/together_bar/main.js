let myGraph_21 = document.getElementById('myGraph_21');
let trace1_21={};
let trace2_21={};
let trace3_21={};

trace1_21.type = "bar";
trace1_21.name = "lion";
trace1_21.textfont = {
    color:'white',
    size: 10
};
trace1_21.x=[];
trace1_21.y=[];
trace2_21.type = "bar";
trace1_21.name = "tiger";
trace2_21.x=[];
trace2_21.y=[];
trace2_21.textfont = {
    color:'white',
    size: 10
};
trace3_21.type = "bar";
trace3_21.name = "monkey";
trace3_21.x=[];
trace3_21.y=[];
trace3_21.textfont = {
    color:'white',
    size: 10
};

trace1_21.x[0]="Taipei zoo";
trace1_21.y[0]=taipei_zoo[0]['count'];
trace1_21.x[1]="Touyuan zoo";
trace1_21.y[1]=touyuan_zoo[0]['count'];

//trace1.text = trace1.y;
//trace1.text = trace1.name+trace1.y;
let test_arr = [];
for(var i=0;i<2;i++){
    test_arr[i]=trace1_21.name+trace1_21.y[i];
}
console.log(test_arr);
trace1_21.text = test_arr;

trace2_21.x[0]="Taipei zoo";
trace2_21.y[0]=taipei_zoo[1]['count'];
trace2_21.x[1]="Touyuan zoo";
trace2_21.y[1]=touyuan_zoo[1]['count'];

trace2_21.text = trace2.y;

trace3_21.x[0]="Taipei zoo";
trace3_21.y[0]=taipei_zoo[2]['count'];
trace3_21.x[1]="Touyuan zoo";
trace3_21.y[1]=touyuan_zoo[2]['count'];

trace3_21.text = trace3_21.y;

let data_21=[];
data_21.push(trace1_21);
data_21.push(trace2_21);
data_21.push(trace3_21);

let layout_21 = {
    margin:{
        t:50
    },
    barmode:'stack'
};

Plotly.newPlot(myGraph_21,data_21,layout_21);