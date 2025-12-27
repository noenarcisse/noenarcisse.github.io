<script setup>
    // https://loading.io/css/
    //https://github.com/loadingio/css-spinner/

    import { ref } from 'vue'

    const emit = defineEmits(['back'])

    function backHandler()
    {
        emit('back')
    }

</script>

<template>
    <div class="loading-wrapper">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <div class="loading-text">Fetching data</div>
    </div>
</template>


<style scoped>
.loading-wrapper
{
    /* background-color: red; */
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height:50vh;
}
.loading-text
{
    color: var(--white);
    font-family: Roboto;
}

.lds-ring {
  /* change color here */
  color: var(--white);
}
.lds-ring,
.lds-ring div {
  box-sizing: border-box;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid currentColor;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
