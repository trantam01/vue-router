<template>
  <div class="products">
    <ul>
      <li>
        <img alt="tree" src="../assets/tree.png" />

        <img alt="mote" src="../assets/mote.png" />

        <img alt="fbots" src="../assets/fbots.png" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "products",
};
</script>

<style>
.products {
  /* position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left:0;
  z-index: 50; */
  background-color: rgba(255, 255, 255, 0.4196078431372549);
}

img {
  height: 100px;
}
</style>
