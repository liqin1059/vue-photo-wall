<template>
  <div id="app">
    <photo-wall :photoData="photoData" :boxStyle="boxStyle"></photo-wall>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      photoData: [],
      boxStyle: {
        'width': '80%'
      }
    }
  },
  methods: {
    // 随机生成0-最大值的不重复的27个数字
    randomNumber(numLength, max) {
      let _arr = [];
      for (var i = 1; i < max; i++) {
        _arr.push(i);
      };
      _arr.sort(function() {
        return Math.random() - 0.5;
      });
      _arr.length = parseInt(numLength);
      return _arr;
    },
  },
  mounted() {
    let _array = this.randomNumber(27, 27);
    _array.map((item) => {
      this.$data.photoData.push({
        src: `/static/${item}.jpg`
      });
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
