class RadarChartModel {
    constructor(data) {

      this.userId = data.userId;
      this.kind = data.kind;
      this.performanceData = data.data.map((item) => {
        return {
          value: item.value,
          kind: this.kind[item.kind],
        };
      });
    }

  }
  
  export { RadarChartModel };