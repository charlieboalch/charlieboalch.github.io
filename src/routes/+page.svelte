<script>
    import '$lib/style/fonts.css';
    import '$lib/style/common.css';
    import MapMarker from 'svelte-material-icons/MapMarker.svelte'
    import ResumeSection from "$lib/components/ResumeSection.svelte";
    import {buildStyle} from "$lib/scripts/dynamicCss.js";

    export let data;

    const styles = {
        "header-color": data.resume.bio.color
    }

    $: cssVarStyles = buildStyle(styles)
</script>

<div class="header container vertical centered" style="{cssVarStyles}">
    <h1 class="nameplate title">Charles Boalch</h1>
    <div class="container vertical information">
        <div class="container centered info-bar">
            <a target="_blank" href={data.resume.bio.github}>GitHub</a>
            <p class="info-bar-vertical">|</p>
            <MapMarker/>
            <p>Metro Atlanta</p>
        </div>
        <div class="container centered info-bar">
            <p>Education</p>
            <p class="info-bar-vertical">|</p>
            <p>Experience</p>
            <p class="info-bar-vertical">|</p>
            <p>Skills</p>
            <p class="info-bar-vertical">|</p>
            <p>Interests</p>
        </div>
    </div>
</div>

<div class="content">
    {#each data.resume.content as section}
        <ResumeSection data="{section}" />
    {/each}
</div>

<style lang="scss" global>
  .content {
    display: grid;
    grid-template-columns: 25vw 75vw;
    grid-template-rows: auto auto auto auto auto;
  }

  .information {
    flex: 2;
  }

  .header {
    width: 100%;
    height: 70vh;
    background-color: var(--header-color, lightgray);
    padding: 0;
    margin: 0;
    gap: 2vh;
  }

  .nameplate {
    font-size: xxx-large;
    text-align: center;
    margin: 30vh 0 0;
  }

  .info-bar {
    font-family: "Merriweather Sans", Arial, sans-serif;
    font-size: x-large;
  }

  .info-bar a {
    color: black;
    text-decoration: none;
  }

  .info-bar a, p {
    margin: 0;
  }

  .info-bar-vertical {
    margin: 0 0.5em 0 0.5em;
  }

  .title {
    font-family: "Merriweather Sans", sans-serif;
  }
</style>