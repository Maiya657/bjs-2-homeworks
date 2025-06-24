class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (time === null || callback === undefined) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		const foundTime = this.alarmCollection.find((value, i) => value.time === time)
		if (foundTime !== undefined) {
			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			callback: callback,
			time: time,
			canCall: true
		})
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((value, i) => value.time !== time)
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}

		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach((value) => {
				if (value.time === this.getCurrentFormattedTime() && value.canCall) {
					value.canCall = false;
					value.callback();
				}
			})
		}, 1000)
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((value) => {
			value.canCall = true;
		})
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}