<template>
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
        </div>
  
        <!-- Address (Full Width) -->
        <div>
          <label for="address" class="block text-sm font-semibold">Address</label>
          <input 
            id="address"
            v-model="address" 
            type="text" 
            class="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
            required
          />
        </div>
  
        <!-- Message Input (Full Width) -->
        <div>
          <label for="message" class="block text-sm font-semibold">Message</label>
          <textarea 
            id="message"
            v-model="message" 
            rows="4" 
            class="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-200"
            required
          ></textarea>
        </div>
  
        <!-- Submit Button -->
        <button 
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { getFirestore, collection, addDoc } from 'firebase/firestore'
  import { initializeApp } from 'firebase/app'
  
  // Firebase Configuration
  const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_FIREBASE_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_ID",
    appId: "YOUR_APP_ID"
  }
  
  // Initialize Firebase & Firestore
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  
  const name = ref('')
  const email = ref('')
  const address = ref('')
  const message = ref('')
  
  const submitForm = async () => {
    try {
      await addDoc(collection(db, "messages"), {
        name: name.value,
        email: email.value,
        address: address.value,
        message: message.value,
        timestamp: new Date()
      })
      alert("Message sent successfully!")
      name.value = ""
      email.value = ""
      address.value = ""
      message.value = ""
    } catch (error) {
      alert("Error sending message: " + error.message)
    }
  }
  </script>
  