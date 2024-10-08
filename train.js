class TrainSchedule {
    constructor() {
        this.trains = [];
    }

    addTrain(trainNumber, arrivalTime, departureTime) {
        const train = {
            trainNumber,
            arrivalTime,
            departureTime
        };
        this.trains.push(train);
        this.displaySchedule();
    }

    displaySchedule() {
        const trainList = document.getElementById('trainList');
        trainList.innerHTML = '';
        } else {
            this.trains.forEach(train => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span>Train Number:</span> ${train.trainNumber}, 
                    <span>Arrival:</span> ${train.arrivalTime}, 
                    <span>Departure:</span> ${train.departureTime}
                `;
                trainList.appendChild(listItem);
            });
        }
    }
}

const schedule = new TrainSchedule();

document.getElementById('addTrainBtn').addEventListener('click', () => {
    const trainNumber = document.getElementById('trainNumber').value;
    const arrivalTime = document.getElementById('arrivalTime').value;
    const departureTime = document.getElementById('departureTime').value;

    if (trainNumber && arrivalTime && departureTime) {
        schedule.addTrain(trainNumber, arrivalTime, departureTime);
        document.getElementById('trainNumber').value = '';
        document.getElementById('arrivalTime').value = '';
        document.getElementById('departureTime').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});
