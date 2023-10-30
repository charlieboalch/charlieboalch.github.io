<script>
    import '$lib/style/fonts.css';
    import '$lib/style/common.css';
    import ResumeCard from "$lib/components/ResumeCard.svelte";
    import {buildStyle} from "$lib/scripts/dynamicCss.js";
    export let data;

    let styles = {
        "main-color": data.color,
    }

    $: cssVarStyles = buildStyle(styles)
</script>

<div class="sidebar section container" style="{cssVarStyles}">
    <h1>{data.title}</h1>
</div>

<div class="content section container" style="{cssVarStyles}">
    {#each data.cards as card}
        <ResumeCard data="{card}"/>
    {/each}
</div>

<style>
    .section {
        padding: 2em;
    }

    .sidebar {
        border-right: 1px solid lightgray;
        border-left: 10px solid var(--main-color, lightgray);
        max-height: 100vh;
    }

    .content {
        flex-direction: column;
        max-width: 70vw;
        gap: 2em;
    }
</style>