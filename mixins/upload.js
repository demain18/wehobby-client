import Vue from 'vue';
import axios from 'axios';
import Vuecookies from 'vue-cookies';
Vue.use(Vuecookies);

export default {
  data: () => ({
    upload: [],
    uploadFormData: [],
    isImageChange: false,
  }),
  mounted(){
    // code
  },
  methods: {
    async imageUploadSend(id, target, type) {
      try {
        if (this.isImageChange) {
          await axios.post('/api/info/image/upload',
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
                  this.$router.push('/post/'+this.param);
                }
                else if (target=='auth') 
                {
                  this.repreImageChanged = true;
                }
              }
            }
          });
        }
      }
      catch (err) { alert(err.data.data.message) }
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
      }
      catch (err) { console.log(err) }
    },
    handleFile(e) {
      // this.isImageChange = true;
      // this.repreImageChanged = true;
      // try {
      //   const fileData = new FormData();
      //   let fileList = e;
      //   fileList.forEach((item, index) => {
      //     this.upload[index] = fileList[index];
      //     fileData.append('upload', this.upload[index], this.upload[index].name);
      //   });
      //   this.uploadFormData = fileData;
      // }
      // catch (err) { console.log(err) }
    }
  }
}