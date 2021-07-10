<template>
  <div class="col land-page">
    <div class="row links">
      <First />

      <Fourth />
      <Third />
    </div>
  </div>
</template>

<script>
// components
import First from '~/components/land/Links/test/index'
import Third from '~/components/land/Links/third/index'
import Fourth from '~/components/land/Links/fourth/index'

export default {
  name: 'Links',
  components: {
    First,
    Third,
    Fourth,
  },
}
</script>

<style lang="scss">
.row {
  height: 100%;
}

.land-page .links .col-3 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  z-index: 2;
}
.land-page .links a,
.land-page .links .a {
  display: block;
  color: black;
  background-image: linear-gradient(-80deg, #ce1212, #810000);
  background-image: radial-gradient(#ce1212, #810000);
  color: white;
  // box-shadow: inset 0 -6px 9px gold;
  // border: 5px solid black;
  text-align: center;
  margin: 10px auto;
  padding: 5px 15px;
  width: 100%;
  font-size: 20px;
  border-radius: 5px;
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
        border: 2px solid #000;
        // background: #fac40a;
        padding: 5px 10px;
        // color: black;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 15px;
        box-shadow: none;
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

.land-page .links .col-3:last-of-type .nested-menu {
  right: auto;
  left: 100%;
}
</style>
