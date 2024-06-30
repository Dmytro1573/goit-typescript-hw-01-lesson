// let isDone: boolean = false;

// const name: string = "Bob";
// const lastName: string = "Jonson";
// const age: number = 30;
// const isHappy: boolean = true;
// const budget: null = null;
// const status: undefined = undefined;

type userProfile = {
  name: string;
  age: number;
  isActive: boolean;
};

function createUser(user: userProfile) {
  return `Hi, my name is ${user.name}, i am ${user.age} years old and i am ${user.isActive}`;
}

const user = {
  name: "Bob",
  age: 30,
  isActive: true,
};

console.log(createUser);
