
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

        let yogaName = yoga['english_name'];
        let sanskritName = yoga['sanskrit_name'];
        let yogaBenefits = yoga['pose_benefits'];
        let yogaCue = yoga['pose_description'];
        let yogaMeaning = yoga['translation_name'];
        // let yogaImg = yoga['url_png']['url_svg']['url_svg_alt'];

        res = await fetch(yoga['english_name']);
        let yogaDesc = await res.json();

        yogaDex[1] = {"english_name": yogaName, 'sanskrit_name': sanskritName, "pose_benefits": yogaBenefits, "pose_description": yogaCue, "translation_name": yogaMeaning}

     
  }
