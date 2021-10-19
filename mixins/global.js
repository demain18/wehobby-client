import moment from 'moment';

export default {
  inheritAttrs: false,
  data: () => ({
    globalVal: true,
  }),
  methods: {
    // findFilterKey(filterItem, index) {
    //   if (filterItem=='area') 
    //   {
    //     return this.filterItems.citysArea[index].key;
    //   } 
    //   else if (filterItem=='subway') 
    //   {
    //     return this.filterItems.citysSubway[index].key;
    //   } 
    //   else if (filterItem=='genre') 
    //   {
    //     return this.filterItems.categoryDetail[index].key;
    //   }
    // },
    findKey(filterItem, index) {
      // console.log(this.filterItems)
      if (index == undefined) {
        return index;
      } else {
        index -= 1;
        if (filterItem == 'area') {
          return this.filterItems.citysArea[index].key;
        } else if (filterItem == 'subway') {
          return this.filterItems.citysSubway[index].key;
        } else if (filterItem == 'genre') {
          return this.filterItems.categoryDetail[index].key;
        }
      }
    },
    findName(filterItem, index) {
      if (index == undefined) {
        return index;
      } else {
        index -= 1;
        if (filterItem == 'area') {
          return this.filterItems.citysArea[index].name;
        } else if (filterItem == 'subway') {
          return this.filterItems.citysSubway[index].name;
        } else if (filterItem == 'genre') {
          return this.filterItems.categoryDetail[index].name;
        }
      }
    },
    findAreaName(index) {
      if (this.postItems[index].area==0) {
        return '';
      } else {
        return this.filterItems.citysArea.find(ele => ele.key == this.postItems[index].area).name;
      }
    },
    agoCalc(date, time) {
      let now = moment().subtract(1969, "years").format("YYYY/MM/DD HH:mm:ss");
      let then = moment(new Date(date+' '+time)).subtract(-31, "minutes").format("YYYY/MM/DD HH:mm:ss");
      let gap = moment.utc(moment(now,"YYYY/MM/DD HH:mm:ss").diff(moment(then,"YYYY/MM/DD HH:mm:ss")));
      
      if (gap.format('Y')>1) {
        return gap.format('Y년');
      } 
      else if (gap.format('M')>1) {
        return gap.format('M개월');
      } 
      else if (gap.format('D')>1) {
        return gap.format('D일');
      } 
      else if (gap.format('H')>0) {
        return gap.format('H시간');
      } 
      else if (gap.format('m')>1) {
        return gap.format('m분');
      } 
      else if (gap.format('m')>0) {
        return gap.format('방금');
      }

    },
    markupReplace(content) {
      if (content==false) {
        return '';
      } else {
        let desc = String(content);
        let list = [
          '<p>',
          '</p>',
          '<strong>',
          '</strong>',
          '<i>',
          '</i>',
          '<stricke>',
          '</strike>',
          '<li>',
          '</li>',
          '<ul>',
          '</ul>',
          '<ol>',
          '</ol>',
          '<em>',
          '</em>',
          '<u>',
          '</u>',
          '<br>',
          '</br>'
        ]
        for (let i = 0; i < list.length; i++) {
          desc = desc.split(list[i]).join('');
        }
        return desc;
      }
    },
    thousandComma(content, index) {
      if (index==0) {
        return content.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'원';
      }
      return content.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    repreImageRead(image) {
      if (image==null || image.length==0 || image[0]==null) {
        return 'https://wehobby-real.s3.us-east-2.amazonaws.com/static/placeholder.png';
      } else {
        return image[0];
      }
    }
  }
}