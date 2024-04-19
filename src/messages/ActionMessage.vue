<template>
  <div class="sc-message--action" :style="messageColors">
    <slot :message="message" :messageText="messageText" :messageColors="messageColors" :me="me">
      <a
        style="cursor: pointer"
        @click="$emit('action', message.data.payload)"
        v-html="messageText"
      >
      </a>
    </slot>
  </div>
</template>

<script>
import {mapState} from '../store/'
import IconBase from './../components/IconBase.vue'
import IconEdit from './../components/icons/IconEdit.vue'
import IconCross from './../components/icons/IconCross.vue'
import escapeGoat from 'escape-goat'
import Autolinker from 'autolinker'
import store from '../store/'

const fmt = require('msgdown')

export default {
  components: {
    IconBase,
    IconCross,
    IconEdit
  },
  props: {
    message: {
      type: Object,
      required: true
    },
    messageColors: {
      type: Object,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    messageText() {
      if (this.message.data.isHtml) return this.message.data.text

      const escaped = escapeGoat.escape(this.message.data.text)

      return Autolinker.link(this.messageStyling ? fmt(escaped) : escaped, {
        className: 'chatLink',
        truncate: {length: 50, location: 'smart'}
      })
    },
    me() {
      return this.message.author === 'me'
    }
  }
}
</script>

<style scoped lang="scss">
.sc-message--action {
  padding: 5px 20px;
  border-radius: 6px;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.4;
  position: relative;
  -webkit-font-smoothing: subpixel-antialiased;
  a {
    cursor: pointer;
    text-decoration: underline dotted;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
