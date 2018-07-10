import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
    ngOnInit(){
        var dataSales = {
          labels: ['1/1/2018', '5/1/2018', '9/1/2018', '13/1/2018', '17/1/2018', '21/1/2018'],
          series: [
             [287, 385, 490, 562, 594, 626, 698],
            [67, 152, 193, 240, 387, 435, 535],
            [23, 113, 67, 108, 190, 239, 307]
          ]
        };

        var optionsSales = {
          low: 0,
          high: 1000,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: true,
          showPoint: false,
        };

        var responsiveSales: any[] = [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        new Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


        var data = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
            [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
          ]
        };

        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };

        var responsiveOptions: any[] = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        new Chartist.Line('#chartActivity', data, options, responsiveOptions);

        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };

        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };

      /*  new Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

        new Chartist.Pie('#chartPreferences', {
          labels: ['62%','32%','6%'],
          series: [62, 32, 6]
        }); */

        new Chartist.Bar('#chartPreferences', {
            labels: ['1 visit', '2-4 visit', '5-15 visit', '16+ visit'],
            series: [80, 120, 50, 15]
        }, {
            distributeSeries: true
        });

    }
}
