<template>
  <Page>
    <ActionBar class="action-bar action-bar-root" :title="user.username">
      <NavigationButton text="<" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
    </ActionBar>
    <ScrollView>
      <FlexboxLayout flexDirection="column">
        <!-- <label class="back" text="<" @tap="$navigateBack()"/> -->
        <Image :src="user.image" stretch="fill" />
        <Label class="head" text="الاسم :" />
        <Label class="" :text="user.username" />
        <Label class="head" text="المعلومات الشخصية:" />
        <TextView editable="false" :text="user.info" />
        <Label class="head" text="تاريخ الميلاد :" />
        <Label class="r" :text="user.dayOfBirth" />
        <Label class="head" text="البريد الالكتروني:" />
        <Label class="r" :text="user.email" />
      </FlexboxLayout>
    </ScrollView>
  </Page>
</template>
<script>
  export default {
    data(){
      return{
      }
    },
    props: ['user']
  }
</script>
<style scoped>
  .action-bar-root{
    font-size: 16px;
  }
  Image{
    height: 450px;
    width: 100%;
    background-size: 100% 100%
  }
  label{
    margin: 10px;
    text-align: left;
    font-size: 18px;
  }
  .head{
    color: #0080aa
  }
  .r{
    text-align: right
  }
  .back{
    font-size: 22px;
    font-weight: bold;
    color: #ddd;
    text-align: center;
    padding: 5px;
    background: #0080ff;
    position: fixed;
    bottom: 5px;
  }
</style>
