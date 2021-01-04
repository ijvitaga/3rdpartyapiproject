import React from "react"
import {Anime} from "./Anime"

// const anime = {
const genre = {
    action: "https://api.jikan.moe/v3/genre/anime/1/1",
    // popular: "https://api.jikan.moe/v3/top/anime/1/bypopularity",
    // bleach: "https://api.jikan.moe/v3/search/anime?q=Bleach/episodes",
    // inuyasha: "https://api.jikan.moe/v3/search/anime?q=Inuyasha&page=1",
    // onepunchman: "https://api.jikan.moe/v3/search/anime?q=Onepunchman&/episodes",
    // demonslayer: "https://api.jikan.moe/v3/search/anime?q=demonslayer&page=1"
    adventure: "https://api.jikan.moe/v3/genre/anime/2/1",
    comedy: "https://api.jikan.moe/v3/genre/anime/4/1",
    romance: "https://api.jikan.moe/v3/genre/anime/22/1",
    drama: "https://api.jikan.moe/v3/genre/anime/8/1",
    mystery: "https://api.jikan.moe/v3/genre/anime/7/1",
    horror: "https://api.jikan.moe/v3/genre/anime/14/1",
    demons: "https://api.jikan.moe/v3/genre/anime/6/1",
    sports: "https://api.jikan.moe/v3/genre/anime/30/1",
    thriller: "https://api.jikan.moe/v3/genre/anime/41/1",
    sci_fi: "https://api.jikan.moe/v3/genre/anime/24/1",
    music: "https://api.jikan.moe/v3/genre/anime/19/1",
    parody: "https://api.jikan.moe/v3/genre/anime/20/1",
    samurai: "https://api.jikan.moe/v3/genre/anime/21/1",
    martial_arts: "https://api.jikan.moe/v3/genre/anime/17/1",
    magic: "https://api.jikan.moe/v3/genre/anime/16/1",
    kids: "https://api.jikan.moe/v3/genre/anime/15/1",
    game: "https://api.jikan.moe/v3/genre/anime/11/1",
    fantasy: "https://api.jikan.moe/v3/genre/anime/10/1",
    historical: "https://api.jikan.moe/v3/genre/anime/13/1",
    cars: "https://api.jikan.moe/v3/genre/anime/3/1",
    dementia: "https://api.jikan.moe/v3/genre/anime/5/1",
    ecchi: "https://api.jikan.moe/v3/genre/anime/9/1",
    mecha: "https://api.jikan.moe/v3/genre/anime/18/1",
    school: "https://api.jikan.moe/v3/genre/anime/23/1",
    shouju: "https://api.jikan.moe/v3/genre/anime/25/1",
    shoujo_ai: "https://api.jikan.moe/v3/genre/anime/26/1",
    shounen: "https://api.jikan.moe/v3/genre/anime/27/1",
    shounen_ai: "https://api.jikan.moe/v3/genre/anime/28/1",
    space: "https://api.jikan.moe/v3/genre/anime/29/1",
    super_power: "https://api.jikan.moe/v3/genre/anime/31/1",
    vampire: "https://api.jikan.moe/v3/genre/anime/32/1",
    yaoi: "https://api.jikan.moe/v3/genre/anime/33/1",
    yuri: "https://api.jikan.moe/v3/genre/anime/34/1",
    harem: "https://api.jikan.moe/v3/genre/anime/35/1",
    slice_of_life: "https://api.jikan.moe/v3/genre/anime/36/1",
    supernatural: "https://api.jikan.moe/v3/genre/anime/37/1",
    military: "https://api.jikan.moe/v3/genre/anime/38/1",
    police: "https://api.jikan.moe/v3/genre/anime/39/1",
    psychological: "https://api.jikan.moe/v3/genre/anime/40/1",
    seinen: "https://api.jikan.moe/v3/genre/anime/42/1",
    josei: "https://api.jikan.moe/v3/genre/anime/43/1"
}

export const Info = (props) => {

    const selected = props.match.params.genre

    const [info, setInfo] = React.useState([])

    React.useEffect(() => {
        fetch(genre[selected])
        .then((response) => response.json())
        .then((data) => {
            setInfo(data)
    })
}, [selected]);
    return info.anime ? (
    <main>
        <div>
            {info.anime.map((episode) => (
                <h2><Anime anime={episode}/></h2>
                // <h1>{episode.title}</h1>
                ))}
        </div>
    </main>
    ) : <h1>Loading...</h1>
}