<template>
  <div class="col land-page">
    <div class="row links">
      <First />

      <Second />

      <Third />

      <Fourth />
    </div>
  </div>
</template>

<script>
// components
import First from '~/components/land/Links/test/index'
import Second from '~/components/land/Links/second/index'
import Third from '~/components/land/Links/third/index'
import Fourth from '~/components/land/Links/fourth/index'

export default {
  name: 'Links',
  components: {
    First,
    Second,
    Third,
    Fourth,
  },
}
</script>

<style lang="scss">
.land-page .links a,
.land-page .links .a {
  display: block;
  background: #fe0000;
  color: white;
  border: 10px solid black;
  text-align: center;
  margin: 10px auto;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 10px;
  position: relative;

  .nested-menu {
    display: none;
    position: absolute;
    z-index: 4;
    background: none;
    top: 0;
    right: 100%;

    li {
      text-align: center;
      .a,
      a {
        margin: 0;
        margin-bottom: 3px;
        border: 4px solid #22d6e9;
        background: #251843;
        padding: 5px 10px;
        color: white;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 15px;
      }
    }
  }
  &:hover > .nested-menu {
    display: block;
  }
}
h1 {
  text-align: center;
  font-weight: 900;
  margin: 10px auto;
}
</style>
