<template>
  <div class="grid" :style="[boxStyle]">
    <a rel="noopener noreferrer"
       v-for="(item, index) in photoData"
       :key="index"
       :href="item.src"
       target="_blank">
      <span class="grid-images"
            :src="item.src"
            alt=""
            v-if="item.src !== ''">
        <img class="grid-images-pic"
             :src="item.src">
      </span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'photo-wall',
  data() {
    return {
    };
  },
  props:{
    photoData: {
      type: Array,
      default: () => {
        return []
      },
      required: true
    },
    boxStyle: {
      type: Object,
      default: () => {
        return {}
      },
      required: false
    }
  },
  methods: {
    photoAnimate() {
      if ($('span.grid-images').size() <= 0) {
        return false;
      }
      var self = this;
      $('span.grid-images').each(function() {
        var d = Math.random() * 2000;
        $(this).delay(d).animate({ opacity: 0 }, {
          step(n) {
            $(this).css('transform', 'scale(' + (1 - n) + ')');
          },
          duration: 1000
        });
      }).promise().done(function() {
        return (function() {
          self.storm();
        }());
      });
    },
    storm() {
      if ($('span.grid-images').size() <= 0) {
        return false;
      }
      var self = this;
      $('span.grid-images').each(function(index, ele) {
        var d = Math.random() * 2000;
        $(ele).delay(d).animate({ opacity: 1 }, {
          duration: 1
        });
      }).promise().done(function() {
        return (function() {
          self.photoAnimate();
        }());
      });
    }
  },
  mounted() {
    var self = this;
    this.$nextTick(() => {
      self.photoAnimate();
    });
  },
  beforeDestroy() {
    $('span.grid-images').stop(false);
  }
};
</script>
<style scoped>
body {
  text-align: center;
}
.grid {
  height: 160px;
  perspective: 500px;
  text-align: center;
  margin: auto;
  overflow: hidden;
  background-color: #dcdcdc;
}
.grid-images {
  width: 70px;
  height: 70px;
  overflow: hidden;
  margin: 10px;
  display: inline-block;
  
}
.grid-images > .grid-images-pic{
  width: 100%;
}
@media screen and (max-width:2000px){
.grid {
  height: 220px;
}
.grid-images{
  width: 60px;
  height: 60px;
  margin: 10px;
}
}
@media screen and (max-width:1300px){}
</style>
