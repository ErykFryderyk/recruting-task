<template>
  <div class="modal modal__overlay">
    <div class="modal__inner">
      <div class="modal__header">
        <h1 class="modal__title">My new Modal</h1>
        <button class="modal__close-modal-btn"
          @click="$emit('toggle-modal')"
        >
          <font-awesome-icon icon="xmark" />
        </button>
      </div>
      <form class="form">
        <div class="form__elements">
          <label class="form__form-element-label" for="">Name:</label>
          <input class="form__form-element-input" type="text">
          <label class="form__form-element-label" for="">Lastname:</label>
          <input class="form__form-element-input" type="text">
          <label class="form__form-element-label" for="">E-mail:</label>
          <input class="form__form-element-input" type="text">
          <label class="form__form-element-label" for="">Text:</label>
          <input class="form__form-element-input" type="text">
          <button type="submit">Wyslij</button>
        </div>
      </form>
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

  &__inner{
    position:relative;
    background-color: #c4c4c4;
    border-radius: 10px;
    width: 300px;
    padding: 15px;
    display: flex;
    flex-direction: column;
  }

  &__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title{
    font-size: 26px;
  }
  &__close-modal-btn{
      outline: none;
      border: none;
      padding:0 4px;
      text-align: center;
      line-height: 1px;
      background-color: transparent;
      font-size: 28px;
      cursor: pointer;
      transition: .1s color ease-in;
      &:hover{
        color:#707070;
      }
  }
}

.form{
  display: flex;
  flex-direction: column;

  &__elements{
    display: flex;
    flex-direction: column;
  }
  &__form-element-label{
    transform: translateY(+15px);
  }
  &__form-element-input{
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #707070; 
  }
}
</style>