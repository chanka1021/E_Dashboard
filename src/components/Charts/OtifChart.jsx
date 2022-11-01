import React from "react";
import ReactEChart from "echarts-for-react";
import { Forcast_hist_today, Turnover_KPI_today } from "../../Data/data";
import "../Cards/style.css";
import { Font_color, OtifColor } from "../functions";
export default function OtifChart(props) {


  ////////design//////////
const ChartColor = OtifColor(80)


const font_color = Font_color(props.theme)
if (props.main) {
  var fontSize = 15;
  var Chartwidth = 15;
  var distance =-25
  var className = "f-"

} else {
  fontSize = 20;
  Chartwidth = 30;
  distance =-40
   className = ""
}

  ////////////////////Chart Render ////////////
  const eChartsOption = {
    series: [
      {
        type: "gauge",
        center: ["50%", "60%"],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 100,
        splitNumber: 1,
        itemStyle: {
          color: ChartColor[0].mainColor,
          shadowColor: ChartColor[0].shadColor,
          shadowBlur: 5,
          shadowOffsetX: 1,
          shadowOffsetY: 1,
        },
        progress: {
          show: true,
          width: Chartwidth,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            width: Chartwidth,
          },
        },
        axisTick: {
          distance: distance,
          splitNumber: 4,
          lineStyle: {
            width: 2,
            color: font_color,
          },
        },
        splitLine: {
          distance: distance,
          length: 14,
          lineStyle: {
            width: 3,
            color: font_color,
          },
        },
        axisLabel: {
          show : false,
          distance:  distance+5,
          color: font_color,
          fontSize: fontSize-2,
        },
        anchor: {
          show: false,
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          width: "60%",
          lineHeight: 40,
          borderRadius: 8,
          offsetCenter: [0, "0%"],
          fontSize: 60,
          fontWeight: "bolder",
          formatter: function (value) {
            return "{value|" + value.toFixed(0) + "}{unit|%}";
          },
          rich: {
            value: {
              fontSize: fontSize,
              fontWeight: "bolder",
              color: font_color,
            },
            unit: {
              fontSize: fontSize - 3,
              color: font_color,
              padding: [0, 0, 0, 10],
            },
          },
        },
        data: [
          {
            value: 80,
          },
        ],
      },
      {
        type: "gauge",
        center: ["50%", "60%"],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 100,
        itemStyle: {
          color: ChartColor[0].mainColor,
        },
        progress: {
          show: true,
          width: Chartwidth*0.26,
        },
        pointer: {
          show: false,

        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          show: false,
        },
        data: [
          {
            value: 70,
          },
        ],
      },
    ],
  };
  return (
    <div className={className+"otif-wh-gauge"}>
      {" "}
      <ReactEChart option={eChartsOption} />{" "}
    </div>
  );
}