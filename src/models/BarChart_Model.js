class BarChartModel {
    constructor(data) {
      this.userId = data.userId;
      this.sessions = data.sessions.map(session => ({
        day: this.extractDay(session.day), // Extraction du jour de la date
        kilogram: session.kilogram,
        calories: session.calories
      }));
      this.minCalories = this.calculateMinCalories();
      this.maxCalories = this.calculateMaxCalories();
      this.minKilogram = this.calculateMinKilogram();
      this.maxKilogram = this.calculateMaxKilogram();
    }
  
    extractDay(dateString) {
      // Extraction du jour de la date (2020-07-01 -> "01")
      return new Date(dateString).getDate().toString();
    }
  
    calculateMinCalories() {
      // Calcul du minimum de calories parmi toutes les sessions
      return Math.min(...this.sessions.map(session => session.calories));
    }
  
    calculateMaxCalories() {
      // Calcul du maximum de calories parmi toutes les sessions
      return Math.max(...this.sessions.map(session => session.calories));
    }

    calculateMinKilogram() {
        // Calcul du minimum de kilogrammes parmi toutes les sessions
        return Math.min(...this.sessions.map(session => session.kilogram));
      }
    
    calculateMaxKilogram() {
    // Calcul du maximum de kilogrammes parmi toutes les sessions
    return Math.max(...this.sessions.map(session => session.kilogram));
    }
  }
  
  export { BarChartModel };