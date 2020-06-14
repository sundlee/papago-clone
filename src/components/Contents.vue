<template>
  <div class="contents">
    <div class="src-area">
        <textarea v-model="src" placeholder="번역하고 싶은 글을 입력하세요."></textarea>
        <button @click.stop.prevent="btnTranslateClick">번역</button>
    </div>
    <div class="dest-area">
        <textarea v-model="dest" placeholder="여기에 결과가 출력됩니다."></textarea>
        <p>{{dest}}</p>
    </div>
  </div>

</template>

<script>
import { translateSrc } from '../operations/papagoOperation';

export default {
  name: 'contents',

  data() {
    return {
      src: '',
      dest: '',
    };
  },

  methods: {
      btnTranslateClick() {
        const param = {
          "source": "en",
          "target": "ko",
          "text": "Python is an easy to learn, powerful programming language."
        };

        const result = translateSrc(param);
        console.log('result: ', result);

      },
  },
}
</script>

<style lang="scss">
$image-path: "../assets/images/";
$font-family-sans-serif: 'Noto Sans KR', 'Noto Sans TC', 'Noto Sans JP', sans-serif;

.contents {
    font-family: $font-family-sans-serif;
    display: flex;
    margin-top: 20px;
    .src-area {
        width: 40%;
        height: 500px;
        margin-left: 5%;
        textarea {
            width: 100%;
            height: 100%;
        }
    }
    .dest-area {
        width: 40%;
        height: 500px;
        margin-left: 10%;
        margin-right: 5%;
        textarea {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
