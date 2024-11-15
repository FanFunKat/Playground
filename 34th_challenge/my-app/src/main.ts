import { UserForm } from "./views/UserForm";

const test = document.getElementById('root');

const userForm = new UserForm(test);

userForm.render();


// import { User } from "./models/User";

// const collection = User.buildUserCollection();

// collection.on('change', () => {
//   console.log(collection);
// });

// collection.fetch();