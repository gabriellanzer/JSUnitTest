class Client {
	constructor(){
		this.roomId = -1
		
		this.roomsToShow = []
	}
	
	function connect(ip) {
		
	}
	
	function listRooms(){
		// Load from server and show
	}
	
	function createRoom(name, pwd){
		// Send room to server
		// - Connect if name is available and pwd is in the size limit
		// - Error if name is unavailable
	}
	
	function connectToRoom(id, pwd){
		// Try to connect to server
		// - Set id if pass
		// - Show error if id is not existent
		// - Show error if pwd is wrong

	}
	
	function selectChoice(choice){
		// Send choice to server
	}
	
	function onResult(){
		// Get result from server
	}	
	
}

"test if listRooms shows lists from server" = function(){
	const client = new Client()
	
	client.listRooms()
	
	assert.equal(mockedRooms, client.roomsToShow)
}

"test createRoom" = function(){
	var mockServer = { start() { webSocket: {new WebSocket("localhost"); webSocket.} }, rooms: [{1, "a"}], createRoom() { ... }}
	var mock = sinon.mock(mockServer);
	const client = new Client()
	client.connect("localhost")
	
	mock.expects("createRoom").once().throws();
	
	//- Chamar createRoom do server
	//- ter roomId != -1
	client.createRoom("123", 123)	
	
	mock.verify();
}