<template>
  <div>
    <h1>This is an about page</h1>
    <button @click="toggleDarkMode">Toggle</button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDarkMode() {
      // Retrieve current dark mode state from localStorage
      let isDarkModeEnabled = localStorage.getItem("darkMode") === "true";

      // Get the HTML root element
      const element = document.documentElement; // Use document.documentElement to refer to the <html> element

      // Toggle dark mode state
      if (isDarkModeEnabled) {
        // Dark mode is currently enabled, so disable it
        element.classList.remove("dark"); // Remove the 'dark' class
        localStorage.setItem("darkMode", "false"); // Update localStorage
      } else {
        // Dark mode is currently disabled, so enable it
        element.classList.add("dark"); // Add the 'dark' class
        localStorage.setItem("darkMode", "true"); // Update localStorage
      }
    },
  },
};
</script>
