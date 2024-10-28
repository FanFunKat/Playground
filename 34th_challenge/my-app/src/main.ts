import { User } from './models/User';

const user = new User({ id: 1 });

user.fetch();

setTimeout(() => {
  console.log(user);
}, 4000);

// user.on('change', () => {
//   console.log('Change #1')
// });

// user.trigger('change');