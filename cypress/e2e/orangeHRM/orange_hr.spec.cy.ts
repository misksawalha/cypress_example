import LoginPage from '../../pageObject/loginPage'

//object from the class
const loginObj : LoginPage = new LoginPage();

let random:Number=(Math.random()*1000)
let idResponse:Number;
let flag:Number=0;
describe("Login Home Page", () => {
    beforeEach(function (){
        cy.visit("/web/index.php/auth/login");
        loginObj.login("Admin", "admin123");
    })

    it('Add new user using api',()=>{
        cy.request({
            method:'POST',
            url:'/web/index.php/api/v2/admin/users',
            body:{
                empNumber: 2,
                password:  "admin123",
                status: true,
                userRoleId: 2,
                username:`misk2000`
                //username:`misksawallha2000` 
            }
        })
        .then((response)=>{
            idResponse = response.body.data.id
            console.log(response.body.data.id)
          //responseObject = response.data.id
            expect(response).property('status').to.equal(200)
        })
    })
    afterEach(()=>{
         cy.request({
            method:"DELETE",
            url:"/web/index.php/api/v2/admin/users",
            body:{
                ids:[idResponse]
            }
         })
    })
    afterEach(() => {
        cy.request({
          method: "GET",
          url: "/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC",
        }).then((response) => {
          console.log(response.body.data)
          expect(response.status).to.equal(200); // Check the response status if needed
         for(let i=0;i<response.body.data.length;i++){
            if((response.body.data[i].userName)==("misk2000")){
                flag=1
               break
            }
         }
         console.log(flag)
         
        });
      });
      
  });
  

