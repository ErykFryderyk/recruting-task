<template>
  <div class="posts">
    <ul class="post">
      <li class="post__item" v-for="(item) in posts" :key="item.id">
        <div class="post__header">
          <h2 class="post__title">{{item.title}}</h2>
          <button class="post__remove-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
          </button>
        </div>
        <div class="post__content">
          <p class="post__text">{{item.body}}</p>
        </div>
        <h3 class="post__author"><span>author: </span>Bill Gates</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    posts: Object,
  }
}
</script>

<style lang="scss" scoped>
.posts{
  width: 100%;
  margin-top: 20px;
}
.post{
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  &__item{
    border: 1px solid #1158aa;
    border-radius: 3px;
    padding: 5px 10px;
    margin-bottom: 20px;
  }

  &__header{
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 10px;
  }
  &__title{
    font-size: 1.25em;
    font-weight: 600;
    color: #1158aa;
  }
  &__content{
    margin-bottom: 10px;
  }
  &__text{
    font-size: 1rem;
    color: #010101;
  }
  &__author{ 
    font-size: 1rem;
    span{
      font-size: .8rem;
    }
  }
  &__remove-btn{
    border: 1px solid orangered;
    border-radius: 5px;
    background: transparent;
    text-align: center;
    width: 26px;
    height: 26px;
    outline: none;

    &:focus{
      border: 1px #991111 solid;
      background: #b6b6b6;
    }
  }
}
</style>  