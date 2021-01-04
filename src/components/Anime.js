import React from "react"

export const Anime = (props) => {

    const {anime} = props

    const showSynopsis = () => {}

    return <main>
        <article>
            <div class="content_img">
            <img src={anime.image_url} width="296" height="246" alt=""></img>
            <div>{anime.title}</div>
            </div>
        </article>
    </main>
}

//image_url
//synopsis

//dev tools component for genre "action" = state>anime>image_url
//dev tools component for "bleach" = state>results>image_url
//dev tools component for "popular" = state>top>image_url