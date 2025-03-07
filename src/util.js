
// Data for JavaScript Mastery YouTube channel
const googleApiKey = "AIzaSyAp6XiiBQ9k6OWs5Qi3JouIBfVGdent2uw";
const channelId = "UCmXmlB4-HJytD7wek0Uo97A";
const uploadsId = "UUmXmlB4-HJytD7wek0Uo97A";
const url =
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UUmXmlB4-HJytD7wek0Uo97A&key=AIzaSyAp6XiiBQ9k6OWs5Qi3JouIBfVGdent2uw";

// Data for MindForge YouTube channel
const realChannelId = "UCc9cl_GBZ0rQMDH_lMc0NNw";
const realUploadsId = "UUmXmlB4-HJytD7wek0Uo97A";
const realUrl = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=$UUmXmlB4-HJytD7wek0Uo97A&key=AIzaSyAp6XiiBQ9k6OWs5Qi3JouIBfVGdent2uw`;

useEffect(() => {
  async function fetchData() {
    try {
      const data = await fetch(realUrl);
      const result = await data.json();
      console.log("Result: ", result);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }
  fetchData();
}, []);
