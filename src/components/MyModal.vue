<template>
  <div class="modal modal__overlay">
    <div class="modal-form">
      <h1>My new Modal</h1>
      <button class="modal-form__close-modal-btn"
        @click="$emit('toggle-modal')"
      >
        <font-awesome-icon icon="xmark" />
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name:'MyModal',
  }
</script>

<style lang="scss" scoped>
.modal{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content:center;
  align-items: center;
  
  &__overlay{
    background-color: rgba(0, 0, 0, 0.705);
  }

  
}
.modal-form{
  position:relative;
  background-color: #c4c4c4;
  border-radius: 10px;
  width: 300px;
  padding: 15px;
  display: flex;
  flex-direction: column;

  &__close-modal-btn{
    font-size: 30px;
    cursor: pointer;
  }
}
</style>