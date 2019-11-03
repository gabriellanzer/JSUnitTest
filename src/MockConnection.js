class MockConnection extends IConnection {
	constructor() {
		super()
		this.rooms = [
			{id: 0, name: "Sala 1"}, 
			{id: 1, name: "Sala 2"}
		]
	}

	connect() {}
	listRooms() {
		return this.rooms
	}
	createRoom(name, pwd) {
		if(!name) {
			throw new Error("No Room name!")
		}
		const rooms = this.rooms
		for (let i = 0; i < rooms.length; i++) {
			if(rooms[i].name === name) {
				throw new Error("Room with given name already exists!")
			}
		}

		if(pwd && pwd.length > 10) {
			throw new Error("Password bigger then limit (10)!")
		}
		//Return Room ID
		return 2
	}
	connectToRoom(id, pwd) {
		const rooms = this.listRooms()
		let foundRoom = false;
		for (let i = 0; i < rooms.length; i++) {
			if(rooms[i].id === id) {
				foundRoom = true;
				break;
			}
		}

		if(!foundRoom) {
			throw new Error("No Room with given ID!")
		}

		if(pwd !== "menorQue11") {
			throw new Error("Password is incorrect!")
		}
	}

	selectChoice(choice) {
		const validChoices = ['PEDRA', 'PAPEL', 'TESOURA']
		for(let i = 0; i < validChoices.length; i++) {
			if(validChoices[i] === choice){
				return true;
			}
		}

		throw new Error("Choice doesn't match valid options!")
	}

	setResultCallback(callback) {
		if(!callback || typeof(callback) !== 'function') {
			throw new Error('Invalid callback for Result')
		}		
	}
}