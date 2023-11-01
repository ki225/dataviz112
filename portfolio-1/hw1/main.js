let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.visible = true;
trace1.mode = "markers";
trace1.type = "scatter";
trace1.x = [];
trace1.y = [];
trace1.text = [];
trace1.name = "classA";
trace1.marker = {
    size:10 //點點大小
};

let trace2 = {};
trace2.vivible = false;
trace2.mode = "lines";
trace2.type = "scatter";
trace2.x = [];
trace2.y = [];
trace2.text = [];
trace2.name = "class B";


for(let i=0;i<set1.length;i++){
    trace1.x[i] = set1[i][0];
    trace1.y[i] = set1[i][1];
    trace1.text[i] = set1[i][2];
}

for(let i=0;i<set2.length;i++){
    trace2.x[i] = set2[i][0];
    trace2.y[i] = set2[i][1];
    trace2.text[i] = set2[i][2];
}

let data=[];
data.push(trace1);
data.push(trace2);

let layout ={
    margin:{
        t:0
    },
    updatemenus:[
        {
            y:1.2,
            x:0.3,
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible',[true,false]],
                    label:'teamA'
                },{
                    method:'restyle',
                    args:['visible',[false,true]],
                    label:'teamB'
                },{
                    method:'restyle',
                    args:['visible',[true,true,true]],
                    label:'displayAll'
                }
            ]
        }
    ]
};



Plotly.newPlot(myGraph, data, layout);
// plotly 的屬性結構只有「作用對象」、「指定徒刑與資料」、「排版呈現」