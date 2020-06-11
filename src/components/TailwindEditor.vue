<template>
  <div>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="mb-4">
        <button
            class="outline-none mr-4 text-primary bg-gray-200 hover:bg-gray-400 text-sm font-medium py-3 px-5 rounded-lg"
            :class="{ 'bg-blue-500 text-gray-200': isActive['font-bold']() }" @click="commands['font-bold']">
          font-bold
        </button>
        <button
            class="outline-none mr-4 text-primary bg-gray-200 hover:bg-gray-400 text-sm font-medium py-3 px-5 rounded-lg"
            :class="{ 'bg-blue-500 text-gray-200': isActive['text-lg']() }" @click="commands['text-lg']">
          text-lg
        </button>
        <button
            class="outline-none mr-4 text-primary bg-gray-300 hover:bg-gray-400 text-sm font-medium py-3 px-5 rounded-lg"
            :class="{ 'bg-blue-500 text-gray-200': isActive['uppercase']() }" @click="commands['uppercase']">
          uppercase
        </button>
      </div>
    </editor-menu-bar>
    <div class="border border-gray-300 rounded-lg shadow p-6 outline-none">
      <editor-content :editor="editor"/>
    </div>
  </div>
</template>

<script>
  import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
  import { History } from 'tiptap-extensions'
  import Tailwind from '../marks/Tailwind'

  export default {
    name: 'TailwindEditor',
    components: { EditorContent, EditorMenuBar },
    data() {
      return {
        editor: new Editor({
          extensions: [
            new Tailwind('font-bold', [{ tag: 'strong' }, { tag: 'b' }]),
            new Tailwind('text-lg'),
            new Tailwind('uppercase'),
            new History(),
          ],
          content: `
          <h1>Yay Tailwind!</h1>
          <p><span class="font-bold">font-bold</span> <strong>strong</strong></p>
          <p><span class="text-lg">text-lg</span></p>
          <p><span class="uppercase">uppercase</span></p>
        `,
        }),
      }
    },
  }
</script>

<style scoped>

</style>
