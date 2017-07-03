<template>
  <div id="app" class="app-layout">
    <div v-if="!currentMailer">
      <div>
        <input type="text" v-model="addressInput" placeholder="Enter Address">
        <button :disabled="addressInput == ''" @click="load(addressInput)">Load Wallet</button>
      </div>
      <div>Or</div>
      <div>
        <button @click="create()">Create Wallet</button>
      </div>
    </div>
    <div v-else>
      Hola Mailer
      {{ currentMailer.address }}
    </div>
  </div>
</template>

<script>
import factory from '../services/MailerFactory.js';

export default {
  name: 'app',
  data: function () {
    return {
      addressInput: '',
      factory: factory,
      currentMailer: null
    };
  },
  methods: {
    create () {
      this.factory.createMailer().then((_mailer) => {
        this.currentMailer = _mailer;
      });
    },
    load(_address) {
      this.factory.loadMailer(_address).then((_mailer) => {
        this.currentMailer = _mailer;
      });
    }
  }
}
</script>

<style lang="scss">
.app-layout {
}
</style>
