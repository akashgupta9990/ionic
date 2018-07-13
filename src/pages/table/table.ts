import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-table',
  templateUrl: 'table.html',
})
export class TablePage {
  columns = [];
  rows = [];
  totalTime: string; totalScore: string; categories: string;

  ngOnInit() {
    let data = [{
      "contentId": "do_30013147",
      "correct": 1,
      "hierarchyData": "",
      "id": -1,
      "maxScore": 1,
      "qdesc": "",
      "qid": "ek.n.ib.s.ssnb.bp2.4",
      "qindex": 1,
      "qtitle": "घटाव",
      "res": "[{\"3\":\"true\"}]",
      "score": 1,
      "timespent": 3,
      "timestamp": 1531396935381,
      "uid": "8059d370-23d7-43ac-8f95-e8872b65eb45"
    }, {
      "contentId": "do_30013147",
      "correct": 1,
      "hierarchyData": "",
      "id": -1,
      "maxScore": 1,
      "qdesc": "",
      "qid": "ek.n.ib.s.ssnb.bp2.1",
      "qindex": 3,
      "qtitle": "घटाव",
      "res": "[{\"1\":\"true\"}]",
      "score": 1,
      "timespent": 2,
      "timestamp": 1531396926429,
      "uid": "8059d370-23d7-43ac-8f95-e8872b65eb45"
    }, {
      "contentId": "do_30013147",
      "correct": 1,
      "hierarchyData": "",
      "id": -1,
      "maxScore": 1,
      "qdesc": "",
      "qid": "ek.n.ib.s.ssnb.bp2.3",
      "qindex": 4,
      "qtitle": "घटाव",
      "res": "[{\"2\":\"true\"}]",
      "score": 1,
      "timespent": 6,
      "timestamp": 1531396908609,
      "uid": "8059d370-23d7-43ac-8f95-e8872b65eb45"
    }, {
      "contentId": "do_30013147",
      "correct": 1,
      "hierarchyData": "",
      "id": -1,
      "maxScore": 1,
      "qdesc": "",
      "qid": "ek.n.ib.s.ssnb.bp2.5",
      "qindex": 5,
      "qtitle": "घटाव",
      "res": "[{\"2\":\"true\"}]",
      "score": 1,
      "timespent": 2,
      "timestamp": 1531396917151,
      "uid": "8059d370-23d7-43ac-8f95-e8872b65eb45"
    }, {
      "contentId": "do_30013147",
      "correct": 1,
      "hierarchyData": "",
      "id": -1,
      "maxScore": 1,
      "qdesc": "",
      "qid": "ek.n.ib.s.ssnb.bp4.3",
      "qindex": 6,
      "qtitle": "घटाव",
      "res": "[{\"2\":\"true\"}]",
      "score": 1,
      "timespent": 2,
      "timestamp": 1531396941968,
      "uid": "8059d370-23d7-43ac-8f95-e8872b65eb45"
    }, {
      "contentId": "do_30013147",
      "correct": 1,
      "hierarchyData": "",
      "id": -1,
      "maxScore": 1,
      "qdesc": "",
      "qid": "ek.n.ib.s.ssnb.bp3.1",
      "qindex": 7,
      "qtitle": "घटाव",
      "res": "[{\"1\":\"true\"}]",
      "score": 1,
      "timespent": 3,
      "timestamp": 1531396913420,
      "uid": "8059d370-23d7-43ac-8f95-e8872b65eb45"
    }, {
      "contentId": "do_30013147",
      "correct": 1,
      "hierarchyData": "",
      "id": -1,
      "maxScore": 1,
      "qdesc": "",
      "qid": "ek.n.ib.s.ssnb.bp4.1",
      "qindex": 8,
      "qtitle": "घटाव",
      "res": "[{\"6\":\"true\"}]",
      "score": 1,
      "timespent": 2,
      "timestamp": 1531396923319,
      "uid": "8059d370-23d7-43ac-8f95-e8872b65eb45"
    }, {
      "contentId": "do_30013147",
      "correct": 1,
      "hierarchyData": "",
      "id": -1,
      "maxScore": 1,
      "qdesc": "",
      "qid": "ek.n.ib.s.ssnb.bp3.2",
      "qindex": 9,
      "qtitle": "घटाव",
      "res": "[{\"3\":\"true\"}]",
      "score": 1,
      "timespent": 2,
      "timestamp": 1531396938953,
      "uid": "8059d370-23d7-43ac-8f95-e8872b65eb45"
    }, {
      "contentId": "do_30013147",
      "correct": 1,
      "hierarchyData": "",
      "id": -1,
      "maxScore": 1,
      "qdesc": "",
      "qid": "ek.n.ib.s.ssnb.bp3.4",
      "qindex": 10,
      "qtitle": "घटाव",
      "res": "[{\"1\":\"true\"}]",
      "score": 1,
      "timespent": 2,
      "timestamp": 1531396920270,
      "uid": "8059d370-23d7-43ac-8f95-e8872b65eb45"
    }, {
      "contentId": "do_30013147",
      "correct": 1,
      "hierarchyData": "",
      "id": -1,
      "maxScore": 1,
      "qdesc": "",
      "qid": "ek.n.ib.s.ssnb.bp3.5",
      "qindex": 12,
      "qtitle": "घटाव",
      "res": "[{\"2\":\"true\"}]",
      "score": 1,
      "timespent": 2,
      "timestamp": 1531396931366,
      "uid": "8059d370-23d7-43ac-8f95-e8872b65eb45"
    }]

    this.rows = data.map(row => {
      return {
        "time": this.convertTotalTime(row.timespent),
        "result": row.score + '/' + row.maxScore,
        "qtitle": row.qtitle
      }
    });

    let totalQuestionMaxScore = data.reduce(function (acc, val) { return acc + val.maxScore; }, 0)
    let totalQuestionScore = data.reduce(function (acc, val) { return acc + val.score; }, 0)
    let totalTimeSpent = data.reduce(function (acc, val) { return acc + val.timespent; }, 0)
    this.totalTime = this.convertTotalTime(totalTimeSpent);
    this.totalScore = totalQuestionScore + '/' + totalQuestionMaxScore;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  convertTotalTime(time: number): string {
    var mm = Math.floor(time / 60);
    var ss = Math.floor(time % 60);
    return (mm > 9 ? mm : ("0" + mm)) + ":" + (ss > 9 ? ss : ("0" + ss));
  }

  // Function to add a custom class to columns
  getCellClass(data) {
    let className: string;
    switch (data.column.prop.toUpperCase()) {
      case "QTITLE":
        className = " datatable-body-cell-qtitle";
        break;
      case "TIME":
        className = " datatable-body-cell-time";
        break;
      case "RESULT":
        className = " datatable-body-cell-result";
        break;
    }
    return className;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablePage');
  }

}