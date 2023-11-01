// get csv file
d3.csv('data/harry_potter.csv').then(
    res=>{
        //console.log('Local CSV:',res)
        // 把畫圖的 code 貼到此處
        draw_bar_chart(res);
    }
);

/*
//get json file
d3.json('data/harry_potter.json').then(
    res=>{
        console.log('Local json:',res)
    }
);

//get internet json
d3.json('https://api.themoviedb.org/3/search/movie?api_key=YourKeyHere&language=zh-TW&query=%E7%80%91%E5%B8%83').then(
    res=>{
        console.log('API json:',res)
    }
);
*/

function draw_bar_chart(res){
    console.log(res);
    let myGraph_40 = document.getElementById('myGraph_40');

    let trace1_40 = {};
    trace1_40.mode = "lines+markers";
    trace1_40.type = "scatter";
    
    
    trace1_40.name = "team A";
    trace1_40.marker = {
        size:10 //點點大小
    };

    trace1_40.x = [];
    trace1_40.y = [];
    trace1_40.text = [];

    for(let i=0;i<res.length;i++){
        trace1_40.y[i] = res[i]["revenue"];
        trace1_40.x[i] = res[i]["release_year"];
        trace1_40.text[i] = res[i]["title"];
    }

    

    let data_40=[];
    data_40.push(trace1_40);

    let layout_40 ={
        margin:{
            t:0
        },
       
    };



    Plotly.newPlot(myGraph_40, data_40, layout_40);
}

