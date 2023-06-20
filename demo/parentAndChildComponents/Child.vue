<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }, 
        content: {
            type: String,
            default: 'the content'
        },
        year: {
            required: true,
            validator(data) {
                return /^(19|20)[\d]{2,2}$/.test(data)
            }
        }
    }
}
</script>
<template>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    <p>{{ year }}</p>
</template>