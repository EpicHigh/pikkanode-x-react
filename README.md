<img src="https://raw.githubusercontent.com/panotza/pikkanode/master/pikkanode.png" alt="Pikkanode Logo" width="450">

# Project Pikkanode
## Homework 
- **23.1**: Build components
- **23.2**: Pikkanode X React
- **24.1**: Pikkanode Picture Card
- **26.1**: Pikkanode SignUp Page
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
Use `react-router` to make the path `/signup` and a component named `<signup/>` that have elements as follows
- Email, password, confirm password and a signup button (Validate what did user type).
- After signup, send what did user type in json file to a server and `console.log` things that server responses.
#### 26.2: Pikkanode SignIn Page
Use `react-router` to make the path `/signin` and a component named `<signin/>` that have elements as follows
- Email, password and sign in button, validate data too
- After press signin, the app will fetch data in JSON format to signin API. If the server responses "ok", `setState({isAuth: true})`.
#### 26.3 Pikkanode Create Page
Use `react-router` to make the path `/create` and a component named `<CreatePikka/>` that have elements as follows
- A form that contains a caption (textarea), a picture (file) and a create button.
- After press a create button, the app will fetch data in `multipart/from-data` to create API. If the server responses "ok", redirect to the path `/`
