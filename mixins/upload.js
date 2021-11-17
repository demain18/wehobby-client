import Vue from 'vue';
import axios from 'axios';
import Vuecookies from 'vue-cookies';
Vue.use(Vuecookies);

export default {
  data: () => ({
    upload: [],
    uploadFormData: [],
    isImageChange: false,
    fileTypeAllowed: [
      'image/jpeg',
      'image/jpg',
      'image/png'
    ],
    formList: []
  }),
  mounted(){
    // console.log(document.getElementsByClassName('mdi-close'))
  },
  methods: {
    async imageUploadSend(id, target, type) {
      // console.log(this.param)
      try {
        if (this.isImageChange) {
          await this.$axios.$post('/api/info/image/upload',
          this.uploadFormData,
          {
            headers: {
              token: this.$cookies.get('token'),
              id: id,
              target: target,
              type: type
            },
            onUploadProgress: uploadEvent => {
              let progress = Math.round(uploadEvent.loaded / uploadEvent.total*100);
              if (progress==100) {
                if (target=='post') 
                {
                  this.$router.push('/post/'+id);
                }
                else if (target=='auth') 
                {
                  this.repreImageChanged = true;
                }
              }
            }
          });
        } else if (this.isImageChange!=true && target=='post') {
          this.$router.push('/post/'+id);
        }
      }
      catch (err) { 
        // return false;
        alert(err.response.data.message);
      }
    },
    async imageDeleteSend(id, target, type) {
      try {
        if (this.isImageChange) {
          
        } 
        else if (this.isImageChange!=true && target=='post') {
          this.$router.push('/post/'+id);
        }
      }
      catch (err) { 
        alert(err.response.data.message);
      }
    },
    handleFiles(e) {
      this.isImageChange = true;
      try {
        const fileData = new FormData();
        let fileList = e;
        fileList.forEach((item, index) => {
          this.upload[index] = fileList[index];
          fileData.append('upload['+index+']', this.upload[index], this.upload[index].name);
        });
        this.uploadFormData = fileData;

        // console.log(this.upload)
        this.upload.forEach((item, index) => {
          if (item.size>5242880) {
            alert('이미지가 5mb 이상입니다.');
            this.isImageChange = false;
            // this.$refs.fileUploadRef.value = null;
          } 
          else if (this.fileTypeAllowed.includes(item.type)==false) {
            alert('이미지 포맷이 맞지 않습니다.');
            this.isImageChange = false;
            // this.$refs.fileUploadRef.value = null;
          }
        });
      }
      catch (err) { console.log(err) }
    },
    handleFile(e) {
      this.isImageChange = true;
      try {
        const fileData = new FormData();
        let fileList = e;
        this.upload[0] = fileList;
        fileData.append('upload[0]', this.upload[0], this.upload[0].name);
        this.uploadFormData = fileData;
      }
      catch (err) { console.log(err) }
    }
  }
}