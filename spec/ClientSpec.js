
verify = function(mock) {
  return mock.verify()
}

describe("Client", function() {

  let mockedConn = new MockConnection()
  let mock = sinon.mock(mockedConn)
  let client = new Client(mockedConn)
  let verify = function() {
    mock.verify()
  }

  beforeEach(function() {

    //Instantiate Mock Class
    mockedConn = new MockConnection();

    //Create testing subject instance
    client = new Client(mockedConn);

    //Criar objeto que testa as chamadas da interface mockada
    mock = sinon.mock(mockedConn)

  })

  describe("Integration Tests", function() {

    it("Should connect to server on Client creation", function(){
    
      //Definir a ação esperada do mock
      mock.expects("connect").once()
    
      //  A chamada de 'connect' a ser testada
      //  se dá na criação do Client
      client = new Client(mockedConn)
      
      //Verificar resultados
      expect(verify).not.toThrow()

    })

    it("Should get list of rooms from server", function(){

      //Definir a ação esperada do mock
      mock.expects("listRooms").once()
      
      client.listRooms()
      
      //Verificar resultados
      expect(verify).not.toThrow()
      
    })

    it("Should call createRoom in server", function(){
    
      //Definir a ação esperada do mock
      mock.expects("createRoom").once()
    
      client.createRoom('Sala do Rafael', 'something')
      
      //Verificar resultados
      expect(verify).not.toThrow()

    })

    it("Should perform connection to a valid room", function(){
    
      //Definir a ação esperada do mock
      mock.expects("connectToRoom").once()
    
      client.connectToRoom(1, 'menorQue11')
      
      //Verificar resultados
      expect(verify).not.toThrow()

    })

    it("Should call 'selectChoice' on connection for each action", function(){
    
      //Definir a ação esperada do mock
      mock.expects("selectChoice").thrice()
    
      client.selectChoice('PEDRA')
      client.selectChoice('PAPEL')
      client.selectChoice('TESOURA')
      
      //Verificar resultados
      expect(verify).not.toThrow()

    })

    it("Should set result callback for connection", function(){
    
      //Definir a ação esperada do mock
      mock.expects("setResultCallback").once()
    
      //  A chamada de 'setResultCallback' a
      //  ser testada se dá na criação do Client
      client = new Client(mockedConn)
      
      //Verificar resultados
      expect(verify).not.toThrow()

    })

  })

  describe("Result Tests", function() {
  
    it("Should store rooms list from server", function() {
      
      client.listRooms()
      
      expect(client.roomsToShow).toEqual(mockedConn.rooms)

    })

    it("Should create a room and store its ID", function() {
      
      client.createRoom('Sala do Rafael', 'something')
      
      expect(client.roomId).toEqual(2)

    })

    it("Should connect to a room and store its ID", function() {
      
      client.connectToRoom(0, 'menorQue11')
      
      expect(client.roomId).toEqual(0)

    })
  
  })
})