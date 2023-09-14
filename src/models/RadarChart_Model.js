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
      // Triez les performances en fonction de l'ordre souhaité
      return this._performance.sort((a, b) => {
        const order = ["Intensité", "Vitesse", "Force", "Endurance", "Énergie", "Cardio"];
        return order.indexOf(a.kind) - order.indexOf(b.kind);
      });
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
  