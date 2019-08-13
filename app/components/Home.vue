<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="رابعة تكنولوجيا التعليم"></Label>
        </ActionBar>
        <!-- <AbsoluteLayout>
          <Label style="color: #000;font-size: 22px;" text="loading..." v-if="!loaded"/>
          <ListView for="user in users" v-if="loaded">
            <v-template>
              <FlexboxLayout flexDirection="row">
                <Label style="width: 80%" class="item" alignSelf="center" :text="user.username" @tap="gotToDetails(user)" />
                <Image class="img" :src="user.image" stretch="none" alignSelf="flex-end"/>
              </FlexboxLayout>
            </v-template>
          </ListView>
        </AbsoluteLayout> -->
        <StackLayout>
          <Label style="color: #000;font-size: 22px;text-align:center;direction: rtl" text="جار التحميل..." v-if="!loaded"/>
          <ListView v-if="loaded" for="user in users">
            <v-template>
              <FlexboxLayout flexDirection="row">
                <Label style="width: 80%" class="item" alignSelf="center" :text="user.username" @tap="gotToDetails(user)" />
                <Image class="img" :src="user.image" stretch="none" alignSelf="flex-end"/>
              </FlexboxLayout>
            </v-template>
          </ListView>
        </StackLayout>
    </Page>
</template>

<script>
import Details from './details.vue'
export default {
  data(){
    return{
      users: [],
      loaded: false
    };
  },
  mounted(){
    fetch('https://small-api.herokuapp.com/api/students')
    .then(response => response.json())
    .then((data) => {
      this.users = data;
      this.loaded = true;
    })
  },
  methods:{
    gotToDetails(user){
      this.$navigateTo(Details, { props: { user: user }});
    }
  }
};
</script>

<style lang="scss">
  ListView{
    margin: 10px auto;
  }
  .item{
    font-size: 20px;
    padding: 10px;
    text-align: left;
    color: #0080aa
  }
  .img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-size: 100% 100%;
    margin: 5px;
  }
  .action-bar{
    background: #222;
  }
</style>
