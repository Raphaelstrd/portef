<template>
            <h1 class="text-5xl font-bold my-10">Me contacter</h1>

    <form @submit.prevent="submitForm">
        <p class="text-lg py-2 font-bold mt-2">Nom :</p> <input class="border-2 border-black rounded-md w-full h-10 p-3" placeholder="David Gilmour" type="text" name="name" v-model="form.name" />
        <p class="text-lg py-2 font-bold mt-2">Email :</p> <input class="border-2 border-black rounded-md w-full h-10 p-3" placeholder="davegil@gmail.com" type="email" name="email"  v-model="form.email"/>
        <p class="text-lg py-2 font-bold mt-2">Message :</p> <textarea class="border-2 border-black rounded-md w-full h-20 p-3" placeholder="..." name="message" v-model="form.message"></textarea>
      <button class="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-5 rounded float-left mt-12 transition-all duration-450 cursor-pointer mb-10" type="submit">Envoyer</button>
    </form>
</template>


<script setup>
import { ref } from 'vue';

const form = ref({
  access_key: "7c1f38b5-7ea5-463b-a254-0ad07f939b5d",
  subject: "New Submission from Web3Forms",
  name: "",
  email: "",
  message: "",

});

const result = ref("");
const status = ref("");

const submitForm = async () => {
  result.value = "Please wait...";
  try {
    const response = await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: form.value,
    });

    console.log(response); // You can remove this line if you don't need it

    result.value = response.message;

    if (response.status === 200) {
      status.value = "success";
    } else {
      console.log(response); // Log for debugging, can be removed
      status.value = "error";
    }
  } catch (error) {
    console.log(error); // Log for debugging, can be removed
    status.value = "error";
    result.value = "Something went wrong!";
  } finally {
    // Reset form after submission
    form.value.name = "";
    form.value.email = "";
    form.value.message = "Message envoyé !";

    // Clear result and status after 5 seconds
    setTimeout(() => {
      result.value = "";
      status.value = "";
    }, 5000);
  }
};
</script>