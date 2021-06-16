const supertest = require('supertest')
const app = require('../index')

const api = supertest(app)


describe('get api request to the server ->', () => {
     test('request returned as JSON', async () => {
      await api
        .get('/users')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })
  
    test('the number of users in the db are returned', async () => {
      const response = await api.get('/users')
      expect(response.body).toHaveLength(8)
    }) 
  
     test('a specific user is within returned blogs', async () => {
      const response = await api.get('/users/601c87c9152d7f7e66cee64c')
      console.log(response.body)
      const user = response.body.name
      console.log(user)
  
      expect(user).toEqual("Napoleon Bonaparte")
    }) 
  

     test('updating single user status', async () => {
          
          const updatedUSer = {
            name: "Winiston Churchil",
            status: 'Occupied',
          }
      
          await api
            .put("/users/601c8844152d7f7e66cee64d")
            .send(updatedUSer)
      
           const responseToTest = await api
                             .get("/users/601c8844152d7f7e66cee64d")

         const status = responseToTest.body.status
        
          expect(status).toEqual("Occupied")
        } )
    
  })