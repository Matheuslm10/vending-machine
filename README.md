<div align="center">
  <img src="https://user-images.githubusercontent.com/17602947/165657969-537df29a-14ff-4c1e-90cb-94a8babd333b.png" height="100">
    <h1 align="center">Vending Machine</h1>
</div>

<h4 align="center">
  Choose your favorite chocolates, insert the coins and be happy!
</h4>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Matheuslm10/vending-machine?style=plastic">
  <img alt="Javascript percentage" src="https://img.shields.io/github/languages/top/Matheuslm10/vending-machine?style=plastic">  
</p>

## :sparkles: The Project

The Observer design pattern - in front-end development - is very useful, for example, when: changes in the state of a component may require other components to change; the actual set of components is unknown or changes dynamically. These are some of the reasons why frontend frameworks like React.js and Vue.js implement this pattern "under the hood". 

I built this project to put into practice the concepts I learned about this design pattern. This project doesn't have a user interface.

### The Pattern Implementation

The Vending Machine module act as the Subject and notifies all the Observers (Cash Register and Storage modules):

<p align="center">
  <img alt="Concept Diagram that illustrates the Observer design pattern implementation" src="https://user-images.githubusercontent.com/17602947/165660926-3bbc56fa-07a5-49e4-a1e0-b0cada66da9f.svg"> 
</p>

The sequence diagram below is intended only to help understand a basic flow of actions. (This diagram does not follow UML standards, so it doesn't exactly represent the application's behavior)

<p align="center">
  <img alt="Sequence Diagram that illustrates the Observer design pattern implementation" src="https://user-images.githubusercontent.com/17602947/165662132-a6e51878-13dd-4e01-91ae-2c4e750f159b.svg"> 
</p>

## :computer: How to run

Clone the repository:

```
$ git clone https://github.com/Matheuslm10/vending-machine.git
```

Enter the directory:

```
$ cd vending-machine
```

Install the dependencies:

```
$ npm install
```

Run the unit tests and see the code coverage:

```
$ npm run test:open-browser-coverage
```

## :man_technologist: Author

[![Linkedin Badge](https://img.shields.io/badge/-Matheus_Machado-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/matheusmachado-dev/)  
:wave: Contact me!
