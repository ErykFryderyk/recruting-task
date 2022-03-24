<template>
  <div class="posts">
    <ul class="post">
      <li class="post__item" v-for="(item) in posts" :key="item.id">
        <div class="post__header">
          <h2 class="post__title">{{item.title}}</h2>
          <button class="post__remove-btn">
            <font-awesome-icon class="remove-btn-icon" icon="trash-can" />
          </button>
        </div>
        <div class="post__content">
          <p v-if="!item.readMore" class="post__text">{{item.body.slice(0,50)}}<span>...</span></p>
          <p v-if="item.readMore" class="post__text">{{item.body}}</p>
          <button
            class="post__read-more-btn" 
            @click="item.readMore = !item.readMore">
          <span v-if="!item.readMore">read more</span>
          <span v-else>read less</span>
        </button>
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
    posts: Array,
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
    border-radius: 4px;
    padding: 5px 10px;
    margin-bottom: 20px;
    background-color: #fafafa;
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
    border: none;
    background: transparent;
    text-align: center;
    // width: 30px;
    // height: 30px;
    padding: 4px;
    outline: none;
    cursor: pointer;

    &:focus{
      .remove-btn-icon{
        color: #9b3a3a;
      }
    }

    &:hover{
      .remove-btn-icon{
        color: #9b3a3a;
        transform: rotate(10deg) scale(1.1);
      }
    }


    .remove-btn-icon{
      font-size: 20px;
      color:#ac5959;
      transition: color .3s ease-in-out, transform .3s ease-in-out;
    }    
  }
  &__read-more-btn{
    border: none;
    color: #1158aa;
    background: transparent;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;

    &:hover{
      color: #2b74c7;
    }
  }
}
</style>  