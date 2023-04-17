<template>
  <v-list lines="two">
    <v-list-subheader inset>All contacts</v-list-subheader>

    <v-list-item
        v-for="record in allRecords"
        :key="record.id"
        :title="record.first_name"
        :subtitle="record.phone_number"
      >
        <template v-slot:prepend>
          <v-avatar color="grey-lighten-1">
            <v-icon color="white">mdi-account-outline</v-icon>
          </v-avatar>
        </template>

        <template v-slot:append>
          <v-btn
            color="grey-lighten-1"
            icon="mdi-delete"
            variant="text"
          ></v-btn>
        </template>
      </v-list-item>

  </v-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapState } from 'pinia';

import { useRecordsStore } from '@/store/records';

export default defineComponent({
  computed: {
    ...mapState(useRecordsStore, ['allRecords']),
  },

  methods: {
    ...mapActions(useRecordsStore, ['fetchAllRecords']),
  },

  mounted() {
    this.fetchAllRecords();
  },
});
</script>
