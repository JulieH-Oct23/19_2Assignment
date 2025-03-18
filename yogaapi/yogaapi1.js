
  const yogaCount = 1;
  let poses  = null;
  let yogaDex = {};

window.onload = async function( ) {
      poses = await getPoses()
      //console.log(poses)

      const poseSel = document.getElementById('indvPose')
      poses.forEach(pose => {
        let option = document.createElement('option')
        option.value = pose.id
        option.text = pose['english_name']
        poseSel.appendChild(option)
      });
};

function test(event) {
  setPoseName(event.target.value)
}

function setPoseName(id) {
  console.log(poses)
  const pose = poses.find(p => p.id === parseInt(id))
  const poseEnglishNameLabel = document.getElementById('english_pose_name')
  poseEnglishNameLabel.innerHTML = pose['english_name']
  console.log(pose)
}

async function getPoses() {
  let url = "https://yoga-api-nzy4.onrender.com/v1";
        let res = await fetch(url);
        let yogaApi = await res.json( );
        
        let poseRes = await fetch(yogaApi.poses);
        poses = await poseRes.json( );
        return poses
}

  async function getYoga() {
        let url = "https://yoga-api-nzy4.onrender.com/v1";
        
        let res = await fetch(url);
        let yogaApi = await res.json( );
        console.log(yogaApi)
    
        // let englishName = yogaApi['english_name'];
        // let sanskritName = yogaApi['sanskrit_name'];
        // let poseBenefits = yogaApi['pose_benefits'];
        // let poseDescription = yogaApi['pose_description'];
        // let translationName = yogaApi['translation_name'];
        
        
        let poseRes = await fetch(yogaApi.poses);
        poses = await poseRes.json( );
        console.log(poses);

        // yogaDex[num] = { "english_name": englishName, 'sanskrit_name': sanskritName, "pose_benefits": poseBenefits, "pose_description": poseDescription, "translation_name": translationName}
  }

  console.log(poses)


  function setPoseName(id) {
    console.log(poses)
    const pose = poses.find(p => p.id === parseInt(id))
    const poseEnglishNameLabel = document.getElementById('english_pose_name')
    poseEnglishNameLabel.innerHTML = pose['english_name']
    console.log(pose)
  }