<template>
  <div>
    <div>Header</div>
    <div class="flex flex-col md:flex-row">
      <div class="md:w-32 bg-sky-500">Sidebar</div>
      <div class="w-full bg-red-600">Main Content</div>
    </div>
  </div>

  <div class="mt-5 flex w-full flex-wrap">
    <div class="w-32 grow">01</div>
    <div class="w-32 grow">02</div>
    <div class="w-32 grow">03</div>
    <div class="w-32 grow">04</div>
    <div class="w-32 grow">05</div>
  </div>

  <div class="mt-5">
    <div class="flex items-center justify-evenly gap-3">
      <div>Justify</div>
      <div>
        <h1 class="font-bold">Main Content</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
          nesciunt voluptates doloribus mollitia et assumenda molestias quaerat
          non possimus iure nemo magni, rerum eius accusamus, consectetur velit
          consequatur laboriosam repellendus!
        </p>
      </div>
      <div>Justify</div>
    </div>
  </div>
</template>
