charts.priceVSmpg = async function(){
  const margin = {top: 50, right: 20, bottom: 50, left: 60};
  const width = 600;
  const height = 400;
  const svg = d3.select('#svg1')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
  const data = await d3.csv('data/CarPrice.csv');
  d3.select("body")
      .selectAll("p")
      .data(data)
      .enter()
      .append("p")
      .html(function(d,i){return "item " + d.price + " is " + d.citympg + ".";});
  
}
