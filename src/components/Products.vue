<template>
  <div class="products">
    <ul>
      <li >
        <img alt="tree" src="../assets/tree.png" />
        <h3>Ultranet Platform</h3>
      </li>   

     <li>
        <img alt="mote" src="../assets/mote.png" />
        <h3>MoteOS for the edge </h3>
     </li> 

     <li>
        <img alt="fbots" src="../assets/fbots.png" />
        <h3>Flowbot Automation</h3>
      </li>
    </ul>

     <ul>
      <li>
        <img alt="tree" src="../assets/logo.png" />
        <h3>Jujue SaaS</h3>
      </li>   

     <li>
        <img alt="mote" src="../assets/smartscreen.png" />
        <h3>smartscreen</h3>
     </li> 

     <li>
        <img alt="fbots" src="../assets/ultrabuilder.png" />
        <h3>ultrabuilder</h3>
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name: "products",
};
</script>

<style scoped>
.products {
  /* position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left:0;
  z-index: 50; */
  background-color: rgba(255, 255, 255, 0.4196078431372549);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h3 {
  margin: 40px 0 0;
}
img {
  height: 100px;
}
</style>
