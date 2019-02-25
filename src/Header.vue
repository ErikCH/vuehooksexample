<template>
<div>

    <h1>Header For App</h1>

</div>
    
</template>
<script>

import { toggle } from './mixins/toggle.js';
export default {
    data(){
        return {
            msg: 'hi rom header'
        }
    },
    mixins: [toggle],
    hooks(){
    }
}
</script>

