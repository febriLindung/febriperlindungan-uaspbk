import { defineStore } from "pinia";
import axios from "axios";

export const useSparepartStore = defineStore('sparepart', {
  state: () => ({
    sparepart: [],
  }),

  actions: {
    async getSparepart() {
      try {
        const res = await axios.get('http://localhost:300/sparepart')
        this.sparepart = res.data
      } catch (error) {
        console.error("Gagal Fetch Data", error)
      }
    },

    async addSparepart(sparepart) {
      try {
        await this.getSparepart()

        let maxId = 0
        if (this.sparepart.length > 0) {
          maxId = Math.max(...this.sparepart.map(item => Number(item.id)))
        }

        const newSparepart = {
          id: String(maxId + 1),
          ...sparepart
        }

        const res = await axios.post('http://localhost:300/sparepart', newSparepart)
        this.sparepart.push(res.data)

      } catch (error) {
        console.error("Gagal Menambahkan Data", error)
      }
    }
  }
})
