<template>
  <div>
    <h1>This is a title</h1>
    <h2>This is a subtitle</h2>
    <p>This is a paragraph</p>
    <a href="https://www.google.com">This is an anchor</a>
    <div class="my-4">
      <button class="btn btn-primary">primary button</button>
    </div>
    <div class="my-4">
      <button class="btn btn-secondary">secondary button</button>
    </div>
    <div class="my-4">
      <button class="btn btn-primary" disabled>disabled button</button>
    </div>
    <div>
      <input type="text" placeholder="Username" />
    </div>
    <div>
      <input type="text" disabled />
    </div>
    <div>
      <input type="date" />
    </div>
    <div class="my-4 flex items-start">
      <input type="checkbox" id="checkbox" />
      <label for="checkbox"
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum in,
        ipsa nesciunt illo eos cupiditate blanditiis necessitatibus provident
        saepe a asperiores temporibus aliquid, ratione facere doloribus incidunt
        accusamus optio maiores?</label
      >
    </div>
    <div>
      <select name="" id="">
        <option value="">Option 1</option>
        <option value="">Option 2</option>
      </select>
    </div>
    <div class="Select">
      <div class="child" @click="toggleOptions">
        {{ selectedValue }}
      </div>
      <div v-if="isOpen">
        <ul class="flex flex-col divide-y border-t">
          <li @click="updateValue('Option 1')" class="child">Option 1</li>
          <li @click="updateValue('Option 2')" class="child">Option 2</li>
          <li @click="updateValue('Option 3')" class="child">Option 3</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      selectedValue: "Option 1",
    };
  },
  methods: {
    toggleOptions() {
      this.isOpen = !this.isOpen;
    },
    updateValue(value) {
      this.selectedValue = value;
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
