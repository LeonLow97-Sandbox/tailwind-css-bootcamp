<template>
  <div>
    <div class="m-4 bg-blue-500 font-bold text-white">Box with Margin</div>
  </div>
  <div>
    <div class="bg-red-500 p-4 font-bold text-white">Box with Padding</div>
  </div>

  <div class="mt-5">
    <h1 class="mb-4 text-2xl font-bold">This is my title</h1>
    <p>This is my paragraph</p>
  </div>

  <div class="mt-5">
    <div class="h-16 w-16 bg-red-500 opacity-20">&nbsp;</div>
    <div class="h-16 w-16 -mt-2 bg-green-500">Negative Margin</div>
  </div>

  <div class="mt-5 flex space-x-4">
    <div class="min-h-screen w-1/5 bg-red-500">Sidebar</div>
    <div class="w-4/5 bg-green-500">Main Content</div>
  </div>
</template>
