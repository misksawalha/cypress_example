import addUser from "../../../../support/helper/signupHelper"
describe('Signup logic',()=>{
        it('signup: user should be able to create new user',()=>{
            addUser.addNewUserViaApi()
        })
})



















// import addUser from "../../../../support/helper/signupHelper"
// let random = Math.random()*10
// describe('Conduit: Signup Account', () => {
//     it('Conduit: Create New Account', () => {
//       addUser.conduitNewUserUsingAPI(`mesho@gmail${random}`,'mesho2000',`mesho${random}`)
//     })

//     it('Conduit: Create New Account', () => {
//       const apiPayload ={
//           "user": {
//           "username": `mesho${random*50}`,
//           "email": `mesho${random}@gmail.com${random*20}`,
//           "password": `mesho2000${random*30}`,
//       }
//       }
//       addUser.conduitNewUserUsingAPIPayload(apiPayload).then((response)=>{
//         expect(response.status).to.equal(201)
//       })
//     })
// })  
