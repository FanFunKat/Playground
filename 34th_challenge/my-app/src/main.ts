import { UserForm } from "./views/UserForm";
import { User } from "./models/User";


const test = document.getElementById('root');

const user = User.buildUser({ name: 'NAME', age: 20 });

const userForm = new UserForm(test, user);

userForm.render();


// import { User } from "./models/User";

// const collection = User.buildUserCollection();

// collection.on('change', () => {
//   console.log(collection);
// });

// collection.fetch();