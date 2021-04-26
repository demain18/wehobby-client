import Vue from 'vue';
import axios from 'axios';
import Vuecookies from 'vue-cookies';
Vue.use(Vuecookies);

export default {
  data: () => ({
    upload: [],
    uploadFormData: [],
  }),
  mounted(){
    // code
  },
  methods: {
    async imageUploadSend(id, target, type) {
      try {
        await axios.post('/api/info/image/upload',
        this.uploadFormData,
        {
          headers: {
            token: this.$cookies.get('token'),
            id: id,
            target: target,
            type: type
          },
          // onUploadProgress: uploadEvent => {
          //   console.log('Upload Progress: '+Math.round(uploadEvent.loaded / uploadEvent.total*100))
          // }
        });
      }
      catch (err) { console.log(err) }
    },
    handleFiles(e) {
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
  }
}