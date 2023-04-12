// Utilities
import { defineStore } from 'pinia'

import { PhonebookRecord } from '@/store/types'
import axios from 'axios';

export const useRecordsStore = defineStore('records', {
  state: () => ({
    allRecords: [] as PhonebookRecord[],
    selectedRecord : null as PhonebookRecord | null
  }),

  actions: {
    async fetchAllRecords(){
      const response = await axios.get<PhonebookRecord[]>(
        "http://api.sre-phonebook.online/records/"
      );

      this.allRecords = response.data;
   }
  }
});
