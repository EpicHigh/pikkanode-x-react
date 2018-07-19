<img src="https://raw.githubusercontent.com/panotza/pikkanode/master/pikkanode.png" alt="Pikkanode Logo" width="450">


# Project Pikkanode
## Homework 23.1, 23.2, 24.1, 24.2 and 26.1
### Introduction of React & JSX
This React app combine many homework together. The links
in this project can not use.
#### 23.1: Build components
1. Remember the project building pattern.
2. Call a TA for test your memory.
#### 23.2: Pikkanode X React
1. Use `Create React App` to create a project.
2. Write a homepage UI of Pikkanode by requirement
    - A navbar has a logo, a create pikka, signup, signin, signout.
    - Card rows
    
### React Props, State & Event Handler
#### 24.1: Pikkanode Picture Card
Build a picture card component to display each picture card. By this component will get prop values as follows
- `id`: an id of Pikka
- `imgSrc`: an image source
- `createBy`: who is post this photo?
- `date`: post date;
- `likeCount`: a number of likes
- `commentCount`: a number of comment

This is not connect the database yet, So I mock the data.

### React Router, Refs & Axios
#### 26.1: Pikkanode SignUp Page
Use `react-router` to do the path `/signup` and make the components `<signup/>` that have elements as follows
- Email, password, confirm password and a signup button (Validate what did user type).
- After signup, send what did user type in json file to a server and `console.log` things that server responses.

[Use this fetch function.](https://github.com/panotza/pikkanode/blob/master/api-tester.js)
