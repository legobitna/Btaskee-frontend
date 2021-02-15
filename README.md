# BTasKee front end 
## File information 
All the pages are in screens folder and components are in component folder 
### Screens folder 
* ServicePage : main page 
* ServiceRegisterPage : Service Register page. When you click the button at the service page, it move to this page
* OrderListPage: show the order list 

### Components 
* OrderCard : Card to show the each orders at `OrderListPage`
* ServiceCard: Card button to show the services at `ServicePage`(currently app only have house cleaning service) 
* DateTimePickerModal : modal to pick teh date and time at `ServiceRegisterPage`
* HouseNumberModal : modal to choose the house type and number at `ServiceRegisterPage`

### Redux
* action.js: async actions with redux-thunk middleware 
* reducer.js : reducers for get order list and register order 
* store.js 

### Other
* api.js : using axios to call the api 


