import React from "react";
import memedata from "../memedata";
let topText= document.querySelector(".topText")
let bottomText= document.getElementsByClassName("bottomText")
export default function MainContent(props)
{
const [imageSource,changeImagesrc]= React.useState({
  bottomText:"",
  topText:"",
  imgsrc:"../images/picture.png",
  select:"black"})

function handleclick(event)
{
    event.preventDefault()
    let  index= memedata.data.memes.length-1;
    index= Math.floor(Math.random()*index)
  changeImagesrc((prevdata)=>{
    return {...prevdata ,imgsrc:memedata.data.memes[index].url}})
}
function handleinput(event)
{
  const {name,value}=event.target
 
changeImagesrc((prevState)=>{
return {...prevState,[name]:value}

})
}
let fontcolor= {color:imageSource.select}
return (
<div className="middle">
<div className="inputs">

<input type="text"   name="topText" value={imageSource.topText} onChange={handleinput} placeholder="Top Text"/>
<input type="text" name="bottomText" value={imageSource.bottomText} onChange={handleinput} placeholder="Bottom Text"/>
<div className="selectcolor">
<label htmlFor="select">Font Color</label>
<select name="select" id="select" value={imageSource.select}  onChange={handleinput}> 

<option value="white">white</option>
  <option value="black" >black</option>
  <option value="yellow">yellow</option>
  <option value="blue" >blue</option>
   </select>
   </div>
</div>

<form>
<button onClick={ handleclick}>Get a new Meme Image <img className="btnimage"src="../images/picture.png"/></button>
</form>
<div className="memeImage">
<h2 className="topText"  style={fontcolor}>{imageSource.topText}</h2>
 <img src={imageSource.imgsrc} />
 <h2  className="bottomText"  style={fontcolor}>{imageSource.bottomText}</h2>
 </div>
</div>
)


}