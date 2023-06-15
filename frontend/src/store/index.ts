import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";

import IAuth from "@/interfaces/IAuth";
import IUrl from "@/interfaces/IUrl";
import http from "@/http";
interface Estado {
  auth: IAuth[];
  urls: IUrl[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    auth: [],
    urls: [],
  },
  mutations: {
    ["ADD_URL"](state, url: IUrl) {
      state.urls.push(url);
    },
    ["REMOVE_URL"](state, url_register_id: number) {
      state.urls = state.urls.filter(
        (url) => url.url_register_id !== url_register_id
      );
    },
    // [ALTERA_PROJETO](state, projeto: IProjeto) {
    //   const index = state.projetos.findIndex((proj) => proj.id == projeto.id);
    //   state.projetos[index] = projeto;
    // },
    // [EXCLUIR_PROJETO](state, id: string) {
    //   state.projetos = state.projetos.filter((proj) => proj.id != id);
    // },
    // [DEFINIR_PROJETOS](state, projetos: IProjeto[]) {
    //   state.projetos = projetos;
    // },
    // [NOTIFICAR](state, novaNotificacao: INotificacao) {
    //   novaNotificacao.id = new Date().getTime();
    //   state.notificacoes.push(novaNotificacao);

    //   setTimeout(() => {
    //     state.notificacoes = state.notificacoes.filter(
    //       (notificacao) => notificacao.id != novaNotificacao.id
    //     );
    //   }, 3000);
    // },
  },
  actions: {
    // [OBTER_PROJETOS]({ commit }) {
    //   http
    //     .get("projetos")
    //     .then((response) => commit(DEFINIR_PROJETOS, response.data));
    // },
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
    async ["DELETE_URL"]({ commit, state }, url_register_id) {
      try {
        // const isAlreadySaved = !!state.urls.find(
        //   (urlSaved) => urlSaved.url_basic === url
        // );
        // if (isAlreadySaved) {
        //   return;
        // }
        // const { data: urlCreated } = await http.post("/url", {
        //   url_basic: url,
        // });
        commit("REMOVE_URL", url_register_id);
      } catch (e) {
        alert("Falha ao remover url");
      }
    },
    // [ALTERAR_PROJETO](contexto, projeto: IProjeto) {
    //   return http.put(`/projetos/${projeto.id}`, projeto);
    // },
    // [REMOVER_PROJETO]({ commit }, id: string) {
    //   return http
    //     .delete(`/projetos/${id}`)
    //     .then(() => commit(EXCLUIR_PROJETO, id));
    // },
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
