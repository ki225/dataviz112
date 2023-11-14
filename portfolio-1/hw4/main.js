d3.csv('hw4/data/110年外籍學生就讀台灣公私立大學人數統計.csv').then(
    res => {
        drawHistogram(res);
    }
);

d3.csv('hw4/data/106學年大專校院境外學生人數統計.csv').then(
    res4 => {
        drawHistogram_with_true_data(res4);
    }
);

function drawHistogram(res){
    console.log(res);
    let myGraph_40 = document.getElementById('myGraph_40');

    let trace1_40 = {};
    trace1_40.type = "histogram";
    trace1_40.opacity = 0.5;
    trace1_40.name = "正式修讀學位僑生(含港澳)學校數";
    trace1_40.x=[];
    // 結果落在區域限制
    trace1_40.xbins = {
        size:300,
        start:1,
        end:4000 
    };

    let trace2_40 = {};
    trace2_40.type = "histogram";
    trace2_40.opacity = 0.5;
    trace2_40.name = "正式修讀學位外籍學生學校數";
    trace2_40.x=[];
    // 結果落在區域限制
    trace2_40.xbins = {
        size:300,
        start:1,
        end:4000
    };
    let trace3_40 = {};
    trace3_40.type = "histogram";
    trace3_40.opacity = 0.5;
    trace3_40.name = "正式修讀學位陸生學校數";
    trace3_40.x=[];
    // 結果落在區域限制
    trace3_40.xbins = {
        size:300,
        start:1,
        end:4000
    };

    for(let i=0;i<res.length;i++){
        trace1_40.x[i]=res[i]["正式修讀學位外籍學生人數"]
        trace2_40.x[i]=res[i]["正式修讀學位僑生(含港澳)人數"]
        trace3_40.x[i]=res[i]["正式修讀學位陸生人數"]
    }
    let data_40=[trace1_40,trace2_40,trace3_40];

    let layout_40 ={
        margin:{
            t:0
        },xaxis: {
            title: '學生人數', 
        },yaxis: {
            title: '學校數量', 
        },barmode:"overlay"
    };


    Plotly.newPlot(myGraph_40, data_40, layout_40);

}

function drawHistogram_with_true_data(res4){
    console.log(res4);
    let myGraph_41 = document.getElementById('myGraph_41');

    let trace1_41 = {};
    trace1_41.type = "histogram";
    trace1_41.opacity = 0.5;
    trace1_41.name = "正式修讀學位僑生(含港澳)學校數";
    trace1_41.x=[]
    
    // 結果落在區域限制
    trace1_41.xbins = {
        size:300,
        start:1,
        end:4000 
    };

    let trace2_41 = {};
    trace2_41.type = "histogram";
    trace2_41.opacity = 0.5;
    trace2_41.name = "正式修讀學位外籍學生學校數";
    trace2_41.x=[]
    // 結果落在區域限制
    trace2_41.xbins = {
        size:300,
        start:1,
        end:4000
    };
    let trace3_41 = {};
    trace3_41.type = "histogram";
    trace3_41.opacity = 0.5;
    trace3_41.name = "正式修讀學位陸生學校數";
    trace3_41.x=[]
    // 結果落在區域限制
    trace3_41.xbins = {
        size:300,
        start:1,
        end:4000
    };

    for(let i=0;i<res4.length;i++){
        trace1_41.x[i] = res4[i]["學位生_僑生(含港澳)"];
        trace2_41.x[i] = res4[i]["學位生_正式修讀學位外國生"];
        trace3_41.x[i] = res4[i]["學位生_正式修讀學位陸生"];
    }

    let data_41=[trace1_41,trace2_41,trace3_41];

    let layout_41 ={
        margin:{
            t:0
        },xaxis: {
            title: '學生人數', 
        },yaxis: {
            title: '學校數量', 
        },barmode:"overlay"
    };
    Plotly.newPlot(myGraph_41, data_41, layout_41);

}

