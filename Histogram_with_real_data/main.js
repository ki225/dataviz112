d3.csv("train_data_titanic.csv").then(
    res =>{
        drawHistogram(res);
    }
);

function drawHistogram(res){
    console.log(res);
    let myGraph = document.getElementById('myGraph');

    let trace1 = {};
    trace1.type = "histogram";
    trace1.x = [];
    trace1.name="Parch";

    let trace2 = {};
    trace2.type = "histogram";
    trace2.x = [];
    trace2.name="Survived";
    /*
    // 結果落在區域限制
    trace1.xbins = {
        size:100,
        start:0,
        end:100 //取0~99資料
    };
    */

    for(let i=0;i<res.length;i++){
        trace1.x[i]=res[i]['Parch']
    }

    for(let i=0;i<res.length;i++){
        trace2.x[i]=res[i]['Survived']
    }

    let layout = {
        margin:{
            t:0
        }
    };

    let data=[];
    data.push(trace1);
    data.push(trace2);
    Plotly.newPlot(myGraph,data,layout);

}
