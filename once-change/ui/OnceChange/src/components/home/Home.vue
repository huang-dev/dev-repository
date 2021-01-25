<template>
  <div>
    <div class="title">
      <el-row class="titleLine">
        <el-col class="titleImageCol" :span="19">
          <img class="titleImage" :src="headData.headImage" />
          <span class="imageSpan">每天改变一点点</span>
        </el-col>
        <el-col class="authImageCol" :span="4">
          <el-avatar
            class="authImage"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <span>张三</span>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row class="tac">
        <el-col :span="3" :style="{'min-height': clientHeight}" class="menuMain">
          <h5>主菜单</h5>
          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <div v-for="item in menus" :key="item.index">
              <el-submenu v-if="item.children.length > 1" :index="item.index">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span slot="title">{{ item.title }}</span>
                </template>
                <el-menu-item-group
                  v-for="child in item.children"
                  :key="child.index"
                >
                  <el-menu-item
                    class="itemClass"
                    :index="child.index"
                    @click.native="changeMenu(child.path)"
                    >{{ child.title }}</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item
                v-else
                :index="item.index"
                @click.native="changeMenu(item.path)"
              >
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
              </el-menu-item>
            </div>
          </el-menu>
        </el-col>
        <el-col :span="21">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/javascript">
import menuJson from "@/components/login/assets/menu.json";
import imageSrc from "../login/assets/login1.png";

export default {
  data() {
    return {
      menus: [],
      clientHeight: document.documentElement.clientHeight - 68 + "px",
      headData: {
        headImage: "",
      },
    };
  },
  created() {
    this.menus = menuJson.menu;
    this.headData.headImage = imageSrc;
  },

  methods: {
    handleOpen(key, keyPath) {
      // popMessage.error(key);
    },
    handleClose(key, keyPath) {},
    changeMenu(path) {
      this.$router.push({ path: path });
    },
  },
};
</script>

<style scoped>
.tac {
  height: 100%;
}
.menuMain {
  /* height: 100%; */
  border-right: solid 1px #e6e6e6;
}
.el-menu {
  border-right: unset;
}
.itemClass {
  min-width: unset;
}
.title {
  height: 60px;
  background-color: azure;
}
.authImage {
  vertical-align: middle;
}
.titleLine {
  line-height: 60px;
}
.titleImage {
  width: 60px;
  padding-left: 10px;
  float: left;
}
.imageSpan {
  float: left;
  padding-left: 5px;
}
.titleImageCol {
  min-width: 60px;
}
.authImageCol {
  text-align: right;
}
</style>
