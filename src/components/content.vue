<template>
    <tr>
      <td><input v-model="colearning.name" type="input" /></td>
      <td><input v-model="colearning.content" type="input" /></td>
      <td><input v-model="colearning.url" type="input" /></td>
      <td>
        <input type="button" v-on:click="editItem()" value="修改" />
        <input type="button" v-on:click="removeItem()" value="刪除" />
      </td>
    </tr>
</template>

<script>
export default {
  props: ['colearning'],
  data () {
    return {
    }
  },
  methods: {
    editItem () {
      this.$emit('editItem', this.colearning)
    },
    removeItem (item) {
      this.$emit('deleteItem', this.colearning)
    }
  }
}

</script>
