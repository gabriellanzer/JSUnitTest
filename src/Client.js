class Client {

	// Starts connection
	// Set Game Result callback
	// Default parameters
	constructor(IConnection){
		this.connection = IConnection
		this.connection.connect()
		this.connection.setResultCallback(this.onResult)
		this.roomId = -1
		this.roomsToShow = []
	}
	
	// Load from server and show
	listRooms(){
		this.roomsToShow = this.connection.listRooms()
	}
	
	// Send room to server
	// - Connect if name is available and pwd is in the size limit
	// - Error if name is unavailable
	createRoom(name, pwd){
		try {
			this.roomId = this.connection.createRoom(name, pwd)
		}
		catch(ex) {
			console.error(ex)
		}
	}
	
	// Try to connect to server
	// - Set id if pass
	// - Show error if id is not existent
	// - Show error if pwd is wrong
	connectToRoom(id, pwd){
		try {
			this.connection.connectToRoom(id, pwd)
			this.roomId = id
		}
		catch(ex) {
			console.error(ex)
		}
	}
	
	// Send players choice to server
	selectChoice(choice){
		try {
			this.connection.selectChoice(choice)
		}
		catch(ex) {
			console.error(ex)
		}
	}
	
	//Receives game result from server
	onResult(result){
		console.log("Result received: " + result)
	}
	
}
