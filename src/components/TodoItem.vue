<template>
    <li @click="$emit('toggleCompleted')" @contextmenu.prevent="$emit('remove')"
             :class="{completed : todo.done == true}">{{ todo.content }}</li>
</template>
<script>
export default {
    props : {
        todo : Object
    }
}
</script>