<template>
  <nav>
    <img alt="logo" src="../assets/logo.png" />
    <h1>Welcome to page://am</h1>
    <ul class="nav-link">
      <li><a href="/"> Home</a></li>
      <li><a href="/products"> Product</a></li>
      <li><a href="/about"> About</a></li>
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
