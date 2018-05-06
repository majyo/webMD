<template>
<button v-bind:class="[{normal: isNormal}, {delete: isDelete}, {execute: isExecute}]">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: 'MDButton',

  props: {
    bType: {
      type: String,
      default: "normal"
    }
  },

  data () {
    return {
      isNormal: false,
      isDelete: false,
      isExecute: false
    }
  },

  created: function () {
    switch (this.bType) {
      case "normal":
        this.isNormal = true;
        break;
      case "delete":
        this.isDelete = true;
        break;
      case "execute":
        this.isExecute = true;
        break;
      default:
        this.isNormal = true;
        break;
      alert(this.is);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  cursor: pointer;
  outline: none;
  border: none;
  text-align: center;
  font-size: 20px;
  font-family: sans-serif;
  line-height: 50px;
  min-width: 150px;
}

.normal {
  background-color: #6d6de6;
  color: #ffffff;
}

.normal:hover {
  background-color: #7a7ae6;
  color: #ffffff;
}

.normal:active {
  background-color: #5959e4;
  color: #ffffff;
}

.delete {
  background-color: #b82d28;
  color: #ffffff;
}

.delete:hover {
  background-color: #b93c38;
  color: #ffffff;
}

.delete:active {
  background-color: #a5110c;
  color: #ffffff;
}

.execute {
  background-color: #2b2b46;
  color: #ffffff;
}

.execute:hover {
  background-color: #313147;
  color: #ffffff;
}

.execute:active {
  background-color: #07070c;
  color: #ffffff;
}
</style>
