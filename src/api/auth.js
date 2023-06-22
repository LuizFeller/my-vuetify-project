import { api } from "./index";

export const authApiMixin = {
  methods: {
    async register(payload) {
      const res = await api.post("/auth/register", payload);
      return res;
    },
    async login(payload) {
      const res = await api.post("/auth/login", payload);
      return res;
    },
  },
};
