const LiteYoutubePlayer = ({ videoId, className = "" }) => {
    return (
        <div className={`relative w-full max-w-[640px] aspect-video ${className}`}>
            <lite-youtube
                videoid={videoId}
                style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                }}
            ></lite-youtube>
        </div>
    );
};


export default LiteYoutubePlayer;
