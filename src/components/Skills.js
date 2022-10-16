import React from "react";
import Chart from "react-apexcharts";

export default function Skillscomponent() {
  return (
    <div id="skills" className="p-8   capitalize">
      <div className="p-4 sm:p-6 text-sky-600 text-4xl font-bold">skills</div>

      <div className=" py-0 sm:py-8 grid lg:grid-cols-3">
        <div className="shadow-xl my-3 sm:m-3 py-6 flex items-center flex-col justify-center">
        <h6 className="p-4 font-bold text-cyan-700">web development</h6>
          <p className="p-4 text-sm">i strive to develop an web application that improvive quality and hassle free user experince with the cutting edge technologies and framesworks</p>
          <div className="scale-[0.9] hover:scale-110 duration-300"><Languages /></div>
        </div>
        <div className="shadow-xl my-3 sm:m-3 py-6 flex items-center flex-col justify-center">
        <h6 className="p-4 font-bold text-lime-700">Project manageent tools</h6>
        <p className="p-4 text-s">Use Programing tools and services to track and log the work in order to search and analyse effort spent</p>
         
          <div className="scale-[0.9] hover:scale-110 duration-300"><Programing /></div>
        </div>
        <div className="shadow-xl my-3 sm:m-3 py-6 flex justify-center  flex-col items-center">
        <h6 className="p-4 font-bold text-yellow-600">Programing Languages</h6>
        <p className="p-4 text-sm">have knowledge in following Programing Languages that improvise and helps to improve the software development and problem solving skills</p>
        
        <div className="scale-[0.9] hover:scale-110 duration-300"> <Tools /></div>
        </div>
      </div>
    </div>
  );
}
const Languages = () => {
  const chartLabels = [
    "React Js",
    "Angular",
    "React-Native",
    "Tailwind & design Frame work",
    "Ioncic Cordova",
    "NodeJS",
  ];

  const series = [95, 70, 90, 85, 80, 70];
  const options = {
    chart: {
      type: "polarArea",
    },
    legend: {
      show: false,
      formatter: (name, { seriesIndex }) => {
        return chartLabels[seriesIndex];
      },
      position: "bottom",
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeColor: "#e8e8e8",
          strokeWidth: 0,
        },
      },
    },
    tooltip: {
      enabled: true,
      fillSeriesColor: false,
      marker: {
        show: false,
      },
      y: {
        title: {
          formatter: (name, { seriesIndex }) => {
            return chartLabels[seriesIndex];
          },
        },
      },
    },
    yaxis: {
      reversed: true,
      show: false,
      labels: {
        formatter: function (val, opts) {
          return val;
        },
      },
    },
    stroke: {
      colors: ["#e2e8f0"],
    },
    fill: {
      opacity: 0.8,
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="polarArea"
      width={320}
      height={320}
    />
  );
};

const Programing = () => {
  const _labels = ["GIT", "Jira", "Azure", "TFS"];
  const _series = [90, 75, 70, 83];
  const _options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            fontSize: "18px",
          },
          value: {
            fontSize: "14px",
          },
        },
      },
    },

    labels: ["GIT", "Jira", "Azure", "TFS"],
    legend: {
      show: false,
      formatter: (name, { seriesIndex }) => {
        return _labels[seriesIndex];
      },
      position: "bottom",
    },
  };

  return (
    <Chart
      options={_options}
      series={_series}
      type="radialBar"
      width={320}
      height={320}
    />
  );
};

const Tools = () => {
  const __series = [44, 55, 41, 17, 15];
  const __options = {
    chart: {
      width: 380,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    
    labels: ["Type Script", "Java Script", "java", "c++","python"],
    legend: {
      show:false,
      position:"bottom",
      formatter: function (val, opts) {
        return val;
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <Chart
      options={__options}
      series={__series}
      type="donut"
      width={320}
      height={320}
    />
  );
};
