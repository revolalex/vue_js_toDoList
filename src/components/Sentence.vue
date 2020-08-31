<template>
  <div>
    
    <p
      v-if="numberOfToDo() === numberOfToDoTrue() 
      && numberOfToDo() > 0"
      id="timeToWork"
      key="list">
      <b-icon-emoji-angry class="iconRight"></b-icon-emoji-angry>
      It's time to start working you have {{numberOfToDoTrue()}} tasks to do !!
      <b-icon-emoji-angry class="iconLeft"></b-icon-emoji-angry>
    </p>

    <p v-else-if="numberOfToDoFalse() < halfNumberOfToDo()" id="continue">
      <b-icon-emoji-smile class="iconRight"></b-icon-emoji-smile>
      Continue that way and you will finish soon, still have
      {{numberOfToDoTrue()}}/{{numberOfToDo()}} tasks
      <b-icon-emoji-smile class="iconLeft"></b-icon-emoji-smile>
    </p>

    <p
      v-else-if="numberOfToDoFalse() >= halfNumberOfToDo()
      && numberOfToDoFalse() < numberOfToDo()"
      id="good"
    >
      <b-icon-emoji-laughing class="iconRight"></b-icon-emoji-laughing>
      Good !! you made half or more {{numberOfToDoTrue()}}/{{numberOfToDo()}} tasks
      <b-icon-emoji-laughing class="iconLeft"></b-icon-emoji-laughing>
    </p>

    <p
      v-if="numberOfToDo() > 0 
      && numberOfToDo() === numberOfToDoFalse()"
      id="congratulation"
    >
      <b-icon-emoji-sunglasses class="iconRight"></b-icon-emoji-sunglasses>
      Congratulation !! You finished all the {{numberOfToDo()}} tasks
      <b-icon-emoji-sunglasses class="iconLeft"></b-icon-emoji-sunglasses>
    </p>

    <p
      v-if="numberOfToDo() === numberOfToDoTrue() 
    && numberOfToDo() > 0"
      id="timeToWork"
    >You are a joke, a {{numberOfToDoFalse()}} !!</p>

    <p
      v-else-if="numberOfToDoFalse() < halfNumberOfToDo()"
      id="continue"
    >Work more !! {{numberOfToDoFalse()}}</p>

    <p
      v-else-if="numberOfToDoFalse() >= halfNumberOfToDo() 
      && numberOfToDoFalse() < numberOfToDo()"
      id="good"
    >Continue {{numberOfToDoFalse()}} toDo done !</p>

    <p
      v-if="numberOfToDo() === numberOfToDoFalse() 
    && numberOfToDo() > 0"
      id="congratulation"
    >Bravo !! All done Superman</p>

    <transition name="fade">
      <img
        src="../assets/super.png"
        alt="superman"
        v-if="numberOfToDo() === numberOfToDoFalse() && numberOfToDo() > 0"
      />
    </transition>
    <transition name="fade" v-if="numberOfToDo() == numberOfToDoTrue()  && numberOfToDo() > 0 ">
      <img src="../assets/joker.png" alt="joker" />
    </transition>

    <div class="flier">
      <img
        id="logoSup"
        src="../assets/superman.png"
        alt="superman"
        v-if="numberOfToDo() === numberOfToDoFalse() && numberOfToDo() > 0"
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Sentence",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    numberOfToDo: function () {
      return this.list.length;
    },
    numberOfToDoTrue: function () {
      let toDoTrue = 0;
      this.list.forEach((element) => {
        if (element.todo) {
          toDoTrue++;
        }
      });
      return toDoTrue;
    },
    halfNumberOfToDo: function () {
      return this.list.length / 2;
    },
    numberOfToDoFalse: function () {
      let toDoFalse = 0;
      this.list.forEach((element) => {
        if (element.todo == false) {
          toDoFalse++;
        }
      });
      return toDoFalse;
    },
  },
  mounted() {
    axios.get("http://localhost:8081/todo/").then((response) => {
      if (this.whatToDisplay == "done") {
        response.data = response.data.filter((element) => !element.todo);
      } else if (this.whatToDisplay == "all") {
        response.data = response.data.filter((element) => element.name);
      } else if (this.whatToDisplay == "todo") {
        response.data = response.data.filter((element) => element.todo);
      }
      this.list = response.data;
    });
  },
  updated() {
    axios.get("http://localhost:8081/todo/").then((response) => {
      if (this.whatToDisplay == "done") {
        response.data = response.data.filter((element) => !element.todo);
      } else if (this.whatToDisplay == "all") {
        response.data = response.data.filter((element) => element.name);
      } else if (this.whatToDisplay == "todo") {
        response.data = response.data.filter((element) => element.todo);
      }
      this.list = response.data;
    });
  },
};
</script>
<style>
p {
  font-size: 1.3em;
}
#timeToWork {
  color: red;
}
#continue {
  color: orange;
}
#good {
  color: rgb(111, 214, 111);
}
#congratulation {
  color: rgb(5, 160, 26);
}
.iconRight {
  padding-right: 2em;
}
.iconLeft {
  padding-left: 1em;
}

.flier {
  pointer-events: none;
}

.flier > * {
  /* Adjust animation duration to change the element’s speed */
  animation: fly 50s linear infinite;
  pointer-events: none !important;
  top: 0;
  left: 0;
  transform: translateX(-120%) translateY(-120%) rotateZ(0);
  position: fixed;
  animation-delay: 1s;
  z-index: 999999;
}

/* Keyframe values control where the element will begin
    and end its trajectory across the screen. Each rule
    represents a path the element follows across the screen. */

@keyframes fly {
  98.001%,
  0% {
    display: block;
    transform: translateX(-200%) translateY(100vh) rotateZ(0deg);
  }

  15% {
    transform: translateX(100vw) translateY(-100%) rotateZ(180deg);
  }

  15.001%,
  18% {
    transform: translateX(100vw) translateY(-30%) rotateZ(0deg);
  }

  40% {
    transform: translateX(-200%) translateY(3vh) rotateZ(-180deg);
  }

  40.001%,
  43% {
    transform: translateX(-200%) translateY(-100%) rotateZ(-180deg);
  }

  65% {
    transform: translateX(100vw) translateY(50vh) rotateZ(0deg);
  }

  65.001%,
  68% {
    transform: translateX(20vw) translateY(-200%) rotateZ(180deg);
  }

  95% {
    transform: translateX(10vw) translateY(100vh) rotateZ(0deg);
  }
}
</style>