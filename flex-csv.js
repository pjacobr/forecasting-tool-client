// flexible CSV display for desktop
/*
<table class="table table-sm flex-table">
    <thead>
        <tr>
        </tr>
    </thead>
    <tbody>

    </tbody> 
</table>
*/

// test using python -m http.server 8888



var count = 0;
var catch_arr = [];
d3.csv("data.csv", function(d) {
    return d;
}).then(results => {
    this.data = results;
    // console.log(this.data)
    var numCalled = 0;
    
    // add the rows of data
    var table_data = d3.select(".flex-table > tbody")
    .selectAll("tr")
    .data(this.data).enter()
    .append("tr");
    
    
    // d3.select("body > table")
    //   .classed("table table-lg flex-csv", true);

    // this.data.shift();
    
    d3.select(".flex-table > thead > tr").selectAll("th")
        .data(this.data.columns).enter()
        .append("th")
        .text((d,i)=>{return d;});

    d3.selectAll(".flex-table > tbody > tr")
    .data(this.data)
    .each((d,i)=>{
            for(k in d){
                d3.select(`.flex-table > tbody > tr:nth-of-type(${i+1})`)
                  .append("td")
                  .text(d[k]);
            }
        });
});