// get csv file
d3.csv('hw2/data/醫療院所每萬人口病床數－按縣市別分.csv').then(
    res2=>{
        //console.log('Local CSV:',res)
        // 把畫圖的 code 貼到此處
        draw_bar_chart(res2);
    }
);
d3.csv('hw2/data/機構執業醫事人員數及每萬人口執業醫事人員數.csv').then(
    res2_1=>{
        //console.log('Local CSV:',res)
        // 把畫圖的 code 貼到此處
        draw_together_bar_chart(res2_1);
    }
);
function draw_bar_chart(res2){
    console.log(res2);
    let myGraph_20 = document.getElementById('myGraph_20');
    let trace1_20={};
    trace1_20.type = "bar";
    trace1_20.x=[];
    trace1_20.y=[];
    trace1_20.name="一般病床";
    let trace2_20={};
    trace2_20.type = "bar";
    trace2_20.x=[];
    trace2_20.y=[];
    trace2_20.name="特殊病床";
    let trace3_20={};
    trace3_20.type = "bar";
    trace3_20.x=[];
    trace3_20.y=[];
    trace3_20.name="診所病床";

    for(let i=0;i<res2.length;i++){
        trace1_20.y[i] = res2[i]["一般病床"];
        trace2_20.y[i] = res2[i]["特殊病床"];
        trace3_20.y[i] = res2[i]["診所病床"];
    }
    for(let i=0;i<res2.length;i++){
        trace1_20.x[i] = res2[i]["縣市"];
        trace2_20.x[i] = res2[i]["縣市"];
        trace3_20.x[i] = res2[i]["縣市"];
    }


    let data_20=[trace1_20,trace2_20,trace3_20];

    let layout_20 = {
        xaxis: {
            title: '縣市', 
        },yaxis: {
            title: '病床數(床數/萬人)', 
        },margin:{
            t:0
        }
    };
    Plotly.newPlot(myGraph_20,data_20,layout_20);
}

function draw_together_bar_chart(res2_2){
    console.log(res2_2);
    let myGraph_21 = document.getElementById('myGraph_21');
    let trace1_21={};
    trace1_21.type = "bar";
    trace1_21.x=[];
    trace1_21.y=[];
    trace1_21.name="西醫師";
    let trace2_21={};
    trace2_21.type = "bar";
    trace2_21.x=[];
    trace2_21.y=[];
    trace2_21.name="中醫師";
    let trace3_21={};
    trace3_21.type = "bar";
    trace3_21.x=[];
    trace3_21.y=[];
    trace3_21.name="牙醫師";
    let trace4_21={};
    trace4_21.type = "bar";
    trace4_21.x=[];
    trace4_21.y=[];
    trace4_21.name="藥師";
    let trace5_21={};
    trace5_21.type = "bar";
    trace5_21.x=[];
    trace5_21.y=[];
    trace5_21.name="藥劑生";
    let trace6_21={};
    trace6_21.type = "bar";
    trace6_21.x=[];
    trace6_21.y=[];
    trace6_21.name="醫事檢驗師";
    let trace7_21={};
    trace7_21.type = "bar";
    trace7_21.x=[];
    trace7_21.y=[];
    trace7_21.name="醫事檢驗生";
    let trace8_21={};
    trace8_21.type = "bar";
    trace8_21.x=[];
    trace8_21.y=[];
    trace8_21.name="醫事放射師";
    let trace9_21={};
    trace9_21.type = "bar";
    trace9_21.x=[];
    trace9_21.y=[];
    trace9_21.name="醫事放射士";
    let trace10_21={};
    trace10_21.type = "bar";
    trace10_21.x=[];
    trace10_21.y=[];
    trace10_21.name="護理師";
    let trace11_21={};
    trace11_21.type = "bar";
    trace11_21.x=[];
    trace11_21.y=[];
    trace11_21.name="護士";
    let trace12_21={};
    trace12_21.type = "bar";
    trace12_21.x=[];
    trace12_21.y=[];
    trace12_21.name="助產師";
    let trace13_21={};
    trace13_21.type = "bar";
    trace13_21.x=[];
    trace13_21.y=[];
    trace13_21.name="助產士";
    let trace14_21={};

    for(let i=0;i<res2_2.length;i++){
        trace1_21.y[i] = res2_2[i]["西醫師"];
        trace2_21.y[i] = res2_2[i]["中醫師"];
        trace3_21.y[i] = res2_2[i]["牙醫師"];
        trace4_21.y[i] = res2_2[i]["藥師"];
        trace5_21.y[i] = res2_2[i]["藥劑生"];
        trace6_21.y[i] = res2_2[i]["醫事檢驗師"];
        trace7_21.y[i] = res2_2[i]["醫事檢驗生"];
        trace8_21.y[i] = res2_2[i]["醫事放射師"];
        trace9_21.y[i] = res2_2[i]["醫事放射士"];
        trace10_21.y[i] = res2_2[i]["護理師"];
        trace11_21.y[i] = res2_2[i]["護士"];
        trace12_21.y[i] = res2_2[i]["助產師"];
        trace13_21.y[i] = res2_2[i]["助產士"];
    }
    for(let i=0;i<res2_2.length;i++){
        trace1_21.x[i] = res2_2[i]["縣市"];
        trace2_21.x[i] = res2_2[i]["縣市"];
        trace3_21.x[i] = res2_2[i]["縣市"];
        trace4_21.x[i] = res2_2[i]["縣市"];
        trace5_21.x[i] = res2_2[i]["縣市"];
        trace6_21.x[i] = res2_2[i]["縣市"];
        trace7_21.x[i] = res2_2[i]["縣市"];
        trace8_21.x[i] = res2_2[i]["縣市"];
        trace9_21.x[i] = res2_2[i]["縣市"];
        trace10_21.x[i] = res2_2[i]["縣市"];
        trace11_21.x[i] = res2_2[i]["縣市"];
        trace12_21.x[i] = res2_2[i]["縣市"];
        trace13_21.x[i] = res2_2[i]["縣市"];
    }

    let data_21=[trace1_21,trace2_21,trace3_21,trace4_21,trace5_21,trace6_21,trace7_21,trace8_21,trace9_21,trace10_21,trace11_21,trace12_21,trace13_21,trace14_21];

    let layout_21 = {
        xaxis: {
            title: '縣市', 
        },yaxis: {
            title: '人數(人)', 
        },margin:{
            t:0
        },barmode:'stack'
    };
    Plotly.newPlot(myGraph_21,data_21,layout_21);
}
