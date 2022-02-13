<template>
  <nav>
    <img alt="logo" src="../assets/logo.png" />
    <h1>Welcome to page://tam</h1>
    <ul class="nav-link">
      <li><router-link to="/"> Home</router-link></li>
      <li><router-link to="/products"> Our Services</router-link></li>
      <li><router-link to="/about"> About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
img {
  height: 100px;
}
nav ul.nav-link {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
nav ul.nav-link a {
  color: white;
  text-decoration: none;
}
nav ul.nav-link a:hover {
  color: rgb(83, 203, 250);
}
</style>
