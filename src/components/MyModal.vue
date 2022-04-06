<template>
  <div class="modal modal__overlay">
    <div class="modal__inner">
      <div class="modal__header">
        <h1 class="modal__title">Modal</h1>
        <button class="modal__close-modal-btn"
          @click="$emit('toggle-modal')"
        >
          <font-awesome-icon icon="xmark" />
        </button>
      </div>
      <form class="form">
        <div class="form__elements">
          <div class="field-container">
            <input class="field-input" autocompleted="off" type="text" name="name" required>
            <label class="field-placeholder" for="name">
                <span class="placeholder-name">Name</span>
            </label>
          </div>
          <div class="field-container">
            <input class="field-input" autocompleted="off" type="text" name="last-name" required>
            <label class="field-placeholder" for="last-name">
                <span class="placeholder-name">Last name</span>
            </label>
          </div>
          <div class="field-container">
            <input class="field-input" autocompleted="off" type="number" name="telephone" required>
            <label class="field-placeholder" for="telephone">
                <span class="placeholder-name">Telephone</span>
            </label>
          </div>
          <button class="form__form-submit-button" type="submit">Wyslij</button>
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
        color:#3b3b3b;
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
  &__form-submit-button{
    margin-top: 20px;
    width: 100px;
    font-size: 16px;
    padding: 5px 0;
    border-radius: 5px;
    border: 1px solid #707070;
    cursor: pointer;
    outline: none;
    transition: background-color .1s ease-in-out;
    &:hover{
      background: #707070;
    }
  }
}

/* CUSTOM INPUT FORM */
.field-container{
    max-width: 500px;
    position: relative;
    height: 50px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* background-color: red; */
}

.field-input{
    width: 100%;
    height: 100%;
    color: #292929;
    padding-top: 27px;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: transparent;
}

.field-placeholder{
    position: absolute;
    bottom:0;
    left: 0%;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid #e2e2e2;
}

.field-placeholder::after{
    content: '';
    position: absolute;
    left:0px;
    bottom: -1px;
    height: 100%;
    width: 100%;
    border-bottom: 2px solid #4b7acf;
    transform: translateX(-100%);
    transition: transform .3s ease;
}

.placeholder-name{
    position: absolute;
    bottom: 5px;
    left: 0;
    transition: all 0.3s ease;
}

.field-input:focus + .field-placeholder .placeholder-name,
.field-input:valid + .field-placeholder .placeholder-name{
    transform: translateY(-100%);
    font-size: 14px;
    color:#4b7acf;
}

.field-input:focus + .field-placeholder::after,
.field-input:valid+.field-placeholder::after {
    transform: translateX(0%);
}
</style>