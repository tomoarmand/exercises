# Question 1

function Welcome() {
    return (
    <div>
    <h1>Welcome to React!</h1>
    </div>
    )
}

# Question 2

function HelloWorld() {
    return (
    <div>
    <p>Hello</p>
    <p>World</p>
    </div>
    )
}

# Question 3

function ProfilePicture() {
    return (
        <img src='../assets/images/profile-picture.jpg' alt='The users profile picture'/>
    )
}

# Question 4

function Generic() {
    return (
        <div>
        <p>{name}</p>
        <p>{age}</p>
        </div>
    )
}

# Question 5

I think the code is written correctly, it should render:

Apples
Green Apple
Green Apple
Green Apple

# Question 6

export default TableOfContents

# Question 7

import { Profile } from './src/components/Profile

# Question 8

The code is not written correctly.  The issue is that there is no parent element contaning the contents.

# Question 9

const Summary = () => {
  return (
      <div>
      <div class="title">
        <h1>My Site!</h1>
      </div>
      <p class="description">
        You can find my thoughts here
      </p>
        <br/><br/>
      <p>  
        <b>And</b> <i>I</i> have plenty of them!
      </p>
      </div>
  );
}

# Question 10

export Greeting(props) {
    return (
        <p>Hello {props.name}</p>
    )
}

# Question 11

import { Greeting } from './src/components/Greeting'

Greeting(props) {
    return (
        <div>
        <p>Hello {props.name}</p>
        </div>
    )
}

---------------------------------------------------

function App() {
  return (
    <>
    <Greeting name="Parmesan" />
    </>
  )
}
export default App