<script>
    import '$lib/style/fonts.css';
    import '$lib/style/common.css';
    import {buildStyle} from "$lib/scripts/dynamicCss.js";

    export let data;

    let styles = {
        "accent-color": data.color
    }

    $: cssVarStyles = buildStyle(styles)
</script>

<div style="{cssVarStyles}" class="card">
    <div class="container card-header">
        <p>{data.title}</p>
        <p>{data.date}</p>
    </div>
    <div class="container card-body">
        {#each data.information as info}
            <div class="container information">
                <p>{info.left}</p>
                <p>{info.right}</p>
            </div>
        {/each}
    </div>
</div>

<style>
    .card {
    }

    .card-header {
        background-color: var(--accent-color, lightgray);
        padding: 0.5em 3em 0.5em 3em;
        justify-content: space-between;
    }

    .card-header p {
        font-size: x-large;
        margin: 0;
        padding: 0;
    }

    .card-body {
        border: 1px solid lightgray;
        padding: 0.5em 3em 0.5em 3em;
        flex-direction: column;
    }

    .information {
        justify-content: space-between;
    }

    .information p {
        font-size: large;
    }
</style>