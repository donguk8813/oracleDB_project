/**
 * 
 */

google.charts.load('current', {'packages':['corechart']}); 
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string','Foods');
    data.addColumn('number','비중');
 
            data.addRows([ 
                ['피자',5],
        ['치킨',2],
        ['햄버거',3]
    ]);
    var opt = {
            'title':'좋아하는 음식',
            'width':200,
            'height':200,
            pieSliceText:'label',
            legend:'none' 
    };
    var chart = new google.visualization.PieChart(document.getElementById('myPieChart2'));
    chart.draw(data,opt);
}