class LineChartModel {

  constructor(data) {

      this._data = data.sessions.map((session) => {
          return {
              name: this.initDay(session.day),
              ...session,
          };
      });
  }

  get sessions() {
      return this._data;
  }

  initDay = (day) => {
      switch (day) {
          case 1:
              return "L";
          case 2:
              return "M";
          case 3:
              return "M";
          case 4:
              return "J";
          case 5:
              return "V";
          case 6:
              return "S";
          case 7:
              return "D";
          default:
              break;
      }
  };
}

export  {LineChartModel } ;