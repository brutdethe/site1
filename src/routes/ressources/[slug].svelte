<style>
    /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/

    .content :global(.blobTools) {
        position: fixed;
        height: 100vh;
        width: 32px;
        margin-left: -50px;
    }

    .content :global(.blobTools a) {
        display: block;
        text-indent: -9999px;
        opacity: 0.3;
        transition: opacity 0.3s;
    }

    .content :global(.blobTools a:hover) {
        opacity: 0.8;
    }

    .content :global(.blobGhLink),
    .content :global(.blobGhEdit) {
        width: 20px;
        height: 20px;
        margin: 0 auto;
        margin-bottom: 5px;
    }

    .content :global(.blobGhLink) {
        background: url('data:image/svg+xml,<svg contentScriptType="text/ecmascript" contentStyleType="text/css" enable-background="new 0 0 2048 2048" height="2048px" id="Layer_1" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="0.0 0 1536.0 2048" width="1536.0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify"><path d="M1536,1024c0,167.333-48.833,317.833-146.5,451.5S1165.667,1701.667,1011,1753c-18,3.333-31.167,1-39.5-7s-12.5-18-12.5-30  v-211c0-64.667-17.333-112-52-142c38-4,72.167-10,102.5-18c30.333-8,61.667-21,94-39s59.333-40.167,81-66.5s39.333-61.333,53-105  c13.667-43.667,20.5-93.833,20.5-150.5c0-80.667-26.333-149.333-79-206c24.667-60.667,22-128.667-8-204  c-18.667-6-45.667-2.333-81,11s-66,28-92,44l-38,24c-62-17.333-126-26-192-26s-130,8.667-192,26  c-10.667-7.333-24.833-16.333-42.5-27S488,602.5,450,587.5S383.333,568,364,574c-29.333,75.333-31.667,143.333-7,204  c-52.667,56.667-79,125.333-79,206c0,56.667,6.833,106.667,20.5,150c13.667,43.333,31.167,78.333,52.5,105s48.167,49,80.5,67  s63.667,31,94,39c30.333,8,64.5,14,102.5,18c-26.667,24-43,58.333-49,103c-14,6.667-29,11.667-45,15s-35,5-57,5  s-43.833-7.167-65.5-21.5s-40.167-35.167-55.5-62.5c-12.667-21.333-28.833-38.667-48.5-52s-36.167-21.333-49.5-24l-20-3  c-14,0-23.667,1.5-29,4.5s-7,6.833-5,11.5s5,9.333,9,14s8.333,8.667,13,12l7,5c14.667,6.667,29.167,19.333,43.5,38  s24.833,35.667,31.5,51l10,23c8.667,25.333,23.333,45.833,44,61.5s43,25.667,67,30s47.167,6.667,69.5,7  c22.333,0.333,40.833-0.833,55.5-3.5l23-4c0,25.333,0.167,55,0.5,89s0.5,52,0.5,54c0,12-4.333,22-13,30s-22,10.333-40,7  c-154.667-51.333-280.833-143.833-378.5-277.5S0,1191.333,0,1024c0-139.333,34.333-267.833,103-385.5S264.833,427.667,382.5,359  S628.667,256,768,256s267.833,34.333,385.5,103s210.833,161.833,279.5,279.5S1536,884.667,1536,1024z" fill="black" /></svg>')
            0 0 no-repeat;
        background-size: 16px;
    }

    .content :global(.blobGhEdit) {
        background: url('data:image/svg+xml,<svg contentScriptType="text/ecmascript" contentStyleType="text/css" enable-background="new 0 0 2048 2048" height="2048px" id="Layer_1" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="0.0 0 1536.0 2048" width="1536.0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify"><path d="M 363,0 454,91 219,326 128,235 V 128 H 256 V 0 h 107 z m 523,928 q 0,22 -22,22 -10,0 -17,-7 L 305,401 q -7,-7 -7,-17 0,-22 22,-22 10,0 17,7 l 542,542 q 7,7 7,17 z M 832,1120 1248,704 416,-128 H 0 v 416 z m 683,-96 q 0,-53 -37,-90 l -166,-166 -416,416 166,165 q 36,38 90,38 53,0 91,-38 l 235,-234 q 37,-39 37,-91 z " fill="black" /></svg>')
            0 0 no-repeat;
        background-size: 16px;
    }

    .content :global(.blobPageTop) {
        position: absolute;
        bottom: 150px;
        width: 32px;
        height: 32px;
        background: url('data:image/svg+xml,<svg contentScriptType="text/ecmascript" contentStyleType="text/css" enable-background="new 0 0 2048 2048" height="2048px" id="Layer_1" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="0.0 0 1536.0 2048" width="1536.0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify"><path d="  M1075,1312c0,8.667-3.333,16.333-10,23l-50,50c-6.667,6.667-14.333,10-23,10s-16.333-3.333-23-10L576,992l-393,393  c-6.667,6.667-14.333,10-23,10s-16.333-3.333-23-10l-50-50c-6.667-6.667-10-14.333-10-23s3.333-16.333,10-23l466-466  c6.667-6.667,14.333-10,23-10s16.333,3.333,23,10l466,466C1071.667,1295.667,1075,1303.333,1075,1312z" fill="black" /></svg>')
            0 0 no-repeat;
        background-size: 32px;
    }
    /* Tooltip Styles
  */
    .content :global(.tooltip) {
        position: relative;
    }
    .content :global(.tooltip:before) {
        content: attr(title);
        position: absolute;
        bottom: 100%;
        left: 50%;
        padding: 0.25em 0.5em;
        min-width: 75px;
        font-size: 0.8em;
        color: #fff;
        text-indent: 0;
        text-align: center;
        background: black;
        opacity: 0;
        pointer-events: none;
        transform: translateX(-50%);
        transition: all 0.2s ease-out;
    }
    .content :global(.tooltip:hover:before) {
        transform: translateX(-50%) translateY(-10%);
        opacity: 1;
    }
    .content :global(#parentRepo) {
        padding-top: 10px;
        text-align: center;
    }
    .content :global(img) {
        width: auto;
        margin: auto;
    }
    .content :global(iframe) {
        display: block;
        margin: 2em auto;
        -webkit-box-shadow: 6px 7px 5px 0px rgba(156, 154, 156, 1);
        -moz-box-shadow: 6px 7px 5px 0px rgba(156, 154, 156, 1);
        box-shadow: 6px 7px 5px 0px rgba(156, 154, 156, 1);
    }
</style>

<script context="module">
    export async function preload({ params, query }) {
        // the `slug` parameter is available because
        // this file is called [slug].svelte
        const res = await this.fetch(`ressources/${params.slug}.json`)
        const data = await res.json()

        if (res.status === 200) {
            return { post: data }
        } else {
            this.error(res.status, data.message)
        }
    }
</script>

<script>
    import { onMount } from 'svelte'
    onMount(async () => {
        ;[...document.querySelectorAll('a[href^="#"]')].map(
            x => (x.href = document.location + new URL(x.href).hash)
        )
    })
    export let post
</script>

<svelte:head>
    <title>{post.titre}</title>
</svelte:head>

<aside class="blobTools">
    <a
        href="https://github.com/oisiflorus/ressources/blob/master/journees-cogitation/prix-libre-et-dialogue.md"
        title="Voir sur Github"
        class="blobGhLink tooltip"
    >
        &nbsp;
    </a>
    <a
        href="https://github.com/oisiflorus/ressources/edit/master/journees-cogitation/prix-libre-et-dialogue.md"
        title="Éditer sur Github"
        class="blobGhEdit tooltip"
    >
        &nbsp;
    </a>

    <!-- <a href="#top" class="blobPageTop">Haut de page</a> -->
</aside>
<article class="blobContent" data-title="content">
    <h1>{post.titre}</h1>

    <div class="content">
        {@html post.html}
    </div>
</article>
