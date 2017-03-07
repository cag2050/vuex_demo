<template>
    <div id='app'>
        count is {{ $store.state.count }}
        <button @click='increment'>+1</button>
        <button @click='decrement'>-1</button><br/>
        {{ $store.state.msg }}
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: mapGetters ([]),
    methods: mapActions (['increment','decrement'])
}
</script>