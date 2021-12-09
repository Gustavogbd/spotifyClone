import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import useSpotify from "../hooks/useSpotify";

function Player() {

    const spotifyApi = useSpotify();
    const { data: sessio, status } = useSession();
    const [currentTrackId, setCurrentIdTrack] = useRecoilState(currentTrackIdState);
    const [isPlaying, setIsplaying] = useRecoilState(isPlayingState);
    const [volume, setVolume] = useState(50);

    return (
        <div>
            <div>
                <img src="" alt=""></img>
            </div>
        </div>
    )
}

export default Player
