import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";

import IAuth from "@/interfaces/IAuth";
import IUrl from "@/interfaces/IUrl";
import IUrlMostAccesseds from "@/interfaces/IUrlMostAccesseds";
import IUser from "@/interfaces/IUser";
import http from "@/http";
interface Estado {
  auth: IAuth | null;
  urls: IUrl[];
  url_accessed: IUrl | null;
  urls_most_accesseds: IUrlMostAccesseds[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    auth: null,
    urls: [],
    url_accessed: null,
    urls_most_accesseds: [],
  },
  mutations: {
    ["ADD_URL"](state, url: IUrl) {
      state.urls.push(url);
    },
    ["SET_URLS"](state, urls: IUrl[]) {
      state.urls = urls;
    },
    ["REMOVE_URL"](state, url_register_id: number) {
      state.urls = state.urls.filter(
        (url) => url.url_register_id !== url_register_id
      );
    },
    ["DEFINE_TOP_URLS"](state, urlsMostAccesseds: IUrlMostAccesseds[]) {
      state.urls_most_accesseds = urlsMostAccesseds;
    },
    ["SET_URL_ACCESSED"](state, url: IUrl) {
      state.url_accessed = url;
    },
    ["SET_USER"](state, user: IAuth) {
      state.auth = user;
    },
  },
  actions: {
    async ["SAVE_URL"]({ commit, state }, url: string) {
      try {
        const isAlreadySaved = !!state.urls.find(
          (urlSaved) => urlSaved.url_basic === url
        );
        if (isAlreadySaved) {
          return;
        }
        const { data: urlCreated } = await http.post("/url", {
          url_basic: url,
        });
        commit("ADD_URL", urlCreated);
      } catch (e) {
        alert("Falha ao salvar url");
      }
    },
    async ["FETCH_URL_ACCESSED"]({ commit }, hashParam: string) {
      try {
        const { data: urlDB } = await http.get(`/url/${hashParam}`);
        commit("SET_URL_ACCESSED", urlDB);
      } catch (e) {
        alert("Falha ao salvar url");
      }
    },
    async ["FETCH_USER_URL"]({ commit }) {
      try {
        const { data: urls } = await http.get(`/user/url/`);
        commit("SET_URLS", urls);
      } catch (e) {
        alert("Falha ao solicitar urls");
      }
    },
    async ["CREATE_USER"]({ commit }, user: IUser) {
      try {
        const { data: userCreated } = await http.post(`/user`, user);
        console.log({ userCreated });
      } catch (e) {
        alert("Falha ao criar usuário");
      }
    },
    async ["LOGIN_USER"]({ commit }, user: IUser) {
      try {
        const { data: userLogged } = await http.post(`/auth`, user);
        http.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${userLogged.token}`;
        commit("SET_USER", userLogged);
      } catch (e) {
        return new Error("Credenciais inválidas");
      }
    },
    async ["SEND_ACCESS_LOG"](context, urlRegisterId: number) {
      try {
        await http.post(`/url/access`, {
          url_register_id: urlRegisterId,
        });
      } catch (e) {
        console.error("Erro ao salvar acesso de url");
      }
    },
    async ["GET_TOP_URLS"]({ commit, state }) {
      try {
        const { data: urls } = await http.get("/url/most-access");
        commit("DEFINE_TOP_URLS", urls);
      } catch (e) {
        alert("Falha ao solicitar dados de urls mais acessadas");
      }
    },
    async ["DELETE_URL"]({ commit, state }, url_register_id) {
      try {
        await http.delete("/user/url", {
          data: {
            url_register_id,
          },
        });
        commit("REMOVE_URL", url_register_id);
      } catch (e) {
        console.log({ e });
        alert("Falha ao remover url");
      }
    },
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
