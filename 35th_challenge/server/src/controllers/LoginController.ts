import { Request, Response, NextFunction } from "express";
import { get, controller, bodyValidator, post } from "./decorators"; // compact then before

// function logger(req: Request, res: Response, next: Function) {
//   console.log('Request was made!');
//   next();
// }

@controller('/auth')
class LoginController {

  @get('/login')
  // @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button >Submit</button>
    </form>
  `);
  };

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email && password && email === 'hi@hi.com' && password === 'password') {
      // mark this person as logged in
      req.session = { loggedIn: true };
      // redirect them to the root route
      res.redirect('/');
      res.send(email + password);
    } else {
      res.send('Invalid email or password');
    }

  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }

}