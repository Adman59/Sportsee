import Calories from '@/assets/images/calories-icon.png';
import Glucides from '@/assets/images/fat-icon.png';
import Protéines from '@/assets/images/protein-icon.png';
import Lipides from '@/assets/images/carbs-icon.png';

class RadialChartModel {
    constructor(data) {
        this.firstName = data.userInfos.firstName
        this.lastName = data.userInfos.lastName
        this.age = data.userInfos.age
        this.todayScore = data.todayScore ? data.todayScore * 100 : data.score * 100
        this.keyData = [
            { imageData: Calories, name: 'Calories', value: data.keyData.calorieCount + 'kCal' },
            { imageData: Glucides, name: 'Glucides', value: data.keyData.carbohydrateCount + 'g' },
            { imageData: Lipides, name: 'Lipides', value: data.keyData.lipidCount + 'g' },
            { imageData: Protéines, name: 'Protéines', value: data.keyData.proteinCount + 'g' }
        ]
    }

}

export { RadialChartModel };  