<template>
  <div class="container">
    <div class="user-list">
      <div class="search-bar">
        <Input suffix="ios-search" placeholder="搜索" style="width: auto" />
        <Button><Icon type="ios-add"/></Button>
      </div>
      <ul>
        <li
          v-for="user in userList"
          :key="user.id"
          @click="handelUserClick(user)"
          :class="user.id == activeUser ? 'active' : ''"
        >
          <img :src="user.img" alt="" />
          <div class="info ell">
            <p class="name ell">{{ user.name }}</p>
            <p class="text ell">{{ user.lastContent }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="top">{{ currentUser.name }}</div>
      <div class="center mini-scroll-bar">
        <ul>
          <li v-for="content in currentUser.content" :key="content.id" :class="currentUser.id == content.userId ? '' : 'mine'">
            <img
              :src="
                currentUser.id == content.userId
                  ? currentUser.img
                  : 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3625330992,810140927&fm=26&gp=0.jpg'
              "
              alt=""
            />
            <p>{{ content.word }}</p>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <Input v-model="currentUser.currentContent" type="textarea" @on-enter="handelSend"/>
        <Button @click="handelSend">发送(S)</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Input, Icon } from "view-design";
export default {
  name: "WX",
  components: {
    Button,
    Input,
    Icon
  },
  data() {
    return {
      activeUser: 1,
      userList: [
        {
          id: 1,
          img:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3163993735,446650328&fm=26&gp=0.jpg",
          name: "user16821396856647",
          time: 1608614518548,
          currentContent: "",
          lastContent: "content test",
          content: [
            {
              id: 1265820,
              userId: 1,
              word: "你好"
            },
            {
              id: 1265821,
              userId: 1,
              word: "测试一下"
            }
          ]
        },
        {
          id: 2,
          img:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=973490127,947892141&fm=26&gp=0.jpg",
          name: "user18726565213499",
          time: 1608414518548,
          currentContent: "",
          lastContent: "content test content test",
          content: [
            {
              id: 12655141,
              userId: 2,
              word: "再测试一下"
            }
          ]
        },
        {
          id: 3,
          img:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1092754036,1885830524&fm=26&gp=0.jpg",
          name: "user145454121542478",
          time: 1608354518548,
          currentContent: "",
          lastContent: "content test",
          content: [
            {
              id: 14655141,
              userId: 3,
              word: "还没测试完"
            }
          ]
        },
        {
          id: 4,
          img:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2782913212,3428404552&fm=26&gp=0.jpg",
          name: "user257897415723249",
          time: 1608414118548,
          currentContent: "",
          lastContent: "content test content test",
          content: [
            {
              id: 146514857,
              userId: 4,
              word: "还有一个测试"
            }
          ]
        },
        {
          id: 5,
          img:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=240773562,3436450129&fm=26&gp=0.jpg",
          name: "userd12216581087fad",
          time: 1607414518548,
          currentContent: "",
          lastContent: "content test content test content test",
          content: [
            {
              id: 142214857,
              userId: 5,
              word: "最后一个"
            }
          ]
        },
        {
          id: 6,
          img:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3839343716,3822133820&fm=26&gp=0.jpg",
          name: "userdwad418415347541",
          time: 1608404518548,
          currentContent: "",
          lastContent: "content test",
          content: [
            {
              id: 1424574857,
              userId: 6,
              word: "这回真的是最后一个"
            }
          ]
        }
      ],
      src: ""
    };
  },
  computed: {
    currentUser() {
      return this.userList.filter(t => t.id == this.activeUser)[0];
    }
  },
  methods: {
    handelUserClick(user) {
      this.activeUser = user.id;
    },
    handelSend() {
      this.userList.forEach(t => {
        if (t.id == this.activeUser) {
          t.content.push({
            id: new Date().getTime(),
            word: t.currentContent
          });
          t.currentContent = "";
        }
      });
    }
  }
};
</script>

<style>
.container {
  width: 1000px;
  height: 800px;
  max-width: 80%;
  max-height: 90%;
  border: 1px solid #dcdee2;
  border-radius: 6px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.user-list {
  width: 250px;
  padding: 10px 0;
  background-color: #eeebe9;
  display: flex;
  flex-direction: column;
}
.search-bar {
  height: 50px;
  padding: 10px;
  display: flex;
}
.user-list ul {
  flex: auto;
}
.user-list ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.user-list ul li:hover {
  background-color: #dedbda;
}
.user-list ul li.active {
  background-color: #c6c5c5;
}
.user-list li img {
  width: 40px;
  height: 40px;
  border-radius: 4px;
}
.user-list li .info {
  flex: auto;
  margin: 0 8px;
}
.content {
  width: 100%;
  flex: auto;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
}
.content .top {
  height: 60px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.content .center {
  flex: auto;
}
.content .center li{
  padding: 5px 20px 20px;
  display: flex;
}
.content .center li img{
  width: 34px;
  height: 34px;
  border-radius: 4px;
}
.content .center li p{
  max-width: 60%;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #eee;
  margin: 0 10px;
}
.content .center li.mine{
  flex-direction: row-reverse;
}
.content .center li.mine p{
  background-color: #9EEA6A;
  border: none
}
.content .bottom {
  height: 220px;
  border-top: 1px solid #eee;
  position: relative;
}
.content .bottom button {
  position: absolute;
  bottom: 5px;
  right: 30px;
}
</style>
<style>
.search-bar .ivu-input-wrapper {
  margin-right: 10px;
}
.search-bar .ivu-input {
  background-color: #dbd9d8;
  color: #333;
}
.search-bar .ivu-btn {
  padding: 0 8px;
}
.content .bottom .ivu-input {
  height: 100%;
  background-color: transparent;
  color: #333;
  padding: 10px;
}
.content .bottom .ivu-input-wrapper {
  height: 100%;
  background-color: transparent;
}
</style>
