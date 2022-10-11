# [3 good things of OOP approach in Express.js with TypeScript](https://dev.to/koichi_t/3-good-things-of-oop-approach-in-expressjs-with-typescript-4o83)

##  What TypeScript enables
TypeScript provides a strict typing system for JavaScript projects and saves programmers from errors during coding. In addition, it enables to use of Object-Oriented Programming(OOP) style by giving the 'Interface' and 'Abstract' class. 
 
## Not only for the client-side
Using TypeScript has become popular on the client side, but it is also applicable to server-side JavaScript. Express.js is a web framework of Node.js, a runtime environment that enables JavaScript codes to work on the server side, and TypeScript is also used with Express.

## Common style of Express
Typical Express code is written in the functional programming style, as it takes a callback function at once.

```js
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world');
});
```

But, when you use TypeScript, you can make use of the Class-based style and see several merits of it.



## 3 advantages of using TypeScript with OOP
These are the positive merits when you take OOP approach:
1. Reduce the number of type declarations
2. Utilize design pattern 
3. Use Decorators


### Reduce the number of type declarations
 
When you write controllers, you need to export all variables and type declarations. Having a controller class can put them together.
  
This is an example:
`controller/users.ts`
```ts
export class UsersController {
  public async createUser(req: Request, res: Response) {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  }

  public async fetchUsers(req: Request, res: Response) {
    const users = await User.find({});
    res.status(200).send(users);
  }
}
```

The router should know the controller is UsersController and detect its type.

`routes/users.ts`
```ts
import { Router } from 'express';
import { UsersController } from '../controllers/users';

const router = Router();
const usersController = new UsersController();
router.get('/', usersController.fetchUsers);
router.get('/create', usersController.createUser);
```

You can also make a router class.



### Design patterns
Design patterns are common solution patterns of software development, they go with the OOP. 
- GoF Design Patterns
- DAO Design Pattern


### Decorators
> A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.
From [TypeScript Official Site](https://www.typescriptlang.org/docs/handbook/decorators.html)
Decorators are TypeScript specialty, and it is based on the OOP approach. For example, you can execute some processes before a class instance is generated.

```ts
const Something = (constructor: Function) => {
  console.log('Some functions before the class instantiate');
}

@Something
class User {
  constructor(name: string) {
    console.log(`User ${name} is created`);
  }
}

const user1 = new User('user2');
const user2 = new User('user1');
```
The output is 
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dvv9vqbghdzmogghgzq2.png)

You can set more than one decorators.


## Conclusion
You can make the most of OOP and the unique features of TypeScript in Express.　
You may also like [Nest.js](https://nestjs.com/) or [Deno](https://deno.land/); Both are runtime environments and natively support TypeScript.