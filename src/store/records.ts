// Utilities
import { defineStore } from 'pinia'

import { PhonebookRecord } from '@/store/types'

export const useRecordsStore = defineStore('records', {
  state: () => ({
    allRecords: [] as PhonebookRecord[],
    selectedRecord : null as PhonebookRecord | null
  }),

  actions: {
    async fetchAllRecords(){
      this.allRecords = [
        {
          id: "dead-beef-caffe",
          first_name: "John",
          phone_number: "0-12345-67890",
        },
        {
          id: "asdasdasd-asdasd",
          first_name: "Jane",
          phone_number: "937-99-92",
        },
      ]
   }
  }
});
