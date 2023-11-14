// get csv file
d3.csv('hw1/data/新竹市111年機車竊盜統計表.csv').then(
    res1=>{
        //console.log('Local CSV:',res)
        // 把畫圖的 code 貼到此處
        draw_line_chart(res1);
    }
);
function draw_line_chart(res1){
    console.log(res1);
    let myGraph_10 = document.getElementById('myGraph_10');

    let trace1_10 = {};
    trace1_10.visible = true;
    trace1_10.mode = "markers"; //用於指定點點圖和線圖的表示方式
    trace1_10.type = "scatter"; //圖表類型，例如：line bar scatter
    trace1_10.x = [];
    trace1_10.y = [];
    trace1_10.text = [];
    trace1_10.name = "失竊數量";
    trace1_10.marker = {
        size:10 //點點大小
    };

    let trace2_10 = {};
    trace2_10.visible = true;
    trace2_10.mode = "line";
    trace2_10.type = "line";
    //trace2_10.mode = "markers";
    //trace2_10.type = "scatter";
    trace2_10.x = [];
    trace2_10.y = [];
    trace2_10.text = [];
    trace2_10.name = "破獲件數";
    trace2_10.marker = {
        size:10 //點點大小
    };



    for(let i=0;i<res1.length;i++){
        trace1_10.x[i] = res1[i]["月份"];
        trace1_10.y[i] = res1[i]["發生件數"];
        trace2_10.x[i] = res1[i]["月份"];
        trace2_10.y[i] = res1[i]["破獲件數"];
        //trace1_10.text[i] = res1[i]["月份"];
    }

    

    let data_10=[trace1_10,trace2_10];
   

    let layout_10 ={
        xaxis: {
            title: '月份', 
        },
        yaxis: {
            title: '件數', 
        },
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
                        label:'發生件數'
                    },{
                        method:'restyle',
                        args:['visible',[false,true]],
                        label:'破獲件數'
                    },{
                        method:'restyle',
                        args:['visible',[true,true]],
                        label:'發生件數與破獲件數'
                    }
                ]
            }
        ]
    };

    Plotly.newPlot(myGraph_10, data_10, layout_10);
    // plotly 的屬性結構只有「作用對象」、「指定徒刑與資料」、「排版呈現」
}