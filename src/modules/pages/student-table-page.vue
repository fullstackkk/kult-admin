<script lang="ts" setup>
import { mapActions, storeToRefs } from "pinia";
import { Ref, onMounted, ref } from "vue";
// import Hello from "@/components/Hello.vue";
import { useCounterStore } from "@/store/modules/example";
// import { usePokemonStore } from "@/store/modules/pokemon";
import { searchIcon } from "@/assets/svg";
import { IconConstructor } from "@/components";
import { MainButton } from "@/components/ui";
import { PageWrapper } from "@/components";

const welcome = ref("Boilerplate Vue 3 + Vite + TypeScript + Pinia");

// Instance to store
const main = useCounterStore();
// const pokemon = usePokemonStore();
// Make data reactive
const { counter, doubleCounter } = storeToRefs(main);
// const { pokemonsName } = storeToRefs(pokemon);
// Mapping actions
const { increment } = mapActions(useCounterStore, ["increment"]);
// Reset store data
const reset = () => main.$reset();
// Call action from store to get pokemons on mounted lifecycle
// onMounted(() => pokemon.getPokemons());

let clickedData: Ref<any> = ref();
let showPopup = ref(false);
const getClickedData = (clickData: any) => {
  clickedData.value = clickData;
  showPopup.value = !showPopup.value;
};
interface Idata {
  id: number;
  operationTime: string;
  operationNumber: number;
  name: string;
  phoneNumber: string;
  branch: string;
  clas: string;
  status: string;
  dateRegistration: string;
  income: number;
}
// использовать интрефейс из @/models/respons
</script>

<template>
  <page-wrapper>
    <template #header-title
      ><p class="dark:text-[#FAFAFA]">Таблица учеников</p></template
    >
    <template #filters-place>
      <div class="flex justify-between">
        <div class="flex gap-[20px]">
          <main-button
            class="dark:border-[#262C36] dark:bg-[#191D23] dark:text-[#E4E4E4]"
            text-content="Фильтр"
            left-icon="filterIcon"
          ></main-button>
          <label class="relative">
            <icon-constructor
              class="absolute left-[16px] top-[8px]"
              :height="24"
              :width="24"
            >
              <search-icon class="dark:text-[#A5A5A5]" />
            </icon-constructor>
            <input
              type="text"
              class="flex items-center justify-center gap-[4px] rounded-[20px] border border-[#E2DEFF] py-[8px] pl-[44px] dark:border-[#576776] dark:bg-[#262C36] dark:placeholder:text-[#A5A5A5]"
              placeholder="Поиск клиента..."
            />
          </label>
        </div>
        <main-button
          class="dark:border-[#262C36] dark:bg-[#191D23] dark:text-[#E4E4E4]"
          text-content="Добавить ученика"
          rightIcon="plusIcon"
        ></main-button>
      </div>
    </template>
    <template #main-content> </template>
  </page-wrapper>
</template>
