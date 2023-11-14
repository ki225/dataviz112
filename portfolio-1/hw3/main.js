d3.csv('hw3/data/2012-2021各年度我國學生赴主要留學國家留學簽證人數統計表.csv').then(
    res3_1 => {
        draw_pie_chart2(res3_1);
    }
);

draw_pie_chart();

function draw_pie_chart(){
    let myGraph_30 = document.getElementById("myGraph_30");

    let trace1_30 ={};
    trace1_30.type = "pie";
    trace1_30.title = "2021年國人出國留學概況";
    trace1_30.labels = [];
    trace1_30.values = [];

    for(let x=0; x<set3.length;x++){
        trace1_30.labels[x] = set3[x]["country"];
        trace1_30.values[x] = set3[x]["num"];
    }

    let data_30 = [];
    data_30.push(trace1_30);


    let layout_30 = {
        margin:{
            t:20,
            l:10,
        }
    };

    Plotly.newPlot(myGraph_30,data_30,layout_30);

}

function draw_pie_chart2(res3_1){
    console.log(res3_1);
    let myGraph_31 = document.getElementById("myGraph_31");

    let trace1_31 ={};
    trace1_31.type = "pie";
    trace1_31.title = "2015年國人出國留學概況";
    trace1_31.labels = [];
    trace1_31.values = [];
    trace1_31.hole = 0.5;
    trace1_31.domain = {
        row:0,
        column:0
    };

    let trace2_31 ={};
    trace2_31.type = "pie";
    trace2_31.title = "2017年國人出國留學概況";
    trace2_31.labels = [];
    trace2_31.values = [];
    trace2_31.hole = 0.5;
    trace2_31.domain = {
        row:0,
        column:1
    };
    let trace3_31 ={};
    trace3_31.type = "pie";
    trace3_31.title = "2019年國人出國留學概況";
    trace3_31.labels = [];
    trace3_31.values = [];
    trace3_31.hole = 0.5;
    trace3_31.domain = {
        row:1,
        column:0
    };
    let trace4_31 ={};
    trace4_31.type = "pie";
    trace4_31.title = "2021年國人出國留學概況";
    trace4_31.labels = [];
    trace4_31.values = [];
    trace4_31.hole = 0.5;
    trace4_31.domain = {
        row:1,
        column:1
    };

    for(let x=0; x<res3_1.length;x++){
        trace1_31.labels[x] = res3_1[x]["國別"];
        trace1_31.values[x] = res3_1[x]["2015"];
        trace2_31.labels[x] = res3_1[x]["國別"];
        trace2_31.values[x] = res3_1[x]["2017"];
        trace3_31.labels[x] = res3_1[x]["國別"];
        trace3_31.values[x] = res3_1[x]["2019"];
        trace4_31.labels[x] = res3_1[x]["國別"];
        trace4_31.values[x] = res3_1[x]["2021"];
    }

    let data_31 = [trace1_31,trace2_31,trace3_31,trace4_31];


    let layout_31 = {
        margin:{
            t:20,
            l:10,
        },grid:{
            rows:2,
            columns:2
        }
    };
    Plotly.newPlot(myGraph_31,data_31,layout_31);
}

