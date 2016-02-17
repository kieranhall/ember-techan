import Ember from 'ember';

export default Ember.Route.extend({
  storage: Ember.inject.service('techan-storage'),
  model() {
    const data = [
      {date: "9-Jun-14", open: 62.40, high: 63.34, low: 61.79,close: 62.88,volume: 37617413},
      {date: "6-Jun-14", open: 63.37, high: 63.48, low: 62.15,close: 62.50,volume: 42442096},
      {date: "5-Jun-14", open: 63.66, high: 64.36, low: 62.82,close: 63.19,volume: 47352368},
      {date: "4-Jun-14", open: 62.45, high: 63.59, low: 62.07,close: 63.34,volume: 36513991},
      {date: "3-Jun-14", open: 62.62, high: 63.42, low: 62.32,close: 62.87,volume: 32216707},
      {date: "2-Jun-14", open: 63.23, high: 63.59, low: 62.05,close: 63.08,volume: 35995537},
      {date: "30-May-14", open: 63.95, high: 64.17, low: 62.56,close: 63.30,volume: 45283577},
      {date: "29-May-14", open: 63.84, high: 64.30, low: 63.51,close: 63.83,volume: 42699670},
      {date: "28-May-14", open: 63.39, high: 64.14, low: 62.62,close: 63.51,volume: 47795088},
      {date: "27-May-14", open: 61.62, high: 63.51, low: 61.57,close: 63.48,volume: 55681663},
      {date: "23-May-14", open: 60.41, high: 61.45, low: 60.15,close: 61.35,volume: 38293993},
      {date: "22-May-14", open: 60.94, high: 61.48, low: 60.40,close: 60.52,volume: 54200116},
      {date: "21-May-14", open: 58.56, high: 60.50, low: 58.25,close: 60.49,volume: 58991505},
      {date: "20-May-14", open: 59.50, high: 60.19, low: 58.18,close: 58.56,volume: 53931469},
      {date: "19-May-14", open: 57.89, high: 59.56, low: 57.57,close: 59.21,volume: 43033925},
      {date: "16-May-14", open: 58.31, high: 58.45, low: 57.31,close: 58.02,volume: 47933075},
      {date: "15-May-14", open: 59.26, high: 59.38, low: 57.52,close: 57.92,volume: 56813940},
      {date: "14-May-14", open: 59.53, high: 60.45, low: 58.95,close: 59.23,volume: 47428583},
      {date: "13-May-14", open: 59.66, high: 60.89, low: 59.51,close: 59.83,volume: 48525476},
      {date: "12-May-14", open: 57.98, high: 59.90, low: 57.98,close: 59.83,volume: 48575487},
      {date: "9-May-14", open: 56.85, high: 57.65, low: 56.38,close: 57.24,volume: 52583858},
      {date: "8-May-14", open: 57.23, high: 58.82, low: 56.50,close: 56.76,volume: 61251053},
      {date: "7-May-14", open: 58.77, high: 59.30, low: 56.26,close: 57.39,volume: 78587247},
      {date: "6-May-14", open: 60.98, high: 61.15, low: 58.49,close: 58.53,volume: 55900809},
      {date: "5-May-14", open: 59.67, high: 61.35, low: 59.18,close: 61.22,volume: 46057411},
      {date: "2-May-14", open: 61.30, high: 61.89, low: 60.18,close: 60.46,volume: 54189197},
      {date: "1-May-14", open: 60.43, high: 62.28, low: 60.21,close: 61.15,volume: 82428606},
      {date: "30-Apr-14", open: 57.58, high: 59.85, low: 57.16,close: 59.78,volume: 76093004},
      {date: "29-Apr-14", open: 56.09, high: 58.28, low: 55.84,close: 58.15,volume: 75557202},
      {date: "28-Apr-14", open: 58.05, high: 58.31, low: 54.66,close: 56.14,volume: 107757756},
      {date: "25-Apr-14", open: 59.97, high: 60.01, low: 57.57,close: 57.71,volume: 92501529},
      {date: "24-Apr-14", open: 63.60, high: 63.65, low: 59.77,close: 60.87,volume: 138769345},
      {date: "23-Apr-14", open: 63.45, high: 63.48, low: 61.26,close: 61.36,volume: 96564750},
      {date: "22-Apr-14", open: 62.65, high: 63.44, low: 62.22,close: 63.03,volume: 60631312},
      {date: "21-Apr-14", open: 59.46, high: 61.24, low: 59.15,close: 61.24,volume: 60363619},
      {date: "17-Apr-14", open: 59.30, high: 60.58, low: 58.72,close: 58.94,volume: 88040346},
      {date: "16-Apr-14", open: 59.79, high: 60.19, low: 57.74,close: 59.72,volume: 78773521},
      {date: "15-Apr-14", open: 59.29, high: 59.68, low: 55.88,close: 59.09,volume: 108622706},
      {date: "14-Apr-14", open: 60.09, high: 60.45, low: 57.78,close: 58.89,volume: 72324603},
      {date: "11-Apr-14", open: 57.60, high: 60.31, low: 57.31,close: 58.53,volume: 91451960},
      {date: "10-Apr-14", open: 63.08, high: 63.18, low: 58.68,close: 59.16,volume: 114987616},
      {date: "9-Apr-14", open: 59.63, high: 62.46, low: 59.19,close: 62.41,volume: 100215307},
      {date: "8-Apr-14", open: 57.68, high: 58.71, low: 57.17,close: 58.19,volume: 78835935},
      {date: "7-Apr-14", open: 55.90, high: 58.00, low: 55.44,close: 56.95,volume: 108487569},
      {date: "4-Apr-14", open: 59.94, high: 60.20, low: 56.32,close: 56.75,volume: 125465774},
      {date: "3-Apr-14", open: 62.55, high: 63.17, low: 59.13,close: 59.49,volume: 83859330},
      {date: "2-Apr-14", open: 63.21, high: 63.91, low: 62.21,close: 62.72,volume: 66276613},
      {date: "1-Apr-14", open: 60.46, high: 62.66, low: 60.24,close: 62.62,volume: 59291210},
      {date: "31-Mar-14", open: 60.78, high: 61.52, low: 59.87,close: 60.24,volume: 53011205},
      {date: "28-Mar-14", open: 61.34, high: 61.95, low: 59.34,close: 60.01,volume: 67051528},
      {date: "27-Mar-14", open: 60.51, high: 61.90, low: 57.98,close: 60.97,volume: 112649694},
      {date: "26-Mar-14", open: 64.74, high: 64.95, low: 60.37,close: 60.38,volume: 97689774},
      {date: "25-Mar-14", open: 64.89, high: 66.19, low: 63.78,close: 64.89,volume: 68785500},
      {date: "24-Mar-14", open: 67.19, high: 67.36, low: 63.36,close: 64.10,volume: 85695872},
      {date: "21-Mar-14", open: 67.53, high: 67.92, low: 66.18,close: 67.24,volume: 60041228},
      {date: "20-Mar-14", open: 68.01, high: 68.23, low: 66.82,close: 66.97,volume: 44438500},
      {date: "19-Mar-14", open: 69.17, high: 69.29, low: 67.46,close: 68.24,volume: 43980558},
      {date: "18-Mar-14", open: 68.76, high: 69.60, low: 68.30,close: 69.19,volume: 40827226},
      {date: "17-Mar-14", open: 68.18, high: 68.95, low: 66.62,close: 68.74,volume: 52196699},
      {date: "14-Mar-14", open: 68.49, high: 69.43, low: 67.46,close: 67.72,volume: 48226824},
      {date: "13-Mar-14", open: 71.29, high: 71.35, low: 68.15,close: 68.83,volume: 57091157},
      {date: "12-Mar-14", open: 69.86, high: 71.35, low: 69.00,close: 70.88,volume: 46400431},
      {date: "11-Mar-14", open: 72.50, high: 72.59, low: 69.96,close: 70.10,volume: 59615238},
      {date: "10-Mar-14", open: 70.77, high: 72.15, low: 70.51,close: 72.03,volume: 59949746},
      {date: "7-Mar-14", open: 71.08, high: 71.18, low: 69.47,close: 69.80,volume: 38985763},
      {date: "6-Mar-14", open: 71.88, high: 71.89, low: 70.25,close: 70.84,volume: 46126260},
      {date: "5-Mar-14", open: 69.69, high: 71.97, low: 69.62,close: 71.57,volume: 74649486},
      {date: "4-Mar-14", open: 68.66, high: 68.90, low: 67.62,close: 68.80,volume: 42164222},
      {date: "3-Mar-14", open: 66.96, high: 68.05, low: 66.51,close: 67.41,volume: 56900444},
      {date: "28-Feb-14", open: 69.47, high: 69.88, low: 67.38,close: 68.46,volume: 66900863},
      {date: "27-Feb-14", open: 69.34, high: 70.01, low: 68.87,close: 68.94,volume: 41695855},
      {date: "26-Feb-14", open: 70.19, high: 71.22, low: 68.85,close: 69.26,volume: 55400399},
      {date: "25-Feb-14", open: 70.95, high: 71.00, low: 69.45,close: 69.85,volume: 52189031},
      {date: "24-Feb-14", open: 68.74, high: 71.44, low: 68.54,close: 70.78,volume: 76951946},
      {date: "21-Feb-14", open: 69.69, high: 69.96, low: 68.45,close: 68.59,volume: 70991892},
      {date: "20-Feb-14", open: 67.73, high: 70.11, low: 65.73,close: 69.63,volume: 131043748},
      {date: "19-Feb-14", open: 67.05, high: 69.08, low: 67.00,close: 68.06,volume: 64258631},
      {date: "18-Feb-14", open: 66.94, high: 67.54, low: 66.07,close: 67.30,volume: 43862297},
      {date: "14-Feb-14", open: 67.50, high: 67.58, low: 66.72,close: 67.09,volume: 36786427},
      {date: "13-Feb-14", open: 64.18, high: 67.33, low: 64.05,close: 67.33,volume: 62013396},
      {date: "12-Feb-14", open: 64.92, high: 65.06, low: 64.05,close: 64.45,volume: 47409857},
      {date: "11-Feb-14", open: 63.75, high: 65.00, low: 63.35,close: 64.85,volume: 45746832},
      {date: "10-Feb-14", open: 64.30, high: 64.49, low: 63.47,close: 63.55,volume: 43736562},
      {date: "7-Feb-14", open: 62.27, high: 64.57, low: 62.22,close: 64.32,volume: 60835746},
      {date: "6-Feb-14", open: 61.46, high: 62.78, low: 61.46,close: 62.16,volume: 42153754},
      {date: "5-Feb-14", open: 62.74, high: 63.16, low: 61.27,close: 62.19,volume: 53032420},
      {date: "4-Feb-14", open: 62.05, high: 63.14, low: 61.82,close: 62.75,volume: 46064897},
      {date: "3-Feb-14", open: 63.03, high: 63.77, low: 60.70,close: 61.48,volume: 75105994},
      {date: "31-Jan-14", open: 60.47, high: 63.37, low: 60.17,close: 62.57,volume: 87930298},
      {date: "30-Jan-14", open: 62.12, high: 62.50, low: 60.46,close: 61.08,volume: 150438699},
      {date: "29-Jan-14", open: 54.61, high: 54.95, low: 53.19,close: 53.53,volume: 98089932},
      {date: "28-Jan-14", open: 54.02, high: 55.28, low: 54.00,close: 55.14,volume: 48364998},
      {date: "27-Jan-14", open: 54.73, high: 54.94, low: 51.85,close: 53.55,volume: 74142331},
      {date: "24-Jan-14", open: 56.15, high: 56.42, low: 54.40,close: 54.45,volume: 55545338},
      {date: "23-Jan-14", open: 56.37, high: 56.68, low: 55.69,close: 56.63,volume: 47996403},
      {date: "22-Jan-14", open: 58.85, high: 59.31, low: 57.10,close: 57.51,volume: 61495880},
      {date: "21-Jan-14", open: 56.60, high: 58.58, low: 56.50,close: 58.51,volume: 48734147},
      {date: "17-Jan-14", open: 57.30, high: 57.82, low: 56.07,close: 56.30,volume: 40883205},
      {date: "16-Jan-14", open: 57.26, high: 58.02, low: 56.83,close: 57.19,volume: 34599775},
      {date: "15-Jan-14", open: 57.98, high: 58.57, low: 57.27,close: 57.60,volume: 33730619},
      {date: "14-Jan-14", open: 56.46, high: 57.78, low: 56.10,close: 57.74,volume: 37590987},
      {date: "13-Jan-14", open: 57.91, high: 58.25, low: 55.38,close: 55.91,volume: 63106519},
      {date: "10-Jan-14", open: 57.13, high: 58.30, low: 57.06,close: 57.94,volume: 42529258},
      {date: "9-Jan-14", open: 58.65, high: 58.96, low: 56.65,close: 57.22,volume: 92349222},
      {date: "8-Jan-14", open: 57.60, high: 58.41, low: 57.23,close: 58.23,volume: 56800776},
      {date: "7-Jan-14", open: 57.70, high: 58.55, low: 57.22,close: 57.92,volume: 77329009},
      {date: "6-Jan-14", open: 54.42, high: 57.26, low: 54.05,close: 57.20,volume: 68974359},
      {date: "3-Jan-14", open: 55.02, high: 55.65, low: 54.53,close: 54.56,volume: 38287706},
      {date: "2-Jan-14", open: 54.83, high: 55.22, low: 54.19,close: 54.71,volume: 43257622},
      {date: "31-Dec-13", open: 54.12, high: 54.86, low: 53.91,close: 54.65,volume: 43152127},
      {date: "30-Dec-13", open: 54.93, high: 55.18, low: 53.43,close: 53.71,volume: 68307317},
      {date: "27-Dec-13", open: 57.48, high: 57.68, low: 55.25,close: 55.44,volume: 60465751},
      {date: "26-Dec-13", open: 58.32, high: 58.38, low: 57.37,close: 57.73,volume: 55101367},
      {date: "24-Dec-13", open: 58.27, high: 58.58, low: 56.91,close: 57.96,volume: 46617754},
      {date: "23-Dec-13", open: 55.50, high: 58.32, low: 55.45,close: 57.77,volume: 98296983},
      {date: "20-Dec-13", open: 54.91, high: 55.15, low: 54.23,close: 55.12,volume: 239823912},
      {date: "19-Dec-13", open: 54.34, high: 55.19, low: 53.95,close: 55.05,volume: 89825393},
      {date: "18-Dec-13", open: 55.57, high: 55.89, low: 53.75,close: 55.57,volume: 76003479},
      {date: "17-Dec-13", open: 54.75, high: 55.18, low: 54.24,close: 54.86,volume: 78751463},
      {date: "16-Dec-13", open: 53.27, high: 54.50, low: 52.91,close: 53.81,volume: 85118518},
      {date: "13-Dec-13", open: 51.61, high: 53.50, low: 51.34,close: 53.32,volume: 82640992},
      {date: "12-Dec-13", open: 51.03, high: 52.07, low: 50.66,close: 51.83,volume: 92723034},
      {date: "11-Dec-13", open: 50.56, high: 50.77, low: 49.01,close: 49.38,volume: 65776366},
      {date: "10-Dec-13", open: 48.62, high: 50.77, low: 48.54,close: 50.24,volume: 68478561},
      {date: "9-Dec-13", open: 48.06, high: 48.97, low: 47.74,close: 48.84,volume: 36055891},
      {date: "6-Dec-13", open: 48.98, high: 49.39, low: 47.71,close: 47.94,volume: 42937659},
      {date: "5-Dec-13", open: 48.15, high: 48.70, low: 47.87,close: 48.34,volume: 43855036},
      {date: "4-Dec-13", open: 46.46, high: 48.77, low: 46.26,close: 48.62,volume: 60890176},
      {date: "3-Dec-13", open: 46.75, high: 47.20, low: 46.29,close: 46.73,volume: 32085905},
      {date: "2-Dec-13", open: 46.90, high: 47.54, low: 46.26,close: 47.06,volume: 50773647},
      {date: "29-Nov-13", open: 46.75, high: 47.21, low: 46.50,close: 47.01,volume: 22953916},
      {date: "27-Nov-13", open: 45.97, high: 46.67, low: 45.53,close: 46.49,volume: 44993195},
      {date: "26-Nov-13", open: 44.66, high: 46.17, low: 43.55,close: 45.89,volume: 82016490},
      {date: "25-Nov-13", open: 46.36, high: 46.65, low: 44.04,close: 44.82,volume: 82565324},
      {date: "22-Nov-13", open: 47.04, high: 47.27, low: 45.96,close: 46.23,volume: 40545375},
      {date: "21-Nov-13", open: 46.99, high: 47.46, low: 46.68,close: 46.70,volume: 34886170},
      {date: "20-Nov-13", open: 46.61, high: 47.55, low: 46.31,close: 46.43,volume: 53932698},
      {date: "19-Nov-13", open: 46.26, high: 47.00, low: 45.72,close: 46.36,volume: 75602413},
      {date: "18-Nov-13", open: 48.47, high: 48.84, low: 45.80,close: 45.83,volume: 85909884},
      {date: "15-Nov-13", open: 49.11, high: 49.48, low: 48.71,close: 49.01,volume: 42452937},
      {date: "14-Nov-13", open: 48.70, high: 49.57, low: 48.03,close: 48.99,volume: 75117049},
      {date: "13-Nov-13", open: 46.23, high: 48.74, low: 46.06,close: 48.71,volume: 79245346},
      {date: "12-Nov-13", open: 46.00, high: 47.37, low: 45.83,close: 46.60,volume: 68195832},
      {date: "11-Nov-13", open: 47.04, high: 47.53, low: 45.73,close: 46.20,volume: 80909626},
      {date: "8-Nov-13", open: 47.81, high: 48.65, low: 47.25,close: 47.53,volume: 70731178},
      {date: "7-Nov-13", open: 49.24, high: 49.87, low: 47.30,close: 47.56,volume: 97127618},
      {date: "6-Nov-13", open: 50.26, high: 50.45, low: 48.71,close: 49.12,volume: 67889337},
      {date: "5-Nov-13", open: 47.79, high: 50.18, low: 47.51,close: 50.10,volume: 76835006},
      {date: "4-Nov-13", open: 49.36, high: 49.75, low: 48.02,close: 48.22,volume: 80371218},
      {date: "1-Nov-13", open: 50.85, high: 52.09, low: 49.72,close: 49.75,volume: 95032876},
      {date: "31-Oct-13", open: 47.16, high: 52.00, low: 46.50,close: 50.20,volume: 248809006},
      {date: "30-Oct-13", open: 50.00, high: 50.21, low: 48.75,close: 49.01,volume: 127072652},
      {date: "29-Oct-13", open: 50.73, high: 50.79, low: 49.25,close: 49.40,volume: 102143469},
      {date: "28-Oct-13", open: 51.54, high: 51.70, low: 49.61,close: 50.23,volume: 73472347},
      {date: "25-Oct-13", open: 53.18, high: 53.24, low: 51.88,close: 51.95,volume: 45085348},
      {date: "24-Oct-13", open: 52.38, high: 52.84, low: 51.59,close: 52.44,volume: 46775185},
      {date: "23-Oct-13", open: 51.75, high: 52.25, low: 51.13,close: 51.90,volume: 57207154},
      {date: "22-Oct-13", open: 54.33, high: 54.76, low: 52.20,close: 52.68,volume: 83203892},
      {date: "21-Oct-13", open: 54.68, high: 54.81, low: 53.51,close: 53.85,volume: 58235283},
      {date: "18-Oct-13", open: 54.18, high: 54.82, low: 53.60,close: 54.22,volume: 88260093},
      {date: "17-Oct-13", open: 51.12, high: 52.22, low: 50.95,close: 52.21,volume: 71521899},
      {date: "16-Oct-13", open: 50.04, high: 51.24, low: 49.90,close: 51.14,volume: 64678247},
      {date: "15-Oct-13", open: 49.99, high: 51.00, low: 49.18,close: 49.50,volume: 81166571},
      {date: "14-Oct-13", open: 48.31, high: 49.63, low: 47.91,close: 49.51,volume: 68780552},
      {date: "11-Oct-13", open: 49.18, high: 49.87, low: 48.79,close: 49.11,volume: 58428451},
      {date: "10-Oct-13", open: 47.86, high: 49.68, low: 47.83,close: 49.05,volume: 99773784},
      {date: "9-Oct-13", open: 47.38, high: 47.84, low: 45.26,close: 46.77,volume: 147296862},
      {date: "8-Oct-13", open: 50.60, high: 50.60, low: 47.08,close: 47.14,volume: 136081330},
      {date: "7-Oct-13", open: 50.73, high: 51.29, low: 50.40,close: 50.52,volume: 57203957},
      {date: "4-Oct-13", open: 49.77, high: 51.16, low: 49.57,close: 51.04,volume: 74446947},
      {date: "3-Oct-13", open: 50.47, high: 50.72, low: 49.06,close: 49.18,volume: 82045323},
      {date: "2-Oct-13", open: 50.13, high: 51.10, low: 49.95,close: 50.28,volume: 62834429},
      {date: "1-Oct-13", open: 49.97, high: 51.03, low: 49.45,close: 50.42,volume: 98113699},
      {date: "30-Sep-13", open: 50.14, high: 51.60, low: 49.80,close: 50.23,volume: 100095417},
      {date: "27-Sep-13", open: 50.29, high: 51.28, low: 49.86,close: 51.24,volume: 81410460},
      {date: "26-Sep-13", open: 50.01, high: 50.60, low: 49.50,close: 50.39,volume: 98220046},
      {date: "25-Sep-13", open: 49.23, high: 49.54, low: 48.46,close: 49.46,volume: 87879619},
      {date: "24-Sep-13", open: 48.50, high: 49.66, low: 48.16,close: 48.45,volume: 136716101},
      {date: "23-Sep-13", open: 47.28, high: 47.55, low: 46.29,close: 47.19,volume: 75319202},
      {date: "20-Sep-13", open: 46.32, high: 47.60, low: 45.74,close: 47.49,volume: 115508400},
      {date: "19-Sep-13", open: 45.51, high: 46.05, low: 45.23,close: 45.98,volume: 63972369},
      {date: "18-Sep-13", open: 44.84, high: 45.47, low: 44.40,close: 45.23,volume: 79316945},
      {date: "17-Sep-13", open: 42.50, high: 45.44, low: 42.43,close: 45.07,volume: 91934557},
      {date: "16-Sep-13", open: 44.85, high: 44.94, low: 42.43,close: 42.51,volume: 70807761},
      {date: "13-Sep-13", open: 45.04, high: 45.08, low: 43.93,close: 44.31,volume: 52765299},
      {date: "12-Sep-13", open: 45.53, high: 45.62, low: 44.65,close: 44.75,volume: 68072239},
      {date: "11-Sep-13", open: 43.39, high: 45.09, low: 43.11,close: 45.04,volume: 71676653},
      {date: "10-Sep-13", open: 44.24, high: 44.26, low: 43.23,close: 43.60,volume: 54540282},
      {date: "9-Sep-13", open: 44.36, high: 44.79, low: 43.70,close: 44.04,volume: 75794696},
      {date: "6-Sep-13", open: 43.09, high: 44.61, low: 42.40,close: 43.95,volume: 117535626},
      {date: "5-Sep-13", open: 41.79, high: 42.76, low: 41.77,close: 42.66,volume: 50035380},
      {date: "4-Sep-13", open: 42.01, high: 42.17, low: 41.44,close: 41.78,volume: 42581854},
      {date: "3-Sep-13", open: 41.84, high: 42.16, low: 41.51,close: 41.87,volume: 48774896},
      {date: "30-Aug-13", open: 42.02, high: 42.26, low: 41.06,close: 41.29,volume: 67735053},
      {date: "29-Aug-13", open: 40.89, high: 41.78, low: 40.80,close: 41.28,volume: 58303395},
      {date: "28-Aug-13", open: 39.96, high: 40.85, low: 39.88,close: 40.55,volume: 57918194},
      {date: "27-Aug-13", open: 40.68, high: 41.20, low: 39.42,close: 39.64,volume: 72695050},
      {date: "26-Aug-13", open: 40.90, high: 41.94, low: 40.62,close: 41.34,volume: 94162358},
      {date: "23-Aug-13", open: 39.00, high: 40.63, low: 38.93,close: 40.55,volume: 86442283},
      {date: "22-Aug-13", open: 38.37, high: 38.75, low: 38.34,close: 38.55,volume: 21931163},
      {date: "21-Aug-13", open: 38.38, high: 38.85, low: 38.14,close: 38.32,volume: 46116868},
      {date: "20-Aug-13", open: 38.35, high: 38.58, low: 37.69,close: 38.41,volume: 57995140},
      {date: "19-Aug-13", open: 37.43, high: 38.28, low: 37.14,close: 37.81,volume: 57609591},
      {date: "16-Aug-13", open: 36.97, high: 37.49, low: 36.90,close: 37.08,volume: 45840714},
      {date: "15-Aug-13", open: 36.36, high: 37.07, low: 36.02,close: 36.56,volume: 56521095},
      {date: "14-Aug-13", open: 36.83, high: 37.55, low: 36.62,close: 36.65,volume: 48423890},
      {date: "13-Aug-13", open: 38.24, high: 38.32, low: 36.77,close: 37.02,volume: 65379198},
      {date: "12-Aug-13", open: 38.20, high: 38.50, low: 38.10,close: 38.22,volume: 31160951},
      {date: "9-Aug-13", open: 38.59, high: 38.74, low: 38.01,close: 38.50,volume: 43620024},
      {date: "8-Aug-13", open: 39.13, high: 39.19, low: 38.43,close: 38.54,volume: 41300906},
      {date: "7-Aug-13", open: 38.61, high: 38.94, low: 37.70,close: 38.87,volume: 68854764},
      {date: "6-Aug-13", open: 39.11, high: 39.25, low: 37.94,close: 38.55,volume: 63950791},
      {date: "5-Aug-13", open: 38.43, high: 39.32, low: 38.25,close: 39.19,volume: 79994774},
      {date: "2-Aug-13", open: 37.66, high: 38.49, low: 37.50,close: 38.05,volume: 73058424},
      {date: "1-Aug-13", open: 37.30, high: 38.29, low: 36.92,close: 37.49,volume: 106066472},
      {date: "31-Jul-13", open: 37.96, high: 38.31, low: 36.33,close: 36.80,volume: 154828679},
      {date: "30-Jul-13", open: 35.65, high: 37.96, low: 35.32,close: 37.63,volume: 173582710},
      {date: "29-Jul-13", open: 34.07, high: 35.63, low: 34.01,close: 35.43,volume: 124884870},
      {date: "26-Jul-13", open: 33.77, high: 34.73, low: 33.56,close: 34.01,volume: 136028897},
      {date: "25-Jul-13", open: 33.54, high: 34.88, low: 32.75,close: 34.36,volume: 365935212},
      {date: "24-Jul-13", open: 26.32, high: 26.53, low: 26.05,close: 26.51,volume: 82635587},
      {date: "23-Jul-13", open: 26.10, high: 26.30, low: 25.97,close: 26.13,volume: 28221534},
      {date: "22-Jul-13", open: 25.99, high: 26.13, low: 25.72,close: 26.04,volume: 27526213},
      {date: "19-Jul-13", open: 25.82, high: 26.11, low: 25.60,close: 25.88,volume: 46544938},
      {date: "18-Jul-13", open: 26.75, high: 26.77, low: 26.12,close: 26.18,volume: 24806825},
      {date: "17-Jul-13", open: 26.37, high: 26.78, low: 26.30,close: 26.65,volume: 21518463},
      {date: "16-Jul-13", open: 26.39, high: 26.75, low: 26.01,close: 26.32,volume: 30817554},
      {date: "15-Jul-13", open: 25.93, high: 26.43, low: 25.65,close: 26.28,volume: 24233957},
      {date: "12-Jul-13", open: 25.74, high: 25.93, low: 25.55,close: 25.91,volume: 16537840},
      {date: "11-Jul-13", open: 25.96, high: 26.00, low: 25.45,close: 25.81,volume: 26777354},
      {date: "10-Jul-13", open: 25.58, high: 25.83, low: 25.47,close: 25.80,volume: 26721794},
      {date: "9-Jul-13", open: 25.07, high: 25.49, low: 25.03,close: 25.48,volume: 30387889},
      {date: "8-Jul-13", open: 24.47, high: 25.04, low: 24.42,close: 24.71,volume: 27073983},
      {date: "5-Jul-13", open: 24.65, high: 24.66, low: 24.20,close: 24.37,volume: 20229451},
      {date: "3-Jul-13", open: 24.22, high: 24.71, low: 24.15,close: 24.52,volume: 10404332},
      {date: "2-Jul-13", open: 24.70, high: 24.77, low: 24.30,close: 24.41,volume: 18394008},
      {date: "1-Jul-13", open: 24.97, high: 25.06, low: 24.62,close: 24.81,volume: 20582195},
      {date: "28-Jun-13", open: 24.68, high: 24.98, low: 24.42,close: 24.88,volume: 96778879},
      {date: "27-Jun-13", open: 24.24, high: 24.84, low: 24.21,close: 24.66,volume: 34694013},
      {date: "26-Jun-13", open: 24.51, high: 24.65, low: 23.99,close: 24.16,volume: 29890205},
      {date: "25-Jun-13", open: 24.14, high: 24.43, low: 24.04,close: 24.25,volume: 24719988},
      {date: "24-Jun-13", open: 23.95, high: 24.11, low: 23.38,close: 23.94,volume: 40625948},
      {date: "21-Jun-13", open: 24.59, high: 24.70, low: 24.05,close: 24.53,volume: 45826173},
      {date: "20-Jun-13", open: 24.28, high: 24.74, low: 23.65,close: 23.90,volume: 42765586},
      {date: "19-Jun-13", open: 24.20, high: 25.19, low: 24.10,close: 24.31,volume: 31790525},
      {date: "18-Jun-13", open: 24.09, high: 24.69, low: 24.08,close: 24.21,volume: 36709004},
      {date: "17-Jun-13", open: 23.91, high: 24.25, low: 23.75,close: 24.02,volume: 33664419},
      {date: "14-Jun-13", open: 23.56, high: 23.89, low: 23.26,close: 23.63,volume: 30561387},
      {date: "13-Jun-13", open: 23.72, high: 23.83, low: 23.26,close: 23.73,volume: 31189247},
      {date: "12-Jun-13", open: 24.16, high: 24.26, low: 23.58,close: 23.77,volume: 26445790},
      {date: "11-Jun-13", open: 24.03, high: 24.35, low: 24.00,close: 24.03,volume: 29676383}
    ];
    const trades = [
      { date: data[67].date, type: "buy", price: data[67].low, low: data[67].low, high: data[67].high },
      { date: data[100].date, type: "sell", price: data[100].high, low: data[100].low, high: data[100].high },
      { date: data[130].date, type: "buy", price: data[130].low, low: data[130].low, high: data[130].high },
      { date: data[170].date, type: "sell", price: data[170].low, low: data[170].low, high: data[170].high }
    ];
    const closeValues = [
      {date: "14-Feb-14", open: 67.50, high: 67.58, low: 66.72,close: 67.09,volume: 36786427},
      {date: "21-Aug-13", open: 38.38, high: 38.85, low: 38.14,close: 38.32,volume: 46116868},
      {date: "27-Jun-13", open: 24.24, high: 24.84, low: 24.21,close: 24.66,volume: 34694013},
    ];
    const supstanceValues = [
      { start: new Date(2014, 2, 11), end: new Date(2014, 5, 9), value: 63.64 },
      { start: new Date(2013, 10, 21), end: new Date(2014, 2, 17), value: 55.50 }
    ];
    const trendlineData = [
      { start: { date: new Date(2014, 2, 11), value: 72.50 }, end: { date: new Date(2014, 5, 9), value: 63.34 } },
      { start: { date: new Date(2013, 10, 21), value: 43 }, end: { date: new Date(2014, 2, 17), value: 70.50 } }
    ];
    return {
      data: data,
      closeValues: closeValues,
      supstanceValues: supstanceValues,
      trades: trades,
      trendlineData: trendlineData
    };
  },
  afterModel(model) {
    const store = this.get('storage');

    let i = 0;
    setInterval(() => {
      if (i > model.data.length - 1) {
        i = 0;
      }
      store.addItem({
        date: new Date(),
        open: model.data[i].open,
        high: model.data[i].high,
        low: model.data[i].low,
        close: model.data[i].close,
        volume: model.data[i].volume
      });
      i++;
    }, 50);
  }
})