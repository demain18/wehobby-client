import moment from 'moment';

export default {
  inheritAttrs: false,
  data: () => ({

  }),
  methods: {
    findKey(filterItem, index) {
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
      let now = moment().format("YYYY/MM/DD HH:mm:ss"); //console.log('now:  '+now)
      let then = moment(new Date(date+' '+time)).format("YYYY/MM/DD HH:mm:ss"); //console.log('then: '+then)

      let gap = moment.utc(moment(now,"YYYY/MM/DD HH:mm:ss").diff(moment(then,"YYYY/MM/DD HH:mm:ss")))
      return gap.format("DD일/HH시간/mm분");
    },
    markupReplace(content) {
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
        '</u>'
      ]
      for (let i = 0; i < list.length; i++) {
        desc = desc.split(list[i]).join('');
      }
      return desc;
    },
    thousandComma(content) {
      return content.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}