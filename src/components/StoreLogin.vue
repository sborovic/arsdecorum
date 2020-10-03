<template>
  <SfModal id="login" :visible="visible" :title="modalTitle" @close="this.$emit('close')">
    <transition name="sf-fade" mode="out-in">
      <div v-if="isLogIn" key="log-in" class="modal-content">
        <form class="form" @submit.prevent="() => false">
          <SfInput
            v-model.trim="email"
            name="email"
            label="Your email"
            class="form__element"
            type="email"
          />
          <SfInput
            v-model="password"
            name="password"
            label="Password"
            type="password"
            class="form__element"
            :has-show-password="true"
          />
          <SfCheckbox
            v-model="rememberMe"
            name="remember-me"
            label="Remember me"
            class="form__element form__checkbox"
          />
          <SfButton type="submit" class="sf-button--full-width form__submit" @click='login'>
            Log In
          </SfButton>
        </form>
        <SfButton class="sf-button--text action-button">
          Forgotten password?
        </SfButton>
        <div class="aside">
          <SfHeading
            title="Don't have an account yet?"
            :level="3"
            class="aside__heading"
          />
          <SfButton class="sf-button--text" @click="isLogIn = false">
            Register now
          </SfButton>
        </div>
      </div>
      <div v-else key="sign-up" class="modal-content">
        <form class="form" @submit.prevent="() => false">
          <SfInput
            v-model.trim="firstName"
            name="first-name"
            label="Name"
            class="form__element"
          />
          <SfInput
            v-model.trim="lastName"
            name="last-name"
            label="Last Name"
            class="form__element"
          />
          <SfInput
            v-model.trim="email"
            name="email"
            label="Your email"
            class="form__element"
            type="email"
          />
          <SfInput
            v-model="password"
            name="password"
            label="Password"
            type="password"
            class="form__element"
            :valid="passwordValid"
            :error-message="passwordErrorMessage"
          />
          <SfButton type="submit" class="sf-button--full-width form__submit" @click='signUp'>
            Create an account
          </SfButton>
        </form>
        <SfButton class="sf-button--text action-button" @click="isLogIn = true">
          or Log In To Your Account
        </SfButton>
      </div>
    </transition>
  </SfModal>
</template>

<script>
import {
  SfModal,
  SfInput,
  SfButton,
  SfCheckbox,
  SfHeading,
} from '@storefront-ui/vue';
import { mapActions } from 'vuex';

export default {
  name: 'StoreLogin',
  components: {
    SfModal,
    SfInput,
    SfButton,
    SfCheckbox,
    SfHeading,
  },
  props: {
    visible: Boolean,
  },
  data() {
    return {
      isLogIn: true,
      email: '',
      password: '',
      passwordValid: true,
      passwordErrorMessage: '',
      createAccount: false,
      rememberMe: false,
      firstName: '',
      lastName: '',
    };
  },
  computed: {
    modalTitle() {
      return this.isLogIn ? 'Log In' : 'Join Vue Storefront';
    },
  },
  watch: {
    isLogIn() {
      this.resetAll();
    },
  },
  methods: {
    ...mapActions(['signUpAction']),
    resetAll() {
      this.email = '';
      this.password = '';
      this.createAccount = false;
      this.rememberMe = false;
      this.firstName = '';
      this.lastName = '';
    },
    close() {
      this.resetAll();
      this.$emit('close');
    },
    signUp() {
      this.signUpAction({ email: this.email, password: this.password });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.modal-content,
.aside {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form {
  width: 100%;
  &__element {
    margin: var(--spacer-base) 0;
  }
  &__checkbox {
    margin: var(--spacer-xl) 0 var(--spacer-2xl) 0;
  }
  &__submit {
    margin: var(--spacer-xl) 0 0 0;
  }
}
.action-button {
  margin: var(--spacer-xl) 0;
}
.aside {
  margin: 0 0 var(--spacer-xl) 0;
  &__heading {
    --heading-title-color: var(--c-primary);
    margin: 0 0 var(--spacer-sm) 0;
  }
}
</style>
