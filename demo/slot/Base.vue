<template>
    <h1>Base dynamique grâce au slot</h1>
    <div>
        <slot name="list"></slot>
    </div>
    <div>
        <slot name="images">
            
        </slot>
    </div>
    <div>
        <slot name="table"></slot>
    </div>
</template>