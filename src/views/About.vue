<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="about container">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8 about-text">
          <p>This is a project I completed during week 6 of the full stack programming course I took at Boise
            Codeworks.
            The back end was provided and creating the front end was my responsibility which was to be completed using
            the
            first framework introduced to us, Vue. The Objective of the game is select the deck of cards you want to
            play
            with and then face off against an opposing deck. Each card has a health value, defense value, and attack
            value.
            When attacking another card your attack points are subtracted by the opposing card's defense value, then
            their
            health is subtracted from your remaining attack points and vice versa. Additionally you can only see the
            back
            of the opponent's cards until you attack those respective cards. Each deck will have ten cards and the
            first
            one to run out loses. If you enjoyed this project you may find more at <a class="about-link" href="https://github.com/JThurston4"
              target="_blank">my
              github</a>.</p>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </div>
</template>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .hard {
    color: red;
  }

  .about-link:link {
    color: rgb(0, 119, 255);
    background-color: transparent;
    text-decoration: none;
  }

  .about-link:visited {
    color: rgb(59, 0, 196);
    background-color: transparent;
    text-decoration: none;
  }

  .about-link:hover {
    color: red;
    background-color: transparent;
    text-decoration: underline;
  }

  .about-link:active {
    color: rgb(0, 255, 179);
    background-color: transparent;
    text-decoration: underline;
  }

  .about-text {
    font-size: 20px;

  }
</style>