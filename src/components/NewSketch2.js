import React from "react";
import p5 from "p5";
import "p5/lib/addons/p5.sound";
import "p5/lib/addons/p5.dom";
import hhSound from "../samples/samples2/hh.wav";
import kSound from "../samples/samples2/k.wav";
import o1Sound from "../samples/samples2/o1.wav";
import o2Sound from "../samples/samples2/o2.wav";
import o3Sound from "../samples/samples2/o3.wav";
import o4Sound from "../samples/samples2/o4.wav";
import o5Sound from "../samples/samples2/o5.wav";
import o6Sound from "../samples/samples2/o6.wav";
import sSound from "../samples/samples2/s.wav";
import rita from "rita";
import styled from "styled-components";
import { Device } from "../components/Device";
import axios from 'axios'
import { withAuth } from "../lib/Auth";


let scene = {
  canvas: 1,
  name: '',
  strokeR: '',
  strokeG: '' ,
  strokeB: '',
  capture: '',
  bpm: '60',
  
  patterns: {
    hPat: [1, 0, 1, 0],
    kPat: [1, 0, 1, 0],
    sPat: [0, 0, 0, 1],

    o1Pat: [0, 0, 0, 0], 
    o2Pat: [0, 0, 0, 0],
    o3Pat: [0, 0, 0, 0],
    o4Pat: [0, 0, 0, 0],
    o5Pat: [0, 0, 0, 0],
    o6Pat: [0, 0, 0, 0]
  }
 }
class NewSketch2 extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isLoading: true,
      save: false,
      showControls: false,
    };
  }

  componentDidMount() {
    this.myP5 = new p5(this.sketch, this.myRef.current);
  }
  componentDidUpdate() {
    this.canvas.remove();
    this.drums.pause();
    this.mic.stop();
    this.playButton.remove();
    if (this.parr !== undefined) {
      this.parr.remove();
    }
    this.myP5 = new p5(this.sketch, this.myRef.current);
  }

  sketch = (p) => {
    const self = this;

    
    let cnv = null;
    let nouns = [
      "actor",
      "gold",
      "Painting",
      "advertisement",
      "grass",
      "Parrot",
      "afternoon",
      "greece",
      "Pencil",
      "airport",
      "guitar",
      "Piano",
      "ambulance",
      "Hair",
      "Pillow",
      "animal",
      "Hamburger",
      "Pizza",
      "answer",
      "Helicopter",
      "Planet",
      "apple",
      "Helmet",
      "Plastic",
      "army",
      "Holiday",
      "Portugal",
      "australia",
      "Honey",
      "Potato",
      "Balloon",
      "Horse",
      "Queen",
      "Banana",
      "Hospital",
      "Quill",
      "Battery",
      "House",
      "Rain",
      "Beach",
      "Hydrogen",
      "Rainbow",
      "Beard",
      "Ice",
      "Raincoat",
      "Bed",
      "Insect",
      "Refrigerator",
      "Belgium",
      "Insurance",
      "Restaurant",
      "Boy",
      "Iron",
      "River",
      "Branch",
      "Island",
      "Rocket",
      "Breakfast",
      "Jackal",
      "Room",
      "Brother",
      "Jelly",
      "Rose",
      "Camera",
      "Jewellery",
      "Russia",
      "Candle",
      "Jordan",
      "Sandwich",
      "Car",
      "Juice",
      "School",
      "Caravan",
      "Kangaroo",
      "Scooter",
      "Carpet",
      "King",
      "Shampoo",
      "Cartoon",
      "Kitchen",
      "Shoe",
      "China",
      "Kite",
      "Soccer",
      "Church",
      "Knife",
      "Spoon",
      "Crayon",
      "Lamp",
      "Stone",
      "Crowd",
      "Lawyer",
      "Sugar",
      "Daughter",
      "Leather",
      "Sweden",
      "Death",
      "Library",
      "Teacher",
      "Denmark",
      "Lighter",
      "Telephone",
      "Diamond",
      "Lion",
      "Television",
      "Dinner",
      "Lizard",
      "Tent",
      "Disease",
      "Lock",
      "Thailand",
      "Doctor",
      "London",
      "Tomato",
      "Dog",
      "Lunch",
      "Toothbrush",
      "Dream",
      "Machine",
      "Traffic",
      "Dress",
      "Magazine",
      "Train",
      "Easter",
      "Magician",
      "Truck",
      "Egg",
      "Manchester",
      "Uganda",
      "Eggplant",
      "Market",
      "Umbrella",
      "Egypt",
      "Match",
      "Van",
      "Elephant",
      "Microphone",
      "Vase",
      "Energy",
      "Monkey",
      "Vegetable",
      "Engine",
      "Morning",
      "Vulture",
      "England",
      "Motorcycle",
      "Wall",
      "Evening",
      "Nail",
      "Whale",
      "Eye",
      "Napkin",
      "Window",
      "Family",
      "Needle",
      "Wire",
      "Finland",
      "Nest",
      "Xylophone",
      "Fish",
      "Nigeria",
      "Yacht",
      "Flag",
      "Night",
      "Yak",
      "Flower",
      "Notebook",
      "Zebra",
      "Football",
      "Ocean",
      "Zoo",
      "Forest",
      "Oil",
      "garden",
      "Fountain",
      "Orange",
      "gas",
      "France",
      "Oxygen",
      "girl",
      "Furniture",
      "Oyster",
      "glass",
      "garage",
      "ghost",
    ];
    
    self.nouns = nouns
    let hh, k, s, hPhrase, hPat, drums, arrOfSin, mic, recordButton;
    let recorder,
      soundFile,
      o1,
      o2,
      o3,
      o4,
      o5,
      o6,
      kPat,
      sPat,
      o1Pat,
      o2Pat,
      o3Pat,
      o4Pat,
      o5Pat,
      o6Pat;
    let kPhrase,
      sPhrase,
      o1Phrase,
      o2Phrase,
      o3Phrase,
      o4Phrase,
      o5Phrase,
      o6Phrase,
      bpmCtr,
      strokeR,
      strokeG,
      strokeB,
      i,
      ki,
      sn;

    let alphaStroke, betaStroke;
    let state = 0;
    let yoff = 0.0; 
    let offset = 0
    //deleted array of words to replace Chevrolet

    //perDist per instrument
    let perDist = [0, 0, 0, 0, 0, 1];
    let perDistKick = [0, 0, 0, 1, 1, 1];
    let perDistSnare = [0, 0, 0, 0, 0, 0, 0, 1];

    // p.touchStarted = () => {
    //   p.userStartAudio();
    // };

    p.startAudio = () => {
      p.userStartAudio(); 
    }

    let playButton = p.createButton('play')
    playButton.parent('#sketchContainer')
    playButton.mousePressed(p.startAudio)
    self.playButton = playButton

    let xoff = 0.0;


    p.setup = () => {
      p.getAudioContext().suspend();

      // CANVAS
      cnv = p.createCanvas(500, 500);
      self.canvas = cnv;
      cnv.mousePressed(p.addIns);
      cnv.parent("#sketchContainer");
      // MIC SETUP
      mic = new p5.AudioIn();
      mic.start();
      self.mic = mic;
      
    
      // get data buton
      let getArticleBtn = p.createButton("Get Random Lyric");
      getArticleBtn.mousePressed(getArticle);
      getArticleBtn.parent("#lyricContainer");
      self.getArticleBtn = getArticleBtn;
      //record Setup

      recordButton = p.createButton("record");
      recordButton.parent("#controlsContainer");
      recordButton.mousePressed(p.recordSong);

      recorder = new p5.SoundRecorder();
      recorder.setInput(mic);
      soundFile = new p5.SoundFile();

      // LOADINg SOUNDS

      hh = p.loadSound(hhSound, () => {
        drums.loop();
      });
      k = p.loadSound(kSound, () => {
        drums.loop();
      });
      s = p.loadSound(sSound, () => {
        drums.loop();
      });
      o1 = p.loadSound(o1Sound, () => {
        drums.loop();
      });
      o2 = p.loadSound(o2Sound, () => {
        drums.loop();
      });
      o3 = p.loadSound(o3Sound, () => {
        drums.loop();
      });
      o4 = p.loadSound(o4Sound, () => {
        drums.loop();
      });
      o5 = p.loadSound(o5Sound, () => {
        drums.loop();
      });
      o6 = p.loadSound(o6Sound, () => {
        drums.loop();
      });

      // PATTERNS
      if(self.props.scene) { 
        const {hPat:hp, kPat:kp, sPat:sp,o1Pat:o1p, o2Pat:o2p, o3Pat:o3p, o4Pat:o4p, o5Pat:o5p, o6Pat:o6p} = self.props.scene.patterns

        hPat = hp
        kPat = kp
        sPat = sp
        
        o1Pat =  o1p
        o2Pat = o2p
        o3Pat = o3p
        o4Pat =  o4p
        o5Pat = o5p
        o6Pat = o6p
  
      }else{
        hPat = [1, 0, 1, 0];
        kPat = [1, 0, 1, 0];
        sPat = [0, 0, 0, 1];

        o1Pat = [0, 0, 0, 0];
        o2Pat = [0, 0, 0, 0];
        o3Pat = [0, 0, 0, 0];
        o4Pat = [0, 0, 0, 0];
        o5Pat = [0, 0, 0, 0];
        o6Pat = [0, 0, 0, 0];

      }
   
      arrOfSin = [o1Pat, o2Pat, o3Pat, o4Pat, o5Pat, o6Pat];
      

      // PHRASES
      hPhrase = new p5.Phrase(
        "hh",
        (time) => {
          hh.play(time);
        },
        hPat
      );
      kPhrase = new p5.Phrase(
        "k",
        (time) => {
          k.play(time);
        },
        kPat
      );
      sPhrase = new p5.Phrase(
        "s",
        (time) => {
          s.play(time);
        },
        sPat
      );
      o1Phrase = new p5.Phrase(
        "o1",
        (time) => {
          o1.play(time);
        },
        o1Pat
      );
      o2Phrase = new p5.Phrase(
        "o2",
        (time) => {
          o2.play(time);
        },
        o2Pat
      );
      o3Phrase = new p5.Phrase(
        "o3",
        (time) => {
          o3.play(time);
        },
        o3Pat
      );
      o4Phrase = new p5.Phrase(
        "o4",
        (time) => {
          o4.play(time);
        },
        o4Pat
      );
      o5Phrase = new p5.Phrase(
        "o5",
        (time) => {
          o5.play(time);
        },
        o5Pat
      );
      o6Phrase = new p5.Phrase(
        "o6",
        (time) => {
          o6.play(time);
        },
        o6Pat
      );

      // ADDINg PHRASES
      drums = new p5.Part();
      self.drums = drums;
      drums.addPhrase(hPhrase);
      drums.addPhrase(sPhrase);
      drums.addPhrase(kPhrase);
      drums.addPhrase(o1Phrase);
      drums.addPhrase(o2Phrase);
      drums.addPhrase(o3Phrase);
      drums.addPhrase(o4Phrase);
      drums.addPhrase(o5Phrase);
      drums.addPhrase(o6Phrase);

      // SET BPM

      bpmCtr = p.createSlider(30, 140, this.props.scene.bpm || 60, 1);
      bpmCtr.parent("#controlsContainer");

      bpmCtr.input(() => {
        drums.setBPM(bpmCtr.value());
      });
      if(this.props.scene.bpm !== undefined){

        drums.setBPM(this.props.scene.bpm );
      } else {
        drums.setBPM('60')
      }
      ////////////////////////new sliders

      if(self.props.scene) {
      let {strokeR: rValue, strokeG: gValue, strokeB: bValue, alphaStroke: alphaValue, betaStroke: betaValue} = this.props.scene

      //R
      strokeR = p.createSlider(0, 250, rValue , 1)
      strokeR.parent("#controlsContainer")
      //strokeR.id('red')

      //G
      strokeG = p.createSlider(0, 250, bValue, 1)
      strokeG.parent("#controlsContainer")
      //strokeG.id('green')

      //B
      strokeB = p.createSlider(0, 250, gValue, 1)
      strokeB.parent("#controlsContainer")
      //strokeB.class('blue')
      
      alphaStroke = p.createSlider(0, 2550, alphaValue, 1)
      alphaStroke.parent("#controlsContainer")
     

      betaStroke = p.createSlider(0, 2500, betaValue, 1)
      betaStroke.parent("#controlsContainer")
     
      

      } else {
      //R
      strokeR = p.createSlider(0, 250, 255, 1)
      strokeR.parent("#controlsContainer")
      //strokeR.id('red')

      //G
      strokeG = p.createSlider(0, 250, 0, 1)
      strokeG.parent("#controlsContainer")
      //strokeG.id('green')

      //B
      strokeB = p.createSlider(0, 250, 255, 1)
      strokeB.parent("#controlsContainer")
      //strokeB.class('blue')
      alphaStroke = p.createSlider(0, 2550, 60, 1)
      alphaStroke.parent("#controlsContainer")
     

      betaStroke = p.createSlider(0, 2500, 70, 1)
      betaStroke.parent("#controlsContainer")
     
      }
      
      p.background(255, 165, 0)
    };

    p.addIns = () => {
      
      

      let chosen = p.random(arrOfSin);
      i = p.floor(p.random(perDist));
      let ranC = p.random(255); // piks a random value between 0 and 255
      ki = p.floor(p.random(perDistKick));
      sn = p.floor(p.random(perDistSnare));
      if (p.mouseX < p.width / 2 && p.mouseY < p.height / 2) {
        // Left - Up -- Hh
        p.fill(strokeR.value(), strokeG.value() / 4, this.vol * strokeB.value()/2); // fills the color of the ellipse
        p.ellipse(p.mouseX, p.mouseY, ranC, ranC); //
        hPat.push(i);
        console.log(`h added ${hPat}`);
      } else if (p.mouseX > p.width / 2 && p.mouseY < p.height / 2) {
        // Right - Up -- Kick
        p.fill(this.vol * strokeR.value() / 6, strokeG.value(), this.vol * strokeB.value()/2);
        p.ellipse(p.mouseX, p.mouseY, ranC, ranC);
        kPat.push(ki);
        console.log(`k added ${kPat}`);
      } else if (p.mouseX < p.width / 2 && p.mouseY > p.height / 2) {
        // Left - Down - Snare
        p.fill(this.vol * strokeR.value() / 2, this.vol * strokeG.value(), strokeB.value());
        p.ellipse(p.mouseX, p.mouseY, ranC, ranC);
        sPat.push(sn);
        console.log(`s added ${sPat}`);
      } else if (p.mouseX > p.width / 2 && p.mouseY > p.height / 2) {
        // right - Down - synths
        p.fill(this.vol * strokeR.value(), this.vol * strokeG.value() / 4, strokeB.value()/2);
        p.ellipse(p.mouseX, p.mouseY, ranC, ranC);
        chosen.push(i);
        console.log(`sint added ${chosen}`);
      }
      const [o1Pat, o2Pat, o3Pat, o4Pat, o5Pat, o6Pat] = arrOfSin

      scene.patterns = {
        hPat,
        kPat,
        sPat,
        o1Pat, 
        o2Pat, 
        o3Pat, 
        o4Pat, 
        o5Pat, 
        o6Pat
      }
    };

    p.keyPressed = () => {
      if (p.key === "º") {
        if (hh.isLoaded() && k.isLoaded() && s.isLoaded()) {
          if (!drums.isPlaying) {
            drums.loop();
          } else {
            drums.pause();
          }
        }
      }
    };

    p.draw = () => {
      scene.strokeR = strokeR.value()
      scene.strokeG = strokeG.value()
      scene.strokeB = strokeB.value()
      scene.alphaStroke = alphaStroke.value()
      scene.betaStroke = betaStroke.value()
      scene.bpm = bpmCtr.value()

      if (!self.state.isLoading) {
        self.setState({
          isLoading: false,
        });
      } else {

        let vol = mic.getLevel() * strokeG.value()*100;

        p.background(vol * 2, 255, vol, 0.1);
        p.noStroke()
        p.smooth()
        let r = p.random(strokeR.value())
        p.fill((vol * betaStroke.value() / 40) % 255, (vol* betaStroke.value() / 500) - 60, ((vol * 2) + 40), r);
        let xoff = 0;
        for (let x = 0; x <= strokeB.value(); x += 1) {
          let y = p.map(p.noise(xoff, yoff), 0, 1, 20, 300);
          p.vertex(x, y);
          xoff += 0.01 + (betaStroke.value()/1000);
          p.ellipse(y + (vol / 2) * xoff * 2, y + (vol / alphaStroke.value()), y - (vol), y - vol * 13)


        }

        yoff += 0.01;
 
      }
    };

    const getArticle = async () => {
      let poem = "";
      let articleRaw = `https://newsapi.org/v2/everything?q=music&apiKey=adb3c70aeb8d496d9fd30a6d53b05fce`;
      const response = await fetch(articleRaw);
      const article1 = await response.json();
      const ranInd = Math.floor(Math.random() * article1.articles.length)
      let newLines = article1.articles[ranInd].content
      // let lines = p.random(newLines).lines;
      // lines.forEach((x) => (poem += x));
      let rs = new rita.RiString(newLines);
      let words = rs.words();
      let pos = rs.pos();
      this.getArticleBtn.remove();

      let result = " ";
      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (/nn.*/.test(pos[i])) {
          word = rita.lexicon.randomWord(pos[i]);
          if (word === "chevrolet") {
            word = p.random(nouns);
          }
        }
        result += word;
        result += "  ";
      }

      //self makes variable available in the global scope of the addClass
      //parr is div where random lyric is created
      let newResult = result.slice(0, 950);
      let parr = p.createP(newResult);
      self.parr = parr;
      parr.id("parr");
      parr.parent("#lyricContainer");
      // let wordsSeparated = []
      // wordsSeparated = rita.tokenize(result)
    };
    
    

    p.recordSong = () => {
      if (state === 0 && mic.enabled) {
        recorder.record(soundFile);
        p.background(190, 0, 40);
        p.text("Recording!", p.width / 2, p.height / 2);
        state++;
      } else if (state === 1) {
        p.background(30, 155, 0); // Change 4 better colors
        recorder.stop();
        state++;
      } else if (state === 2) {
        //soundFile.play(); // play the result! // TRY FETCH TO SERVER OR TO CLOUDINARY!
        p.save(soundFile, "mySong.wav");
        state++;
      }
    };

    p.saveTheFrame = async ()=>{

      p.saveFrames('out', 'png', 1, 1, data => {
        scene.capture = data[0].imageData 
  
        axios.post(process.env.REACT_APP_API_URL + '/scenes/save', scene, { withCredentials: true })
        .then(res => {
          console.log(res);
          // here you would redirect to some other page 
          this.props.savedSceneMessage('saved')
        })
        .catch(err => {
          console.log("Error while adding the thing: ", err);
      });
  
      });
    }
      self.saveTheFrame = p.saveTheFrame
    };

  componentWillUnmount() {
    this.canvas.remove();
    this.drums.pause();
    this.mic.stop();
    this.playButton.remove();
    if (this.parr !== undefined) {
      this.parr.remove();
    }
  }

  saveScene = async () => {

    const ranInd = Math.floor(Math.random() * this.nouns.length)
    let ranName = this.nouns[ranInd] +' '+ this.nouns[ranInd-1] 
    scene.name = ranName 
    await this.saveTheFrame()
    //this.setState({saved:true})
    // setTimeout( () => this.setState({saved:false}), 2000 )
  }
  updateScene = async () => {
    scene.capture = this.props.scene.capture
    scene.name = this.props.scene.name
    scene.sceneId = this.props.scene._id

    axios.put(process.env.REACT_APP_API_URL + '/scenes/update', scene, { withCredentials: true })
    .then(res => {
      console.log(res);
      this.props.savedSceneMessage('updated')
    })
    .catch(err => {
      console.log("Error while adding the thing: ", err);
  });
   
  }

  toggleControls=()=>{
    this.setState({showControls: !this.state.showControls})
  }

  isTheArtist=()=>{
    if (this.props.scene){
      return this.props.scene.user === this.props.user._id
    } else{
      return false
    }
  }

  render() {
    const MainDiv = styled.div`
    @media ${Device.laptop} {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding: 0 auto;
      min-height: 80vh;
    }
    @media ${Device.tablet} {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 0 0.5%;
    }
    @media ${Device.mobile} {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 0;
      align-items: center;
    }
  `;

  const LyricContainer = styled.div`
    @media ${Device.laptop} {
      display: flex;
      flex-flow: column;
      font-family: courier;
      color: white;
      justify-content: space-around;
      align-items: center;
      max-width: 25%;
      min-width: 25%;
      margin-top: 10%;
      max-height: 400px;
      overflow-y: scroll;
    }
    @media ${Device.tablet} {
      width: 100%;
      background-color: blue;
    }
    @media ${Device.mobile} {
      width: 100%;
      background-color: yellow;
    }
  `;

  const SketchContainer = styled.div`
    @media ${Device.laptop} {
      display: flex;
      flex-flow: column-reverse;
      justify-content: flex-end;
      align-items: center;
      max-width: 40%;
      min-width: 40%;
    }
    @media ${Device.tablet} {
      width: 100%;
      background-color: blue;
    }
    @media ${Device.mobile} {
      width: 100%;
      background-color: yellow;
    }
  `;

  const ControlsContainer = styled.div`
    @media ${Device.laptop} {
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      margin-top: 10%;
      align-items: center;
      max-width: 25%;
      min-width: 25%;
      padding-right: 25px;
      max-height: 50vh;
    }
    @media ${Device.tablet} {
      width: 100%;
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      align-items: center;
      max-width: 97.5%;
      min-width: 97.5%;
    }
    @media ${Device.mobile} {
      max-width: 100%%;
      min-width: 100%%;
    }
  `;






   
    return (
      <>
         <MainDiv className="containerDiv">
          <LyricContainer className="lyricContainer" id="lyricContainer" />
          <SketchContainer className="sketchContainer" id="sketchContainer">
       {
         this.isTheArtist()
         ?  <button onClick={this.updateScene}>Update scene</button>
         : <button onClick={this.saveScene}>Save scene</button>
       }  
     
            
            </SketchContainer>

               <ControlsContainer
            className="controlsContainer"
            id="controlsContainer">
            </ControlsContainer>
         </MainDiv>
      </>
    );
  }
}

export default withAuth(NewSketch2);