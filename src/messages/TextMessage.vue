<template>
  <div class="sc-message--text" :style="messageColors">
    <template>
      <div class="sc-message--toolbox" :style="{background: messageColors.backgroundColor}">
        <button v-if="showEdition && me && message.id" :disabled="isEditing" @click="edit">
          <IconBase :color="isEditing ? 'black' : messageColors.color" width="10" icon-name="edit">
            <IconEdit />
          </IconBase>
        </button>
        <button v-if="showDeletion && me && message.id" @click="$emit('remove')">
          <IconBase :color="messageColors.color" width="10" icon-name="remove">
            <IconCross />
          </IconBase>
        </button>
        <slot name="text-message-toolbox" :message="message" :me="me"> </slot>
      </div>
    </template>
    <div class="likeBar" v-if="message.data.isShowLike">
      <a role="button" @click="$emit('action', {source: 'like', data: message})">
        <Like :isFull="true" v-if="message.data.like === 1" />
        <Like :isFull="false" v-if="message.data.like !== 1" />
      </a>
      <a role="button" @click="$emit('action', {source: 'dislike', data: message})">
        <Dislike :isFull="true" v-if="message.data.like === -1" />
        <Dislike :isFull="false" v-if="message.data.like !== -1" />
      </a>
    </div>
    <slot :message="message" :messageText="messageText" :messageColors="messageColors" :me="me">
      <p class="sc-message--text-content" v-html="messageText"></p>
      <p v-if="message.data.meta" class="sc-message--meta" :style="{color: messageColors.color}">
        {{ message.data.meta }}
      </p>
      <p v-if="message.isEdited" class="sc-message--edited">
        <IconBase width="10" icon-name="edited">
          <IconEdit />
        </IconBase>
        edited
      </p>
    </slot>
    <div v-if="message.data.isShowRating" class="references_header">
      <div>{{ ratingLabel }}</div>
      <star-rating
        @rating-selected="setRating"
        :border-width="0.5"
        :show-rating="false"
        :star-size="15"
        v-model="rating"
      ></star-rating>
    </div>
    <div v-if="message.data.refs && message.data.refs.length > 0">
      <div class="references_header">{{ message.data.refs.length }} references</div>
      <div aria-label="citations-container" class="citations">
        <div role="list">
          <div role="listitem" v-for="(ref, idx) of message.data.refs" :key="idx">
            <span
              role="button"
              aria-controls="citationPanel"
              tabindex="0"
              :title="ref.title"
              aria-label="citation 0"
              class="citationIndex"
              @click="$emit('action', {source: 'ref', data: ref})"
            >
              <div class="citationIndex">{{ idx + 1 }}</div>
              {{ ref.title }}</span
            >
          </div>
        </div>
      </div>
    </div>
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
import Like from '../icons/Like.vue'
import Dislike from '../icons/Dislike.vue'
import StarRating from 'vue-star-rating'

const fmt = require('msgdown')

export default {
  components: {
    IconBase,
    IconCross,
    IconEdit,
    Like,
    Dislike,
    StarRating
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
  data() {
    return {
      rating: 0
    }
  },
  computed: {
    ratingLabel() {
      return this.message.data.ratingLabel ? this.message.data.ratingLabel : 'Rate this message'
    },
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
    },
    isEditing() {
      return (store.state.editMessage && store.state.editMessage.id) === this.message.id
    },
    ...mapState(['showDeletion', 'showEdition'])
  },
  methods: {
    edit() {
      store.setState('editMessage', this.message)
    },
    setRating: function (rating) {
      this.rating = rating
      this.$emit('action', {source: 'rating', rating, data: this.message})
    }
  }
}
</script>

<style scoped lang="scss">
.sc-message--text {
  padding: 5px 20px;
  border-radius: 6px;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.4;
  position: relative;
  -webkit-font-smoothing: subpixel-antialiased;
  font-weight: 400;
  font-size: 14px;
  filter: drop-shadow(rgba(0, 0, 0, 0.14) 0px 4px 8px) drop-shadow(rgba(0, 0, 0, 0.12) 0px 0px 2px);
  padding: 16px 20px;
  overflow-wrap: anywhere;

  p {
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
  }
  .sc-message--text-content {
    white-space: normal;
  }
  &:hover .sc-message--toolbox {
    left: -20px;
    opacity: 1;
  }
  .sc-message--toolbox {
    transition: left 0.2s ease-out 0s;
    white-space: normal;
    opacity: 0;
    position: absolute;
    left: 0px;
    width: 25px;
    top: 0;
    button {
      background: none;
      border: none;
      padding: 0px;
      margin: 0px;
      outline: none;
      width: 100%;
      text-align: center;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
    & /deep/ svg {
      margin-left: 5px;
    }
  }
  code {
    font-family: 'Courier New', Courier, monospace !important;
  }
}

.sc-message--content.sent .sc-message--text {
  color: white;
  background-color: #4e8cff;
  max-width: calc(100% - 120px);
  word-wrap: break-word;
}

.sc-message--content.received .sc-message--text {
  color: #263238;
  background-color: #f4f7f9;
  margin-right: 40px;
  max-width: calc(100%);
}

a.chatLink {
  color: inherit !important;
}

.references_header {
  padding-top: 5px;
  padding-bottom: 5px;
  color: darkgray;
}

.citations span {
  margin: 7px 0px;
  line-height: 25px;
  padding: 0px 4px;
  color: rgb(0, 107, 189);
  display: block;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  border: 0.5px solid rgb(209, 209, 209);
  border-radius: 4px;
  text-overflow: ellipsis;
  width: auto;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
}

.citations span:hover {
  text-decoration: underline;
}

.citationIndex {
  border-radius: 4px;
  color: rgb(66, 66, 66);
  display: inline-flex;
  border: 0.5px solid rgb(209, 209, 209);
  margin: 2px 5px;
  padding: 1px 4px;
  line-height: 12px;
  font-size: 12px;
}

.likeBar {
  text-align: right;

  a {
    cursor: pointer;
    padding: 2px;
    margin: 0;
  }
}
</style>
