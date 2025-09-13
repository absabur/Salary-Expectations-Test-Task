const YtVideoAutoPlay = ({ url }) => {
  return (
    <iframe
      className="w-full h-full rounded-lg"
      src={`https://www.youtube.com/embed/${getYouTubeID(
        url
      )}?autoplay=1&mute=1`}
      title="YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default YtVideoAutoPlay;

function getYouTubeID(url) {
  const regExp =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url?.match(regExp);
  return match ? match[1] : null;
}
