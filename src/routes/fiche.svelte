<style>
    .wrapper {
        display: grid;
        grid-template-columns: 400px 2fr 2fr;
        grid-gap: 1em;
        color: #444;
        font-size: 1.2em;
    }

    .brew {
        padding: 1em;
        border-top: 1px solid #ccc;
    }

    .box {
        color: #444;
        padding-left: 3em;
    }

    .photo-zoom {
        padding: 0;
        height: 400px; /* [1.1] Set it as per your need */
        width: 400px;
        position: relative;
        overflow: hidden; /* [1.2] Hide the overflowing of child elements */
        -webkit-box-shadow: 6px 7px 5px 0px rgba(156, 154, 156, 1);
        -moz-box-shadow: 6px 7px 5px 0px rgba(156, 154, 156, 1);
        box-shadow: 6px 7px 5px 0px rgba(156, 154, 156, 1);
        cursor: -webkit-zoom-in;
        cursor: -moz-zoom-in;
        cursor: zoom-in;
    }

    .photo-zoom img {
        margin: 0;
        padding: 0;
        max-width: 100%;
        transform-origin: 65% 75%;
        transition: transform 1s, filter 0.5s ease-out;
    }

    .photo-zoom:hover img {
        transform: scale(4);
    }

    .zoom {
        background: url(/assets/icons/zoom-in.svg) center center no-repeat;
        position: absolute;
        left: 0;
        top: 0.5em;
        z-index: 1000;
        width: 2em;
    }

    .property-title {
        margin-top: 1.5em;
        font-size: 0.8em;
        font-weight: 800;
    }

    .property-icon {
        margin: 0;
        margin-top: 1em;
        font-size: 0.8em;
        line-height: 2.9em;
    }

    .property-value > ul {
        margin: 0;
    }
    .property-value,
    .property-value > ul > li {
        margin: 0;
        font-size: 0.8em;
    }
    .icons {
        margin: 0 auto;
        border: none;
        background: transparent;
        display: inline-block;
        width: 18%;
    }
    .ideogram-pinyin {
        display: inline-block;
    }
    .ideogram {
        font-size: 0.7em;
        color: #999;
        font-weight: normal;
    }
    h1 span {
        display: block;
    }

    p {
        margin: 0;
        padding: 0;
    }
    .pinyin {
        font-weight: normal;
        font-size: 1.1em;
    }
    .mountain {
        vertical-align: top;
    }
    .voice {
        cursor: pointer;
    }
</style>

<script>
    import { stores } from '@sapper/app'
    import { onMount } from 'svelte'
    import Brews from '../components/Brews.svelte'
    import IconTeaType from '../components/IconTeaType.svelte'
    import { normalize } from '../components/NormalizePinyin.svelte'

    const { page } = stores()

    const pinyin = $page.query.pinyin

    let tea = {}
    let i18n = []

    onMount(async () => {
        const res0 = await fetch(`https://api-tea.brutdethé.fr/api/v1/teas`)

        if (res0.ok) {
            const teas = (await res0.json()).api
            tea = teas.filter(tea => pinyin === normalize(tea.pinyin))[0]
            if (!tea) {
                // 404
                throw new Error('no tea found')
            }
        } else {
            // 404
            throw new Error(text)
        }

        const res1 = await fetch(`https://api-tea.brutdethé.fr/api/v1/pinyin`)

        if (res1.ok) {
            i18n = (await res1.json()).api
        } else {
            // 404
            throw new Error(text)
        }
    })

    function getPinyin(text, i18n) {
        const term = i18n.filter(term => term.ideogram === text)[0] || {}
        return 'pinyin' in term ? term.pinyin : '-'
    }

    const display = {
        elevations: elevations => {
            if (+elevations) {
                return `à partir de ${elevations} mètres`
            } else if (elevations.length == 2 && Array.isArray([elevations])) {
                return `${elevations[0]} à ${elevations[1]} mètres`
            }
        },
        oxidations: oxidations => {
            if (+oxidations) {
                return `à partir de ${oxidations}%`
            } else if (oxidations.length == 2 && Array.isArray(oxidations)) {
                return `entre ${oxidations[0]}% et ${oxidations[1]}%`
            }
        }
    }
    function playAudio(ideogram) {
        document.querySelector(`#${ideogram.replace(/\s/g, '')}`).play()
    }
    function getFrenchSeason(season) {
        switch (season) {
            case '春季':
                return 'Printemps'
            case '夏季':
                return 'Été'
            case '秋季':
                return 'Automne'
            case '冬季':
                return 'Hivers'
        }
    }
</script>

<svelte:head>
    <title>Fiche de thé</title>
</svelte:head>

{#if tea.pinyin}
    <h1>
        <div class="ideogram-pinyin">
            <audio id="{tea.ideogram}">
                <source
                    src="assets/audio/{tea.ideogram}.mp3"
                    type="audio/mpeg"
                />
            </audio>
            <span
                class="pinyin voice"
                title="voix"
                on:click="{playAudio(tea.ideogram)}"
            >
                {tea.pinyin}
            </span>
            <span
                class="ideogram voice"
                title="voix"
                on:click="{playAudio(tea.ideogram)}"
            >
                {tea.ideogram}
            </span>
        </div>
    </h1>
    <div class="wrapper">
        <div class="box photo-zoom" tabindex="0">
            <div class="zoom">&nbsp;</div>
            <img
                src="/assets/thes/{tea.ideogram}.jpg"
                alt="{tea.ideogram}"
                title="{tea.ideogram}"
                class="photo"
            />
        </div>
        <div class="box">
            <IconTeaType
                ideogram="{tea.type}"
                pinyin="{getPinyin(tea.type, i18n)}"
            />
            <dl>
                {#if tea.families.length}
                    <dt class="property-title">Famille :</dt>
                    <dd class="property-value">
                        <ul class="ideogram-pinyin">
                            {#each tea.families as family}
                                <li class="pinyin">
                                    <audio id="{family}">
                                        <source
                                            src="assets/audio/{family}.mp3"
                                            type="audio/mpeg"
                                        />
                                    </audio>
                                    <span
                                        class="pinyin voice"
                                        title="voix"
                                        on:click="{playAudio(family)}"
                                    >
                                        {getPinyin(family, i18n)}
                                    </span>
                                    <p
                                        class="voice"
                                        title="voix"
                                        on:click="{playAudio(family)}"
                                    >
                                        {family}
                                    </p>
                                </li>
                            {/each}
                        </ul>
                    </dd>
                {/if}
                {#if tea.oxidations.length}
                    <dt class="property-title">Oxydation :</dt>
                    <dd class="property-value">
                        {display.oxidations(tea.oxidations)}
                    </dd>
                {/if}
                {#if tea.elevations.length}
                    <dd class="property-icon">
                        <img
                            class="icons mountain"
                            src="/assets/icons/mountain.svg"
                            alt="altitude"
                        />
                        {display.elevations(tea.elevations)}
                    </dd>
                {/if}
                {#if tea.harvests.length}
                    <dt class="property-title">
                        {#if tea.harvests.length > 1}Saisons{:else}Saison{/if}
                        de récolte :
                    </dt>
                    <dd class="property-value">
                        {#each tea.harvests as season}
                            <img
                                class="icons"
                                src="/assets/icons/{season}.svg"
                                alt="{season}"
                                title="{getFrenchSeason(season)}"
                            />
                        {/each}
                    </dd>
                {/if}
                {#if tea.pickings.length}
                    <dt class="property-title">Cueillette :</dt>
                    <dd class="property-value">
                        <ul class="ideogram-pinyin">
                            {#each tea.pickings as pick}
                                <li class="pinyin">
                                    <audio id="{pick.replace(/\s/g, '')}">
                                        <source
                                            src="assets/audio/{pick}.mp3"
                                            type="audio/mpeg"
                                        />
                                    </audio>
                                    <span
                                        class="voice"
                                        title="voix"
                                        on:click="{playAudio(pick)}"
                                    >
                                        {getPinyin(pick, i18n)}
                                    </span>
                                    <p
                                        class="ideogram voice"
                                        title="voix"
                                        on:click="{playAudio(pick)}"
                                    >
                                        {pick}
                                    </p>
                                </li>
                            {/each}
                        </ul>
                    </dd>
                {/if}
            </dl>
        </div>
        <div class="box">
            {#if tea.provinces.length}
                <dt class="property-title">Provinces :</dt>
                <dd class="property-value">
                    <ul class="ideogram-pinyin">
                        {#each tea.provinces as provinces}
                            <li class="pinyin">
                                <a
                                    href="https://map.baidu.com/search/?querytype=s&wd={provinces}"
                                    target="_blank"
                                >
                                    <audio id="{provinces}">
                                        <source
                                            src="assets/audio/{provinces}.mp3"
                                            type="audio/mpeg"
                                        />
                                    </audio>
                                    <span
                                        class="voice"
                                        title="voix"
                                        on:click="{playAudio(provinces)}"
                                    >
                                        {getPinyin(provinces, i18n)}
                                    </span>
                                </a>
                                <p
                                    class="ideogram voice"
                                    title="voix"
                                    on:click="{playAudio(provinces)}"
                                >
                                    {provinces}
                                </p>

                            </li>
                        {/each}
                    </ul>
                </dd>
            {/if}
            {#if tea.towns.length}
                <dt class="property-title">Villes :</dt>
                <dd class="property-value">
                    <ul class="ideogram-pinyin">
                        {#each tea.towns as towns}
                            <li class="pinyin">
                                <a
                                    href="https://map.baidu.com/search/?querytype=s&wd={towns}"
                                    target="_blank"
                                >
                                    <audio id="{towns}">
                                        <source
                                            src="assets/audio/{towns}.mp3"
                                            type="audio/mpeg"
                                        />
                                    </audio>
                                    <span
                                        class="voice"
                                        title="voix"
                                        on:click="{playAudio(towns)}"
                                    >
                                        {getPinyin(towns, i18n)}
                                    </span>
                                </a>
                                <p
                                    class="ideogram voice"
                                    title="voix"
                                    on:click="{playAudio(towns)}"
                                >
                                    {towns}
                                </p>
                            </li>
                        {/each}
                    </ul>
                </dd>
            {/if}
            {#if tea.cultivars.length}
                <dt class="property-title">Cultivars :</dt>
                <dd class="property-value">
                    <ul class="ideogram-pinyin">
                        {#each tea.cultivars as cultivars}
                            <li class="pinyin">
                                <audio id="{cultivars}">
                                    <source
                                        src="assets/audio/{cultivars}.mp3"
                                        type="audio/mpeg"
                                    />
                                </audio>
                                <span
                                    class="voice"
                                    title="voix"
                                    on:click="{playAudio(cultivars)}"
                                >
                                    {getPinyin(cultivars, i18n)}
                                </span>
                                <p
                                    class="ideogram voice"
                                    title="voix"
                                    on:click="{playAudio(cultivars)}"
                                >
                                    {cultivars}
                                </p>
                            </li>
                        {/each}
                    </ul>
                </dd>
            {/if}
        </div>
        <div class="box"></div>
    </div>
    <section class="brew">
        <h3>Conseils d'infusion</h3>
        <div class="row">
            {#if Array.isArray(tea.brews)}
                {#each tea.brews as brew}
                    <Brews {brew} />
                {/each}
            {/if}
        </div>
    </section>
{/if}
