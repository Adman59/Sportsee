class RadarChartModel {
  constructor(performances) {
      this.userId = performances.userId;
      this.kind = performances.kind;
      this._performance = performances.data.map((performance) => ({
          kind: this.initKind(performance.kind), // Utilisation de la fonction initKind
          value: performance.value,
      }));
  }

  get performance() {
      return this._performance;
  }

  initKind(kind) {
      switch (kind) {
          case 1:
              return "Cardio";
          case 2:
              return "Énergie";
          case 3:
              return "Endurance";
          case 4:
              return "Force";
          case 5:
              return "Vitesse";
          case 6:
              return "Intensité";
          default:
              return ""; // Valeur par défaut si le kind n'est pas reconnu
      }
  }
}

export { RadarChartModel };