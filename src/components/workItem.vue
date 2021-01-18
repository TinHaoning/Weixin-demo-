<template>
  <li class="item" @click="showInfo">
    <div class="upload-list-cover flx a-c">
      <p class="name f-1">{{ data.title }}</p>
      <p class="info-edit">
        <span v-if="type == 2">
          <Uploader
            ref="preview_upload"
            :show-upload-list="false"
            :before-upload="handelUploadPreview"
            :on-success="handelPreviewSuccess"
            :action="`${uploadBase}/?c=Prototype&a=index`"
            :data="postData"
            name="PreviewData"
          >
            <i
              :class="[
                data.picurl ? 'active' : '',
                'iconfont',
                'icon-shangchuan2'
              ]"
            ></i>
            <a href="javascript:;" v-if="data.picurl">Change Preview Image</a>
            <a href="javascript:;" v-else>Preview Image</a>
          </Uploader>
        </span>
        <span>
          <i
            :class="[
              data.isEditInfo ? 'active' : '',
              'iconfont',
              'icon-bianji1'
            ]"
          ></i>
          <a href="javascript:;" @click="onEditInfo(data)" v-if="data.isEditInfo"
            >Change Information</a
          >
          <a href="javascript:;" @click="onEditInfo(data)" v-else
            >Edit Information</a
          >
        </span>
      </p>
      <p v-if="submitStatus == 1" class="result0">{{ data.percent }}%</p>

      <p v-if="submitStatus == 2" class="result1">Information Needed</p>

      <Button
        v-if="submitStatus == 3"
        type="success"
        class="result2"
        @click="onSubmit(data)"
        >Submit</Button
      >

      <p v-if="submitStatus == 4" class="result3">
        <i class="iconfont icon-gou3 cgreen"></i>Submited
      </p>

      <Progress
        :percent="data.percent"
        :stroke-width="4"
        hide-info
        :stroke-color="
          submitStatus >= 3 || (data.type == 1 && data.status >= 1)
            ? '#19BC9A'
            : '#E5D51E'
        "
      />
      <i class="iconfont icon-iconfontclose" @click="onDelete(data)"></i>
    </div>
  </li>
</template>

<script>
import { mapGetters } from "vuex";
import Uploader from "@/components/Uploader";
import { Button, Progress } from "view-design";
export default {
  name: "WorkItem",
  components: {
    Uploader,
    Button,
    Progress
  },
  data() {
    return {
      postData: {
        postauth: this.getPostAuth(),
        pending_id: this.data.id,
      }
    };
  },
  props: {
    data: Object,
    onEditInfo: {
      type: Function,
      default() {
        return {};
      }
    },
    onUploadPreview: {
      type: Function,
      default() {
        return {};
      }
    },
    onDelete: {
      type: Function,
      default() {
        return {};
      }
    },
    onSubmit: {
      type: Function,
      default() {
        return {};
      }
    },
    onPreviewSuccess: {
      type: Function,
      default() {
        return {};
      }
    }
  },
  computed: {
    ...mapGetters(["type"]),
    uploadBase: {
      get(){
        return this.$store.state.data.uploadUrl
      }
    },
    submitStatus() {
      if (this.data.status == 0) {
        // 正在上传
        return 1;
      } else if (this.data.status == 100) {
        // submit 完成
        return 4;
      } else if ((this.type == 1 || this.data.picurl) && this.data.isEditInfo) {
        // 可以submit
        return 3;
      } else {
        // 需要提交信息
        return 2;
      }
    }
  },
  methods: {
    getPostAuth() {
      var arr,
        reg = new RegExp("(^| )auth_id=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) {
        return unescape(arr[2]);
      } else {
        return null;
      }
    },
    showInfo() {
      console.log(this.data);
    },
    handelUploadPreview(file) {
      // if(this.data.status == 100) {
      //   this.$Message.info("designe has submited");
      //   return false;
      // }
      if (!this.data.id) {
        this.$Message.info("Please wait for the upload to complete");
        return false;
      }
      return true;
    },
    handelPreviewSuccess(response) {
      if (response.status != 1) {
        this.$Message.warning(response.msg);
      } else {
        this.onPreviewSuccess({ data: this.data, picurl: response.url });
      }
    }
  },
  watch: {
    data: {
      handler: function(val, oldval) {
        this.postData.pending_id = val.id;
      },
      deep: true //对象内部的属性监听，也叫深度监听
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  padding: 6px 0;
}
.upload-list-cover {
  height: 38px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 0 32px 0 16px;
  font-size: 12px;
  position: relative;
}
.name {
  color: #fff;
  width: 220px;
}
.info-edit {
  min-width: 200px;
}
.info-edit span {
  margin: 0 10px;
}
.info-edit a {
  text-decoration: underline;
  color: #ccc;
}
.info-edit i {
  color: #e5d51e;
  margin-right: 4px;
}
.info-edit i.icon-shangchuan2 {
  font-size: 14px;
}
.info-edit i.active {
  color: #19bc9a;
}
.ivu-upload {
  display: inline-block;
}
i.icon-iconfontclose {
  position: absolute;
  top: 0;
  right: 4px;
  color: #999;
  cursor: pointer;
}
.result0 {
  color: #ccc;
}
.result1 {
  color: #e5d51e;
}
.result2 {
  height: 20px;
  font-size: 12px;
}
.result3 {
  color: #fff;
}
.result3 i {
  margin-right: 6px;
}
.ivu-progress {
  position: absolute;
  bottom: -6px;
  left: 0;
}
</style>
