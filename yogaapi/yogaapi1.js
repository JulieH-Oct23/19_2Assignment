
  const yogaCount = 48;
  let yogaDex = {};

window.onload = async function( ) {
    getYoga(1);
}

  async function getYoga(num) {
        let url = "https://yoga-api-nzy4.onrender.com/v1/poses/"
        
        let res = await fetch(url);
        let yoga = await res.json( );
        console.log(yoga);

        let englishName = yoga['english_name'];
        let sanskritName = yoga['sanskrit_name'];
        let benefits = yoga['pose_benefits'];
        let cue = yoga['pose_description'];
        let meaning = yoga['translation_name'];
        let yogaImage = yoga['url_png'];

        res = await fetch(yoga['english_name'],['sanskrit_name']);
        let yogaDesc = await res.json();
        console.log(yogaDesc);
  }
