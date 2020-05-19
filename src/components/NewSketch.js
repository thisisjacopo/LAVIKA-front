import React from 'react';
import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
//import './../lib/P5-Speech'
//import './../lib/Sound'
//import './../lib/P5-Speech'
//import './../lib/rita-full'

//import P5ReactAdapter from '../constants/P5ReactAdapter'

//const actioncable = require("actioncable")

class NewSketch extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

    }

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.myRef.current)
    }

    sketch = (p) => {

        let cnv = null

        let hh, k, s, hPhrase, hPat, drums, arrOfSin, mic, input1, button1, lexicon, speakButton, recordButton;
        let recorder, soundFile, o1, o2, o3, o4, o5, o6, kPat, sPat, o1Pat, o2Pat, o3Pat, o4Pat, o5Pat, o6Pat;
        let kPhrase, sPhrase, o1Phrase, o2Phrase, o3Phrase, o4Phrase, o5Phrase, o6Phrase, bpmCtr, i, ki, sn;

        let state = 0;
        //deleted array of words to replace Chevrolet

        //let poem = ''

        //let wordsSeparated = []
        //let mainInfo = document.getElementById('mainInfo')
        //let myVoice = new p5.Speech()
        //let x = 0.2
        //let noiseScale = 0.02;
        //let inx = 0;

        //perDist per instrument
        let perDist = [0, 0, 0, 0, 0, 1]
        let perDistKick = [0, 0, 0, 1, 1, 1]
        let perDistSnare = [0, 0, 0, 0, 0, 0, 0, 1]

        p.touchStarted = () => {
            p.userStartAudio()
        }

        p.setup = () => {

            //p.getAudioContext().suspend()

            // CANVAS 
            cnv = p.createCanvas(700, 700)
            cnv.mousePressed(p.addIns)
            cnv.parent('#ccc')
            // MIC SETUP
            mic = new p5.AudioIn();
            mic.start();

            ///  speach button
            // speakButton = p.createButton('speak')
            // speakButton.mousePressed(p.speakWords)
            // speakButton.parent('#bcc')

            // get data buton
            // let getArticleBtn = p.createButton('get data')
            // getArticleBtn.mousePressed(p.getArticle)
            // getArticleBtn.parent('#bcc')
            //record Setup

            recordButton = p.createButton('record')
            recordButton.mousePressed(p.recordSong)
            recorder = new p5.SoundRecorder();
            recorder.setInput(mic);
            soundFile = new p5.SoundFile();
            recordButton.parent('#bcc')
            // LOADINg SOUNDS

            hh = p.loadSound('/samples/hh.wav', () => {
                drums.loop()
            })
            k = p.loadSound('/samples/k.wav', () => {
                drums.loop()
            })
            s = p.loadSound('/samples/s.wav', () => {
                drums.loop()
            })
            o1 = p.loadSound('/samples/o1.wav', () => {
                drums.loop()
            })
            o2 = p.loadSound('/samples/o2.wav', () => {
                drums.loop()
            })
            o3 = p.loadSound('/samples/o3.wav', () => {
                drums.loop()
            })
            o4 = p.loadSound('/samples/o4.wav', () => {
                drums.loop()
            })
            o5 = p.loadSound('/samples/o5.wav', () => {
                drums.loop()
            })
            o6 = p.loadSound('/samples/o6.wav', () => {
                drums.loop()
            })

            // PATTERNS

            hPat = [1, 0, 1, 0]
            kPat = [1, 0, 1, 0]
            sPat = [0, 0, 0, 1]
            o1Pat = [0, 0, 0, 0]
            o2Pat = [0, 0, 0, 0]
            o3Pat = [0, 0, 0, 0]
            o4Pat = [0, 0, 0, 0]
            o5Pat = [0, 0, 0, 0]
            o6Pat = [0, 0, 0, 0]

            arrOfSin = [o1Pat, o2Pat, o3Pat, o4Pat, o5Pat, o6Pat]

            // PHRASES
            hPhrase = new p5.Phrase('hh', (time) => {
                hh.play(time)
            }, hPat)
            kPhrase = new p5.Phrase('k', (time) => {
                k.play(time)
            }, kPat)
            sPhrase = new p5.Phrase('s', (time) => {
                s.play(time)
            }, sPat)
            o1Phrase = new p5.Phrase('o1', (time) => {
                o1.play(time)
            }, o1Pat)
            o2Phrase = new p5.Phrase('o2', (time) => {
                o2.play(time)
            }, o2Pat)
            o3Phrase = new p5.Phrase('o3', (time) => {
                o3.play(time)
            }, o3Pat)
            o4Phrase = new p5.Phrase('o4', (time) => {
                o4.play(time)
            }, o4Pat)
            o5Phrase = new p5.Phrase('o5', (time) => {
                o5.play(time)
            }, o5Pat)
            o6Phrase = new p5.Phrase('o6', (time) => {
                o6.play(time)
            }, o6Pat)

            // ADDINg PHRASES
            drums = new p5.Part()
            drums.addPhrase(hPhrase)
            drums.addPhrase(sPhrase)
            drums.addPhrase(kPhrase)
            drums.addPhrase(o1Phrase)
            drums.addPhrase(o2Phrase)
            drums.addPhrase(o3Phrase)
            drums.addPhrase(o4Phrase)
            drums.addPhrase(o5Phrase)
            drums.addPhrase(o6Phrase)

            // SET BPM

            bpmCtr = p.createSlider(30, 140, 60, 1)
            bpmCtr.input(() => {
                drums.setBPM(bpmCtr.value())
            })
            drums.setBPM('60')

            bpmCtr.parent('#bcc')
            ////////////////////////


            // lexicon = new p5.RiLexicon()
            // input1 = p.createInput("there was a blissy day");
            // button1 = p.createButton("submit");
            // button1.mousePressed(p.processRita)
            // input1.size(200)

            // input1.parent('#bcc')
            // button1.parent('#bcc')
        }

        p.addIns = () => {
            let chosen = p.random(arrOfSin)
            i = p.floor(p.random(perDist))
            let ranC = p.random(255)
            ki = p.floor(p.random(perDistKick))
            sn = p.floor(p.random(perDistSnare))
            if (p.mouseX < p.width / 2 && p.mouseY < p.height / 2) { // Left - Up -- Hh
                p.fill(123, 12, 234)
                p.ellipse(p.mouseX, p.mouseY, p.ranC, p.ranC)
                hPat.push(i)
                console.log(`h added ${hPat}`);
            } else if (p.mouseX > p.width / 2 && p.mouseY < p.height / 2) { // Right - Up -- Kick
                p.fill(23, 212, 134)
                p.ellipse(p.mouseX, p.mouseY, ranC, ranC)
                kPat.push(ki)
                console.log(`k added ${kPat}`);
            } else if (p.mouseX < p.width / 2 && p.mouseY > p.height / 2) { // Left - Down - Snare
                p.fill(223, 12, 134)
                p.ellipse(p.mouseX, p.mouseY, ranC, ranC)
                sPat.push(sn)
                console.log(`s added ${sPat}`);
            } else if (p.mouseX > p.width / 2 && p.mouseY > p.height / 2) { // right - Down - synths
                p.fill(223, 222, 34)
                p.ellipse(p.mouseX, p.mouseY, p.ranC, p.ranC)
                chosen.push(i)
                console.log(`sint added ${chosen}`);
            }
        }

        p.keyPressed = () => {
            if (p.key === "º") {
                if (hh.isLoaded() && k.isLoaded() && s.isLoaded()) {
                    if (!drums.isPlaying) {
                        drums.loop()
                    } else {
                        drums.pause()
                    }
                }
            }
        }

        p.draw = () => {

            p.frameRate(17);
            // get the overall volume (between 0 and 1.0)
            let vol = mic.getLevel() * 25;
            p.fill(0);
            p.noStroke();
            p.smooth()
            // Draw an ellipse with height based on volume
            let h = p.map(vol, 0, 1, p.random(1233), 0);
            p.ellipse((p.width / 1.2) * vol, h - 25, vol * 400, vol * 400);
            drawPointy(100);
            drawPointy(10);
            drawArc();
            p.background(vol * 30, 7);

            function drawPointy(weigh) {
                p.stroke(vol * 200);
                p.smooth()
                p.strokeWeight(p.random(weigh));
                p.point(p.random(p.height * 1.6), p.random(p.width * 1.6));
            }

            function drawArc() {
                p.arc(p.random(2000), p.random(2000), vol * 200, vol * 444, vol * 444, p.HALF_PI);
                p.fill(p.random());
                p.noStroke();
                p.arc(p.random(vol * 2000), p.random(400), vol * 444, vol * 444, p.HALF_PI, p.PI);
                p.arc(vol * 4400, p.random(300), 700, 70, p.PI, p.PI + p.QUARTER_PI);
                p.arc(vol * 444, vol * 444, vol * 444, vol * 444, p.PI + p.QUARTER_PI, p.TWO_PI);
            }
        }

        // p.processRita = () => {
        //     let s = input1.value()
        //     let rs = new p5.RiString(s)
        //     let words = rs.words()
        //     let pos = rs.pos()

        //     let result = ' '
        //     for (let i = 0; i < words.length; i++) {
        //         let word = words[i]
        //         if (/nn.*/.test(pos[i])) {
        //             word = lexicon.randomWord(pos[i])
        //             if (word === 'chevrolet') {
        //                 word = p.random(nouns)
        //             }
        //         }
        //         result += word
        //         result += '  '
        //     }
        //     p.createP(result)
        // }

        // const getArticle = async () => {
        //     poem = ''
        //     articleRaw = `http://poetrydb.org//author/emerson`
        //     const response = await fetch(articleRaw);
        //     const article1 = await response.json();
        //     let lines = random(article1).lines
        //     lines.forEach(x => poem += x)
        //     let rs = new RiString(poem)
        //     let words = rs.words()
        //     let pos = rs.pos()

        //     let result = ' '
        //     for (let i = 0; i < words.length; i++) {
        //         let word = words[i]
        //         if (/nn.*/.test(pos[i])) {
        //             word = lexicon.randomWord(pos[i])
        //             if (word === 'chevrolet') {
        //                 word = random(nouns)
        //             }
        //         }
        //         result += word
        //         result += '  '
        //     }
        //     let parr = createP(result)
        //     parr.id('parr')

        //     wordsSeparated = RiTa.tokenize(result)

        // };

        // p.speakWords = () => {

        //     myVoice.setVoice('Zarvox');
        //     setInterval(() => {
        //         myVoice.speak(wordsSeparated[inx]);
        //         inx = (inx + 1) % wordsSeparated.length; // increment
        //     }, 1000);

        // }

        p.recordSong = () => {

            if (state === 0 && mic.enabled) {
                recorder.record(soundFile);
                p.background(190, 0, 40);
                p.text('Recording!', p.width / 2, p.height / 2);
                state++;
            } else if (state === 1) {
                p.background(30, 155, 0); // Change 4 better colors
                recorder.stop();
                state++;
            } else if (state === 2) {
                //soundFile.play(); // play the result! // TRY FETCH TO SERVER OR TO CLOUDINARY!
                p.save(soundFile, 'mySong.wav');
                state++;

            }
        }
    }

    render() {
        return ( <div id = "canvas" className = "canvas" ref = {this.myRef}/>)
    }
}


export default NewSketch