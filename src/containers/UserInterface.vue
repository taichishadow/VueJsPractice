<template>
    <div>
      <div id="menu">
        共學群名稱:<input id="name" type="text" v-model="name" v-on:change="addItem()" /><br/>
        共學群簡介:<textarea id="content" v-model="content" v-on:change="addItem()"></textarea><br/>
        共學群圖片:<input id="url" type="url" v-model="url" v-on:change="addItem()" /><br/>
        <input type="button" value="save" v-on:click="insertItem" />
      </div>
      <!--透過v-bind自定義一個colearning變數，然後塞陣列進去-->
      <table style="width:80%;margin-left:auto;margin-right:auto;border:1px solid black;">
        <tr>
          <th>共學群</th>
          <th>簡介</th>
          <th>圖片</th>
          <th></th>
        </tr>
        <contentSlot v-for="(item, index) in getListAlias" v-bind:key="index" v-bind:colearning="item" v-on:editItem="subEditItem(item)" v-on:deleteItem="subDeleteItem(item)"></contentSlot>
      </table>
    </div>
</template>

<script>
import contentSlot from '@/components/content'
import { mapGetters } from 'vuex'

export default {
  components: { contentSlot },
  data () {
    return {
      name: '',
      content: '',
      url: '',
      obj: {
        name: '',
        content: '',
        url: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      getListAlias: 'getList'
    })
  },
  methods: {
    insertItem () {
      this.$store.dispatch('setList', this.obj)
    },
    addItem () {
      this.obj = {
        name: this.name,
        content: this.content,
        url: this.url
      }
    },
    subEditItem (item) {
      this.$store.dispatch('editList', item)
    },
    subDeleteItem (item) {
      this.$store.dispatch('deleteList', item)
    }
  }
}
</script>
