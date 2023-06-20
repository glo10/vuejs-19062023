<script>
import Child from './Child.vue';

export default {
    components: Child,
    data() {
        return {
            items : [
                {
                    id: 1,
                    title: 'title 1',
                    content: 'content 1',
                    'year': 2014
                },
                {
                    id: 2,
                    title: 'title 2',
                    content: 'content 2',
                    'year': 2019
                },
                {
                    id: 3,
                    title: 'title 3',
                    content: 'content 3',
                    'year': 2021
                }
            ]
        }
    }
}
</script>
<template>
    <child 
        v-for="item in items"
        :key="item.id"
        :title="item.id"
        :content="item"
        :year="item.year"
    />
</template>