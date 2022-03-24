<template>
  <div class="header">
    <h1 class="header__title">Posts App <font-awesome-icon icon="" /></h1>
    <div class="header__box">
      <button class="add-new-post">
        <font-awesome-icon class="add-new-post__icon" icon="calendar-plus" />
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyHeader',
    data() {
      return{

      }
    }
  }
</script>

<style lang="scss" scoped>
.header{
  padding-top:10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.add-new-post{
  background-color: transparent;
  padding: 3px;
  border: none;
  outline: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  &__icon{
    font-size: 28px;
    color: #357ce6;
    transition: transform .1s ease-in-out;
  }

  &:hover {

    .add-new-post__icon{
      transform: scale(1.1);
    }
  }
}
</style>