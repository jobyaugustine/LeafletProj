



// Define a function that will create metadata for given sample
// function buildMetadata(selection) {
    
//     //Use the D3 library to read in `samples.json`.
//   // Read the json data
//   d3.json("Export_DataFrame.json").then((sampleData) => {

//       console.log(sampleData);

//       // Filter the data to get the sample's metadata
//       var tempmetaData = sampleData.Unemployment;
//       console.log("Inside buildMetadata function")
//       console.log(tempmetaData);

//       var sample = tempmetaData.filter(item => item.Year == selection);
//       console.log("showing sample[0]:");
//       console.log(sample[0]);

      // Specify the location of the metadata and update it
      //  var metadata = d3.select("#sample-metadata").html("");

    // displaying the metadata details in the Demographic Info section
    //"metadata":[{"id": 940, "ethnicity": "Caucasian", "gender": "F", "age": 24.0, 
    //"location": "Beaufort/NC", "bbtype": "I", "wfreq": 2.0}, 
    //{"id": 941, "ethnicity": "Caucasian/Midleastern", "gender": "F", "age": 34.0, 
    //"location": "Chicago/IL", "bbtype": "I", "wfreq": 1.0}, ]

      // Object.entries(sample[0]).forEach(([key, value]) => {
      //     metadata.append("p").text(`${key}: ${value}`);
      // });

      // console.log("next again");
      // console.log(metadata);
//   });
// }

// // Define a function that will create charts for given sample
// function buildCharts(selection) {

//   // Read the json data
//   d3.json("samples.json").then((sampleData) => {

//       // filter the data to get the sample's OTU data
    
//       var tempsamplesData = sampleData.samples;
//       console.log("Inside buildCharts function")
//       console.log(tempsamplesData);

//       var sampleDict = tempsamplesData.filter(item => item.id == selection)[0];
//       console.log("sampleDict")
//       console.log(sampleDict);


//       var sampleValues = sampleDict.sample_values; 
//       var barChartValues = sampleValues.slice(0, 10).reverse();
//       console.log("sample_values")
//       console.log(barChartValues);
// // for labels of the bar chart
//       var idValues = sampleDict.otu_ids;
//       var barChartLabels = idValues.slice(0, 10).reverse();
//       console.log("otu_ids");
//       console.log(barChartLabels);

//       var reformattedLabels = [];
//       barChartLabels.forEach((label) => {
//           reformattedLabels.push("OTU " + label);
//       });

//       console.log("formatted Labels");
//       console.log(reformattedLabels);

// // for hover text for the bar chart
//       var hovertext = sampleDict.otu_labels;
//       var barCharthovertext = hovertext.slice(0, 10).reverse();
//       console.log("otu_labels");
//       console.log(barCharthovertext);

//       // Create bar chart 

//       var barChartTrace = {
//           type: "bar",
//           y: reformattedLabels,
//           x: barChartValues,
//           text: barCharthovertext,
//           orientation: 'h'
//       };

//       var barChartData = [barChartTrace];

//       Plotly.newPlot("bar", barChartData);

//       // Create bubble chart 

//       var bubbleChartTrace = {
//           x: idValues,
//           y: sampleValues,
//           text: hovertext,
//           mode: "markers",
//           marker: {
//               color: idValues,
//               size: sampleValues
//           }
//       };

//       var bubbleChartData = [bubbleChartTrace];

//       var layout = {
//           showlegend: false,
//           height: 600,
//           width: 1000,
//           xaxis: {
//               title: "OTU ID"
//           }
//       };

//       Plotly.newPlot("bubble", bubbleChartData, layout);
//   });
// }
function callUnEmp10(tempyear2)
{
  document.getElementById("myList").innerHTML = "";
  //var tempUnempmax =0
  console.log("insidecallunemp");
   let Unemp10Array =[];
   //Population10Array =[]
   let State10Array = [];
  for (let i = 0; i <UnEmp10_var.length; i++) 
  {
  row = UnEmp10_var[i];
  if (row.Year ==tempyear2)
   {Unemp10Array.push(row.Unemployment);
    State10Array.push(row.State);}
  }


 
 
let list = document.getElementById("myList");
 
  for (let i = 0; i <Unemp10Array.length; i++)
  {let li = document.createElement("li");
    // li.innerText = item;
    if (i==0)
     li.innerText = "";
    li.innerText = li.innerText + "State: "+  State10Array[i] + "   " + "UnEmployment: " + Unemp10Array[i] 
    list.appendChild(li);
}

  // Trace1 for the Unemp Data
// let trace1 = {
//   x: Unemp10Array,
//   y: State10Array,
//   text: "UnempInfo",
//   name: "Unemp",
//   type: "bar",
//   orientation: 'h'
// };

// Trace 2 for the Crime Data
// let trace2 = {
//   x: statename,
//   y: totcrimearr,
//   text: "CrimeInfo",
//   name: "Crime",
//   type: "bar"
// };

// // Create data array
//  let data = [trace1] ; //, trace2];

// // // Apply a title to the layout
// let layout1 = {
//   title: "Unemployment vs Crime Rate for the Year selected"
// };

// // // Render the plot to the div tag with id "plot"
//  Plotly.newPlot("plot", data, layout1);
   
 }



//----------
// function UnempMaxforSelectedYear(tempyear2)
// {
//   var tempUnempmaxYear =0

//   for (let i = 0; i <data_var.length; i++) 
//   {
//   row = data_var[i];
//   if (row.Year ==tempyear2)
//     {
//       if (row.Unemployment > tempUnempmaxYear)
//           {tempUnempmaxYear=row.Unemployment;}
      
//     }

//   }
//    return tempUnempmaxYear;
// }


// function CrimeMaxforSelectedYear(tempyear2)
// {
  
//   var tempCrimemaxYear = 0
  
//   for (let i = 0; i <data_var.length; i++) 
//   {
//   row = data_var[i];
//   if (row.Year ==tempyear2)
//     {
//       if (row.Total_CrimeRate > tempCrimemaxYear)
//           {tempCrimemaxYear=row.Total_CrimeRate;};
//     }
//   }
//   return tempCrimemaxYear ;
// }
//--------


//---------

function funcForYearlyUnempMax(tempyear2)
{
  var tempUnempmax =0
  
  // yearlyUnempMaxArray =[]
  // yearlyCrimeMaxArray =[]
  for (let i = 0; i <data_var.length; i++) 
  {
  row = data_var[i];
  if (row.Year ==tempyear2)
    {
      if (row.Unemployment > tempUnempmax)
          {tempUnempmax=row.Unemployment;}
      
    }

  }
   return tempUnempmax;
}


function funcForYearlyCrimeMax(tempyear2)
{
  
  var tempCrimemax = 0
  // yearlyUnempMaxArray =[]
  // yearlyCrimeMaxArray =[]
  for (let i = 0; i <data_var.length; i++) 
  {
  row = data_var[i];
  if (row.Year ==tempyear2)
    {
      if (row.Total_CrimeRate > tempCrimemax)
          {tempCrimemax=row.Total_CrimeRate;};
    }
  }
  return tempCrimemax ;
}
//--------


function tryplot(menuitemselected)
{
  console.log("i am here")
// Initialized arrays
let statename = []
let unemparr = []
let totcrimearr = []


// For loop to populate arrays

if (menuitemselected != '')
{
  // callCrime10(menuitemselected);
   callUnEmp10(menuitemselected);

for (let i = 0; i <data_var.length; i++) 
  {
  row = data_var[i];
  if (row.Year ==menuitemselected)
    {statename.push(row.State);
    unemparr.push(row.Unemployment);
    totcrimearr.push(row.Total_CrimeRate);}

  }

// Trace1 for the Unemp Data
let trace1 = {
  x: statename,
  y: unemparr,
  text: "UnempInfo",
  name: "Unemp",
  type: "bar"
};

// Trace 2 for the Crime Data
let trace2 = {
  x: statename,
  y: totcrimearr,
  text: "CrimeInfo",
  name: "Crime",
  type: "bar"
};

// Create data array
let data = [trace1, trace2];

// Apply a title to the layout
let layout = {
  title: "Unemployment vs Crime Rate for the Year selected"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
//-------------
// let Unemp10Array =[];
// //Population10Array =[]
// let State10Array = [];
// for (let i = 0; i <UnEmp10_var.length; i++) 
// {
// row = UnEmp10_var[i];
// if (row.Year ==menuitemselected)
// {Unemp10Array.push(row.Unemployment);
//  State10Array.push(row.State);}
// }
// // Trace1 for the Unemp Data
// let trace1 = {
//   x: Unemp10Array,
//   y: State10Array,
//   text: "UnempInfo",
//   name: "Unemp",
//   type: "bar",
//   orientation: 'h'
// };

// // Trace 2 for the Crime Data
// // let trace2 = {
// //   x: statename,
// //   y: totcrimearr,
// //   text: "CrimeInfo",
// //   name: "Crime",
// //   type: "bar"
// // };

// // Create data array
//  let data = [trace1] ; //, trace2];

// // // Apply a title to the layout
// let layout1 = {
//   title: "Unemployment vs Crime Rate for the Year selected"
// };

// // // Render the plot to the div tag with id "plot"
//  Plotly.newPlot("plot", data, layout1);
//----------------

}
else 
{
  console.log("empy selected")
  let yearslist = ['2004','2005','2006','2007','2008','2009', '2010','2011','2012','2013','2014'];
  let YearlyUnempMax =[]
  let YearlyCrimeMax =[]
  for (let i = 0; i <yearslist.length; i++) 
  {
    let tempyear=yearslist[i];
    console.log("infunc")
    //YearlyUnempMax.push(data_var.filter(funcForYearlyUnempMax(tempyear)));
    YearlyUnempMax.push(funcForYearlyUnempMax(tempyear));
    //YearlyCrimeMax.push(data_var.filter(funcForYearlyCrimeMax(tempyear)));
    YearlyCrimeMax.push(funcForYearlyCrimeMax(tempyear));
  }
// Trace1 for the Unemp Data
let trace1 = {
  x: yearslist,
  y: YearlyUnempMax,
  //text: "UnempInfo",
  name: "Yearly Unemp change",
  mode: "lines+markers"
  
};

// Trace 2 for the Crime Data
let trace2 = {
  x: yearslist,
  y: YearlyCrimeMax,
  xaxis:'x2',
  yaxis:'y2',
  //text: "CrimeInfo",
  name: "Yearly Crime change",
  mode: "lines+markers"
};

// Create data array
let data = [trace1, trace2];
// let data1 = [trace1];
// let data2 = [trace2];
// Apply a title to the layout
// let layout = {
//   title: "Yearly Unemp and Crime Graph from 2004 to 2014"
// };

var layout = {
  grid: {rows: 1, columns: 2, pattern: 'independent',subplots:[['xy','x2y2']]},
  title: "Yearly Unemployment Rate and Crime Rate Graph across U.S. from 2004 to 2014"
};


// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);


}

}
// Define function that will run on page load
function init() {

  // Read json data
//   d3.json("samples.json").then((sampleData) => {

      
      // to create the dropdown option for each sample from the html tag
      //Year Drop Down
      var filteredData = ['','2004','2005','2006','2007','2008','2009', '2010','2011','2012','2013','2014'];
      var dropdownMenu =document.getElementById("selDataset");
      // populating the dropdown with the values
      for(var i=0;i<filteredData.length;i++)
      {
          var opt = document.createElement('option');
          opt.innerHTML = filteredData[i];
          opt.value = filteredData[i];
          dropdownMenu.appendChild(opt);
          
          var tempmenu = filteredData[0];
      }
      
      // Use first sample to plot initial plots
      //  buildMetadata(filteredData[0]);
      console.log(tempmenu);
      tryplot(tempmenu);
    //   buildCharts(filteredData[0]);

    }

  function optionChanged(newSelection) {

//   // Plot the charts with newly selected sample
  //  buildMetadata(newSelection); 
    tryplot(newSelection);

 }

// Initialize dashboard on page load
init();