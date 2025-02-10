<div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h2 class="text-2xl font-bold mb-4 text-center">Contact Us</h2>

    <form @submit.prevent="submitForm" class="space-y-4">
      <!-- Name & Email Side by Side -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="name" class="block text-sm font-semibold">Name</label>
          <input 
            id="name"
            v-model="name" 
            type="text" 
            class="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-semibold">Email</label>
          <input 
            id="email"
            v-model="email" 
            type="email" 
            class="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
            required
          />
        </div>
      </div> -->

      <!-- Message Input
     
    </form>
  </div>
</template>