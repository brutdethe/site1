<style>
    h3 {
        text-align: left;
        margin-top: 2em;
    }
    .pinyin {
        display: block;
        font-size: 0.7em;
        color: #999;
    }
    .voice {
        cursor: pointer;
    }
</style>

<script>
    import { onMount } from 'svelte'

    let terms = []
    let themes = []

    onMount(async () => {
        const res = await fetch(`https://api-tea.brutdethé.fr/api/v1/pinyin`)

        if (res.ok) {
            terms = (await res.json()).api
        } else {
            // 404
            throw new Error(text)
        }

        const res1 = await fetch(`https://api-tea.brutdethé.fr/api/v1/themes`)

        if (res1.ok) {
            themes = (await res1.json()).api
        } else {
            // 404
            throw new Error(text)
        }
    })

    function getPinyinByThemes(pinyins, theme) {
        return pinyins.filter(pinyin => pinyin.theme === theme.en)
    }

    function playAudio(ideogram) {
        document.querySelector(`#${ideogram.replace(/\s/g, '')}`).play()
    }
</script>

<h1>Termes utilisés</h1>

<p>
    Cette page présente une liste des termes en chinois traditionnel employés
    sur le site avec leurs traduction en
    <em>pinyin</em>
</p>
{#each themes as theme}
    <h3>
        <audio id="{theme.ideogram}">
            <source src="assets/audio/{theme.ideogram}.mp3" type="audio/mpeg" />
        </audio>
        <span class="voice" title="voix" on:click="{playAudio(theme.ideogram)}">
            {theme.ideogram}
        </span>
        <span
            class="pinyin voice"
            title="voix"
            on:click="{playAudio(theme.ideogram)}"
        >
            {theme.pinyin}
        </span>
    </h3>
    <div class="row">
        <table class="column column-66">
            <thead>
                <tr>
                    <td>Chinois traditionnel</td>
                    <td>Pinyin</td>
                </tr>
            </thead>
            {#each getPinyinByThemes(terms, theme) as term}
                <tr>
                    <td>
                        <audio id="{term.ideogram.replace(/\s/g, '')}">
                            <source
                                src="assets/audio/{term.ideogram}.mp3"
                                type="audio/mpeg"
                            />
                        </audio>
                        <span
                            class="voice"
                            title="voix"
                            on:click="{playAudio(term.ideogram)}"
                        >
                            {term.ideogram}
                        </span>
                    </td>
                    <td>
                        <span
                            class="voice"
                            title="voix"
                            on:click="{playAudio(term.ideogram)}"
                        >
                            {term.pinyin}
                        </span>
                    </td>
                </tr>
            {:else}
                <p>chargement des termes...</p>
            {/each}
        </table>
    </div>
{:else}
    <p>chargement des thèmes...</p>
{/each}
