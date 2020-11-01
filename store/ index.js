// import Vue from "vue";
// import Vuex from "vuex";
// import gnb from "./gnb";

// Vue.use(Vuex)

// const store = () => {
//     return new Vuex.Store({
//       namespaced: true,
//       state: {

//       },
//       modules: {
//           gnb
//       }
//     })
// }

// export default store;

// Vuex 패키지 불러오기
import Vuex from 'vuex'

// 스토어 생성 함수 정의
const createStore = () => {
  // Vuex.Store 객체 생성 반환
  return new Vuex.Store({
    // 상태(데이터)
    state: { loadedPosts: [] },
    // 쓰기(동기 처리)
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    // 액션(비동기 처리 ⟹ 쓰기 커밋)
    actions: {
      setPosts({ commit }, posts) {
        commit('setPosts', posts)
      }
    },
    // 읽기
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

// createStore 함수 모듈 기본으로 내보내기
export default createStore
