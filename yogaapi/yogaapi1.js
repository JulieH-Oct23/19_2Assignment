
  const yogaCount = 48;
  let yogaDex = {};

window.onload = async function( ) {
    getPose(1);
}

  async function getPose(num) {
        let url='https://yoga-api-nzy4.onrender.com/v1/poses' + num.toString( );
        
        let res = await fetch(url);
        let pose = await res.json( );
        console.log(pose);

        let poseEnglishName = pose['english_name'];
        let poseSanskritName = pose['sanskrit_name'];
        let poseBenefits = benefits['pose_benefits'];
        let poseCue = cue['pose_description'];
        let poseVIdeo = video['url_video'];

  }

